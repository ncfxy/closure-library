/// <reference path="./idisposable" />
// Copyright 2005 The Closure Library Authors. All Rights Reserved.
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
/**
 * @fileoverview Implements the disposable interface. The dispose method is used
 * to clean up references and resources.
 * @author arv@google.com (Erik Arvidsson)
 */
goog.provide('goog.Disposable');
goog.provide('goog.dispose');
goog.provide('goog.disposeAll');
goog.require('goog.disposable.IDisposable');
var goog;
(function (goog) {
    var Disposable = /** @class */ (function () {
        /**
         * Class that provides the basic implementation for disposable objects. If your
         * class holds one or more references to COM objects, DOM nodes, or other
         * disposable objects, it should extend this class or implement the disposable
         * interface (defined in goog.disposable.IDisposable).
         * @constructor
         * @implements {goog.disposable.IDisposable}
         */
        function Disposable() {
            /**
             * Whether the object has been disposed of.
             * @type {boolean}
             * @private
             */
            this.disposed_ = false;
            /**
             * If monitoring the goog.Disposable instances is enabled, stores the creation
             * stack trace of the Disposable instance.
             * @type {string|undefined}
             */
            this.creationStack;
            if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
                if (goog.Disposable.INCLUDE_STACK_ON_CREATION) {
                    this.creationStack = new Error().stack;
                }
                goog.Disposable.instances_[goog.getUid(this)] = this;
            }
            // Support sealing
            this.disposed_ = this.disposed_;
            this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
        }
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @override
         */
        Disposable.prototype.isDisposed = function () {
            return this.disposed_;
        };
        ;
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @deprecated Use {@link #isDisposed} instead.
         */
        Disposable.prototype.getDisposed = function () {
            return this.isDisposed();
        };
        /**
         * Disposes of the object. If the object hasn't already been disposed of, calls
         * {@link #disposeInternal}. Classes that extend {@code goog.Disposable} should
         * override {@link #disposeInternal} in order to delete references to COM
         * objects, DOM nodes, and other disposable objects. Reentrant.
         *
         * @return {void} Nothing.
         * @override
         */
        Disposable.prototype.dispose = function () {
            if (!this.disposed_) {
                // Set disposed_ to true first, in case during the chain of disposal this
                // gets disposed recursively.
                this.disposed_ = true;
                this.disposeInternal();
                if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
                    var uid = goog.getUid(this);
                    if (goog.Disposable.MONITORING_MODE ==
                        goog.Disposable.MonitoringMode.PERMANENT &&
                        !goog.Disposable.instances_.hasOwnProperty(uid)) {
                        throw new Error(this + ' did not call the goog.Disposable base ' +
                            'constructor or was disposed of after a clearUndisposedObjects ' +
                            'call');
                    }
                    delete goog.Disposable.instances_[uid];
                }
            }
        };
        ;
        /**
         * Associates a disposable object with this object so that they will be disposed
         * together.
         * @param {goog.disposable.IDisposable} disposable that will be disposed when
         *     this object is disposed.
         */
        Disposable.prototype.registerDisposable = function (disposable) {
            this.addOnDisposeCallback(goog.partial(goog.dispose, disposable));
        };
        ;
        /**
         * Invokes a callback function when this object is disposed. Callbacks are
         * invoked in the order in which they were added. If a callback is added to
         * an already disposed Disposable, it will be called immediately.
         * @param {function(this:T):?} callback The callback function.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @template T
         */
        Disposable.prototype.addOnDisposeCallback = function (callback, opt_scope) {
            if (this.disposed_) {
                goog.isDef(opt_scope) ? callback.call(opt_scope) : callback();
                return;
            }
            if (!this.onDisposeCallbacks_) {
                this.onDisposeCallbacks_ = [];
            }
            this.onDisposeCallbacks_.push(goog.isDef(opt_scope) ? goog.bind(callback, opt_scope) : callback);
        };
        ;
        /**
         * Deletes or nulls out any references to COM objects, DOM nodes, or other
         * disposable objects. Classes that extend {@code goog.Disposable} should
         * override this method.
         * Not reentrant. To avoid calling it twice, it must only be called from the
         * subclass' {@code disposeInternal} method. Everywhere else the public
         * {@code dispose} method must be used.
         * For example:
         * <pre>
         *   mypackage.MyClass = function() {
         *     mypackage.MyClass.base(this, 'constructor');
         *     // Constructor logic specific to MyClass.
         *     ...
         *   };
         *   goog.inherits(mypackage.MyClass, goog.Disposable);
         *
         *   mypackage.MyClass.prototype.disposeInternal = function() {
         *     // Dispose logic specific to MyClass.
         *     ...
         *     // Call superclass's disposeInternal at the end of the subclass's, like
         *     // in C++, to avoid hard-to-catch issues.
         *     mypackage.MyClass.base(this, 'disposeInternal');
         *   };
         * </pre>
         * @protected
         */
        Disposable.prototype.disposeInternal = function () {
            if (this.onDisposeCallbacks_) {
                while (this.onDisposeCallbacks_.length) {
                    this.onDisposeCallbacks_.shift()();
                }
            }
        };
        ;
        return Disposable;
    }());
    goog.Disposable = Disposable;
})(goog || (goog = {}));
(function (goog) {
    var Disposable;
    (function (Disposable) {
        /**
         * @enum {number} Different monitoring modes for Disposable.
         */
        var MonitoringMode;
        (function (MonitoringMode) {
            /**
             * No monitoring.
             */
            MonitoringMode[MonitoringMode["OFF"] = 0] = "OFF";
            /**
             * Creating and disposing the goog.Disposable instances is monitored. All
             * disposable objects need to call the {@code goog.Disposable} base
             * constructor. The PERMANENT mode must be switched on before creating any
             * goog.Disposable instances.
             */
            MonitoringMode[MonitoringMode["PERMANENT"] = 1] = "PERMANENT";
            /**
             * INTERACTIVE mode can be switched on and off on the fly without producing
             * errors. It also doesn't warn if the disposable objects don't call the
             * {@code goog.Disposable} base constructor.
             */
            MonitoringMode[MonitoringMode["INTERACTIVE"] = 2] = "INTERACTIVE";
        })(MonitoringMode = Disposable.MonitoringMode || (Disposable.MonitoringMode = {}));
        ;
        Disposable.MONITORING_MODE = 0;
        Disposable.INCLUDE_STACK_ON_CREATION = true;
        /**
         * Maps the unique ID of every undisposed {@code goog.Disposable} object to
         * the object itself.
         * @type {!Object<number, !goog.Disposable>}
         * @private
         */
        Disposable.instances_ = {};
        /**
         * @return {!Array<!goog.Disposable>} All {@code goog.Disposable} objects that
         *     haven't been disposed of.
         */
        function getUndisposedObjects() {
            var ret = [];
            for (var id in goog.Disposable.instances_) {
                if (goog.Disposable.instances_.hasOwnProperty(id)) {
                    ret.push(goog.Disposable.instances_[Number(id)]);
                }
            }
            return ret;
        }
        Disposable.getUndisposedObjects = getUndisposedObjects;
        ;
        /**
         * Clears the registry of undisposed objects but doesn't dispose of them.
         */
        function clearUndisposedObjects() {
            goog.Disposable.instances_ = {};
        }
        Disposable.clearUndisposedObjects = clearUndisposedObjects;
        ;
        /**
         * Returns True if we can verify the object is disposed.
         * Calls {@code isDisposed} on the argument if it supports it.  If obj
         * is not an object with an isDisposed() method, return false.
         * @param {*} obj The object to investigate.
         * @return {boolean} True if we can verify the object is disposed.
         */
        function isDisposed(obj) {
            if (obj && typeof obj.isDisposed == 'function') {
                return obj.isDisposed();
            }
            return false;
        }
        Disposable.isDisposed = isDisposed;
        ;
    })(Disposable = goog.Disposable || (goog.Disposable = {}));
})(goog || (goog = {}));
/**
 * @define {number} The monitoring mode of the goog.Disposable
 *     instances. Default is OFF. Switching on the monitoring is only
 *     recommended for debugging because it has a significant impact on
 *     performance and memory usage. If switched off, the monitoring code
 *     compiles down to 0 bytes.
 */
