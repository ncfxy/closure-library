/// <reference path="../disposable/Disposable" />
/// <reference path="../asserts/asserts" />
/// <reference path="../debug/debug" />
/// <reference path="../debug/entryPointRegistry" />
/// <reference path="../debug/Error" />
/// <reference path="../debug/Tracer" />
// Copyright 2007 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview Error handling utilities.
 *
 */
goog.provide('goog.debug.ErrorHandler');
goog.provide('goog.debug.ErrorHandler.ProtectedFunctionError');
goog.require('goog.Disposable');
goog.require('goog.asserts');
goog.require('goog.debug');
goog.require('goog.debug.EntryPointMonitor');
goog.require('goog.debug.Error');
goog.require('goog.debug.Trace');
var goog;
(function (goog) {
    var debug;
    (function (debug) {
        var ErrorHandler = /** @class */ (function (_super) {
            __extends(ErrorHandler, _super);
            /**
             * The ErrorHandler can be used to to wrap functions with a try/catch
             * statement. If an exception is thrown, the given error handler function will
             * be called.
             *
             * When this object is disposed, it will stop handling exceptions and tracing.
             * It will also try to restore window.setTimeout and window.setInterval
             * if it wrapped them. Notice that in the general case, it is not technically
             * possible to remove the wrapper, because functions have no knowledge of
             * what they have been assigned to. So the app is responsible for other
             * forms of unwrapping.
             *
             * @param {Function} handler Handler for exceptions.
             * @constructor
             * @extends {goog.Disposable}
             * @implements {goog.debug.EntryPointMonitor}
             */
            function ErrorHandler(handler) {
                var _this = 
                // goog.debug.ErrorHandler.base(this, 'constructor');
                _super.call(this) || this;
                /**
                 * Whether to add tracers when instrumenting entry points.
                 * @type {boolean}
                 * @private
                 */
                _this.addTracersToProtectedFunctions_ = false;
                /**
                 * Install exception protection for window.requestAnimationFrame to handle
                 * exceptions.
                 */
                _this.protectWindowRequestAnimationFrame = function () {
                    var win = goog.getObjectByName('window');
                    var fnNames = [
                        'requestAnimationFrame', 'mozRequestAnimationFrame', 'webkitAnimationFrame',
                        'msRequestAnimationFrame'
                    ];
                    for (var i = 0; i < fnNames.length; i++) {
                        var fnName = fnNames[i];
                        if (fnNames[i] in win) {
                            this.protectWindowFunctionsHelper_(fnName);
                        }
                    }
                };
                /**
                 * Handler for exceptions, which can do logging, reporting, etc.
                 * @type {Function}
                 * @private
                 */
                _this.errorHandlerFn_ = handler;
                /**
                 * Whether errors should be wrapped in
                 * goog.debug.ErrorHandler.ProtectedFunctionError before rethrowing.
                 * @type {boolean}
                 * @private
                 */
                _this.wrapErrors_ = true; // TODO(user) Change default.
                /**
                 * Whether to add a prefix to all error messages. The prefix is
                 * goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX. This option
                 * only has an effect if this.wrapErrors_  is set to false.
                 * @type {boolean}
                 * @private
                 */
                _this.prefixErrorMessages_ = false;
                return _this;
            }
            /**
             * Enable tracers when instrumenting entry points.
             * @param {boolean} newVal See above.
             */
            ErrorHandler.prototype.setAddTracersToProtectedFunctions = function (newVal) {
                this.addTracersToProtectedFunctions_ = newVal;
            };
            ;
            /** @override */
            ErrorHandler.prototype.wrap = function (fn) {
                return this.protectEntryPoint(goog.asserts.assertFunction(fn));
            };
            ;
            /** @override */
            ErrorHandler.prototype.unwrap = function (fn) {
                goog.asserts.assertFunction(fn);
                return fn[this.getFunctionIndex_(false)] || fn;
            };
            ;
            /**
             * Private helper function to return a span that can be clicked on to display
             * an alert with the current stack trace. Newlines are replaced with a
             * placeholder so that they will not be html-escaped.
             * @param {string} stackTrace The stack trace to create a span for.
             * @return {string} A span which can be clicked on to show the stack trace.
             * @private
             */
            ErrorHandler.prototype.getStackTraceHolder_ = function (stackTrace) {
                var buffer = [];
                buffer.push('##PE_STACK_START##');
                buffer.push(stackTrace.replace(/(\r\n|\r|\n)/g, '##STACK_BR##'));
                buffer.push('##PE_STACK_END##');
                return buffer.join('');
            };
            ;
            /**
             * Get the index for a function. Used for internal indexing.
             * @param {boolean} wrapper True for the wrapper; false for the wrapped.
             * @return {string} The index where we should store the function in its
             *     wrapper/wrapped function.
             * @private
             */
            ErrorHandler.prototype.getFunctionIndex_ = function (wrapper) {
                return (wrapper ? '__wrapper_' : '__protected_') + goog.getUid(this) + '__';
            };
            ;
            /**
             * Installs exception protection for an entry point function. When an exception
             * is thrown from a protected function, a handler will be invoked to handle it.
             *
             * @param {Function} fn An entry point function to be protected.
             * @return {!Function} A protected wrapper function that calls the entry point
             *     function.
             */
            ErrorHandler.prototype.protectEntryPoint = function (fn) {
                var protectedFnName = this.getFunctionIndex_(true);
                if (!fn[protectedFnName]) {
                    var wrapper = fn[protectedFnName] = this.getProtectedFunction(fn);
                    wrapper[this.getFunctionIndex_(false)] = fn;
                }
                return fn[protectedFnName];
            };
            ;
            /**
             * Helps {@link #protectEntryPoint} by actually creating the protected
             * wrapper function, after {@link #protectEntryPoint} determines that one does
             * not already exist for the given function.  Can be overriden by subclasses
             * that may want to implement different error handling, or add additional
             * entry point hooks.
             * @param {!Function} fn An entry point function to be protected.
             * @return {!Function} protected wrapper function.
             * @protected
             */
            ErrorHandler.prototype.getProtectedFunction = function (fn) {
                var that = this;
                var tracers = this.addTracersToProtectedFunctions_;
                if (tracers) {
                    var stackTrace = goog.debug.getStacktraceSimple(15);
                }
                var googDebugErrorHandlerProtectedFunction = function () {
                    if (that.isDisposed()) {
                        return fn.apply(this, arguments);
                    }
                    if (tracers) {
                        var tracer = goog.debug.Trace.startTracer('protectedEntryPoint: ' + that.getStackTraceHolder_(stackTrace));
                    }
                    try {
                        return fn.apply(this, arguments);
                    }
                    catch (e) {
                        // Don't re-report errors that have already been handled by this code.
                        var MESSAGE_PREFIX = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX;
                        if ((e && typeof e === 'object' && e.message &&
                            e.message.indexOf(MESSAGE_PREFIX) == 0) ||
                            (typeof e === 'string' && e.indexOf(MESSAGE_PREFIX) == 0)) {
                            return;
                        }
                        that.errorHandlerFn_(e);
                        if (!that.wrapErrors_) {
                            // Add the prefix to the existing message.
                            if (that.prefixErrorMessages_) {
                                if (typeof e === 'object' && e && 'message' in e) {
                                    e.message = MESSAGE_PREFIX + e.message;
                                }
                                else {
                                    e = MESSAGE_PREFIX + e;
                                }
                            }
                            if (goog.DEBUG) {
                                // Work around for https://code.google.com/p/v8/issues/detail?id=2625
                                // and https://code.google.com/p/chromium/issues/detail?id=237059
                                // Custom errors and errors with custom stack traces show the wrong
                                // stack trace
                                // If it has a stack and Error.captureStackTrace is supported (only
                                // supported in V8 as of May 2013) log the stack to the console.
                                if (e && e.stack && goog.global.Error.captureStackTrace &&
                                    goog.global['console']) {
                                    goog.global['console']['error'](e.message, e.stack);
                                }
                            }
                            // Re-throw original error. This is great for debugging as it makes
                            // browser JS dev consoles show the correct error and stack trace.
                            throw e;
                        }
                        // Re-throw it since this may be expected by the caller.
                        throw new goog.debug.ErrorHandler.ProtectedFunctionError(e);
                    }
                    finally {
                        if (tracers) {
                            goog.debug.Trace.stopTracer(tracer);
                        }
                    }
                };
                googDebugErrorHandlerProtectedFunction[this.getFunctionIndex_(false)] = fn;
                return googDebugErrorHandlerProtectedFunction;
            };
            ;
            // TODO(mknichel): Allow these functions to take in the window to protect.
            /**
             * Installs exception protection for window.setTimeout to handle exceptions.
             */
            ErrorHandler.prototype.protectWindowSetTimeout = function () {
                this.protectWindowFunctionsHelper_('setTimeout');
            };
            ;
            /**
             * Install exception protection for window.setInterval to handle exceptions.
             */
            ErrorHandler.prototype.protectWindowSetInterval = function () {
                this.protectWindowFunctionsHelper_('setInterval');
            };
            ;
            /**
             * Helper function for protecting a function that causes a function to be
             * asynchronously called, for example setTimeout or requestAnimationFrame.
             * @param {string} fnName The name of the function to protect.
             * @private
             */
            ErrorHandler.prototype.protectWindowFunctionsHelper_ = function (fnName) {
                var win = goog.getObjectByName('window');
                var originalFn = win[fnName];
                var that = this;
                win[fnName] = function (fn, time) {
                    // Don't try to protect strings. In theory, we could try to globalEval
                    // the string, but this seems to lead to permission errors on IE6.
                    if (goog.isString(fn)) {
                        fn = goog.partial(goog.globalEval, fn);
                    }
                    arguments[0] = fn = that.protectEntryPoint(fn);
                    // IE doesn't support .call for setInterval/setTimeout, but it
                    // also doesn't care what "this" is, so we can just call the
                    // original function directly
                    if (originalFn.apply) {
                        return originalFn.apply(this, arguments);
                    }
                    else {
                        var callback = fn;
                        if (arguments.length > 2) {
                            var args = Array.prototype.slice.call(arguments, 2);
                            callback = function () { fn.apply(this, args); };
                        }
                        return originalFn(callback, time);
                    }
                };
                win[fnName][this.getFunctionIndex_(false)] = originalFn;
            };
            ;
            /**
             * Set whether to wrap errors that occur in protected functions in a
             * goog.debug.ErrorHandler.ProtectedFunctionError.
             * @param {boolean} wrapErrors Whether to wrap errors.
             */
            ErrorHandler.prototype.setWrapErrors = function (wrapErrors) {
                this.wrapErrors_ = wrapErrors;
            };
            ;
            /**
             * Set whether to add a prefix to all error messages that occur in protected
             * functions.
             * @param {boolean} prefixErrorMessages Whether to add a prefix to error
             *     messages.
             */
            ErrorHandler.prototype.setPrefixErrorMessages = function (prefixErrorMessages) {
                this.prefixErrorMessages_ = prefixErrorMessages;
            };
            ;
            /** @override */
            ErrorHandler.prototype.disposeInternal = function () {
                // Try to unwrap window.setTimeout and window.setInterval.
                var win = goog.getObjectByName('window');
                win.setTimeout = this.unwrap(win.setTimeout);
                win.setInterval = this.unwrap(win.setInterval);
                // goog.debug.ErrorHandler.base(this, 'disposeInternal');
                _super.prototype.disposeInternal.call(this);
            };
            ;
            return ErrorHandler;
        }(goog.Disposable));
        debug.ErrorHandler = ErrorHandler;
    })(debug = goog.debug || (goog.debug = {}));
})(goog || (goog = {}));
(function (goog) {
    var debug;
    (function (debug) {
        var ErrorHandler;
        (function (ErrorHandler) {
            var ProtectedFunctionError = /** @class */ (function (_super) {
                __extends(ProtectedFunctionError, _super);
                /**
                 * Error thrown to the caller of a protected entry point if the entry point
                 * throws an error.
                 * @param {*} cause The error thrown by the entry point.
                 * @constructor
                 * @extends {goog.debug.Error}
                 * @final
                 */
                function ProtectedFunctionError(cause) {
                    var _this = this;
                    var message = goog.debug.ErrorHandler.ProtectedFunctionError.MESSAGE_PREFIX +
                        (cause && cause.message ? String(cause.message) : String(cause));
                    // goog.debug.ErrorHandler.ProtectedFunctionError.base(
                    //     this, 'constructor', message);
                    _this = _super.call(this, message) || this;
                    /**
                     * The error thrown by the entry point.
                     * @type {*}
                     */
                    _this.cause = cause;
                    var stack = cause && cause.stack;
                    if (stack && goog.isString(stack)) {
                        _this.stack = /** @type {string} */ (stack);
                    }
                    return _this;
                }
                /**
                 * Text to prefix the message with.
                 * @type {string}
                 */
                ProtectedFunctionError.MESSAGE_PREFIX = 'Error in protected function: ';
                return ProtectedFunctionError;
            }(goog.debug.Error));
            ErrorHandler.ProtectedFunctionError = ProtectedFunctionError;
        })(ErrorHandler = debug.ErrorHandler || (debug.ErrorHandler = {}));
    })(debug = goog.debug || (goog.debug = {}));
})(goog || (goog = {}));