goog.define('goog.Disposable.MONITORING_MODE', 0);
/**
 * @define {boolean} Whether to attach creation stack to each created disposable
 *     instance; This is only relevant for when MonitoringMode != OFF.
 */
goog.define('goog.Disposable.INCLUDE_STACK_ON_CREATION', true);
(function (goog) {
    /**
     * Calls {@code dispose} on the argument if it supports it. If obj is not an
     *     object with a dispose() method, this is a no-op.
     * @param {*} obj The object to dispose of.
     */
    function dispose(obj) {
        if (obj && typeof obj.dispose == 'function') {
            obj.dispose();
        }
    }
    goog.dispose = dispose;
    ;
    /**
     * Calls {@code dispose} on each member of the list that supports it. (If the
     * member is an ArrayLike, then {@code goog.disposeAll()} will be called
     * recursively on each of its members.) If the member is not an object with a
     * {@code dispose()} method, then it is ignored.
     * @param {...*} var_args The list.
     */
    function disposeAll() {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        for (var i = 0, len = arguments.length; i < len; ++i) {
            var disposable = arguments[i];
            if (goog.isArrayLike(disposable)) {
                goog.disposeAll.apply(null, disposable);
            }
            else {
                goog.dispose(disposable);
            }
        }
    }
    goog.disposeAll = disposeAll;
    ;
})(goog || (goog = {}));
