declare namespace goog {
    interface IObject<KEY1, VALUE1> {
    }
    interface IArrayLike<VALUE2> extends IObject<number, VALUE2> {
        length?: number;
    }
    interface IThenable<T> {
        then(opt_onFullfilled: any, opt_onRejected: any): any;
    }
    class Arguments implements IArrayLike<string> {
        /**
         * @type {Function}
         * @see http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/callee
         */
        callee: Function;
        /**
         * Use the non-standard {@see Function.prototype.caller} property of a function
         * object instead.
         * @type {Function}
         * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller
         * @deprecated
         */
        caller?: Function;
        /**
         * @type {number}
         * @see http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/length
         */
        length: number;
    }
}
/**
 * @fileoverview Bootstrap for the Google JS Library (Closure).
 *
 * In uncompiled mode base.js will attempt to load Closure's deps file, unless
 * the global <code>CLOSURE_NO_DEPS</code> is set to true.  This allows projects
 * to include their own deps file(s) from different locations.
 *
 * Avoid including base.js more than once. This is strictly discouraged and not
 * supported. goog.require(...) won't work properly in that case.
 *
 * @provideGoog
 */
/**
* @define {boolean} Overridden to true by the compiler.
*/
declare var COMPILED: boolean;
declare namespace globalDef {
}
declare namespace goog.global {
    var addEventListener: {
        <K extends "error" | "waiting" | "progress" | "ended" | "change" | "input" | "select" | "abort" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "readystatechange" | "reset" | "scroll" | "seeked" | "seeking" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "mouseenter" | "mouseleave" | "afterprint" | "beforeprint" | "beforeunload" | "hashchange" | "message" | "offline" | "online" | "orientationchange" | "pagehide" | "pageshow" | "popstate" | "resize" | "storage" | "unload" | "compassneedscalibration" | "devicelight" | "devicemotion" | "deviceorientation">(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    };
    var removeEventListener: {
        <K extends "error" | "waiting" | "progress" | "ended" | "change" | "input" | "select" | "abort" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "readystatechange" | "reset" | "scroll" | "seeked" | "seeking" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "mouseenter" | "mouseleave" | "afterprint" | "beforeprint" | "beforeunload" | "hashchange" | "message" | "offline" | "online" | "orientationchange" | "pagehide" | "pageshow" | "popstate" | "resize" | "storage" | "unload" | "compassneedscalibration" | "devicelight" | "devicemotion" | "deviceorientation">(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    };
    var setTimeout: {
        (handler: (...args: any[]) => void, timeout: number): number;
        (handler: any, timeout?: any, ...args: any[]): number;
    };
    var setImmediate: {
        (handler: (...args: any[]) => void): number;
        (handler: any, ...args: any[]): number;
    };
    var Window: any;
    var clearTimeout: (handle: number) => void;
    var Promise: any;
    var Error: any;
    var Blob: {
        new (blobParts?: any[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
    var CLOSURE_UNCOMPILED_DEFINES: any;
    var CLOSURE_DEFINES: any;
    var navigator: Navigator;
    var atob: any;
    var JSON: any;
    var URL: any;
    var webkitURL: any;
    var createObjectURL: any;
    var requestFileSystem: any;
    var webkitRequestFileSystem: any;
    var BlobBuilder: any;
    var WebKitBlobBuilder: any;
    /**
     * A hook for overriding the base path.
     * @type {string|undefined}
     */
    var CLOSURE_BASE_PATH: any;
    /**
     * Whether to attempt to load Closure's deps file. By default, when uncompiled,
     * deps files will attempt to be loaded.
     * @type {boolean|undefined}
     */
    var CLOSURE_NO_DEPS: any;
    /**
     * A function to import a single script. This is meant to be overridden when
     * Closure is being run in non-HTML contexts, such as web workers. It's defined
     * in the global scope so that it can be set before base.js is loaded, which
     * allows deps.js to be imported properly.
     *
     * The function is passed the script source, which is a relative URI. It should
     * return true if the script was imported, false otherwise.
     * @type {(function(string): boolean)|undefined}
     */
    var CLOSURE_IMPORT_SCRIPT: any;
    /**
     * Provides a hook for loading a file when using Closure's goog.require() API
     * with goog.modules.  In particular this hook is provided to support Node.js.
     *
     * @type {(function(string):string)|undefined}
     */
    var CLOSURE_LOAD_FILE_SYNC: any;
    /**
     * A hook for modifying the default behavior goog.getCssName. The function
     * if present, will receive the standard output of the goog.getCssName as
     * its input.
     *
     * @type {(function(string):string)|undefined}
     */
    var CLOSURE_CSS_NAME_MAP_FN: any;
    /**
     * To use CSS renaming in compiled mode, one of the input files should have a
     * call to goog.setCssNameMapping() with an object literal that the JSCompiler
     * can extract and use to replace all calls to goog.getCssName(). In uncompiled
     * mode, JavaScript code should be loaded before this base.js file that declares
     * a global variable, CLOSURE_CSS_NAME_MAPPING, which is used below. This is
     * to ensure that the mapping is loaded before any calls to goog.getCssName()
     * are made in uncompiled mode.
     *
     * A hook for overriding the CSS name mapping.
     * @type {!Object<string, string>|undefined}
     */
    var CLOSURE_CSS_NAME_MAPPING: any;
    var document: any;
    var console: any;
    function execScript(a: string, b: string): void;
    function eval(a: string): void;
}
declare namespace goog {
    var basePath: any;
    var transpiler_: any;
    /**
     * Returns true if the specified value is not undefined.
     *
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is defined.
     */
    function isDef(val: any): boolean;
    /**
     * Returns true if the specified value is a string.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a string.
     */
    function isString(val: any): boolean;
    /**
     * Returns true if the specified value is a boolean.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is boolean.
     */
    function isBoolean(val: any): boolean;
    /**
     * Returns true if the specified value is a number.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a number.
     */
    function isNumber(val: any): boolean;
    /**
     * Builds an object structure for the provided namespace path, ensuring that
     * names that already exist are not overwritten. For example:
     * "a.b.c" -> a = {};a.b={};a.b.c={};
     * Used by goog.provide and goog.exportSymbol.
     * @param {string} name name of the object that this file defines.
     * @param {*=} opt_object the object to expose at the end of the path.
     * @param {Object=} opt_objectToExportTo The object to add the path to; default
     *     is `goog.global`.
     * @private
     */
    function exportPath_(name: string, opt_object?: any, opt_objectToExportTo?: object | undefined): void;
    /**
     * Defines a named value. In uncompiled mode, the value is retrieved from
     * CLOSURE_DEFINES or CLOSURE_UNCOMPILED_DEFINES if the object is defined and
     * has the property specified, and otherwise used the defined defaultValue.
     * When compiled the default can be overridden using the compiler
     * options or the value set in the CLOSURE_DEFINES object.
     *
     * @param {string} name The distinguished name to provide.
     * @param {string|number|boolean} defaultValue
     */
    function define(name: string, defaultValue: string | number | boolean): void;
    var DEBUG: boolean;
    var LOCALE: string;
    var TRUSTED_SITE: boolean;
    var STRICT_MODE_COMPATIBLE: boolean;
    var DISALLOW_TEST_ONLY_CODE: boolean;
    var ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING: boolean;
    /**
     * Defines a namespace in Closure.
     *
     * A namespace may only be defined once in a codebase. It may be defined using
     * goog.provide() or goog.module().
     *
     * The presence of one or more goog.provide() calls in a file indicates
     * that the file defines the given objects/namespaces.
     * Provided symbols must not be null or undefined.
     *
     * In addition, goog.provide() creates the object stubs for a namespace
     * (for example, goog.provide("goog.foo.bar") will create the object
     * goog.foo.bar if it does not already exist).
     *
     * Build tools also scan for provide/require/module statements
     * to discern dependencies, build dependency files (see deps.js), etc.
     *
     * @see goog.require
     * @see goog.module
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part".
     */
    function provide(name: string): void;
    /**
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part".
     * @param {Object=} opt_obj The object to embed in the namespace.
     * @private
     */
    function constructNamespace_(name: string, opt_obj?: object | undefined): void;
    /**
     * Module identifier validation regexp.
     * Note: This is a conservative check, it is very possible to be more lenient,
     *   the primary exclusion here is "/" and "\" and a leading ".", these
     *   restrictions are intended to leave the door open for using goog.require
     *   with relative file paths rather than module identifiers.
     * @private
     */
    var VALID_MODULE_RE_: RegExp;
    /**
     * Defines a module in Closure.
     *
     * Marks that this file must be loaded as a module and claims the namespace.
     *
     * A namespace may only be defined once in a codebase. It may be defined using
     * goog.provide() or goog.module().
     *
     * goog.module() has three requirements:
     * - goog.module may not be used in the same file as goog.provide.
     * - goog.module must be the first statement in the file.
     * - only one goog.module is allowed per file.
     *
     * When a goog.module annotated file is loaded, it is enclosed in
     * a strict function closure. This means that:
     * - any variables declared in a goog.module file are private to the file
     * (not global), though the compiler is expected to inline the module.
     * - The code must obey all the rules of "strict" JavaScript.
     * - the file will be marked as "use strict"
     *
     * NOTE: unlike goog.provide, goog.module does not declare any symbols by
     * itself. If declared symbols are desired, use
     * goog.module.declareLegacyNamespace().
     *
     *
     * See the public goog.module proposal: http://goo.gl/Va1hin
     *
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part", is expected but not required.
     * @return {void}
     */
    function module(name: any): void;
    namespace module {
        /**
         * @param {string} name The module identifier.
         * @return {?} The module exports for an already loaded module or null.
         *
         * Note: This is not an alternative to goog.require, it does not
         * indicate a hard dependency, instead it is used to indicate
         * an optional dependency or to access the exports of a module
         * that has already been loaded.
         * @suppress {missingProvide}
         */
        function get(name: string): any;
        /**
         * @param {string} name The module identifier.
         * @return {?} The module exports for an already loaded module or null.
         * @private
         */
        function getInternal_(name: any): any;
        /**
         * Provide the module's exports as a globally accessible object under the
         * module's declared name.  This is intended to ease migration to goog.module
         * for files that have existing usages.
         * @suppress {missingProvide}
         */
        function declareLegacyNamespace(): void;
    }
    var loadedModules_: any;
    var implicitNamespaces_: any;
    /**
     * @private {?{moduleName: (string|undefined), declareLegacyNamespace:boolean}}
     */
    var moduleLoaderState_: {
        moduleName: string | undefined;
        declareLegacyNamespace: boolean;
    };
    /**
     * @private
     * @return {boolean} Whether a goog.module is currently being initialized.
     */
    function isInModuleLoader_(): boolean;
    /**
     * Marks that the current file should only be used for testing, and never for
     * live code in production.
     *
     * In the case of unit tests, the message may optionally be an exact namespace
     * for the test (e.g. 'goog.stringTest'). The linter will then ignore the extra
     * provide (if not explicitly defined in the code).
     *
     * @param {string=} opt_message Optional message to add to the error that's
     *     raised when used in production code.
     */
    function setTestOnly(opt_message?: string): void;
    /**
     * Forward declares a symbol. This is an indication to the compiler that the
     * symbol may be used in the source yet is not required and may not be provided
     * in compilation.
     *
     * The most common usage of forward declaration is code that takes a type as a
     * function parameter but does not need to require it. By forward declaring
     * instead of requiring, no hard dependency is made, and (if not required
     * elsewhere) the namespace may never be required and thus, not be pulled
     * into the JavaScript binary. If it is required elsewhere, it will be type
     * checked as normal.
     *
     * Before using goog.forwardDeclare, please read the documentation at
     * https://github.com/google/closure-compiler/wiki/Bad-Type-Annotation to
     * understand the options and tradeoffs when working with forward declarations.
     *
     * @param {string} name The namespace to forward declare in the form of
     *     "goog.package.part".
     */
    function forwardDeclare(name: any): void;
    /**
     * Returns an object based on its fully qualified external name.  The object
     * is not found if null or undefined.  If you are using a compilation pass that
     * renames property names beware that using this function will not find renamed
     * properties.
     *
     * @param {string} name The fully qualified name.
     * @param {Object=} opt_obj The object within which to look; default is
     *     |goog.global|.
     * @return {?} The value (object or primitive) or, if not found, null.
     */
    function getObjectByName(name: string, opt_obj?: string): any;
    /**
     * Globalizes a whole namespace, such as goog or goog.lang.
     *
     * @param {!Object} obj The namespace to globalize.
     * @param {Object=} opt_global The object to add the properties to.
     * @deprecated Properties may be explicitly exported to the global scope, but
     *     this should no longer be done in bulk.
     */
    function globalize(obj: Object, opt_global?: Object): void;
    /**
     * Adds a dependency from a file to the files it requires.
     * @param {string} relPath The path to the js file.
     * @param {!Array<string>} provides An array of strings with
     *     the names of the objects this file provides.
     * @param {!Array<string>} requires An array of strings with
     *     the names of the objects this file requires.
     * @param {boolean|!Object<string>=} opt_loadFlags Parameters indicating
     *     how the file must be loaded.  The boolean 'true' is equivalent
     *     to {'module': 'goog'} for backwards-compatibility.  Valid properties
     *     and values include {'module': 'goog'} and {'lang': 'es6'}.
     */
    function addDependency(relPath: any, provides: any, requires: any, opt_loadFlags: any): void;
    /**
     * @param {string} msg
     * @private
     */
    function logToConsole_(msg: string): void;
    /**
     * Implements a system for the dynamic resolution of dependencies that works in
     * parallel with the BUILD system. Note that all calls to goog.require will be
     * stripped by the compiler.
     * @see goog.provide
     * @param {string} name Namespace to include (as was given in goog.provide()) in
     *     the form "goog.package.part".
     * @return {?} If called within a goog.module file, the associated namespace or
     *     module otherwise null.
     */
    function require(name: string): any;
    /**
     * Path for included scripts.
     * @type {string}
     */
    var bastPath: string;
    /**
     * Null function used for default values of callbacks, etc.
     * @return {void} Nothing.
     */
    function nullFunction(): void;
    /**
     * When defining a class Foo with an abstract method bar(), you can do:
     * Foo.prototype.bar = goog.abstractMethod
     *
     * Now if a subclass of Foo fails to override bar(), an error will be thrown
     * when bar() is invoked.
     *
     * @type {!Function}
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    function abstractMethod(): void;
    /**
     * Adds a {@code getInstance} static method that always returns the same
     * instance object.
     * @param {!Function} ctor The constructor for the class to add the static
     *     method to.
     */
    function addSingletonGetter(ctor: any): void;
    /**
     * All singleton classes that have been instantiated, for testing. Don't read
     * it directly, use the {@code goog.testing.singleton} module. The compiler
     * removes this variable if unused.
     * @type {!Array<!Function>}
     * @private
     */
    var instantiatedSingletons_: any[];
    /**
     * The registry of initialized modules:
     * the module identifier to module exports map.
     * @private @const {!Object<string, ?>}
     */
    var loadedModules_: any;
    /**
     * True if goog.dependencies_ is available.
     * @const {boolean}
     */
    var DEPENDENCIES_ENABLED: boolean;
    /**
     * @package {?boolean}
     * Visible for testing.
     */
    var hasBadLetScoping: any;
    /**
     * @return {boolean}
     * @package Visible for testing.
     */
    function useSafari10Workaround(): any;
    /**
     * @param {string} moduleDef
     * @return {string}
     * @package Visible for testing.
     */
    function workaroundSafari10EvalBug(moduleDef: any): string;
    /**
     * @param {function(?):?|string} moduleDef The module definition.
     */
    function loadModule(moduleDef: any): void;
    /**
     * @private @const
     */
    function loadModuleFromSource_(): {};
    /**
     * Normalize a file path by removing redundant ".." and extraneous "." file
     * path components.
     * @param {string} path
     * @return {string}
     * @private
     */
    function normalizePath_(path: any): any;
    /**
 * Loads file by synchronous XHR. Should not be used in production environments.
 * @param {string} src Source URL.
 * @return {?string} File contents, or null if load failed.
 * @private
 */
    function loadFileSync_(src: any): any;
    /**
     * Lazily retrieves the transpiler and applies it to the source.
     * @param {string} code JS code.
     * @param {string} path Path to the code.
     * @return {string} The transpiled code.
     * @private
     */
    function transpile_(code: any, path: any): any;
    /**
     * This is a "fixed" version of the typeof operator.  It differs from the typeof
     * operator in such a way that null returns 'null' and arrays return 'array'.
     * @param {?} value The value to get the type of.
     * @return {string} The name of the type.
     */
    function typeOf(value: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null";
    /**
     * Returns true if the specified value is null.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is null.
     */
    function isNull(val: any): boolean;
    /**
     * Returns true if the specified value is defined and not null.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is defined and not null.
     */
    function isDefAndNotNull(val: any): boolean;
    /**
     * Returns true if the specified value is an array.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an array.
     */
    function isArray(val: any): boolean;
    /**
     * Returns true if the object looks like an array. To qualify as array like
     * the value needs to be either a NodeList or an object with a Number length
     * property. As a special case, a function value is not array like, because its
     * length property is fixed to correspond to the number of expected arguments.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an array.
     */
    function isArrayLike(val: any): boolean;
    /**
     * Returns true if the object looks like a Date. To qualify as Date-like the
     * value needs to be an object and have a getFullYear() function.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a like a Date.
     */
    function isDateLike(val: any): boolean;
    /**
     * Returns true if the specified value is a function.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a function.
     */
    function isFunction(val: any): boolean;
    /**
     * Returns true if the specified value is an object.  This includes arrays and
     * functions.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an object.
     */
    function isObject(val: any): boolean;
    /**
     * Gets a unique ID for an object. This mutates the object so that further calls
     * with the same object as a parameter returns the same value. The unique ID is
     * guaranteed to be unique across the current session amongst objects that are
     * passed into {@code getUid}. There is no guarantee that the ID is unique or
     * consistent across sessions. It is unsafe to generate unique ID for function
     * prototypes.
     *
     * @param {Object} obj The object to get the unique ID for.
     * @return {number} The unique ID for the object.
     */
    function getUid(obj: any): any;
    /**
     * Whether the given object is already assigned a unique ID.
     *
     * This does not modify the object.
     *
     * @param {!Object} obj The object to check.
     * @return {boolean} Whether there is an assigned unique id for the object.
     */
    function hasUid(obj: any): boolean;
    /**
     * Removes the unique ID from an object. This is useful if the object was
     * previously mutated using {@code goog.getUid} in which case the mutation is
     * undone.
     * @param {Object} obj The object to remove the unique ID field from.
     */
    function removeUid(obj: any): void;
    /**
     * Name for unique ID property. Initialized in a way to help avoid collisions
     * with other closure JavaScript on the same page.
     * @type {string}
     * @private
     */
    var UID_PROPERTY_: string;
    /**
     * Counter for UID.
     * @type {number}
     * @private
     */
    var uidCounter_: number;
    /**
     * Adds a hash code field to an object. The hash code is unique for the
     * given object.
     * @param {Object} obj The object to get the hash code for.
     * @return {number} The hash code for the object.
     * @deprecated Use goog.getUid instead.
     */
    var getHashCode: typeof getUid;
    /**
     * Removes the hash code field from an object.
     * @param {Object} obj The object to remove the field from.
     * @deprecated Use goog.removeUid instead.
     */
    var removeHashCode: typeof removeUid;
    /**
     * Clones a value. The input may be an Object, Array, or basic type. Objects and
     * arrays will be cloned recursively.
     *
     * WARNINGS:
     * <code>goog.cloneObject</code> does not detect reference loops. Objects that
     * refer to themselves will cause infinite recursion.
     *
     * <code>goog.cloneObject</code> is unaware of unique identifiers, and copies
     * UIDs created by <code>getUid</code> into cloned results.
     *
     * @param {*} obj The value to clone.
     * @return {*} A clone of the input value.
     * @deprecated goog.cloneObject is unsafe. Prefer the goog.object methods.
     */
    function cloneObject(obj: any): any;
    /**
     * A native implementation of goog.bind.
     * @param {?function(this:T, ...)} fn A function to partially apply.
     * @param {T} selfObj Specifies the object which this should point to when the
     *     function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function goog.bind() was
     *     invoked as a method of.
     * @template T
     * @private
     */
    function bindNative_(fn: any, selfObj: any, var_args: any): any;
    /**
     * A pure-JS implementation of goog.bind.
     * @param {?function(this:T, ...)} fn A function to partially apply.
     * @param {T} selfObj Specifies the object which this should point to when the
     *     function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function goog.bind() was
     *     invoked as a method of.
     * @template T
     * @private
     */
    function bindJs_(fn: any, selfObj: any, var_args: any): () => any;
    /**
     * Partially applies this function to a particular 'this object' and zero or
     * more arguments. The result is a new function with some arguments of the first
     * function pre-filled and the value of this 'pre-specified'.
     *
     * Remaining arguments specified at call-time are appended to the pre-specified
     * ones.
     *
     * Also see: {@link #partial}.
     *
     * Usage:
     * <pre>var barMethBound = goog.bind(myFunction, myObj, 'arg1', 'arg2');
     * barMethBound('arg3', 'arg4');</pre>
     *
     * @param {?function(this:T, ...)} fn A function to partially apply.
     * @param {T} selfObj Specifies the object which this should point to when the
     *     function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function goog.bind() was
     *     invoked as a method of.
     * @template T
     * @suppress {deprecated} See above.
     */
    function bind(fn: any, selfObj: any, ...var_args: any[]): any;
    /**
     * Like goog.bind(), except that a 'this object' is not required. Useful when
     * the target function is already bound.
     *
     * Usage:
     * var g = goog.partial(f, arg1, arg2);
     * g(arg3, arg4);
     *
     * @param {Function} fn A function to partially apply.
     * @param {...*} var_args Additional arguments that are partially applied to fn.
     * @return {!Function} A partially-applied form of the function goog.partial()
     *     was invoked as a method of.
     */
    function partial(fn: Function, ...var_args: any[]): Function;
    /**
     * Copies all the members of a source object to a target object. This method
     * does not work on all browsers for all objects that contain keys such as
     * toString or hasOwnProperty. Use goog.object.extend for this purpose.
     * @param {Object} target Target.
     * @param {Object} source Source.
     */
    function mixin(target: any, source: any): void;
    /**
     * @return {number} An integer value representing the number of milliseconds
     *     between midnight, January 1, 1970 and the current time.
     */
    function now(): number;
    /**
     * Evals JavaScript in the global scope.  In IE this uses execScript, other
     * browsers use goog.global.eval. If goog.global.eval does not evaluate in the
     * global scope (for example, in Safari), appends a script tag instead.
     * Throws an exception if neither execScript or eval is defined.
     * @param {string} script JavaScript string.
     */
    function globalEval(script: any): void;
    /**
     * Indicates whether or not we can call 'eval' directly to eval code in the
     * global scope. Set to a Boolean by the first call to goog.globalEval (which
     * empirically tests whether eval works for globals). @see goog.globalEval
     * @type {?boolean}
     * @private
     */
    var evalWorksForGlobals_: any;
    /**
     * Optional map of CSS class names to obfuscated names used with
     * goog.getCssName().
     * @private {!Object<string, string>|undefined}
     * @see goog.setCssNameMapping
     */
    var cssNameMapping_: any;
    /**
     * Optional obfuscation style for CSS class names. Should be set to either
     * 'BY_WHOLE' or 'BY_PART' if defined.
     * @type {string|undefined}
     * @private
     * @see goog.setCssNameMapping
     */
    var cssNameMappingStyle_: any;
    /**
     * Handles strings that are intended to be used as CSS class names.
     *
     * This function works in tandem with @see goog.setCssNameMapping.
     *
     * Without any mapping set, the arguments are simple joined with a hyphen and
     * passed through unaltered.
     *
     * When there is a mapping, there are two possible styles in which these
     * mappings are used. In the BY_PART style, each part (i.e. in between hyphens)
     * of the passed in css name is rewritten according to the map. In the BY_WHOLE
     * style, the full css name is looked up in the map directly. If a rewrite is
     * not specified by the map, the compiler will output a warning.
     *
     * When the mapping is passed to the compiler, it will replace calls to
     * goog.getCssName with the strings from the mapping, e.g.
     *     var x = goog.getCssName('foo');
     *     var y = goog.getCssName(this.baseClass, 'active');
     *  becomes:
     *     var x = 'foo';
     *     var y = this.baseClass + '-active';
     *
     * If one argument is passed it will be processed, if two are passed only the
     * modifier will be processed, as it is assumed the first argument was generated
     * as a result of calling goog.getCssName.
     *
     * @param {string} className The class name.
     * @param {string=} opt_modifier A modifier to be appended to the class name.
     * @return {string} The class name or the concatenation of the class name and
     *     the modifier.
     */
    function getCssName(className: any, opt_modifier: any): any;
    /**
     * Sets the map to check when returning a value from goog.getCssName(). Example:
     * <pre>
     * goog.setCssNameMapping({
     *   "goog": "a",
     *   "disabled": "b",
     * });
     *
     * var x = goog.getCssName('goog');
     * // The following evaluates to: "a a-b".
     * goog.getCssName('goog') + ' ' + goog.getCssName(x, 'disabled')
     * </pre>
     * When declared as a map of string literals to string literals, the JSCompiler
     * will replace all calls to goog.getCssName() using the supplied map if the
     * --process_closure_primitives flag is set.
     *
     * @param {!Object} mapping A map of strings to strings where keys are possible
     *     arguments to goog.getCssName() and values are the corresponding values
     *     that should be returned.
     * @param {string=} opt_style The style of css name mapping. There are two valid
     *     options: 'BY_PART', and 'BY_WHOLE'.
     * @see goog.getCssName for a description.
     */
    function setCssNameMapping(mapping: any, opt_style: any): void;
    /**
 * Gets a localized message.
 *
 * This function is a compiler primitive. If you give the compiler a localized
 * message bundle, it will replace the string at compile-time with a localized
 * version, and expand goog.getMsg call to a concatenated string.
 *
 * Messages must be initialized in the form:
 * <code>
 * var MSG_NAME = goog.getMsg('Hello {$placeholder}', {'placeholder': 'world'});
 * </code>
 *
 * This function produces a string which should be treated as plain text. Use
 * {@link goog.html.SafeHtmlFormatter} in conjunction with goog.getMsg to
 * produce SafeHtml.
 *
 * @param {string} str Translatable string, places holders in the form {$foo}.
 * @param {Object<string, string>=} opt_values Maps place holder name to value.
 * @return {string} message with placeholders filled.
 */
    function getMsg(str: any, opt_values: any): any;
    /**
     * Gets a localized message. If the message does not have a translation, gives a
     * fallback message.
     *
     * This is useful when introducing a new message that has not yet been
     * translated into all languages.
     *
     * This function is a compiler primitive. Must be used in the form:
     * <code>var x = goog.getMsgWithFallback(MSG_A, MSG_B);</code>
     * where MSG_A and MSG_B were initialized with goog.getMsg.
     *
     * @param {string} a The preferred message.
     * @param {string} b The fallback message.
     * @return {string} The best translated message.
     */
    function getMsgWithFallback(a: any, b: any): any;
    /**
     * Exposes an unobfuscated global namespace path for the given object.
     * Note that fields of the exported object *will* be obfuscated, unless they are
     * exported in turn via this function or goog.exportProperty.
     *
     * Also handy for making public items that are defined in anonymous closures.
     *
     * ex. goog.exportSymbol('public.path.Foo', Foo);
     *
     * ex. goog.exportSymbol('public.path.Foo.staticFunction', Foo.staticFunction);
     *     public.path.Foo.staticFunction();
     *
     * ex. goog.exportSymbol('public.path.Foo.prototype.myMethod',
     *                       Foo.prototype.myMethod);
     *     new public.path.Foo().myMethod();
     *
     * @param {string} publicPath Unobfuscated name to export.
     * @param {*} object Object the name should point to.
     * @param {Object=} opt_objectToExportTo The object to add the path to; default
     *     is goog.global.
     */
    function exportSymbol(publicPath: any, object: any, opt_objectToExportTo: any): void;
    /**
     * Exports a property unobfuscated into the object's namespace.
     * ex. goog.exportProperty(Foo, 'staticFunction', Foo.staticFunction);
     * ex. goog.exportProperty(Foo.prototype, 'myMethod', Foo.prototype.myMethod);
     * @param {Object} object Object whose static property is being exported.
     * @param {string} publicName Unobfuscated name to export.
     * @param {*} symbol Object the name should point to.
     */
    function exportProperty(object: any, publicName: any, symbol: any): void;
    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * Usage:
     * <pre>
     * function ParentClass(a, b) { }
     * ParentClass.prototype.foo(a) { };
     *
     * function ChildClass(a, b, c) {
     *   ChildClass.base(this, 'constructor', a, b);
     * }
     * goog.inherits(ChildClass, ParentClass);
     *
     * var child = new ChildClass('a', 'b', 'see');
     * child.foo(); // This works.
     * </pre>
     *
     * @param {!Function} childCtor Child class.
     * @param {!Function} parentCtor Parent class.
     */
    function inherits(childCtor: any, parentCtor: Function): void;
    /**
     * Call up to the superclass.
     *
     * If this is called from a constructor, then this calls the superclass
     * constructor with arguments 1-N.
     *
     * If this is called from a prototype method, then you must pass the name of the
     * method as the second argument to this function. If you do not, you will get a
     * runtime error. This calls the superclass' method with arguments 2-N.
     *
     * This function only works if you use goog.inherits to express inheritance
     * relationships between your classes.
     *
     * This function is a compiler primitive. At compile-time, the compiler will do
     * macro expansion to remove a lot of the extra overhead that this function
     * introduces. The compiler will also enforce a lot of the assumptions that this
     * function makes, and treat it as a compiler error if you break them.
     *
     * @param {!Object} me Should always be "this".
     * @param {*=} opt_methodName The method name if calling a super method.
     * @param {...*} var_args The rest of the arguments.
     * @return {*} The return value of the superclass method.
     * @suppress {es5Strict} This method can not be used in strict mode, but
     *     all Closure Library consumers must depend on this file.
     * @deprecated goog.base is not strict mode compatible.  Prefer the static
     *     "base" method added to the constructor by goog.inherits
     *     or ES6 classes and the "super" keyword.
     */
    function base(me: any, opt_methodName: any, var_args: any): any;
    /**
     * Allow for aliasing within scope functions.  This function exists for
     * uncompiled code - in compiled code the calls will be inlined and the aliases
     * applied.  In uncompiled code the function is simply run since the aliases as
     * written are valid JavaScript.
     *
     *
     * @param {function()} fn Function to call.  This function can contain aliases
     *     to namespaces (e.g. "var dom = goog.dom") or classes
     *     (e.g. "var Timer = goog.Timer").
     */
    function scope(fn: any): void;
    /**
     * Creates a restricted form of a Closure "class":
     *   - from the compiler's perspective, the instance returned from the
     *     constructor is sealed (no new properties may be added).  This enables
     *     better checks.
     *   - the compiler will rewrite this definition to a form that is optimal
     *     for type checking and optimization (initially this will be a more
     *     traditional form).
     *
     * @param {Function} superClass The superclass, Object or null.
     * @param {goog.defineClass.ClassDescriptor} def
     *     An object literal describing
     *     the class.  It may have the following properties:
     *     "constructor": the constructor function
     *     "statics": an object literal containing methods to add to the constructor
     *        as "static" methods or a function that will receive the constructor
     *        function as its only parameter to which static properties can
     *        be added.
     *     all other properties are added to the prototype.
     * @return {!Function} The class constructor.
     */
    function defineClass(superClass: any, def: any): any;
    namespace defineClass {
        var ClassDescriptor: any;
        var SEAL_CLASS_INSTANCES: any;
        /**
         * If goog.defineClass.SEAL_CLASS_INSTANCES is enabled and Object.seal is
         * defined, this function will wrap the constructor in a function that seals the
         * results of the provided constructor function.
         *
         * @param {!Function} ctr The constructor whose results maybe be sealed.
         * @param {Function} superClass The superclass constructor.
         * @return {!Function} The replacement constructor.
         * @private
         */
        function createSealingConstructor_(ctr: any, superClass: any): any;
        /**
         * @param {Function} ctr The constructor to test.
         * @return {boolean} Whether the constructor has been tagged as unsealable
         *     using goog.tagUnsealableClass.
         * @private
         */
        function isUnsealable_(ctr: any): any;
        /**
         * The names of the fields that are defined on Object.prototype.
         * @type {!Array<string>}
         * @private
         * @const
         */
        var OBJECT_PROTOTYPE_FIELDS_: string[];
        /**
         * @param {!Object} target The object to add properties to.
         * @param {!Object} source The object to copy properties from.
         * @private
         */
        function applyProperties_(target: any, source: any): void;
    }
    /**
     * Sealing classes breaks the older idiom of assigning properties on the
     * prototype rather than in the constructor. As such, goog.defineClass
     * must not seal subclasses of these old-style classes until they are fixed.
     * Until then, this marks a class as "broken", instructing defineClass
     * not to seal subclasses.
     * @param {!Function} ctr The legacy constructor to tag as unsealable.
     */
    function tagUnsealableClass(ctr: any): void;
    /**
     * Name for unsealable tag property.
     * @const @private {string}
     */
    var UNSEALABLE_CONSTRUCTOR_PROPERTY_: string;
}
declare namespace goog {
    /**
     * Check if the given name has been goog.provided. This will return false for
     * names that are available only as implicit namespaces.
     * @param {string} name name of the object to look for.
     * @return {boolean} Whether the name has been provided.
     * @private
     */
    function isProvided_(name: any): boolean;
    /**
     * Namespaces implicitly defined by goog.provide. For example,
     * goog.provide('goog.events.Event') implicitly declares that 'goog' and
     * 'goog.events' must be namespaces.
     *
     * @type {!Object<string, (boolean|undefined)>}
     * @private
     */
    var implicitNamespaces_: any;
}
declare namespace goog {
    var ENABLE_DEBUG_LOADER: boolean;
    var LOAD_MODULE_USING_EVAL: boolean;
    var SEAL_MODULE_EXPORTS: boolean;
    var TRANSPILE: string;
    var TRANSPILER: string;
    var DEBUG_LOADER: string;
}
declare namespace goog {
    /**
     * Tries to detect whether is in the context of an HTML document.
     * @return {boolean} True if it looks like HTML document.
     * @private
     */
    function inHtmlDocument_(): boolean;
    /**
 * Tries to detect the base path of base.js script that bootstraps Closure.
 * @private
 */
    function findBasePath_(): void;
    class Transpiler {
        private requiresTranspilation_;
        /** @struct @constructor @final */
        constructor();
        /**
       * Returns a newly created map from language mode string to a boolean
       * indicating whether transpilation should be done for that mode.
       *
       * Guaranteed invariant:
       * For any two modes, l1 and l2 where l2 is a newer mode than l1,
       * `map[l1] == true` implies that `map[l2] == true`.
       *
       * Note this method is extracted and used elsewhere, so it cannot rely on
       * anything external (it should easily be able to be transformed into a
       * standalone, top level function).
       *
       * @private
       * @return {!Object<string, boolean>}
       */
        private createRequiresTranspilation_();
        /**
           * Determines whether the given language needs to be transpiled.
           * @param {string} lang
           * @return {boolean}
           */
        needsTranspile(lang: any): any;
        /**
         * Lazily retrieves the transpiler and applies it to the source.
         * @param {string} code JS code.
         * @param {string} path Path to the code.
         * @return {string} The transpiled code.
         */
        transpile(code: any, path: any): any;
    }
    class DebugLoader {
        private dependencies_;
        private oldIeWaiting_;
        private queuedModules_;
        private lastNonModuleScriptIndex_;
        /**
           * A debug loader is responsible for downloading and executing javascript
           * files in an unbundled, uncompiled environment.
           *
           * @struct @constructor
           */
        constructor();
        static IS_OLD_IE_: boolean;
        /**
           * Performs any needed preprocessing of a goog.require call.
           *
           * @param {string} name
           */
        earlyProcessLoad(name: any): void;
        /**
         * Loads the given symbol along with any dependencies.
         *
         * @param {string} name
         */
        load(name: any): void;
        /**
         * @param {string} relPath
         * @param {!Array<string>} provides
         * @param {!Array<string>} requires
         * @param {boolean|!Object<string>=} opt_loadFlags
         * @see goog.addDependency
         */
        addDependency(relPath: any, provides: any, requires: any, opt_loadFlags: any): void;
        /**
         * Imports a script if, and only if, that script hasn't already been imported.
         * (Must be called at execution time)
         * @param {string} src Script source.
         * @param {string=} opt_sourceText The optionally source text to evaluate
         * @private
         */
        private importScript_(src, opt_sourceText?);
        /**
         * Given a URL initiate retrieval and execution of a script that needs
         * pre-processing.
         * @param {string} src Script source URL.
         * @param {boolean} isModule Whether this is a goog.module.
         * @param {boolean} needsTranspile Whether this source needs transpilation.
         * @private
         */
        private importProcessedScript_(src, isModule, needsTranspile);
        /**
         * Retrieve and execute a script that needs some sort of wrapping.
         * @param {string} src Script source URL.
         * @param {boolean} isModule Whether to load as a module.
         * @param {boolean} needsTranspile Whether to transpile down to ES3.
         * @private
         * @suppress {unusedPrivateMembers}
         */
        private retrieveAndExec_(src, isModule, needsTranspile);
        /**
         * Return an appropriate module text. Suitable to insert into
         * a script tag (that is unescaped).
         * @param {string} srcUrl
         * @param {string} scriptText
         * @return {string}
         * @private
         */
        private wrapModule_(srcUrl, scriptText);
        /**
         * Handle any remaining deferred goog.module evals.
         * @private
         */
        private loadQueuedModules_();
        /**
         * Eval the named module if its dependencies are
         * available.
         * @param {string} name The module to load.
         * @private
         */
        private maybeProcessDeferredDep_(name);
        /**
         * @param {string} name The module to check.
         * @return {boolean} Whether the name represents a
         *     module whose evaluation has been deferred.
         * @private
         */
        private isDeferredModule_(name);
        /**
         * @param {string} name The module to check.
         * @return {boolean} Whether the name represents a
         *     module whose declared dependencies have all been loaded
         *     (eval'd or a deferred module load)
         * @private
         */
        private allDepsAreAvailable_(name);
        /**
         * @param {string} abspath
         * @private
         */
        private maybeProcessDeferredPath_(abspath);
        /**
         * Writes a new script pointing to {@code src} directly into the DOM.
         *
         * NOTE: This method is not CSP-compliant. @see this.appendScriptSrcNode_ for
         * the fallback mechanism.
         *
         * @param {string} src The script URL.
         * @private
         */
        private writeScriptSrcNode_(src);
        /**
         * Appends a new script node to the DOM using a CSP-compliant mechanism. This
         * method exists as a fallback for document.write (which is not allowed in a
         * strict CSP context, e.g., Chrome apps).
         *
         * NOTE: This method is not analogous to using document.write to insert a
         * <script> tag; specifically, the user agent will execute a script added by
         * document.write immediately after the current script block finishes
         * executing, whereas the DOM-appended script node will not be executed until
         * the entire document is parsed and executed. That is to say, this script is
         * added to the end of the script execution queue.
         *
         * The page must not attempt to call goog.required entities until after the
         * document has loaded, e.g., in or after the window.onload callback.
         *
         * @param {string} src The script URL.
         * @private
         */
        private appendScriptSrcNode_(src);
        /**
         * The default implementation of the import function. Writes a script tag to
         * import the script.
         *
         * @param {string} src The script url.
         * @param {string=} opt_sourceText The optionally source text to evaluate
         * @return {boolean} True if the script was imported, false otherwise.
         * @private
         */
        private writeScriptTag_(src, opt_sourceText);
        /**
         * Rewrites closing script tags in input to avoid ending an enclosing script
         * tag.
         *
         * @param {string} str
         * @return {string}
         * @private
         */
        private protectScriptTag_(str);
        /**
         * A readystatechange handler for legacy IE
         * @param {?} script
         * @param {number} scriptIndex
         * @return {boolean}
         * @private
         * @suppress {unusedPrivateMembers}
         */
        private onScriptLoad_(script, scriptIndex);
        /**
         * Looks at the dependency rules and tries to determine the script file that
         * fulfills a particular rule.
         * @param {string} rule In the form goog.namespace.Class or project.script.
         * @return {?string} Url corresponding to the rule, or null.
         * @private
         */
        private getPathFromDeps_(rule);
        /**
         * @return {!goog.Transpiler}
         * @protected @final
         */
        protected getTranspiler(): any;
        /**
         * @param {string} namespaceOrPath
         * @return {boolean}
         * @protected @final
         */
        protected isProvided(namespaceOrPath: any): boolean;
        /**
         * @return {boolean}
         * @protected @final
         */
        protected inHtmlDocument(): boolean;
        /**
         * @param {string} message
         * @protected @final
         */
        protected logToConsole(message: any): void;
        /**
         * @param {string} srcUrl
         * @return {?string}
         * @protected @final
         */
        protected loadFileSync(srcUrl: any): any;
        /**
         * @param {string} path
         * @return {string}
         * @protected @final
         */
        protected normalizePath(path: any): any;
    }
    /** @private {?goog.DebugLoader} */
    var debugLoader_: any;
    /** @param {!goog.DebugLoader} loader */
    function registerDebugLoader(loader: any): void;
    function getLoader_(): any;
}
declare namespace goog.debug {
    class Error implements Error {
        name: any;
        message: any;
        reportErrorToServer: any;
        stack: any;
        /**
       * Base class for custom error objects.
       * @param {*=} opt_msg The message associated with the error.
       * @constructor
       * @extends {Error}
       */
        constructor(opt_msg?: any);
    }
}
declare namespace goog.dom {
    /**
     * Constants for the nodeType attribute in the Node interface.
     *
     * These constants match those specified in the Node interface. These are
     * usually present on the Node object in recent browsers, but not in older
     * browsers (specifically, early IEs) and thus are given here.
     *
     * In some browsers (early IEs), these are not defined on the Node object,
     * so they are provided here.
     *
     * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
     * @enum {number}
     */
    enum NodeType {
        ELEMENT = 1,
        ATTRIBUTE = 2,
        TEXT = 3,
        CDATA_SECTION = 4,
        ENTITY_REFERENCE = 5,
        ENTITY = 6,
        PROCESSING_INSTRUCTION = 7,
        COMMENT = 8,
        DOCUMENT = 9,
        DOCUMENT_TYPE = 10,
        DOCUMENT_FRAGMENT = 11,
        NOTATION = 12,
    }
}
declare namespace goog.asserts {
    var ENABLE_ASSERTS: any;
}
declare namespace goog.asserts {
    class AssertionError extends goog.debug.Error {
        messagePattern: any;
        name: any;
        /**
         * Error object for failed assertions.
         * @param {string} messagePattern The pattern that was used to form message.
         * @param {!Array<*>} messageArgs The items to substitute into the pattern.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(messagePattern: any, messageArgs: any);
        /**
         * The default error handler.
         * @param {!goog.asserts.AssertionError} e The exception to be handled.
         */
        static DEFAULT_ERROR_HANDLER(e: any): void;
    }
    /**
     * The default error handler.
     * @param {!goog.asserts.AssertionError} e The exception to be handled.
     */
    function DEFAULT_ERROR_HANDLER(e: goog.asserts.AssertionError): void;
    /**
     * The handler responsible for throwing or logging assertion errors.
     * @private {function(!goog.asserts.AssertionError)}
     */
    function errorHandler_(e: any): void;
    /**
     * Does simple python-style string substitution.
     * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
     * @param {string} pattern The string containing the pattern.
     * @param {!Array<*>} subs The items to substitute into the pattern.
     * @return {string} A copy of {@code str} in which each occurrence of
     *     {@code %s} has been replaced an argument from {@code var_args}.
     * @private
     */
    function subs_(pattern: string, subs: Array<any>): string;
    /**
     * Throws an exception with the given message and "Assertion failed" prefixed
     * onto it.
     * @param {string} defaultMessage The message to use if givenMessage is empty.
     * @param {Array<*>} defaultArgs The substitution arguments for defaultMessage.
     * @param {string|undefined} givenMessage Message supplied by the caller.
     * @param {Array<*>} givenArgs The substitution arguments for givenMessage.
     * @throws {goog.asserts.AssertionError} When the value is not a number.
     * @private
     */
    function doAssertFailure_(defaultMessage: string, defaultArgs: Array<any>, givenMessage: string | undefined, givenArgs: Array<any>): void;
    /**
     * Sets a custom error handler that can be used to customize the behavior of
     * assertion failures, for example by turning all assertion failures into log
     * messages.
     * @param {function(!goog.asserts.AssertionError)} errorHandler
     */
    function setErrorHandler(errorHandler: any): void;
    /**
     * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is
     * true.
     * @template T
     * @param {T} condition The condition to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {T} The value of the condition.
     * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
     */
    function assert<T>(condition: T, opt_message?: string | undefined, ...var_args: any[]): T;
    /**
     * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
     * when we want to add a check in the unreachable area like switch-case
     * statement:
     *
     * <pre>
     *  switch(type) {
     *    case FOO: doSomething(); break;
     *    case BAR: doSomethingElse(); break;
     *    default: goog.asserts.fail('Unrecognized type: ' + type);
     *      // We have only 2 types - "default:" section is unreachable code.
     *  }
     * </pre>
     *
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} Failure.
     */
    function fail(opt_message?: string | undefined, ...var_args: any[]): void;
    /**
     * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {number} The value, guaranteed to be a number when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a number.
     */
    function assertNumber(value: any, opt_message?: string | undefined, ...var_args: any[]): number;
    /**
     * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {string} The value, guaranteed to be a string when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a string.
     */
    function assertString(value: any, opt_message?: string | undefined, ...var_args: any[]): string;
    /**
     * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Function} The value, guaranteed to be a function when asserts
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a function.
     */
    function assertFunction(value: any, opt_message?: string | undefined, ...var_args: any[]): Function;
    /**
     * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Object} The value, guaranteed to be a non-null object.
     * @throws {goog.asserts.AssertionError} When the value is not an object.
     */
    function assertObject(value: any, opt_message?: string | undefined, ...var_args: any[]): object;
    /**
     * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Array<?>} The value, guaranteed to be a non-null array.
     * @throws {goog.asserts.AssertionError} When the value is not an array.
     */
    function assertArray(value: any, opt_message?: string | undefined, ...var_args: any[]): Array<any>;
    /**
     * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {boolean} The value, guaranteed to be a boolean when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a boolean.
     */
    function assertBoolean(value: any, opt_message?: string | undefined, ...var_args: any[]): boolean;
    /**
     * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Element} The value, likely to be a DOM Element when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not an Element.
     */
    function assertElement(value: any, opt_message?: string | undefined, ...var_args: any[]): Element;
    /**
     * Checks if the value is an instance of the user-defined type if
     * goog.asserts.ENABLE_ASSERTS is true.
     *
     * The compiler may tighten the type returned by this function.
     *
     * @param {?} value The value to check.
     * @param {function(new: T, ...)} type A user-defined constructor.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} When the value is not an instance of
     *     type.
     * @return {T}
     * @template T
     */
    function assertInstanceof<T>(value: any, type: Function, opt_message?: string | undefined, ...var_args: any[]): T;
    /**
     * Checks whether the value is a finite number, if goog.asserts.ENABLE_ASSERTS
     * is true.
     *
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} When the value is not a number, or is
     *     a non-finite number such as NaN, Infinity or -Infinity.
     * @return {number} The value initially passed in.
     */
    function assertFinite(value: any, opt_message?: string | undefined, ...var_args: any[]): number;
    /**
     * Checks that no enumerable keys are present in Object.prototype. Such keys
     * would break most code that use {@code for (var ... in ...)} loops.
     */
    function assertObjectPrototypeIsIntact(): void;
    /**
     * Returns the type of a value. If a constructor is passed, and a suitable
     * string cannot be found, 'unknown type name' will be returned.
     * @param {*} value A constructor, object, or primitive.
     * @return {string} The best display name for the value, or 'unknown type name'.
     * @private
     */
    function getType_(value: any): string;
}
declare namespace goog {
    var NATIVE_ARRAY_PROTOTYPES: any;
}
declare namespace goog.array {
    var ASSUME_NATIVE_FUNCTIONS: any;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {IArrayLike<T>|string} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: IArrayLike<T> | string): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {IArrayLike<T>|string} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: IArrayLike<T> | string): T;
    /**
     * Returns the index of the first element of an array with a specified value,
     * or -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {IArrayLike<T>|string} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: IArrayLike<T> | string, obj: T, opt_fromIndex?: number | undefined): number;
    /**
     * Returns the index of the last element of an array with a specified value,
     * or -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!IArrayLike<T>|string} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: IArrayLike<T> | string, obj: T, opt_fromIndex?: (number | undefined) | null): number;
    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {IArrayLike<T>|string} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: S, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and
     * the array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T,S
     */
    function forEach<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => any) | null, opt_obj?: S | undefined): void;
    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: S, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T,S
     */
    function forEachRight<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => any) | null, opt_obj?: S | undefined): void;
    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to
     * the result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T,S
     */
    function filter<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3?: any) => boolean) | null, opt_obj?: S | undefined): Array<T>;
    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {IArrayLike<VALUE>|string} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will
     * be inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: IArrayLike<VALUE> | string, f: (this: THIS, arg1: VALUE, arg2: number, arg3: any) => RESULT, opt_obj?: THIS | undefined): Array<RESULT>;
    /**
     * Passes every element of an array into a function and accumulates the
     * result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and
     * the array itself) function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,S,R
     */
    function reduce<T, S, R>(arr: IArrayLike<T> | string, f: ((this: S, arg1: R, arg2: T, arg3: number, arg4: any) => R), val: any, opt_obj?: S): R;
    /**
     * Passes every element of an array into a function and accumulates the
     * result, starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and
     * the array itself) function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,S,R
     */
    function reduceRight<T, S, R>(arr: IArrayLike<T> | string, f: ((this: S, arg1: R, arg2: T, arg3: number, arg4: any) => R) | null, val: any, opt_obj?: S | undefined): R;
    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T,S
     */
    function some<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): boolean;
    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T,S
     */
    function every<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): boolean;
    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!IArrayLike<T>|string} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: S, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the
     * array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T,S
     */
    function count<T, S>(arr: IArrayLike<T> | string, f: (this: S, arg1: T, arg2: number, arg3: any) => boolean, opt_obj?: S | undefined): number;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {T|null} The first array element that passes the test, or null if no
     *     element is found.
     * @template T,S
     */
    function find<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): T | null;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T,S
     */
    function findIndex<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): number;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {T|null} The last array element that passes the test, or null if no
     *     element is found.
     * @template T,S
     */
    function findRight<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): T | null;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {IArrayLike<T>|string} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T,S
     */
    function findIndexRight<T, S>(arr: IArrayLike<T> | string, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): number;
    /**
     * Whether the array contains the given object.
     * @param {IArrayLike<?>|string} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: IArrayLike<any> | string, obj: any): boolean;
    /**
     * Whether the array is empty.
     * @param {IArrayLike<?>|string} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: IArrayLike<any> | string): boolean;
    /**
     * Clears the array.
     * @param {IArrayLike<?>} arr Array or array like object to clear.
     */
    function clear(arr: IArrayLike<any>): void;
    /**
     * Pushes an item into an array, if it's not already in the array.
     * @param {Array<T>} arr Array into which to insert the item.
     * @param {T} obj Value to add.
     * @template T
     */
    function insert<T>(arr: Array<T>, obj: T): void;
    /**
     * Inserts an object at the given index of the array.
     * @param {IArrayLike<?>} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: IArrayLike<any>, obj: any, opt_i?: number | undefined): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {IArrayLike<?>} arr The array to modify.
     * @param {IArrayLike<?>} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: IArrayLike<any>, elementsToAdd: IArrayLike<any>, opt_i?: number | undefined): void;
    /**
     * Inserts an object into an array before a specified object.
     * @param {Array<T>} arr The array to modify.
     * @param {T} obj The object to insert.
     * @param {T=} opt_obj2 The object before which obj should be inserted. If obj2
     *     is omitted or not found, obj is inserted at the end of the array.
     * @template T
     */
    function insertBefore<T>(arr: Array<T>, obj: T, opt_obj2?: T | undefined): void;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {IArrayLike<T>} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: IArrayLike<T>, obj: T): boolean;
    /**
     * Removes the last occurrence of a particular value from an array.
     * @param {!IArrayLike<T>} arr Array from which to remove value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeLast<T>(arr: IArrayLike<T>, obj: T): boolean;
    /**
     * Removes from an array the element at index i
     * @param {IArrayLike<?>} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: IArrayLike<any>, i: number): boolean;
    /**
     * Removes the first value that satisfies the given condition.
     * @param {IArrayLike<T>} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T,S
     */
    function removeIf<T, S>(arr: IArrayLike<T>, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): boolean;
    /**
     * Removes all values that satisfy the given condition.
     * @param {IArrayLike<T>} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The number of items removed
     * @template T,S
     */
    function removeAllIf<T, S>(arr: IArrayLike<T>, f: ((this: S, arg1: T, arg2: number, arg3: any) => boolean) | null, opt_obj?: S | undefined): number;
    /**
     * Returns a new array that is the result of joining the arguments.  If arrays
     * are passed then their items are added, however, if non-arrays are passed
     * they will be added to the return array as is.
     *
     * Note that ArrayLike objects will be added as is, rather than having their
     * items added.
     *
     * goog.array.concat([1, 2], [3, 4]) -> [1, 2, 3, 4]
     * goog.array.concat(0, [1, 2]) -> [0, 1, 2]
     * goog.array.concat([1, 2], null) -> [1, 2, null]
     *
     * There is bug in all current versions of IE (6, 7 and 8) where arrays
     * created in an iframe become corrupted soon (not immediately) after the
     * iframe is destroyed. This is common if loading data via goog.net.IframeIo,
     * for example. This corruption only affects the concat method which will
     * start throwing Catastrophic Errors (#-2147418113).
     *
     * See http://endoflow.com/scratch/corrupted-arrays.html for a test case.
     *
     * Internally goog.array should use this, so that all methods will continue to
     * work on these broken array objects.
     *
     * @param {...*} var_args Items to concatenate.  Arrays will have each item
     *     added, while primitives and objects will be added as is.
     * @return {!Array<?>} The new resultant array.
     */
    function concat(...var_args: any[]): Array<any>;
    /**
     * Returns a new array that contains the contents of all the arrays passed.
     * @param {...!Array<T>} var_args
     * @return {!Array<T>}
     * @template T
     */
    function join<T>(...var_args: Array<T>[]): Array<T>;
    /**
     * Converts an object to an array.
     * @param {IArrayLike<T>|string} object  The object to convert to an
     *     array.
     * @return {!Array<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: IArrayLike<T> | string): Array<T>;
    /**
     * Does a shallow copy of an array.
     * @param {IArrayLike<T>|string} arr  Array or array-like object to
     *     clone.
     * @return {!Array<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: IArrayLike<T> | string): Array<T>;
    /**
     * Extends an array with another array, element, or "array like" object.
     * This function operates 'in-place', it does not create a new Array.
     *
     * Example:
     * var a = [];
     * goog.array.extend(a, [0, 1]);
     * a; // [0, 1]
     * goog.array.extend(a, 2);
     * a; // [0, 1, 2]
     *
     * @param {Array<VALUE>} arr1  The array to modify.
     * @param {...(IArrayLike<VALUE>|VALUE)} var_args The elements or arrays of
     *     elements to add to arr1.
     * @template VALUE
     */
    function extend<VALUE>(arr1: Array<VALUE>, ...var_args: (IArrayLike<VALUE> | VALUE)[]): void;
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {IArrayLike<T>} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number.
     * Numbers are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: IArrayLike<T>, index: number | undefined, howMany: number, ...var_args: T[]): Array<T>;
    /**
     * Returns a new array from a segment of an array. This is a generic version
     * of Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {IArrayLike<T>|string} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: IArrayLike<T> | string, start: number, opt_end?: number | undefined): Array<T>;
    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {IArrayLike<T>} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: IArrayLike<T>, opt_rv: Array<any> | undefined, opt_hashFn?: (arg0: T) => string): void;
    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {IArrayLike<VALUE>} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >=
     * 0 iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: IArrayLike<VALUE>, target: TARGET, opt_compareFn?: (arg0: TARGET, arg1: VALUE) => number): number;
    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {IArrayLike<VALUE>} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index
     * and the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns
     * negative, or arr.length if no such element exists. The return value is
     * non-negative iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: IArrayLike<VALUE>, evaluator: (this: THIS, arg1: VALUE, arg2: number, arg3: any) => number, opt_obj?: THIS | undefined): number;
    /**
     * Implementation of a binary search algorithm which knows how to use both
     * comparison functions and evaluators. If an evaluator is provided, will call
     * the evaluator with the given optional data object, conforming to the
     * interface defined in binarySelect. Otherwise, if a comparison function is
     * provided, will call the comparison function against the given data object.
     *
     * This implementation purposefully does not use goog.bind or goog.partial for
     * performance reasons.
     *
     * Runtime: O(log n)
     *
     * @param {IArrayLike<?>} arr The array to be searched.
     * @param {function(?, ?, ?): number | function(?, ?): number} compareFn
     *     Either an evaluator or a comparison function, as defined by
     * binarySearch and binarySelect above.
     * @param {boolean} isEvaluator Whether the function is an evaluator or a
     *     comparison function.
     * @param {?=} opt_target If the function is a comparison function, then
     *     this is the target to binary search for.
     * @param {Object=} opt_selfObj If the function is an evaluator, this is an
     *     optional this object for the evaluator.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >=
     * 0 iff target is found.
     * @private
     */
    function binarySearch_(arr: IArrayLike<any>, compareFn: (arg0: any, arg1: any, arg2?: any) => number, isEvaluator: boolean, opt_target?: any | undefined, opt_selfObj?: object | undefined): number;
    /**
     * Sorts the specified array into ascending order.  If no opt_compareFn is
     * specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s), unlike the native sort,
     * but will give unpredictable results for heterogeneous lists of strings and
     * numbers with different numbers of digits.
     *
     * This sort is not guaranteed to be stable.
     *
     * Runtime: Same as <code>Array.prototype.sort</code>
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {?function(T,T):number=} opt_compareFn Optional comparison
     *     function by which the
     *     array is to be ordered. Should take 2 arguments to compare, and return
     * a negative number, zero, or a positive number depending on whether the
     *     first argument is less than, equal to, or greater than the second.
     * @template T
     */
    function sort<T>(arr: Array<T>, opt_compareFn?: ((arg0: T, arg1: T) => number) | null): void;
    /**
     * Sorts the specified array into ascending order in a stable way.  If no
     * opt_compareFn is specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s).
     *
     * Runtime: Same as <code>Array.prototype.sort</code>, plus an additional
     * O(n) overhead of copying the array twice.
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {?function(T, T): number=} opt_compareFn Optional comparison function
     *     by which the array is to be ordered. Should take 2 arguments to
     * compare, and return a negative number, zero, or a positive number depending
     * on whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template T
     */
    function stableSort<T>(arr: Array<T>, opt_compareFn?: ((arg0: T, arg1: T) => number) | null): void;
    /**
     * Sort the specified array into ascending order based on item keys
     * returned by the specified key function.
     * If no opt_compareFn is specified, the keys are compared in ascending order
     * using <code>goog.array.defaultCompare</code>.
     *
     * Runtime: O(S(f(n)), where S is runtime of <code>goog.array.sort</code>
     * and f(n) is runtime of the key function.
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {function(T): K} keyFn Function taking array element and returning
     *     a key used for sorting this element.
     * @param {?function(K, K): number=} opt_compareFn Optional comparison function
     *     by which the keys are to be ordered. Should take 2 arguments to
     * compare, and return a negative number, zero, or a positive number depending
     * on whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template T,K
     */
    function sortByKey<T, K>(arr: Array<T>, keyFn: (arg0: T) => K, opt_compareFn?: ((arg0: K, arg1: K) => number) | null): void;
    /**
     * Sorts an array of objects by the specified object key and compare
     * function. If no compare function is provided, the key values are
     * compared in ascending order using <code>goog.array.defaultCompare</code>.
     * This won't work for keys that get renamed by the compiler. So use
     * {'foo': 1, 'bar': 2} rather than {foo: 1, bar: 2}.
     * @param {Array<Object>} arr An array of objects to sort.
     * @param {string} key The object key to sort by.
     * @param {Function=} opt_compareFn The function to use to compare key
     *     values.
     */
    function sortObjectsByKey(arr: Array<object>, key: string, opt_compareFn?: Function | undefined): void;
    /**
     * Tells if the array is sorted.
     * @param {!IArrayLike<T>} arr The array.
     * @param {?function(T,T):number=} opt_compareFn Function to compare the
     *     array elements.
     *     Should take 2 arguments to compare, and return a negative number, zero,
     *     or a positive number depending on whether the first argument is less
     *     than, equal to, or greater than the second.
     * @param {boolean=} opt_strict If true no equal elements are allowed.
     * @return {boolean} Whether the array is sorted.
     * @template T
     */
    function isSorted<T>(arr: IArrayLike<T>, opt_compareFn?: ((arg0: T, arg1: T) => number) | null, opt_strict?: boolean | undefined): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according
     * to the comparison function.
     *
     * @param {IArrayLike<?>} arr1 The first array to compare.
     * @param {IArrayLike<?>} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: IArrayLike<any>, arr2: IArrayLike<any>, opt_equalsFn?: Function | undefined): boolean;
    /**
     * 3-way array compare function.
     * @param {!IArrayLike<VALUE>} arr1 The first array to
     *     compare.
     * @param {!IArrayLike<VALUE>} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments
     * to compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: IArrayLike<VALUE>, arr2: IArrayLike<VALUE>, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): number;
    /**
     * Compares its two arguments for order, using the built in < and >
     * operators.
     * @param {VALUE} a The first object to be compared.
     * @param {VALUE} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is less than, equal to, or greater than the second,
     *     respectively.
     * @template VALUE
     */
    function defaultCompare<VALUE>(a: VALUE, b: VALUE): number;
    /**
     * Compares its two arguments for inverse order, using the built in < and >
     * operators.
     * @param {VALUE} a The first object to be compared.
     * @param {VALUE} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is greater than, equal to, or less than the second,
     *     respectively.
     * @template VALUE
     */
    function inverseDefaultCompare<VALUE>(a: VALUE, b: VALUE): number;
    /**
     * Compares its two arguments for equality, using the built in === operator.
     * @param {*} a The first object to compare.
     * @param {*} b The second object to compare.
     * @return {boolean} True if the two arguments are equal, false otherwise.
     */
    function defaultCompareEquality(a: any, b: any): boolean;
    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {IArrayLike<VALUE>} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: IArrayLike<VALUE>, value: VALUE, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): boolean;
    /**
     * Removes a value from a sorted array.
     * @param {!IArrayLike<VALUE>} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: IArrayLike<VALUE>, value: VALUE, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): boolean;
    /**
     * Splits an array into disjoint buckets according to a splitting function.
     * @param {IArrayLike<T>} array The array.
     * @param {function(this:S, T, number, !IArrayLike<T>):?} sorter Function to
     *     call for every element.  This takes 3 arguments (the element, the index
     *     and the array) and must return a valid object key (a string, number,
     *     etc), or undefined, if that object should not be placed in a bucket.
     * @param {S=} opt_obj The object to be used as the value of 'this' within
     *     sorter.
     * @return {!Object<!Array<T>>} An object, with keys being all of the unique
     *     return values of sorter, and values being arrays containing the items
     * for which the splitter returned that key.
     * @template T,S
     */
    function bucket<T, S>(array: IArrayLike<T>, sorter: (this: S, arg1: T, arg2: number, arg3: IArrayLike<T>) => any, opt_obj?: S | undefined): Object;
    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {IArrayLike<T>} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element,
     * the index and the array) and should return a string that will be used as
     * the key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object<T>} The new object.
     * @template T,S
     */
    function toObject<T, S>(arr: IArrayLike<T>, keyFunc: ((this: S, arg1: T, arg2: number, arg3: any) => string) | null, opt_obj?: S | undefined): Object;
    /**
     * Creates a range of numbers in an arithmetic progression.
     *
     * Range takes 1, 2, or 3 arguments:
     * <pre>
     * range(5) is the same as range(0, 5, 1) and produces [0, 1, 2, 3, 4]
     * range(2, 5) is the same as range(2, 5, 1) and produces [2, 3, 4]
     * range(-2, -5, -1) produces [-2, -3, -4]
     * range(-2, -5, 1) produces [], since stepping by 1 wouldn't ever reach -5.
     * </pre>
     *
     * @param {number} startOrEnd The starting value of the range if an end argument
     *     is provided. Otherwise, the start value is 0, and this is the end
     * value.
     * @param {number=} opt_end The optional end value of the range.
     * @param {number=} opt_step The step size between range values. Defaults to 1
     *     if opt_step is undefined or 0.
     * @return {!Array<number>} An array of numbers for the requested range. May be
     *     an empty array if adding the step would not converge toward the end
     *     value.
     */
    function range(startOrEnd: number, opt_end?: number | undefined, opt_step?: number | undefined): Array<number>;
    /**
     * Returns an array consisting of the given value repeated N times.
     *
     * @param {VALUE} value The value to repeat.
     * @param {number} n The repeat count.
     * @return {!Array<VALUE>} An array with the repeated value.
     * @template VALUE
     */
    function repeat<VALUE>(value: VALUE, n: number): Array<VALUE>;
    /**
     * Returns an array consisting of every argument with all arrays
     * expanded in-place recursively.
     *
     * @param {...*} var_args The values to flatten.
     * @return {!Array<?>} An array containing the flattened values.
     */
    function flatten(...var_args: any[]): Array<any>;
    /**
     * Rotates an array in-place. After calling this method, the element at
     * index i will be the element previously at index (i - n) %
     * array.length, for all values of i between 0 and array.length - 1,
     * inclusive.
     *
     * For example, suppose list comprises [t, a, n, k, s]. After invoking
     * rotate(array, 1) (or rotate(array, -4)), array will comprise [s, t, a, n,
     * k].
     *
     * @param {!Array<T>} array The array to rotate.
     * @param {number} n The amount to rotate.
     * @return {!Array<T>} The array.
     * @template T
     */
    function rotate<T>(array: Array<T>, n: number): Array<T>;
    /**
     * Moves one item of an array to a new position keeping the order of the rest
     * of the items. Example use case: keeping a list of JavaScript objects
     * synchronized with the corresponding list of DOM elements after one of the
     * elements has been dragged to a new position.
     * @param {!IArrayLike<?>} arr The array to modify.
     * @param {number} fromIndex Index of the item to move between 0 and
     *     {@code arr.length - 1}.
     * @param {number} toIndex Target index between 0 and {@code arr.length - 1}.
     */
    function moveItem(arr: IArrayLike<any>, fromIndex: number, toIndex: number): void;
    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as
     * long as the shortest array provided; additional values are ignored.  For
     * example, the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!IArrayLike<?>} var_args Arrays to be combined.
     * @return {!Array<!Array<?>>} A new array of arrays created from
     *     provided arrays.
     */
    function zip(...var_args: IArrayLike<any>[]): Array<Array<any>>;
    /**
     * Shuffles the values in the specified array using the Fisher-Yates in-place
     * shuffle (also known as the Knuth Shuffle). By default, calls Math.random()
     * and so resets the state of that random number generator. Similarly, may
     * reset the state of the any other specified random number generator.
     *
     * Runtime: O(n)
     *
     * @param {!Array<?>} arr The array to be shuffled.
     * @param {function():number=} opt_randFn Optional random function to use for
     *     shuffling.
     *     Takes no arguments, and returns a random number on the interval [0, 1).
     *     Defaults to Math.random() using JavaScript's built-in Math library.
     */
    function shuffle(arr: Array<any>, opt_randFn?: () => number): void;
    /**
     * Returns a new array of elements from arr, based on the indexes of elements
     * provided by index_arr. For example, the result of index copying
     * ['a', 'b', 'c'] with index_arr [1,0,0,2] is ['b', 'a', 'a', 'c'].
     *
     * @param {!IArrayLike<T>} arr The array to get a indexed copy from.
     * @param {!IArrayLike<number>} index_arr An array of indexes to get from arr.
     * @return {!Array<T>} A new array of elements from arr in index_arr order.
     * @template T
     */
    function copyByIndex<T>(arr: IArrayLike<T>, index_arr: IArrayLike<number>): Array<T>;
    /**
     * Maps each element of the input array into zero or more elements of the
     * output array.
     *
     * @param {!IArrayLike<VALUE>|string} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): !Array<RESULT>} f The function
     *     to call for every element. This function takes 3 arguments (the
     * element, the index and the array) and should return an array. The result
     * will be used to extend a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array<RESULT>} a new array with the concatenation of all arrays
     *     returned from f.
     * @template THIS, VALUE, RESULT
     */
    function concatMap<THIS, VALUE, RESULT>(arr: IArrayLike<VALUE> | string, f: (this: THIS, arg1: VALUE, arg2: number, arg3: any) => Array<RESULT>, opt_obj?: THIS | undefined): Array<RESULT>;
}
declare namespace goog.dom {
    class TagName<T> {
        private tagName_;
        /**
         * A tag name with the type of the element stored in the generic.
         * @param {string} tagName
         * @constructor
         * @template T
         */
        constructor(tagName: any);
        /**
         * Returns the tag name.
         * @return {string}
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.dom.TagName {
    /** @type {!goog.dom.TagName<!HTMLAnchorElement>} */
    var A: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ABBR: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ACRONYM: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ADDRESS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAppletElement>} */
    var APPLET: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAreaElement>} */
    var AREA: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ARTICLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ASIDE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAudioElement>} */
    var AUDIO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var B: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBaseElement>} */
    var BASE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBaseFontElement>} */
    var BASEFONT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BDI: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BDO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BIG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    var BLOCKQUOTE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBodyElement>} */
    var BODY: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBRElement>} */
    var BR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLButtonElement>} */
    var BUTTON: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLCanvasElement>} */
    var CANVAS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCaptionElement>} */
    var CAPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CENTER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CITE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CODE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    var COL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    var COLGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var COMMAND: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DATA: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDataListElement>} */
    var DATALIST: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DD: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    var DEL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDetailsElement>} */
    var DETAILS: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DFN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDialogElement>} */
    var DIALOG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDirectoryElement>} */
    var DIR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDivElement>} */
    var DIV: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDListElement>} */
    var DL: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var EM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLEmbedElement>} */
    var EMBED: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFieldSetElement>} */
    var FIELDSET: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FIGCAPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FIGURE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFontElement>} */
    var FONT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FOOTER: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFormElement>} */
    var FORM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFrameElement>} */
    var FRAME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFrameSetElement>} */
    var FRAMESET: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H1: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H2: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H3: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H4: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H5: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H6: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadElement>} */
    var HEAD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var HEADER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var HGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHRElement>} */
    var HR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHtmlElement>} */
    var HTML: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var I: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLIFrameElement>} */
    var IFRAME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLImageElement>} */
    var IMG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLInputElement>} */
    var INPUT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    var INS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLIsIndexElement>} */
    var ISINDEX: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var KBD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var KEYGEN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLabelElement>} */
    var LABEL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLegendElement>} */
    var LEGEND: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLIElement>} */
    var LI: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLinkElement>} */
    var LINK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MAIN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMapElement>} */
    var MAP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MARK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MATH: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMenuElement>} */
    var MENU: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMenuItemElement>} */
    var MENUITEM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMetaElement>} */
    var META: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMeterElement>} */
    var METER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NAV: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NOFRAMES: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NOSCRIPT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLObjectElement>} */
    var OBJECT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOListElement>} */
    var OL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOptGroupElement>} */
    var OPTGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOptionElement>} */
    var OPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOutputElement>} */
    var OUTPUT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLParagraphElement>} */
    var P: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLParamElement>} */
    var PARAM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLPictureElement>} */
    var PICTURE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLPreElement>} */
    var PRE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLProgressElement>} */
    var PROGRESS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    var Q: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RTC: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RUBY: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var S: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SAMP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLScriptElement>} */
    var SCRIPT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SECTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSelectElement>} */
    var SELECT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SMALL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSourceElement>} */
    var SOURCE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSpanElement>} */
    var SPAN: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var STRIKE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var STRONG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLStyleElement>} */
    var STYLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUB: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUMMARY: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SVG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableElement>} */
    var TABLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var TBODY: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    var TD: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTemplateElement>} */
    var TEMPLATE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTextAreaElement>} */
    var TEXTAREA: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var TFOOT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    var TH: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var THEAD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var TIME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTitleElement>} */
    var TITLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableRowElement>} */
    var TR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTrackElement>} */
    var TRACK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var TT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var U: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLUListElement>} */
    var UL: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var VAR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLVideoElement>} */
    var VIDEO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var WBR: TagName<{}>;
}
declare namespace goog.string {
    /**
     * Common Unicode string characters.
     * @const
     * @enum {string}
     */
    var Unicode: {
        NBSP: string;
    };
    /**
     * Fast prefix-checker.
     */
    function startsWith(str: string, prefix: string): boolean;
    function endsWith(str: string, suffix: string): boolean;
    /**
     * Case-insensitive prefix-checker.
     * @param {string} str The string to check.
     * @param {string} prefix  A string to look for at the end of {@code str}.
     * @return {boolean} True if {@code str} begins with {@code prefix} (ignoring
     *     case).
     */
    function caseInsensitiveStartsWith(str: string, prefix: string): boolean;
    /**
     * Case-insensitive suffix-checker.
     * @param {string} str The string to check.
     * @param {string} suffix A string to look for at the end of {@code str}.
     * @return {boolean} True if {@code str} ends with {@code suffix} (ignoring
     *     case).
     */
    function caseInsensitiveEndsWith(str: string, suffix: string): boolean;
    /**
     * Case-insensitive equality checker.
     * @param {string} str1 First string to check.
     * @param {string} str2 Second string to check.
     * @return {boolean} True if {@code str1} and {@code str2} are the same string,
     *     ignoring case.
     */
    function caseInsensitiveEquals(str1: string, str2: string): boolean;
    /**
 * Does simple python-style string substitution.
 * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
 * @param {string} str The string containing the pattern.
 * @param {...*} var_args The items to substitute into the pattern.
 * @return {string} A copy of {@code str} in which each occurrence of
 *     {@code %s} has been replaced an argument from {@code var_args}.
 */
    function subs(str: any, ...var_args: any[]): string;
    /**
     * Converts multiple whitespace chars (spaces, non-breaking-spaces, new lines
     * and tabs) to a single space, and strips leading and trailing whitespace.
     * @param {string} str Input string.
     * @return {string} A copy of {@code str} with collapsed whitespace.
     */
    function collapseWhitespace(str: any): any;
    /**
     * Checks if a string is empty or contains only whitespaces.
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty or whitespace only.
     */
    function isEmptyOrWhitespace(str: any): boolean;
    /**
     * Checks if a string is empty.
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty.
     */
    function isEmptyString(str: any): boolean;
    /**
     * Checks if a string is empty or contains only whitespaces.
     *
     * @param {string} str The string to check.
     * @return {boolean} Whether {@code str} is empty or whitespace only.
     * @deprecated Use goog.string.isEmptyOrWhitespace instead.
     */
    function isEmpty(str: string): boolean;
    /**
     * Checks if a string is null, undefined, empty or contains only whitespaces.
     * @param {*} str The string to check.
     * @return {boolean} Whether {@code str} is null, undefined, empty, or
     *     whitespace only.
     * @deprecated Use goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str))
     *     instead.
     */
    function isEmptyOrWhitespaceSafe(str: any): boolean;
    /**
     * Checks if a string is null, undefined, empty or contains only whitespaces.
     *
     * @param {*} str The string to check.
     * @return {boolean} Whether {@code str} is null, undefined, empty, or
     *     whitespace only.
     * @deprecated Use goog.string.isEmptyOrWhitespace instead.
     */
    function isEmptySafe(str: string): boolean;
    /**
     * Checks if a string is all breaking whitespace.
     * @param {string} str The string to check.
     * @return {boolean} Whether the string is all breaking whitespace.
     */
    function isBreakingWhitespace(str: any): boolean;
    /**
     * Checks if a string contains all letters.
     * @param {string} str string to check.
     * @return {boolean} True if {@code str} consists entirely of letters.
     */
    function isAlpha(str: any): boolean;
    /**
     * Checks if a string contains only numbers.
     * @param {*} str string to check. If not a string, it will be
     *     casted to one.
     * @return {boolean} True if {@code str} is numeric.
     */
    function isNumeric(str: any): boolean;
    /**
     * Checks if a string contains only numbers or letters.
     * @param {string} str string to check.
     * @return {boolean} True if {@code str} is alphanumeric.
     */
    function isAlphaNumeric(str: any): boolean;
    /**
     * Checks if a character is a space character.
     * @param {string} ch Character to check.
     * @return {boolean} True if {@code ch} is a space.
     */
    function isSpace(ch: any): boolean;
    /**
     * Checks if a character is a valid unicode character.
     * @param {string} ch Character to check.
     * @return {boolean} True if {@code ch} is a valid unicode character.
     */
    function isUnicodeChar(ch: any): boolean;
    /**
     * Takes a string and replaces newlines with a space. Multiple lines are
     * replaced with a single space.
     * @param {string} str The string from which to strip newlines.
     * @return {string} A copy of {@code str} stripped of newlines.
     */
    function stripNewlines(str: any): any;
    /**
     * Replaces Windows and Mac new lines with unix style: \r or \r\n with \n.
     * @param {string} str The string to in which to canonicalize newlines.
     * @return {string} {@code str} A copy of {@code} with canonicalized newlines.
     */
    function canonicalizeNewlines(str: any): any;
    /**
     * Normalizes whitespace in a string, replacing all whitespace chars with
     * a space.
     * @param {string} str The string in which to normalize whitespace.
     * @return {string} A copy of {@code str} with all whitespace normalized.
     */
    function normalizeWhitespace(str: any): any;
    /**
     * Normalizes spaces in a string, replacing all consecutive spaces and tabs
     * with a single space. Replaces non-breaking space with a space.
     * @param {string} str The string in which to normalize spaces.
     * @return {string} A copy of {@code str} with all consecutive spaces and tabs
     *    replaced with a single space.
     */
    function normalizeSpaces(str: any): any;
    /**
     * Removes the breaking spaces from the left and right of the string and
     * collapses the sequences of breaking spaces in the middle into single spaces.
     * The original and the result strings render the same way in HTML.
     * @param {string} str A string in which to collapse spaces.
     * @return {string} Copy of the string with normalized breaking spaces.
     */
    function collapseBreakingSpaces(str: any): any;
    /**
   * Trims white spaces to the left and right of a string.
   * @param {string} str The string to trim.
   * @return {string} A trimmed copy of {@code str}.
   */
    function trim(str: any): any;
    /**
     * Trims whitespaces at the left end of a string.
     * @param {string} str The string to left trim.
     * @return {string} A trimmed copy of {@code str}.
     */
    function trimLeft(str: any): any;
    /**
     * Trims whitespaces at the right end of a string.
     * @param {string} str The string to right trim.
     * @return {string} A trimmed copy of {@code str}.
     */
    function trimRight(str: any): any;
    /**
     * A string comparator that ignores case.
     * -1 = str1 less than str2
     *  0 = str1 equals str2
     *  1 = str1 greater than str2
     *
     * @param {string} str1 The string to compare.
     * @param {string} str2 The string to compare {@code str1} to.
     * @return {number} The comparator result, as described above.
     */
    function caseInsensitiveCompare(str1: any, str2: any): 0 | 1 | -1;
    /**
     * Compares two strings interpreting their numeric substrings as numbers.
     *
     * @param {string} str1 First string.
     * @param {string} str2 Second string.
     * @param {!RegExp} tokenizerRegExp Splits a string into substrings of
     *     non-negative integers, non-numeric characters and optionally fractional
     *     numbers starting with a decimal point.
     * @return {number} Negative if str1 < str2, 0 is str1 == str2, positive if
     *     str1 > str2.
     * @private
     */
    function numberAwareCompare_(str1: any, str2: any, tokenizerRegExp: any): number;
    /**
     * String comparison function that handles non-negative integer numbers in a
     * way humans might expect. Using this function, the string 'File 2.jpg' sorts
     * before 'File 10.jpg', and 'Version 1.9' before 'Version 1.10'. The comparison
     * is mostly case-insensitive, though strings that are identical except for case
     * are sorted with the upper-case strings before lower-case.
     *
     * This comparison function is up to 50x slower than either the default or the
     * case-insensitive compare. It should not be used in time-critical code, but
     * should be fast enough to sort several hundred short strings (like filenames)
     * with a reasonable delay.
     *
     * @param {string} str1 The string to compare in a numerically sensitive way.
     * @param {string} str2 The string to compare {@code str1} to.
     * @return {number} less than 0 if str1 < str2, 0 if str1 == str2, greater than
     *     0 if str1 > str2.
     */
    function intAwareCompare(str1: any, str2: any): number;
    /**
     * String comparison function that handles non-negative integer and fractional
     * numbers in a way humans might expect. Using this function, the string
     * 'File 2.jpg' sorts before 'File 10.jpg', and '3.14' before '3.2'. Equivalent
     * to {@link goog.string.intAwareCompare} apart from the way how it interprets
     * dots.
     *
     * @param {string} str1 The string to compare in a numerically sensitive way.
     * @param {string} str2 The string to compare {@code str1} to.
     * @return {number} less than 0 if str1 < str2, 0 if str1 == str2, greater than
     *     0 if str1 > str2.
     */
    function floatAwareCompare(str1: any, str2: any): number;
    /**
     * Alias for {@link goog.string.floatAwareCompare}.
     *
     * @param {string} str1
     * @param {string} str2
     * @return {number}
     */
    function numerateCompare(str1: any, str2: any): any;
    /**
     * URL-encodes a string
     * @param {*} str The string to url-encode.
     * @return {string} An encoded copy of {@code str} that is safe for urls.
     *     Note that '#', ':', and other characters used to delimit portions
     *     of URLs *will* be encoded.
     */
    function urlEncode(str: any): string;
    /**
     * URL-decodes the string. We need to specially handle '+'s because
     * the javascript library doesn't convert them to spaces.
     * @param {string} str The string to url decode.
     * @return {string} The decoded {@code str}.
     */
    function urlDecode(str: any): string;
    /**
     * Converts \n to <br>s or <br />s.
     * @param {string} str The string in which to convert newlines.
     * @param {boolean=} opt_xml Whether to use XML compatible tags.
     * @return {string} A copy of {@code str} with converted newlines.
     */
    function newLineToBr(str: any, opt_xml?: any): any;
    /**
     * Escapes double quote '"' and single quote '\'' characters in addition to
     * '&', '<', and '>' so that a string can be included in an HTML tag attribute
     * value within double or single quotes.
     *
     * It should be noted that > doesn't need to be escaped for the HTML or XML to
     * be valid, but it has been decided to escape it for consistency with other
     * implementations.
     *
     * With goog.string.DETECT_DOUBLE_ESCAPING, this function escapes also the
     * lowercase letter "e".
     *
     * NOTE(user):
     * HtmlEscape is often called during the generation of large blocks of HTML.
     * Using statics for the regular expressions and strings is an optimization
     * that can more than half the amount of time IE spends in this function for
     * large apps, since strings and regexes both contribute to GC allocations.
     *
     * Testing for the presence of a character before escaping increases the number
     * of function calls, but actually provides a speed increase for the average
     * case -- since the average case often doesn't require the escaping of all 4
     * characters and indexOf() is much cheaper than replace().
     * The worst case does suffer slightly from the additional calls, therefore the
     * opt_isLikelyToContainHtmlChars option has been included for situations
     * where all 4 HTML entities are very likely to be present and need escaping.
     *
     * Some benchmarks (times tended to fluctuate +-0.05ms):
     *                                     FireFox                     IE6
     * (no chars / average (mix of cases) / all 4 chars)
     * no checks                     0.13 / 0.22 / 0.22         0.23 / 0.53 / 0.80
     * indexOf                       0.08 / 0.17 / 0.26         0.22 / 0.54 / 0.84
     * indexOf + re test             0.07 / 0.17 / 0.28         0.19 / 0.50 / 0.85
     *
     * An additional advantage of checking if replace actually needs to be called
     * is a reduction in the number of object allocations, so as the size of the
     * application grows the difference between the various methods would increase.
     *
     * @param {string} str string to be escaped.
     * @param {boolean=} opt_isLikelyToContainHtmlChars Don't perform a check to see
     *     if the character needs replacing - use this option if you expect each of
     *     the characters to appear often. Leave false if you expect few html
     *     characters to occur in your strings, such as if you are escaping HTML.
     * @return {string} An escaped copy of {@code str}.
     */
    function htmlEscape(str: any, opt_isLikelyToContainHtmlChars?: boolean): any;
    /**
 * Unescapes an HTML string.
 *
 * @param {string} str The string to unescape.
 * @return {string} An unescaped copy of {@code str}.
 */
    function unescapeEntities(str: any): any;
    /**
     * Unescapes a HTML string using the provided document.
     *
     * @param {string} str The string to unescape.
     * @param {!Document} document A document to use in escaping the string.
     * @return {string} An unescaped copy of {@code str}.
     */
    function unescapeEntitiesWithDocument(str: any, document: any): any;
    /**
     * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
     * entities. This function is XSS-safe and whitespace-preserving.
     * @private
     * @param {string} str The string to unescape.
     * @param {Document=} opt_document An optional document to use for creating
     *     elements. If this is not specified then the default window.document
     *     will be used.
     * @return {string} The unescaped {@code str} string.
     */
    function unescapeEntitiesUsingDom_(str: any, opt_document?: Document): any;
    /**
     * Unescapes XML entities.
     * @private
     * @param {string} str The string to unescape.
     * @return {string} An unescaped copy of {@code str}.
     */
    function unescapePureXmlEntities_(str: any): any;
    /**
 * Do escaping of whitespace to preserve spatial formatting. We use character
 * entity #160 to make it safer for xml.
 * @param {string} str The string in which to escape whitespace.
 * @param {boolean=} opt_xml Whether to use XML compatible tags.
 * @return {string} An escaped copy of {@code str}.
 */
    function whitespaceEscape(str: any, opt_xml?: any): any;
    /**
     * Preserve spaces that would be otherwise collapsed in HTML by replacing them
     * with non-breaking space Unicode characters.
     * @param {string} str The string in which to preserve whitespace.
     * @return {string} A copy of {@code str} with preserved whitespace.
     */
    function preserveSpaces(str: any): any;
    /**
     * Strip quote characters around a string.  The second argument is a string of
     * characters to treat as quotes.  This can be a single character or a string of
     * multiple character and in that case each of those are treated as possible
     * quote characters. For example:
     *
     * <pre>
     * goog.string.stripQuotes('"abc"', '"`') --> 'abc'
     * goog.string.stripQuotes('`abc`', '"`') --> 'abc'
     * </pre>
     *
     * @param {string} str The string to strip.
     * @param {string} quoteChars The quote characters to strip.
     * @return {string} A copy of {@code str} without the quotes.
     */
    function stripQuotes(str: any, quoteChars: any): any;
    /**
     * Truncates a string to a certain length and adds '...' if necessary.  The
     * length also accounts for the ellipsis, so a maximum length of 10 and a string
     * 'Hello World!' produces 'Hello W...'.
     * @param {string} str The string to truncate.
     * @param {number} chars Max number of characters.
     * @param {boolean=} opt_protectEscapedCharacters Whether to protect escaped
     *     characters from being cut off in the middle.
     * @return {string} The truncated {@code str} string.
     */
    function truncate(str: any, chars: any, opt_protectEscapedCharacters?: any): any;
    /**
     * Truncate a string in the middle, adding "..." if necessary,
     * and favoring the beginning of the string.
     * @param {string} str The string to truncate the middle of.
     * @param {number} chars Max number of characters.
     * @param {boolean=} opt_protectEscapedCharacters Whether to protect escaped
     *     characters from being cutoff in the middle.
     * @param {number=} opt_trailingChars Optional number of trailing characters to
     *     leave at the end of the string, instead of truncating as close to the
     *     middle as possible.
     * @return {string} A truncated copy of {@code str}.
     */
    function truncateMiddle(str: any, chars: any, opt_protectEscapedCharacters?: any, opt_trailingChars?: any): any;
    /**
 * Encloses a string in double quotes and escapes characters so that the
 * string is a valid JS string. The resulting string is safe to embed in
 * `<script>` tags as "<" is escaped.
 * @param {string} s The string to quote.
 * @return {string} A copy of {@code s} surrounded by double quotes.
 */
    function quote(s: any): string;
    /**
     * Takes a string and returns the escaped string for that input string.
     * @param {string} str The string to escape.
     * @return {string} An escaped string representing {@code str}.
     */
    function escapeString(str: any): string;
    /**
     * Takes a character and returns the escaped string for that character. For
     * example escapeChar(String.fromCharCode(15)) -> "\\x0E".
     * @param {string} c The character to escape.
     * @return {string} An escaped string representing {@code c}.
     */
    function escapeChar(c: any): any;
    /**
     * Determines whether a string contains a substring.
     * @param {string} str The string to search.
     * @param {string} subString The substring to search for.
     * @return {boolean} Whether {@code str} contains {@code subString}.
     */
    function contains(str: any, subString: any): boolean;
    /**
     * Determines whether a string contains a substring, ignoring case.
     * @param {string} str The string to search.
     * @param {string} subString The substring to search for.
     * @return {boolean} Whether {@code str} contains {@code subString}.
     */
    function caseInsensitiveContains(str: any, subString: any): boolean;
    /**
     * Returns the non-overlapping occurrences of ss in s.
     * If either s or ss evalutes to false, then returns zero.
     * @param {string} s The string to look in.
     * @param {string} ss The string to look for.
     * @return {number} Number of occurrences of ss in s.
     */
    function countOf(s: any, ss: any): number;
    /**
     * Removes a substring of a specified length at a specific
     * index in a string.
     * @param {string} s The base string from which to remove.
     * @param {number} index The index at which to remove the substring.
     * @param {number} stringLength The length of the substring to remove.
     * @return {string} A copy of {@code s} with the substring removed or the full
     *     string if nothing is removed or the input is invalid.
     */
    function removeAt(s: any, index: any, stringLength: any): any;
    /**
     * Removes the first occurrence of a substring from a string.
     * @param {string} str The base string from which to remove.
     * @param {string} substr The string to remove.
     * @return {string} A copy of {@code str} with {@code substr} removed or the
     *     full string if nothing is removed.
     */
    function remove(str: any, substr: any): any;
    /**
     *  Removes all occurrences of a substring from a string.
     *  @param {string} s The base string from which to remove.
     *  @param {string} ss The string to remove.
     *  @return {string} A copy of {@code s} with {@code ss} removed or the full
     *      string if nothing is removed.
     */
    function removeAll(s: any, ss: any): any;
    /**
     *  Replaces all occurrences of a substring of a string with a new substring.
     *  @param {string} s The base string from which to remove.
     *  @param {string} ss The string to replace.
     *  @param {string} replacement The replacement string.
     *  @return {string} A copy of {@code s} with {@code ss} replaced by
     *      {@code replacement} or the original string if nothing is replaced.
     */
    function replaceAll(s: any, ss: any, replacement: any): any;
    /**
     * Escapes characters in the string that are not safe to use in a RegExp.
     * @param {*} s The string to escape. If not a string, it will be casted
     *     to one.
     * @return {string} A RegExp safe, escaped copy of {@code s}.
     */
    function regExpEscape(s: any): string;
    /**
     * Repeats a string n times.
     * @param {string} string The string to repeat.
     * @param {number} length The number of times to repeat.
     * @return {string} A string containing {@code length} repetitions of
     *     {@code string}.
     */
    function repeat(string: string, length: number): any;
    /**
 * Pads number to given length and optionally rounds it to a given precision.
 * For example:
 * <pre>padNumber(1.25, 2, 3) -> '01.250'
 * padNumber(1.25, 2) -> '01.25'
 * padNumber(1.25, 2, 1) -> '01.3'
 * padNumber(1.25, 0) -> '1.25'</pre>
 *
 * @param {number} num The number to pad.
 * @param {number} length The desired length.
 * @param {number=} opt_precision The desired precision.
 * @return {string} {@code num} as a string with the given options.
 */
    function padNumber(num: any, length: any, opt_precision?: any): any;
    /**
     * Returns a string representation of the given object, with
     * null and undefined being returned as the empty string.
     *
     * @param {*} obj The object to convert.
     * @return {string} A string representation of the {@code obj}.
     */
    function makeSafe(obj: any): string;
    /**
     * Concatenates string expressions. This is useful
     * since some browsers are very inefficient when it comes to using plus to
     * concat strings. Be careful when using null and undefined here since
     * these will not be included in the result. If you need to represent these
     * be sure to cast the argument to a String first.
     * For example:
     * <pre>buildString('a', 'b', 'c', 'd') -> 'abcd'
     * buildString(null, undefined) -> ''
     * </pre>
     * @param {...*} var_args A list of strings to concatenate. If not a string,
     *     it will be casted to one.
     * @return {string} The concatenation of {@code var_args}.
     */
    function buildString(var_args: any): any;
    /**
     * Returns a string with at least 64-bits of randomness.
     *
     * Doesn't trust Javascript's random function entirely. Uses a combination of
     * random and current timestamp, and then encodes the string in base-36 to
     * make it shorter.
     *
     * @return {string} A random string, e.g. sn1s7vb4gcic.
     */
    function getRandomString(): string;
    /**
     * Compares two version numbers.
     *
     * @param {string|number} version1 Version of first item.
     * @param {string|number} version2 Version of second item.
     *
     * @return {number}  1 if {@code version1} is higher.
     *                   0 if arguments are equal.
     *                  -1 if {@code version2} is higher.
     */
    function compareVersions(version1: any, version2: any): number;
    /**
     * Compares elements of a version number.
     *
     * @param {string|number|boolean} left An element from a version number.
     * @param {string|number|boolean} right An element from a version number.
     *
     * @return {number}  1 if {@code left} is higher.
     *                   0 if arguments are equal.
     *                  -1 if {@code right} is higher.
     * @private
     */
    function compareElements_(left: any, right: any): 0 | 1 | -1;
    /**
     * String hash function similar to java.lang.String.hashCode().
     * The hash code for a string is computed as
     * s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
     * where s[i] is the ith character of the string and n is the length of
     * the string. We mod the result to make it between 0 (inclusive) and 2^32
     * (exclusive).
     * @param {string} str A string.
     * @return {number} Hash value for {@code str}, between 0 (inclusive) and 2^32
     *  (exclusive). The empty string returns 0.
     */
    function hashCode(str: any): number;
    /**
 * Generates and returns a string which is unique in the current document.
 * This is useful, for example, to create unique IDs for DOM elements.
 * @return {string} A unique id.
 */
    function createUniqueString(): string;
    /**
     * Converts the supplied string to a number, which may be Infinity or NaN.
     * This function strips whitespace: (toNumber(' 123') === 123)
     * This function accepts scientific notation: (toNumber('1e1') === 10)
     *
     * This is better than Javascript's built-in conversions because, sadly:
     *     (Number(' ') === 0) and (parseFloat('123a') === 123)
     *
     * @param {string} str The string to convert.
     * @return {number} The number the supplied string represents, or NaN.
     */
    function toNumber(str: any): number;
    /**
     * Returns whether the given string is lower camel case (e.g. "isFooBar").
     *
     * Note that this assumes the string is entirely letters.
     * @see http://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms
     *
     * @param {string} str String to test.
     * @return {boolean} Whether the string is lower camel case.
     */
    function isLowerCamelCase(str: any): boolean;
    /**
     * Returns whether the given string is upper camel case (e.g. "FooBarBaz").
     *
     * Note that this assumes the string is entirely letters.
     * @see http://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms
     *
     * @param {string} str String to test.
     * @return {boolean} Whether the string is upper camel case.
     */
    function isUpperCamelCase(str: any): boolean;
    /**
     * Converts a string from selector-case to camelCase (e.g. from
     * "multi-part-string" to "multiPartString"), useful for converting
     * CSS selectors and HTML dataset keys to their equivalent JS properties.
     * @param {string} str The string in selector-case form.
     * @return {string} The string in camelCase form.
     */
    function toCamelCase(str: any): string;
    /**
     * Converts a string from camelCase to selector-case (e.g. from
     * "multiPartString" to "multi-part-string"), useful for converting JS
     * style and dataset properties to equivalent CSS selectors and HTML keys.
     * @param {string} str The string in camelCase form.
     * @return {string} The string in selector-case form.
     */
    function toSelectorCase(str: any): string;
    /**
     * Converts a string into TitleCase. First character of the string is always
     * capitalized in addition to the first letter of every subsequent word.
     * Words are delimited by one or more whitespaces by default. Custom delimiters
     * can optionally be specified to replace the default, which doesn't preserve
     * whitespace delimiters and instead must be explicitly included if needed.
     *
     * Default delimiter => " ":
     *    goog.string.toTitleCase('oneTwoThree')    => 'OneTwoThree'
     *    goog.string.toTitleCase('one two three')  => 'One Two Three'
     *    goog.string.toTitleCase('  one   two   ') => '  One   Two   '
     *    goog.string.toTitleCase('one_two_three')  => 'One_two_three'
     *    goog.string.toTitleCase('one-two-three')  => 'One-two-three'
     *
     * Custom delimiter => "_-.":
     *    goog.string.toTitleCase('oneTwoThree', '_-.')       => 'OneTwoThree'
     *    goog.string.toTitleCase('one two three', '_-.')     => 'One two three'
     *    goog.string.toTitleCase('  one   two   ', '_-.')    => '  one   two   '
     *    goog.string.toTitleCase('one_two_three', '_-.')     => 'One_Two_Three'
     *    goog.string.toTitleCase('one-two-three', '_-.')     => 'One-Two-Three'
     *    goog.string.toTitleCase('one...two...three', '_-.') => 'One...Two...Three'
     *    goog.string.toTitleCase('one. two. three', '_-.')   => 'One. two. three'
     *    goog.string.toTitleCase('one-two.three', '_-.')     => 'One-Two.Three'
     *
     * @param {string} str String value in camelCase form.
     * @param {string=} opt_delimiters Custom delimiter character set used to
     *      distinguish words in the string value. Each character represents a
     *      single delimiter. When provided, default whitespace delimiter is
     *      overridden and must be explicitly included if needed.
     * @return {string} String value in TitleCase form.
     */
    function toTitleCase(str: any, opt_delimiters?: any): any;
    /**
     * Capitalizes a string, i.e. converts the first letter to uppercase
     * and all other letters to lowercase, e.g.:
     *
     * goog.string.capitalize('one')     => 'One'
     * goog.string.capitalize('ONE')     => 'One'
     * goog.string.capitalize('one two') => 'One two'
     *
     * Note that this function does not trim initial whitespace.
     *
     * @param {string} str String value to capitalize.
     * @return {string} String value with first letter in uppercase.
     */
    function capitalize(str: any): string;
    /**
     * Parse a string in decimal or hexidecimal ('0xFFFF') form.
     *
     * To parse a particular radix, please use parseInt(string, radix) directly. See
     * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt
     *
     * This is a wrapper for the built-in parseInt function that will only parse
     * numbers as base 10 or base 16.  Some JS implementations assume strings
     * starting with "0" are intended to be octal. ES3 allowed but discouraged
     * this behavior. ES5 forbids it.  This function emulates the ES5 behavior.
     *
     * For more information, see Mozilla JS Reference: http://goo.gl/8RiFj
     *
     * @param {string|number|null|undefined} value The value to be parsed.
     * @return {number} The number, parsed. If the string failed to parse, this
     *     will be NaN.
     */
    function parseInt(value: any, radix?: number): any;
    /**
     * Splits a string on a separator a limited number of times.
     *
     * This implementation is more similar to Python or Java, where the limit
     * parameter specifies the maximum number of splits rather than truncating
     * the number of results.
     *
     * See http://docs.python.org/2/library/stdtypes.html#str.split
     * See JavaDoc: http://goo.gl/F2AsY
     * See Mozilla reference: http://goo.gl/dZdZs
     *
     * @param {string} str String to split.
     * @param {string} separator The separator.
     * @param {number} limit The limit to the number of splits. The resulting array
     *     will have a maximum length of limit+1.  Negative numbers are the same
     *     as zero.
     * @return {!Array<string>} The string, split.
     */
    function splitLimit(str: any, separator: any, limit: any): any[];
    /**
     * Finds the characters to the right of the last instance of any separator
     *
     * This function is similar to goog.string.path.baseName, except it can take a
     * list of characters to split the string on. It will return the rightmost
     * grouping of characters to the right of any separator as a left-to-right
     * oriented string.
     *
     * @see goog.string.path.baseName
     * @param {string} str The string
     * @param {string|!Array<string>} separators A list of separator characters
     * @return {string} The last part of the string with respect to the separators
     */
    function lastComponent(str: any, separators: any): any;
    /**
     * Computes the Levenshtein edit distance between two strings.
     * @param {string} a
     * @param {string} b
     * @return {number} The edit distance between the two strings.
     */
    function editDistance(a: any, b: any): any;
}
declare namespace goog.string {
    /**
     * Common Unicode string characters.
     * @enum {string}
     */
    var Unicode: {
        NBSP: string;
    };
    /**
     * Regular expression that matches an ampersand, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var AMP_RE_: RegExp;
    /**
     * Regular expression that matches a less than sign, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var LT_RE_: RegExp;
    /**
     * Regular expression that matches a greater than sign, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var GT_RE_: RegExp;
    /**
     * Regular expression that matches a double quote, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var QUOT_RE_: RegExp;
    /**
     * Regular expression that matches a single quote, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var SINGLE_QUOTE_RE_: RegExp;
    /**
     * Regular expression that matches null character, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var NULL_RE_: RegExp;
    /**
     * Regular expression that matches a lowercase letter "e", for use in escaping.
     * @const {!RegExp}
     * @private
     */
    var E_RE_: RegExp;
    /**
     * Regular expression that matches any character that needs to be escaped.
     * @const {!RegExp}
     * @private
     */
    var ALL_RE_: RegExp;
    /**
     * Regular expression that matches an HTML entity.
     * See also HTML5: Tokenization / Tokenizing character references.
     * @private
     * @type {!RegExp}
     */
    var HTML_ENTITY_PATTERN_: RegExp;
    /**
     * Special chars that need to be escaped for goog.string.quote.
     * @private {!Object<string, string>}
     */
    var specialEscapeChars_: {
        '\0': string;
        '\b': string;
        '\f': string;
        '\n': string;
        '\r': string;
        '\t': string;
        '\x0B': string;
        '"': string;
        '\\': string;
        '<': string;
    };
    /**
     * Character mappings used internally for goog.string.escapeChar.
     * @private {!Object<string, string>}
     */
    var jsEscapeCache_: {
        '\'': string;
    };
    /**
     * The most recent unique ID. |0 is equivalent to Math.floor in this case.
     * @type {number}
     * @private
     */
    var uniqueStringCounter_: number;
    var DETECT_DOUBLE_ESCAPING: any;
    var FORCE_NON_DOM_HTML_UNESCAPING: any;
}
declare namespace goog.math {
    /**
     * Returns a random integer greater than or equal to 0 and less than {@code a}.
     * @param {number} a  The upper bound for the random integer (exclusive).
     * @return {number} A random integer N such that 0 <= N < a.
     */
    function randomInt(a: number): number;
    /**
     * Returns a random number greater than or equal to {@code a} and less than
     * {@code b}.
     * @param {number} a  The lower bound for the random number (inclusive).
     * @param {number} b  The upper bound for the random number (exclusive).
     * @return {number} A random number N such that a <= N < b.
     */
    function uniformRandom(a: number, b: number): number;
    /**
     * Takes a number and clamps it to within the provided bounds.
     * @param {number} value The input number.
     * @param {number} min The minimum value to return.
     * @param {number} max The maximum value to return.
     * @return {number} The input number if it is within bounds, or the nearest
     *     number within the bounds.
     */
    function clamp(value: number, min: number, max: number): number;
    /**
     * The % operator in JavaScript returns the remainder of a / b, but differs from
     * some other languages in that the result will have the same sign as the
     * dividend. For example, -1 % 8 == -1, whereas in some other languages
     * (such as Python) the result would be 7. This function emulates the more
     * correct modulo behavior, which is useful for certain applications such as
     * calculating an offset index in a circular list.
     *
     * @param {number} a The dividend.
     * @param {number} b The divisor.
     * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
     *     or b < x <= 0, depending on the sign of b).
     */
    function modulo(a: number, b: number): number;
    /**
     * Performs linear interpolation between values a and b. Returns the value
     * between a and b proportional to x (when x is between 0 and 1. When x is
     * outside this range, the return value is a linear extrapolation).
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number} x The proportion between a and b.
     * @return {number} The interpolated value between a and b.
     */
    function lerp(a: number, b: number, x: number): number;
    /**
     * Tests whether the two values are equal to each other, within a certain
     * tolerance to adjust for floating point errors.
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number=} opt_tolerance Optional tolerance range. Defaults
     *     to 0.000001. If specified, should be greater than 0.
     * @return {boolean} Whether {@code a} and {@code b} are nearly equal.
     */
    function nearlyEquals(a: number, b: number, opt_tolerance: number | undefined): boolean;
    /**
     * Normalizes an angle to be in range [0-360). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in degrees.
     * @return {number} Standardized angle.
     */
    function standardAngle(angle: number): number;
    /**
     * Normalizes an angle to be in range [0-2*PI). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in radians.
     * @return {number} Standardized angle.
     */
    function standardAngleInRadians(angle: number): number;
    /**
     * Converts degrees to radians.
     * @param {number} angleDegrees Angle in degrees.
     * @return {number} Angle in radians.
     */
    function toRadians(angleDegrees: number): number;
    /**
     * Converts radians to degrees.
     * @param {number} angleRadians Angle in radians.
     * @return {number} Angle in degrees.
     */
    function toDegrees(angleRadians: number): number;
    /**
     * For a given angle and radius, finds the X portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The x-distance for the angle and radius.
     */
    function angleDx(degrees: number, radius: number): number;
    /**
     * For a given angle and radius, finds the Y portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The y-distance for the angle and radius.
     */
    function angleDy(degrees: number, radius: number): number;
    /**
     * Computes the angle between two points (x1,y1) and (x2,y2).
     * Angle zero points in the +X direction, 90 degrees points in the +Y
     * direction (down) and from there we grow clockwise towards 360 degrees.
     * @param {number} x1 x of first point.
     * @param {number} y1 y of first point.
     * @param {number} x2 x of second point.
     * @param {number} y2 y of second point.
     * @return {number} Standardized angle in degrees of the vector from
     *     x1,y1 to x2,y2.
     */
    function angle(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Computes the difference between startAngle and endAngle (angles in degrees).
     * @param {number} startAngle  Start angle in degrees.
     * @param {number} endAngle  End angle in degrees.
     * @return {number} The number of degrees that when added to
     *     startAngle will result in endAngle. Positive numbers mean that the
     *     direction is clockwise. Negative numbers indicate a counter-clockwise
     *     direction.
     *     The shortest route (clockwise vs counter-clockwise) between the angles
     *     is used.
     *     When the difference is 180 degrees, the function returns 180 (not -180)
     *     angleDifference(30, 40) is 10, and angleDifference(40, 30) is -10.
     *     angleDifference(350, 10) is 20, and angleDifference(10, 350) is -20.
     */
    function angleDifference(startAngle: number, endAngle: number): number;
    /**
     * Returns the sign of a number as per the "sign" or "signum" function.
     * @param {number} x The number to take the sign of.
     * @return {number} -1 when negative, 1 when positive, 0 when 0. Preserves
     *     signed zeros and NaN.
     */
    function sign(x: number): number;
    /**
     * JavaScript implementation of Longest Common Subsequence problem.
     * http://en.wikipedia.org/wiki/Longest_common_subsequence
     *
     * Returns the longest possible array that is subarray of both of given arrays.
     *
     * @param {IArrayLike<S>} array1 First array of objects.
     * @param {IArrayLike<T>} array2 Second array of objects.
     * @param {Function=} opt_compareFn Function that acts as a custom comparator
     *     for the array ojects. Function should return true if objects are equal,
     *     otherwise false.
     * @param {Function=} opt_collectorFn Function used to decide what to return
     *     as a result subsequence. It accepts 2 arguments: index of common element
     *     in the first array and index in the second. The default function returns
     *     element from the first array.
     * @return {!Array<S|T>} A list of objects that are common to both arrays
     *     such that there is no common subsequence with size greater than the
     *     length of the list.
     * @template S,T
     */
    function longestCommonSubsequence<S, T>(array1: IArrayLike<S>, array2: IArrayLike<T>, opt_compareFn: Function | undefined, opt_collectorFn: Function | undefined): Array<S | T>;
    /**
     * Returns the sum of the arguments.
     * @param {...number} var_args Numbers to add.
     * @return {number} The sum of the arguments (0 if no arguments were provided,
     *     {@code NaN} if any of the arguments is not a valid number).
     */
    function sum(var_args: number[]): number;
    /**
     * Returns the arithmetic mean of the arguments.
     * @param {...number} var_args Numbers to average.
     * @return {number} The average of the arguments ({@code NaN} if no arguments
     *     were provided or any of the arguments is not a valid number).
     */
    function average(var_args: number[]): number;
    /**
     * Returns the unbiased sample variance of the arguments. For a definition,
     * see e.g. http://en.wikipedia.org/wiki/Variance
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The unbiased sample variance of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function sampleVariance(var_args: number[]): number;
    /**
     * Returns the sample standard deviation of the arguments.  For a definition of
     * sample standard deviation, see e.g.
     * http://en.wikipedia.org/wiki/Standard_deviation
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The sample standard deviation of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function standardDeviation(var_args: number[]): number;
    /**
     * Returns whether the supplied number represents an integer, i.e. that is has
     * no fractional component.  No range-checking is performed on the number.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is an integer.
     */
    function isInt(num: number): boolean;
    /**
     * Returns whether the supplied number is finite and not NaN.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is a finite number.
     * @deprecated Use {@link isFinite} instead.
     */
    function isFiniteNumber(num: number): boolean;
    /**
     * @param {number} num The number to test.
     * @return {boolean} Whether it is negative zero.
     */
    function isNegativeZero(num: number): boolean;
    /**
     * Returns the precise value of floor(log10(num)).
     * Simpler implementations didn't work because of floating point rounding
     * errors. For example
     * <ul>
     * <li>Math.floor(Math.log(num) / Math.LN10) is off by one for num == 1e+3.
     * <li>Math.floor(Math.log(num) * Math.LOG10E) is off by one for num == 1e+15.
     * <li>Math.floor(Math.log10(num)) is off by one for num == 1e+15 - 1.
     * </ul>
     * @param {number} num A floating point number.
     * @return {number} Its logarithm to base 10 rounded down to the nearest
     *     integer if num > 0. -Infinity if num == 0. NaN if num < 0.
     */
    function log10Floor(num: number): number;
    /**
     * A tweaked variant of {@code Math.floor} which tolerates if the passed number
     * is infinitesimally smaller than the closest integer. It often happens with
     * the results of floating point calculations because of the finite precision
     * of the intermediate results. For example {@code Math.floor(Math.log(1000) /
     * Math.LN10) == 2}, not 3 as one would expect.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The largest integer less than or equal to {@code num}.
     */
    function safeFloor(num: number, opt_epsilon: number | undefined): number;
    /**
     * A tweaked variant of {@code Math.ceil}. See {@code goog.math.safeFloor} for
     * details.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The smallest integer greater than or equal to {@code num}.
     */
    function safeCeil(num: number, opt_epsilon: number | undefined): number;
}
declare namespace goog.math {
    class Coordinate {
        x: number;
        y: number;
        /**
         * Class for representing coordinates and positions.
         * @param {number=} opt_x Left, defaults to 0.
         * @param {number=} opt_y Top, defaults to 0.
         * @struct
         * @constructor
         */
        constructor(opt_x: number | undefined, opt_y: number | undefined);
        /**
         * Returns a new copy of the coordinate.
         * @return {!goog.math.Coordinate} A clone of this coordinate.
         */
        clone(): Coordinate;
        /**
         * Returns a nice string representing the coordinate.
         * @return {string} In the form (50, 73).
         * @override
         */
        toString(): string;
        /**
         * Returns whether the specified value is equal to this coordinate.
         * @param {*} other Some other value.
         * @return {boolean} Whether the specified value is equal to this coordinate.
         */
        equals(other: any): boolean;
        /**
         * Rounds the x and y fields to the next larger integer values.
         * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.
         */
        ceil(): this;
        /**
         * Rounds the x and y fields to the next smaller integer values.
         * @return {!goog.math.Coordinate} This coordinate with floored fields.
         */
        floor(): this;
        /**
         * Rounds the x and y fields to the nearest integer values.
         * @return {!goog.math.Coordinate} This coordinate with rounded fields.
         */
        round(): this;
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the x and y values are translated by the coordinate's x and y.
         * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
         * respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate x by or the
         *     the coordinate to translate this coordinate by.
         * @param {number=} opt_ty The value to translate y by.
         * @return {!goog.math.Coordinate} This coordinate after translating.
         */
        translate(tx: any, opt_ty: any): this;
        /**
         * Scales this coordinate by the given scale factors. The x and y values are
         * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
         * is not given, then {@code sx} is used for both x and y.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Coordinate} This coordinate after scaling.
         */
        scale(sx: any, opt_sy: any): this;
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in radians.
         * @param {number} radians The angle by which to rotate this coordinate
         *     clockwise about the given center, in radians.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateRadians(radians: any, opt_center: any): void;
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in degrees.
         * @param {number} degrees The angle by which to rotate this coordinate
         *     clockwise about the given center, in degrees.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateDegrees(degrees: any, opt_center: any): void;
    }
}
declare namespace goog.math.Coordinate {
    /**
     * Compares coordinates for equality.
     * @param {goog.math.Coordinate} a A Coordinate.
     * @param {goog.math.Coordinate} b A Coordinate.
     * @return {boolean} True iff the coordinates are equal, or if both are null.
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns the distance between two coordinates.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The distance between {@code a} and {@code b}.
     */
    function distance(a: any, b: any): number;
    /**
     * Returns the magnitude of a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The distance between the origin and {@code a}.
     */
    function magnitude(a: any): number;
    /**
     * Returns the angle from the origin to a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The angle, in degrees, clockwise from the positive X
     *     axis to {@code a}.
     */
    function azimuth(a: any): number;
    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     *
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The squared distance between {@code a} and {@code b}.
     */
    function squaredDistance(a: any, b: any): number;
    /**
     * Returns the difference between two coordinates as a new
     * goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the difference
     *     between {@code a} and {@code b}.
     */
    function difference(a: any, b: any): Coordinate;
    /**
     * Returns the sum of two coordinates as a new goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    function sum(a: any, b: any): Coordinate;
}
declare namespace goog.math {
    class Size {
        width: number;
        height: number;
        /**
         * Class for representing sizes consisting of a width and height. Undefined
         * width and height support is deprecated and results in compiler warning.
         * @param {number} width Width.
         * @param {number} height Height.
         * @struct
         * @constructor
         */
        constructor(width: number, height: number);
        /**
         * @return {!goog.math.Size} A new copy of the Size.
         */
        clone(): goog.math.Size;
        /**
         * Returns a nice string representing size.
         * @return {string} In the form (50 x 73).
         * @override
         */
        toString(): string;
        /**
         * @return {number} The longer of the two dimensions in the size.
         */
        getLongest(): number;
        /**
         * @return {number} The shorter of the two dimensions in the size.
         */
        getShortest(): number;
        /**
         * @return {number} The area of the size (width * height).
         */
        area(): number;
        /**
         * @return {number} The perimeter of the size (width + height) * 2.
         */
        perimeter(): number;
        /**
         * @return {number} The ratio of the size's width to its height.
         */
        aspectRatio(): number;
        /**
         * @return {boolean} True if the size has zero area, false if both dimensions
         *     are non-zero numbers.
         */
        isEmpty(): boolean;
        /**
         * Clamps the width and height parameters upward to integer values.
         * @return {!goog.math.Size} This size with ceil'd components.
         */
        ceil(): goog.math.Size;
        /**
         * @param {!goog.math.Size} target The target size.
         * @return {boolean} True if this Size is the same size or smaller than the
         *     target size in both dimensions.
         */
        fitsInside(target: goog.math.Size): boolean;
        /**
         * Clamps the width and height parameters downward to integer values.
         * @return {!goog.math.Size} This size with floored components.
         */
        floor(): goog.math.Size;
        /**
         * Rounds the width and height parameters to integer values.
         * @return {!goog.math.Size} This size with rounded components.
         */
        round(): goog.math.Size;
        /**
         * Scales this size by the given scale factors. The width and height are scaled
         * by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy} is not
         * given, then {@code sx} is used for both the width and height.
         * @param {number} sx The scale factor to use for the width.
         * @param {number=} opt_sy The scale factor to use for the height.
         * @return {!goog.math.Size} This Size object after scaling.
         */
        scale(sx: number, opt_sy?: number | undefined): goog.math.Size;
        /**
         * Uniformly scales the size to perfectly cover the dimensions of a given size.
         * If the size is already larger than the target, it will be scaled down to the
         * minimum size at which it still covers the entire target. The original aspect
         * ratio will be preserved.
         *
         * This function assumes that both Sizes contain strictly positive dimensions.
         * @param {!goog.math.Size} target The target size.
         * @return {!goog.math.Size} This Size object, after optional scaling.
         */
        scaleToCover(target: goog.math.Size): goog.math.Size;
        /**
         * Uniformly scales the size to fit inside the dimensions of a given size. The
         * original aspect ratio will be preserved.
         *
         * This function assumes that both Sizes contain strictly positive dimensions.
         * @param {!goog.math.Size} target The target size.
         * @return {!goog.math.Size} This Size object, after optional scaling.
         */
        scaleToFit(target: goog.math.Size): goog.math.Size;
    }
}
declare namespace goog.math.Size {
    /**
     * Compares sizes for equality.
     * @param {goog.math.Size} a A Size.
     * @param {goog.math.Size} b A Size.
     * @return {boolean} True iff the sizes have equal widths and equal
     *     heights, or if both are null.
     */
    function equals(a: goog.math.Size, b: goog.math.Size): boolean;
}
declare namespace goog.labs.userAgent.util {
    /**
     * Gets the native userAgent string from navigator if it exists.
     * If navigator or navigator.userAgent string is missing, returns an empty
     * string.
     * @return {string}
     * @private
     */
    function getNativeUserAgentString_(): string;
    /**
     * Getter for the native navigator.
     * This is a separate function so it can be stubbed out in testing.
     * @return {Navigator}
     * @private
     */
    function getNavigator_(): Navigator;
    /**
     * A possible override for applications which wish to not check
     * navigator.userAgent but use a specified value for detection instead.
     * @private {string}
     */
    var userAgent_: string;
    /**
     * Applications may override browser detection on the built in
     * navigator.userAgent object by setting this string. Set to null to use the
     * browser object instead.
     * @param {?string=} opt_userAgent The User-Agent override.
     */
    function setUserAgent(opt_userAgent?: (string | undefined) | null): void;
    /**
     * @return {string} The user agent string.
     */
    function getUserAgent(): string;
    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string.
     */
    function matchUserAgent(str: string): boolean;
    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string, ignoring
     *     case.
     */
    function matchUserAgentIgnoreCase(str: string): boolean;
    /**
     * Parses the user agent into tuples for each section.
     * @param {string} userAgent
     * @return {!Array<!Array<string>>} Tuples of key, version, and the contents
     *     of the parenthetical.
     */
    function extractVersionTuples(userAgent: string): Array<Array<string>>;
}
declare namespace goog.object {
    /**
     * Whether two values are not observably distinguishable. This
     * correctly detects that 0 is not the same as -0 and two NaNs are
     * practically equivalent.
     *
     * The implementation is as suggested by harmony:egal proposal.
     *
     * @param {*} v The first value to compare.
     * @param {*} v2 The second value to compare.
     * @return {boolean} Whether two values are not observably distinguishable.
     * @see http://wiki.ecmascript.org/doku.php?id=harmony:egal
     */
    function is(v: any, v2: any): boolean;
    /**
     * Calls a function for each element in an object/map/hash.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):?} f The function to call
     *     for every element. This function takes 3 arguments (the value, the
     *     key and the object) and the return value is ignored.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @template T,K,V
     */
    function forEach<T, K, V>(obj: any, f: (this: T, arg1: V, arg2: any, arg3) => any, opt_obj?: T | undefined): void;
    /**
     * Calls a function for each element in an object/map/hash. If that call returns
     * true, adds the element to a new object.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):boolean} f The function to call
     *     for every element. This
     *     function takes 3 arguments (the value, the key and the object)
     *     and should return a boolean. If the return value is true the
     *     element is added to the result object. If it is false the
     *     element is not included.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {!Object<K,V>} a new object in which only elements that passed the
     *     test are present.
     * @template T,K,V
     */
    function filter(obj: any, f: any, opt_obj?: any): {};
    /**
     * For every element in an object/map/hash calls a function and inserts the
     * result into a new object.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):R} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the value, the key and the object)
     *     and should return something. The result will be inserted
     *     into a new object.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {!Object<K,R>} a new object with the results from f.
     * @template T,K,V,R
     */
    function map(obj: any, f: any, opt_obj?: any): {};
    /**
     * Calls a function for each element in an object/map/hash. If any
     * call returns true, returns true (without checking the rest). If
     * all calls return false, returns false.
     *
     * @param {Object<K,V>} obj The object to check.
     * @param {function(this:T,V,?,Object<K,V>):boolean} f The function to
     *     call for every element. This function
     *     takes 3 arguments (the value, the key and the object) and should
     *     return a boolean.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {boolean} true if any element passes the test.
     * @template T,K,V
     */
    function some(obj: any, f: any, opt_obj?: any): boolean;
    /**
     * Calls a function for each element in an object/map/hash. If
     * all calls return true, returns true. If any call returns false, returns
     * false at this point and does not continue to check the remaining elements.
     *
     * @param {Object<K,V>} obj The object to check.
     * @param {?function(this:T,V,?,Object<K,V>):boolean} f The function to
     *     call for every element. This function
     *     takes 3 arguments (the value, the key and the object) and should
     *     return a boolean.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {boolean} false if any element fails the test.
     * @template T,K,V
     */
    function every(obj: any, f: any, opt_obj?: any): boolean;
    /**
     * Returns the number of key-value pairs in the object map.
     *
     * @param {Object} obj The object for which to get the number of key-value
     *     pairs.
     * @return {number} The number of key-value pairs in the object map.
     */
    function getCount(obj: any): number;
    /**
     * Returns one key from the object map, if any exists.
     * For map literals the returned key will be the first one in most of the
     * browsers (a know exception is Konqueror).
     *
     * @param {Object} obj The object to pick a key from.
     * @return {string|undefined} The key or undefined if the object is empty.
     */
    function getAnyKey(obj: any): string;
    /**
     * Returns one value from the object map, if any exists.
     * For map literals the returned value will be the first one in most of the
     * browsers (a know exception is Konqueror).
     *
     * @param {Object<K,V>} obj The object to pick a value from.
     * @return {V|undefined} The value or undefined if the object is empty.
     * @template K,V
     */
    function getAnyValue(obj: any): any;
    /**
     * Whether the object/hash/map contains the given object as a value.
     * An alias for goog.object.containsValue(obj, val).
     *
     * @param {Object<K,V>} obj The object in which to look for val.
     * @param {V} val The object for which to check.
     * @return {boolean} true if val is present.
     * @template K,V
     */
    function contains(obj: any, val: any): boolean;
    /**
     * Returns the values of the object/map/hash.
     *
     * @param {Object<K,V>} obj The object from which to get the values.
     * @return {!Array<V>} The values in the object/map/hash.
     * @template K,V
     */
    function getValues(obj: any): any[];
    /**
     * Returns the keys of the object/map/hash.
     *
     * @param {Object} obj The object from which to get the keys.
     * @return {!Array<string>} Array of property keys.
     */
    function getKeys(obj: object): Array<string>;
    /**
     * Get a value from an object multiple levels deep.  This is useful for
     * pulling values from deeply nested objects, such as JSON responses.
     * Example usage: getValueByKeys(jsonObj, 'foo', 'entries', 3)
     *
     * @param {!Object} obj An object to get the value from.  Can be array-like.
     * @param {...(string|number|!IArrayLike<number|string>)}
     *     var_args A number of keys
     *     (as strings, or numbers, for array-like objects).  Can also be
     *     specified as a single array of keys.
     * @return {*} The resulting value.  If, at any point, the value for a key
     *     in the current object is null or undefined, returns undefined.
     */
    function getValueByKeys(obj: object, ...var_args: any[]): any;
    /**
     * Whether the object/map/hash contains the given key.
     *
     * @param {Object} obj The object in which to look for key.
     * @param {?} key The key for which to check.
     * @return {boolean} true If the map contains the key.
     */
    function containsKey(obj: object, key: any): boolean;
    /**
     * Whether the object/map/hash contains the given value. This is O(n).
     *
     * @param {Object<K,V>} obj The object in which to look for val.
     * @param {V} val The value for which to check.
     * @return {boolean} true If the map contains the value.
     * @template K,V
     */
    function containsValue(obj: any, val: any): boolean;
    /**
     * Searches an object for an element that satisfies the given condition and
     * returns its key.
     * @param {Object<K,V>} obj The object to search in.
     * @param {function(this:T,V,string,Object<K,V>):boolean} f The
     *      function to call for every element. Takes 3 arguments (the value,
     *     the key and the object) and should return a boolean.
     * @param {T=} opt_this An optional "this" context for the function.
     * @return {string|undefined} The key of an element for which the function
     *     returns true or undefined if no such element is found.
     * @template T,K,V
     */
    function findKey(obj: any, f: any, opt_this?: any): string;
    /**
     * Searches an object for an element that satisfies the given condition and
     * returns its value.
     * @param {Object<K,V>} obj The object to search in.
     * @param {function(this:T,V,string,Object<K,V>):boolean} f The function
     *     to call for every element. Takes 3 arguments (the value, the key
     *     and the object) and should return a boolean.
     * @param {T=} opt_this An optional "this" context for the function.
     * @return {V} The value of an element for which the function returns true or
     *     undefined if no such element is found.
     * @template T,K,V
     */
    function findValue(obj: any, f: any, opt_this?: any): any;
    /**
     * Whether the object/map/hash is empty.
     *
     * @param {Object} obj The object to test.
     * @return {boolean} true if obj is empty.
     */
    function isEmpty(obj: object): boolean;
    /**
     * Removes all key value pairs from the object/map/hash.
     *
     * @param {Object} obj The object to clear.
     */
    function clear(obj: object): void;
    /**
     * Removes a key-value pair based on the key.
     *
     * @param {Object} obj The object from which to remove the key.
     * @param {?} key The key to remove.
     * @return {boolean} Whether an element was removed.
     */
    function remove(obj: object, key: any): boolean;
    /**
     * Adds a key-value pair to the object. Throws an exception if the key is
     * already in use. Use set if you want to change an existing pair.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} val The value to add.
     * @template K,V
     */
    function add(obj: any, key: any, val: any): void;
    /**
     * Returns the value for the given key.
     *
     * @param {Object<K,V>} obj The object from which to get the value.
     * @param {string} key The key for which to get the value.
     * @param {R=} opt_val The value to return if no item is found for the given
     *     key (default is undefined).
     * @return {V|R|undefined} The value for the given key.
     * @template K,V,R
     */
    function get(obj: any, key: any, opt_val?: any): any;
    /**
     * Adds a key-value pair to the object/map/hash.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} value The value to add.
     * @template K,V
     */
    function set(obj: any, key: any, value: any): void;
    /**
     * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} value The value to add if the key wasn't present.
     * @return {V} The value of the entry at the end of the function.
     * @template K,V
     */
    function setIfUndefined(obj: any, key: any, value: any): any;
    /**
     * Sets a key and value to an object if the key is not set. The value will be
     * the return value of the given function. If the key already exists, the
     * object will not be changed and the function will not be called (the function
     * will be lazily evaluated -- only called if necessary).
     *
     * This function is particularly useful for use with a map used a as a cache.
     *
     * @param {!Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {function():V} f The value to add if the key wasn't present.
     * @return {V} The value of the entry at the end of the function.
     * @template K,V
     */
    function setWithReturnValueIfNotSet(obj: any, key: any, f: any): any;
    /**
     * Compares two objects for equality using === on the values.
     *
     * @param {!Object<K,V>} a
     * @param {!Object<K,V>} b
     * @return {boolean}
     * @template K,V
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns a shallow clone of the object.
     *
     * @param {Object<K,V>} obj Object to clone.
     * @return {!Object<K,V>} Clone of the input object.
     * @template K,V
     */
    function clone(obj: any): {};
    /**
     * Clones a value. The input may be an Object, Array, or basic type. Objects and
     * arrays will be cloned recursively.
     *
     * WARNINGS:
     * <code>goog.object.unsafeClone</code> does not detect reference loops. Objects
     * that refer to themselves will cause infinite recursion.
     *
     * <code>goog.object.unsafeClone</code> is unaware of unique identifiers, and
     * copies UIDs created by <code>getUid</code> into cloned results.
     *
     * @param {T} obj The value to clone.
     * @return {T} A clone of the input value.
     * @template T
     */
    function unsafeClone(obj: any): any;
    /**
     * Returns a new object in which all the keys and values are interchanged
     * (keys become values and values become keys). If multiple keys map to the
     * same value, the chosen transposed value is implementation-dependent.
     *
     * @param {Object} obj The object to transpose.
     * @return {!Object} The transposed object.
     */
    function transpose(obj: any): {};
    /**
     * The names of the fields that are defined on Object.prototype.
     * @type {Array<string>}
     * @private
     */
    var PROTOTYPE_FIELDS_: Array<string>;
    /**
     * Extends an object with another object.
     * This operates 'in-place'; it does not create a new Object.
     *
     * Example:
     * var o = {};
     * goog.object.extend(o, {a: 0, b: 1});
     * o; // {a: 0, b: 1}
     * goog.object.extend(o, {b: 2, c: 3});
     * o; // {a: 0, b: 2, c: 3}
     *
     * @param {Object} target The object to modify. Existing properties will be
     *     overwritten if they are also present in one of the objects in
     *     {@code var_args}.
     * @param {...Object} var_args The objects from which values will be copied.
     */
    function extend(target: any, var_args: any): void;
    /**
     * Creates a new object built from the key-value pairs provided as arguments.
     * @param {...*} var_args If only one argument is provided and it is an array
     *     then this is used as the arguments, otherwise even arguments are used as
     *     the property names and odd arguments are used as the property values.
     * @return {!Object} The new object.
     * @throws {Error} If there are uneven number of arguments or there is only one
     *     non array argument.
     */
    function create(...var_args: any[]): any;
    /**
     * Creates a new object where the property names come from the arguments but
     * the value is always set to true
     * @param {...*} var_args If only one argument is provided and it is an array
     *     then this is used as the arguments, otherwise the arguments are used
     *     as the property names.
     * @return {!Object} The new object.
     */
    function createSet(...var_args: any[]): any;
    /**
     * Creates an immutable view of the underlying object, if the browser
     * supports immutable objects.
     *
     * In default mode, writes to this view will fail silently. In strict mode,
     * they will throw an error.
     *
     * @param {!Object<K,V>} obj An object.
     * @return {!Object<K,V>} An immutable view of that object, or the
     *     original object if this browser does not support immutables.
     * @template K,V
     */
    function createImmutableView(obj: any): any;
    /**
     * @param {!Object} obj An object.
     * @return {boolean} Whether this is an immutable view of the object.
     */
    function isImmutableView(obj: any): boolean;
    /**
     * Get all properties names on a given Object regardless of enumerability.
     *
     * <p> If the browser does not support {@code Object.getOwnPropertyNames} nor
     * {@code Object.getPrototypeOf} then this is equivalent to using {@code
     * goog.object.getKeys}
     *
     * @param {?Object} obj The object to get the properties of.
     * @param {boolean=} opt_includeObjectPrototype Whether properties defined on
     *     {@code Object.prototype} should be included in the result.
     * @param {boolean=} opt_includeFunctionPrototype Whether properties defined on
     *     {@code Function.prototype} should be included in the result.
     * @return {!Array<string>}
     * @public
     */
    function getAllPropertyNames(obj: any, opt_includeObjectPrototype?: any, opt_includeFunctionPrototype?: any): string[];
}
declare namespace goog.labs.userAgent.browser {
    /**
     * @return {boolean} Whether the user's browser is Opera.  Note: Chromium
     *     based Opera (Opera 15+) is detected as Chrome to avoid unnecessary
     *     special casing.
     * @private
     */
    function matchOpera_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is IE.
     * @private
     */
    function matchIE_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Edge.
     * @private
     */
    function matchEdge_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Firefox.
     * @private
     */
    function matchFirefox_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Safari.
     * @private
     */
    function matchSafari_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based
     *     iOS browser).
     * @private
     */
    function matchCoast_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is iOS Webview.
     * @private
     */
    function matchIosWebview_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Chrome.
     * @private
     */
    function matchChrome_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is the Android browser.
     * @private
     */
    function matchAndroidBrowser_(): boolean;
    /**
     * @return {boolean} Whether the user's browser is Opera.
     */
    var isOpera: typeof matchOpera_;
    /**
     * @return {boolean} Whether the user's browser is IE.
     */
    var isIE: typeof matchIE_;
    /**
     * @return {boolean} Whether the user's browser is Edge.
     */
    var isEdge: typeof matchEdge_;
    /**
     * @return {boolean} Whether the user's browser is Firefox.
     */
    var isFirefox: typeof matchFirefox_;
    /**
     * @return {boolean} Whether the user's browser is Safari.
     */
    var isSafari: typeof matchSafari_;
    /**
     * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based
     *     iOS browser).
     */
    var isCoast: typeof matchCoast_;
    /**
     * @return {boolean} Whether the user's browser is iOS Webview.
     */
    var isIosWebview: typeof matchIosWebview_;
    /**
     * @return {boolean} Whether the user's browser is Chrome.
     */
    var isChrome: typeof matchChrome_;
    /**
     * @return {boolean} Whether the user's browser is the Android browser.
     */
    var isAndroidBrowser: typeof matchAndroidBrowser_;
    /**
     * For more information, see:
     * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html
     * @return {boolean} Whether the user's browser is Silk.
     */
    function isSilk(): boolean;
    /**
     * @return {string} The browser version or empty string if version cannot be
     *     determined. Note that for Internet Explorer, this returns the version of
     *     the browser, not the version of the rendering engine. (IE 8 in
     *     compatibility mode will return 8.0 rather than 7.0. To determine the
     *     rendering engine version, look at document.documentMode instead. See
     *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more
     *     details.)
     */
    function getVersion(): any;
    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: any): boolean;
    /**
     * Determines IE version. More information:
     * http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx#uaString
     * http://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
     * http://blogs.msdn.com/b/ie/archive/2010/03/23/introducing-ie9-s-user-agent-string.aspx
     * http://blogs.msdn.com/b/ie/archive/2009/01/09/the-internet-explorer-8-user-agent-string-updated-edition.aspx
     *
     * @param {string} userAgent the User-Agent.
     * @return {string}
     * @private
     */
    function getIEVersion_(userAgent: any): string;
}
declare namespace goog.labs.userAgent.engine {
    /**
     * @return {boolean} Whether the rendering engine is Presto.
     */
    function isPresto(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Trident.
     */
    function isTrident(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Edge.
     */
    function isEdge(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is WebKit.
     */
    function isWebKit(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Gecko.
     */
    function isGecko(): boolean;
    /**
     * @return {string} The rendering engine's version or empty string if version
     *     can't be determined.
     */
    function getVersion(): string;
    /**
     * @param {!Array<!Array<string>>} tuples Extracted version tuples.
     * @return {!Array<string>|undefined} The engine tuple or undefined if not
     *     found.
     * @private
     */
    function getEngineTuple_(tuples: Array<Array<string>>): Array<string> | undefined;
    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the rendering engine version is higher or the same
     *     as the given version.
     */
    function isVersionOrHigher(version: string | number): boolean;
    /**
     * @param {!Array<!Array<string>>} tuples Version tuples.
     * @param {string} key The key to look for.
     * @return {string} The version string of the given key, if present.
     *     Otherwise, the empty string.
     * @private
     */
    function getVersionForKey_(tuples: Array<Array<string>>, key: string): string;
}
declare namespace goog.labs.userAgent.platform {
    /**
     * @return {boolean} Whether the platform is Android.
     */
    function isAndroid(): boolean;
    /**
     * @return {boolean} Whether the platform is iPod.
     */
    function isIpod(): boolean;
    /**
     * @return {boolean} Whether the platform is iPhone.
     */
    function isIphone(): boolean;
    /**
     * @return {boolean} Whether the platform is iPad.
     */
    function isIpad(): boolean;
    /**
     * @return {boolean} Whether the platform is iOS.
     */
    function isIos(): boolean;
    /**
     * @return {boolean} Whether the platform is Mac.
     */
    function isMacintosh(): boolean;
    /**
     * Note: ChromeOS is not considered to be Linux as it does not report itself
     * as Linux in the user agent string.
     * @return {boolean} Whether the platform is Linux.
     */
    function isLinux(): boolean;
    /**
     * @return {boolean} Whether the platform is Windows.
     */
    function isWindows(): boolean;
    /**
     * @return {boolean} Whether the platform is ChromeOS.
     */
    function isChromeOS(): boolean;
    /**
     * @return {boolean} Whether the platform is Chromecast.
     */
    function isChromecast(): boolean;
    /**
     * The version of the platform. We only determine the version for Windows,
     * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
     * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
     * version 0.0.
     *
     * @return {string} The platform version or empty string if version cannot be
     *     determined.
     */
    function getVersion(): string;
    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: string | number): boolean;
}
declare namespace goog.reflect {
    /**
     * Syntax for object literal casts.
     * @see http://go/jscompiler-renaming
     * @see https://goo.gl/CRs09P
     *
     * Use this if you have an object literal whose keys need to have the same names
     * as the properties of some class even after they are renamed by the compiler.
     *
     * @param {!Function} type Type to cast to.
     * @param {Object} object Object literal to cast.
     * @return {Object} The object literal.
     */
    function object(type: Function, object: object): object;
    /**
     * Syntax for renaming property strings.
     * @see http://go/jscompiler-renaming
     * @see https://goo.gl/CRs09P
     *
     * Use this if you have an need to access a property as a string, but want
     * to also have the property renamed by the compiler. In contrast to
     * goog.reflect.object, this method takes an instance of an object.
     *
     * Properties must be simple names (not qualified names).
     *
     * @param {string} prop Name of the property
     * @param {!Object} object Instance of the object whose type will be used
     *     for renaming
     * @return {string} The renamed property.
     */
    function objectProperty(prop: string, object: object): string;
    /**
     * To assert to the compiler that an operation is needed when it would
     * otherwise be stripped. For example:
     * <code>
     *     // Force a layout
     *     goog.reflect.sinkValue(dialog.offsetHeight);
     * </code>
     * @param {T} x
     * @return {T}
     * @template T
     */
    function sinkValue<T>(x: T): T;
    /**
     * Check if a property can be accessed without throwing an exception.
     * @param {Object} obj The owner of the property.
     * @param {string} prop The property name.
     * @return {boolean} Whether the property is accessible. Will also return true
     *     if obj is null.
     */
    function canAccessProperty(obj: object, prop: string): boolean;
    /**
     * Retrieves a value from a cache given a key. The compiler provides special
     * consideration for this call such that it is generally considered side-effect
     * free. However, if the {@code opt_keyFn} or {@code valueFn} have side-effects
     * then the entire call is considered to have side-effects.
     *
     * Conventionally storing the value on the cache would be considered a
     * side-effect and preclude unused calls from being pruned, ie. even if
     * the value was never used, it would still always be stored in the cache.
     *
     * Providing a side-effect free {@code valueFn} and {@code opt_keyFn}
     * allows unused calls to {@code goog.reflect.cache} to be pruned.
     *
     * @param {!Object<K, V>} cacheObj The object that contains the cached values.
     * @param {?} key The key to lookup in the cache. If it is not string or number
     *     then a {@code opt_keyFn} should be provided. The key is also used as the
     *     parameter to the {@code valueFn}.
     * @param {function(?):V} valueFn The value provider to use to calculate the
     *     value to store in the cache. This function should be side-effect free
     *     to take advantage of the optimization.
     * @param {function(?):K=} opt_keyFn The key provider to determine the cache
     *     map key. This should be used if the given key is not a string or number.
     *     If not provided then the given key is used. This function should be
     *     side-effect free to take advantage of the optimization.
     * @return {V} The cached or calculated value.
     * @template K
     * @template V
     */
    function cache<K, V>(cacheObj: any, key: any, valueFn: (arg0: any) => V, opt_keyFn?: (arg0: any) => K): V;
}
declare namespace goog.userAgent {
    /**
     * @define {boolean} Whether we know at compile-time that the browser is IE.
     */
    var ASSUME_IE: boolean;
    /**
     * @define {boolean} Whether we know at compile-time that the browser is EDGE.
     */
    var ASSUME_EDGE: boolean;
    /**
     * @define {boolean} Whether we know at compile-time that the browser is GECKO.
     */
    var ASSUME_GECKO: boolean;
    /**
     * @define {boolean} Whether we know at compile-time that the browser is WEBKIT.
     */
    var ASSUME_WEBKIT: boolean;
    /**
     * @define {boolean} Whether we know at compile-time that the browser is a
     *     mobile device running WebKit e.g. iPhone or Android.
     */
    var ASSUME_MOBILE_WEBKIT: boolean;
    /**
     * @define {boolean} Whether we know at compile-time that the browser is OPERA.
     */
    var ASSUME_OPERA: boolean;
    /**
     * @define {boolean} Whether the
     *     {@code goog.userAgent.isVersionOrHigher}
     *     function will return true for any version.
     */
    var ASSUME_ANY_VERSION: boolean;
    /**
     * Whether we know the browser engine at compile-time.
     * @type {boolean}
     * @private
     */
    var BROWSER_KNOWN_: boolean;
    /**
     * Returns the userAgent string for the current browser.
     *
     * @return {string} The userAgent string.
     */
    function getUserAgentString(): string;
    /**
     * TODO(nnaze): Change type to "Navigator" and update compilation targets.
     * @return {?Object} The native navigator object.
     */
    function getNavigator(): Navigator;
    /**
     * Whether the user agent is Opera.
     * @type {boolean}
     */
    var OPERA: boolean;
    /**
    * Whether the user agent is Internet Explorer.
    * @type {boolean}
    */
    var IE: boolean;
    /**
    * Whether the user agent is Microsoft Edge.
    * @type {boolean}
    */
    var EDGE: boolean;
    /**
    * Whether the user agent is MS Internet Explorer or MS Edge.
    * @type {boolean}
    */
    var EDGE_OR_IE: boolean;
    /**
    * Whether the user agent is Gecko. Gecko is the rendering engine used by
    * Mozilla, Firefox, and others.
    * @type {boolean}
    */
    var GECKO: boolean;
    /**
    * Whether the user agent is WebKit. WebKit is the rendering engine that
    * Safari, Android and others use.
    * @type {boolean}
    */
    var WEBKIT: boolean;
    /**
     * Whether the user agent is running on a mobile device.
     *
     * This is a separate function so that the logic can be tested.
     *
     * TODO(nnaze): Investigate swapping in goog.labs.userAgent.device.isMobile().
     *
     * @return {boolean} Whether the user agent is running on a mobile device.
     * @private
     */
    function isMobile_(): boolean;
    /**
     * Whether the user agent is running on a mobile device.
     *
     * TODO(nnaze): Consider deprecating MOBILE when labs.userAgent
     *   is promoted as the gecko/webkit logic is likely inaccurate.
     *
     * @type {boolean}
     */
    var MOBILE: boolean;
    /**
     * Used while transitioning code to use WEBKIT instead.
     * @type {boolean}
     * @deprecated Use {@link goog.userAgent.product.SAFARI} instead.
     * TODO(nicksantos): Delete this from goog.userAgent.
     */
    var SAFARI: boolean;
    /**
     * @return {string} the platform (operating system) the user agent is running
     *     on. Default to empty string because navigator.platform may not be defined
     *     (on Rhino, for example).
     * @private
     */
    function determinePlatform_(): string;
    /**
     * The platform (operating system) the user agent is running on. Default to
     * empty string because navigator.platform may not be defined (on Rhino, for
     * example).
     * @type {string}
     */
    var PLATFORM: string;
    /**
     * @define {boolean} Whether the user agent is running on a Macintosh operating
     *     system.
     */
    var ASSUME_MAC: boolean;
    /**
     * @define {boolean} Whether the user agent is running on a Windows operating
     *     system.
     */
    var ASSUME_WINDOWS: boolean;
    /**
     * @define {boolean} Whether the user agent is running on a Linux operating
     *     system.
     */
    var ASSUME_LINUX: boolean;
    /**
     * @define {boolean} Whether the user agent is running on a X11 windowing
     *     system.
     */
    var ASSUME_X11: boolean;
    /**
     * @define {boolean} Whether the user agent is running on Android.
     */
    var ASSUME_ANDROID: boolean;
    /**
     * @define {boolean} Whether the user agent is running on an iPhone.
     */
    var ASSUME_IPHONE: boolean;
    /**
     * @define {boolean} Whether the user agent is running on an iPad.
     */
    var ASSUME_IPAD: boolean;
    /**
     * @define {boolean} Whether the user agent is running on an iPod.
     */
    var ASSUME_IPOD: boolean;
    /**
     * @type {boolean}
     * @private
     */
    var PLATFORM_KNOWN_: boolean;
    /**
    * Whether the user agent is running on a Macintosh operating system.
    * @type {boolean}
    */
    var MAC: boolean;
    /**
    * Whether the user agent is running on a Windows operating system.
    * @type {boolean}
    */
    var WINDOWS: boolean;
    /**
    * Whether the user agent is Linux per the legacy behavior of
    * goog.userAgent.LINUX, which considered ChromeOS to also be
    * Linux.
    * @return {boolean}
    * @private
    */
    function isLegacyLinux_(): boolean;
    /**
    * Whether the user agent is running on a Linux operating system.
    *
    * Note that goog.userAgent.LINUX considers ChromeOS to be Linux,
    * while goog.labs.userAgent.platform considers ChromeOS and
    * Linux to be different OSes.
    *
    * @type {boolean}
    */
    var LINUX: boolean;
    /**
    * @return {boolean} Whether the user agent is an X11 windowing system.
    * @private
    */
    function isX11_(): boolean;
    /**
    * Whether the user agent is running on a X11 windowing system.
    * @type {boolean}
    */
    var X11: boolean;
    /**
    * Whether the user agent is running on Android.
    * @type {boolean}
    */
    var ANDROID: boolean;
    /**
    * Whether the user agent is running on an iPhone.
    * @type {boolean}
    */
    var IPHONE: boolean;
    /**
    * Whether the user agent is running on an iPad.
    * @type {boolean}
    */
    var IPAD: boolean;
    /**
    * Whether the user agent is running on an iPod.
    * @type {boolean}
    */
    var IPOD: boolean;
    /**
    * Whether the user agent is running on iOS.
    * @type {boolean}
    */
    var IOS: boolean;
    /**
    * @return {string} The string that describes the version number of the user
    *     agent.
    * @private
    */
    function determineVersion_(): string;
    /**
    * @return {?Array|undefined} The version regex matches from parsing the user
    *     agent string. These regex statements must be executed inline so they can
    *     be compiled out by the closure compiler with the rest of the useragent
    *     detection logic when ASSUME_* is specified.
    * @private
    */
    function getVersionRegexResult_(): RegExpExecArray;
    /**
    * @return {number|undefined} Returns the document mode (for testing).
    * @private
    */
    function getDocumentMode_(): any;
    /**
    * The version of the user agent. This is a string because it might contain
    * 'b' (as in beta) as well as multiple dots.
    * @type {string}
    */
    var VERSION: string;
    /**
    * Compares two version numbers.
    *
    * @param {string} v1 Version of first item.
    * @param {string} v2 Version of second item.
    *
    * @return {number}  1 if first argument is higher
    *                   0 if arguments are equal
    *                  -1 if second argument is higher.
    * @deprecated Use goog.string.compareVersions.
    */
    function compare(v1: any, v2: any): number;
    /**
    * Cache for {@link goog.userAgent.isVersionOrHigher}.
    * Calls to compareVersions are surprisingly expensive and, as a browser's
    * version number is unlikely to change during a session, we cache the results.
    * @const
    * @private
    */
    var isVersionOrHigherCache_: {};
    /**
    * Whether the user agent version is higher or the same as the given version.
    * NOTE: When checking the version numbers for Firefox and Safari, be sure to
    * use the engine's version, not the browser's version number.  For example,
    * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
    * Opera and Internet Explorer versions match the product release number.<br>
    * @see <a href="http://en.wikipedia.org/wiki/Safari_version_history">
    *     Webkit</a>
    * @see <a href="http://en.wikipedia.org/wiki/Gecko_engine">Gecko</a>
    *
    * @param {string|number} version The version to check.
    * @return {boolean} Whether the user agent version is higher or the same as
    *     the given version.
    */
    function isVersionOrHigher(version: any): boolean;
    /**
    * Deprecated alias to {@code goog.userAgent.isVersionOrHigher}.
    * @param {string|number} version The version to check.
    * @return {boolean} Whether the user agent version is higher or the same as
    *     the given version.
    * @deprecated Use goog.userAgent.isVersionOrHigher().
    */
    var isVersion: typeof isVersionOrHigher;
    /**
    * Whether the IE effective document mode is higher or the same as the given
    * document mode version.
    * NOTE: Only for IE, return false for another browser.
    *
    * @param {number} documentMode The document mode version to check.
    * @return {boolean} Whether the IE effective document mode is higher or the
    *     same as the given version.
    */
    function isDocumentModeOrHigher(documentMode: any): boolean;
    /**
    * Deprecated alias to {@code goog.userAgent.isDocumentModeOrHigher}.
    * @param {number} version The version to check.
    * @return {boolean} Whether the IE effective document mode is higher or the
    *      same as the given version.
    * @deprecated Use goog.userAgent.isDocumentModeOrHigher().
    */
    var isDocumentMode: typeof isDocumentModeOrHigher;
    /**
    * For IE version < 7, documentMode is undefined, so attempt to use the
    * CSS1Compat property to see if we are in standards mode. If we are in
    * standards mode, treat the browser version as the document mode. Otherwise,
    * IE is emulating version 5.
    * @type {number|undefined}
    * @const
    */
    var DOCUMENT_MODE: any;
}
declare namespace goog.dom {
    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    var BrowserFeature: {
        CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: boolean;
        CAN_USE_CHILDREN_ATTRIBUTE: boolean;
        CAN_USE_INNER_TEXT: boolean;
        CAN_USE_PARENT_ELEMENT_PROPERTY: boolean;
        INNER_HTML_NEEDS_SCOPED_ELEMENT: boolean;
        LEGACY_IE_RANGES: boolean;
    };
}
declare namespace goog.string {
    class Const implements goog.string.TypedString {
        stringConstValueWithSecurityContract__googStringSecurityPrivate_: any;
        STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_: any;
        /**
         * Wrapper for compile-time-constant strings.
         *
         * Const is a wrapper for strings that can only be created from program
         * constants (i.e., string literals).  This property relies on a custom Closure
         * compiler check that {@code goog.string.Const.from} is only invoked on
         * compile-time-constant expressions.
         *
         * Const is useful in APIs whose correct and secure use requires that certain
         * arguments are not attacker controlled: Compile-time constants are inherently
         * under the control of the application and not under control of external
         * attackers, and hence are safe to use in such contexts.
         *
         * Instances of this type must be created via its factory method
         * {@code goog.string.Const.from} and not by invoking its constructor.  The
         * constructor intentionally takes no parameters and the type is immutable;
         * hence only a default instance corresponding to the empty string can be
         * obtained via constructor invocation.
         *
         * @see goog.string.Const#from
         * @constructor
         * @final
         * @struct
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * Returns this Const's value a string.
         *
         * IMPORTANT: In code where it is security-relevant that an object's type is
         * indeed {@code goog.string.Const}, use {@code goog.string.Const.unwrap}
         * instead of this method.
         *
         * @see goog.string.Const#unwrap
         * @override
         */
        getTypedStringValue(): any;
        /**
         * Returns a debug-string representation of this value.
         *
         * To obtain the actual string value wrapped inside an object of this type,
         * use {@code goog.string.Const.unwrap}.
         *
         * @see goog.string.Const#unwrap
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.string.Const {
    /**
     * Performs a runtime check that the provided object is indeed an instance
     * of {@code goog.string.Const}, and returns its value.
     * @param {!goog.string.Const} stringConst The object to extract from.
     * @return {string} The Const object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(stringConst: any): any;
    /**
     * Creates a Const object from a compile-time constant string.
     *
     * It is illegal to invoke this function on an expression whose
     * compile-time-contant value cannot be determined by the Closure compiler.
     *
     * Correct invocations include,
     * <pre>
     *   var s = goog.string.Const.from('hello');
     *   var t = goog.string.Const.from('hello' + 'world');
     * </pre>
     *
     * In contrast, the following are illegal:
     * <pre>
     *   var s = goog.string.Const.from(getHello());
     *   var t = goog.string.Const.from('hello' + world);
     * </pre>
     *
     * @param {string} s A constant string from which to create a Const.
     * @return {!goog.string.Const} A Const object initialized to stringConst.
     */
    function from(s: any): Const;
    /**
     * Type marker for the Const type, used to implement additional run-time
     * type checking.
     * @const {!Object}
     * @private
     */
    var TYPE_MARKER_: {};
    /**
     * Utility method to create Const instances.
     * @param {string} s The string to initialize the Const object with.
     * @return {!goog.string.Const} The initialized Const object.
     * @private
     */
    function create__googStringSecurityPrivate_(s: any): Const;
    /**
     * A Const instance wrapping the empty string.
     * @const {!goog.string.Const}
     */
    var EMPTY: Const;
}
declare namespace goog.dom.tags {
    /**
     * The void elements specified by
     * http://www.w3.org/TR/html-markup/syntax.html#void-elements.
     * @const @private {!Object<string, boolean>}
     */
    var VOID_TAGS_: any;
    /**
     * Checks whether the tag is void (with no contents allowed and no legal end
     * tag), for example 'br'.
     * @param {string} tagName The tag name in lower case.
     * @return {boolean}
     */
    function isVoidTag(tagName: string): boolean;
}
declare namespace goog.html {
    class SafeScript implements goog.string.TypedString {
        privateDoNotAccessOrElseSafeScriptWrappedValue_: any;
        SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: any;
        /**
         * A string-like object which represents JavaScript code and that carries the
         * security type contract that its value, as a string, will not cause execution
         * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript
         * in a browser.
         *
         * Instances of this type must be created via the factory method
         * {@code goog.html.SafeScript.fromConstant} and not by invoking its
         * constructor. The constructor intentionally takes no parameters and the type
         * is immutable; hence only a default instance corresponding to the empty string
         * can be obtained via constructor invocation.
         *
         * A SafeScript's string representation can safely be interpolated as the
         * content of a script element within HTML. The SafeScript string should not be
         * escaped before interpolation.
         *
         * Note that the SafeScript might contain text that is attacker-controlled but
         * that text should have been interpolated with appropriate escaping,
         * sanitization and/or validation into the right location in the script, such
         * that it is highly constrained in its effect (for example, it had to match a
         * set of whitelisted words).
         *
         * A SafeScript can be constructed via security-reviewed unchecked
         * conversions. In this case producers of SafeScript must ensure themselves that
         * the SafeScript does not contain unsafe script. Note in particular that
         * {@code &lt;} is dangerous, even when inside JavaScript strings, and so should
         * always be forbidden or JavaScript escaped in user controlled input. For
         * example, if {@code &lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;"} were
         * interpolated inside a JavaScript string, it would break out of the context
         * of the original script element and {@code evil} would execute. Also note
         * that within an HTML script (raw text) element, HTML character references,
         * such as "&lt;" are not allowed. See
         * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.
         *
         * @see goog.html.SafeScript#fromConstant
         * @constructor
         * @final
         * @struct
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * Returns this SafeScript's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeScript}, use {@code goog.html.SafeScript.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml
         * // instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeScript#unwrap
         * @override
         */
        getTypedStringValue(): any;
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeScript, use
         * {@code goog.html.SafeScript.unwrap}.
         *
         * @see goog.html.SafeScript#unwrap
         * @override
         */
        toString(): string;
        /**
         * Called from createSafeScriptSecurityPrivateDoNotAccessOrElse(). This
         * method exists only so that the compiler can dead code eliminate static
         * fields (like EMPTY) when they're not accessed.
         * @param {string} script
         * @return {!goog.html.SafeScript}
         * @private
         */
        initSecurityPrivateDoNotAccessOrElse_(script: any): this;
    }
}
declare namespace goog.html.SafeScript {
    /**
     * Type marker for the SafeScript type, used to implement additional
     * run-time type checking.
     * @const {!Object}
     * @private
     */
    var TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
    /**
     * Creates a SafeScript object from a compile-time constant string.
     *
     * @param {!goog.string.Const} script A compile-time-constant string from which
     *     to create a SafeScript.
     * @return {!goog.html.SafeScript} A SafeScript object initialized to
     *     {@code script}.
     */
    function fromConstant(script: any): SafeScript;
    /**
     * Performs a runtime check that the provided object is indeed a
     * SafeScript object, and returns its value.
     *
     * @param {!goog.html.SafeScript} safeScript The object to extract from.
     * @return {string} The safeScript object's contained string, unless
     *     the run-time type check fails. In that case, {@code unwrap} returns an
     *     innocuous string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeScript: any): any;
    /**
     * Package-internal utility method to create SafeScript instances.
     *
     * @param {string} script The string to initialize the SafeScript object with.
     * @return {!goog.html.SafeScript} The initialized SafeScript object.
     * @package
     */
    function createSafeScriptSecurityPrivateDoNotAccessOrElse(script: any): SafeScript;
    /**
     * A SafeScript instance corresponding to the empty string.
     * @const {!goog.html.SafeScript}
     */
    var EMPTY: SafeScript;
}
declare namespace goog.html {
    /**
   * A string-like object which represents a sequence of CSS declarations
   * ({@code propertyName1: propertyvalue1; propertyName2: propertyValue2; ...})
   * and that carries the security type contract that its value, as a string,
   * will not cause untrusted script execution (XSS) when evaluated as CSS in a
   * browser.
   *
   * Instances of this type must be created via the factory methods
   * ({@code goog.html.SafeStyle.create} or
   * {@code goog.html.SafeStyle.fromConstant}) and not by invoking its
   * constructor. The constructor intentionally takes no parameters and the type
   * is immutable; hence only a default instance corresponding to the empty string
   * can be obtained via constructor invocation.
   *
   * SafeStyle's string representation can safely be:
   * <ul>
   *   <li>Interpolated as the content of a *quoted* HTML style attribute.
   *       However, the SafeStyle string *must be HTML-attribute-escaped* before
   *       interpolation.
   *   <li>Interpolated as the content of a {}-wrapped block within a stylesheet.
   *       '<' characters in the SafeStyle string *must be CSS-escaped* before
   *       interpolation. The SafeStyle string is also guaranteed not to be able
   *       to introduce new properties or elide existing ones.
   *   <li>Interpolated as the content of a {}-wrapped block within an HTML
   *       <style> element. '<' characters in the SafeStyle string
   *       *must be CSS-escaped* before interpolation.
   *   <li>Assigned to the style property of a DOM node. The SafeStyle string
   *       should not be escaped before being assigned to the property.
   * </ul>
   *
   * A SafeStyle may never contain literal angle brackets. Otherwise, it could
   * be unsafe to place a SafeStyle into a &lt;style&gt; tag (where it can't
   * be HTML escaped). For example, if the SafeStyle containing
   * "{@code font: 'foo &lt;style/&gt;&lt;script&gt;evil&lt;/script&gt;'}" were
   * interpolated within a &lt;style&gt; tag, this would then break out of the
   * style context into HTML.
   *
   * A SafeStyle may contain literal single or double quotes, and as such the
   * entire style string must be escaped when used in a style attribute (if
   * this were not the case, the string could contain a matching quote that
   * would escape from the style attribute).
   *
   * Values of this type must be composable, i.e. for any two values
   * {@code style1} and {@code style2} of this type,
   * {@code goog.html.SafeStyle.unwrap(style1) +
   * goog.html.SafeStyle.unwrap(style2)} must itself be a value that satisfies
   * the SafeStyle type constraint. This requirement implies that for any value
   * {@code style} of this type, {@code goog.html.SafeStyle.unwrap(style)} must
   * not end in a "property value" or "property name" context. For example,
   * a value of {@code background:url("} or {@code font-} would not satisfy the
   * SafeStyle contract. This is because concatenating such strings with a
   * second value that itself does not contain unsafe CSS can result in an
   * overall string that does. For example, if {@code javascript:evil())"} is
   * appended to {@code background:url("}, the resulting string may result in
   * the execution of a malicious script.
   *
   * TODO(mlourenco): Consider whether we should implement UTF-8 interchange
   * validity checks and blacklisting of newlines (including Unicode ones) and
   * other whitespace characters (\t, \f). Document here if so and also update
   * SafeStyle.fromConstant().
   *
   * The following example values comply with this type's contract:
   * <ul>
   *   <li><pre>width: 1em;</pre>
   *   <li><pre>height:1em;</pre>
   *   <li><pre>width: 1em;height: 1em;</pre>
   *   <li><pre>background:url('http://url');</pre>
   * </ul>
   * In addition, the empty string is safe for use in a CSS attribute.
   *
   * The following example values do NOT comply with this type's contract:
   * <ul>
   *   <li><pre>background: red</pre> (missing a trailing semi-colon)
   *   <li><pre>background:</pre> (missing a value and a trailing semi-colon)
   *   <li><pre>1em</pre> (missing an attribute name, which provides context for
   *       the value)
   * </ul>
   *
   * @see goog.html.SafeStyle#create
   * @see goog.html.SafeStyle#fromConstant
   * @see http://www.w3.org/TR/css3-syntax/
   */
    class SafeStyle implements goog.string.TypedString {
        private privateDoNotAccessOrElseSafeStyleWrappedValue_;
        private SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * @constructor
         * @final
         * @struct
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * Returns this SafeStyle's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeStyle}, use {@code goog.html.SafeStyle.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml
         * // instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeStyle#unwrap
         * @override
         */
        getTypedStringValue(): string;
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeStyle, use
         * {@code goog.html.SafeStyle.unwrap}.
         *
         * @see goog.html.SafeStyle#unwrap
         * @override
         */
        toString(): string;
        /**
         * Called from createSafeStyleSecurityPrivateDoNotAccessOrElse(). This
         * method exists only so that the compiler can dead code eliminate static
         * fields (like EMPTY) when they're not accessed.
         * @param {string} style
         * @return {!goog.html.SafeStyle}
         * @private
         */
        initSecurityPrivateDoNotAccessOrElse_(style: any): this;
        /**
       * Type marker for the SafeStyle type, used to implement additional
       * run-time type checking.
       * @const {!Object}
       * @private
       */
        static TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
        /**
         * Creates a SafeStyle object from a compile-time constant string.
         *
         * {@code style} should be in the format
         * {@code name: value; [name: value; ...]} and must not have any < or >
         * characters in it. This is so that SafeStyle's contract is preserved,
         * allowing the SafeStyle to correctly be interpreted as a sequence of CSS
         * declarations and without affecting the syntactic structure of any
         * surrounding CSS and HTML.
         *
         * This method performs basic sanity checks on the format of {@code style}
         * but does not constrain the format of {@code name} and {@code value}, except
         * for disallowing tag characters.
         *
         * @param {!goog.string.Const} style A compile-time-constant string from which
         *     to create a SafeStyle.
         * @return {!goog.html.SafeStyle} A SafeStyle object initialized to
         *     {@code style}.
         */
        static fromConstant(style: any): SafeStyle;
        /**
         * Checks if the style definition is valid.
         * @param {string} style
         * @private
         */
        static checkStyle_(style: any): void;
        /**
         * Performs a runtime check that the provided object is indeed a
         * SafeStyle object, and returns its value.
         *
         * @param {!goog.html.SafeStyle} safeStyle The object to extract from.
         * @return {string} The safeStyle object's contained string, unless
         *     the run-time type check fails. In that case, {@code unwrap} returns an
         *     innocuous string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeStyle: any): string;
        /**
         * Package-internal utility method to create SafeStyle instances.
         *
         * @param {string} style The string to initialize the SafeStyle object with.
         * @return {!goog.html.SafeStyle} The initialized SafeStyle object.
         * @package
         */
        static createSafeStyleSecurityPrivateDoNotAccessOrElse(style: any): SafeStyle;
        /**
         * A SafeStyle instance corresponding to the empty string.
         * @const {!goog.html.SafeStyle}
         */
        static EMPTY: SafeStyle;
        /**
         * The innocuous string generated by goog.html.SafeStyle.create when passed
         * an unsafe value.
         * @const {string}
         */
        static INNOCUOUS_STRING: string;
        /**
         * A single property value.
         * @typedef {string|!goog.string.Const|!goog.html.SafeUrl}
         */
        static PropertyValue: any;
        /**
         * Mapping of property names to their values.
         * We don't support numbers even though some values might be numbers (e.g.
         * line-height or 0 for any length). The reason is that most numeric values need
         * units (e.g. '1px') and allowing numbers could cause users forgetting about
         * them.
         * @typedef {!Object<string, ?goog.html.SafeStyle.PropertyValue|
         *     ?Array<!goog.html.SafeStyle.PropertyValue>>}
         */
        static PropertyMap: any;
        /**
         * Creates a new SafeStyle object from the properties specified in the map.
         * @param {goog.html.SafeStyle.PropertyMap} map Mapping of property names to
         *     their values, for example {'margin': '1px'}. Names must consist of
         *     [-_a-zA-Z0-9]. Values might be strings consisting of
         *     [-,.'"%_!# a-zA-Z0-9], where " and ' must be properly balanced. We also
         *     allow simple functions like rgb() and url() which sanitizes its contents.
         *     Other values must be wrapped in goog.string.Const. URLs might be passed
         *     as goog.html.SafeUrl which will be wrapped into url(""). We also support
         *     array whose elements are joined with ' '. Null value causes skipping the
         *     property.
         * @return {!goog.html.SafeStyle}
         * @throws {Error} If invalid name is provided.
         * @throws {goog.asserts.AssertionError} If invalid value is provided. With
         *     disabled assertions, invalid value is replaced by
         *     goog.html.SafeStyle.INNOCUOUS_STRING.
         */
        static create(map: any): SafeStyle;
        /**
         * Checks and converts value to string.
         * @param {!goog.html.SafeStyle.PropertyValue} value
         * @return {string}
         * @private
         */
        static sanitizePropertyValue_(value: any): any;
        /**
         * Checks string value.
         * @param {string} value
         * @return {string}
         * @private
         */
        static sanitizePropertyValueString_(value: any): any;
        /**
         * Checks that quotes (" and ') are properly balanced inside a string. Assumes
         * that neither escape (\) nor any other character that could result in
         * breaking out of a string parsing context are allowed;
         * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
         * @param {string} value Untrusted CSS property value.
         * @return {boolean} True if property value is safe with respect to quote
         *     balancedness.
         * @private
         */
        static hasBalancedQuotes_(value: any): boolean;
        /**
         * Characters allowed in goog.html.SafeStyle.VALUE_RE_.
         * @private {string}
         */
        static VALUE_ALLOWED_CHARS_: string;
        /**
         * Regular expression for safe values.
         *
         * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure
         * they're balanced.
         *
         * ',' allows multiple values to be assigned to the same property
         * (e.g. background-attachment or font-family) and hence could allow
         * multiple values to get injected, but that should pose no risk of XSS.
         *
         * The expression checks only for XSS safety, not for CSS validity.
         * @const {!RegExp}
         * @private
         */
        static VALUE_RE_: RegExp;
        /**
         * Regular expression for url(). We support URLs allowed by
         * https://www.w3.org/TR/css-syntax-3/#url-token-diagram without using escape
         * sequences. Use percent-encoding if you need to use special characters like
         * backslash.
         * @private @const {!RegExp}
         */
        static URL_RE_: RegExp;
        /**
         * Regular expression for simple functions.
         * @private @const {!RegExp}
         */
        static FUNCTIONS_RE_: RegExp;
        /**
         * Sanitize URLs inside url().
         *
         * NOTE: We could also consider using CSS.escape once that's available in the
         * browsers. However, loosely matching URL e.g. with url\(.*\) and then escaping
         * the contents would result in a slightly different language than CSS leading
         * to confusion of users. E.g. url(")") is valid in CSS but it would be invalid
         * as seen by our parser. On the other hand, url(\) is invalid in CSS but our
         * parser would be fine with it.
         *
         * @param {string} value Untrusted CSS property value.
         * @return {string}
         * @private
         */
        static sanitizeUrl_(value: any): any;
        /**
         * Creates a new SafeStyle object by concatenating the values.
         * @param {...(!goog.html.SafeStyle|!Array<!goog.html.SafeStyle>)} var_args
         *     SafeStyles to concatenate.
         * @return {!goog.html.SafeStyle}
         */
        static concat(var_args: any): SafeStyle;
    }
}
declare namespace goog.html {
    /**
     * A string-like object which represents a CSS style sheet and that carries the
     * security type contract that its value, as a string, will not cause untrusted
     * script execution (XSS) when evaluated as CSS in a browser.
     *
     * Instances of this type must be created via the factory method
     * {@code goog.html.SafeStyleSheet.fromConstant} and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty string
     * can be obtained via constructor invocation.
     *
     * A SafeStyleSheet's string representation can safely be interpolated as the
     * content of a style element within HTML. The SafeStyleSheet string should
     * not be escaped before interpolation.
     *
     * Values of this type must be composable, i.e. for any two values
     * {@code styleSheet1} and {@code styleSheet2} of this type,
     * {@code goog.html.SafeStyleSheet.unwrap(styleSheet1) +
     * goog.html.SafeStyleSheet.unwrap(styleSheet2)} must itself be a value that
     * satisfies the SafeStyleSheet type constraint. This requirement implies that
     * for any value {@code styleSheet} of this type,
     * {@code goog.html.SafeStyleSheet.unwrap(styleSheet1)} must end in
     * "beginning of rule" context.
  
    * A SafeStyleSheet can be constructed via security-reviewed unchecked
    * conversions. In this case producers of SafeStyleSheet must ensure themselves
    * that the SafeStyleSheet does not contain unsafe script. Note in particular
    * that {@code &lt;} is dangerous, even when inside CSS strings, and so should
    * always be forbidden or CSS-escaped in user controlled input. For example, if
    * {@code &lt;/style&gt;&lt;script&gt;evil&lt;/script&gt;"} were interpolated
    * inside a CSS string, it would break out of the context of the original
    * style element and {@code evil} would execute. Also note that within an HTML
    * style (raw text) element, HTML character references, such as
    * {@code &amp;lt;}, are not allowed. See
    *
    http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements
    * (similar considerations apply to the style element).
    *
    * @see goog.html.SafeStyleSheet#fromConstant
    */
    class SafeStyleSheet implements goog.string.TypedString {
        private privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        private SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * @constructor
         * @final
         * @struct
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * Returns this SafeStyleSheet's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeStyleSheet}, use {@code goog.html.SafeStyleSheet.unwrap}
         * instead of this method. If in doubt, assume that it's security relevant. In
         * particular, note that goog.html functions which return a goog.html type do
         * not guarantee the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml
         * // instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeStyleSheet#unwrap
         * @override
         */
        getTypedStringValue(): string;
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeStyleSheet, use
         * {@code goog.html.SafeStyleSheet.unwrap}.
         *
         * @see goog.html.SafeStyleSheet#unwrap
         * @override
         */
        toString(): string;
        /**
         * Called from createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(). This
         * method exists only so that the compiler can dead code eliminate static
         * fields (like EMPTY) when they're not accessed.
         * @param {string} styleSheet
         * @return {!goog.html.SafeStyleSheet}
         * @private
         */
        initSecurityPrivateDoNotAccessOrElse_(styleSheet: any): this;
        /**
         * Type marker for the SafeStyleSheet type, used to implement additional
         * run-time type checking.
         * @const {!Object}
         * @private
         */
        static TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
        /**
         * Performs a runtime check that the provided object is indeed a
         * SafeStyleSheet object, and returns its value.
         *
         * @param {!goog.html.SafeStyleSheet} safeStyleSheet The object to extract from.
         * @return {string} The safeStyleSheet object's contained string, unless
         *     the run-time type check fails. In that case, {@code unwrap} returns an
         *     innocuous string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeStyleSheet: any): string;
        /**
         * Creates a style sheet consisting of one selector and one style definition.
         * Use {@link goog.html.SafeStyleSheet.concat} to create longer style sheets.
         * This function doesn't support @import, @media and similar constructs.
         * @param {string} selector CSS selector, e.g. '#id' or 'tag .class, #id'. We
         *     support CSS3 selectors: https://w3.org/TR/css3-selectors/#selectors.
         * @param {!goog.html.SafeStyle.PropertyMap|!goog.html.SafeStyle} style Style
         *     definition associated with the selector.
         * @return {!goog.html.SafeStyleSheet}
         * @throws {Error} If invalid selector is provided.
         */
        static createRule(selector: any, style: any): SafeStyleSheet;
        /**
         * Checks if a string has balanced () and [] brackets.
         * @param {string} s String to check.
         * @return {boolean}
         * @private
         */
        static hasBalancedBrackets_(s: any): boolean;
        /**
         * Creates a new SafeStyleSheet object by concatenating values.
         * @param {...(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)}
         *     var_args Values to concatenate.
         * @return {!goog.html.SafeStyleSheet}
         */
        static concat(var_args: any): SafeStyleSheet;
        /**
         * Creates a SafeStyleSheet object from a compile-time constant string.
         *
         * {@code styleSheet} must not have any &lt; characters in it, so that
         * the syntactic structure of the surrounding HTML is not affected.
         *
         * @param {!goog.string.Const} styleSheet A compile-time-constant string from
         *     which to create a SafeStyleSheet.
         * @return {!goog.html.SafeStyleSheet} A SafeStyleSheet object initialized to
         *     {@code styleSheet}.
         */
        static fromConstant(styleSheet: any): SafeStyleSheet;
        /**
         * Package-internal utility method to create SafeStyleSheet instances.
         *
         * @param {string} styleSheet The string to initialize the SafeStyleSheet
         *     object with.
         * @return {!goog.html.SafeStyleSheet} The initialized SafeStyleSheet object.
         * @package
         */
        static createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet: any): SafeStyleSheet;
        /**
         * A SafeStyleSheet instance corresponding to the empty string.
         * @const {!goog.html.SafeStyleSheet}
         */
        static EMPTY: SafeStyleSheet;
    }
}
declare namespace goog.fs.url {
    /**
     * Creates a blob URL for a blob object.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: any): any;
    /**
     * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: any): void;
    /**
     * Get the object that has the createObjectURL and revokeObjectURL functions for
     * this browser.
     *
     * @return {goog.fs.url.UrlObject_} The object for this browser.
     * @private
     */
    function getUrlObject_(): any;
    /**
     * Finds the object that has the createObjectURL and revokeObjectURL functions
     * for this browser.
     *
     * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the
     *     browser does not support Object Urls.
     * @private
     */
    function findUrlObject_(): any;
    /**
     * Checks whether this browser supports Object Urls. If not, calls to
     * createObjectUrl and revokeObjectUrl will result in an error.
     *
     * @return {boolean} True if this browser supports Object Urls.
     */
    function browserSupportsObjectUrls(): boolean;
}
declare namespace goog.html {
    class TrustedResourceUrl implements goog.i18n.bidi.DirectionalString, goog.string.TypedString {
        privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_: any;
        TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: any;
        /**
         * A URL which is under application control and from which script, CSS, and
         * other resources that represent executable code, can be fetched.
         *
         * Given that the URL can only be constructed from strings under application
         * control and is used to load resources, bugs resulting in a malformed URL
         * should not have a security impact and are likely to be easily detectable
         * during testing. Given the wide number of non-RFC compliant URLs in use,
         * stricter validation could prevent some applications from being able to use
         * this type.
         *
         * Instances of this type must be created via the factory method,
         * ({@code fromConstant}, {@code fromConstants}, {@code format} or {@code
         * formatWithParams}), and not by invoking its constructor. The constructor
         * intentionally takes no parameters and the type is immutable; hence only a
         * default instance corresponding to the empty string can be obtained via
         * constructor invocation.
         *
         * @see goog.html.TrustedResourceUrl#fromConstant
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * Returns this TrustedResourceUrl's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code TrustedResourceUrl}, use
         * {@code goog.html.TrustedResourceUrl.unwrap} instead of this method. If in
         * doubt, assume that it's security relevant. In particular, note that
         * goog.html functions which return a goog.html type do not guarantee that
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml instanceof
         * // goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.TrustedResourceUrl#unwrap
         * @override
         */
        getTypedStringValue(): any;
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        /**
         * Returns this URLs directionality, which is always {@code LTR}.
         * @override
         */
        getDirection(): i18n.bidi.Dir;
        /**
         * Creates a new TrustedResourceUrl with params added to URL.
         * @param {!Object<string, *>} params Parameters to add to URL. Parameters with
         *     value {@code null} or {@code undefined} are skipped. Both keys and values
         *     are encoded. If the value is an array then the same parameter is added
         *     for every element in the array. Note that JavaScript doesn't guarantee
         *     the order of values in an object which might result in non-deterministic
         *     order of the parameters. However, browsers currently preserve the order.
         * @return {!goog.html.TrustedResourceUrl} New TrustedResourceUrl with params.
         */
        cloneWithParams(params: any): TrustedResourceUrl;
    }
}
declare namespace goog.html.TrustedResourceUrl {
    /**
     * Performs a runtime check that the provided object is indeed a
     * TrustedResourceUrl object, and returns its value.
     *
     * @param {!goog.html.TrustedResourceUrl} trustedResourceUrl The object to
     *     extract from.
     * @return {string} The trustedResourceUrl object's contained string, unless
     *     the run-time type check fails. In that case, {@code unwrap} returns an
     *     innocuous string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(trustedResourceUrl: any): any;
    /**
     * Creates a TrustedResourceUrl from a format string and arguments.
     *
     * The arguments for interpolation into the format string map labels to values.
     * Values of type `goog.string.Const` are interpolated without modifcation.
     * Values of other types are cast to string and encoded with
     * encodeURIComponent.
     *
     * `%{<label>}` markers are used in the format string to indicate locations
     * to be interpolated with the valued mapped to the given label. `<label>`
     * must contain only alphanumeric and `_` characters.
     *
     * The format string must start with one of the following:
     * - `https://<origin>/`
     * - `//<origin>/`
     * - `/<pathStart>`
     * - `about:blank`
     *
     * `<origin>` must contain only alphanumeric or any of the following: `-.:[]`.
     * `<pathStart>` is any character except `/` and `\`.
     *
     * Example usage:
     *
     *    var url = goog.html.TrustedResourceUrl.format(goog.string.Const.from(
     *        'https://www.google.com/search?q=%{query}'), {'query': searchTerm});
     *
     *    var url = goog.html.TrustedResourceUrl.format(goog.string.Const.from(
     *        '//www.youtube.com/v/%{videoId}?hl=en&fs=1%{autoplay}'), {
     *        'videoId': videoId,
     *        'autoplay': opt_autoplay ?
     *            goog.string.Const.from('&autoplay=1') : goog.string.Const.EMPTY
     *    });
     *
     * While this function can be used to create a TrustedResourceUrl from only
     * constants, fromConstant() and fromConstants() are generally preferable for
     * that purpose.
     *
     * @param {!goog.string.Const} format The format string.
     * @param {!Object<string, (string|number|!goog.string.Const)>} args Mapping
     *     of labels to values to be interpolated into the format string.
     *     goog.string.Const values are interpolated without encoding.
     * @return {!goog.html.TrustedResourceUrl}
     * @throws {!Error} On an invalid format string or if a label used in the
     *     the format string is not present in args.
     */
    function format(format: any, args: any): TrustedResourceUrl;
    /**
     * @private @const {!RegExp}
     */
    var FORMAT_MARKER_: RegExp;
    /**
     * The URL must be absolute, scheme-relative or path-absolute. So it must
     * start with:
     * - https:// followed by allowed origin characters.
     * - // followed by allowed origin characters.
     * - / not followed by / or \. There will only be an absolute path.
     *
     * Based on
     * https://url.spec.whatwg.org/commit-snapshots/56b74ce7cca8883eab62e9a12666e2fac665d03d/#url-parsing
     * an initial / which is not followed by another / or \ will end up in the "path
     * state" and from there it can only go to "fragment state" and "query state".
     *
     * We don't enforce a well-formed domain name. So '.' or '1.2' are valid.
     * That's ok because the origin comes from a compile-time constant.
     *
     * A regular expression is used instead of goog.uri for several reasons:
     * - Strictness. E.g. we don't want any userinfo component and we don't
     *   want '/./, nor \' in the first path component.
     * - Small trusted base. goog.uri is generic and might need to change,
     *   reasoning about all the ways it can parse a URL now and in the future
     *   is error-prone.
     * - Code size. We expect many calls to .format(), many of which might
     *   not be using goog.uri.
     * - Simplicity. Using goog.uri would likely not result in simpler nor shorter
     *   code.
     * @private @const {!RegExp}
     */
    var BASE_URL_: RegExp;
    /**
     * Formats the URL same as TrustedResourceUrl.format and then adds extra URL
     * parameters.
     *
     * Example usage:
     *
     *     // Creates '//www.youtube.com/v/abc?autoplay=1' for videoId='abc' and
     *     // opt_autoplay=1. Creates '//www.youtube.com/v/abc' for videoId='abc'
     *     // and opt_autoplay=undefined.
     *     var url = goog.html.TrustedResourceUrl.formatWithParams(
     *         goog.string.Const.from('//www.youtube.com/v/%{videoId}'),
     *         {'videoId': videoId},
     *         {'autoplay': opt_autoplay});
     *
     * @param {!goog.string.Const} format The format string.
     * @param {!Object<string, (string|number|!goog.string.Const)>} args Mapping
     *     of labels to values to be interpolated into the format string.
     *     goog.string.Const values are interpolated without encoding.
     * @param {!Object<string, *>} params Parameters to add to URL. Parameters with
     *     value {@code null} or {@code undefined} are skipped. Both keys and values
     *     are encoded. If the value is an array then the same parameter is added
     *     for every element in the array. Note that JavaScript doesn't guarantee
     *     the order of values in an object which might result in non-deterministic
     *     order of the parameters. However, browsers currently preserve the order.
     * @return {!goog.html.TrustedResourceUrl}
     * @throws {!Error} On an invalid format string or if a label used in the
     *     the format string is not present in args.
     */
    function formatWithParams(format: any, args: any, params: any): TrustedResourceUrl;
    /**
     * Creates a TrustedResourceUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!goog.string.Const} url A compile-time-constant string from which to
     *     create a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} A TrustedResourceUrl object
     *     initialized to {@code url}.
     */
    function fromConstant(url: any): TrustedResourceUrl;
    /**
     * Creates a TrustedResourceUrl object from a compile-time constant strings.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!Array<!goog.string.Const>} parts Compile-time-constant strings from
     *     which to create a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} A TrustedResourceUrl object
     *     initialized to concatenation of {@code parts}.
     */
    function fromConstants(parts: any): TrustedResourceUrl;
    /**
     * Type marker for the TrustedResourceUrl type, used to implement additional
     * run-time type checking.
     * @const {!Object}
     * @private
     */
    var TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
    /**
     * Package-internal utility method to create TrustedResourceUrl instances.
     *
     * @param {string} url The string to initialize the TrustedResourceUrl object
     *     with.
     * @return {!goog.html.TrustedResourceUrl} The initialized TrustedResourceUrl
     *     object.
     * @package
     */
    function createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url: any): TrustedResourceUrl;
}
declare namespace goog.i18n.bidi {
    /**
     * @define {boolean} FORCE_RTL forces the {@link goog.i18n.bidi.IS_RTL} constant
     * to say that the current locale is a RTL locale.  This should only be used
     * if you want to override the default behavior for deciding whether the
     * current locale is RTL or not.
     *
     * {@see goog.i18n.bidi.IS_RTL}
     */
    var FORCE_RTL: boolean;
    /**
     * Constant that defines whether or not the current locale is a RTL locale.
     * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
     * to check that {@link goog.LOCALE} is one of a few major RTL locales.
     *
     * <p>This is designed to be a maximally efficient compile-time constant. For
     * example, for the default goog.LOCALE, compiling
     * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
     * is this design consideration that limits the implementation to only
     * supporting a few major RTL locales, as opposed to the broader repertoire of
     * something like goog.i18n.bidi.isRtlLanguage.
     *
     * <p>Since this constant refers to the directionality of the locale, it is up
     * to the caller to determine if this constant should also be used for the
     * direction of the UI.
     *
     * {@see goog.LOCALE}
     *
     * @type {boolean}
     *
     * TODO(user): write a test that checks that this is a compile-time constant.
     */
    var IS_RTL: boolean;
    /**
     * Unicode formatting characters and directionality string constants.
     * @enum {string}
     */
    enum Format {
        /** Unicode "Left-To-Right Embedding" (LRE) character. */
        LRE = "\u202A",
        /** Unicode "Right-To-Left Embedding" (RLE) character. */
        RLE = "\u202B",
        /** Unicode "Pop Directional Formatting" (PDF) character. */
        PDF = "\u202C",
        /** Unicode "Left-To-Right Mark" (LRM) character. */
        LRM = "\u200E",
        /** Unicode "Right-To-Left Mark" (RLM) character. */
        RLM = "\u200F",
    }
    /**
     * Directionality enum.
     * @enum {number}
     */
    enum Dir {
        /**
         * Left-to-right.
         */
        LTR = 1,
        /**
         * Right-to-left.
         */
        RTL = -1,
        /**
         * Neither left-to-right nor right-to-left.
         */
        NEUTRAL = 0,
    }
    /**
     * 'right' string constant.
     * @type {string}
     */
    var RIGHT: string;
    /**
     * 'left' string constant.
     * @type {string}
     */
    var LEFT: string;
    /**
     * 'left' if locale is RTL, 'right' if not.
     * @type {string}
     */
    var I18N_RIGHT: string;
    /**
     * 'right' if locale is RTL, 'left' if not.
     * @type {string}
     */
    var I18N_LEFT: string;
    /**
     * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
     * constant. Useful for interaction with different standards of directionality
     * representation.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
     *     in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
     *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
     *     order to preserve legacy behavior.
     * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
     *     given directionality. If given null, returns null (i.e. unknown).
     */
    function toDir(givenDir: goog.i18n.bidi.Dir | number | boolean | null, opt_noNeutral?: boolean | undefined): goog.i18n.bidi.Dir | null;
    /**
     * A practical pattern to identify strong LTR characters. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified for
     * performance and small code size.
     * @type {string}
     * @private
     */
    var ltrChars_: string;
    /**
     * A practical pattern to identify strong RTL character. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified
     * for performance and small code size.
     * @type {string}
     * @private
     */
    var rtlChars_: string;
    /**
     * Simplified regular expression for an HTML tag (opening or closing) or an HTML
     * escape. We might want to skip over such expressions when estimating the text
     * directionality.
     * @type {RegExp}
     * @private
     */
    var htmlSkipReg_: RegExp;
    /**
     * Returns the input text with spaces instead of HTML tags or HTML escapes, if
     * opt_isStripNeeded is true. Else returns the input as is.
     * Useful for text directionality estimation.
     * Note: the function should not be used in other contexts; it is not 100%
     * correct, but rather a good-enough implementation for directionality
     * estimation purposes.
     * @param {string} str The given string.
     * @param {boolean=} opt_isStripNeeded Whether to perform the stripping.
     *     Default: false (to retain consistency with calling functions).
     * @return {string} The given string cleaned of HTML tags / escapes.
     * @private
     */
    function stripHtmlIfNeeded_(str: string, opt_isStripNeeded?: boolean | undefined): string;
    /**
     * Regular expression to check for RTL characters.
     * @type {RegExp}
     * @private
     */
    var rtlCharReg_: RegExp;
    /**
     * Regular expression to check for LTR characters.
     * @type {RegExp}
     * @private
     */
    var ltrCharReg_: RegExp;
    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains RTL characters.
     */
    function hasAnyRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the string contains RTL characters.
     * @deprecated Use hasAnyRtl.
     */
    var hasRtlChar: typeof hasAnyRtl;
    /**
     * Test whether the given string has any LTR characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains LTR characters.
     */
    function hasAnyLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Regular expression pattern to check if the first character in the string
     * is LTR.
     * @type {RegExp}
     * @private
     */
    var ltrRe_: RegExp;
    /**
     * Regular expression pattern to check if the first character in the string
     * is RTL.
     * @type {RegExp}
     * @private
     */
    var rtlRe_: RegExp;
    /**
     * Check if the first character in the string is RTL or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an RTL char.
     */
    function isRtlChar(str: string): boolean;
    /**
     * Check if the first character in the string is LTR or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an LTR char.
     */
    function isLtrChar(str: string): boolean;
    /**
     * Check if the first character in the string is neutral or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is a neutral char.
     */
    function isNeutralChar(str: string): boolean;
    /**
     * Regular expressions to check if a piece of text is of LTR directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    var ltrDirCheckRe_: RegExp;
    /**
     * Regular expressions to check if a piece of text is of RTL directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    var rtlDirCheckRe_: RegExp;
    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithRtl.
     */
    var isRtlText: typeof startsWithRtl;
    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithLtr.
     */
    var isLtrText: typeof startsWithLtr;
    /**
     * Regular expression to check if a string looks like something that must
     * always be LTR even in RTL text, e.g. a URL. When estimating the
     * directionality of text containing these, we treat these as weakly LTR,
     * like numbers.
     * @type {RegExp}
     * @private
     */
    var isRequiredLtrRe_: RegExp;
    /**
     * Check whether the input string either contains no strongly directional
     * characters or looks like a url.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether neutral directionality is detected.
     */
    function isNeutralText(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is LTR.
     * @type {RegExp}
     * @private
     */
    var ltrExitDirCheckRe_: RegExp;
    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is RTL.
     * @type {RegExp}
     * @private
     */
    var rtlExitDirCheckRe_: RegExp;
    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     */
    function endsWithLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     * @deprecated Use endsWithLtr.
     */
    var isLtrExitText: typeof endsWithLtr;
    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     */
    function endsWithRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     * @deprecated Use endsWithRtl.
     */
    var isRtlExitText: typeof endsWithRtl;
    /**
     * A regular expression for matching right-to-left language codes.
     * See {@link #isRtlLanguage} for the design.
     * @type {RegExp}
     * @private
     */
    var rtlLocalesRe_: RegExp;
    /**
     * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
     * - a language code explicitly specifying one of the right-to-left scripts,
     *   e.g. "az-Arab", or<p>
     * - a language code specifying one of the languages normally written in a
     *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
     *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
     * The list of right-to-left scripts appears in the 100-199 range in
     * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
     * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
     * Tifinagh, which also have significant modern usage. The rest (Syriac,
     * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
     * and are not recognized to save on code size.
     * The languages usually written in a right-to-left script are taken as those
     * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
     * http://www.iana.org/assignments/language-subtag-registry,
     * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
     * Other subtags of the language code, e.g. regions like EG (Egypt), are
     * ignored.
     * @param {string} lang BCP 47 (a.k.a III) language code.
     * @return {boolean} Whether the language code is an RTL language.
     */
    function isRtlLanguage(lang: string): boolean;
    /**
     * Regular expression for bracket guard replacement in text.
     * @type {RegExp}
     * @private
     */
    var bracketGuardTextRe_: RegExp;
    /**
     * Apply bracket guard using LRM and RLM. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * This function works for plain text, not for HTML. In HTML, the opening
     * bracket might be in a different context than the closing bracket (such as
     * an attribute value).
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInText(s: string, opt_isRtlContext?: boolean | undefined): string;
    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceRtlInHtml(html: string): string;
    /**
     * Enforce RTL on both end of the given text piece using unicode BiDi formatting
     * characters RLE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceRtlInText(text: string): string;
    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceLtrInHtml(html: string): string;
    /**
     * Enforce LTR on both end of the given text piece using unicode BiDi formatting
     * characters LRE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceLtrInText(text: string): string;
    /**
     * Regular expression to find dimensions such as "padding: .3 0.4ex 5px 6;"
     * @type {RegExp}
     * @private
     */
    var dimensionsRe_: RegExp;
    /**
     * Regular expression for left.
     * @type {RegExp}
     * @private
     */
    var leftRe_: RegExp;
    /**
     * Regular expression for right.
     * @type {RegExp}
     * @private
     */
    var rightRe_: RegExp;
    /**
     * Placeholder regular expression for swapping.
     * @type {RegExp}
     * @private
     */
    var tempRe_: RegExp;
    /**
     * Swap location parameters and 'left'/'right' in CSS specification. The
     * processed string will be suited for RTL layout. Though this function can
     * cover most cases, there are always exceptions. It is suggested to put
     * those exceptions in separate group of CSS string.
     * @param {string} cssStr CSS spefication string.
     * @return {string} Processed CSS specification string.
     */
    function mirrorCSS(cssStr: string): string;
    /**
     * Regular expression for hebrew double quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    var doubleQuoteSubstituteRe_: RegExp;
    /**
     * Regular expression for hebrew single quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    var singleQuoteSubstituteRe_: RegExp;
    /**
     * Replace the double and single quote directly after a Hebrew character with
     * GERESH and GERSHAYIM. In such case, most likely that's user intention.
     * @param {string} str String that need to be processed.
     * @return {string} Processed string with double/single quote replaced.
     */
    function normalizeHebrewQuote(str: string): string;
    /**
     * Regular expression to split a string into "words" for directionality
     * estimation based on relative word counts.
     * @type {RegExp}
     * @private
     */
    var wordSeparatorRe_: RegExp;
    /**
     * Regular expression to check if a string contains any numerals. Used to
     * differentiate between completely neutral strings and those containing
     * numbers, which are weakly LTR.
     *
     * Native Arabic digits (\u0660 - \u0669) are not included because although they
     * do flow left-to-right inside a number, this is the case even if the  overall
     * directionality is RTL, and a mathematical expression using these digits is
     * supposed to flow right-to-left overall, including unary plus and minus
     * appearing to the right of a number, and this does depend on the overall
     * directionality being RTL. The digits used in Farsi (\u06F0 - \u06F9), on the
     * other hand, are included, since Farsi math (including unary plus and minus)
     * does flow left-to-right.
     *
     * @type {RegExp}
     * @private
     */
    var hasNumeralsRe_: RegExp;
    /**
     * This constant controls threshold of RTL directionality.
     * @type {number}
     * @private
     */
    var rtlDetectionThreshold_: number;
    /**
     * Estimates the directionality of a string based on relative word counts.
     * If the number of RTL words is above a certain percentage of the total number
     * of strongly directional words, returns RTL.
     * Otherwise, if any words are strongly or weakly LTR, returns LTR.
     * Otherwise, returns UNKNOWN, which is used to mean "neutral".
     * Numbers are counted as weakly LTR.
     * @param {string} str The string to be checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
     */
    function estimateDirection(str: string, opt_isHtml?: boolean | undefined): goog.i18n.bidi.Dir;
    /**
     * Check the directionality of a piece of text, return true if the piece of
     * text should be laid out in RTL direction.
     * @param {string} str The piece of text that need to be detected.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether this piece of text should be laid out in RTL.
     */
    function detectRtlDirectionality(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Sets text input element's directionality and text alignment based on a
     * given directionality. Does nothing if the given directionality is unknown or
     * neutral.
     * @param {Element} element Input field element to set directionality to.
     * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
     *     given in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     */
    function setElementDirAndAlign(element: Element, dir: goog.i18n.bidi.Dir | number | boolean | null): void;
    /**
     * Sets element dir based on estimated directionality of the given text.
     * @param {!Element} element
     * @param {string} text
     */
    function setElementDirByTextDirectionality(element: Element, text: string): void;
}
declare namespace goog.i18n.bidi {
    /**
     * Strings that have an (optional) known direction.
     *
     * Implementations of this interface are string-like objects that carry an
     * attached direction, if known.
     * @interface
     */
    interface DirectionalString {
        /**
         * Interface marker of the DirectionalString interface.
         *
         * This property can be used to determine at runtime whether or not an object
         * implements this interface.  All implementations of this interface set this
         * property to {@code true}.
         * @type {boolean}
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        /**
         * Retrieves this object's known direction (if any).
         * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
         */
        getDirection(): goog.i18n.bidi.Dir;
    }
}
declare namespace goog.string {
    /**
     * Wrapper for strings that conform to a data type or language.
     *
     * Implementations of this interface are wrappers for strings, and typically
     * associate a type contract with the wrapped string.  Concrete implementations
     * of this interface may choose to implement additional run-time type checking,
     * see for example {@code goog.html.SafeHtml}. If available, client code that
     * needs to ensure type membership of an object should use the type's function
     * to assert type membership, such as {@code goog.html.SafeHtml.unwrap}.
     * @interface
     */
    interface TypedString {
        /**
         * Interface marker of the TypedString interface.
         *
         * This property can be used to determine at runtime whether or not an object
         * implements this interface.  All implementations of this interface set this
         * property to {@code true}.
         * @type {boolean}
         */
        implementsGoogStringTypedString: boolean;
        /**
         * Retrieves this wrapped string's value.
         * @return {string} The wrapped string's value.
         */
        getTypedStringValue(): string;
    }
}
declare namespace goog.html {
    class SafeUrl implements goog.string.TypedString, goog.i18n.bidi.DirectionalString {
        privateDoNotAccessOrElseSafeHtmlWrappedValue_: string;
        SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: any;
        /**
         * A string that is safe to use in URL context in DOM APIs and HTML documents.
         *
         * A SafeUrl is a string-like object that carries the security type contract
         * that its value as a string will not cause untrusted script execution
         * when evaluated as a hyperlink URL in a browser.
         *
         * Values of this type are guaranteed to be safe to use in URL/hyperlink
         * contexts, such as assignment to URL-valued DOM properties, in the sense that
         * the use will not result in a Cross-Site-Scripting vulnerability. Similarly,
         * SafeUrls can be interpolated into the URL context of an HTML template (e.g.,
         * inside a href attribute). However, appropriate HTML-escaping must still be
         * applied.
         *
         * Note that, as documented in {@code goog.html.SafeUrl.unwrap}, this type's
         * contract does not guarantee that instances are safe to interpolate into HTML
         * without appropriate escaping.
         *
         * Note also that this type's contract does not imply any guarantees regarding
         * the resource the URL refers to.  In particular, SafeUrls are <b>not</b>
         * safe to use in a context where the referred-to resource is interpreted as
         * trusted code, e.g., as the src of a script tag.
         *
         * Instances of this type must be created via the factory methods
         * ({@code goog.html.SafeUrl.fromConstant}, {@code goog.html.SafeUrl.sanitize}),
         * etc and not by invoking its constructor.  The constructor intentionally
         * takes no parameters and the type is immutable; hence only a default instance
         * corresponding to the empty string can be obtained via constructor invocation.
         *
         * @see goog.html.SafeUrl#fromConstant
         * @see goog.html.SafeUrl#from
         * @see goog.html.SafeUrl#sanitize
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
     * Returns this SafeUrl's value a string.
     *
     * IMPORTANT: In code where it is security relevant that an object's type is
     * indeed {@code SafeUrl}, use {@code goog.html.SafeUrl.unwrap} instead of this
     * method. If in doubt, assume that it's security relevant. In particular, note
     * that goog.html functions which return a goog.html type do not guarantee that
     * the returned instance is of the right type. For example:
     *
     * <pre>
     * var fakeSafeHtml = new String('fake');
     * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
     * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
     * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
     * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml instanceof
     * // goog.html.SafeHtml.
     * </pre>
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     *
     * @see goog.html.SafeUrl#unwrap
     * @override
     */
        getTypedStringValue(): string;
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        /**
         * Returns this URLs directionality, which is always {@code LTR}.
         * @override
         */
        getDirection(): i18n.bidi.Dir;
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeUrl, use
         * {@code goog.html.SafeUrl.unwrap}.
         *
         * @see goog.html.SafeUrl#unwrap
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.html.SafeUrl {
    var FUNCTIONS_RE_: any;
    var URL_RE_: any;
    /**
     * The innocuous string generated by goog.html.SafeUrl.sanitize when passed
     * an unsafe URL.
     *
     * about:invalid is registered in
     * http://www.w3.org/TR/css3-values/#about-invalid.
     * http://tools.ietf.org/html/rfc6694#section-2.2.1 permits about URLs to
     * contain a fragment, which is not to be considered when determining if an
     * about URL is well-known.
     *
     * Using about:invalid seems preferable to using a fixed data URL, since
     * browsers might choose to not report CSP violations on it, as legitimate
     * CSS function calls to attr() can result in this URL being produced. It is
     * also a standard URL which matches exactly the semantics we need:
     * "The about:invalid URI references a non-existent document with a generic
     * error condition. It can be used when a URI is necessary, but the default
     * value shouldn't be resolveable as any type of document".
     *
     * @const {string}
     */
    var INNOCUOUS_STRING: string;
    /**
     * Performs a runtime check that the provided object is indeed a SafeUrl
     * object, and returns its value.
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of  browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     *
     * @param {!goog.html.SafeUrl} safeUrl The object to extract from.
     * @return {string} The SafeUrl object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeUrl: any): string;
    /**
     * Creates a SafeUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!goog.string.Const} url A compile-time-constant string from which to
     *         create a SafeUrl.
     * @return {!goog.html.SafeUrl} A SafeUrl object initialized to {@code url}.
     */
    function fromConstant(url: any): SafeUrl;
    /**
     * Creates a SafeUrl wrapping a blob URL for the given {@code blob}.
     *
     * The blob URL is created with {@code URL.createObjectURL}. If the MIME type
     * for {@code blob} is not of a known safe audio, image or video MIME type,
     * then the SafeUrl will wrap {@link #INNOCUOUS_STRING}.
     *
     * @see http://www.w3.org/TR/FileAPI/#url
     * @param {!Blob} blob
     * @return {!goog.html.SafeUrl} The blob URL, or an innocuous string wrapped
     *   as a SafeUrl.
     */
    function fromBlob(blob: any): SafeUrl;
    /**
     * Creates a SafeUrl wrapping a data: URL, after validating it matches a
     * known-safe audio, image or video MIME type.
     *
     * @param {string} dataUrl A valid base64 data URL with one of the whitelisted
     *     audio, image or video MIME types.
     * @return {!goog.html.SafeUrl} A matching safe URL, or {@link INNOCUOUS_STRING}
     *     wrapped as a SafeUrl if it does not pass.
     */
    function fromDataUrl(dataUrl: any): SafeUrl;
    /**
     * Creates a SafeUrl wrapping a tel: URL.
     *
     * @param {string} telUrl A tel URL.
     * @return {!goog.html.SafeUrl} A matching safe URL, or {@link INNOCUOUS_STRING}
     *     wrapped as a SafeUrl if it does not pass.
     */
    function fromTelUrl(telUrl: any): SafeUrl;
    /**
     * Creates a SafeUrl from TrustedResourceUrl. This is safe because
     * TrustedResourceUrl is more tightly restricted than SafeUrl.
     *
     * @param {!goog.html.TrustedResourceUrl} trustedResourceUrl
     * @return {!goog.html.SafeUrl}
     */
    function fromTrustedResourceUrl(trustedResourceUrl: any): SafeUrl;
    /**
     * Creates a SafeUrl object from {@code url}. If {@code url} is a
     * goog.html.SafeUrl then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs.
     *
     * {@code url} may be a URL with the http, https, mailto or ftp scheme,
     * or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     *
     * @see http://url.spec.whatwg.org/#concept-relative-url
     * @param {string|!goog.string.TypedString} url The URL to validate.
     * @return {!goog.html.SafeUrl} The validated URL, wrapped as a SafeUrl.
     */
    function sanitize(url: any): SafeUrl;
    /**
     * Creates a SafeUrl object from {@code url}. If {@code url} is a
     * goog.html.SafeUrl then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs.
     *
     * {@code url} may be a URL with the http, https, mailto or ftp scheme,
     * or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     *
     * This function asserts (using goog.asserts) that the URL matches this pattern.
     * If it does not, in addition to failing the assert, an innocous URL will be
     * returned.
     *
     * @see http://url.spec.whatwg.org/#concept-relative-url
     * @param {string|!goog.string.TypedString} url The URL to validate.
     * @return {!goog.html.SafeUrl} The validated URL, wrapped as a SafeUrl.
     */
    function sanitizeAssertUnchanged(url: any): SafeUrl;
    /**
     * Type marker for the SafeUrl type, used to implement additional run-time
     * type checking.
     * @const {!Object}
     * @private
     */
    var TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
    /**
     * Package-internal utility method to create SafeUrl instances.
     *
     * @param {string} url The string to initialize the SafeUrl object with.
     * @return {!goog.html.SafeUrl} The initialized SafeUrl object.
     * @package
     */
    function createSafeUrlSecurityPrivateDoNotAccessOrElse(url: any): SafeUrl;
    /**
     * A SafeUrl corresponding to the special about:blank url.
     * @const {!goog.html.SafeUrl}
     */
    var ABOUT_BLANK: SafeUrl;
}
declare namespace goog.html {
    /**
     * A pattern that matches Blob or data types that can have SafeUrls created
     * from URL.createObjectURL(blob) or via a data: URI.
     * @const
     * @private
     */
    var SAFE_MIME_TYPE_PATTERN_: RegExp;
    /**
     * Matches a base-64 data URL, with the first match group being the MIME type.
     * @const
     * @private
     */
    var DATA_URL_PATTERN_: RegExp;
    /**
     * A pattern that recognizes a commonly useful subset of URLs that satisfy
     * the SafeUrl contract.
     *
     * This regular expression matches a subset of URLs that will not cause script
     * execution if used in URL context within a HTML document. Specifically, this
     * regular expression matches if (comment from here on and regex copied from
     * Soy's EscapingConventions):
     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
     * (2) or no protocol.  A protocol must be followed by a colon. The below
     *     allows that by allowing colons only after one of the characters [/?#].
     *     A colon after a hash (#) must be in the fragment.
     *     Otherwise, a colon after a (?) must be in a query.
     *     Otherwise, a colon after a single solidus (/) must be in a path.
     *     Otherwise, a colon after a double solidus (//) must be in the authority
     *     (before port).
     *
     * @private
     * @const {!RegExp}
     */
    var SAFE_URL_PATTERN_: RegExp;
}
declare namespace goog.html {
    /**
     * A string that is safe to use in HTML context in DOM APIs and HTML documents.
     *
     * A SafeHtml is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution when
     * evaluated as HTML in a browser.
     *
     * Values of this type are guaranteed to be safe to use in HTML contexts,
     * such as, assignment to the innerHTML DOM property, or interpolation into
     * a HTML template in HTML PC_DATA context, in the sense that the use will not
     * result in a Cross-Site-Scripting vulnerability.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeHtml.create}, {@code goog.html.SafeHtml.htmlEscape}),
     * etc and not by invoking its constructor.  The constructor intentionally
     * takes no parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeHtml#create
     * @see goog.html.SafeHtml#htmlEscape
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class SafeHtml implements goog.i18n.bidi.DirectionalString, goog.string.TypedString {
        privateDoNotAccessOrElseSafeHtmlWrappedValue_: string;
        SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: Object;
        dir_: goog.i18n.bidi.Dir;
        constructor();
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        /** @override */
        getDirection(): i18n.bidi.Dir;
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: boolean;
        /**
         * Returns this SafeHtml's value as string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeHtml}, use {@code goog.html.SafeHtml.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * that the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml
         * // instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeHtml#unwrap
         * @override
         */
        getTypedStringValue(): string;
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeHtml, use
         * {@code goog.html.SafeHtml.unwrap}.
         *
         * @see goog.html.SafeHtml#unwrap
         * @override
         */
        toString(): string;
        /**
         * Performs a runtime check that the provided object is indeed a SafeHtml
         * object, and returns its value.
         * @param {!goog.html.SafeHtml} safeHtml The object to extract from.
         * @return {string} The SafeHtml object's contained string, unless the run-time
         *     type check fails. In that case, {@code unwrap} returns an innocuous
         *     string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeHtml: any): string;
        /**
         * Shorthand for union of types that can sensibly be converted to strings
         * or might already be SafeHtml (as SafeHtml is a goog.string.TypedString).
         * @private
         * @typedef {string|number|boolean|!goog.string.TypedString|
         *           !goog.i18n.bidi.DirectionalString}
         */
        static TextOrHtml_: any;
        /**
         * Returns HTML-escaped text as a SafeHtml object.
         *
         * If text is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, the directionality of the new
         * {@code SafeHtml} object is set to {@code text}'s directionality, if known.
         * Otherwise, the directionality of the resulting SafeHtml is unknown (i.e.,
         * {@code null}).
         *
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscape(textOrHtml: any): SafeHtml;
        /**
         * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
         * &lt;br&gt;.
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscapePreservingNewlines(textOrHtml: any): SafeHtml;
        /**
         * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
         * &lt;br&gt; and escaping whitespace to preserve spatial formatting. Character
         * entity #160 is used to make it safer for XML.
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscapePreservingNewlinesAndSpaces(textOrHtml: any): SafeHtml;
        /**
         * Coerces an arbitrary object into a SafeHtml object.
         *
         * If {@code textOrHtml} is already of type {@code goog.html.SafeHtml}, the same
         * object is returned. Otherwise, {@code textOrHtml} is coerced to string, and
         * HTML-escaped. If {@code textOrHtml} is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, its directionality, if known, is
         * preserved.
         *
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text or SafeHtml to
         *     coerce.
         * @return {!goog.html.SafeHtml} The resulting SafeHtml object.
         * @deprecated Use goog.html.SafeHtml.htmlEscape.
         */
        static from: typeof SafeHtml.htmlEscape;
        /**
         * @const
         * @private
         */
        static VALID_NAMES_IN_TAG_: RegExp;
        /**
         * Set of attributes containing URL as defined at
         * http://www.w3.org/TR/html5/index.html#attributes-1.
         * @private @const {!Object<string,boolean>}
         */
        static URL_ATTRIBUTES_: any;
        /**
         * Tags which are unsupported via create(). They might be supported via a
         * tag-specific create method. These are tags which might require a
         * TrustedResourceUrl in one of their attributes or a restricted type for
         * their content.
         * @private @const {!Object<string,boolean>}
         */
        static NOT_ALLOWED_TAG_NAMES_: any;
        /**
         * @typedef {string|number|goog.string.TypedString|
         *     goog.html.SafeStyle.PropertyMap|undefined}
         */
        static AttributeValue: any;
        /**
         * Creates a SafeHtml content consisting of a tag with optional attributes and
         * optional content.
         *
         * For convenience tag names and attribute names are accepted as regular
         * strings, instead of goog.string.Const. Nevertheless, you should not pass
         * user-controlled values to these parameters. Note that these parameters are
         * syntactically validated at runtime, and invalid values will result in
         * an exception.
         *
         * Example usage:
         *
         * goog.html.SafeHtml.create('br');
         * goog.html.SafeHtml.create('div', {'class': 'a'});
         * goog.html.SafeHtml.create('p', {}, 'a');
         * goog.html.SafeHtml.create('p', {}, goog.html.SafeHtml.create('br'));
         *
         * goog.html.SafeHtml.create('span', {
         *   'style': {'margin': '0'}
         * });
         *
         * To guarantee SafeHtml's type contract is upheld there are restrictions on
         * attribute values and tag names.
         *
         * - For attributes which contain script code (on*), a goog.string.Const is
         *   required.
         * - For attributes which contain style (style), a goog.html.SafeStyle or a
         *   goog.html.SafeStyle.PropertyMap is required.
         * - For attributes which are interpreted as URLs (e.g. src, href) a
         *   goog.html.SafeUrl, goog.string.Const or string is required. If a string
         *   is passed, it will be sanitized with SafeUrl.sanitize().
         * - For tags which can load code or set security relevant page metadata,
         *   more specific goog.html.SafeHtml.create*() functions must be used. Tags
         *   which are not supported by this function are applet, base, embed, iframe,
         *   link, math, object, script, style, svg, and template.
         *
         * @param {!goog.dom.TagName|string} tagName The name of the tag. Only tag names
         *     consisting of [a-zA-Z0-9-] are allowed. Tag names documented above are
         *     disallowed.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined causes
         *     the attribute to be omitted.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to
         *     HTML-escape and put inside the tag. This must be empty for void tags
         *     like <br>. Array elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided.
         * @throws {goog.asserts.AssertionError} If content for void tag is provided.
         */
        static create(tagName: any, opt_attributes?: any, opt_content?: any): SafeHtml;
        /**
         * Verifies if the tag name is valid and if it doesn't change the context.
         * E.g. STRONG is fine but SCRIPT throws because it changes context. See
         * goog.html.SafeHtml.create for an explanation of allowed tags.
         * @param {string} tagName
         * @throws {Error} If invalid tag name is provided.
         * @package
         */
        static verifyTagName(tagName: any): void;
        /**
         * Creates a SafeHtml representing an iframe tag.
         *
         * This by default restricts the iframe as much as possible by setting the
         * sandbox attribute to the empty string. If the iframe requires less
         * restrictions, set the sandbox attribute as tight as possible, but do not rely
         * on the sandbox as a security feature because it is not supported by older
         * browsers. If a sandbox is essential to security (e.g. for third-party
         * frames), use createSandboxIframe which checks for browser support.
         *
         * @see https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe#attr-sandbox
         *
         * @param {?goog.html.TrustedResourceUrl=} opt_src The value of the src
         *     attribute. If null or undefined src will not be set.
         * @param {?goog.html.SafeHtml=} opt_srcdoc The value of the srcdoc attribute.
         *     If null or undefined srcdoc will not be set.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined causes
         *     the attribute to be omitted.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to
         *     HTML-escape and put inside the tag. Array elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided. If opt_attributes contains the src or srcdoc attributes.
         */
        static createIframe(opt_src?: any, opt_srcdoc?: any, opt_attributes?: any, opt_content?: any): SafeHtml;
        /**
         * Creates a SafeHtml representing a sandboxed iframe tag.
         *
         * The sandbox attribute is enforced in its most restrictive mode, an empty
         * string. Consequently, the security requirements for the src and srcdoc
         * attributes are relaxed compared to SafeHtml.createIframe. This function
         * will throw on browsers that do not support the sandbox attribute, as
         * determined by SafeHtml.canUseSandboxIframe.
         *
         * The SafeHtml returned by this function can trigger downloads with no
         * user interaction on Chrome (though only a few, further attempts are blocked).
         * Firefox and IE will block all downloads from the sandbox.
         *
         * @see https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe#attr-sandbox
         * @see https://lists.w3.org/Archives/Public/public-whatwg-archive/2013Feb/0112.html
         *
         * @param {string|!goog.html.SafeUrl=} opt_src The value of the src
         *     attribute. If null or undefined src will not be set.
         * @param {string=} opt_srcdoc The value of the srcdoc attribute.
         *     If null or undefined srcdoc will not be set. Will not be sanitized.
         * @param {!Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined causes
         *     the attribute to be omitted.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to
         *     HTML-escape and put inside the tag. Array elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided. If opt_attributes contains the src, srcdoc or sandbox
         *     attributes. If browser does not support the sandbox attribute on iframe.
         */
        static createSandboxIframe(opt_src?: any, opt_srcdoc?: any, opt_attributes?: any, opt_content?: any): SafeHtml;
        /**
         * Checks if the user agent supports sandboxed iframes.
         * @return {boolean}
         */
        static canUseSandboxIframe(): boolean;
        /**
         * Creates a SafeHtml representing a script tag with the src attribute.
         * @param {!goog.html.TrustedResourceUrl} src The value of the src
         * attribute.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=}
         * opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined
         *     causes the attribute to be omitted.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid attribute name or value is provided. If
         *     opt_attributes contains the src attribute.
         */
        static createScriptSrc(src: any, opt_attributes?: any): SafeHtml;
        /**
         * Creates a SafeHtml representing a script tag. Does not allow the language,
         * src, text or type attributes to be set.
         * @param {!goog.html.SafeScript|!Array<!goog.html.SafeScript>}
         *     script Content to put inside the tag. Array elements are
         *     concatenated.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined causes
         *     the attribute to be omitted.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid attribute name or attribute value is provided. If
         *     opt_attributes contains the language, src, text or type attribute.
         */
        static createScript(script: any, opt_attributes?: any): SafeHtml;
        /**
         * Creates a SafeHtml representing a style tag. The type attribute is set
         * to "text/css".
         * @param {!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>}
         *     styleSheet Content to put inside the tag. Array elements are
         *     concatenated.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Mapping from attribute names to their values. Only attribute names
         *     consisting of [a-zA-Z0-9-] are allowed. Value of null or undefined causes
         *     the attribute to be omitted.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid attribute name or attribute value is provided. If
         *     opt_attributes contains the type attribute.
         */
        static createStyle(styleSheet: any, opt_attributes?: any): SafeHtml;
        /**
         * Creates a SafeHtml representing a meta refresh tag.
         * @param {!goog.html.SafeUrl|string} url Where to redirect. If a string is
         *     passed, it will be sanitized with SafeUrl.sanitize().
         * @param {number=} opt_secs Number of seconds until the page should be
         *     reloaded. Will be set to 0 if unspecified.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         */
        static createMetaRefresh(url: any, opt_secs?: any): SafeHtml;
        /**
         * @param {string} tagName The tag name.
         * @param {string} name The attribute name.
         * @param {!goog.html.SafeHtml.AttributeValue} value The attribute value.
         * @return {string} A "name=value" string.
         * @throws {Error} If attribute value is unsafe for the given tag and attribute.
         * @private
         */
        static getAttrNameAndValue_(tagName: any, name: any, value: any): string;
        /**
         * Gets value allowed in "style" attribute.
         * @param {!goog.html.SafeHtml.AttributeValue} value It could be SafeStyle or a
         *     map which will be passed to goog.html.SafeStyle.create.
         * @return {string} Unwrapped value.
         * @throws {Error} If string value is given.
         * @private
         */
        static getStyleValue_(value: any): string;
        /**
         * Creates a SafeHtml content with known directionality consisting of a tag with
         * optional attributes and optional content.
         * @param {!goog.i18n.bidi.Dir} dir Directionality.
         * @param {string} tagName
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         */
        static createWithDir(dir: any, tagName: any, opt_attributes?: any, opt_content?: any): SafeHtml;
        /**
         * Creates a new SafeHtml object by concatenating values.
         * @param {...(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)} var_args Values to concatenate.
         * @return {!goog.html.SafeHtml}
         */
        static concat(...var_args: any[]): SafeHtml;
        /**
         * Creates a new SafeHtml object with known directionality by concatenating the
         * values.
         * @param {!goog.i18n.bidi.Dir} dir Directionality.
         * @param {...(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)} var_args Elements of array
         *     arguments would be processed recursively.
         * @return {!goog.html.SafeHtml}
         */
        static concatWithDir(dir: any, var_args: any): SafeHtml;
        /**
         * Type marker for the SafeHtml type, used to implement additional run-time
         * type checking.
         * @const {!Object}
         * @private
         */
        static TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_: {};
        /**
         * Package-internal utility method to create SafeHtml instances.
         *
         * @param {string} html The string to initialize the SafeHtml object with.
         * @param {?goog.i18n.bidi.Dir} dir The directionality of the SafeHtml to be
         *     constructed, or null if unknown.
         * @return {!goog.html.SafeHtml} The initialized SafeHtml object.
         * @package
         */
        static createSafeHtmlSecurityPrivateDoNotAccessOrElse(html: any, dir: any): SafeHtml;
        /**
         * Called from createSafeHtmlSecurityPrivateDoNotAccessOrElse(). This
         * method exists only so that the compiler can dead code eliminate static
         * fields (like EMPTY) when they're not accessed.
         * @param {string} html
         * @param {?goog.i18n.bidi.Dir} dir
         * @return {!goog.html.SafeHtml}
         * @private
         */
        initSecurityPrivateDoNotAccessOrElse_(html: any, dir: any): this;
        /**
         * Like create() but does not restrict which tags can be constructed.
         *
         * @param {string} tagName Tag name. Set or validated by caller.
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         * @param {(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)=} opt_content
         * @return {!goog.html.SafeHtml}
         * @throws {Error} If invalid or unsafe attribute name or value is provided.
         * @throws {goog.asserts.AssertionError} If content for void tag is provided.
         * @package
         */
        static createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(tagName: any, opt_attributes?: any, opt_content?: any): SafeHtml;
        /**
         * Creates a string with attributes to insert after tagName.
         * @param {string} tagName
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         * @return {string} Returns an empty string if there are no attributes, returns
         *     a string starting with a space otherwise.
         * @throws {Error} If attribute value is unsafe for the given tag and attribute.
         * @package
         */
        static stringifyAttributes(tagName: any, opt_attributes?: any): string;
        /**
         * @param {!Object<string, ?goog.html.SafeHtml.AttributeValue>} fixedAttributes
         * @param {!Object<string, string>} defaultAttributes
         * @param {?Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
         *     Optional attributes passed to create*().
         * @return {!Object<string, ?goog.html.SafeHtml.AttributeValue>}
         * @throws {Error} If opt_attributes contains an attribute with the same name
         *     as an attribute in fixedAttributes.
         * @package
         */
        static combineAttributes(fixedAttributes: any, defaultAttributes: any, opt_attributes?: any): {};
        /**
         * A SafeHtml instance corresponding to the HTML doctype: "<!DOCTYPE html>".
         * @const {!goog.html.SafeHtml}
         */
        static DOCTYPE_HTML: SafeHtml;
        /**
         * A SafeHtml instance corresponding to the empty string.
         * @const {!goog.html.SafeHtml}
         */
        static EMPTY: SafeHtml;
        /**
         * A SafeHtml instance corresponding to the <br> tag.
         * @const {!goog.html.SafeHtml}
         */
        static BR: SafeHtml;
    }
}
declare namespace goog.html.uncheckedconversions {
    /**
     * Performs an "unchecked conversion" to SafeHtml from a plain string that is
     * known to satisfy the SafeHtml type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code html} satisfies the SafeHtml type contract
     * in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} html A string that is claimed to adhere to the SafeHtml
     *     contract.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    function safeHtmlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, html: string, opt_dir?: (goog.i18n.bidi.Dir | undefined) | null): goog.html.SafeHtml;
    /**
     * Performs an "unchecked conversion" to SafeScript from a plain string that
     * is known to satisfy the SafeScript type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code script} satisfies the SafeScript type
     * contract in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} script The string to wrap as a SafeScript.
     * @return {!goog.html.SafeScript} The value of {@code script}, wrapped in a
     *     SafeScript object.
     */
    function safeScriptFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, script: string): goog.html.SafeScript;
    /**
     * Performs an "unchecked conversion" to SafeStyle from a plain string that is
     * known to satisfy the SafeStyle type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code style} satisfies the SafeStyle type
     * contract in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} style The string to wrap as a SafeStyle.
     * @return {!goog.html.SafeStyle} The value of {@code style}, wrapped in a
     *     SafeStyle object.
     */
    function safeStyleFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, style: string): goog.html.SafeStyle;
    /**
     * Performs an "unchecked conversion" to SafeStyleSheet from a plain string
     * that is known to satisfy the SafeStyleSheet type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code styleSheet} satisfies the SafeStyleSheet
     * type contract in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} styleSheet The string to wrap as a SafeStyleSheet.
     * @return {!goog.html.SafeStyleSheet} The value of {@code styleSheet}, wrapped
     *     in a SafeStyleSheet object.
     */
    function safeStyleSheetFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, styleSheet: string): goog.html.SafeStyleSheet;
    /**
     * Performs an "unchecked conversion" to SafeUrl from a plain string that is
     * known to satisfy the SafeUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code url} satisfies the SafeUrl type contract in
     * all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a SafeUrl.
     * @return {!goog.html.SafeUrl} The value of {@code url}, wrapped in a SafeUrl
     *     object.
     */
    function safeUrlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, url: string): goog.html.SafeUrl;
    /**
     * Performs an "unchecked conversion" to TrustedResourceUrl from a plain
     * string that is known to satisfy the TrustedResourceUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to
     * ensure that the value of {@code url} satisfies the TrustedResourceUrl type
     * contract in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of {@code url}, wrapped in
     *     a TrustedResourceUrl object.
     */
    function trustedResourceUrlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, url: string): goog.html.TrustedResourceUrl;
}
declare namespace goog.dom.asserts {
    /**
     * @fileoverview Custom assertions to ensure that an element has the appropriate
     * type.
     *
     * Using a goog.dom.safe wrapper on an object on the incorrect type (via an
     * incorrect static type cast) can result in security bugs: For instance,
     * g.d.s.setAnchorHref ensures that the URL assigned to the .href attribute
     * satisfies the SafeUrl contract, i.e., is safe to dereference as a hyperlink.
     * However, the value assigned to a HTMLLinkElement's .href property requires
     * the stronger TrustedResourceUrl contract, since it can refer to a stylesheet.
     * Thus, using g.d.s.setAnchorHref on an (incorrectly statically typed) object
     * of type HTMLLinkElement can result in a security vulnerability.
     * Assertions of the correct run-time type help prevent such incorrect use.
     *
     * In some cases, code using the DOM API is tested using mock objects (e.g., a
     * plain object such as {'href': url} instead of an actual Location object).
     * To allow such mocking, the assertions permit objects of types that are not
     * relevant DOM API objects at all (for instance, not Element or Location).
     *
     * Note that instanceof checks don't work straightforwardly in older versions of
     * IE, or across frames (see,
     * http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object,
     * http://stackoverflow.com/questions/26248599/instanceof-htmlelement-in-iframe-is-not-element-or-object).
     *
     * Hence, these assertions may pass vacuously in such scenarios. The resulting
     * risk of security bugs is limited by the following factors:
     *  - A bug can only arise in scenarios involving incorrect static typing (the
     *    wrapper methods are statically typed to demand objects of the appropriate,
     *    precise type).
     *  - Typically, code is tested and exercised in multiple browsers.
     */
    /**
     * Asserts that a given object is a Location.
     *
     * To permit this assertion to pass in the context of tests where DOM APIs might
     * be mocked, also accepts any other type except for subtypes of {!Element}.
     * This is to ensure that, for instance, HTMLLinkElement is not being used in
     * place of a Location, since this could result in security bugs due to stronger
     * contracts required for assignments to the href property of the latter.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!Location}
     */
    function assertIsLocation(o: object | null): Location;
    /**
     * Asserts that a given object is either the given subtype of Element
     * or a non-Element, non-Location Mock.
     *
     * To permit this assertion to pass in the context of tests where DOM
     * APIs might be mocked, also accepts any other type except for
     * subtypes of {!Element}.  This is to ensure that, for instance,
     * HTMLScriptElement is not being used in place of a HTMLImageElement,
     * since this could result in security bugs due to stronger contracts
     * required for assignments to the src property of the latter.
     *
     * The DOM type is looked up in the window the object belongs to.  In
     * some contexts, this might not be possible (e.g. when running tests
     * outside a browser, cross-domain lookup). In this case, the
     * assertions are skipped.
     *
     * @param {?Object} o The object whose type to assert.
     * @param {string} typename The name of the DOM type.
     * @return {!Element} The object.
     * @private
     */
    function assertIsElementType_(o: object | null, typename: string): Element;
    /**
     * Asserts that a given object is a HTMLAnchorElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not of type Location nor a subtype
     * of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLAnchorElement}
     */
    function assertIsHTMLAnchorElement(o: object | null): HTMLAnchorElement;
    /**
     * Asserts that a given object is a HTMLButtonElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLButtonElement}
     */
    function assertIsHTMLButtonElement(o: object | null): HTMLButtonElement;
    /**
     * Asserts that a given object is a HTMLLinkElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLLinkElement}
     */
    function assertIsHTMLLinkElement(o: object | null): HTMLLinkElement;
    /**
     * Asserts that a given object is a HTMLImageElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLImageElement}
     */
    function assertIsHTMLImageElement(o: object | null): HTMLImageElement;
    /**
     * Asserts that a given object is a HTMLVideoElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLVideoElement}
     */
    function assertIsHTMLVideoElement(o: object | null): HTMLVideoElement;
    /**
     * Asserts that a given object is a HTMLInputElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLInputElement}
     */
    function assertIsHTMLInputElement(o: object | null): HTMLInputElement;
    /**
     * Asserts that a given object is a HTMLEmbedElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLEmbedElement}
     */
    function assertIsHTMLEmbedElement(o: object | null): HTMLEmbedElement;
    /**
     * Asserts that a given object is a HTMLFormElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLFormElement}
     */
    function assertIsHTMLFormElement(o: object | null): HTMLFormElement;
    /**
     * Asserts that a given object is a HTMLFrameElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLFrameElement}
     */
    function assertIsHTMLFrameElement(o: object | null): HTMLFrameElement;
    /**
     * Asserts that a given object is a HTMLIFrameElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLIFrameElement}
     */
    function assertIsHTMLIFrameElement(o: object | null): HTMLIFrameElement;
    /**
     * Asserts that a given object is a HTMLObjectElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLObjectElement}
     */
    function assertIsHTMLObjectElement(o: object | null): HTMLObjectElement;
    /**
     * Asserts that a given object is a HTMLScriptElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLScriptElement}
     */
    function assertIsHTMLScriptElement(o: object | null): HTMLScriptElement;
    /**
     * Returns a string representation of a value's type.
     *
     * @param {*} value An object, or primitive.
     * @return {string} The best display name for the value.
     * @private
     */
    function debugStringForType_(value: any): string;
    /**
     * Gets window of element.
     * @param {?Object} o
     * @return {!Window}
     * @private
     */
    function getWindow_(o: any): any;
}
declare namespace goog.dom.safe {
    /** @enum {string} */
    enum InsertAdjacentHtmlPosition {
        AFTERBEGIN = "afterbegin",
        AFTEREND = "afterend",
        BEFOREBEGIN = "beforebegin",
        BEFOREEND = "beforeend",
    }
    /**
     * Inserts known-safe HTML into a Node, at the specified position.
     * @param {!Node} node The node on which to call insertAdjacentHTML.
     * @param {!goog.dom.safe.InsertAdjacentHtmlPosition} position Position where
     *     to insert the HTML.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to insert.
     */
    function insertAdjacentHtml(node: any, position: any, html: any): void;
    /**
     * Tags not allowed in goog.dom.safe.setInnerHtml.
     * @private @const {!Object<string, boolean>}
     */
    var SET_INNER_HTML_DISALLOWED_TAGS_: {
        'MATH': boolean;
        'SCRIPT': boolean;
        'STYLE': boolean;
        'SVG': boolean;
        'TEMPLATE': boolean;
    };
    /**
     * Assigns known-safe HTML to an element's innerHTML property.
     * @param {!Element} elem The element whose innerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     * @throws {Error} If called with one of these tags: math, script, style, svg,
     *     template.
     */
    function setInnerHtml(elem: any, html: any): void;
    /**
     * Assigns known-safe HTML to an element's outerHTML property.
     * @param {!Element} elem The element whose outerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function setOuterHtml(elem: any, html: any): void;
    /**
     * Safely assigns a URL a form element's action property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setFormElementAction(formEl, url);
     * which is a safe alternative to
     *   formEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} form The form element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setFormElementAction(form: any, url: any): void;
    /**
     * Safely assigns a URL to a button element's formaction property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setButtonFormAction(buttonEl, url);
     * which is a safe alternative to
     *   buttonEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} button The button element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setButtonFormAction(button: any, url: any): void;
    /**
     * Safely assigns a URL to an input element's formaction property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setInputFormAction(inputEl, url);
     * which is a safe alternative to
     *   inputEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} input The input element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setInputFormAction(input: any, url: any): void;
    /**
     * Sets the given element's style property to the contents of the provided
     * SafeStyle object.
     * @param {!Element} elem
     * @param {!goog.html.SafeStyle} style
     */
    function setStyle(elem: any, style: any): void;
    /**
     * Writes known-safe HTML to a document.
     * @param {!Document} doc The document to be written to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function documentWrite(doc: any, html: any): void;
    /**
     * Safely assigns a URL to an anchor element's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setAnchorHref(anchorEl, url);
     * which is a safe alternative to
     *   anchorEl.href = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!HTMLAnchorElement} anchor The anchor element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setAnchorHref(anchor: any, url: any): void;
    /**
     * Safely assigns a URL to an image element's src property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * image's src property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * @param {!HTMLImageElement} imageElement The image element whose src property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setImageSrc(imageElement: any, url: any): void;
    /**
     * Safely assigns a URL to a video element's src property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * video's src property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * @param {!HTMLVideoElement} videoElement The video element whose src property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setVideoSrc(videoElement: any, url: any): void;
    /**
     * Safely assigns a URL to an embed element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setEmbedSrc(embedEl, url);
     * which is a safe alternative to
     *   embedEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLEmbedElement} embed The embed element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setEmbedSrc(embed: any, url: any): void;
    /**
     * Safely assigns a URL to a frame element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setFrameSrc(frameEl, url);
     * which is a safe alternative to
     *   frameEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLFrameElement} frame The frame element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setFrameSrc(frame: any, url: any): void;
    /**
     * Safely assigns a URL to an iframe element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setIframeSrc(iframeEl, url);
     * which is a safe alternative to
     *   iframeEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLIFrameElement} iframe The iframe element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setIframeSrc(iframe: any, url: any): void;
    /**
     * Safely assigns HTML to an iframe element's srcdoc property.
     *
     * Example usage:
     *   goog.dom.safe.setIframeSrcdoc(iframeEl, safeHtml);
     * which is a safe alternative to
     *   iframeEl.srcdoc = html;
     * The latter can result in loading untrusted code.
     *
     * @param {!HTMLIFrameElement} iframe The iframe element whose srcdoc property
     *     is to be assigned to.
     * @param {!goog.html.SafeHtml} html The HTML to assign.
     */
    function setIframeSrcdoc(iframe: any, html: any): void;
    /**
     * Safely sets a link element's href and rel properties. Whether or not
     * the URL assigned to href has to be a goog.html.TrustedResourceUrl
     * depends on the value of the rel property. If rel contains "stylesheet"
     * then a TrustedResourceUrl is required.
     *
     * Example usage:
     *   goog.dom.safe.setLinkHrefAndRel(linkEl, url, 'stylesheet');
     * which is a safe alternative to
     *   linkEl.rel = 'stylesheet';
     *   linkEl.href = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLLinkElement} link The link element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl|!goog.html.TrustedResourceUrl} url The URL
     *     to assign to the href property. Must be a TrustedResourceUrl if the
     *     value assigned to rel contains "stylesheet". A string value is
     *     sanitized with goog.html.SafeUrl.sanitize.
     * @param {string} rel The value to assign to the rel property.
     * @throws {Error} if rel contains "stylesheet" and url is not a
     *     TrustedResourceUrl
     * @see goog.html.SafeUrl#sanitize
     */
    function setLinkHrefAndRel(link: any, url: any, rel: any): void;
    /**
     * Safely assigns a URL to an object element's data property.
     *
     * Example usage:
     *   goog.dom.safe.setObjectData(objectEl, url);
     * which is a safe alternative to
     *   objectEl.data = url;
     * The latter can result in loading untrusted code unless setit is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLObjectElement} object The object element whose data property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setObjectData(object: any, url: any): void;
    /**
     * Safely assigns a URL to a script element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setScriptSrc(scriptEl, url);
     * which is a safe alternative to
     *   scriptEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLScriptElement} script The script element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setScriptSrc(script: any, url: any): void;
    /**
     * Safely assigns a value to a script element's content.
     *
     * Example usage:
     *   goog.dom.safe.setScriptContent(scriptEl, content);
     * which is a safe alternative to
     *   scriptEl.text = content;
     * The latter can result in executing untrusted code unless it is ensured that
     * the code is loaded from a trustworthy resource.
     *
     * @param {!HTMLScriptElement} script The script element whose content is being
     *     set.
     * @param {!goog.html.SafeScript} content The content to assign.
     */
    function setScriptContent(script: any, content: any): void;
    /**
     * Safely assigns a URL to a Location object's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * loc's href property.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setLocationHref(document.location, redirectUrl);
     * which is a safe alternative to
     *   document.location.href = redirectUrl;
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object whose href property is to be
     *     assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setLocationHref(loc: any, url: any): void;
    /**
     * Safely replaces the URL of a Location object.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and
     * passed to Location#replace. If url is of type string however, it is
     * first sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.replaceHref(document.location, newUrl);
     * which is a safe alternative to
     *   document.location.replace(newUrl);
     * The latter can result in XSS vulnerabilities if newUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object which is to be replaced.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function replaceLocation(loc: any, url: any): void;
    /**
     * Safely opens a URL in a new window (via window.open).
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and passed in to
     * window.open.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Note that this function does not prevent leakages via the referer that is
     * sent by window.open. It is advised to only use this to open 1st party URLs.
     *
     * Example usage:
     *   goog.dom.safe.openInWindow(url);
     * which is a safe alternative to
     *   window.open(url);
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {string|!goog.html.SafeUrl} url The URL to open.
     * @param {Window=} opt_openerWin Window of which to call the .open() method.
     *     Defaults to the global window.
     * @param {!goog.string.Const=} opt_name Name of the window to open in. Can be
     *     _top, etc as allowed by window.open().
     * @param {string=} opt_specs Comma-separated list of specifications, same as
     *     in window.open().
     * @param {boolean=} opt_replace Whether to replace the current entry in browser
     *     history, same as in window.open().
     * @return {Window} Window the url was opened in.
     */
    function openInWindow(url: any, opt_openerWin: any, opt_name: any, opt_specs: any, opt_replace: any): any;
}
declare namespace goog.dom {
    var COMPAT_MODE_KNOWN_: any;
    var ASSUME_QUIRKS_MODE: any;
    var ASSUME_STANDARDS_MODE: any;
    /**
     * Cached default DOM helper.
     * @type {!goog.dom.DomHelper|undefined}
     * @private
     */
    var defaultDomHelper_: any;
    /**
     * Gets the DomHelper object for the document where the element resides.
     * @param {(Node|Window)=} opt_element If present, gets the DomHelper for this
     *     element.
     * @return {!goog.dom.DomHelper} The DomHelper.
     */
    function getDomHelper(opt_element?: Node | Window): any;
    /**
     * Gets the document object being used by the dom library.
     * @return {!Document} Document object.
     */
    function getDocument(): Document;
    /**
     * Gets an element from the current document by element id.
     *
     * If an Element is passed in, it is returned.
     *
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     */
    function getElement(element: string | Element): Element;
    /**
     * Gets an element by id from the given document (if present).
     * If an element is given, it is returned.
     * @param {!Document} doc
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The resulting element.
     * @private
     */
    function getElementHelper_(doc: Document, element: string | Element): Element;
    /**
     * Gets an element by id, asserting that the element is found.
     *
     * This is used when an element is expected to exist, and should fail with
     * an assertion error if it does not (if assertions are enabled).
     *
     * @param {string} id Element ID.
     * @return {!Element} The element with the given ID, if it exists.
     */
    function getRequiredElement(id: string): Element;
    /**
     * Helper function for getRequiredElementHelper functions, both static and
     * on DomHelper.  Asserts the element with the given id exists.
     * @param {!Document} doc
     * @param {string} id
     * @return {!Element} The element with the given ID, if it exists.
     * @private
     */
    function getRequiredElementHelper_(doc: Document, id: string): Element;
    /**
     * Alias for getElement.
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     * @deprecated Use {@link goog.dom.getElement} instead.
     */
    function $(element: string | Element): Element;
    /**
     * Gets elements by tag name.
     * @param {!goog.dom.TagName<T>} tagName
     * @param {(!Document|!Element)=} opt_parent Parent element or document where to
     *     look for elements. Defaults to document.
     * @return {!NodeList<R>} List of elements. The members of the list are
     *     {!Element} if tagName is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function getElementsByTagName<T, R>(tagName: goog.dom.TagName<T>, opt_parent?: (Document | Element) | undefined): NodeList;
    /**
     * Looks up elements by both tag and class name, using browser native functions
     * ({@code querySelectorAll}, {@code getElementsByTagName} or
     * {@code getElementsByClassName}) where possible. This function
     * is a useful, if limited, way of collecting a list of DOM elements
     * with certain characteristics.  {@code goog.dom.query} offers a
     * more powerful and general solution which allows matching on CSS3
     * selector expressions, but at increased cost in code size. If all you
     * need is particular tags belonging to a single class, this function
     * is fast and sleek.
     *
     * Note that tag names are case sensitive in the SVG namespace, and this
     * function converts opt_tag to uppercase for comparisons. For queries in the
     * SVG namespace you should use querySelector or querySelectorAll instead.
     * https://bugzilla.mozilla.org/show_bug.cgi?id=963870
     * https://bugs.webkit.org/show_bug.cgi?id=83438
     *
     * @see {goog.dom.query}
     *
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function getElementsByTagNameAndClass<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R>;
    /**
     * Gets the first element matching the tag and the class.
     *
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {?R} Reference to a DOM node. The return type is {?Element} if
     *     tagName is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function getElementByTagNameAndClass<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): R | null;
    /**
     * Returns a static, array-like list of the elements with the provided
     * className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<!Element>} The items found with the class name provided.
     */
    function getElementsByClass(className: string, opt_el: (Document | Element) | undefined): IArrayLike<Element>;
    /**
     * Returns the first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {Element|Document=} opt_el Optional element to look in.
     * @return {Element} The first item with the class name provided.
     */
    function getElementByClass(className: string, opt_el: Element | (Document | undefined)): Element;
    /**
     * Ensures an element with the given className exists, and then returns the
     * first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {!Element|!Document=} opt_root Optional element or document to look
     *     in.
     * @return {!Element} The first item with the class name provided.
     * @throws {goog.asserts.AssertionError} Thrown if no element is found.
     */
    function getRequiredElementByClass(className: string, opt_root: Element | (Document | undefined)): Element;
    /**
     * Prefer the standardized (http://www.w3.org/TR/selectors-api/), native and
     * fast W3C Selectors API.
     * @param {!(Element|Document)} parent The parent document object.
     * @return {boolean} whether or not we can use parent.querySelector* APIs.
     * @private
     */
    function canUseQuerySelector_(parent: (Element | Document)): boolean;
    /**
     * Helper for {@code getElementsByTagNameAndClass}.
     * @param {!Document} doc The document to get the elements in.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    function getElementsByTagNameAndClass_<T, R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R>;
    /**
     * Helper for goog.dom.getElementByTagNameAndClass.
     *
     * @param {!Document} doc The document to get the elements in.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {?R} Reference to a DOM node. The return type is {?Element} if
     *     tagName is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    function getElementByTagNameAndClass_<T, R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): any | null;
    /**
     * Alias for {@code getElementsByTagNameAndClass}.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {Element=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @deprecated Use {@link goog.dom.getElementsByTagNameAndClass} instead.
     */
    function $$<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: Element | undefined): IArrayLike<R>;
    /**
     * Sets multiple properties, and sometimes attributes, on an element. Note that
     * properties are simply object properties on the element instance, while
     * attributes are visible in the DOM. Many properties map to attributes with the
     * same names, some with different names, and there are also unmappable cases.
     *
     * This method sets properties by default (which means that custom attributes
     * are not supported). These are the exeptions (some of which is legacy):
     * - "style": Even though this is an attribute name, it is translated to a
     *   property, "style.cssText". Note that this property sanitizes and formats
     *   its value, unlike the attribute.
     * - "class": This is an attribute name, it is translated to the "className"
     *   property.
     * - "for": This is an attribute name, it is translated to the "htmlFor"
     *   property.
     * - Entries in {@see goog.dom.DIRECT_ATTRIBUTE_MAP_} are set as attributes,
     *   this is probably due to browser quirks.
     * - "aria-*", "data-*": Always set as attributes, they have no property
     *   counterparts.
     *
     * @param {Element} element DOM node to set properties on.
     * @param {Object} properties Hash of property:value pairs.
     *     Property values can be strings or goog.string.TypedString values (such as
     *     goog.html.SafeUrl).
     */
    function setProperties(element: Element, properties: object): void;
    /**
     * Map of attributes that should be set using
     * element.setAttribute(key, val) instead of element[key] = val.  Used
     * by goog.dom.setProperties.
     *
     * @private {!Object<string, string>}
     * @const
     */
    var DIRECT_ATTRIBUTE_MAP_: {
        'cellpadding': string;
        'cellspacing': string;
        'colspan': string;
        'frameborder': string;
        'height': string;
        'maxlength': string;
        'nonce': string;
        'role': string;
        'rowspan': string;
        'type': string;
        'usemap': string;
        'valign': string;
        'width': string;
    };
    /**
     * Gets the dimensions of the viewport.
     *
     * Gecko Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of document.
     *
     * Gecko Backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * IE6/7 Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of document element.
     *
     * IE5 + IE6/7 Backwards compatible mode:
     * docEl.clientWidth  0.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight 0.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * Opera 9 Standards and backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * WebKit:
     * Safari 2
     * docEl.clientHeight Same as scrollHeight.
     * docEl.clientWidth  Same as innerWidth.
     * win.innerWidth     Width of viewport excluding scrollbar.
     * win.innerHeight    Height of the viewport including scrollbar.
     * frame.innerHeight  Height of the viewport exluding scrollbar.
     *
     * Safari 3 (tested in 522)
     *
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * docEl.clientHeight Height of viewport excluding scrollbar in strict mode.
     * body.clientHeight  Height of viewport excluding scrollbar in quirks mode.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     */
    function getViewportSize(opt_window: Window | undefined): goog.math.Size;
    /**
     * Helper for {@code getViewportSize}.
     * @param {Window} win The window to get the view port size for.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     * @private
     */
    function getViewportSize_(win: Window): goog.math.Size;
    /**
     * Calculates the height of the document.
     *
     * @return {number} The height of the current document.
     */
    function getDocumentHeight(): number;
    /**
     * Calculates the height of the document of the given window.
     *
     * @param {!Window} win The window whose document height to retrieve.
     * @return {number} The height of the document of the given window.
     */
    function getDocumentHeightForWindow(win: Window): number;
    /**
     * Calculates the height of the document of the given window.
     *
     * Function code copied from the opensocial gadget api:
     *   gadgets.window.adjustHeight(opt_height)
     *
     * @private
     * @param {!Window} win The window whose document height to retrieve.
     * @return {number} The height of the document of the given window.
     */
    function getDocumentHeight_(win: Window): number;
    /**
     * Gets the page scroll distance as a coordinate object.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @deprecated Use {@link goog.dom.getDocumentScroll} instead.
     */
    function getPageScroll(opt_window: Window | undefined): goog.math.Coordinate;
    /**
     * Gets the document scroll distance as a coordinate object.
     *
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     */
    function getDocumentScroll(): goog.math.Coordinate;
    /**
     * Helper for {@code getDocumentScroll}.
     *
     * @param {!Document} doc The document to get the scroll for.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @private
     */
    function getDocumentScroll_(doc: Document): goog.math.Coordinate;
    /**
     * Gets the document scroll element.
     * @return {!Element} Scrolling element.
     */
    function getDocumentScrollElement(): Element;
    /**
     * Helper for {@code getDocumentScrollElement}.
     * @param {!Document} doc The document to get the scroll element for.
     * @return {!Element} Scrolling element.
     * @private
     */
    function getDocumentScrollElement_(doc: Document): Element;
    /**
     * Gets the window object associated with the given document.
     *
     * @param {Document=} opt_doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     */
    function getWindow(opt_doc?: Document | undefined): Window;
    /**
     * Helper for {@code getWindow}.
     *
     * @param {!Document} doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     * @private
     */
    function getWindow_(doc: Document): Window;
    /**
     * Returns a dom node with a set of attributes.  This function accepts varargs
     * for subsequent nodes to be added.  Subsequent nodes will be added to the
     * first node as childNodes.
     *
     * So:
     * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
     * createDom(goog.dom.TagName.P));</code> would return a div with two child
     * paragraphs
     *
     * For passing properties, please see {@link goog.dom.setProperties} for more
     * information.
     *
     * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
     * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
     *     of name-value pairs for attributes. If a string, then this is the
     *     className of the new element. If an array, the elements will be joined
     *     together as the className of the new element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array or NodeList,
     *     its elements will be added as childNodes instead.
     * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
     *     is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function createDom<T, R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): any;
    /**
     * Helper for {@code createDom}.
     * @param {!Document} doc The document to create the DOM in.
     * @param {!Arguments} args Argument object passed from the callers. See
     *     {@code goog.dom.createDom} for details.
     * @return {!Element} Reference to a DOM node.
     * @private
     */
    function createDom_(doc: Document, args: Arguments): Element;
    /**
     * Appends a node with text or other nodes.
     * @param {!Document} doc The document to create new nodes in.
     * @param {!Node} parent The node to append nodes to.
     * @param {!Arguments} args The values to add. See {@code goog.dom.append}.
     * @param {number} startIndex The index of the array to start from.
     * @private
     */
    function append_(doc: Document, parent: Node, args: Arguments, startIndex: number): void;
    /**
     * Alias for {@code createDom}.
     * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
     * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
     *     of name-value pairs for attributes. If a string, then this is the
     *     className of the new element. If an array, the elements will be joined
     *     together as the className of the new element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array, its
     *     children will be added as childNodes instead.
     * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
     *     is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @deprecated Use {@link goog.dom.createDom} instead.
     */
    function $dom<T, R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): R;
    /**
     * Creates a new element.
     * @param {string|!goog.dom.TagName<T>} name Tag to create.
     * @return {R} The new element. The return type is {!Element} if name is
     *     a string or a more specific type if it is a member of goog.dom.TagName
     *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function createElement<T, R>(name: string | goog.dom.TagName<T>): R;
    /**
     * Creates a new element.
     * @param {!Document} doc The document to create the element in.
     * @param {string|!goog.dom.TagName<T>} name Tag to create.
     * @return {R} The new element. The return type is {!Element} if name is
     *     a string or a more specific type if it is a member of goog.dom.TagName
     *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    function createElement_<T, R>(doc: Document, name: string | goog.dom.TagName<T>): any;
    /**
     * Creates a new text node.
     * @param {number|string} content Content.
     * @return {!Text} The new text node.
     */
    function createTextNode(content: number | string): Text;
    /**
     * Create a table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
     *     {@code goog.string.Unicode.NBSP} characters.
     * @return {!Element} The created table.
     */
    function createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): Element;
    /**
     * Create a table.
     * @param {!Document} doc Document object to use to create the table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean} fillWithNbsp If true, fills table entries with
     *     {@code goog.string.Unicode.NBSP} characters.
     * @return {!HTMLTableElement} The created table.
     * @private
     */
    function createTable_(doc: Document, rows: number, columns: number, fillWithNbsp: boolean): HTMLTableElement;
    /**
     * Creates a new Node from constant strings of HTML markup.
     * @param {...!goog.string.Const} var_args The HTML strings to concatenate then
     *     convert into a node.
     * @return {!Node}
     */
    function constHtmlToNode(var_args: goog.string.Const[]): Node;
    /**
     * Converts HTML markup into a node. This is a safe version of
     * {@code goog.dom.htmlToDocumentFragment} which is now deleted.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     */
    function safeHtmlToNode(html: goog.html.SafeHtml): Node;
    /**
     * Helper for {@code safeHtmlToNode}.
     * @param {!Document} doc The document.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     * @private
     */
    function safeHtmlToNode_(doc: Document, html: goog.html.SafeHtml): Node;
    /**
     * Helper for {@code safeHtmlToNode_}.
     * @param {!Document} doc The document.
     * @param {!Node} tempDiv The input node.
     * @return {!Node} The resulting node.
     * @private
     */
    function childrenToNode_(doc: Document, tempDiv: Node): Node;
    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @return {boolean} True if in CSS1-compatible mode.
     */
    function isCss1CompatMode(): boolean;
    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @param {!Document} doc The document to check.
     * @return {boolean} True if in CSS1-compatible mode.
     * @private
     */
    function isCss1CompatMode_(doc: Document): boolean;
    /**
     * Determines if the given node can contain children, intended to be used for
     * HTML generation.
     *
     * IE natively supports node.canHaveChildren but has inconsistent behavior.
     * Prior to IE8 the base tag allows children and in IE9 all nodes return true
     * for canHaveChildren.
     *
     * In practice all non-IE browsers allow you to add children to any node, but
     * the behavior is inconsistent:
     *
     * <pre>
     *   var a = goog.dom.createElement(goog.dom.TagName.BR);
     *   a.appendChild(document.createTextNode('foo'));
     *   a.appendChild(document.createTextNode('bar'));
     *   console.log(a.childNodes.length);  // 2
     *   console.log(a.innerHTML);  // Chrome: "", IE9: "foobar", FF3.5: "foobar"
     * </pre>
     *
     * For more information, see:
     * http://dev.w3.org/html5/markup/syntax.html#syntax-elements
     *
     * TODO(user): Rename shouldAllowChildren() ?
     *
     * @param {Node} node The node to check.
     * @return {boolean} Whether the node can contain children.
     */
    function canHaveChildren(node: Node): boolean;
    /**
     * Appends a child to a node.
     * @param {Node} parent Parent.
     * @param {Node} child Child.
     */
    function appendChild(parent: Node, child: Node): void;
    /**
     * Appends a node with text or other nodes.
     * @param {!Node} parent The node to append nodes to.
     * @param {...goog.dom.Appendable} var_args The things to append to the node.
     *     If this is a Node it is appended as is.
     *     If this is a string then a text node is appended.
     *     If this is an array like object then fields 0 to length - 1 are appended.
     */
    function append(parent: Node, var_args: goog.dom.Appendable[]): void;
    /**
     * Removes all the child nodes on a DOM node.
     * @param {Node} node Node to remove children from.
     */
    function removeChildren(node: Node): void;
    /**
     * Inserts a new node before an existing reference node (i.e. as the previous
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert before.
     */
    function insertSiblingBefore(newNode: Node, refNode: Node): void;
    /**
     * Inserts a new node after an existing reference node (i.e. as the next
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert after.
     */
    function insertSiblingAfter(newNode: Node, refNode: Node): void;
    /**
     * Insert a child at a given index. If index is larger than the number of child
     * nodes that the parent currently has, the node is inserted as the last child
     * node.
     * @param {Element} parent The element into which to insert the child.
     * @param {Node} child The element to insert.
     * @param {number} index The index at which to insert the new child node. Must
     *     not be negative.
     */
    function insertChildAt(parent: Element, child: Node, index: number): void;
    /**
     * Removes a node from its parent.
     * @param {Node} node The node to remove.
     * @return {Node} The node removed if removed; else, null.
     */
    function removeNode(node: Node): Node;
    /**
     * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
     * parent.
     * @param {Node} newNode Node to insert.
     * @param {Node} oldNode Node to replace.
     */
    function replaceNode(newNode: Node, oldNode: Node): void;
    /**
     * Flattens an element. That is, removes it and replace it with its children.
     * Does nothing if the element is not in the document.
     * @param {Element} element The element to flatten.
     * @return {Element|undefined} The original element, detached from the document
     *     tree, sans children; or undefined, if the element was not in the document
     *     to begin with.
     */
    function flattenElement(element: Element): Element | undefined;
    /**
     * Returns an array containing just the element children of the given element.
     * @param {Element} element The element whose element children we want.
     * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
     *     of just the element children of the given element.
     */
    function getChildren(element: Element): (Array<Element> | NodeList);
    /**
     * Returns the first child node that is an element.
     * @param {Node} node The node to get the first child element of.
     * @return {Element} The first child node of {@code node} that is an element.
     */
    function getFirstElementChild(node: Node): Element;
    /**
     * Returns the last child node that is an element.
     * @param {Node} node The node to get the last child element of.
     * @return {Element} The last child node of {@code node} that is an element.
     */
    function getLastElementChild(node: Node): Element;
    /**
     * Returns the first next sibling that is an element.
     * @param {Node} node The node to get the next sibling element of.
     * @return {Element} The next sibling of {@code node} that is an element.
     */
    function getNextElementSibling(node: Node): Element;
    /**
     * Returns the first previous sibling that is an element.
     * @param {Node} node The node to get the previous sibling element of.
     * @return {Element} The first previous sibling of {@code node} that is
     *     an element.
     */
    function getPreviousElementSibling(node: Node): Element;
    /**
     * Returns the first node that is an element in the specified direction,
     * starting with {@code node}.
     * @param {Node} node The node to get the next element from.
     * @param {boolean} forward Whether to look forwards or backwards.
     * @return {Element} The first element.
     * @private
     */
    function getNextElementNode_(node: Node, forward: boolean): Element;
    /**
     * Returns the next node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The next node in the DOM tree, or null if this was the last
     *     node.
     */
    function getNextNode(node: Node): Node;
    /**
     * Returns the previous node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The previous node in the DOM tree, or null if this was the
     *     first node.
     */
    function getPreviousNode(node: Node): Node;
    /**
     * Whether the object looks like a DOM node.
     * @param {?} obj The object being tested for node likeness.
     * @return {boolean} Whether the object looks like a DOM node.
     */
    function isNodeLike(obj: any): boolean;
    /**
     * Whether the object looks like an Element.
     * @param {?} obj The object being tested for Element likeness.
     * @return {boolean} Whether the object looks like an Element.
     */
    function isElement(obj: any): boolean;
    /**
     * Returns true if the specified value is a Window object. This includes the
     * global window for HTML pages, and iframe windows.
     * @param {?} obj Variable to test.
     * @return {boolean} Whether the variable is a window.
     */
    function isWindow(obj: any): boolean;
    /**
     * Returns an element's parent, if it's an Element.
     * @param {Element} element The DOM element.
     * @return {Element} The parent, or null if not an Element.
     */
    function getParentElement(element: Element): Element;
    /**
     * Whether a node contains another node.
     * @param {?Node|undefined} parent The node that should contain the other node.
     * @param {?Node|undefined} descendant The node to test presence of.
     * @return {boolean} Whether the parent node contains the descendent node.
     */
    function contains(parent: (Node | undefined) | null, descendant: (Node | undefined) | null): boolean;
    /**
     * Compares the document order of two nodes, returning 0 if they are the same
     * node, a negative number if node1 is before node2, and a positive number if
     * node2 is before node1.  Note that we compare the order the tags appear in the
     * document so in the tree <b><i>text</i></b> the B node is considered to be
     * before the I node.
     *
     * @param {Node} node1 The first node to compare.
     * @param {Node} node2 The second node to compare.
     * @return {number} 0 if the nodes are the same node, a negative number if node1
     *     is before node2, and a positive number if node2 is before node1.
     */
    function compareNodeOrder(node1: any, node2: any): number;
    /**
     * Utility function to compare the position of two nodes, when
     * {@code textNode}'s parent is an ancestor of {@code node}.  If this entry
     * condition is not met, this function will attempt to reference a null object.
     * @param {!Node} textNode The textNode to compare.
     * @param {Node} node The node to compare.
     * @return {number} -1 if node is before textNode, +1 otherwise.
     * @private
     */
    function compareParentsDescendantNodeIe_(textNode: Node, node: Node): number;
    /**
     * Utility function to compare the position of two nodes known to be non-equal
     * siblings.
     * @param {Node} node1 The first node to compare.
     * @param {!Node} node2 The second node to compare.
     * @return {number} -1 if node1 is before node2, +1 otherwise.
     * @private
     */
    function compareSiblingOrder_(node1: Node, node2: Node): number;
    /**
     * Find the deepest common ancestor of the given nodes.
     * @param {...Node} var_args The nodes to find a common ancestor of.
     * @return {Node} The common ancestor of the nodes, or null if there is none.
     *     null will only be returned if two or more of the nodes are from different
     *     documents.
     */
    function findCommonAncestor(var_args: Node[]): Node;
    /**
     * Returns the owner document for a node.
     * @param {Node|Window} node The node to get the document for.
     * @return {!Document} The document owning the node.
     */
    function getOwnerDocument(node: Node | Window): Document;
    /**
     * Cross-browser function for getting the document element of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {!Document} The frame content document.
     */
    function getFrameContentDocument(frame: HTMLFrameElement): Document;
    /**
     * Cross-browser function for getting the window of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {Window} The window associated with the given frame, or null if none
     *     exists.
     */
    function getFrameContentWindow(frame: HTMLFrameElement): Window;
    /**
     * Sets the text content of a node, with cross-browser support.
     * @param {Node} node The node to change the text content of.
     * @param {string|number} text The value that should replace the node's content.
     */
    function setTextContent(node: Node, text: string | number): void;
    /**
     * Gets the outerHTML of a node, which islike innerHTML, except that it
     * actually contains the HTML of the node itself.
     * @param {Element} element The element to get the HTML of.
     * @return {string} The outerHTML of the given element.
     */
    function getOuterHtml(element: Element): string;
    /**
     * Finds the first descendant node that matches the filter function, using
     * a depth first search. This function offers the most general purpose way
     * of finding a matching element. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.
     * @see goog.dom.query
     *
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @return {Node|undefined} The found node or undefined if none is found.
     */
    function findNode(root: any, p: any): any;
    /**
     * Finds all the descendant nodes that match the filter function, using a
     * a depth first search. This function offers the most general-purpose way
     * of finding a set of matching elements. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.

    * @param {Node} root The root of the tree to search.
    * @param {function(Node) : boolean} p The filter function.
    * @return {!Array<!Node>} The found nodes or an empty array if none are found.
    */
    function findNodes(root: any, p: any): any[];
    /**
     * Finds the first or all the descendant nodes that match the filter function,
     * using a depth first search.
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @param {!Array<!Node>} rv The found nodes are added to this array.
     * @param {boolean} findOne If true we exit after the first found node.
     * @return {boolean} Whether the search is complete or not. True in case findOne
     *     is true and the node is found. False otherwise.
     * @private
     */
    function findNodes_(root: Node, p: (arg0: Node) => boolean, rv: Array<Node>, findOne: boolean): boolean;
    /**
     * Map of tags whose content to ignore when calculating text length.
     * @private {!Object<string, number>}
     * @const
     */
    const TAGS_TO_IGNORE_: {
        'SCRIPT': number;
        'STYLE': number;
        'HEAD': number;
        'IFRAME': number;
        'OBJECT': number;
    };
    /**
     * Map of tags which have predefined values with regard to whitespace.
     * @private {!Object<string, string>}
     * @const
     */
    const PREDEFINED_TAG_VALUES_: {
        'IMG': string;
        'BR': string;
    };
    /**
     * Returns true if the element has a tab index that allows it to receive
     * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
     * natively support keyboard focus, even if they have no tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a tab index that allows keyboard
     *     focus.
     */
    function isFocusableTabIndex(element: Element): boolean;
    /**
     * Enables or disables keyboard focus support on the element via its tab index.
     * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
     * (or elements that natively support keyboard focus, like form elements) can
     * receive keyboard focus.  See http://go/tabindex for more info.
     * @param {Element} element Element whose tab index is to be changed.
     * @param {boolean} enable Whether to set or remove a tab index on the element
     *     that supports keyboard focus.
     */
    function setFocusableTabIndex(element: HTMLElement, enable: boolean): void;
    /**
     * Returns true if the element can be focused, i.e. it has a tab index that
     * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
     * that natively supports keyboard focus.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element allows keyboard focus.
     */
    function isFocusable(element: Element): boolean;
    /**
     * Returns true if the element has a specified tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a specified tab index.
     * @private
     */
    function hasSpecifiedTabIndex_(element: Element): boolean;
    /**
     * Returns true if the element's tab index allows the element to be focused.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element's tab index allows focus.
     * @private
     */
    function isTabIndexFocusable_(element: Element): boolean;
    /**
     * Returns true if the element is focusable even when tabIndex is not set.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element natively supports focus.
     * @private
     */
    function nativelySupportsFocus_(element: any): boolean;
    /**
     * Returns true if the element has a bounding rectangle that would be visible
     * (i.e. its width and height are greater than zero).
     * @param {!HTMLElement} element Element to check.
     * @return {boolean} Whether the element has a non-zero bounding rectangle.
     * @private
     */
    function hasNonZeroBoundingRect_(element: HTMLElement): boolean;
    /**
     * Returns the text content of the current node, without markup and invisible
     * symbols. New lines are stripped and whitespace is collapsed,
     * such that each character would be visible.
     *
     * In browsers that support it, innerText is used.  Other browsers attempt to
     * simulate it via node traversal.  Line breaks are canonicalized in IE.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The text content.
     */
    function getTextContent(node: Node): string;
    /**
     * Returns the text content of the current node, without markup.
     *
     * Unlike {@code getTextContent} this method does not collapse whitespaces
     * or normalize lines breaks.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The raw text content.
     */
    function getRawTextContent(node: Node): string;
    /**
     * Recursive support function for text content retrieval.
     *
     * @param {Node} node The node from which we are getting content.
     * @param {Array<string>} buf string buffer.
     * @param {boolean} normalizeWhitespace Whether to normalize whitespace.
     * @private
     */
    function getTextContent_(node: Node, buf: Array<string>, normalizeWhitespace: boolean): void;
    /**
     * Returns the text length of the text contained in a node, without markup. This
     * is equivalent to the selection length if the node was selected, or the number
     * of cursor movements to traverse the node. Images & BRs take one space.  New
     * lines are ignored.
     *
     * @param {Node} node The node whose text content length is being calculated.
     * @return {number} The length of {@code node}'s text content.
     */
    function getNodeTextLength(node: Node): number;
    /**
     * Returns the text offset of a node relative to one of its ancestors. The text
     * length is the same as the length calculated by goog.dom.getNodeTextLength.
     *
     * @param {Node} node The node whose offset is being calculated.
     * @param {Node=} opt_offsetParent The node relative to which the offset will
     *     be calculated. Defaults to the node's owner document's body.
     * @return {number} The text offset.
     */
    function getNodeTextOffset(node: Node, opt_offsetParent?: Node | undefined): number;
    /**
     * Returns the node at a given offset in a parent node.  If an object is
     * provided for the optional third parameter, the node and the remainder of the
     * offset will stored as properties of this object.
     * @param {Node} parent The parent node.
     * @param {number} offset The offset into the parent node.
     * @param {Object=} opt_result Object to be used to store the return value. The
     *     return value will be stored in the form {node: Node, remainder: number}
     *     if this object is provided.
     * @return {Node} The node at the given offset.
     */
    function getNodeAtOffset(parent: Node, offset: number, opt_result?: any): Node;
    /**
     * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
     * the object must have a numeric length property and an item function (which
     * has type 'string' on IE for some reason).
     * @param {Object} val Object to test.
     * @return {boolean} Whether the object is a NodeList.
     */
    function isNodeList(val: {
        length;
        item;
    }): boolean;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * tag name and/or class name. If the passed element matches the specified
     * criteria, the element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {?(goog.dom.TagName<T>|string)=} opt_tag The tag name to match (or
     *     null/undefined to match only based on class name).
     * @param {?string=} opt_class The class name to match (or null/undefined to
     *     match only based on tag name).
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {?R} The first ancestor that matches the passed criteria, or
     *     null if no match is found. The return type is {?Element} if opt_tag is
     *     not a member of goog.dom.TagName or a more specific type if it is (e.g.
     *     {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function getAncestorByTagNameAndClass<T>(element: Node, opt_tag?: ((goog.dom.TagName<T> | string) | undefined) | null, opt_class?: (string | undefined) | null, opt_maxSearchSteps?: number | undefined): Element;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * class name. If the passed element matches the specified criteria, the
     * element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {string} className The class name to match.
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {Element} The first ancestor that matches the passed criteria, or
     *     null if none match.
     */
    function getAncestorByClass(element: Node, className: string, opt_maxSearchSteps?: number | undefined): Element;
    /**
     * Walks up the DOM hierarchy returning the first ancestor that passes the
     * matcher function.
     * @param {Node} element The DOM node to start with.
     * @param {function(Node) : boolean} matcher A function that returns true if the
     *     passed node matches the desired criteria.
     * @param {boolean=} opt_includeNode If true, the node itself is included in
     *     the search (the first call to the matcher will pass startElement as
     *     the node to test).
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {Node} DOM node that matched the matcher, or null if there was
     *     no match.
     */
    function getAncestor(element: Node, matcher: (arg0: Node) => boolean, opt_includeNode?: boolean | undefined, opt_maxSearchSteps?: number | undefined): Node;
    /**
     * Determines the active element in the given document.
     * @param {Document} doc The document to look in.
     * @return {Element} The active element.
     */
    function getActiveElement(doc: Document): Element;
    /**
     * Gives the current devicePixelRatio.
     *
     * By default, this is the value of window.devicePixelRatio (which should be
     * preferred if present).
     *
     * If window.devicePixelRatio is not present, the ratio is calculated with
     * window.matchMedia, if present. Otherwise, gives 1.0.
     *
     * Some browsers (including Chrome) consider the browser zoom level in the pixel
     * ratio, so the value may change across multiple calls.
     *
     * @return {number} The number of actual pixels per virtual pixel.
     */
    function getPixelRatio(): number;
    /**
     * Calculates a mediaQuery to check if the current device supports the
     * given actual to virtual pixel ratio.
     * @param {number} pixelRatio The ratio of actual pixels to virtual pixels.
     * @return {number} pixelRatio if applicable, otherwise 0.
     * @private
     */
    function matchesPixelRatio_(pixelRatio: number): number;
    /**
     * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
     * type information.
     * @param {!HTMLCanvasElement} canvas
     * @return {!CanvasRenderingContext2D}
     */
    function getCanvasContext2D(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
    /**
     * Typedef for use with goog.dom.createDom and goog.dom.append.
     * @typedef {Object|string|Array|NodeList}
     */
    type Appendable = Object | string | Array<string> | NodeList;
    class DomHelper {
        private document_;
        /**
         * Create an instance of a DOM helper with a new document object.
         * @param {Document=} opt_document Document object to associate with this
         *     DOM helper.
         * @constructor
         */
        constructor(opt_document?: Document);
        /**
         * Gets the dom helper object for the document where the element resides.
         * @param {Node=} opt_node If present, gets the DomHelper for this node.
         * @return {!goog.dom.DomHelper} The DomHelper.
         */
        getDomHelper(opt_element?: Node | Window): any;
        /**
         * Sets the document object.
         * @param {!Document} document Document object.
         */
        setDocument(document: Document): void;
        /**
         * Gets the document object being used by the dom library.
         * @return {!Document} Document object.
         */
        getDocument(): Document;
        /**
         * Alias for {@code getElementById}. If a DOM node is passed in then we just
         * return that.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         */
        getElement(element: string | Element): Element;
        /**
         * Gets an element by id, asserting that the element is found.
         *
         * This is used when an element is expected to exist, and should fail with
         * an assertion error if it does not (if assertions are enabled).
         *
         * @param {string} id Element ID.
         * @return {!Element} The element with the given ID, if it exists.
         */
        getRequiredElement(id: string): Element;
        /**
         * Alias for {@code getElement}.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         * @deprecated Use {@link goog.dom.DomHelper.prototype.getElement} instead.
         */
        $(element: string | Element): Element;
        /**
         * Gets elements by tag name.
         * @param {!goog.dom.TagName<T>} tagName
         * @param {(!Document|!Element)=} opt_parent Parent element or document where to
         *     look for elements. Defaults to document of this DomHelper.
         * @return {!NodeList<R>} List of elements. The members of the list are
         *     {!Element} if tagName is not a member of goog.dom.TagName or more
         *     specific types if it is (e.g. {!HTMLAnchorElement} for
         *     goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        getElementsByTagName(tagName: any, opt_parent?: any): any;
        /**
        * Looks up elements by both tag and class name, using browser native functions
        * ({@code querySelectorAll}, {@code getElementsByTagName} or
        * {@code getElementsByClassName}) where possible. The returned array is a live
        * NodeList or a static list depending on the code path taken.
        *
        * @see goog.dom.query
        *
        * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name or * for all
        *     tags.
        * @param {?string=} opt_class Optional class name.
        * @param {(Document|Element)=} opt_el Optional element to look in.
        * @return {!IArrayLike<R>} Array-like list of elements (only a length property
        *     and numerical indices are guaranteed to exist). The members of the array
        *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
        *     specific types if it is (e.g. {!HTMLAnchorElement} for
        *     goog.dom.TagName.A).
        * @template T
        * @template R := cond(isUnknown(T), 'Element', T) =:
        */
        getElementsByTagNameAndClass(opt_tag?: any, opt_class?: any, opt_el?: any): IArrayLike<{}>;
        /**
        * Gets the first element matching the tag and the class.
        *
        * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
        * @param {?string=} opt_class Optional class name.
        * @param {(Document|Element)=} opt_el Optional element to look in.
        * @return {?R} Reference to a DOM node. The return type is {?Element} if
        *     tagName is a string or a more specific type if it is a member of
        *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
        * @template T
        * @template R := cond(isUnknown(T), 'Element', T) =:
        */
        getElementByTagNameAndClass(opt_tag?: any, opt_class?: any, opt_el?: any): any;
        /**
        * Returns an array of all the elements with the provided className.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {Element|Document=} opt_el Optional element to look in.
        * @return {!IArrayLike<!Element>} The items found with the class name provided.
        */
        getElementsByClass(className: any, opt_el?: any): IArrayLike<Element>;
        /**
        * Returns the first element we find matching the provided class name.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {(Element|Document)=} opt_el Optional element to look in.
        * @return {Element} The first item found with the class name provided.
        */
        getElementByClass(className: any, opt_el?: any): Element;
        /**
        * Ensures an element with the given className exists, and then returns the
        * first element with the provided className.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {(!Element|!Document)=} opt_root Optional element or document to look
        *     in.
        * @return {!Element} The first item found with the class name provided.
        * @throws {goog.asserts.AssertionError} Thrown if no element is found.
        */
        getRequiredElementByClass(className: any, opt_root?: any): Element;
        /**
         * Alias for {@code getElementsByTagNameAndClass}.
         * @deprecated Use DomHelper getElementsByTagNameAndClass.
         * @see goog.dom.query
         *
         * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
         * @param {?string=} opt_class Optional class name.
         * @param {Element=} opt_el Optional element to look in.
         * @return {!IArrayLike<R>} Array-like list of elements (only a length property
         *     and numerical indices are guaranteed to exist). The members of the array
         *     are {!Element} if opt_tag is a string or more specific types if it is
         *     a member of goog.dom.TagName (e.g. {!HTMLAnchorElement} for
         *     goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        $$<T>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el?: Element | undefined): IArrayLike<Element>;
        /**
         * Sets a number of properties on a node.
         * @param {Element} element DOM node to set properties on.
         * @param {Object} properties Hash of property:value pairs.
         */
        setProperties(element: any, properties: any): void;
        /**
         * Gets the dimensions of the viewport.
         * @param {Window=} opt_window Optional window element to test. Defaults to
         *     the window of the Dom Helper.
         * @return {!goog.math.Size} Object with values 'width' and 'height'.
         */
        getViewportSize(opt_window?: Window | undefined): goog.math.Size;
        /**
         * Calculates the height of the document.
         *
         * @return {number} The height of the document.
         */
        getDocumentHeight(): number;
        /**
         * Returns a dom node with a set of attributes.  This function accepts varargs
         * for subsequent nodes to be added.  Subsequent nodes will be added to the
         * first node as childNodes.
         *
         * So:
         * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
         * createDom(goog.dom.TagName.P));</code> would return a div with two child
         * paragraphs
         *
         * An easy way to move all child nodes of an existing element to a new parent
         * element is:
         * <code>createDom(goog.dom.TagName.DIV, null, oldElement.childNodes);</code>
         * which will remove all child nodes from the old element and add them as
         * child nodes of the new DIV.
         *
         * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
         * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
         *     of name-value pairs for attributes. If a string, then this is the
         *     className of the new element. If an array, the elements will be joined
         *     together as the className of the new element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or
         *     strings for text nodes. If one of the var_args is an array or
         *     NodeList, its elements will be added as childNodes instead.
         * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
         *     is a string or a more specific type if it is a member of
         *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        createDom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element;
        /**
         * Alias for {@code createDom}.
         * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
         * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
         *     of name-value pairs for attributes. If a string, then this is the
         *     className of the new element. If an array, the elements will be joined
         *     together as the className of the new element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or strings for
         *     text nodes.  If one of the var_args is an array, its children will be
         *     added as childNodes instead.
         * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
         *     is a string or a more specific type if it is a member of
         *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         * @deprecated Use {@link goog.dom.DomHelper.prototype.createDom} instead.
         */
        $dom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element;
        /**
         * Creates a new element.
         * @param {string|!goog.dom.TagName<T>} name Tag to create.
         * @return {R} The new element. The return type is {!Element} if name is
         *     a string or a more specific type if it is a member of goog.dom.TagName
         *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        createElement<T>(name: string | goog.dom.TagName<T>): Element;
        /**
         * Creates a new text node.
         * @param {number|string} content Content.
         * @return {!Text} The new text node.
         */
        createTextNode(content: number | string): Text;
        /**
         * Create a table.
         * @param {number} rows The number of rows in the table.  Must be >= 1.
         * @param {number} columns The number of columns in the table.  Must be >= 1.
         * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
         *     {@code goog.string.Unicode.NBSP} characters.
         * @return {!HTMLElement} The created table.
         */
        createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): HTMLElement;
        /**
         * Converts an HTML into a node or a document fragment. A single Node is used if
         * {@code html} only generates a single node. If {@code html} generates multiple
         * nodes then these are put inside a {@code DocumentFragment}. This is a safe
         * version of {@code goog.dom.DomHelper#htmlToDocumentFragment} which is now
         * deleted.
         * @param {!goog.html.SafeHtml} html The HTML markup to convert.
         * @return {!Node} The resulting node.
         */
        safeHtmlToNode(html: goog.html.SafeHtml): Node;
        /**
         * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
         * mode, false otherwise.
         * @return {boolean} True if in CSS1-compatible mode.
         */
        isCss1CompatMode(): boolean;
        /**
         * Gets the window object associated with the document.
         * @return {!Window} The window associated with the given document.
         */
        getWindow(): Window;
        /**
         * Gets the document scroll element.
         * @return {!Element} Scrolling element.
         */
        getDocumentScrollElement(): Element;
        /**
         * Gets the document scroll distance as a coordinate object.
         * @return {!goog.math.Coordinate} Object with properties 'x' and 'y'.
         */
        getDocumentScroll(): goog.math.Coordinate;
        /**
         * Determines the active element in the given document.
         * @param {Document=} opt_doc The document to look in.
         * @return {Element} The active element.
         */
        getActiveElement(opt_doc?: Document | undefined): Element;
        /**
         * Appends a child to a node.
         * @param {Node} parent Parent.
         * @param {Node} child Child.
         */
        appendChild(parent: Node, child: Node): void;
        /**
         * Appends a node with text or other nodes.
         * @param {!Node} parent The node to append nodes to.
         * @param {...goog.dom.Appendable} var_args The things to append to the node.
         *     If this is a Node it is appended as is.
         *     If this is a string then a text node is appended.
         *     If this is an array like object then fields 0 to length - 1 are appended.
         */
        append(parent: Node, var_args: goog.dom.Appendable[]): void;
        /**
         * Determines if the given node can contain children, intended to be used for
         * HTML generation.
         *
         * @param {Node} node The node to check.
         * @return {boolean} Whether the node can contain children.
         */
        canHaveChildren(node: Node): boolean;
        /**
         * Removes all the child nodes on a DOM node.
         * @param {Node} node Node to remove children from.
         */
        removeChildren(node: Node): void;
        /**
         * Inserts a new node before an existing reference node (i.e., as the previous
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert before.
         */
        insertSiblingBefore(newNode: Node, refNode: Node): void;
        /**
         * Inserts a new node after an existing reference node (i.e., as the next
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert after.
         */
        insertSiblingAfter(newNode: Node, refNode: Node): void;
        /**
         * Insert a child at a given index. If index is larger than the number of child
         * nodes that the parent currently has, the node is inserted as the last child
         * node.
         * @param {Element} parent The element into which to insert the child.
         * @param {Node} child The element to insert.
         * @param {number} index The index at which to insert the new child node. Must
         *     not be negative.
         */
        insertChildAt(parent: Element, child: Node, index: number): void;
        /**
         * Removes a node from its parent.
         * @param {Node} node The node to remove.
         * @return {Node} The node removed if removed; else, null.
         */
        removeNode(node: Node): Node;
        /**
         * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
         * parent.
         * @param {Node} newNode Node to insert.
         * @param {Node} oldNode Node to replace.
         */
        replaceNode(newNode: Node, oldNode: Node): void;
        /**
         * Flattens an element. That is, removes it and replace it with its children.
         * @param {Element} element The element to flatten.
         * @return {Element|undefined} The original element, detached from the document
         *     tree, sans children, or undefined if the element was already not in the
         *     document.
         */
        flattenElement(element: Element): Element | undefined;
        /**
         * Returns an array containing just the element children of the given element.
         * @param {Element} element The element whose element children we want.
         * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
         *     of just the element children of the given element.
         */
        getChildren(element: Element): (Array<Element> | NodeList);
        /**
         * Returns the first child node that is an element.
         * @param {Node} node The node to get the first child element of.
         * @return {Element} The first child node of {@code node} that is an element.
         */
        getFirstElementChild(node: Node): Element;
        /**
         * Returns the last child node that is an element.
         * @param {Node} node The node to get the last child element of.
         * @return {Element} The last child node of {@code node} that is an element.
         */
        getLastElementChild(node: Node): Element;
        /**
         * Returns the first next sibling that is an element.
         * @param {Node} node The node to get the next sibling element of.
         * @return {Element} The next sibling of {@code node} that is an element.
         */
        getNextElementSibling(node: Node): Element;
        /**
         * Returns the first previous sibling that is an element.
         * @param {Node} node The node to get the previous sibling element of.
         * @return {Element} The first previous sibling of {@code node} that is
         *     an element.
         */
        getPreviousElementSibling(node: any): Element;
        /**
         * Returns the next node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The next node in the DOM tree, or null if this was the last
         *     node.
         */
        getNextNode(node: Node): Node;
        /**
         * Returns the previous node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The previous node in the DOM tree, or null if this was the
         *     first node.
         */
        getPreviousNode(): typeof getPreviousNode;
        /**
         * Whether the object looks like a DOM node.
         * @param {?} obj The object being tested for node likeness.
         * @return {boolean} Whether the object looks like a DOM node.
         */
        isNodeLike(): typeof isNodeLike;
        /**
         * Whether the object looks like an Element.
         * @param {?} obj The object being tested for Element likeness.
         * @return {boolean} Whether the object looks like an Element.
         */
        isElement(): typeof isElement;
        /**
         * Returns true if the specified value is a Window object. This includes the
         * global window for HTML pages, and iframe windows.
         * @param {?} obj Variable to test.
         * @return {boolean} Whether the variable is a window.
         */
        isWindow(): typeof isWindow;
        /**
         * Returns an element's parent, if it's an Element.
         * @param {Element} element The DOM element.
         * @return {Element} The parent, or null if not an Element.
         */
        getParentElement(): typeof getParentElement;
        /**
         * Whether a node contains another node.
         * @param {Node} parent The node that should contain the other node.
         * @param {Node} descendant The node to test presence of.
         * @return {boolean} Whether the parent node contains the descendent node.
         */
        contains(): typeof contains;
        /**
         * Compares the document order of two nodes, returning 0 if they are the same
         * node, a negative number if node1 is before node2, and a positive number if
         * node2 is before node1.  Note that we compare the order the tags appear in the
         * document so in the tree <b><i>text</i></b> the B node is considered to be
         * before the I node.
         *
         * @param {Node} node1 The first node to compare.
         * @param {Node} node2 The second node to compare.
         * @return {number} 0 if the nodes are the same node, a negative number if node1
         *     is before node2, and a positive number if node2 is before node1.
         */
        compareNodeOrder(): typeof compareNodeOrder;
        /**
         * Find the deepest common ancestor of the given nodes.
         * @param {...Node} var_args The nodes to find a common ancestor of.
         * @return {Node} The common ancestor of the nodes, or null if there is none.
         *     null will only be returned if two or more of the nodes are from different
         *     documents.
         */
        findCommonAncestor(): typeof findCommonAncestor;
        /**
         * Returns the owner document for a node.
         * @param {Node} node The node to get the document for.
         * @return {!Document} The document owning the node.
         */
        getOwnerDocument(): typeof getOwnerDocument;
        /**
         * Cross browser function for getting the document element of an iframe.
         * @param {Element} iframe Iframe element.
         * @return {!Document} The frame content document.
         */
        getFrameContentDocument: typeof getFrameContentDocument;
        /**
         * Cross browser function for getting the window of a frame or iframe.
         * @param {Element} frame Frame element.
         * @return {Window} The window associated with the given frame.
         */
        getFrameContentWindow: typeof getFrameContentWindow;
        /**
         * Sets the text content of a node, with cross-browser support.
         * @param {Node} node The node to change the text content of.
         * @param {string|number} text The value that should replace the node's content.
         */
        setTextContent(): typeof setTextContent;
        /**
         * Gets the outerHTML of a node, which islike innerHTML, except that it
         * actually contains the HTML of the node itself.
         * @param {Element} element The element to get the HTML of.
         * @return {string} The outerHTML of the given element.
         */
        getOuterHtml(): typeof getOuterHtml;
        /**
         * Finds the first descendant node that matches the filter function. This does
         * a depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Node|undefined} The found node or undefined if none is found.
         */
        findNode(): typeof findNode;
        /**
         * Finds all the descendant nodes that matches the filter function. This does a
         * depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Array<Node>} The found nodes or an empty array if none are found.
         */
        findNodes(): typeof findNodes;
        /**
         * Returns true if the element has a tab index that allows it to receive
         * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
         * natively support keyboard focus, even if they have no tab index.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element has a tab index that allows keyboard
         *     focus.
         */
        isFocusableTabIndex(): typeof isFocusableTabIndex;
        /**
         * Enables or disables keyboard focus support on the element via its tab index.
         * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
         * (or elements that natively support keyboard focus, like form elements) can
         * receive keyboard focus.  See http://go/tabindex for more info.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to set or remove a tab index on the element
         *     that supports keyboard focus.
         */
        setFocusableTabIndex: typeof setFocusableTabIndex;
        /**
         * Returns true if the element can be focused, i.e. it has a tab index that
         * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
         * that natively supports keyboard focus.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element allows keyboard focus.
         */
        isFocusable(): typeof isFocusable;
        /**
         * Returns the text contents of the current node, without markup. New lines are
         * stripped and whitespace is collapsed, such that each character would be
         * visible.
         *
         * In browsers that support it, innerText is used.  Other browsers attempt to
         * simulate it via node traversal.  Line breaks are canonicalized in IE.
         *
         * @param {Node} node The node from which we are getting content.
         * @return {string} The text content.
         */
        getTextContent(): typeof getTextContent;
        /**
         * Returns the text length of the text contained in a node, without markup. This
         * is equivalent to the selection length if the node was selected, or the number
         * of cursor movements to traverse the node. Images & BRs take one space.  New
         * lines are ignored.
         *
         * @param {Node} node The node whose text content length is being calculated.
         * @return {number} The length of {@code node}'s text content.
         */
        getNodeTextLength(): typeof getNodeTextLength;
        /**
         * Returns the text offset of a node relative to one of its ancestors. The text
         * length is the same as the length calculated by
         * {@code goog.dom.getNodeTextLength}.
         *
         * @param {Node} node The node whose offset is being calculated.
         * @param {Node=} opt_offsetParent Defaults to the node's owner document's body.
         * @return {number} The text offset.
         */
        getNodeTextOffset(): typeof getNodeTextOffset;
        /**
         * Returns the node at a given offset in a parent node.  If an object is
         * provided for the optional third parameter, the node and the remainder of the
         * offset will stored as properties of this object.
         * @param {Node} parent The parent node.
         * @param {number} offset The offset into the parent node.
         * @param {Object=} opt_result Object to be used to store the return value. The
         *     return value will be stored in the form {node: Node, remainder: number}
         *     if this object is provided.
         * @return {Node} The node at the given offset.
         */
        getNodeAtOffset(): typeof getNodeAtOffset;
        /**
         * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
         * the object must have a numeric length property and an item function (which
         * has type 'string' on IE for some reason).
         * @param {Object} val Object to test.
         * @return {boolean} Whether the object is a NodeList.
         */
        isNodeList(): typeof isNodeList;
        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * tag name and/or class name. If the passed element matches the specified
         * criteria, the element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {?(goog.dom.TagName<T>|string)=} opt_tag The tag name to match (or
         *     null/undefined to match only based on class name).
         * @param {?string=} opt_class The class name to match (or null/undefined to
         *     match only based on tag name).
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {?R} The first ancestor that matches the passed criteria, or
         *     null if no match is found. The return type is {?Element} if opt_tag is
         *     not a member of goog.dom.TagName or a more specific type if it is (e.g.
         *     {?HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        getAncestorByTagNameAndClass: typeof getAncestorByTagNameAndClass;
        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * class name. If the passed element matches the specified criteria, the
         * element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {string} class The class name to match.
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {Element} The first ancestor that matches the passed criteria, or
         *     null if none match.
         */
        getAncestorByClass(): typeof getAncestorByClass;
        /**
         * Walks up the DOM hierarchy returning the first ancestor that passes the
         * matcher function.
         * @param {Node} element The DOM node to start with.
         * @param {function(Node) : boolean} matcher A function that returns true if the
         *     passed node matches the desired criteria.
         * @param {boolean=} opt_includeNode If true, the node itself is included in
         *     the search (the first call to the matcher will pass startElement as
         *     the node to test).
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {Node} DOM node that matched the matcher, or null if there was
         *     no match.
         */
        getAncestor(): typeof getAncestor;
        /**
         * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
         * type information.
         * @param {!HTMLCanvasElement} canvas
         * @return {!CanvasRenderingContext2D}
         */
        getCanvasContext2D(): typeof getCanvasContext2D;
    }
}
declare namespace goog.disposable {
    /**
     * Interface for a disposable object.  If a instance requires cleanup
     * (references COM objects, DOM nodes, or other disposable objects), it should
     * implement this interface (it may subclass goog.Disposable).
     * @record
     */
    interface IDisposable {
        /**
         * Disposes of the object and its resources.
         * @return {void} Nothing.
         */
        dispose: () => void;
        /**
         * @return {boolean} Whether the object has been disposed of.
         */
        isDisposed: () => boolean;
    }
}
declare namespace goog {
    class Disposable implements goog.disposable.IDisposable {
        creationStack: any;
        /**
         * Class that provides the basic implementation for disposable objects. If your
         * class holds one or more references to COM objects, DOM nodes, or other
         * disposable objects, it should extend this class or implement the disposable
         * interface (defined in goog.disposable.IDisposable).
         * @constructor
         * @implements {goog.disposable.IDisposable}
         */
        constructor();
        /**
         * Whether the object has been disposed of.
         * @type {boolean}
         * @private
         */
        private disposed_;
        /**
         * Callbacks to invoke when this object is disposed.
         * @type {Array<!Function>}
         * @private
         */
        private onDisposeCallbacks_;
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @override
         */
        isDisposed(): boolean;
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @deprecated Use {@link #isDisposed} instead.
         */
        getDisposed(): boolean;
        /**
         * Disposes of the object. If the object hasn't already been disposed of, calls
         * {@link #disposeInternal}. Classes that extend {@code goog.Disposable} should
         * override {@link #disposeInternal} in order to delete references to COM
         * objects, DOM nodes, and other disposable objects. Reentrant.
         *
         * @return {void} Nothing.
         * @override
         */
        dispose(): void;
        /**
         * Associates a disposable object with this object so that they will be disposed
         * together.
         * @param {goog.disposable.IDisposable} disposable that will be disposed when
         *     this object is disposed.
         */
        registerDisposable(disposable: goog.disposable.IDisposable): void;
        /**
         * Invokes a callback function when this object is disposed. Callbacks are
         * invoked in the order in which they were added. If a callback is added to
         * an already disposed Disposable, it will be called immediately.
         * @param {function(this:T):?} callback The callback function.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @template T
         */
        addOnDisposeCallback<T>(callback: Function, opt_scope?: T | undefined): void;
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
        protected disposeInternal(): void;
    }
}
declare namespace goog.Disposable {
    /**
     * @enum {number} Different monitoring modes for Disposable.
     */
    enum MonitoringMode {
        /**
         * No monitoring.
         */
        OFF = 0,
        /**
         * Creating and disposing the goog.Disposable instances is monitored. All
         * disposable objects need to call the {@code goog.Disposable} base
         * constructor. The PERMANENT mode must be switched on before creating any
         * goog.Disposable instances.
         */
        PERMANENT = 1,
        /**
         * INTERACTIVE mode can be switched on and off on the fly without producing
         * errors. It also doesn't warn if the disposable objects don't call the
         * {@code goog.Disposable} base constructor.
         */
        INTERACTIVE = 2,
    }
    var MONITORING_MODE: number;
    var INCLUDE_STACK_ON_CREATION: boolean;
    /**
     * Maps the unique ID of every undisposed {@code goog.Disposable} object to
     * the object itself.
     * @type {!Object<number, !goog.Disposable>}
     * @private
     */
    var instances_: {};
    /**
     * @return {!Array<!goog.Disposable>} All {@code goog.Disposable} objects that
     *     haven't been disposed of.
     */
    function getUndisposedObjects(): Array<goog.Disposable>;
    /**
     * Clears the registry of undisposed objects but doesn't dispose of them.
     */
    function clearUndisposedObjects(): void;
    /**
     * Returns True if we can verify the object is disposed.
     * Calls {@code isDisposed} on the argument if it supports it.  If obj
     * is not an object with an isDisposed() method, return false.
     * @param {*} obj The object to investigate.
     * @return {boolean} True if we can verify the object is disposed.
     */
    function isDisposed(obj: any): boolean;
}
declare namespace goog {
    /**
     * Calls {@code dispose} on the argument if it supports it. If obj is not an
     *     object with a dispose() method, this is a no-op.
     * @param {*} obj The object to dispose of.
     */
    function dispose(obj: any): void;
    /**
     * Calls {@code dispose} on each member of the list that supports it. (If the
     * member is an ArrayLike, then {@code goog.disposeAll()} will be called
     * recursively on each of its members.) If the member is not an object with a
     * {@code dispose()} method, then it is ignored.
     * @param {...*} var_args The list.
     */
    function disposeAll(...var_args: any[]): void;
}
declare namespace goog.debug {
    interface EntryPointMonitor {
        /**
         * Instruments a function.
         *
         * @param {!Function} fn A function to instrument.
         * @return {!Function} The instrumented function.
         */
        wrap: (fn: Function) => Function;
        /**
         * Try to remove an instrumentation wrapper created by this monitor.
         * If the function passed to unwrap is not a wrapper created by this
         * monitor, then we will do nothing.
         *
         * Notice that some wrappers may not be unwrappable. For example, if other
         * monitors have applied their own wrappers, then it will be impossible to
         * unwrap them because their wrappers will have captured our wrapper.
         *
         * So it is important that entry points are unwrapped in the reverse
         * order that they were wrapped.
         *
         * @param {!Function} fn A function to unwrap.
         * @return {!Function} The unwrapped function, or {@code fn} if it was not
         *     a wrapped function created by this monitor.
         */
        unwrap: (fn: Function) => Function;
    }
}
declare namespace goog.debug.entryPointRegistry {
    /**
     * An array of entry point callbacks.
     * @type {!Array<function(!Function)>}
     * @private
     */
    var refList_: Array<(Function) => void>;
    /**
     * Monitors that should wrap all the entry points.
     * @type {!Array<!goog.debug.EntryPointMonitor>}
     * @private
     */
    var monitors_: Array<goog.debug.EntryPointMonitor>;
    /**
     * Whether goog.debug.entryPointRegistry.monitorAll has ever been called.
     * Checking this allows the compiler to optimize out the registrations.
     * @type {boolean}
     * @private
     */
    var monitorsMayExist_: boolean;
    /**
     * Register an entry point with this module.
     *
     * The entry point will be instrumented when a monitor is passed to
     * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
     * entry point is instrumented immediately.
     *
     * @param {function(!Function)} callback A callback function which is called
     *     with a transforming function to instrument the entry point. The callback
     *     is responsible for wrapping the relevant entry point with the
     *     transforming function.
     */
    function register(callback: (arg0: Function) => void): void;
    /**
     * Configures a monitor to wrap all entry points.
     *
     * Entry points that have already been registered are immediately wrapped by
     * the monitor. When an entry point is registered in the future, it will also
     * be wrapped by the monitor when it is registered.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
     */
    function monitorAll(monitor: goog.debug.EntryPointMonitor): void;
    /**
     * Try to unmonitor all the entry points that have already been registered. If
     * an entry point is registered in the future, it will not be wrapped by the
     * monitor when it is registered. Note that this may fail if the entry points
     * have additional wrapping.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
     *     the entry points.
     * @throws {Error} If the monitor is not the most recently configured monitor.
     */
    function unmonitorAllIfPossible(monitor: goog.debug.EntryPointMonitor): void;
}
declare namespace goog.events {
    class EventId {
        id: any;
        /**
         * A templated class that is used when registering for events. Typical usage:
         *
         *    /** @type {goog.events.EventId<MyEventObj>} *\
         *    var myEventId = new goog.events.EventId(
         *        goog.events.getUniqueId(('someEvent'));
         *
         *    // No need to cast or declare here since the compiler knows the
         *    // correct type of 'evt' (MyEventObj).
         *    something.listen(myEventId, function(evt) {});
         *
         * @param {string} eventId
         * @template T
         * @constructor
         * @struct
         * @final
         */
        constructor(eventId: string);
        /**
         * @override
         */
        toString(): any;
    }
}
declare namespace goog.events {
    /**
     * A typedef for event like objects that are dispatchable via the
     * goog.events.dispatchEvent function. strings are treated as the type for a
     * goog.events.Event. Objects are treated as an extension of a new
     * goog.events.Event with the type property of the object being used as the type
     * of the Event.
     * @typedef {string|Object|goog.events.Event|goog.events.EventId}
     */
    type EventLike = string | Object | goog.events.Event | goog.events.EventId;
    class Event {
        type: string;
        target: Object | undefined;
        currentTarget: Object | undefined;
        propagationStopped_: boolean;
        defaultPrevented: boolean;
        returnValue_: boolean;
        /**
         * A base class for event objects, so that they can support preventDefault and
         * stopPropagation.
         *
         * @suppress {underscore} Several properties on this class are technically
         *     public, but referencing these properties outside this package is strongly
         *     discouraged.
         *
         * @param {string|!goog.events.EventId} type Event Type.
         * @param {Object=} opt_target Reference to the object that is the target of
         *     this event. It has to implement the {@code EventTarget} interface
         *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.
         * @constructor
         */
        constructor(type: any, opt_target?: any);
        /**
         * Stops event propagation.
         */
        stopPropagation(): void;
        /**
         * Prevents the default action, for example a link redirecting to a url.
         */
        preventDefault(): void;
    }
}
declare namespace goog.events {
    /**
     * Stops the propagation of the event. It is equivalent to
     * {@code e.stopPropagation()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function stopPropagation(e: any): void;
    /**
     * Prevents the default action. It is equivalent to
     * {@code e.preventDefault()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function preventDefault(e: any): void;
}
declare namespace goog.debug.errorcontext {
    /**
     * Adds key-value context to the error.
     * @param {!Error} err The error to add context to.
     * @param {string} contextKey Key for the context to be added.
     * @param {string} contextValue Value for the context to be added.
     */
    function addErrorContext(err: any, contextKey: any, contextValue: any): void;
    /**
     * @param {!Error} err The error to get context from.
     * @return {!Object<string, string>} The context of the provided error.
     */
    function getErrorContext(err: any): any;
    /** @private @const {string} */
    var CONTEXT_KEY_: string;
}
declare namespace goog.debug {
    var LOGGING_ENABLED: boolean;
    var FORCE_SLOPPY_STACKS: boolean;
    /**
     * Catches onerror events fired by windows and similar objects.
     * @param {function(Object)} logFunc The function to call with the error
     *    information.
     * @param {boolean=} opt_cancel Whether to stop the error from reaching the
     *    browser.
     * @param {Object=} opt_target Object that fires onerror events.
     */
    function catchErrors(logFunc: Function, opt_cancel?: boolean | undefined, opt_target?: object | undefined): void;
    /**
     * Creates a string representing an object and all its properties.
     * @param {Object|null|undefined} obj Object to expose.
     * @param {boolean=} opt_showFn Show the functions as well as the properties,
     *     default is false.
     * @return {string} The string representation of {@code obj}.
     */
    function expose(obj: object | null | undefined, opt_showFn?: boolean | undefined): string;
    /**
     * Creates a string representing a given primitive or object, and for an
     * object, all its properties and nested objects. NOTE: The output will include
     * Uids on all objects that were exposed. Any added Uids will be removed before
     * returning.
     * @param {*} obj Object to expose.
     * @param {boolean=} opt_showFn Also show properties that are functions (by
     *     default, functions are omitted).
     * @return {string} A string representation of {@code obj}.
     */
    function deepExpose(obj: any, opt_showFn?: boolean | undefined): string;
    /**
     * Recursively outputs a nested array as a string.
     * @param {Array<?>} arr The array.
     * @return {string} String representing nested array.
     */
    function exposeArray(arr: Array<any>): string;
    /**
     * Normalizes the error/exception object between browsers.
     * @param {*} err Raw error object.
     * @return {!{
     *    message: (?|undefined),
     *    name: (?|undefined),
     *    lineNumber: (?|undefined),
     *    fileName: (?|undefined),
     *    stack: (?|undefined)
     * }} Normalized error object.
     */
    function normalizeErrorObject(err: any): {};
    /**
     * Converts an object to an Error using the object's toString if it's not
     * already an Error, adds a stacktrace if there isn't one, and optionally adds
     * an extra message.
     * @param {*} err The original thrown error, object, or string.
     * @param {string=} opt_message  optional additional message to add to the
     *     error.
     * @return {!Error} If err is an Error, it is enhanced and returned. Otherwise,
     *     it is converted to an Error which is enhanced and returned.
     */
    function enhanceError(err: any, opt_message?: string | undefined): Error;
    /**
     * Converts an object to an Error using the object's toString if it's not
     * already an Error, adds a stacktrace if there isn't one, and optionally adds
     * context to the Error, which is reported by the closure error reporter.
     * @param {*} err The original thrown error, object, or string.
     * @param {!Object<string, string>=} opt_context Key-value context to add to the
     *     Error.
     * @return {!Error} If err is an Error, it is enhanced and returned. Otherwise,
     *     it is converted to an Error which is enhanced and returned.
     */
    function enhanceErrorWithContext(err: any, opt_context?: {
        [s: string]: string;
    } | undefined): Error;
    /**
     * Gets the current stack trace. Simple and iterative - doesn't worry about
     * catching circular references or getting the args.
     * @param {number=} opt_depth Optional maximum depth to trace back to.
     * @return {string} A string with the function names of all functions in the
     *     stack, separated by \n.
     * @suppress {es5Strict}
     */
    function getStacktraceSimple(opt_depth?: number | undefined): string;
    /**
     * Max length of stack to try and output
     * @type {number}
     */
    var MAX_STACK_DEPTH: number;
    /**
     * @param {Function} fn The function to start getting the trace from.
     * @return {?string}
     * @private
     */
    function getNativeStackTrace_(fn: Function): string | null;
    /**
     * Gets the current stack trace, either starting from the caller or starting
     * from a specified function that's currently on the call stack.
     * @param {?Function=} fn If provided, when collecting the stack trace all
     *     frames above the topmost call to this function, including that call,
     *     will be left out of the stack trace.
     * @return {string} Stack trace.
     * @suppress {es5Strict}
     */
    function getStacktrace(fn: (Function | undefined) | null): string;
    /**
     * Private helper for getStacktrace().
     * @param {?Function} fn If provided, when collecting the stack trace all
     *     frames above the topmost call to this function, including that call,
     *     will be left out of the stack trace.
     * @param {Array<!Function>} visited List of functions visited so far.
     * @return {string} Stack trace starting from function fn.
     * @suppress {es5Strict}
     * @private
     */
    function getStacktraceHelper_(fn: Function | null, visited: Array<Function>): string;
    /**
     * Set a custom function name resolver.
     * @param {function(Function): string} resolver Resolves functions to their
     *     names.
     */
    function setFunctionResolver(resolver: (arg0: Function) => string): void;
    /**
     * Gets a function name
     * @param {Function} fn Function to get name of.
     * @return {string} Function's name.
     */
    function getFunctionName(fn: any): string;
    /**
     * Makes whitespace visible by replacing it with printable characters.
     * This is useful in finding diffrences between the expected and the actual
     * output strings of a testcase.
     * @param {string} string whose whitespace needs to be made visible.
     * @return {string} string whose whitespace is made visible.
     */
    function makeWhitespaceVisible(string: string): string;
    /**
     * Returns the type of a value. If a constructor is passed, and a suitable
     * string cannot be found, 'unknown type name' will be returned.
     *
     * <p>Forked rather than moved from {@link goog.asserts.getType_}
     * to avoid adding a dependency to goog.asserts.
     * @param {*} value A constructor, object, or primitive.
     * @return {string} The best display name for the value, or 'unknown type name'.
     */
    function runtimeType(value: any): string;
    /**
     * Hash map for storing function names that have already been looked up.
     * @type {Object}
     * @private
     */
    var fnNameCache_: {};
    /**
     * Resolves functions to their names.  Resolved function names will be cached.
     * @type {function(Function):string}
     * @private
     */
    var fnNameResolver_: any;
    /**
     * Private internal function to support goog.debug.freeze.
     * @param {T} arg
     * @return {T}
     * @template T
     * @private
     */
    function freezeInternal_<T>(arg: T): T;
    /**
     * Freezes the given object, but only in debug mode (and in browsers that
     * support it).  Note that this is a shallow freeze, so for deeply nested
     * objects it must be called at every level to ensure deep immutability.
     * @param {T} arg
     * @return {T}
     * @template T
     */
    function freeze<T>(arg: T): T;
}
declare namespace goog.events {
    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    var BrowserFeature: {
        HAS_W3C_BUTTON: boolean;
        HAS_W3C_EVENT_SUPPORT: boolean;
        SET_KEY_CODE_TO_PREVENT_DEFAULT: boolean;
        HAS_NAVIGATOR_ONLINE_PROPERTY: boolean;
        HAS_HTML5_NETWORK_EVENT_SUPPORT: boolean;
        HTML5_NETWORK_EVENTS_FIRE_ON_BODY: boolean;
        TOUCH_ENABLED: boolean;
        POINTER_EVENTS: boolean;
        MSPOINTER_EVENTS: boolean;
        PASSIVE_EVENTS: any;
    };
}
/**
 * Tricks Closure Compiler into believing that a function is pure.  The compiler
 * assumes that any `valueOf` function is pure, without analyzing its contents.
 *
 * @param {function(): T} fn
 * @return {T}
 * @template T
 */
declare function purify(fn: any): any;
declare namespace goog.events {
    /**
     * Returns a prefixed event name for the current browser.
     * @param {string} eventName The name of the event.
     * @return {string} The prefixed event name.
     * @suppress {missingRequire|missingProvide}
     * @private
     */
    function getVendorPrefixedName_(eventName: any): any;
    /**
     * Constants for event names.
     * @enum {string}
     */
    const EventType: {
        CLICK: string;
        RIGHTCLICK: string;
        DBLCLICK: string;
        MOUSEDOWN: string;
        MOUSEUP: string;
        MOUSEOVER: string;
        MOUSEOUT: string;
        MOUSEMOVE: string;
        MOUSEENTER: string;
        MOUSELEAVE: string;
        SELECTIONCHANGE: string;
        SELECTSTART: string;
        WHEEL: string;
        KEYPRESS: string;
        KEYDOWN: string;
        KEYUP: string;
        BLUR: string;
        FOCUS: string;
        DEACTIVATE: string;
        FOCUSIN: string;
        FOCUSOUT: string;
        CHANGE: string;
        RESET: string;
        SELECT: string;
        SUBMIT: string;
        INPUT: string;
        PROPERTYCHANGE: string;
        DRAGSTART: string;
        DRAG: string;
        DRAGENTER: string;
        DRAGOVER: string;
        DRAGLEAVE: string;
        DROP: string;
        DRAGEND: string;
        TOUCHSTART: string;
        TOUCHMOVE: string;
        TOUCHEND: string;
        TOUCHCANCEL: string;
        BEFOREUNLOAD: string;
        CONSOLEMESSAGE: string;
        CONTEXTMENU: string;
        DEVICEMOTION: string;
        DEVICEORIENTATION: string;
        DOMCONTENTLOADED: string;
        ERROR: string;
        HELP: string;
        LOAD: string;
        LOSECAPTURE: string;
        ORIENTATIONCHANGE: string;
        READYSTATECHANGE: string;
        RESIZE: string;
        SCROLL: string;
        UNLOAD: string;
        CANPLAY: string;
        CANPLAYTHROUGH: string;
        DURATIONCHANGE: string;
        EMPTIED: string;
        ENDED: string;
        LOADEDDATA: string;
        LOADEDMETADATA: string;
        PAUSE: string;
        PLAY: string;
        PLAYING: string;
        RATECHANGE: string;
        SEEKED: string;
        SEEKING: string;
        STALLED: string;
        SUSPEND: string;
        TIMEUPDATE: string;
        VOLUMECHANGE: string;
        WAITING: string;
        SOURCEOPEN: string;
        SOURCEENDED: string;
        SOURCECLOSED: string;
        ABORT: string;
        UPDATE: string;
        UPDATESTART: string;
        UPDATEEND: string;
        HASHCHANGE: string;
        PAGEHIDE: string;
        PAGESHOW: string;
        POPSTATE: string;
        COPY: string;
        PASTE: string;
        CUT: string;
        BEFORECOPY: string;
        BEFORECUT: string;
        BEFOREPASTE: string;
        ONLINE: string;
        OFFLINE: string;
        MESSAGE: string;
        CONNECT: string;
        INSTALL: string;
        ACTIVATE: string;
        FETCH: string;
        FOREIGNFETCH: string;
        MESSAGEERROR: string;
        STATECHANGE: string;
        UPDATEFOUND: string;
        CONTROLLERCHANGE: string;
        ANIMATIONSTART: any;
        ANIMATIONEND: any;
        ANIMATIONITERATION: any;
        TRANSITIONEND: any;
        POINTERDOWN: string;
        POINTERUP: string;
        POINTERCANCEL: string;
        POINTERMOVE: string;
        POINTEROVER: string;
        POINTEROUT: string;
        POINTERENTER: string;
        POINTERLEAVE: string;
        GOTPOINTERCAPTURE: string;
        LOSTPOINTERCAPTURE: string;
        MSGESTURECHANGE: string;
        MSGESTUREEND: string;
        MSGESTUREHOLD: string;
        MSGESTURESTART: string;
        MSGESTURETAP: string;
        MSGOTPOINTERCAPTURE: string;
        MSINERTIASTART: string;
        MSLOSTPOINTERCAPTURE: string;
        MSPOINTERCANCEL: string;
        MSPOINTERDOWN: string;
        MSPOINTERENTER: string;
        MSPOINTERHOVER: string;
        MSPOINTERLEAVE: string;
        MSPOINTERMOVE: string;
        MSPOINTEROUT: string;
        MSPOINTEROVER: string;
        MSPOINTERUP: string;
        TEXT: string;
        TEXTINPUT: string;
        COMPOSITIONSTART: string;
        COMPOSITIONUPDATE: string;
        COMPOSITIONEND: string;
        BEFOREINPUT: string;
        EXIT: string;
        LOADABORT: string;
        LOADCOMMIT: string;
        LOADREDIRECT: string;
        LOADSTART: string;
        LOADSTOP: string;
        RESPONSIVE: string;
        SIZECHANGED: string;
        UNRESPONSIVE: string;
        VISIBILITYCHANGE: string;
        STORAGE: string;
        DOMSUBTREEMODIFIED: string;
        DOMNODEINSERTED: string;
        DOMNODEREMOVED: string;
        DOMNODEREMOVEDFROMDOCUMENT: string;
        DOMNODEINSERTEDINTODOCUMENT: string;
        DOMATTRMODIFIED: string;
        DOMCHARACTERDATAMODIFIED: string;
        BEFOREPRINT: string;
        AFTERPRINT: string;
        BEFOREINSTALLPROMPT: string;
        APPINSTALLED: string;
    };
    /**
     * Returns one of the given pointer fallback event names in order of preference:
     *   1. pointerEventName
     *   2. msPointerEventName
     *   3. mouseEventName
     * @param {string} pointerEventName
     * @param {string} msPointerEventName
     * @param {string} mouseEventName
     * @return {string} The supported pointer or mouse event name.
     * @private
     */
    function getPointerFallbackEventName_(pointerEventName: any, msPointerEventName: any, mouseEventName: any): any;
    /**
     * Constants for pointer event names that fall back to corresponding mouse event
     * names on unsupported platforms. These are intended to be drop-in replacements
     * for corresponding values in {@code goog.events.EventType}.
     * @enum {string}
     */
    const PointerFallbackEventType: {
        POINTERDOWN: any;
        POINTERUP: any;
        POINTERCANCEL: any;
        POINTERMOVE: any;
        POINTEROVER: any;
        POINTEROUT: any;
        POINTERENTER: any;
        POINTERLEAVE: any;
    };
}
declare namespace goog.events {
    class BrowserEvent extends goog.events.Event {
        target: Node;
        currentTarget: Node | undefined;
        relatedTarget: Node;
        offsetX: number;
        offsetY: number;
        clientX: number;
        clientY: number;
        screenX: number;
        screenY: number;
        button: number;
        key: string;
        keyCode: number;
        charCode: number;
        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
        metaKey: boolean;
        state: Object;
        platformModifierKey: boolean;
        pointerId: number;
        pointerType: string;
        event_: any;
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * The content of this object will not be initialized if no event object is
         * provided. If this is the case, init() needs to be invoked separately.
         * @param {Event=} opt_e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(opt_e: Event | undefined, opt_currentTarget: EventTarget | undefined);
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * @param {Event} e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         */
        init(e: any, opt_currentTarget: any): void;
        /**
         * Tests to see which button was pressed during the event. This is really only
         * useful in IE and Gecko browsers. And in IE, it's only useful for
         * mousedown/mouseup events, because click only fires for the left mouse button.
         *
         * Safari 2 only reports the left button being clicked, and uses the value '1'
         * instead of 0. Opera only reports a mousedown event for the middle button, and
         * no mouse events for the right button. Opera has default behavior for left and
         * middle click that can only be overridden via a configuration setting.
         *
         * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
         *
         * @param {goog.events.BrowserEvent.MouseButton} button The button
         *     to test for.
         * @return {boolean} True if button was pressed.
         */
        isButton(button: any): boolean;
        /**
         * Whether this has an "action"-producing mouse button.
         *
         * By definition, this includes left-click on windows/linux, and left-click
         * without the ctrl key on Macs.
         *
         * @return {boolean} The result.
         */
        isMouseActionButton(): boolean;
        /**
         * @override
         */
        stopPropagation(): void;
        /**
         * @override
         */
        preventDefault(): void;
        /**
         * @return {Event} The underlying browser event object.
         */
        getBrowserEvent(): any;
    }
}
declare namespace goog.events.BrowserEvent {
    /**
     * Normalized button constants for the mouse.
     * @enum {number}
     */
    enum MouseButton {
        LEFT = 0,
        MIDDLE = 1,
        RIGHT = 2,
    }
    /**
     * Normalized pointer type constants for pointer events.
     * @enum {string}
     */
    enum PointerType {
        MOUSE = "mouse",
        PEN = "pen",
        TOUCH = "touch",
    }
    /**
     * Static data for mapping mouse buttons.
     * @type {!Array<number>}
     * @deprecated Use {@code goog.events.BrowserEvent.IE_BUTTON_MAP} instead.
     */
    var IEButtonMap: number[];
    /**
     * Static data for mapping mouse buttons.
     * @const {!Array<number>}
     */
    var IE_BUTTON_MAP: number[];
    /**
     * Static data for mapping MSPointerEvent types to PointerEvent types.
     * @const {!Object<number, goog.events.BrowserEvent.PointerType>}
     */
    const IE_POINTER_TYPE_MAP: {
        2: PointerType;
        3: PointerType;
        4: PointerType;
    };
    /**
     * Extracts the pointer type from the given event.
     * @param {!Event} e
     * @return {string} The pointer type, e.g. 'mouse', 'pen', or 'touch'.
     * @private
     */
    function getPointerType_(e: any): any;
}
declare namespace goog.events {
    /**
     * A listenable interface. A listenable is an object with the ability
     * to dispatch/broadcast events to "event listeners" registered via
     * listen/listenOnce.
     *
     * The interface allows for an event propagation mechanism similar
     * to one offered by native browser event targets, such as
     * capture/bubble mechanism, stopping propagation, and preventing
     * default actions. Capture/bubble mechanism depends on the ancestor
     * tree constructed via {@code #getParentEventTarget}; this tree
     * must be directed acyclic graph. The meaning of default action(s)
     * in preventDefault is specific to a particular use case.
     *
     * Implementations that do not support capture/bubble or can not have
     * a parent listenable can simply not implement any ability to set the
     * parent listenable (and have {@code #getParentEventTarget} return
     * null).
     *
     * Implementation of this class can be used with or independently from
     * goog.events.
     *
     * Implementation must call {@code #addImplementation(implClass)}.
     *
     * @interface
     * @see goog.events
     * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html
     */
    interface Listenable {
        /**
         * Adds an event listener. A listener can only be added once to an
         * object and if it is added again the key for the listener is
         * returned. Note that if the existing listener is a one-off listener
         * (registered via listenOnce), it will no longer be a one-off
         * listener after a call to listen().
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {!goog.events.ListenableKey} Unique key for the listener.
         * @template SCOPE,EVENTOBJ
         */
        listen: (type, listener, opt_useCapture?, opt_listenerScope?) => goog.events.ListenableKey;
        /**
         * Adds an event listener that is removed automatically after the
         * listener fired once.
         *
         * If an existing listener already exists, listenOnce will do
         * nothing. In particular, if the listener was previously registered
         * via listen(), listenOnce() will not turn the listener into a
         * one-off listener. Similarly, if there is already an existing
         * one-off listener, listenOnce does not modify the listeners (it is
         * still a once listener).
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {!goog.events.ListenableKey} Unique key for the listener.
         * @template SCOPE,EVENTOBJ
         */
        listenOnce: (type, listener, opt_useCapture?, opt_listenerScope?) => goog.events.ListenableKey;
        /**
         * Removes an event listener which was added with listen() or listenOnce().
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call
         *     the listener.
         * @return {boolean} Whether any listener was removed.
         * @template SCOPE,EVENTOBJ
         */
        unlisten: (type, listener, opt_useCapture?, opt_listenerScope?) => boolean;
        /**
         * Removes an event listener which was added with listen() by the key
         * returned by listen().
         *
         * @param {!goog.events.ListenableKey} key The key returned by
         *     listen() or listenOnce().
         * @return {boolean} Whether any listener was removed.
         */
        unlistenByKey: (key) => boolean;
        /**
         * Dispatches an event (or event like object) and calls all listeners
         * listening for events of this type. The type of the event is decided by the
         * type property on the event object.
         *
         * If any of the listeners returns false OR calls preventDefault then this
         * function will return false.  If one of the capture listeners calls
         * stopPropagation, then the bubble listeners won't fire.
         *
         * @param {goog.events.EventLike} e Event object.
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the listeners returns false) this will also return false.
         */
        dispatchEvent: (e) => boolean;
        /**
         * Removes all listeners from this listenable. If type is specified,
         * it will only remove listeners of the particular type. otherwise all
         * registered listeners will be removed.
         *
         * @param {string=} opt_type Type of event to remove, default is to
         *     remove all types.
         * @return {number} Number of listeners removed.
         */
        removeAllListeners: (opt_type?) => number;
        /**
         * Returns the parent of this event target to use for capture/bubble
         * mechanism.
         *
         * NOTE(chrishenry): The name reflects the original implementation of
         * custom event target ({@code goog.events.EventTarget}). We decided
         * that changing the name is not worth it.
         *
         * @return {goog.events.Listenable} The parent EventTarget or null if
         *     there is no parent.
         */
        getParentEventTarget: () => goog.events.Listenable;
        /**
         * Fires all registered listeners in this listenable for the given
         * type and capture mode, passing them the given eventObject. This
         * does not perform actual capture/bubble. Only implementors of the
         * interface should be using this.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the
         *     listeners to fire.
         * @param {boolean} capture The capture mode of the listeners to fire.
         * @param {EVENTOBJ} eventObject The event object to fire.
         * @return {boolean} Whether all listeners succeeded without
         *     attempting to prevent default behavior. If any listener returns
         *     false or called goog.events.Event#preventDefault, this returns
         *     false.
         * @template EVENTOBJ
         */
        fireListeners: (type, capture, eventObject) => boolean;
        /**
         * Gets all listeners in this listenable for the given type and
         * capture mode.
         *
         * @param {string|!goog.events.EventId} type The type of the listeners to fire.
         * @param {boolean} capture The capture mode of the listeners to fire.
         * @return {!Array<!goog.events.ListenableKey>} An array of registered
         *     listeners.
         * @template EVENTOBJ
         */
        getListeners: (type, capture) => Array<goog.events.ListenableKey>;
        /**
         * Gets the goog.events.ListenableKey for the event or null if no such
         * listener is in use.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event
         *     without the 'on' prefix.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The
         *     listener function to get.
         * @param {boolean} capture Whether the listener is a capturing listener.
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} the found listener or null if not found.
         * @template SCOPE,EVENTOBJ
         */
        getListener: (type, listener, capture, opt_listenerScope?) => goog.events.ListenableKey;
        /**
         * Whether there is any active listeners matching the specified
         * signature. If either the type or capture parameters are
         * unspecified, the function will match on the remaining criteria.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.
         * @param {boolean=} opt_capture Whether to check for capture or bubble
         *     listeners.
         * @return {boolean} Whether there is any active listeners matching
         *     the requested type and/or capture phase.
         * @template EVENTOBJ
         */
        hasListener: (opt_type?, opt_capture?) => boolean;
    }
    /**
     * An interface that describes a single registered listener.
     * @interface
     */
    interface ListenableKey {
        /**
         * The source event target.
         * @type {Object|goog.events.Listenable|goog.events.EventTarget}
         */
        src: object | goog.events.Listenable | goog.events.EventTarget;
        /**
         * The event type the listener is listening to.
         * @type {string}
         */
        type: string;
        /**
         * The listener function.
         * @type {function(?):?|{handleEvent:function(?):?}|null}
         */
        listener: (arg0: any) => any | {
            handleEvent: (any) => any;
        } | null;
        /**
         * Whether the listener works on capture phase.
         * @type {boolean}
         */
        capture: boolean;
        /**
         * The 'this' object for the listener function's scope.
         * @type {Object|undefined}
         */
        handler: object | undefined;
        /**
         * A globally unique number to identify the key.
         * @type {number}
         */
        key: number;
    }
}
declare namespace goog.events.Listenable {
    /**
     * An expando property to indicate that an object implements
     * goog.events.Listenable.
     *
     * See addImplementation/isImplementedBy.
     *
     * @type {string}
     * @const
     */
    var IMPLEMENTED_BY_PROP: string;
    /**
     * Marks a given class (constructor) as an implementation of
     * Listenable, do that we can query that fact at runtime. The class
     * must have already implemented the interface.
     * @param {!function(new:goog.events.Listenable,...)} cls The class constructor.
     *     The corresponding class must have already implemented the interface.
     */
    function addImplementation(cls: any): void;
    /**
     * @param {Object} obj The object to check.
     * @return {boolean} Whether a given instance implements Listenable. The
     *     class/superclass of the instance must call addImplementation.
     */
    function isImplementedBy(obj: object): boolean;
}
declare namespace goog.events.ListenableKey {
    /**
     * Counter used to create a unique key
     * @type {number}
     * @private
     */
    var counter_: number;
    /**
     * Reserves a key to be used for ListenableKey#key field.
     * @return {number} A number to be used to fill ListenableKey#key
     *     field.
     */
    function reserveKey(): number;
}
declare namespace goog.events {
    class Listener {
        listener: any;
        proxy: Function;
        src: EventTarget | goog.events.Listenable;
        type: string;
        capture: boolean;
        handler: object | undefined;
        key: number;
        callOnce: boolean;
        removed: boolean;
        /**
         * Simple class that stores information about a listener
         * @param {function(?):?} listener Callback function.
         * @param {Function} proxy Wrapper for the listener that patches the event.
         * @param {EventTarget|goog.events.Listenable} src Source object for
         *     the event.
         * @param {string} type Event type.
         * @param {boolean} capture Whether in capture or bubble phase.
         * @param {Object=} opt_handler Object in whose context to execute the callback.
         * @implements {goog.events.ListenableKey}
         * @constructor
         */
        constructor(listener: Function, proxy: Function, src: EventTarget | goog.events.Listenable, type: string, capture: boolean, opt_handler?: object | undefined);
        /**
         * If monitoring the goog.events.Listener instances is enabled, stores the
         * creation stack trace of the Disposable instance.
         * @type {string}
         */
        creationStack: string;
        /**
         * Marks this listener as removed. This also remove references held by
         * this listener object (such as listener and event source).
         */
        markAsRemoved(): void;
    }
}
declare namespace goog.events.Listener {
    var ENABLE_MONITORING: boolean;
}
declare namespace goog.events {
    class ListenerMap {
        src: EventTarget | goog.events.Listenable;
        listeners: {
            [index: string]: Array<goog.events.Listener>;
        };
        typeCount_: number;
        /**
         * Creates a new listener map.
         * @param {EventTarget|goog.events.Listenable} src The src object.
         * @constructor
         * @final
         */
        constructor(src: any);
        /**
         * @return {number} The count of event types in this map that actually
         *     have registered listeners.
         */
        getTypeCount(): number;
        /**
         * @return {number} Total number of registered listeners.
         */
        getListenerCount(): number;
        /**
         * Adds an event listener. A listener can only be added once to an
         * object and if it is added again the key for the listener is
         * returned.
         *
         * Note that a one-off listener will not change an existing listener,
         * if any. On the other hand a normal listener will change existing
         * one-off listener to become a normal listener.
         *
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean} callOnce Whether the listener is a one-off
         *     listener.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {!goog.events.ListenableKey} Unique key for the listener.
         */
        add(type: string | goog.events.EventId, listener: Function, callOnce: boolean, opt_useCapture?: boolean | undefined, opt_listenerScope?: object | undefined): goog.events.ListenableKey;
        /**
         * Removes a matching listener.
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {boolean} Whether any listener was removed.
         */
        remove(type: string | goog.events.EventId, listener: Function, opt_useCapture?: boolean | undefined, opt_listenerScope?: object | undefined): boolean;
        /**
         * Removes the given listener object.
         * @param {!goog.events.ListenableKey} listener The listener to remove.
         * @return {boolean} Whether the listener is removed.
         */
        removeByKey(listener: goog.events.ListenableKey): boolean;
        /**
         * Removes all listeners from this map. If opt_type is provided, only
         * listeners that match the given type are removed.
         * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
         * @return {number} Number of listeners removed.
         */
        removeAll(opt_type?: string | (goog.events.EventId | undefined)): number;
        /**
         * Gets all listeners that match the given type and capture mode. The
         * returned array is a copy (but the listener objects are not).
         * @param {string|!goog.events.EventId} type The type of the listeners
         *     to retrieve.
         * @param {boolean} capture The capture mode of the listeners to retrieve.
         * @return {!Array<!goog.events.ListenableKey>} An array of matching
         *     listeners.
         */
        getListeners(type: string | goog.events.EventId, capture: boolean): Array<goog.events.ListenableKey>;
        /**
         * Gets the goog.events.ListenableKey for the event or null if no such
         * listener is in use.
         *
         * @param {string|!goog.events.EventId} type The type of the listener
         *     to retrieve.
         * @param {!Function} listener The listener function to get.
         * @param {boolean} capture Whether the listener is a capturing listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} the found listener or null if not found.
         */
        getListener(type: string | goog.events.EventId, listener: Function, capture: boolean, opt_listenerScope?: object | undefined): goog.events.ListenableKey;
        /**
         * Whether there is a matching listener. If either the type or capture
         * parameters are unspecified, the function will match on the
         * remaining criteria.
         *
         * @param {string|!goog.events.EventId=} opt_type The type of the listener.
         * @param {boolean=} opt_capture The capture mode of the listener.
         * @return {boolean} Whether there is an active listener matching
         *     the requested type and/or capture phase.
         */
        hasListener(opt_type?: string | (goog.events.EventId | undefined), opt_capture?: boolean | undefined): boolean;
    }
}
declare namespace goog.events.ListenerMap {
    /**
     * Finds the index of a matching goog.events.Listener in the given
     * listenerArray.
     * @param {!Array<!goog.events.Listener>} listenerArray Array of listener.
     * @param {!Function} listener The listener function.
     * @param {boolean=} opt_useCapture The capture flag for the listener.
     * @param {Object=} opt_listenerScope The listener scope.
     * @return {number} The index of the matching listener within the
     *     listenerArray.
     * @private
     */
    function findListenerIndex_(listenerArray: Array<goog.events.Listener>, listener: Function, opt_useCapture: boolean | undefined, opt_listenerScope: object | undefined): number;
}
declare namespace goog.debug {
    class LogRecord {
        /**
         * LogRecord objects are used to pass logging requests between
         * the logging framework and individual log Handlers.
         * @constructor
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @param {number=} opt_time Time this log record was created if other than now.
         *     If 0, we use #goog.now.
         * @param {number=} opt_sequenceNumber Sequence number of this log record. This
         *     should only be passed in when restoring a log record from persistence.
         */
        constructor(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined);
        /**
         * Time the LogRecord was created.
         * @type {number}
         * @private
         */
        private time_;
        /**
         * Level of the LogRecord
         * @type {goog.debug.Logger.Level}
         * @private
         */
        private level_;
        /**
         * Message associated with the record
         * @type {string}
         * @private
         */
        private msg_;
        /**
         * Name of the logger that created the record.
         * @type {string}
         * @private
         */
        private loggerName_;
        /**
         * Sequence number for the LogRecord. Each record has a unique sequence number
         * that is greater than all log records created before it.
         * @type {number}
         * @private
         */
        private sequenceNumber_;
        /**
         * Exception associated with the record
         * @type {Object}
         * @private
         */
        private exception_;
        /**
         * A sequence counter for assigning increasing sequence numbers to LogRecord
         * objects.
         * @type {number}
         * @private
         */
        static nextSequenceNumber_: number;
        /**
         * Sets all fields of the log record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @param {number=} opt_time Time this log record was created if other than now.
         *     If 0, we use #goog.now.
         * @param {number=} opt_sequenceNumber Sequence number of this log record. This
         *     should only be passed in when restoring a log record from persistence.
         */
        reset(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined): void;
        /**
         * Get the source Logger's name.
         *
         * @return {string} source logger name (may be null).
         */
        getLoggerName(): string;
        /**
         * Get the exception that is part of the log record.
         *
         * @return {Object} the exception.
         */
        getException(): object;
        /**
         * Set the exception that is part of the log record.
         *
         * @param {Object} exception the exception.
         */
        setException(exception: object): void;
        /**
         * Get the source Logger's name.
         *
         * @param {string} loggerName source logger name (may be null).
         */
        setLoggerName(loggerName: string): void;
        /**
         * Get the logging message level, for example Level.SEVERE.
         * @return {goog.debug.Logger.Level} the logging message level.
         */
        getLevel(): goog.debug.Logger.Level;
        /**
         * Set the logging message level, for example Level.SEVERE.
         * @param {goog.debug.Logger.Level} level the logging message level.
         */
        setLevel(level: goog.debug.Logger.Level): void;
        /**
         * Get the "raw" log message, before localization or formatting.
         *
         * @return {string} the raw message string.
         */
        getMessage(): string;
        /**
         * Set the "raw" log message, before localization or formatting.
         *
         * @param {string} msg the raw message string.
         */
        setMessage(msg: string): void;
        /**
         * Get event time in milliseconds since 1970.
         *
         * @return {number} event time in millis since 1970.
         */
        getMillis(): number;
        /**
         * Set event time in milliseconds since 1970.
         *
         * @param {number} time event time in millis since 1970.
         */
        setMillis(time: number): void;
        /**
         * Get the sequence number.
         * <p>
         * Sequence numbers are normally assigned in the LogRecord
         * constructor, which assigns unique sequence numbers to
         * each new LogRecord in increasing order.
         * @return {number} the sequence number.
         */
        getSequenceNumber(): number;
    }
}
declare namespace goog.debug.LogRecord {
    var ENABLE_SEQUENCE_NUMBERS: boolean;
}
declare namespace goog.debug {
    class LogBuffer {
        /**
         * Creates the log buffer.
         * @constructor
         * @final
         */
        constructor();
        /**
         * A static method that always returns the same instance of LogBuffer.
         * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
         */
        static getInstance(): any;
        /**
         * The array to store the records.
         * @type {!Array<!goog.debug.LogRecord|undefined>}
         * @private
         */
        private buffer_;
        /**
         * The index of the most recently added record or -1 if there are no records.
         * @type {number}
         * @private
         */
        private curIndex_;
        /**
         * Whether the buffer is at capacity.
         * @type {boolean}
         * @private
         */
        private isFull_;
        /**
         * Adds a log record to the buffer, possibly overwriting the oldest record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @return {!goog.debug.LogRecord} The log record.
         */
        addRecord(level: any, msg: any, loggerName: any): any;
        /**
         * @return {boolean} Whether the log buffer is enabled.
         */
        static isBufferingEnabled(): boolean;
        /**
         * Removes all buffered log records.
         */
        clear(): void;
        /**
         * Calls the given function for each buffered log record, starting with the
         * oldest one.
         * @param {function(!goog.debug.LogRecord)} func The function to call.
         */
        forEachRecord(func: any): void;
    }
}
declare namespace goog.debug.LogBuffer {
    var CAPACITY: number;
    var instance_: any;
}
declare namespace goog.debug {
    /**
     * A message value that can be handled by a Logger.
     *
     * Functions are treated like callbacks, but are only called when the event's
     * log level is enabled. This is useful for logging messages that are expensive
     * to construct.
     *
     * @typedef {string|function(): string}
     */
    type Loggable = string | Function;
}
declare namespace goog.debug {
    /**
     * The Logger is an object used for logging debug messages. Loggers are
     * normally named, using a hierarchical dot-separated namespace. Logger names
     * can be arbitrary strings, but they should normally be based on the package
     * name or class name of the logged component, such as goog.net.BrowserChannel.
     *
     * The Logger object is loosely based on the java class
     * java.util.logging.Logger. It supports different levels of filtering for
     * different loggers.
     *
     * The logger object should never be instantiated by application code. It
     * should always use the goog.debug.Logger.getLogger function.
     *
  
     */
    class Logger {
        name_: string;
        parent_: goog.debug.Logger;
        level_: goog.debug.Logger.Level;
        children_: Object;
        handlers_: Array<Function>;
        /**
         *
         * @constructor
         * @param {string} name The name of the Logger.
         * @final
         */
        constructor(name: any);
        /**
             * Finds or creates a logger for a named subsystem. If a logger has already been
             * created with the given name it is returned. Otherwise a new logger is
             * created. If a new logger is created its log level will be configured based
             * on the LogManager configuration and it will configured to also send logging
             * output to its parent's handlers. It will be registered in the LogManager
             * global namespace.
             *
             * @param {string} name A name for the logger. This should be a dot-separated
             * name and should normally be based on the package name or class name of the
             * subsystem, such as goog.net.BrowserChannel.
             * @return {!goog.debug.Logger} The named logger.
             * @deprecated use {@link goog.log} instead.
             */
        static getLogger(name: any): any;
        /**
         * Logs a message to profiling tools, if available.
         * {@see https://developers.google.com/web-toolkit/speedtracer/logging-api}
         * {@see http://msdn.microsoft.com/en-us/library/dd433074(VS.85).aspx}
         * @param {string} msg The message to log.
         */
        static logToProfilers(msg: any): void;
        /**
         * Gets the name of this logger.
         * @return {string} The name of this logger.
         */
        getName(): string;
        /**
         * Adds a handler to the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to add.
         */
        addHandler(handler: any): void;
        /**
         * Removes a handler from the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to remove.
         * @return {boolean} Whether the handler was removed.
         */
        removeHandler(handler: any): boolean;
        /**
         * Returns the parent of this logger.
         * @return {goog.debug.Logger} The parent logger or null if this is the root.
         */
        getParent(): Logger;
        /**
         * Returns the children of this logger as a map of the child name to the logger.
         * @return {!Object} The map where the keys are the child leaf names and the
         *     values are the Logger objects.
         */
        getChildren(): Object;
        /**
         * Set the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the new level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @param {goog.debug.Logger.Level} level The new level.
         */
        setLevel(level: any): void;
        /**
         * Gets the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @return {goog.debug.Logger.Level} The level.
         */
        getLevel(): Logger.Level;
        /**
         * Returns the effective level of the logger based on its ancestors' levels.
         * @return {goog.debug.Logger.Level} The level.
         */
        getEffectiveLevel(): any;
        /**
         * Checks if a message of the given level would actually be logged by this
         * logger. This check is based on the Loggers effective level, which may be
         * inherited from its parent.
         * @param {goog.debug.Logger.Level} level The level to check.
         * @return {boolean} Whether the message would be logged.
         */
        isLoggable(level: any): boolean;
        /**
         * Logs a message. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         */
        log(level: any, msg: any, opt_exception: any): void;
        /**
         * Creates a new log record and adds the exception (if present) to it.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         * @return {!goog.debug.LogRecord} A log record.
         * @suppress {es5Strict}
         */
        getLogRecord(level: any, msg: any, opt_exception: any): any;
        /**
         * Logs a message at the Logger.Level.SHOUT level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        shout(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.SEVERE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        severe(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.WARNING level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        warning(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.INFO level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        info(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.CONFIG level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        config(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        fine(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINER level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finer(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINEST level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finest(msg: any, opt_exception: any): void;
        /**
         * Logs a LogRecord. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.LogRecord} logRecord A log record to log.
         */
        logRecord(logRecord: any): void;
        /**
         * Logs a LogRecord.
         * @param {goog.debug.LogRecord} logRecord A log record to log.
         * @private
         */
        doLogRecord_(logRecord: any): void;
        /**
         * Calls the handlers for publish.
         * @param {goog.debug.LogRecord} logRecord The log record to publish.
         * @private
         */
        callPublish_(logRecord: any): void;
        /**
         * Sets the parent of this logger. This is used for setting up the logger tree.
         * @param {goog.debug.Logger} parent The parent logger.
         * @private
         */
        setParent_(parent: any): void;
        /**
         * Adds a child to this logger. This is used for setting up the logger tree.
         * @param {string} name The leaf name of the child.
         * @param {goog.debug.Logger} logger The child logger.
         * @private
         */
        addChild_(name: any, logger: any): void;
    }
}
declare namespace goog.debug.Logger {
    /** @const */
    const ROOT_LOGGER_NAME = "";
    var ENABLE_HIERARCHY: boolean;
    var ENABLE_PROFILER_LOGGING: boolean;
    /**
     * @type {!Array<Function>}
     * @private
     */
    var rootHandlers_: any[];
    /**
     * @type {goog.debug.Logger.Level}
     * @private
     */
    var rootLevel_: any;
}
declare namespace goog.debug.Logger {
    /**
     * The Level class defines a set of standard logging levels that
     * can be used to control logging output.  The logging Level objects
     * are ordered and are specified by ordered integers.  Enabling logging
     * at a given level also enables logging at all higher levels.
     * <p>
     * Clients should normally use the predefined Level constants such
     * as Level.SEVERE.
     * <p>
     * The levels in descending order are:
     * <ul>
     * <li>SEVERE (highest value)
     * <li>WARNING
     * <li>INFO
     * <li>CONFIG
     * <li>FINE
     * <li>FINER
     * <li>FINEST  (lowest value)
     * </ul>
     * In addition there is a level OFF that can be used to turn
     * off logging, and a level ALL that can be used to enable
     * logging of all messages.
     *
  
     */
    class Level {
        name: string;
        value: number;
        /**
         *
         * @param {string} name The name of the level.
         * @param {number} value The numeric value of the level.
         * @constructor
         * @final
         */
        constructor(name: any, value: any);
        /**
         * @return {string} String representation of the logger level.
         * @override
         */
        toString: () => any;
        /**
         * Creates the predefined levels cache and populates it.
         * @private
         */
        static createPredefinedLevelsCache_(): void;
        /**
         * Gets the predefined level with the given name.
         * @param {string} name The name of the level.
         * @return {goog.debug.Logger.Level} The level, or null if none found.
         */
        static getPredefinedLevel(name: any): any;
        /**
         * Gets the highest predefined level <= #value.
         * @param {number} value Level value.
         * @return {goog.debug.Logger.Level} The level, or null if none found.
         */
        static getPredefinedLevelByValue(value: any): any;
    }
}
declare namespace goog.debug.Logger.Level {
    /**
     * OFF is a special level that can be used to turn off logging.
     * This level is initialized to <CODE>Infinity</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var OFF: Level;
    /**
     * SHOUT is a message level for extra debugging loudness.
     * This level is initialized to <CODE>1200</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SHOUT: Level;
    /**
     * SEVERE is a message level indicating a serious failure.
     * This level is initialized to <CODE>1000</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SEVERE: Level;
    /**
     * WARNING is a message level indicating a potential problem.
     * This level is initialized to <CODE>900</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var WARNING: Level;
    /**
     * INFO is a message level for informational messages.
     * This level is initialized to <CODE>800</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var INFO: Level;
    /**
     * CONFIG is a message level for static configuration messages.
     * This level is initialized to <CODE>700</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var CONFIG: Level;
    /**
     * FINE is a message level providing tracing information.
     * This level is initialized to <CODE>500</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINE: Level;
    /**
     * FINER indicates a fairly detailed tracing message.
     * This level is initialized to <CODE>400</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINER: Level;
    /**
     * FINEST indicates a highly detailed tracing message.
     * This level is initialized to <CODE>300</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINEST: Level;
    /**
     * ALL indicates that all messages should be logged.
     * This level is initialized to <CODE>0</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var ALL: Level;
    /**
     * The predefined levels.
     * @type {!Array<!goog.debug.Logger.Level>}
     * @final
     */
    var PREDEFINED_LEVELS: Level[];
    /**
     * A lookup map used to find the level object based on the name or value of
     * the level object.
     * @type {Object}
     * @private
     */
    var predefinedLevelsCache_: any;
}
declare namespace goog.debug {
}
declare namespace goog.debug.LogManager {
    /**
     * Map of logger names to logger objects.
     *
     * @type {!Object<string, !goog.debug.Logger>}
     * @private
     */
    var loggers_: {};
    /**
     * The root logger which is the root of the logger tree.
     * @type {goog.debug.Logger}
     * @private
     */
    var rootLogger_: any;
    /**
     * Initializes the LogManager if not already initialized.
     */
    function initialize(): void;
    /**
     * Returns all the loggers.
     * @return {!Object<string, !goog.debug.Logger>} Map of logger names to logger
     *     objects.
     */
    function getLoggers(): {};
    /**
     * Returns the root of the logger tree namespace, the logger with the empty
     * string as its name.
     *
     * @return {!goog.debug.Logger} The root logger.
     */
    function getRoot(): any;
    /**
     * Finds a named logger.
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     * name and should normally be based on the package name or class name of the
     * subsystem, such as goog.net.BrowserChannel.
     * @return {!goog.debug.Logger} The named logger.
     */
    function getLogger(name: any): any;
    /**
     * Creates a function that can be passed to goog.debug.catchErrors. The function
     * will log all reported errors using the given logger.
     * @param {goog.debug.Logger=} opt_logger The logger to log the errors to.
     *     Defaults to the root logger.
     * @return {function(Object)} The created function.
     */
    function createFunctionForCatchErrors(opt_logger: any): (info: any) => void;
    /**
     * Creates the named logger. Will also create the parents of the named logger
     * if they don't yet exist.
     * @param {string} name The name of the logger.
     * @return {!goog.debug.Logger} The named logger.
     * @private
     */
    function createLogger_(name: any): Logger;
}
declare namespace goog.functions {
    /**
     * Creates a function that always returns the same value.
     * @param {T} retValue The value to return.
     * @return {function():T} The new function.
     * @template T
     */
    function constant<T>(retValue: T): () => T;
    /**
     * Always returns false.
     * @type {function(...): boolean}
     */
    var FALSE: () => boolean;
    /**
     * Always returns true.
     * @type {function(...): boolean}
     */
    var TRUE: () => boolean;
    /**
     * Always returns NULL.
     * @type {function(...): null}
     */
    var NULL: () => any;
    /**
     * A simple function that returns the first argument of whatever is passed
     * into it.
     * @param {T=} opt_returnValue The single value that will be returned.
     * @param {...*} var_args Optional trailing arguments. These are ignored.
     * @return {T} The first argument passed in, or undefined if nothing was passed.
     * @template T
     */
    function identity<T>(opt_returnValue?: T | undefined, ...var_args: any[]): T;
    /**
     * Creates a function that always throws an error with the given message.
     * @param {string} message The error message.
     * @return {!Function} The error-throwing function.
     */
    function error(message: string): Function;
    /**
     * Creates a function that throws the given object.
     * @param {*} err An object to be thrown.
     * @return {!Function} The error-throwing function.
     */
    function fail(err: any): Function;
    /**
     * Given a function, create a function that keeps opt_numArgs arguments and
     * silently discards all additional arguments.
     * @param {Function} f The original function.
     * @param {number=} opt_numArgs The number of arguments to keep. Defaults to 0.
     * @return {!Function} A version of f that only keeps the first opt_numArgs
     *     arguments.
     */
    function lock(f: Function, opt_numArgs?: number | undefined): Function;
    /**
     * Creates a function that returns its nth argument.
     * @param {number} n The position of the return argument.
     * @return {!Function} A new function.
     */
    function nth(n: number): Function;
    /**
     * Like goog.partial(), except that arguments are added after arguments to the
     * returned function.
     *
     * Usage:
     * function f(arg1, arg2, arg3, arg4) { ... }
     * var g = goog.functions.partialRight(f, arg3, arg4);
     * g(arg1, arg2);
     *
     * @param {!Function} fn A function to partially apply.
     * @param {...*} var_args Additional arguments that are partially applied to fn
     *     at the end.
     * @return {!Function} A partially-applied form of the function goog.partial()
     *     was invoked as a method of.
     */
    function partialRight(fn: Function, ...var_args: any[]): Function;
    /**
     * Given a function, create a new function that swallows its return value
     * and replaces it with a new one.
     * @param {Function} f A function.
     * @param {T} retValue A new return value.
     * @return {function(...?):T} A new function.
     * @template T
     */
    function withReturnValue<T>(f: Function, retValue: T): (...rest: any[]) => T;
    /**
     * Creates a function that returns whether its argument equals the given value.
     *
     * Example:
     * var key = goog.object.findKey(obj, goog.functions.equalTo('needle'));
     *
     * @param {*} value The value to compare to.
     * @param {boolean=} opt_useLooseComparison Whether to use a loose (==)
     *     comparison rather than a strict (===) one. Defaults to false.
     * @return {function(*):boolean} The new function.
     */
    function equalTo(value: any, opt_useLooseComparison?: boolean | undefined): (arg0: any) => boolean;
    /**
     * Creates the composition of the functions passed in.
     * For example, (goog.functions.compose(f, g))(a) is equivalent to f(g(a)).
     * @param {function(...?):T} fn The final function.
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):T} The composition of all inputs.
     * @template T
     */
    function compose<T>(fn: (...rest: any[]) => T, ...var_args: Function[]): (...rest: any[]) => T;
    /**
     * Creates a function that calls the functions passed in in sequence, and
     * returns the value of the last function. For example,
     * (goog.functions.sequence(f, g))(x) is equivalent to f(x),g(x).
     * @param {...Function} var_args A list of functions.
     * @return {!Function} A function that calls all inputs in sequence.
     */
    function sequence(...var_args: Function[]): Function;
    /**
     * Creates a function that returns true if each of its components evaluates
     * to true. The components are evaluated in order, and the evaluation will be
     * short-circuited as soon as a function returns false.
     * For example, (goog.functions.and(f, g))(x) is equivalent to f(x) && g(x).
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):boolean} A function that ANDs its component
     *      functions.
     */
    function and(...var_args: Function[]): (...rest: any[]) => boolean;
    /**
     * Creates a function that returns true if any of its components evaluates
     * to true. The components are evaluated in order, and the evaluation will be
     * short-circuited as soon as a function returns true.
     * For example, (goog.functions.or(f, g))(x) is equivalent to f(x) || g(x).
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):boolean} A function that ORs its component
     *    functions.
     */
    function or(...var_args: Function[]): (...rest: any[]) => boolean;
    /**
     * Creates a function that returns the Boolean opposite of a provided function.
     * For example, (goog.functions.not(f))(x) is equivalent to !f(x).
     * @param {!Function} f The original function.
     * @return {function(...?):boolean} A function that delegates to f and returns
     * opposite.
     */
    function not(f: Function): (...rest: any[]) => boolean;
    /**
     * Generic factory function to construct an object given the constructor
     * and the arguments. Intended to be bound to create object factories.
     *
     * Example:
     *
     * var factory = goog.partial(goog.functions.create, Class);
     *
     * @param {function(new:T, ...)} constructor The constructor for the Object.
     * @param {...*} var_args The arguments to be passed to the constructor.
     * @return {T} A new instance of the class given in {@code constructor}.
     * @template T
     */
    function create<T>(constructor: Function, ...var_args: any[]): T;
    var CACHE_RETURN_VALUE: boolean;
    /**
     * Gives a wrapper function that caches the return value of a parameterless
     * function when first called.
     *
     * When called for the first time, the given function is called and its
     * return value is cached (thus this is only appropriate for idempotent
     * functions).  Subsequent calls will return the cached return value. This
     * allows the evaluation of expensive functions to be delayed until first used.
     *
     * To cache the return values of functions with parameters, see goog.memoize.
     *
     * @param {function():T} fn A function to lazily evaluate.
     * @return {function():T} A wrapped version the function.
     * @template T
     */
    function cacheReturnValue<T>(fn: () => T): () => T;
    /**
     * Wraps a function to allow it to be called, at most, once. All
     * additional calls are no-ops.
     *
     * This is particularly useful for initialization functions
     * that should be called, at most, once.
     *
     * @param {function():*} f Function to call.
     * @return {function():undefined} Wrapped function.
     */
    function once(f: () => any): () => void;
    /**
     * Wraps a function to allow it to be called, at most, once per interval
     * (specified in milliseconds). If the wrapper function is called N times within
     * that interval, only the Nth call will go through.
     *
     * This is particularly useful for batching up repeated actions where the
     * last action should win. This can be used, for example, for refreshing an
     * autocomplete pop-up every so often rather than updating with every keystroke,
     * since the final text typed by the user is the one that should produce the
     * final autocomplete results. For more stateful debouncing with support for
     * pausing, resuming, and canceling debounced actions, use {@code
     * goog.async.Debouncer}.
     *
     * @param {function(this:SCOPE, ...?)} f Function to call.
     * @param {number} interval Interval over which to debounce. The function will
     *     only be called after the full interval has elapsed since the last call.
     * @param {SCOPE=} opt_scope Object in whose scope to call the function.
     * @return {function(...?): undefined} Wrapped function.
     * @template SCOPE
     */
    function debounce<SCOPE>(f: (this: SCOPE, ...rest: any[]) => void, interval: number, opt_scope?: SCOPE | undefined): (...rest: any[]) => void;
    /**
     * Wraps a function to allow it to be called, at most, once per interval
     * (specified in milliseconds). If the wrapper function is called N times in
     * that interval, both the 1st and the Nth calls will go through.
     *
     * This is particularly useful for limiting repeated user requests where the
     * the last action should win, but you also don't want to wait until the end of
     * the interval before sending a request out, as it leads to a perception of
     * slowness for the user.
     *
     * @param {function(this:SCOPE, ...?)} f Function to call.
     * @param {number} interval Interval over which to throttle. The function can
     *     only be called once per interval.
     * @param {SCOPE=} opt_scope Object in whose scope to call the function.
     * @return {function(...?): undefined} Wrapped function.
     * @template SCOPE
     */
    function throttle<SCOPE>(f: (this: SCOPE, ...rest: any[]) => void, interval: number, opt_scope?: SCOPE): (...rest: any[]) => void;
    /**
     * Wraps a function to allow it to be called, at most, once per interval
     * (specified in milliseconds). If the wrapper function is called N times within
     * that interval, only the 1st call will go through.
     *
     * This is particularly useful for limiting repeated user requests where the
     * first request is guaranteed to have all the data required to perform the
     * final action, so there's no need to wait until the end of the interval before
     * sending the request out.
     *
     * @param {function(this:SCOPE, ...?)} f Function to call.
     * @param {number} interval Interval over which to rate-limit. The function will
     *     only be called once per interval, and ignored for the remainer of the
     *     interval.
     * @param {SCOPE=} opt_scope Object in whose scope to call the function.
     * @return {function(...?): undefined} Wrapped function.
     * @template SCOPE
     */
    function rateLimit<SCOPE>(f: (this: SCOPE, ...rest: any[]) => void, interval: number, opt_scope?: SCOPE | undefined): (...rest: any[]) => void;
}
declare namespace goog.iter {
    /**
     * @typedef {goog.iter.Iterator|{length:number}|{__iterator__}}
     */
    type Iterable = goog.iter.Iterator<string> | {
        length: number;
    } | {
        __iterator__;
    };
    /**
     * Singleton Error object that is used to terminate iterations.
     * @const {!Error}
     */
    var StopIteration: any;
}
declare namespace goog.iter {
    class Iterator<VALUE> {
        /**
         * Class/interface for iterators.  An iterator needs to implement a {@code next}
         * method and it needs to throw a {@code goog.iter.StopIteration} when the
         * iteration passes beyond the end.  Iterators have no {@code hasNext} method.
         * It is recommended to always use the helper functions to iterate over the
         * iterator or in case you are only targeting JavaScript 1.7 for in loops.
         * @constructor
         * @template VALUE
         */
        constructor();
        /**
         * Returns the next value of the iteration.  This will throw the object
         * {@see goog.iter#StopIteration} when the iteration passes the end.
         * @return {VALUE} Any object or value.
         */
        next(): VALUE;
        /**
         * Returns the {@code Iterator} object itself.  This is used to implement
         * the iterator protocol in JavaScript 1.7
         * @param {boolean=} opt_keys  Whether to return the keys or values. Default is
         *     to only return the values.  This is being used by the for-in loop (true)
         *     and the for-each-in loop (false).  Even though the param gives a hint
         *     about what the iterator will return there is no guarantee that it will
         *     return the keys when true is passed.
         * @return {!goog.iter.Iterator<VALUE>} The object itself.
         */
        __iterator__(opt_keys?: any): this;
    }
}
declare namespace goog.iter {
    /**
     * Returns an iterator that knows how to iterate over the values in the object.
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable  If the
     *     object is an iterator it will be returned as is.  If the object has an
     *     {@code __iterator__} method that will be called to get the value
     *     iterator.  If the object is an array-like object we create an iterator
     *     for that.
     * @return {!goog.iter.Iterator<VALUE>} An iterator that knows how to iterate
     *     over the values in {@code iterable}.
     * @template VALUE
     */
    function toIterator(iterable: any): any;
    /**
     * Calls a function for each element in the iterator with the element of the
     * iterator passed as argument.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable  The iterator
     *     to iterate over. If the iterable is an object {@code toIterator} will be
     *     called on it.
     * @param {function(this:THIS,VALUE,?,!goog.iter.Iterator<VALUE>)} f
     *     The function to call for every element.  This function takes 3 arguments
     *     (the element, undefined, and the iterator) and the return value is
     *     irrelevant.  The reason for passing undefined as the second argument is
     *     so that the same function can be used in {@see goog.array#forEach} as
     *     well as others.  The third parameter is of type "number" for
     *     arraylike objects, undefined, otherwise.
     * @param {THIS=} opt_obj  The object to be used as the value of 'this' within
     *     {@code f}.
     * @template THIS, VALUE
     */
    function forEach(iterable: any, f: any, opt_obj?: any): void;
    /**
     * Calls a function for every element in the iterator, and if the function
     * returns true adds the element to a new iterator.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     to iterate over.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every element. This function takes 3 arguments
     *     (the element, undefined, and the iterator) and should return a boolean.
     *     If the return value is true the element will be included in the returned
     *     iterator.  If it is false the element is not included.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator in which only elements
     *     that passed the test are present.
     * @template THIS, VALUE
     */
    function filter(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Calls a function for every element in the iterator, and if the function
     * returns false adds the element to a new iterator.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     to iterate over.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every element. This function takes 3 arguments
     *     (the element, undefined, and the iterator) and should return a boolean.
     *     If the return value is false the element will be included in the returned
     *     iterator.  If it is true the element is not included.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator in which only elements
     *     that did not pass the test are present.
     * @template THIS, VALUE
     */
    function filterFalse(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Creates a new iterator that returns the values in a range.  This function
     * can take 1, 2 or 3 arguments:
     * <pre>
     * range(5) same as range(0, 5, 1)
     * range(2, 5) same as range(2, 5, 1)
     * </pre>
     *
     * @param {number} startOrStop  The stop value if only one argument is provided.
     *     The start value if 2 or more arguments are provided.  If only one
     *     argument is used the start value is 0.
     * @param {number=} opt_stop  The stop value.  If left out then the first
     *     argument is used as the stop value.
     * @param {number=} opt_step  The number to increment with between each call to
     *     next.  This can be negative.
     * @return {!goog.iter.Iterator<number>} A new iterator that returns the values
     *     in the range.
     */
    function range(startOrStop: any, opt_stop?: any, opt_step?: any): Iterator<{}>;
    /**
     * Joins the values in a iterator with a delimiter.
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     to get the values from.
     * @param {string} deliminator  The text to put between the values.
     * @return {string} The joined value string.
     * @template VALUE
     */
    function join(iterable: any, deliminator: any): string;
    /**
     * For every element in the iterator call a function and return a new iterator
     * with that value.
     *
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterator to iterate over.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):RESULT} f
     *     The function to call for every element.  This function takes 3 arguments
     *     (the element, undefined, and the iterator) and should return a new value.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {!goog.iter.Iterator<RESULT>} A new iterator that returns the
     *     results of applying the function to each element in the original
     *     iterator.
     * @template THIS, VALUE, RESULT
     */
    function map(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Passes every element of an iterator into a function and accumulates the
     * result.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     to iterate over.
     * @param {function(this:THIS,VALUE,VALUE):VALUE} f The function to call for
     *     every element. This function takes 2 arguments (the function's previous
     *     result or the initial value, and the value of the current element).
     *     function(previousValue, currentElement) : newValue.
     * @param {VALUE} val The initial value to pass into the function on the first
     *     call.
     * @param {THIS=} opt_obj  The object to be used as the value of 'this' within
     *     f.
     * @return {VALUE} Result of evaluating f repeatedly across the values of
     *     the iterator.
     * @template THIS, VALUE
     */
    function reduce(iterable: any, f: any, val: any, opt_obj?: any): any;
    /**
     * Goes through the values in the iterator. Calls f for each of these, and if
     * any of them returns true, this returns true (without checking the rest). If
     * all return false this will return false.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     object.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every value. This function takes 3 arguments
     *     (the value, undefined, and the iterator) and should return a boolean.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {boolean} true if any value passes the test.
     * @template THIS, VALUE
     */
    function some(iterable: any, f: any, opt_obj?: any): boolean;
    /**
     * Goes through the values in the iterator. Calls f for each of these and if any
     * of them returns false this returns false (without checking the rest). If all
     * return true this will return true.
     *
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     object.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every value. This function takes 3 arguments
     *     (the value, undefined, and the iterator) and should return a boolean.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {boolean} true if every value passes the test.
     * @template THIS, VALUE
     */
    function every(iterable: any, f: any, opt_obj?: any): boolean;
    /**
     * Takes zero or more iterables and returns one iterator that will iterate over
     * them in the order chained.
     * @param {...!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} var_args Any
     *     number of iterable objects.
     * @return {!goog.iter.Iterator<VALUE>} Returns a new iterator that will
     *     iterate over all the given iterables' contents.
     * @template VALUE
     */
    function chain(var_args: any): Iterator<{}>;
    /**
     * Takes a single iterable containing zero or more iterables and returns one
     * iterator that will iterate over each one in the order given.
     * @see https://goo.gl/5NRp5d
     * @param {goog.iter.Iterable} iterable The iterable of iterables to chain.
     * @return {!goog.iter.Iterator<VALUE>} Returns a new iterator that will
     *     iterate over all the contents of the iterables contained within
     *     {@code iterable}.
     * @template VALUE
     */
    function chainFromIterable(iterable: any): Iterator<{}>;
    /**
     * Builds a new iterator that iterates over the original, but skips elements as
     * long as a supplied function returns true.
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     object.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every value. This function takes 3 arguments
     *     (the value, undefined, and the iterator) and should return a boolean.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator that drops elements from
     *     the original iterator as long as {@code f} is true.
     * @template THIS, VALUE
     */
    function dropWhile(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Builds a new iterator that iterates over the original, but only as long as a
     * supplied function returns true.
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     object.
     * @param {
     *     function(this:THIS,VALUE,undefined,!goog.iter.Iterator<VALUE>):boolean} f
     *     The function to call for every value. This function takes 3 arguments
     *     (the value, undefined, and the iterator) and should return a boolean.
     * @param {THIS=} opt_obj This is used as the 'this' object in f when called.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator that keeps elements in
     *     the original iterator as long as the function is true.
     * @template THIS, VALUE
     */
    function takeWhile(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Converts the iterator to an array
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterator
     *     to convert to an array.
     * @return {!Array<VALUE>} An array of the elements the iterator iterates over.
     * @template VALUE
     */
    function toArray(iterable: any): any[];
    /**
     * Iterates over two iterables and returns true if they contain the same
     * sequence of elements and have the same length.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable1 The first
     *     iterable object.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable2 The second
     *     iterable object.
     * @param {function(VALUE,VALUE):boolean=} opt_equalsFn Optional comparison
     *     function.
     *     Should take two arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} true if the iterables contain the same sequence of elements
     *     and have the same length.
     * @template VALUE
     */
    function equals(iterable1: any, iterable2: any, opt_equalsFn?: any): boolean;
    /**
     * Advances the iterator to the next position, returning the given default value
     * instead of throwing an exception if the iterator has no more entries.
     * @param {goog.iter.Iterator<VALUE>|goog.iter.Iterable} iterable The iterable
     *     object.
     * @param {VALUE} defaultValue The value to return if the iterator is empty.
     * @return {VALUE} The next item in the iteration, or defaultValue if the
     *     iterator was empty.
     * @template VALUE
     */
    function nextOrValue(iterable: any, defaultValue: any): any;
    /**
     * Cartesian product of zero or more sets.  Gives an iterator that gives every
     * combination of one element chosen from each set.  For example,
     * ([1, 2], [3, 4]) gives ([1, 3], [1, 4], [2, 3], [2, 4]).
     * @see http://docs.python.org/library/itertools.html#itertools.product
     * @param {...!IArrayLike<VALUE>} var_args Zero or more sets, as
     *     arrays.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} An iterator that gives each
     *     n-tuple (as an array).
     * @template VALUE
     */
    function product(var_args: any): Iterator<{}>;
    /**
     * Create an iterator to cycle over the iterable's elements indefinitely.
     * For example, ([1, 2, 3]) would return : 1, 2, 3, 1, 2, 3, ...
     * @see: http://docs.python.org/library/itertools.html#itertools.cycle.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable object.
     * @return {!goog.iter.Iterator<VALUE>} An iterator that iterates indefinitely
     *     over the values in {@code iterable}.
     * @template VALUE
     */
    function cycle(iterable: any): Iterator<{}>;
    /**
     * Creates an iterator that counts indefinitely from a starting value.
     * @see http://docs.python.org/2/library/itertools.html#itertools.count
     * @param {number=} opt_start The starting value. Default is 0.
     * @param {number=} opt_step The number to increment with between each call to
     *     next. Negative and floating point numbers are allowed. Default is 1.
     * @return {!goog.iter.Iterator<number>} A new iterator that returns the values
     *     in the series.
     */
    function count(opt_start?: any, opt_step?: any): Iterator<{}>;
    /**
     * Creates an iterator that returns the same object or value repeatedly.
     * @param {VALUE} value Any object or value to repeat.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator that returns the
     *     repeated value.
     * @template VALUE
     */
    function repeat(value: any): Iterator<{}>;
    /**
     * Creates an iterator that returns running totals from the numbers in
     * {@code iterable}. For example, the array {@code [1, 2, 3, 4, 5]} yields
     * {@code 1 -> 3 -> 6 -> 10 -> 15}.
     * @see http://docs.python.org/3.2/library/itertools.html#itertools.accumulate
     * @param {!goog.iter.Iterable} iterable The iterable of numbers to
     *     accumulate.
     * @return {!goog.iter.Iterator<number>} A new iterator that returns the
     *     numbers in the series.
     */
    function accumulate(iterable: any): Iterator<{}>;
    /**
     * Creates an iterator that returns arrays containing the ith elements from the
     * provided iterables. The returned arrays will be the same size as the number
     * of iterables given in {@code var_args}. Once the shortest iterable is
     * exhausted, subsequent calls to {@code next()} will throw
     * {@code goog.iter.StopIteration}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.izip
     * @param {...!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} var_args Any
     *     number of iterable objects.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} A new iterator that returns
     *     arrays of elements from the provided iterables.
     * @template VALUE
     */
    function zip(...var_args: any[]): Iterator<{}>;
    /**
     * Creates an iterator that returns arrays containing the ith elements from the
     * provided iterables. The returned arrays will be the same size as the number
     * of iterables given in {@code var_args}. Shorter iterables will be extended
     * with {@code fillValue}. Once the longest iterable is exhausted, subsequent
     * calls to {@code next()} will throw {@code goog.iter.StopIteration}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.izip_longest
     * @param {VALUE} fillValue The object or value used to fill shorter iterables.
     * @param {...!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} var_args Any
     *     number of iterable objects.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} A new iterator that returns
     *     arrays of elements from the provided iterables.
     * @template VALUE
     */
    function zipLongest(fillValue: any, ...var_args: any[]): Iterator<{}>;
    /**
     * Creates an iterator that filters {@code iterable} based on a series of
     * {@code selectors}. On each call to {@code next()}, one item is taken from
     * both the {@code iterable} and {@code selectors} iterators. If the item from
     * {@code selectors} evaluates to true, the item from {@code iterable} is given.
     * Otherwise, it is skipped. Once either {@code iterable} or {@code selectors}
     * is exhausted, subsequent calls to {@code next()} will throw
     * {@code goog.iter.StopIteration}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.compress
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to filter.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} selectors An
     *     iterable of items to be evaluated in a boolean context to determine if
     *     the corresponding element in {@code iterable} should be included in the
     *     result.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator that returns the
     *     filtered values.
     * @template VALUE
     */
    function compress(iterable: any, selectors: any): Iterator<{}>;
    /**
     * Creates an iterator that returns arrays containing elements from the
     * {@code iterable} grouped by a key value. For iterables with repeated
     * elements (i.e. sorted according to a particular key function), this function
     * has a {@code uniq}-like effect. For example, grouping the array:
     * {@code [A, B, B, C, C, A]} produces
     * {@code [A, [A]], [B, [B, B]], [C, [C, C]], [A, [A]]}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.groupby
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to group.
     * @param {function(VALUE): KEY=} opt_keyFunc  Optional function for
     *     determining the key value for each group in the {@code iterable}. Default
     *     is the identity function.
     * @return {!goog.iter.Iterator<!Array<?>>} A new iterator that returns
     *     arrays of consecutive key and groups.
     * @template KEY, VALUE
     */
    function groupBy(iterable: any, opt_keyFunc?: any): GroupByIterator_<{}, {}>;
    /**
     * Gives an iterator that gives the result of calling the given function
     * <code>f</code> with the arguments taken from the next element from
     * <code>iterable</code> (the elements are expected to also be iterables).
     *
     * Similar to {@see goog.iter#map} but allows the function to accept multiple
     * arguments from the iterable.
     *
     * @param {!goog.iter.Iterable} iterable The iterable of
     *     iterables to iterate over.
     * @param {function(this:THIS,...*):RESULT} f The function to call for every
     *     element.  This function takes N+2 arguments, where N represents the
     *     number of items from the next element of the iterable. The two
     *     additional arguments passed to the function are undefined and the
     *     iterator itself. The function should return a new value.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within
     *     {@code f}.
     * @return {!goog.iter.Iterator<RESULT>} A new iterator that returns the
     *     results of applying the function to each element in the original
     *     iterator.
     * @template THIS, RESULT
     */
    function starMap(iterable: any, f: any, opt_obj?: any): Iterator<{}>;
    /**
     * Returns an array of iterators each of which can iterate over the values in
     * {@code iterable} without advancing the others.
     * @see http://docs.python.org/2/library/itertools.html#itertools.tee
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to tee.
     * @param {number=} opt_num  The number of iterators to create. Default is 2.
     * @return {!Array<goog.iter.Iterator<VALUE>>} An array of iterators.
     * @template VALUE
     */
    function tee(iterable: any, opt_num?: any): Iterator<{}>[];
    /**
     * Creates an iterator that returns arrays containing a count and an element
     * obtained from the given {@code iterable}.
     * @see http://docs.python.org/2/library/functions.html#enumerate
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to enumerate.
     * @param {number=} opt_start  Optional starting value. Default is 0.
     * @return {!goog.iter.Iterator<!Array<?>>} A new iterator containing
     *     count/item pairs.
     * @template VALUE
     */
    function enumerate(iterable: any, opt_start?: any): Iterator<{}>;
    /**
     * Creates an iterator that returns the first {@code limitSize} elements from an
     * iterable. If this number is greater than the number of elements in the
     * iterable, all the elements are returned.
     * @see http://goo.gl/V0sihp Inspired by the limit iterator in Guava.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to limit.
     * @param {number} limitSize  The maximum number of elements to return.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator containing
     *     {@code limitSize} elements.
     * @template VALUE
     */
    function limit(iterable: any, limitSize: any): Iterator<{}>;
    /**
     * Creates an iterator that is advanced {@code count} steps ahead. Consumed
     * values are silently discarded. If {@code count} is greater than the number
     * of elements in {@code iterable}, an empty iterator is returned. Subsequent
     * calls to {@code next()} will throw {@code goog.iter.StopIteration}.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to consume.
     * @param {number} count  The number of elements to consume from the iterator.
     * @return {!goog.iter.Iterator<VALUE>} An iterator advanced zero or more steps
     *     ahead.
     * @template VALUE
     */
    function consume(iterable: any, count: any): any;
    /**
     * Creates an iterator that returns a range of elements from an iterable.
     * Similar to {@see goog.array#slice} but does not support negative indexes.
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to slice.
     * @param {number} start  The index of the first element to return.
     * @param {number=} opt_end  The index after the last element to return. If
     *     defined, must be greater than or equal to {@code start}.
     * @return {!goog.iter.Iterator<VALUE>} A new iterator containing a slice of
     *     the original.
     * @template VALUE
     */
    function slice(iterable: any, start: any, opt_end?: any): any;
    /**
     * Checks an array for duplicate elements.
     * @param {?IArrayLike<VALUE>} arr The array to check for
     *     duplicates.
     * @return {boolean} True, if the array contains duplicates, false otherwise.
     * @private
     * @template VALUE
     */
    function hasDuplicates_(arr: any): boolean;
    /**
     * Creates an iterator that returns permutations of elements in
     * {@code iterable}.
     *
     * Permutations are obtained by taking the Cartesian product of
     * {@code opt_length} iterables and filtering out those with repeated
     * elements. For example, the permutations of {@code [1,2,3]} are
     * {@code [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.permutations
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable from which to generate permutations.
     * @param {number=} opt_length Length of each permutation. If omitted, defaults
     *     to the length of {@code iterable}.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} A new iterator containing the
     *     permutations of {@code iterable}.
     * @template VALUE
     */
    function permutations(iterable: any, opt_length?: any): Iterator<{}>;
    /**
     * Creates an iterator that returns combinations of elements from
     * {@code iterable}.
     *
     * Combinations are obtained by taking the {@see goog.iter#permutations} of
     * {@code iterable} and filtering those whose elements appear in the order they
     * are encountered in {@code iterable}. For example, the 3-length combinations
     * of {@code [0,1,2,3]} are {@code [[0,1,2], [0,1,3], [0,2,3], [1,2,3]]}.
     * @see http://docs.python.org/2/library/itertools.html#itertools.combinations
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable from which to generate combinations.
     * @param {number} length The length of each combination.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} A new iterator containing
     *     combinations from the {@code iterable}.
     * @template VALUE
     */
    function combinations(iterable: any, length: any): Iterator<{}>;
    /**
     * Creates an iterator that returns combinations of elements from
     * {@code iterable}, with repeated elements possible.
     *
     * Combinations are obtained by taking the Cartesian product of {@code length}
     * iterables and filtering those whose elements appear in the order they are
     * encountered in {@code iterable}. For example, the 2-length combinations of
     * {@code [1,2,3]} are {@code [[1,1], [1,2], [1,3], [2,2], [2,3], [3,3]]}.
     * @see https://goo.gl/C0yXe4
     * @see https://goo.gl/djOCsk
     * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
     *     iterable to combine.
     * @param {number} length The length of each combination.
     * @return {!goog.iter.Iterator<!Array<VALUE>>} A new iterator containing
     *     combinations from the {@code iterable}.
     * @template VALUE
     */
    function combinationsWithReplacement(iterable: any, length: any): Iterator<{}>;
}
declare namespace goog.iter {
    class GroupByIterator_<KEY, VALUE> extends goog.iter.Iterator<VALUE> {
        iterator: goog.iter.Iterator<VALUE>;
        keyFunc: Function;
        targetKey: KEY;
        currentKey: KEY;
        currentValue: VALUE;
        /**
         * Implements the {@code goog.iter.groupBy} iterator.
         * @param {!goog.iter.Iterator<VALUE>|!goog.iter.Iterable} iterable The
         *     iterable to group.
         * @param {function(VALUE): KEY=} opt_keyFunc  Optional function for
         *     determining the key value for each group in the {@code iterable}. Default
         *     is the identity function.
         * @constructor
         * @extends {goog.iter.Iterator<!Array<?>>}
         * @template KEY, VALUE
         * @private
         */
        constructor(iterable: any, opt_keyFunc?: any);
        /** @override */
        next(): VALUE;
        /**
         * Performs the grouping of objects using the given key.
         * @param {KEY} targetKey  The target key object for the group.
         * @return {!Array<VALUE>} An array of grouped objects.
         * @private
         */
        groupItems_(targetKey: any): any[];
    }
}
declare namespace goog.log {
    var ENABLED: boolean;
    /** @const {string} */
    const ROOT_LOGGER_NAME = "";
}
declare namespace goog.log {
    class Logger {
        /**
         * @constructor
         * @final
         */
        constructor(name: any);
    }
    class Level {
        /**
         * @constructor
         * @final
         */
        constructor(name: any, value: any);
    }
    class LogRecord {
        /**
         * @constructor
         * @final
         */
        constructor(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined);
    }
}
declare namespace goog.log {
    /**
     * Finds or creates a logger for a named subsystem. If a logger has already been
     * created with the given name it is returned. Otherwise a new logger is
     * created. If a new logger is created its log level will be configured based
     * on the goog.debug.LogManager configuration and it will configured to also
     * send logging output to its parent's handlers.
     * @see goog.debug.LogManager
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     *     name and should normally be based on the package name or class name of
     *     the subsystem, such as goog.net.BrowserChannel.
     * @param {goog.log.Level=} opt_level If provided, override the
     *     default logging level with the provided level.
     * @return {goog.log.Logger} The named logger or null if logging is disabled.
     */
    function getLogger(name: any, opt_level?: any): any;
    /**
     * Adds a handler to the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to add.
     */
    function addHandler(logger: any, handler: any): void;
    /**
     * Removes a handler from the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to remove.
     * @return {boolean} Whether the handler was removed.
     */
    function removeHandler(logger: any, handler: any): any;
    /**
     * Logs a message. If the logger is currently enabled for the
     * given message level then the given message is forwarded to all the
     * registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.log.Level} level One of the level identifiers.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error|Object=} opt_exception An exception associated with the
     *     message.
     */
    function log(logger: any, level: any, msg: any, opt_exception?: any): void;
    /**
     * Logs a message at the Level.SEVERE level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function error(logger: any, msg: any, opt_exception?: any): void;
    /**
     * Logs a message at the Level.WARNING level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function warning(logger: any, msg: any, opt_exception?: any): void;
    /**
     * Logs a message at the Level.INFO level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function info(logger: any, msg: any, opt_exception?: any): void;
    /**
     * Logs a message at the Level.Fine level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function fine(logger: any, msg: any, opt_exception?: any): void;
}
declare namespace goog.structs {
    class Map<K, V> {
        map_: Object;
        keys_: Array<string>;
        count_: number;
        version_: number;
        /**
         * Class for Hash Map datastructure.
         * @param {*=} opt_map Map or Object to initialize the map with.
         * @param {...*} var_args If 2 or more arguments are present then they
         *     will be used as key-value pairs.
         * @constructor
         * @template K, V
         * @deprecated This type is misleading: use ES6 Map instead.
         */
        constructor(opt_map?: any, ...var_args: any[]);
        /**
         * @return {number} The number of key-value pairs in the map.
         */
        getCount(): number;
        /**
         * Returns the values of the map.
         * @return {!Array<V>} The values in the map.
         */
        getValues(): any[];
        /**
         * Returns the keys of the map.
         * @return {!Array<string>} Array of string values.
         */
        getKeys(): string[];
        /**
         * Whether the map contains the given key.
         * @param {*} key The key to check for.
         * @return {boolean} Whether the map contains the key.
         */
        containsKey(key: any): any;
        /**
         * Whether the map contains the given value. This is O(n).
         * @param {V} val The value to check for.
         * @return {boolean} Whether the map contains the value.
         */
        containsValue(val: any): boolean;
        /**
         * Whether this map is equal to the argument map.
         * @param {goog.structs.Map} otherMap The map against which to test equality.
         * @param {function(V, V): boolean=} opt_equalityFn Optional equality function
         *     to test equality of values. If not specified, this will test whether
         *     the values contained in each map are identical objects.
         * @return {boolean} Whether the maps are equal.
         */
        equals(otherMap: any, opt_equalityFn?: any): boolean;
        /**
         * Default equality test for values.
         * @param {*} a The first value.
         * @param {*} b The second value.
         * @return {boolean} Whether a and b reference the same object.
         */
        static defaultEquals(a: any, b: any): boolean;
        /**
         * @return {boolean} Whether the map is empty.
         */
        isEmpty(): boolean;
        /**
         * Removes all key-value pairs from the map.
         */
        clear(): void;
        /**
         * Removes a key-value pair based on the key. This is O(logN) amortized due to
         * updating the keys array whenever the count becomes half the size of the keys
         * in the keys array.
         * @param {*} key  The key to remove.
         * @return {boolean} Whether object was removed.
         */
        remove(key: any): boolean;
        /**
         * Cleans up the temp keys array by removing entries that are no longer in the
         * map.
         * @private
         */
        cleanupKeysArray_(): void;
        /**
         * Returns the value for the given key.  If the key is not found and the default
         * value is not given this will return {@code undefined}.
         * @param {*} key The key to get the value for.
         * @param {DEFAULT=} opt_val The value to return if no item is found for the
         *     given key, defaults to undefined.
         * @return {V|DEFAULT} The value for the given key.
         * @template DEFAULT
         */
        get(key: any, opt_val?: any): any;
        /**
         * Adds a key-value pair to the map.
         * @param {*} key The key.
         * @param {V} value The value to add.
         * @return {*} Some subclasses return a value.
         */
        set(key: any, value: any): void;
        /**
         * Adds multiple key-value pairs from another goog.structs.Map or Object.
         * @param {Object} map  Object containing the data to add.
         */
        addAll(map: any): void;
        /**
         * Calls the given function on each entry in the map.
         * @param {function(this:T, V, K, goog.structs.Map<K,V>)} f
         * @param {T=} opt_obj The value of "this" inside f.
         * @template T
         */
        forEach(f: any, opt_obj?: any): void;
        /**
         * Clones a map and returns a new map.
         * @return {!goog.structs.Map} A new map with the same key-value pairs.
         */
        clone(): Map<{}, {}>;
        /**
         * Returns a new map in which all the keys and values are interchanged
         * (keys become values and values become keys). If multiple keys map to the
         * same value, the chosen transposed value is implementation-dependent.
         *
         * It acts very similarly to {goog.object.transpose(Object)}.
         *
         * @return {!goog.structs.Map} The transposed map.
         */
        transpose(): Map<{}, {}>;
        /**
         * @return {!Object} Object representation of the map.
         */
        toObject(): {};
        /**
         * Returns an iterator that iterates over the keys in the map.  Removal of keys
         * while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the keys in the map.
         */
        getKeyIterator(): iter.Iterator<{}>;
        /**
         * Returns an iterator that iterates over the values in the map.  Removal of
         * keys while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the values in the map.
         */
        getValueIterator(): iter.Iterator<{}>;
        /**
         * Returns an iterator that iterates over the values or the keys in the map.
         * This throws an exception if the map was mutated since the iterator was
         * created.
         * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
         *     over the values.  The default value is false.
         * @return {!goog.iter.Iterator} An iterator over the values or keys in the map.
         */
        __iterator__(opt_keys?: any): iter.Iterator<{}>;
        /**
         * Safe way to test for hasOwnProperty.  It even allows testing for
         * 'hasOwnProperty'.
         * @param {Object} obj The object to test for presence of the given key.
         * @param {*} key The key to check for.
         * @return {boolean} Whether the object has the key.
         * @private
         */
        static hasKey_(obj: any, key: any): any;
    }
}
declare namespace goog.structs {
    class SimplePool<T> extends goog.Disposable {
        createObjectFn_: Function;
        disposeObjectFn_: Function;
        maxCount_: number;
        freeQueue_: Array<T>;
        /**
         * A generic pool class. Simpler and more efficient than goog.structs.Pool
         * because it doesn't maintain a list of objects that are in use. This class
         * has constant overhead and doesn't create any additional objects as part of
         * the pool management after construction time.
         *
         * IMPORTANT: If the objects being pooled are arrays or maps that can have
         * unlimited number of properties, they need to be cleaned before being
         * returned to the pool.
         *
         * Also note that {@see goog.object.clean} actually allocates an array to clean
         * the object passed to it, so simply using this function would defy the
         * purpose of using the pool.
         *
         * @param {number} initialCount Initial number of objects to populate the free
         *     pool at construction time.
         * @param {number} maxCount Maximum number of objects to keep in the free pool.
         * @constructor
         * @extends {goog.Disposable}
         * @template T
         */
        constructor(initialCount: any, maxCount: any);
        /**
         * Sets the {@code createObject} function which is used for creating a new
         * object in the pool.
         * @param {Function} createObjectFn Create object function which returns the
         *     newly created object.
         */
        setCreateObjectFn(createObjectFn: any): void;
        /**
         * Sets the {@code disposeObject} function which is used for disposing of an
         * object in the pool.
         * @param {Function} disposeObjectFn Dispose object function which takes the
         *     object to dispose as a parameter.
         */
        setDisposeObjectFn(disposeObjectFn: any): void;
        /**
         * Gets an unused object from the the pool, if there is one available,
         * otherwise creates a new one.
         * @return {T} An object from the pool or a new one if necessary.
         */
        getObject(): any;
        /**
         * Returns an object to the pool so that it can be reused. If the pool is
         * already full, the object is disposed instead.
         * @param {T} obj The object to release.
         */
        releaseObject(obj: any): void;
        /**
         * Populates the pool with initialCount objects.
         * @param {number} initialCount The number of objects to add to the pool.
         * @private
         */
        createInitial_(initialCount: any): void;
        /**
         * Should be overridden by sub-classes to return an instance of the object type
         * that is expected in the pool.
         * @return {T} The created object.
         */
        createObject(): any;
        /**
         * Should be overrideen to dispose of an object. Default implementation is to
         * remove all of the object's members, which should render it useless. Calls the
         *  object's dispose method, if available.
         * @param {T} obj The object to dispose.
         */
        disposeObject(obj: any): void;
        /**
         * Disposes of the pool and all objects currently held in the pool.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }
}
declare namespace goog.debug {
    class Trace_ {
        events_: Array<goog.debug.Trace_.Event_>;
        outstandingEvents_: goog.structs.Map<number, goog.debug.Trace_.Event_>;
        startTime_: number;
        tracerOverheadStart_: number;
        tracerOverheadEnd_: number;
        tracerOverheadComment_: number;
        stats_: goog.structs.Map<string, string>;
        tracerCount_: number;
        commentCount_: number;
        nextId_: number;
        eventPool_: goog.structs.SimplePool<string>;
        statPool_: goog.structs.SimplePool<string>;
        idPool_: goog.structs.SimplePool<string>;
        defaultThreshold_: number;
        traceCallbacks_: goog.debug.Trace_.TracerCallbacks;
        gcTracer_: Object;
        /**
         * Class used for singleton goog.debug.Trace.  Used for timing slow points in
         * the code. Based on the java Tracer class but optimized for javascript.
         * See com.google.common.tracing.Tracer.
         * It is also possible to bridge from this class to other tracer classes via
         * adding listeners.
         * @constructor
         * @private
         */
        constructor();
        /**
         * Logger for the tracer
         * @private @const {?goog.log.Logger}
         */
        logger_: any;
        /**
         * Maximum size of the trace before we discard events
         * @type {number}
         */
        MAX_TRACE_SIZE: number;
        /**
         * Removes all registered callback functions. Mainly used for testing.
         */
        removeAllListeners(): void;
        /**
         * Adds up to three callback functions which are called on {@code startTracer},
         * {@code stopTracer} and {@code addComment} in order to bridge from the Closure
         * tracer singleton object to any tracer class.
         * @param {!goog.debug.Trace_.TracerCallbacks} callbacks An object literal
         *   containing the callback functions.
         */
        addTraceCallbacks(callbacks: any): void;
        /**
         * Add the ability to explicitly set the start time. This is useful for example
         * for measuring initial load time where you can set a variable as soon as the
         * main page of the app is loaded and then later call this function when the
         * Tracer code has been loaded.
         * @param {number} startTime The start time to set.
         */
        setStartTime(startTime: any): void;
        /**
         * Initializes and resets the current trace
         * @param {number} defaultThreshold The default threshold below which the
         * tracer output will be suppressed. Can be overridden on a per-Tracer basis.
         */
        initCurrentTrace(defaultThreshold: any): void;
        /**
         * Clears the current trace
         */
        clearCurrentTrace(): void;
        /**
         * Resets the trace.
         * @param {number} defaultThreshold The default threshold below which the
         * tracer output will be suppressed. Can be overridden on a per-Tracer basis.
         */
        reset(defaultThreshold: any): void;
        /**
         * @private
         */
        releaseEvents_(): void;
        /**
         * Starts a tracer
         * @param {string} comment A comment used to identify the tracer. Does not
         *     need to be unique.
         * @param {string=} opt_type Type used to identify the tracer. If a Trace is
         *     given a type (the first argument to the constructor) and multiple Traces
         *     are done on that type then a "TOTAL line will be produced showing the
         *     total number of traces and the sum of the time
         *     ("TOTAL Database 2 (37 ms)" in our example). These traces should be
         *     mutually exclusive or else the sum won't make sense (the time will
         *     be double counted if the second starts before the first ends).
         * @return {number} The identifier for the tracer that should be passed to the
         *     the stopTracer method.
         */
        startTracer(comment: any, opt_type?: any): any;
        /**
         * Stops a tracer
         * @param {number|undefined|null} id The id of the tracer that is ending.
         * @param {number=} opt_silenceThreshold Threshold below which the tracer is
         *    silenced.
         * @return {?number} The elapsed time for the tracer or null if the tracer
         *    identitifer was not recognized.
         */
        stopTracer(id: any, opt_silenceThreshold?: any): number;
        /**
         * Sets the ActiveX object that can be used to get GC tracing in IE6.
         * @param {Object} gcTracer GCTracer ActiveX object.
         */
        setGcTracer(gcTracer: any): void;
        /**
         * Returns the total number of allocations since the GC stats were reset. Only
         * works in IE.
         * @return {number} The number of allocaitons or -1 if not supported.
         */
        getTotalVarAlloc(): any;
        /**
         * Adds a comment to the trace. Makes it possible to see when a specific event
         * happened in relation to the traces.
         * @param {string} comment A comment that is inserted into the trace.
         * @param {?string=} opt_type Type used to identify the tracer. If a comment is
         *     given a type and multiple comments are done on that type then a "TOTAL
         *     line will be produced showing the total number of comments of that type.
         * @param {?number=} opt_timeStamp The timestamp to insert the comment. If not
         *    specified, the current time wil be used.
         */
        addComment(comment: any, opt_type?: any, opt_timeStamp?: any): void;
        /**
         * Gets a stat object for a particular type. The stat object is created if it
         * hasn't yet been.
         * @param {string} type The type of stat.
         * @return {goog.debug.Trace_.Stat_} The stat object.
         * @private
         */
        getStat_(type: any): any;
        /**
         * Returns a formatted string for the current trace
         * @return {string} A formatted string that shows the timings of the current
         *     trace.
         */
        getFormattedTrace(): string;
        /**
         * Returns a formatted string that describes the thread trace.
         * @return {string} A formatted string.
         * @override
         */
        toString(): string;
        /**
         * Converts 'v' to a string and pads it with up to 3 spaces for
         * improved alignment. TODO there must be a better way
         * @param {number} v A number.
         * @return {string} A padded string.
         * @private
         */
        static longToPaddedString_(v: any): string;
        /**
         * Return the sec.ms part of time (if time = "20:06:11.566",  "11.566
         * @param {number} time The time in MS.
         * @return {string} A formatted string as sec.ms'.
         * @private
         */
        static formatTime_(time: any): string;
        /**
         * Returns the current time. Done through a wrapper function so it can be
         * overridden by application code. Gmail has an ActiveX extension that provides
         * higher precision timing info.
         * @return {number} The current time in milliseconds.
         */
        static now(): number;
    }
}
declare namespace goog.debug.Trace_ {
    /**
     * Event type supported by tracer
     * @enum {number}
     */
    enum EventType {
        /**
         * Start event type
         */
        START = 0,
        /**
         * Stop event type
         */
        STOP = 1,
        /**
         * Comment event type
         */
        COMMENT = 2,
    }
}
declare namespace goog.debug.Trace_ {
    class Stat_ {
        count: number;
        time: number;
        varAlloc: number;
        /**
         * Class to keep track of a stat of a single tracer type. Stores the count
         * and cumulative time.
         * @constructor
         * @private
         */
        constructor();
        /**
         * @type {string|null|undefined}
         */
        type: string | null | undefined;
        /**
         * @return {string} A string describing the tracer stat.
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.debug.Trace_ {
    class Event_ {
        eventTime: any;
        eventType: any;
        startTime: any;
        stopTime: any;
        totalVarAlloc: any;
        comment: any;
        /**
         * Private class used to encapsulate a single event, either the start or stop
         * of a tracer.
         * @constructor
         * @private
         */
        constructor();
        /**
         * @type {string|null|undefined}
         */
        type: string | null | undefined;
        /**
         * Returns a formatted string for the event.
         * @param {number} startTime The start time of the trace to generate relative
         * times.
         * @param {number} prevTime The completion time of the previous event or -1.
         * @param {string} indent Extra indent for the message
         *     if there was no previous event.
         * @return {string} The formatted tracer string.
         */
        toTraceString(startTime: any, prevTime: any, indent: any): string;
        /**
         * @return {string} A string describing the tracer event.
         * @override
         */
        toString(): any;
    }
}
declare namespace goog.debug.Trace_ {
    /**
     * A class to specify the types of the callback functions used by
     * {@code addTraceCallbacks}.
     * @record
     */
    class TracerCallbacks {
        start: Function | undefined;
        stop: Function | undefined;
        comment: Function | undefined;
        constructor();
        /**
         * A function that combines two function with the same parameters in a sequence.
         * @param {!Function|undefined} fn1 The first function to be combined.
         * @param {!Function|undefined} fn2 The second function to be combined.
         * @return {!Function|undefined} A function that calls the inputs in sequence.
         * @private
         */
        static sequence_(fn1: any, fn2: any): any;
    }
}
declare namespace goog.debug {
    /**
     * Singleton trace object
     * @type {goog.debug.Trace_}
     */
    var Trace: goog.debug.Trace_;
}
declare namespace goog.debug {
    class ErrorHandler extends goog.Disposable implements goog.debug.EntryPointMonitor {
        errorHandlerFn_: Function;
        wrapErrors_: boolean;
        prefixErrorMessages_: boolean;
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
        constructor(handler: any);
        /**
         * Whether to add tracers when instrumenting entry points.
         * @type {boolean}
         * @private
         */
        addTracersToProtectedFunctions_: boolean;
        /**
         * Enable tracers when instrumenting entry points.
         * @param {boolean} newVal See above.
         */
        setAddTracersToProtectedFunctions(newVal: any): void;
        /** @override */
        wrap(fn: any): any;
        /** @override */
        unwrap(fn: any): any;
        /**
         * Private helper function to return a span that can be clicked on to display
         * an alert with the current stack trace. Newlines are replaced with a
         * placeholder so that they will not be html-escaped.
         * @param {string} stackTrace The stack trace to create a span for.
         * @return {string} A span which can be clicked on to show the stack trace.
         * @private
         */
        getStackTraceHolder_(stackTrace: any): string;
        /**
         * Get the index for a function. Used for internal indexing.
         * @param {boolean} wrapper True for the wrapper; false for the wrapped.
         * @return {string} The index where we should store the function in its
         *     wrapper/wrapped function.
         * @private
         */
        getFunctionIndex_(wrapper: any): string;
        /**
         * Installs exception protection for an entry point function. When an exception
         * is thrown from a protected function, a handler will be invoked to handle it.
         *
         * @param {Function} fn An entry point function to be protected.
         * @return {!Function} A protected wrapper function that calls the entry point
         *     function.
         */
        protectEntryPoint(fn: any): any;
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
        getProtectedFunction(fn: any): () => any;
        /**
         * Installs exception protection for window.setTimeout to handle exceptions.
         */
        protectWindowSetTimeout(): void;
        /**
         * Install exception protection for window.setInterval to handle exceptions.
         */
        protectWindowSetInterval(): void;
        /**
         * Install exception protection for window.requestAnimationFrame to handle
         * exceptions.
         */
        protectWindowRequestAnimationFrame: () => void;
        /**
         * Helper function for protecting a function that causes a function to be
         * asynchronously called, for example setTimeout or requestAnimationFrame.
         * @param {string} fnName The name of the function to protect.
         * @private
         */
        protectWindowFunctionsHelper_(fnName: any): void;
        /**
         * Set whether to wrap errors that occur in protected functions in a
         * goog.debug.ErrorHandler.ProtectedFunctionError.
         * @param {boolean} wrapErrors Whether to wrap errors.
         */
        setWrapErrors(wrapErrors: any): void;
        /**
         * Set whether to add a prefix to all error messages that occur in protected
         * functions.
         * @param {boolean} prefixErrorMessages Whether to add a prefix to error
         *     messages.
         */
        setPrefixErrorMessages(prefixErrorMessages: any): void;
        /** @override */
        disposeInternal(): void;
    }
}
declare namespace goog.debug.ErrorHandler {
    class ProtectedFunctionError extends goog.debug.Error {
        cause: any;
        /**
         * Error thrown to the caller of a protected entry point if the entry point
         * throws an error.
         * @param {*} cause The error thrown by the entry point.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(cause: any);
        /**
         * Text to prefix the message with.
         * @type {string}
         */
        static MESSAGE_PREFIX: string;
    }
}
declare namespace goog.events {
    /**
     * Interface for event wrappers.
     * @interface
     */
    interface EventWrapper {
        /**
         * Adds an event listener using the wrapper on a DOM Node or an object that has
         * implemented {@link goog.events.EventTarget}. A listener can only be added
         * once to an object.
         *
         * @param {goog.events.ListenableType} src The node to listen to events on.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @param {goog.events.EventHandler=} opt_eventHandler Event handler to add
         *     listener to.
         */
        listen(src: goog.events.ListenableType, listener: Function, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<string>): void;
        /**
         * Removes an event listener added using goog.events.EventWrapper.listen.
         *
         * @param {goog.events.ListenableType} src The node to remove listener from.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @param {goog.events.EventHandler=} opt_eventHandler Event handler to remove
         *     listener from.
         */
        unlisten(src: goog.events.ListenableType, listener: Function, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<string>): void;
    }
}
declare namespace goog.events {
    /**
     * @typedef {number|goog.events.ListenableKey}
     */
    type Key = number | goog.events.ListenableKey;
    /**
     * @typedef {EventTarget|goog.events.Listenable}
     */
    type ListenableType = EventTarget | goog.events.Listenable;
    /**
     * Property name on a native event target for the listener map
     * associated with the event target.
     * @private @const {string}
     */
    const LISTENER_MAP_PROP_: string;
    /**
     * String used to prepend to IE event types.
     * @const
     * @private
     */
    const onString_ = "on";
    /**
     * Map of computed "on<eventname>" strings for IE event types. Caching
     * this removes an extra object allocation in goog.events.listen which
     * improves IE6 performance.
     * @const
     * @dict
     * @private
     */
    const onStringMap_: {};
    /**
     * @enum {number} Different capture simulation mode for IE8-.
     */
    enum CaptureSimulationMode {
        /**
         * Does not perform capture simulation. Will asserts in IE8- when you
         * add capture listeners.
         */
        OFF_AND_FAIL = 0,
        /**
         * Does not perform capture simulation, silently ignore capture
         * listeners.
         */
        OFF_AND_SILENT = 1,
        /**
         * Performs capture simulation.
         */
        ON = 2,
    }
    var CAPTURE_SIMULATION_MODE: number;
    /**
     * Estimated count of total native listeners.
     * @private {number}
     */
    var listenerCountEstimate_: number;
    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. A listener can only be added once
     * to an object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method, or an object with a handleEvent function.
     *     WARNING: passing an Object is now softly deprecated.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listen(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Adds an event listener for a specific event on a native event
     * target. A listener can only be added once to an object and if it
     * is added again the key for the listener is returned.
     *
     * Note that a one-off listener will not change an existing listener,
     * if any. On the other hand a normal listener will change existing
     * one-off listener to become a normal listener.
     *
     * @param {EventTarget} src The node to listen to events on.
     * @param {string|?goog.events.EventId<EVENTOBJ>} type Event type.
     * @param {!Function} listener Callback function.
     * @param {boolean} callOnce Whether the listener is a one-off
     *     listener or otherwise.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} Unique key for the listener.
     * @template EVENTOBJ
     * @private
     */
    function listen_(src: any, type: any, listener: any, callOnce: any, opt_options: any, opt_handler: any): Listener;
    /**
     * Helper function for returning a proxy function.
     * @return {!Function} A new or reused function object.
     */
    function getProxy(): any;
    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. After the event has fired the event
     * listener is removed from the target.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listenOnce(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link goog.events.Listenable}. A listener can
     * only be added once to an object.
     *
     * @param {EventTarget|goog.events.Listenable} src The target to
     *     listen to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(this:T, ?):?|{handleEvent:function(?):?}|null} listener
     *     Callback method, or an object with a handleEvent function.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @template T
     */
    function listenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_handler: any): void;
    /**
     * Removes an event listener which was added with listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types to unlisten to.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {(boolean|!EventListenerOptions)=} opt_options
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {?boolean} indicating whether the listener was there to remove.
     * @template EVENTOBJ
     */
    function unlisten(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     *
     * @param {goog.events.Key} key The key returned by listen() for this
     *     event listener.
     * @return {boolean} indicating whether the listener was there to remove.
     */
    function unlistenByKey(key: any): any;
    /**
     * Removes an event listener which was added with listenWithWrapper().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     */
    function unlistenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_handler: any): void;
    /**
     * Removes all listeners from an object. You can also optionally
     * remove listeners of a particular type.
     *
     * @param {Object|undefined} obj Object to remove listeners from. Must be an
     *     EventTarget or a goog.events.Listenable.
     * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
     *     Default is all types.
     * @return {number} Number of listeners removed.
     */
    function removeAll(obj: any, opt_type: any): any;
    /**
     * Gets the listeners for a given object, type and capture phase.
     *
     * @param {Object} obj Object to get listeners for.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Capture phase?.
     * @return {Array<!goog.events.Listener>} Array of listener objects.
     */
    function getListeners(obj: any, type: any, capture: any): any;
    /**
     * Gets the goog.events.Listener for the event or null if no such listener is
     * in use.
     *
     * @param {EventTarget|goog.events.Listenable} src The target from
     *     which to get listeners.
     * @param {?string|!goog.events.EventId<EVENTOBJ>} type The type of the event.
     * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to get.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *                            whether the listener is fired during the
     *                            capture or bubble phase of the event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} the found listener or null if not found.
     * @template EVENTOBJ
     */
    function getListener(src: any, type: any, listener: any, opt_capt: any, opt_handler: any): any;
    /**
     * Returns whether an event target has any active listeners matching the
     * specified signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     *
     * @param {EventTarget|goog.events.Listenable} obj Target to get
     *     listeners for.
     * @param {string|!goog.events.EventId=} opt_type Event type.
     * @param {boolean=} opt_capture Whether to check for capture or bubble-phase
     *     listeners.
     * @return {boolean} Whether an event target has one or more listeners matching
     *     the requested type and/or capture phase.
     */
    function hasListener(obj: any, opt_type: any, opt_capture: any): any;
    /**
     * Provides a nice string showing the normalized event objects public members
     * @param {Object} e Event Object.
     * @return {string} String of the public members of the normalized event object.
     */
    function expose(e: any): string;
    /**
     * Returns a string with on prepended to the specified type. This is used for IE
     * which expects "on" to be prepended. This function caches the string in order
     * to avoid extra allocations in steady state.
     * @param {string} type Event type.
     * @return {string} The type string with 'on' prepended.
     * @private
     */
    function getOnString_(type: any): any;
    /**
     * Fires an object's listeners of a particular type and phase
     *
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     */
    function fireListeners(obj: any, type: any, capture: any, eventObject: any): any;
    /**
     * Fires an object's listeners of a particular type and phase.
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     * @private
     */
    function fireListeners_(obj: any, type: any, capture: any, eventObject: any): boolean;
    /**
     * Fires a listener with a set of arguments
     *
     * @param {goog.events.Listener} listener The listener object to call.
     * @param {Object} eventObject The event object to pass to the listener.
     * @return {*} Result of listener.
     */
    function fireListener(listener: any, eventObject: any): any;
    /**
     * Gets the total number of listeners currently in the system.
     * @return {number} Number of listeners.
     * @deprecated This returns estimated count, now that Closure no longer
     * stores a central listener registry. We still return an estimation
     * to keep existing listener-related tests passing. In the near future,
     * this function will be removed.
     */
    function getTotalListenerCount(): number;
    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     *
     * @param {goog.events.Listenable} src The event target.
     * @param {goog.events.EventLike} e Event object.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the handlers returns false) this will also return false.
     *     If there are no handlers, or if all handlers return true, this returns
     *     true.
     */
    function dispatchEvent(src: any, e: any): any;
    /**
     * Installs exception protection for the browser event entry point using the
     * given error handler.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point.
     */
    function protectBrowserEventEntryPoint(errorHandler: any): void;
    /**
     * Handles an event and dispatches it to the correct listeners. This
     * function is a proxy for the real listener the user specified.
     *
     * @param {goog.events.Listener} listener The listener object.
     * @param {Event=} opt_evt Optional event object that gets passed in via the
     *     native event handlers.
     * @return {*} Result of the event handler.
     * @this {EventTarget} The object or Element that fired the event.
     * @private
     */
    function handleBrowserEvent_(listener: any, opt_evt: any): any;
    /**
     * This is used to mark the IE event object so we do not do the Closure pass
     * twice for a bubbling event.
     * @param {Event} e The IE browser event.
     * @private
     */
    function markIeEvent_(e: any): void;
    /**
     * This is used to check if an IE event has already been handled by the Closure
     * system so we do not do the Closure pass twice for a bubbling event.
     * @param {Event} e  The IE browser event.
     * @return {boolean} True if the event object has been marked.
     * @private
     */
    function isMarkedIeEvent_(e: any): boolean;
    /**
     * Counter to create unique event ids.
     * @private {number}
     */
    var uniqueIdCounter_: number;
    /**
     * Creates a unique event id.
     *
     * @param {string} identifier The identifier.
     * @return {string} A unique identifier.
     * @idGenerator {unique}
     */
    function getUniqueId(identifier: any): string;
    /**
     * @param {EventTarget} src The source object.
     * @return {goog.events.ListenerMap} A listener map for the given
     *     source object, or null if none exists.
     * @private
     */
    function getListenerMap_(src: any): ListenerMap;
    /**
     * Expando property for listener function wrapper for Object with
     * handleEvent.
     * @private @const {string}
     */
    const LISTENER_WRAPPER_PROP_: string;
    /**
     * @param {Object|Function} listener The listener function or an
     *     object that contains handleEvent method.
     * @return {!Function} Either the original function or a function that
     *     calls obj.handleEvent. If the same listener is passed to this
     *     function more than once, the same function is guaranteed to be
     *     returned.
     */
    function wrapListener(listener: any): any;
}
declare namespace goog.events {
    class EventHandler<SCOPE> extends goog.Disposable {
        handler_: any;
        keys_: Object;
        /**
         * Super class for objects that want to easily manage a number of event
         * listeners.  It allows a short cut to listen and also provides a quick way
         * to remove all events listeners belonging to this object.
         * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
         * @constructor
         * @extends {goog.Disposable}
         * @template SCOPE
         */
        constructor(opt_scope?: SCOPE);
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        listen<EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, opt_fn?: any, opt_options?: (boolean | AddEventListenerOptions) | undefined): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|!AddEventListenerOptions|undefined} options
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, EVENTOBJ, THIS
         */
        listenWithScope<T, EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, fn: any, options: boolean | AddEventListenerOptions | undefined, scope: T): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         * @private
         */
        private listen_<EVENTOBJ, THIS>(src, type, opt_fn?, opt_options?, opt_scope?);
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         * opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        listenOnce<EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, opt_fn?: any, opt_options?: (boolean | AddEventListenerOptions) | undefined): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, EVENTOBJ, THIS
         */
        listenOnceWithScope<T, EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, fn: any, capture: boolean | undefined, scope: T): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired
         * the event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         * @private
         */
        private listenOnce_<EVENTOBJ, THIS>(src, type, opt_fn?, opt_options?, opt_scope?);
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:SCOPE, ?):?|{handleEvent:function(?):?}|null} listener
         *     Callback method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         */
        listenWithWrapper<THIS>(src: EventTarget | goog.events.EventTarget, wrapper: goog.events.EventWrapper, listener: (this: SCOPE, arg1: any) => any | {
            handleEvent: (arg0: any) => any;
        } | null, opt_capt?: boolean | undefined): THIS;
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:T, ?):?|{handleEvent:function(this:T, ?):?}|null}
         *     listener Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, THIS
         */
        listenWithWrapperAndScope<T, THIS>(src: EventTarget | goog.events.EventTarget, wrapper: goog.events.EventWrapper, listener: any, capture: boolean | undefined, scope: T): THIS;
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         * @private
         */
        private listenWithWrapper_<THIS>(src, wrapper, listener, opt_capt?, opt_scope?);
        /**
         * @return {number} Number of listeners registered by this handler.
         */
        getListenerCount(): number;
        /**
         * Unlistens on an event.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type or array of event types to unlisten to.
         * @param {function(this:?, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {(boolean|!EventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        unlisten(src: any, type: any, opt_fn: any, opt_options: any, opt_scope: any): this;
        /**
         * Removes an event listener which was added with listenWithWrapper().
         *
         * @param {EventTarget|goog.events.EventTarget} src The target to stop
         *     listening to events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
         *     listener function to remove.
         * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase of the
         *     event.
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         */
        unlistenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_scope: any): this;
        /**
         * Unlistens to all events.
         */
        removeAll(): void;
        /**
         * Disposes of this EventHandler and removes all listeners that it registered.
         * @override
         * @protected
         */
        protected disposeInternal(): void;
        /**
         * Default event handler
         * @param {goog.events.Event} e Event object.
         */
        handleEvent(e: any): void;
    }
}
declare namespace goog.events.EventHandler {
    /**
     * Utility array used to unify the cases of listening for an array of types
     * and listening for a single event, without using recursion or allocating
     * an array each time.
     * @type {!Array<string>}
     * @const
     * @private
     */
    const typeArray_: any[];
}
declare namespace goog.events {
    class EventTarget extends goog.Disposable implements goog.events.Listenable {
        eventTargetListeners_: goog.events.ListenerMap;
        actualEventTarget_: Object;
        parentEventTarget_: goog.events.EventTarget;
        /**
         * An implementation of {@code goog.events.Listenable} with full W3C
         * EventTarget-like support (capture/bubble mechanism, stopping event
         * propagation, preventing default actions).
         *
         * You may subclass this class to turn your class into a Listenable.
         *
         * Unless propagation is stopped, an event dispatched by an
         * EventTarget will bubble to the parent returned by
         * {@code getParentEventTarget}. To set the parent, call
         * {@code setParentEventTarget}. Subclasses that don't support
         * changing the parent can override the setter to throw an error.
         *
         * Example usage:
         * <pre>
         *   var source = new goog.events.EventTarget();
         *   function handleEvent(e) {
         *     alert('Type: ' + e.type + '; Target: ' + e.target);
         *   }
         *   source.listen('foo', handleEvent);
         *   // Or: goog.events.listen(source, 'foo', handleEvent);
         *   ...
         *   source.dispatchEvent('foo');  // will call handleEvent
         *   ...
         *   source.unlisten('foo', handleEvent);
         *   // Or: goog.events.unlisten(source, 'foo', handleEvent);
         * </pre>
         *
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.events.Listenable}
         */
        constructor();
        /**
         * Returns the parent of this event target to use for bubbling.
         *
         * @return {goog.events.EventTarget} The parent EventTarget or null if
         *     there is no parent.
         * @override
         */
        getParentEventTarget(): EventTarget;
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.EventTarget} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: any): void;
        /**
         * Adds an event listener to the event target. The same handler can only be
         * added once per the type. Even if you add the same handler multiple times
         * using the same type then it will only be called once when the event is
         * dispatched.
         *
         * @param {string|!goog.events.EventId} type The type of the event to listen for
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #listen} instead, when possible. Otherwise, use
         *     {@code goog.events.listen} if you are passing Object
         *     (instead of Function) as handler.
         */
        addEventListener(type: string | goog.events.EventId, handler: (arg0: any) => any | {
            handleEvent: (any) => any;
        } | null, opt_capture?: boolean | undefined, opt_handlerScope?: object | undefined): void;
        /**
         * Removes an event listener from the event target. The handler must be the
         * same object as the one added. If the handler has not been added then
         * nothing is done.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #unlisten} instead, when possible. Otherwise, use
         *     {@code goog.events.unlisten} if you are passing Object
         *     (instead of Function) as handler.
         */
        removeEventListener(type: any, handler: any, opt_capture?: any, opt_handlerScope?: any): void;
        /** @override */
        dispatchEvent(e: any): boolean;
        /**
         * Removes listeners from this object.  Classes that extend EventTarget may
         * need to override this method in order to remove references to DOM Elements
         * and additional listeners.
         * @override
         */
        protected disposeInternal(): void;
        /** @override */
        listen(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        listenOnce(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        unlisten(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): boolean;
        /** @override */
        unlistenByKey(key: any): boolean;
        /** @override */
        removeAllListeners(opt_type?: any): number;
        /** @override */
        fireListeners(type: any, capture: any, eventObject: any): boolean;
        /** @override */
        getListeners(type: any, capture: any): ListenableKey[];
        /** @override */
        getListener(type: any, listener: any, capture: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        hasListener(opt_type?: any, opt_capture?: any): boolean;
        /**
         * Sets the target to be used for {@code event.target} when firing
         * event. Mainly used for testing. For example, see
         * {@code goog.testing.events.mixinListenable}.
         * @param {!Object} target The target.
         */
        setTargetForTesting(target: object): void;
        /**
         * Asserts that the event target instance is initialized properly.
         * @private
         */
        assertInitialized_(): void;
    }
}
declare namespace goog.events.EventTarget {
    /**
     * An artificial cap on the number of ancestors you can have. This is mainly
     * for loop detection.
     * @const {number}
     * @private
     */
    var MAX_ANCESTORS_: number;
    /**
     * Dispatches the given event on the ancestorsTree.
     *
     * @param {!Object} target The target to dispatch on.
     * @param {goog.events.Event|Object|string} e The event object.
     * @param {Array<goog.events.Listenable>=} opt_ancestorsTree The ancestors
     *     tree of the target, in reverse order from the closest ancestor
     *     to the root event target. May be null if the target has no ancestor.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the listeners returns false) this will also return false.
     * @private
     */
    function dispatchEventInternal_(target: object, e: goog.events.Event | object | string, opt_ancestorsTree?: Array<goog.events.Listenable> | undefined): boolean;
}
declare namespace goog.dom.vendor {
    /**
     * Returns the JS vendor prefix used in CSS properties. Different vendors
     * use different methods of changing the case of the property names.
     *
     * @return {?string} The JS vendor prefix or null if there is none.
     */
    function getVendorJsPrefix(): "Webkit" | "Moz" | "ms" | "O";
    /**
     * Returns the vendor prefix used in CSS properties.
     *
     * @return {?string} The vendor prefix or null if there is none.
     */
    function getVendorPrefix(): "-webkit" | "-moz" | "-ms" | "-o";
    /**
     * @param {string} propertyName A property name.
     * @param {!Object=} opt_object If provided, we verify if the property exists in
     *     the object.
     * @return {?string} A vendor prefixed property name, or null if it does not
     *     exist.
     */
    function getPrefixedPropertyName(propertyName: any, opt_object: any): any;
    /**
     * @param {string} eventType An event type.
     * @return {string} A lower-cased vendor prefixed event type.
     */
    function getPrefixedEventType(eventType: any): string;
}
declare namespace goog.math {
    /**
      * Class for representing a box. A box is specified as a top, right, bottom,
      * and left. A box is useful for representing margins and padding.
      *
      * This class assumes 'screen coordinates': larger Y coordinates are further
      * from the top of the screen.
     */
    class Box {
        top: number;
        right: number;
        bottom: number;
        left: number;
        /**
    
         *
         * @param {number} top Top.
         * @param {number} right Right.
         * @param {number} bottom Bottom.
         * @param {number} left Left.
         * @struct
         * @constructor
         */
        constructor(top: number, right: number, bottom: number, left: number);
        /**
         * @return {number} width The width of this Box.
         */
        getWidth(): number;
        /**
         * @return {number} height The height of this Box.
         */
        getHeight(): number;
        /**
         * Creates a copy of the box with the same dimensions.
         * @return {!goog.math.Box} A clone of this Box.
         */
        clone(): Box;
        /**
         * Returns a nice string representing the box.
         * @return {string} In the form (50t, 73r, 24b, 13l).
         * @override
         */
        toString(): string;
        /**
         * Returns whether the box contains a coordinate or another box.
         *
         * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
         * @return {boolean} Whether the box contains the coordinate or other box.
         */
        contains(other: any): boolean;
        /**
         * Expands box with the given margins.
         *
         * @param {number|goog.math.Box} top Top margin or box with all margins.
         * @param {number=} opt_right Right margin.
         * @param {number=} opt_bottom Bottom margin.
         * @param {number=} opt_left Left margin.
         * @return {!goog.math.Box} A reference to this Box.
         */
        expand(top: any, opt_right?: any, opt_bottom?: any, opt_left?: any): this;
        /**
         * Expand this box to include another box.
         * NOTE(user): This is used in code that needs to be very fast, please don't
         * add functionality to this function at the expense of speed (variable
         * arguments, accepting multiple argument types, etc).
         * @param {goog.math.Box} box The box to include in this one.
         */
        expandToInclude(box: any): void;
        /**
         * Expand this box to include the coordinate.
         * @param {!goog.math.Coordinate} coord The coordinate to be included
         *     inside the box.
         */
        expandToIncludeCoordinate(coord: any): void;
        /**
         * Rounds the fields to the next larger integer values.
         *
         * @return {!goog.math.Box} This box with ceil'd fields.
         */
        ceil: () => any;
        /**
         * Rounds the fields to the next smaller integer values.
         *
         * @return {!goog.math.Box} This box with floored fields.
         */
        floor(): this;
        /**
         * Rounds the fields to nearest integer values.
         *
         * @return {!goog.math.Box} This box with rounded fields.
         */
        round(): this;
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the left and right values are translated by the coordinate's
         * x value and the top and bottom values are translated by the coordinate's y
         * value.  Otherwise, {@code tx} and {@code opt_ty} are used to translate the x
         * and y dimension values.
         *
         * @param {number|goog.math.Coordinate} tx The value to translate the x
         *     dimension values by or the the coordinate to translate this box by.
         * @param {number=} opt_ty The value to translate y dimension values by.
         * @return {!goog.math.Box} This box after translating.
         */
        translate(tx: any, opt_ty?: any): this;
        /**
         * Scales this coordinate by the given scale factors. The x and y dimension
         * values are scaled by {@code sx} and {@code opt_sy} respectively.
         * If {@code opt_sy} is not given, then {@code sx} is used for both x and y.
         *
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Box} This box after scaling.
         */
        scale(sx: any, opt_sy?: any): this;
    }
}
declare namespace goog.math.Box {
    /**
     * Creates a Box by bounding a collection of goog.math.Coordinate objects
     * @param {...goog.math.Coordinate} var_args Coordinates to be included inside
     *     the box.
     * @return {!goog.math.Box} A Box containing all the specified Coordinates.
     */
    function boundingBox(var_args: any): Box;
    /**
     * Compares boxes for equality.
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A Box.
     * @return {boolean} True iff the boxes are equal, or if both are null.
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns whether a box contains a coordinate or another box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
     * @return {boolean} Whether the box contains the coordinate or other box.
     */
    function contains(box: any, other: any): boolean;
    /**
     * Returns the relative x position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The x position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionX(box: any, coord: any): number;
    /**
     * Returns the relative y position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The y position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionY(box: any, coord: any): number;
    /**
     * Returns the distance between a coordinate and the nearest corner/side of a
     * box. Returns zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The distance between {@code coord} and the nearest
     *     corner/side of {@code box}, or zero if {@code coord} is inside
     *     {@code box}.
     */
    function distance(box: any, coord: any): number;
    /**
     * Returns whether two boxes intersect.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersects(a: any, b: any): boolean;
    /**
     * Returns whether two boxes would intersect with additional padding.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @param {number} padding The additional padding.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersectsWithPadding(a: any, b: any, padding: any): boolean;
}
declare namespace goog.math {
    /**
     * Record for representing rectangular regions, allows compatibility between
     * things like ClientRect and goog.math.Rect.
     *
     * @record
     */
    interface IRect {
        /** @type {number} */
        left: number;
        /** @type {number} */
        top: number;
        /** @type {number} */
        width: number;
        /** @type {number} */
        height: number;
    }
}
declare namespace goog.math {
    class Rect implements goog.math.IRect {
        left: number;
        top: number;
        width: number;
        height: number;
        /**
         * Class for representing rectangular regions.
         * @param {number} x Left.
         * @param {number} y Top.
         * @param {number} w Width.
         * @param {number} h Height.
         * @struct
         * @constructor
         * @implements {goog.math.IRect}
         */
        constructor(x: number, y: number, w: number, h: number);
        /**
         * @return {!goog.math.Rect} A new copy of this Rectangle.
         */
        clone(): Rect;
        /**
         * Returns a new Box object with the same position and dimensions as this
         * rectangle.
         * @return {!goog.math.Box} A new Box representation of this Rectangle.
         */
        toBox(): Box;
        /**
         * Returns a nice string representing size and dimensions of rectangle.
         * @return {string} In the form (50, 73 - 75w x 25h).
         * @override
         */
        toString(): string;
        /**
         * Computes the intersection of this rectangle and the rectangle parameter.  If
         * there is no intersection, returns false and leaves this rectangle as is.
         * @param {goog.math.IRect} rect A Rectangle.
         * @return {boolean} True iff this rectangle intersects with the parameter.
         */
        intersection(rect: any): boolean;
        /**
         * Returns whether a rectangle intersects this rectangle.
         * @param {goog.math.IRect} rect A rectangle.
         * @return {boolean} Whether rect intersects this rectangle.
         */
        intersects(rect: any): boolean;
        /**
         * Computes the difference regions between this rectangle and {@code rect}. The
         * return value is an array of 0 to 4 rectangles defining the remaining regions
         * of this rectangle after the other has been subtracted.
         * @param {goog.math.IRect} rect A Rectangle.
         * @return {!Array<!goog.math.Rect>} An array with 0 to 4 rectangles which
         *     together define the difference area of rectangle a minus rectangle b.
         */
        difference(rect: any): any[];
        /**
         * Expand this rectangle to also include the area of the given rectangle.
         * @param {goog.math.IRect} rect The other rectangle.
         */
        boundingRect(rect: any): void;
        /**
         * Tests whether this rectangle entirely contains another rectangle or
         * coordinate.
         *
         * @param {goog.math.IRect|goog.math.Coordinate} another The rectangle or
         *     coordinate to test for containment.
         * @return {boolean} Whether this rectangle contains given rectangle or
         *     coordinate.
         */
        contains(another: any): boolean;
        /**
         * @param {!goog.math.Coordinate} point A coordinate.
         * @return {number} The squared distance between the point and the closest
         *     point inside the rectangle. Returns 0 if the point is inside the
         *     rectangle.
         */
        squaredDistance(point: any): number;
        /**
         * @param {!goog.math.Coordinate} point A coordinate.
         * @return {number} The distance between the point and the closest point
         *     inside the rectangle. Returns 0 if the point is inside the rectangle.
         */
        distance(point: any): number;
        /**
         * @return {!goog.math.Size} The size of this rectangle.
         */
        getSize(): Size;
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the top-left corner of
         *     the rectangle.
         */
        getTopLeft(): Coordinate;
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the center of the
         *     rectangle.
         */
        getCenter(): Coordinate;
        /**
         * @return {!goog.math.Coordinate} A new coordinate for the bottom-right corner
         *     of the rectangle.
         */
        getBottomRight(): Coordinate;
        /**
         * Rounds the fields to the next larger integer values.
         * @return {!goog.math.Rect} This rectangle with ceil'd fields.
         */
        ceil(): this;
        /**
         * Rounds the fields to the next smaller integer values.
         * @return {!goog.math.Rect} This rectangle with floored fields.
         */
        floor(): this;
        /**
         * Rounds the fields to nearest integer values.
         * @return {!goog.math.Rect} This rectangle with rounded fields.
         */
        round(): this;
        /**
         * Translates this rectangle by the given offsets. If a
         * {@code goog.math.Coordinate} is given, then the left and top values are
         * translated by the coordinate's x and y values. Otherwise, top and left are
         * translated by {@code tx} and {@code opt_ty} respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate left by or the
         *     the coordinate to translate this rect by.
         * @param {number=} opt_ty The value to translate top by.
         * @return {!goog.math.Rect} This rectangle after translating.
         */
        translate(tx: any, opt_ty?: any): this;
        /**
         * Scales this rectangle by the given scale factors. The left and width values
         * are scaled by {@code sx} and the top and height values are scaled by
         * {@code opt_sy}.  If {@code opt_sy} is not given, then all fields are scaled
         * by {@code sx}.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Rect} This rectangle after scaling.
         */
        scale(sx: any, opt_sy?: any): this;
    }
}
declare namespace goog.math.Rect {
    /**
     * Creates a new Rect object with the position and size given.
     * @param {!goog.math.Coordinate} position The top-left coordinate of the Rect
     * @param {!goog.math.Size} size The size of the Rect
     * @return {!goog.math.Rect} A new Rect initialized with the given position and
     *     size.
     */
    function createFromPositionAndSize(position: any, size: any): Rect;
    /**
     * Creates a new Rect object with the same position and dimensions as a given
     * Box.  Note that this is only the inverse of toBox if left/top are defined.
     * @param {goog.math.Box} box A box.
     * @return {!goog.math.Rect} A new Rect initialized with the box's position
     *     and size.
     */
    function createFromBox(box: any): Rect;
    /**
     * Compares rectangles for equality.
     * @param {goog.math.IRect} a A Rectangle.
     * @param {goog.math.IRect} b A Rectangle.
     * @return {boolean} True iff the rectangles have the same left, top, width,
     *     and height, or if both are null.
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns the intersection of two rectangles. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param {goog.math.IRect} a A Rectangle.
     * @param {goog.math.IRect} b A Rectangle.
     * @return {goog.math.Rect} A new intersection rect (even if width and height
     *     are 0), or null if there is no intersection.
     */
    function intersection(a: any, b: any): Rect;
    /**
     * Returns whether two rectangles intersect. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param {goog.math.IRect} a A Rectangle.
     * @param {goog.math.IRect} b A Rectangle.
     * @return {boolean} Whether a and b intersect.
     */
    function intersects(a: any, b: any): boolean;
    /**
     * Computes the difference regions between two rectangles. The return value is
     * an array of 0 to 4 rectangles defining the remaining regions of the first
     * rectangle after the second has been subtracted.
     * @param {goog.math.Rect} a A Rectangle.
     * @param {goog.math.IRect} b A Rectangle.
     * @return {!Array<!goog.math.Rect>} An array with 0 to 4 rectangles which
     *     together define the difference area of rectangle a minus rectangle b.
     */
    function difference(a: any, b: any): any[];
    /**
     * Returns a new rectangle which completely contains both input rectangles.
     * @param {goog.math.IRect} a A rectangle.
     * @param {goog.math.IRect} b A rectangle.
     * @return {goog.math.Rect} A new bounding rect, or null if either rect is
     *     null.
     */
    function boundingRect(a: any, b: any): Rect;
}
declare namespace goog.style {
    /**
     * Sets a style value on an element.
     *
     * This function is not indended to patch issues in the browser's style
     * handling, but to allow easy programmatic access to setting dash-separated
     * style properties.  An example is setting a batch of properties from a data
     * object without overwriting old styles.  When possible, use native APIs:
     * elem.style.propertyKey = 'value' or (if obliterating old styles is fine)
     * elem.style.cssText = 'property1: value1; property2: value2'.
     *
     * @param {Element} element The element to change.
     * @param {string|Object} style If a string, a style name. If an object, a hash
     *     of style names to style values.
     * @param {string|number|boolean=} opt_value If style was a string, then this
     *     should be the value.
     */
    function setStyle(element: any, style: any, opt_value?: any): void;
    /**
     * Sets a style value on an element, with parameters swapped to work with
     * {@code goog.object.forEach()}. Prepends a vendor-specific prefix when
     * necessary.
     * @param {Element} element The element to change.
     * @param {string|number|boolean|undefined} value Style value.
     * @param {string} style Style name.
     * @private
     */
    function setStyle_(element: any, value: any, style: any): void;
    /**
     * Style name cache that stores previous property name lookups.
     *
     * This is used by setStyle to speed up property lookups, entries look like:
     *   { StyleName: ActualPropertyName }
     *
     * @private {!Object<string, string>}
     */
    var styleNameCache_: {};
    /**
     * Returns the style property name in camel-case. If it does not exist and a
     * vendor-specific version of the property does exist, then return the vendor-
     * specific property name instead.
     * @param {Element} element The element to change.
     * @param {string} style Style name.
     * @return {string} Vendor-specific style.
     * @private
     */
    function getVendorJsStyleName_(element: any, style: any): any;
    /**
     * Returns the style property name in CSS notation. If it does not exist and a
     * vendor-specific version of the property does exist, then return the vendor-
     * specific property name instead.
     * @param {Element} element The element to change.
     * @param {string} style Style name.
     * @return {string} Vendor-specific style.
     * @private
     */
    function getVendorStyleName_(element: any, style: any): any;
    /**
     * Retrieves an explicitly-set style value of a node. This returns '' if there
     * isn't a style attribute on the element or if this style property has not been
     * explicitly set in script.
     *
     * @param {Element} element Element to get style of.
     * @param {string} property Property to get, css-style (if you have a camel-case
     * property, use element.style[style]).
     * @return {string} Style value.
     */
    function getStyle(element: any, property: any): any;
    /**
     * Retrieves a computed style value of a node. It returns empty string if the
     * value cannot be computed (which will be the case in Internet Explorer) or
     * "none" if the property requested is an SVG one and it has not been
     * explicitly set (firefox and webkit).
     *
     * @param {Element} element Element to get style of.
     * @param {string} property Property to get (camel-case).
     * @return {string} Style value.
     */
    function getComputedStyle(element: any, property: any): string;
    /**
     * Gets the cascaded style value of a node, or null if the value cannot be
     * computed (only Internet Explorer can do this).
     *
     * @param {Element} element Element to get style of.
     * @param {string} style Property to get (camel-case).
     * @return {string} Style value.
     */
    function getCascadedStyle(element: any, style: any): any;
    /**
     * Cross-browser pseudo get computed style. It returns the computed style where
     * available. If not available it tries the cascaded style value (IE
     * currentStyle) and in worst case the inline style value.  It shouldn't be
     * called directly, see http://wiki/Main/ComputedStyleVsCascadedStyle for
     * discussion.
     *
     * @param {Element} element Element to get style of.
     * @param {string} style Property to get (must be camelCase, not css-style.).
     * @return {string} Style value.
     * @private
     */
    function getStyle_(element: any, style: any): any;
    /**
     * Retrieves the computed value of the box-sizing CSS attribute.
     * Browser support: http://caniuse.com/css3-boxsizing.
     * @param {!Element} element The element whose box-sizing to get.
     * @return {?string} 'content-box', 'border-box' or 'padding-box'. null if
     *     box-sizing is not supported (IE7 and below).
     */
    function getComputedBoxSizing(element: any): any;
    /**
     * Retrieves the computed value of the position CSS attribute.
     * @param {Element} element The element to get the position of.
     * @return {string} Position value.
     */
    function getComputedPosition(element: any): any;
    /**
     * Retrieves the computed background color string for a given element. The
     * string returned is suitable for assigning to another element's
     * background-color, but is not guaranteed to be in any particular string
     * format. Accessing the color in a numeric form may not be possible in all
     * browsers or with all input.
     *
     * If the background color for the element is defined as a hexadecimal value,
     * the resulting string can be parsed by goog.color.parse in all supported
     * browsers.
     *
     * Whether named colors like "red" or "lightblue" get translated into a
     * format which can be parsed is browser dependent. Calling this function on
     * transparent elements will return "transparent" in most browsers or
     * "rgba(0, 0, 0, 0)" in WebKit.
     * @param {Element} element The element to get the background color of.
     * @return {string} The computed string value of the background color.
     */
    function getBackgroundColor(element: any): any;
    /**
     * Retrieves the computed value of the overflow-x CSS attribute.
     * @param {Element} element The element to get the overflow-x of.
     * @return {string} The computed string value of the overflow-x attribute.
     */
    function getComputedOverflowX(element: any): any;
    /**
     * Retrieves the computed value of the overflow-y CSS attribute.
     * @param {Element} element The element to get the overflow-y of.
     * @return {string} The computed string value of the overflow-y attribute.
     */
    function getComputedOverflowY(element: any): any;
    /**
     * Retrieves the computed value of the z-index CSS attribute.
     * @param {Element} element The element to get the z-index of.
     * @return {string|number} The computed value of the z-index attribute.
     */
    function getComputedZIndex(element: any): any;
    /**
     * Retrieves the computed value of the text-align CSS attribute.
     * @param {Element} element The element to get the text-align of.
     * @return {string} The computed string value of the text-align attribute.
     */
    function getComputedTextAlign(element: any): any;
    /**
     * Retrieves the computed value of the cursor CSS attribute.
     * @param {Element} element The element to get the cursor of.
     * @return {string} The computed string value of the cursor attribute.
     */
    function getComputedCursor(element: any): any;
    /**
     * Retrieves the computed value of the CSS transform attribute.
     * @param {Element} element The element to get the transform of.
     * @return {string} The computed string representation of the transform matrix.
     */
    function getComputedTransform(element: any): any;
    /**
     * Sets the top/left values of an element.  If no unit is specified in the
     * argument then it will add px. The second argument is required if the first
     * argument is a string or number and is ignored if the first argument
     * is a coordinate.
     * @param {Element} el Element to move.
     * @param {string|number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {string|number=} opt_arg2 Top position.
     */
    function setPosition(el: any, arg1: any, opt_arg2?: any): void;
    /**
     * Gets the offsetLeft and offsetTop properties of an element and returns them
     * in a Coordinate object
     * @param {Element} element Element.
     * @return {!goog.math.Coordinate} The position.
     */
    function getPosition(element: any): math.Coordinate;
    /**
     * Returns the viewport element for a particular document
     * @param {Node=} opt_node DOM node (Document is OK) to get the viewport element
     *     of.
     * @return {Element} document.documentElement or document.body.
     */
    function getClientViewportElement(opt_node?: any): any;
    /**
     * Calculates the viewport coordinates relative to the page/document
     * containing the node. The viewport may be the browser viewport for
     * non-iframe document, or the iframe container for iframe'd document.
     * @param {!Document} doc The document to use as the reference point.
     * @return {!goog.math.Coordinate} The page offset of the viewport.
     */
    function getViewportPageOffset(doc: any): math.Coordinate;
    /**
     * Gets the client rectangle of the DOM element.
     *
     * getBoundingClientRect is part of a new CSS object model draft (with a
     * long-time presence in IE), replacing the error-prone parent offset
     * computation and the now-deprecated Gecko getBoxObjectFor.
     *
     * This utility patches common browser bugs in getBoundingClientRect. It
     * will fail if getBoundingClientRect is unsupported.
     *
     * If the element is not in the DOM, the result is undefined, and an error may
     * be thrown depending on user agent.
     *
     * @param {!Element} el The element whose bounding rectangle is being queried.
     * @return {Object} A native bounding rectangle with numerical left, top,
     *     right, and bottom.  Reported by Firefox to be of object type ClientRect.
     * @private
     */
    function getBoundingClientRect_(el: any): any;
    /**
     * Returns the first parent that could affect the position of a given element.
     * @param {Element} element The element to get the offset parent for.
     * @return {Element} The first offset parent or null if one cannot be found.
     */
    function getOffsetParent(element: any): any;
    /**
     * Calculates and returns the visible rectangle for a given element. Returns a
     * box describing the visible portion of the nearest scrollable offset ancestor.
     * Coordinates are given relative to the document.
     *
     * @param {Element} element Element to get the visible rect for.
     * @return {goog.math.Box} Bounding elementBox describing the visible rect or
     *     null if scrollable ancestor isn't inside the visible viewport.
     */
    function getVisibleRectForElement(element: any): math.Box;
    /**
     * Calculate the scroll position of {@code container} with the minimum amount so
     * that the content and the borders of the given {@code element} become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     *
     * @param {Element} element The element to make visible.
     * @param {Element=} opt_container The container to scroll. If not set, then the
     *     document scroll element will be used.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     * @return {!goog.math.Coordinate} The new scroll position of the container,
     *     in form of goog.math.Coordinate(scrollLeft, scrollTop).
     */
    function getContainerOffsetToScrollInto(element: any, opt_container?: any, opt_center?: any): math.Coordinate;
    /**
     * Changes the scroll position of {@code container} with the minimum amount so
     * that the content and the borders of the given {@code element} become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     *
     * @param {Element} element The element to make visible.
     * @param {Element=} opt_container The container to scroll. If not set, then the
     *     document scroll element will be used.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     */
    function scrollIntoContainerView(element: any, opt_container?: any, opt_center?: any): void;
    /**
     * Returns clientLeft (width of the left border and, if the directionality is
     * right to left, the vertical scrollbar) and clientTop as a coordinate object.
     *
     * @param {Element} el Element to get clientLeft for.
     * @return {!goog.math.Coordinate} Client left and top.
     */
    function getClientLeftTop(el: any): math.Coordinate;
    /**
     * Returns a Coordinate object relative to the top-left of the HTML document.
     * Implemented as a single function to save having to do two recursive loops in
     * opera and safari just to get both coordinates.  If you just want one value do
     * use goog.style.getPageOffsetLeft() and goog.style.getPageOffsetTop(), but
     * note if you call both those methods the tree will be analysed twice.
     *
     * @param {Element} el Element to get the page offset for.
     * @return {!goog.math.Coordinate} The page offset.
     */
    function getPageOffset(el: any): math.Coordinate;
    /**
     * Returns the left coordinate of an element relative to the HTML document
     * @param {Element} el Elements.
     * @return {number} The left coordinate.
     */
    function getPageOffsetLeft(el: any): number;
    /**
     * Returns the top coordinate of an element relative to the HTML document
     * @param {Element} el Elements.
     * @return {number} The top coordinate.
     */
    function getPageOffsetTop(el: any): number;
    /**
     * Returns a Coordinate object relative to the top-left of an HTML document
     * in an ancestor frame of this element. Used for measuring the position of
     * an element inside a frame relative to a containing frame.
     *
     * @param {Element} el Element to get the page offset for.
     * @param {Window} relativeWin The window to measure relative to. If relativeWin
     *     is not in the ancestor frame chain of the element, we measure relative to
     *     the top-most window.
     * @return {!goog.math.Coordinate} The page offset.
     */
    function getFramedPageOffset(el: any, relativeWin: any): math.Coordinate;
    /**
     * Translates the specified rect relative to origBase page, for newBase page.
     * If origBase and newBase are the same, this function does nothing.
     *
     * @param {goog.math.Rect} rect The source rectangle relative to origBase page,
     *     and it will have the translated result.
     * @param {goog.dom.DomHelper} origBase The DomHelper for the input rectangle.
     * @param {goog.dom.DomHelper} newBase The DomHelper for the resultant
     *     coordinate.  This must be a DOM for an ancestor frame of origBase
     *     or the same as origBase.
     */
    function translateRectForAnotherFrame(rect: any, origBase: any, newBase: any): void;
    /**
     * Returns the position of an element relative to another element in the
     * document.  A relative to B
     * @param {Element|Event|goog.events.Event} a Element or mouse event whose
     *     position we're calculating.
     * @param {Element|Event|goog.events.Event} b Element or mouse event position
     *     is relative to.
     * @return {!goog.math.Coordinate} The relative position.
     */
    function getRelativePosition(a: any, b: any): math.Coordinate;
    /**
     * Returns the position of the event or the element's border box relative to
     * the client viewport.
     * @param {!Element} el Element whose position to get.
     * @return {!goog.math.Coordinate} The position.
     * @private
     */
    function getClientPositionForElement_(el: any): math.Coordinate;
    /**
     * Returns the position of the event or the element's border box relative to
     * the client viewport. If an event is passed, and if this event is a "touch"
     * event, then the position of the first changedTouches will be returned.
     * @param {Element|Event|goog.events.Event} el Element or a mouse / touch event.
     * @return {!goog.math.Coordinate} The position.
     */
    function getClientPosition(el: any): math.Coordinate;
    /**
     * Moves an element to the given coordinates relative to the client viewport.
     * @param {Element} el Absolutely positioned element to set page offset for.
     *     It must be in the document.
     * @param {number|goog.math.Coordinate} x Left position of the element's margin
     *     box or a coordinate object.
     * @param {number=} opt_y Top position of the element's margin box.
     */
    function setPageOffset(el: any, x: any, opt_y?: any): void;
    /**
     * Sets the width/height values of an element.  If an argument is numeric,
     * or a goog.math.Size is passed, it is assumed to be pixels and will add
     * 'px' after converting it to an integer in string form. (This just sets the
     * CSS width and height properties so it might set content-box or border-box
     * size depending on the box model the browser is using.)
     *
     * @param {Element} element Element to set the size of.
     * @param {string|number|goog.math.Size} w Width of the element, or a
     *     size object.
     * @param {string|number=} opt_h Height of the element. Required if w is not a
     *     size object.
     */
    function setSize(element: any, w: any, opt_h?: any): void;
    /**
     * Helper function to create a string to be set into a pixel-value style
     * property of an element. Can round to the nearest integer value.
     *
     * @param {string|number} value The style value to be used. If a number,
     *     'px' will be appended, otherwise the value will be applied directly.
     * @param {boolean} round Whether to round the nearest integer (if property
     *     is a number).
     * @return {string} The string value for the property.
     * @private
     */
    function getPixelStyleValue_(value: any, round: any): any;
    /**
     * Set the height of an element.  Sets the element's style property.
     * @param {Element} element Element to set the height of.
     * @param {string|number} height The height value to set.  If a number, 'px'
     *     will be appended, otherwise the value will be applied directly.
     */
    function setHeight(element: any, height: any): void;
    /**
     * Set the width of an element.  Sets the element's style property.
     * @param {Element} element Element to set the width of.
     * @param {string|number} width The width value to set.  If a number, 'px'
     *     will be appended, otherwise the value will be applied directly.
     */
    function setWidth(element: any, width: any): void;
    /**
     * Gets the height and width of an element, even if its display is none.
     *
     * Specifically, this returns the height and width of the border box,
     * irrespective of the box model in effect.
     *
     * Note that this function does not take CSS transforms into account. Please see
     * {@code goog.style.getTransformedSize}.
     * @param {Element} element Element to get size of.
     * @return {!goog.math.Size} Object with width/height properties.
     */
    function getSize(element: any): any;
    /**
     * Call {@code fn} on {@code element} such that {@code element}'s dimensions are
     * accurate when it's passed to {@code fn}.
     * @param {function(!Element): T} fn Function to call with {@code element} as
     *     an argument after temporarily changing {@code element}'s display such
     *     that its dimensions are accurate.
     * @param {!Element} element Element (which may have display none) to use as
     *     argument to {@code fn}.
     * @return {T} Value returned by calling {@code fn} with {@code element}.
     * @template T
     * @private
     */
    function evaluateWithTemporaryDisplay_(fn: any, element: any): any;
    /**
     * Gets the height and width of an element when the display is not none.
     * @param {Element} element Element to get size of.
     * @return {!goog.math.Size} Object with width/height properties.
     * @private
     */
    function getSizeWithDisplay_(element: any): math.Size;
    /**
     * Gets the height and width of an element, post transform, even if its display
     * is none.
     *
     * This is like {@code goog.style.getSize}, except:
     * <ol>
     * <li>Takes webkitTransforms such as rotate and scale into account.
     * <li>Will return null if {@code element} doesn't respond to
     *     {@code getBoundingClientRect}.
     * <li>Currently doesn't make sense on non-WebKit browsers which don't support
     *    webkitTransforms.
     * </ol>
     * @param {!Element} element Element to get size of.
     * @return {goog.math.Size} Object with width/height properties.
     */
    function getTransformedSize(element: any): math.Size;
    /**
     * Returns a bounding rectangle for a given element in page space.
     * @param {Element} element Element to get bounds of. Must not be display none.
     * @return {!goog.math.Rect} Bounding rectangle for the element.
     */
    function getBounds(element: any): math.Rect;
    /**
     * Converts a CSS selector in the form style-property to styleProperty.
     * @param {*} selector CSS Selector.
     * @return {string} Camel case selector.
     * @deprecated Use goog.string.toCamelCase instead.
     */
    function toCamelCase(selector: any): string;
    /**
     * Converts a CSS selector in the form styleProperty to style-property.
     * @param {string} selector Camel case selector.
     * @return {string} Selector cased.
     * @deprecated Use goog.string.toSelectorCase instead.
     */
    function toSelectorCase(selector: any): string;
    /**
     * Gets the opacity of a node (x-browser). This gets the inline style opacity
     * of the node, and does not take into account the cascaded or the computed
     * style for this node.
     * @param {Element} el Element whose opacity has to be found.
     * @return {number|string} Opacity between 0 and 1 or an empty string {@code ''}
     *     if the opacity is not set.
     */
    function getOpacity(el: any): number | "";
    /**
     * Sets the opacity of a node (x-browser).
     * @param {Element} el Elements whose opacity has to be set.
     * @param {number|string} alpha Opacity between 0 and 1 or an empty string
     *     {@code ''} to clear the opacity.
     */
    function setOpacity(el: any, alpha: any): void;
    /**
     * Sets the background of an element to a transparent image in a browser-
     * independent manner.
     *
     * This function does not support repeating backgrounds or alternate background
     * positions to match the behavior of Internet Explorer. It also does not
     * support sizingMethods other than crop since they cannot be replicated in
     * browsers other than Internet Explorer.
     *
     * @param {Element} el The element to set background on.
     * @param {string} src The image source URL.
     */
    function setTransparentBackgroundImage(el: any, src: any): void;
    /**
     * Clears the background image of an element in a browser independent manner.
     * @param {Element} el The element to clear background image for.
     */
    function clearTransparentBackgroundImage(el: any): void;
    /**
     * Shows or hides an element from the page. Hiding the element is done by
     * setting the display property to "none", removing the element from the
     * rendering hierarchy so it takes up no space. To show the element, the default
     * inherited display property is restored (defined either in stylesheets or by
     * the browser's default style rules.)
     *
     * Caveat 1: if the inherited display property for the element is set to "none"
     * by the stylesheets, that is the property that will be restored by a call to
     * showElement(), effectively toggling the display between "none" and "none".
     *
     * Caveat 2: if the element display style is set inline (by setting either
     * element.style.display or a style attribute in the HTML), a call to
     * showElement will clear that setting and defer to the inherited style in the
     * stylesheet.
     * @param {Element} el Element to show or hide.
     * @param {*} display True to render the element in its default style,
     *     false to disable rendering the element.
     * @deprecated Use goog.style.setElementShown instead.
     */
    function showElement(el: any, display: any): void;
    /**
     * Shows or hides an element from the page. Hiding the element is done by
     * setting the display property to "none", removing the element from the
     * rendering hierarchy so it takes up no space. To show the element, the default
     * inherited display property is restored (defined either in stylesheets or by
     * the browser's default style rules).
     *
     * Caveat 1: if the inherited display property for the element is set to "none"
     * by the stylesheets, that is the property that will be restored by a call to
     * setElementShown(), effectively toggling the display between "none" and
     * "none".
     *
     * Caveat 2: if the element display style is set inline (by setting either
     * element.style.display or a style attribute in the HTML), a call to
     * setElementShown will clear that setting and defer to the inherited style in
     * the stylesheet.
     * @param {Element} el Element to show or hide.
     * @param {*} isShown True to render the element in its default style,
     *     false to disable rendering the element.
     */
    function setElementShown(el: any, isShown: any): void;
    /**
     * Test whether the given element has been shown or hidden via a call to
     * {@link #setElementShown}.
     *
     * Note this is strictly a companion method for a call
     * to {@link #setElementShown} and the same caveats apply; in particular, this
     * method does not guarantee that the return value will be consistent with
     * whether or not the element is actually visible.
     *
     * @param {Element} el The element to test.
     * @return {boolean} Whether the element has been shown.
     * @see #setElementShown
     */
    function isElementShown(el: any): boolean;
    /**
     * Installs the style sheet into the window that contains opt_node.  If
     * opt_node is null, the main window is used.
     * @param {!goog.html.SafeStyleSheet} safeStyleSheet The style sheet to install.
     * @param {?Node=} opt_node Node whose parent document should have the
     *     styles installed.
     * @return {!HTMLStyleElement|!StyleSheet} In IE<11, a StyleSheet object with no
     *     owning <style> tag (this is how IE creates style sheets).  In every other
     *     browser, a <style> element with an attached style.  This doesn't return a
     *     StyleSheet object so that setSafeStyleSheet can replace it (otherwise, if
     *     you pass a StyleSheet to setSafeStyleSheet, it will make a new StyleSheet
     *     and leave the original StyleSheet orphaned).
     */
    function installSafeStyleSheet(safeStyleSheet: any, opt_node?: any): any;
    /**
     * Removes the styles added by {@link #installStyles}.
     * @param {Element|StyleSheet} styleSheet The value returned by
     *     {@link #installStyles}.
     */
    function uninstallStyles(styleSheet: any): void;
    /**
     * Sets the content of a style element.  The style element can be any valid
     * style element.  This element will have its content completely replaced by
     * the safeStyleSheet.
     * @param {!Element|!StyleSheet} element A stylesheet element as returned by
     *     installStyles.
     * @param {!goog.html.SafeStyleSheet} safeStyleSheet The new content of the
     *     stylesheet.
     */
    function setSafeStyleSheet(element: any, safeStyleSheet: any): void;
    /**
     * Sets 'white-space: pre-wrap' for a node (x-browser).
     *
     * There are as many ways of specifying pre-wrap as there are browsers.
     *
     * CSS3/IE8: white-space: pre-wrap;
     * Mozilla:  white-space: -moz-pre-wrap;
     * Opera:    white-space: -o-pre-wrap;
     * IE6/7:    white-space: pre; word-wrap: break-word;
     *
     * @param {Element} el Element to enable pre-wrap for.
     */
    function setPreWrap(el: any): void;
    /**
     * Sets 'display: inline-block' for an element (cross-browser).
     * @param {Element} el Element to which the inline-block display style is to be
     *    applied.
     * @see ../demos/inline_block_quirks.html
     * @see ../demos/inline_block_standards.html
     */
    function setInlineBlock(el: any): void;
    /**
     * Returns true if the element is using right to left (rtl) direction.
     * @param {Element} el  The element to test.
     * @return {boolean} True for right to left, false for left to right.
     */
    function isRightToLeft(el: any): boolean;
    /**
     * The CSS style property corresponding to an element being
     * unselectable on the current browser platform (null if none).
     * Opera and IE instead use a DOM attribute 'unselectable'. MS Edge uses
     * the Webkit prefix.
     * @type {?string}
     * @private
     */
    var unselectableStyle_: string;
    /**
     * Returns true if the element is set to be unselectable, false otherwise.
     * Note that on some platforms (e.g. Mozilla), even if an element isn't set
     * to be unselectable, it will behave as such if any of its ancestors is
     * unselectable.
     * @param {Element} el  Element to check.
     * @return {boolean}  Whether the element is set to be unselectable.
     */
    function isUnselectable(el: any): boolean;
    /**
     * Makes the element and its descendants selectable or unselectable.  Note
     * that on some platforms (e.g. Mozilla), even if an element isn't set to
     * be unselectable, it will behave as such if any of its ancestors is
     * unselectable.
     * @param {Element} el  The element to alter.
     * @param {boolean} unselectable  Whether the element and its descendants
     *     should be made unselectable.
     * @param {boolean=} opt_noRecurse  Whether to only alter the element's own
     *     selectable state, and leave its descendants alone; defaults to false.
     */
    function setUnselectable(el: any, unselectable: any, opt_noRecurse?: any): void;
    /**
     * Gets the border box size for an element.
     * @param {Element} element  The element to get the size for.
     * @return {!goog.math.Size} The border box size.
     */
    function getBorderBoxSize(element: any): math.Size;
    /**
     * Sets the border box size of an element. This is potentially expensive in IE
     * if the document is CSS1Compat mode
     * @param {Element} element  The element to set the size on.
     * @param {goog.math.Size} size  The new size.
     */
    function setBorderBoxSize(element: any, size: any): void;
    /**
     * Gets the content box size for an element.  This is potentially expensive in
     * all browsers.
     * @param {Element} element  The element to get the size for.
     * @return {!goog.math.Size} The content box size.
     */
    function getContentBoxSize(element: any): math.Size;
    /**
     * Sets the content box size of an element. This is potentially expensive in IE
     * if the document is BackCompat mode.
     * @param {Element} element  The element to set the size on.
     * @param {goog.math.Size} size  The new size.
     */
    function setContentBoxSize(element: any, size: any): void;
    /**
     * Helper function that sets the box sizing as well as the width and height
     * @param {Element} element  The element to set the size on.
     * @param {goog.math.Size} size  The new size to set.
     * @param {string} boxSizing  The box-sizing value.
     * @private
     */
    function setBoxSizingSize_(element: any, size: any, boxSizing: any): void;
    /**
     * IE specific function that converts a non pixel unit to pixels.
     * @param {Element} element  The element to convert the value for.
     * @param {string} value  The current value as a string. The value must not be
     *     ''.
     * @param {string} name  The CSS property name to use for the converstion. This
     *     should be 'left', 'top', 'width' or 'height'.
     * @param {string} pixelName  The CSS pixel property name to use to get the
     *     value in pixels.
     * @return {number} The value in pixels.
     * @private
     */
    function getIePixelValue_(element: any, value: any, name: any, pixelName: any): number;
    /**
     * Helper function for getting the pixel padding or margin for IE.
     * @param {Element} element  The element to get the padding for.
     * @param {string} propName  The property name.
     * @return {number} The pixel padding.
     * @private
     */
    function getIePixelDistance_(element: any, propName: any): number;
    /**
     * Gets the computed paddings or margins (on all sides) in pixels.
     * @param {Element} element  The element to get the padding for.
     * @param {string} stylePrefix  Pass 'padding' to retrieve the padding box,
     *     or 'margin' to retrieve the margin box.
     * @return {!goog.math.Box} The computed paddings or margins.
     * @private
     */
    function getBox_(element: any, stylePrefix: any): math.Box;
    /**
     * Gets the computed paddings (on all sides) in pixels.
     * @param {Element} element  The element to get the padding for.
     * @return {!goog.math.Box} The computed paddings.
     */
    function getPaddingBox(element: any): math.Box;
    /**
     * Gets the computed margins (on all sides) in pixels.
     * @param {Element} element  The element to get the margins for.
     * @return {!goog.math.Box} The computed margins.
     */
    function getMarginBox(element: any): math.Box;
    /**
     * A map used to map the border width keywords to a pixel width.
     * @type {!Object}
     * @private
     */
    var ieBorderWidthKeywords_: {
        'thin': number;
        'medium': number;
        'thick': number;
    };
    /**
     * Helper function for IE to get the pixel border.
     * @param {Element} element  The element to get the pixel border for.
     * @param {string} prop  The part of the property name.
     * @return {number} The value in pixels.
     * @private
     */
    function getIePixelBorder_(element: any, prop: any): any;
    /**
     * Gets the computed border widths (on all sides) in pixels
     * @param {Element} element  The element to get the border widths for.
     * @return {!goog.math.Box} The computed border widths.
     */
    function getBorderBox(element: any): math.Box;
    /**
     * Returns the font face applied to a given node. Opera and IE should return
     * the font actually displayed. Firefox returns the author's most-preferred
     * font (whether the browser is capable of displaying it or not.)
     * @param {Element} el  The element whose font family is returned.
     * @return {string} The font family applied to el.
     */
    function getFontFamily(el: any): any;
    /**
     * Regular expression used for getLengthUnits.
     * @type {RegExp}
     * @private
     */
    var lengthUnitRegex_: RegExp;
    /**
     * Returns the units used for a CSS length measurement.
     * @param {string} value  A CSS length quantity.
     * @return {?string} The units of measurement.
     */
    function getLengthUnits(value: any): any;
    /**
     * Map of absolute CSS length units
     * @type {!Object}
     * @private
     */
    var ABSOLUTE_CSS_LENGTH_UNITS_: {
        'cm': number;
        'in': number;
        'mm': number;
        'pc': number;
        'pt': number;
    };
    /**
     * Map of relative CSS length units that can be accurately converted to px
     * font-size values using getIePixelValue_. Only units that are defined in
     * relation to a font size are convertible (%, small, etc. are not).
     * @type {!Object}
     * @private
     */
    var CONVERTIBLE_RELATIVE_CSS_UNITS_: {
        'em': number;
        'ex': number;
    };
    /**
     * Returns the font size, in pixels, of text in an element.
     * @param {Element} el  The element whose font size is returned.
     * @return {number} The font size (in pixels).
     */
    function getFontSize(el: any): any;
    /**
     * Parses a style attribute value.  Converts CSS property names to camel case.
     * @param {string} value The style attribute value.
     * @return {!Object} Map of CSS properties to string values.
     */
    function parseStyleAttribute(value: string): object;
    /**
     * Reverse of parseStyleAttribute; that is, takes a style object and returns the
     * corresponding attribute value.  Converts camel case property names to proper
     * CSS selector names.
     * @param {Object} obj Map of CSS properties to values.
     * @return {string} The style attribute value.
     */
    function toStyleAttribute(obj: any): string;
    /**
     * Sets CSS float property on an element.
     * @param {Element} el The element to set float property on.
     * @param {string} value The value of float CSS property to set on this element.
     */
    function setFloat(el: any, value: any): void;
    /**
     * Gets value of explicitly-set float CSS property on an element.
     * @param {Element} el The element to get float property of.
     * @return {string} The value of explicitly-set float CSS property on this
     *     element.
     */
    function getFloat(el: any): any;
    /**
     * Returns the scroll bar width (represents the width of both horizontal
     * and vertical scroll).
     *
     * @param {string=} opt_className An optional class name (or names) to apply
     *     to the invisible div created to measure the scrollbar. This is necessary
     *     if some scrollbars are styled differently than others.
     * @return {number} The scroll bar width in px.
     */
    function getScrollbarWidth(opt_className?: any): number;
    /**
     * Regular expression to extract x and y translation components from a CSS
     * transform Matrix representation.
     *
     * @type {!RegExp}
     * @const
     * @private
     */
    var MATRIX_TRANSLATION_REGEX_: RegExp;
    /**
     * Returns the x,y translation component of any CSS transforms applied to the
     * element, in pixels.
     *
     * @param {!Element} element The element to get the translation of.
     * @return {!goog.math.Coordinate} The CSS translation of the element in px.
     */
    function getCssTranslation(element: any): math.Coordinate;
}
declare namespace goog.ui {
    class IdGenerator {
        /**
         * Creates a new id generator.
         * @constructor
         * @final
         */
        constructor();
        /**
         * Next unique ID to use
         * @type {number}
         * @private
         */
        private nextId_;
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}
declare namespace goog.ui.IdGenerator {
    var instance_: any;
    function getInstance(): goog.ui.IdGenerator;
}
declare namespace goog.ui {
    /**
     * Default implementation of UI component.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @suppress {underscore}
     */
    class Component extends goog.events.EventTarget {
        protected dom_: goog.dom.DomHelper;
        private rightToLeft_;
        private id_;
        private inDocument_;
        private element_;
        private googUiComponentHandler_;
        private model_;
        private parent_;
        private children_;
        private childIndex_;
        private wasDecorated_;
        private idGenerator_;
        constructor(opt_domHelper?: goog.dom.DomHelper);
        /**
         * Static helper method; returns the type of event components are expected to
         * dispatch when transitioning to or from the given state.
         * @param {goog.ui.Component.State} state State to/from which the component
         *     is transitioning.
         * @param {boolean} isEntering Whether the component is entering or leaving the
         *     state.
         * @return {goog.ui.Component.EventType} Event type to dispatch.
         */
        static getStateTransitionEvent(state: goog.ui.Component.State, isEntering: boolean): goog.ui.Component.EventType;
        /**
         * Set the default right-to-left value. This causes all component's created from
         * this point forward to have the given value. This is useful for cases where
         * a given page is always in one directionality, avoiding unnecessary
         * right to left determinations.
         * @param {?boolean} rightToLeft Whether the components should be rendered
         *     right-to-left. Null iff components should determine their directionality.
         */
        static setDefaultRightToLeft(rightToLeft?: boolean): void;
        /**
         * Gets the unique ID for the instance of this component.  If the instance
         * doesn't already have an ID, generates one on the fly.
         * @return {string} Unique component ID.
         */
        getId(): string;
        /**
         * Assigns an ID to this component instance.  It is the caller's responsibility
         * to guarantee that the ID is unique.  If the component is a child of a parent
         * component, then the parent component's child index is updated to reflect the
         * new ID; this may throw an error if the parent already has a child with an ID
         * that conflicts with the new ID.
         * @param {string} id Unique component ID.
         */
        setId(id: string): void;
        /**
         * Gets the component's element.
         * @return {Element} The element for the component.
         */
        getElement(): Element;
        /**
         * Gets the component's element. This differs from getElement in that
         * it assumes that the element exists (i.e. the component has been
         * rendered/decorated) and will cause an assertion error otherwise (if
         * assertion is enabled).
         * @return {!Element} The element for the component.
         */
        getElementStrict(): Element;
        /**
         * Sets the component's root element to the given element.  Considered
         * protected and final.
         *
         * This should generally only be called during createDom. Setting the element
         * does not actually change which element is rendered, only the element that is
         * associated with this UI component.
         *
         * This should only be used by subclasses and its associated renderers.
         *
         * @param {Element} element Root element for the component.
         */
        setElementInternal(element: Element): void;
        /**
         * Returns an array of all the elements in this component's DOM with the
         * provided className.
         * @param {string} className The name of the class to look for.
         * @return {!IArrayLike<!Element>} The items found with the class name provided.
         */
        getElementsByClass(className: string): IArrayLike<Element>;
        /**
         * Returns the first element in this component's DOM with the provided
         * className.
         * @param {string} className The name of the class to look for.
         * @return {Element} The first item with the class name provided.
         */
        getElementByClass(className: string): Element;
        /**
         * Similar to {@code getElementByClass} except that it expects the
         * element to be present in the dom thus returning a required value. Otherwise,
         * will assert.
         * @param {string} className The name of the class to look for.
         * @return {!Element} The first item with the class name provided.
         */
        getRequiredElementByClass(className: any): Element;
        /**
         * Returns the event handler for this component, lazily created the first time
         * this method is called.
         * @return {!goog.events.EventHandler<T>} Event handler for this component.
         * @protected
         * @this {T}
         * @template T
         */
        protected getHandler(): events.EventHandler<void>;
        /**
         * Sets the parent of this component to use for event bubbling.  Throws an error
         * if the component already has a parent or if an attempt is made to add a
         * component to itself as a child.  Callers must use {@code removeChild}
         * or {@code removeChildAt} to remove components from their containers before
         * calling this method.
         * @see goog.ui.Component#removeChild
         * @see goog.ui.Component#removeChildAt
         * @param {goog.ui.Component} parent The parent component.
         */
        setParent(parent: any): void;
        /**
         * Returns the component's parent, if any.
         * @return {goog.ui.Component?} The parent component.
         */
        getParent(): Component;
        /**
         * Overrides {@link goog.events.EventTarget#setParentEventTarget} to throw an
         * error if the parent component is set, and the argument is not the parent.
         * @override
         */
        setParentEventTarget(parent: any): void;
        /**
         * Returns the dom helper that is being used on this component.
         * @return {!goog.dom.DomHelper} The dom helper used on this component.
         */
        getDomHelper(): dom.DomHelper;
        /**
         * Determines whether the component has been added to the document.
         * @return {boolean} TRUE if rendered. Otherwise, FALSE.
         */
        isInDocument(): boolean;
        /**
         * Creates the initial DOM representation for the component.  The default
         * implementation is to set this.element_ = div.
         */
        createDom(): void;
        /**
         * Renders the component.  If a parent element is supplied, the component's
         * element will be appended to it.  If there is no optional parent element and
         * the element doesn't have a parentNode then it will be appended to the
         * document body.
         *
         * If this component has a parent component, and the parent component is
         * not in the document already, then this will not call {@code enterDocument}
         * on this component.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Element=} opt_parentElement Optional parent element to render the
         *    component into.
         */
        render(opt_parentElement: any): void;
        /**
         * Renders the component before another element. The other element should be in
         * the document already.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Node} sibling Node to render the component before.
         */
        renderBefore(sibling: any): void;
        /**
         * Renders the component.  If a parent element is supplied, the component's
         * element will be appended to it.  If there is no optional parent element and
         * the element doesn't have a parentNode then it will be appended to the
         * document body.
         *
         * If this component has a parent component, and the parent component is
         * not in the document already, then this will not call {@code enterDocument}
         * on this component.
         *
         * Throws an Error if the component is already rendered.
         *
         * @param {Element=} opt_parentElement Optional parent element to render the
         *    component into.
         * @param {Node=} opt_beforeNode Node before which the component is to
         *    be rendered.  If left out the node is appended to the parent element.
         * @private
         */
        private render_(opt_parentElement?, opt_beforeNode?);
        /**
         * Decorates the element for the UI component. If the element is in the
         * document, the enterDocument method will be called.
         *
         * If goog.ui.Component.ALLOW_DETACHED_DECORATION is false, the caller must
         * pass an element that is in the document.
         *
         * @param {Element} element Element to decorate.
         */
        decorate(element: any): void;
        /**
         * Determines if a given element can be decorated by this type of component.
         * This method should be overridden by inheriting objects.
         * @param {Element} element Element to decorate.
         * @return {boolean} True if the element can be decorated, false otherwise.
         */
        canDecorate(element: any): boolean;
        /**
         * @return {boolean} Whether the component was decorated.
         */
        wasDecorated(): boolean;
        /**
         * Actually decorates the element. Should be overridden by inheriting objects.
         * This method can assume there are checks to ensure the component has not
         * already been rendered have occurred and that enter document will be called
         * afterwards. This method is considered protected.
         * @param {Element} element Element to decorate.
         * @protected
         */
        decorateInternal(element: any): void;
        /**
         * Called when the component's element is known to be in the document. Anything
         * using document.getElementById etc. should be done at this stage.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         */
        enterDocument(): void;
        /**
         * Called by dispose to clean up the elements and listeners created by a
         * component, or by a parent component/application who has removed the
         * component from the document but wants to reuse it later.
         *
         * If the component contains child components, this call is propagated to its
         * children.
         *
         * It should be possible for the component to be rendered again once this method
         * has been called.
         */
        exitDocument(): void;
        /**
         * Disposes of the component.  Calls {@code exitDocument}, which is expected to
         * remove event handlers and clean up the component.  Propagates the call to
         * the component's children, if any. Removes the component's DOM from the
         * document unless it was decorated.
         * @override
         * @protected
         */
        protected disposeInternal(): void;
        /**
         * Helper function for subclasses that gets a unique id for a given fragment,
         * this can be used by components to generate unique string ids for DOM
         * elements.
         * @param {string} idFragment A partial id.
         * @return {string} Unique element id.
         */
        makeId(idFragment: any): string;
        /**
         * Makes a collection of ids.  This is a convenience method for makeId.  The
         * object's values are the id fragments and the new values are the generated
         * ids.  The key will remain the same.
         * @param {Object} object The object that will be used to create the ids.
         * @return {!Object<string, string>} An object of id keys to generated ids.
         */
        makeIds(object: any): {};
        /**
         * Returns the model associated with the UI component.
         * @return {*} The model.
         */
        getModel(): any;
        /**
         * Sets the model associated with the UI component.
         * @param {*} obj The model.
         */
        setModel(obj: any): void;
        /**
         * Helper function for returning the fragment portion of an id generated using
         * makeId().
         * @param {string} id Id generated with makeId().
         * @return {string} Fragment.
         */
        getFragmentFromId(id: any): any;
        /**
         * Helper function for returning an element in the document with a unique id
         * generated using makeId().
         * @param {string} idFragment The partial id.
         * @return {Element} The element with the unique id, or null if it cannot be
         *     found.
         */
        getElementByFragment(idFragment: any): Element;
        /**
         * Adds the specified component as the last child of this component.  See
         * {@link goog.ui.Component#addChildAt} for detailed semantics.
         *
         * @see goog.ui.Component#addChildAt
         * @param {goog.ui.Component} child The new child component.
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         */
        addChild(child: any, opt_render: any): void;
        /**
         * Adds the specified component as a child of this component at the given
         * 0-based index.
         *
         * Both {@code addChild} and {@code addChildAt} assume the following contract
         * between parent and child components:
         *  <ul>
         *    <li>the child component's element must be a descendant of the parent
         *        component's element, and
         *    <li>the DOM state of the child component must be consistent with the DOM
         *        state of the parent component (see {@code isInDocument}) in the
         *        steady state -- the exception is to addChildAt(child, i, false) and
         *        then immediately decorate/render the child.
         *  </ul>
         *
         * In particular, {@code parent.addChild(child)} will throw an error if the
         * child component is already in the document, but the parent isn't.
         *
         * Clients of this API may call {@code addChild} and {@code addChildAt} with
         * {@code opt_render} set to true.  If {@code opt_render} is true, calling these
         * methods will automatically render the child component's element into the
         * parent component's element. If the parent does not yet have an element, then
         * {@code createDom} will automatically be invoked on the parent before
         * rendering the child.
         *
         * Invoking {@code parent.addChild(child, true)} will throw an error if the
         * child component is already in the document, regardless of the parent's DOM
         * state.
         *
         * If {@code opt_render} is true and the parent component is not already
         * in the document, {@code enterDocument} will not be called on this component
         * at this point.
         *
         * Finally, this method also throws an error if the new child already has a
         * different parent, or the given index is out of bounds.
         *
         * @see goog.ui.Component#addChild
         * @param {goog.ui.Component} child The new child component.
         * @param {number} index 0-based index at which the new child component is to be
         *    added; must be between 0 and the current child count (inclusive).
         * @param {boolean=} opt_render If true, the child component will be rendered
         *    into the parent.
         * @return {void} Nada.
         */
        addChildAt(child: any, index: any, opt_render: any): void;
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the component itself hasn't been rendered yet.  This default
         * implementation returns the component's root element.  Subclasses with
         * complex DOM structures must override this method.
         * @return {Element} Element to contain child elements (null if none).
         */
        getContentElement(): Element;
        /**
         * Returns true if the component is rendered right-to-left, false otherwise.
         * The first time this function is invoked, the right-to-left rendering property
         * is set if it has not been already.
         * @return {boolean} Whether the control is rendered right-to-left.
         */
        isRightToLeft(): boolean;
        /**
         * Set is right-to-left. This function should be used if the component needs
         * to know the rendering direction during dom creation (i.e. before
         * {@link #enterDocument} is called and is right-to-left is set).
         * @param {boolean} rightToLeft Whether the component is rendered
         *     right-to-left.
         */
        setRightToLeft(rightToLeft: any): void;
        /**
         * Returns true if the component has children.
         * @return {boolean} True if the component has children.
         */
        hasChildren(): boolean;
        /**
         * Returns the number of children of this component.
         * @return {number} The number of children.
         */
        getChildCount(): number;
        /**
         * Returns an array containing the IDs of the children of this component, or an
         * empty array if the component has no children.
         * @return {!Array<string>} Child component IDs.
         */
        getChildIds(): any[];
        /**
         * Returns the child with the given ID, or null if no such child exists.
         * @param {string} id Child component ID.
         * @return {goog.ui.Component?} The child with the given ID; null if none.
         */
        getChild(id: any): any;
        /**
         * Returns the child at the given index, or null if the index is out of bounds.
         * @param {number} index 0-based index.
         * @return {goog.ui.Component?} The child at the given index; null if none.
         */
        getChildAt(index: any): Component;
        /**
         * Calls the given function on each of this component's children in order.  If
         * {@code opt_obj} is provided, it will be used as the 'this' object in the
         * function when called.  The function should take two arguments:  the child
         * component and its 0-based index.  The return value is ignored.
         * @param {function(this:T,?,number):?} f The function to call for every
         * child component; should take 2 arguments (the child and its index).
         * @param {T=} opt_obj Used as the 'this' object in f when called.
         * @template T
         */
        forEachChild(f: any, opt_obj?: any): void;
        /**
         * Returns the 0-based index of the given child component, or -1 if no such
         * child is found.
         * @param {goog.ui.Component?} child The child component.
         * @return {number} 0-based index of the child component; -1 if not found.
         */
        indexOfChild(child: any): number;
        /**
         * Removes the given child from this component, and returns it.  Throws an error
         * if the argument is invalid or if the specified child isn't found in the
         * parent component.  The argument can either be a string (interpreted as the
         * ID of the child component to remove) or the child component itself.
         *
         * If {@code opt_unrender} is true, calls {@link goog.ui.component#exitDocument}
         * on the removed child, and subsequently detaches the child's DOM from the
         * document.  Otherwise it is the caller's responsibility to clean up the child
         * component's DOM.
         *
         * @see goog.ui.Component#removeChildAt
         * @param {string|goog.ui.Component|null} child The ID of the child to remove,
         *    or the child component itself.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChild(child: any, opt_unrender: any): any;
        /**
         * Removes the child at the given index from this component, and returns it.
         * Throws an error if the argument is out of bounds, or if the specified child
         * isn't found in the parent.  See {@link goog.ui.Component#removeChild} for
         * detailed semantics.
         *
         * @see goog.ui.Component#removeChild
         * @param {number} index 0-based index of the child to remove.
         * @param {boolean=} opt_unrender If true, calls {@code exitDocument} on the
         *    removed child component, and detaches its DOM from the document.
         * @return {goog.ui.Component} The removed component, if any.
         */
        removeChildAt(index: any, opt_unrender: any): any;
        /**
         * Removes every child component attached to this one and returns them.
         *
         * @see goog.ui.Component#removeChild
         * @param {boolean=} opt_unrender If true, calls {@link #exitDocument} on the
         *    removed child components, and detaches their DOM from the document.
         * @return {!Array<goog.ui.Component>} The removed components if any.
         */
        removeChildren(opt_unrender: any): any[];
    }
}
declare namespace goog.ui.Component {
    /**
     * Common events fired by components so that event propagation is useful.  Not
     * all components are expected to dispatch or listen for all event types.
     * Events dispatched before a state transition should be cancelable to prevent
     * the corresponding state change.
     * @enum {string}
     * @const
     */
    enum EventType {
        /** Dispatched before the component becomes visible. */
        BEFORE_SHOW = "beforeshow",
        /**
         * Dispatched after the component becomes visible.
         * NOTE(user) = For goog.ui.Container, this actually fires before containers
         * are shown.  Use goog.ui.Container.EventType.AFTER_SHOW if you want an event
         * that fires after a goog.ui.Container is shown.
         */
        SHOW = "show",
        /** Dispatched before the component becomes hidden. */
        HIDE = "hide",
        /** Dispatched before the component becomes disabled. */
        DISABLE = "disable",
        /** Dispatched before the component becomes enabled. */
        ENABLE = "enable",
        /** Dispatched before the component becomes highlighted. */
        HIGHLIGHT = "highlight",
        /** Dispatched before the component becomes un-highlighted. */
        UNHIGHLIGHT = "unhighlight",
        /** Dispatched before the component becomes activated. */
        ACTIVATE = "activate",
        /** Dispatched before the component becomes deactivated. */
        DEACTIVATE = "deactivate",
        /** Dispatched before the component becomes selected. */
        SELECT = "select",
        /** Dispatched before the component becomes un-selected. */
        UNSELECT = "unselect",
        /** Dispatched before a component becomes checked. */
        CHECK = "check",
        /** Dispatched before a component becomes un-checked. */
        UNCHECK = "uncheck",
        /** Dispatched before a component becomes focused. */
        FOCUS = "focus",
        /** Dispatched before a component becomes blurred. */
        BLUR = "blur",
        /** Dispatched before a component is opened (expanded). */
        OPEN = "open",
        /** Dispatched before a component is closed (collapsed). */
        CLOSE = "close",
        /** Dispatched after a component is moused over. */
        ENTER = "enter",
        /** Dispatched after a component is moused out of. */
        LEAVE = "leave",
        /** Dispatched after the user activates the component. */
        ACTION = "action",
        /** Dispatched after the external-facing state of a component is changed. */
        CHANGE = "change",
    }
    /**
     * Errors thrown by the component.
     * @const
     * @enum {string}
     */
    enum Error {
        /**
         * Error when a method is not supported.
         */
        NOT_SUPPORTED = "Method not supported",
        /**
         * Error when the given element can not be decorated.
         */
        DECORATE_INVALID = "Invalid element to decorate",
        /**
         * Error when the component is already rendered and another render attempt is
         * made.
         */
        ALREADY_RENDERED = "Component already rendered",
        /**
         * Error when an attempt is made to set the parent of a component in a way
         * that would result in an inconsistent object graph.
         */
        PARENT_UNABLE_TO_BE_SET = "Unable to set parent component",
        /**
         * Error when an attempt is made to add a child component at an out-of-bounds
         * index.  We don't support sparse child arrays.
         */
        CHILD_INDEX_OUT_OF_BOUNDS = "Child component index out of bounds",
        /**
         * Error when an attempt is made to remove a child component from a component
         * other than its parent.
         */
        NOT_OUR_CHILD = "Child is not in parent component",
        /**
         * Error when an operation requiring DOM interaction is made when the
         * component is not in the document
         */
        NOT_IN_DOCUMENT = "Operation not supported while component is not in document",
        /**
         * Error when an invalid component state is encountered.
         */
        STATE_INVALID = "Invalid component state",
    }
    /**
     * Common component states.  Components may have distinct appearance depending
     * on what state(s) apply to them.  Not all components are expected to support
     * all states.
     * @const
     * @enum {number}
     */
    enum State {
        /**
         * Union of all supported component states.
         */
        ALL = 255,
        /**
         * Component is disabled.
         * @see goog.ui.Component.EventType.DISABLE
         * @see goog.ui.Component.EventType.ENABLE
         */
        DISABLED = 1,
        /**
         * Component is highlighted.
         * @see goog.ui.Component.EventType.HIGHLIGHT
         * @see goog.ui.Component.EventType.UNHIGHLIGHT
         */
        HOVER = 2,
        /**
         * Component is active (or "pressed").
         * @see goog.ui.Component.EventType.ACTIVATE
         * @see goog.ui.Component.EventType.DEACTIVATE
         */
        ACTIVE = 4,
        /**
         * Component is selected.
         * @see goog.ui.Component.EventType.SELECT
         * @see goog.ui.Component.EventType.UNSELECT
         */
        SELECTED = 8,
        /**
         * Component is checked.
         * @see goog.ui.Component.EventType.CHECK
         * @see goog.ui.Component.EventType.UNCHECK
         */
        CHECKED = 16,
        /**
         * Component has focus.
         * @see goog.ui.Component.EventType.FOCUS
         * @see goog.ui.Component.EventType.BLUR
         */
        FOCUSED = 32,
        /**
         * Component is opened (expanded).  Applies to tree nodes, menu buttons,
         * submenus, zippys (zippies?), etc.
         * @see goog.ui.Component.EventType.OPEN
         * @see goog.ui.Component.EventType.CLOSE
         */
        OPENED = 64,
    }
    /**
     * The default right to left value.
     * @type {?boolean}
     * @private
     */
    var defaultRightToLeft_: boolean;
    var ALLOW_DETACHED_DECORATION: any;
    var DEFAULT_BIDI_DIR: any;
    var superClass_: any;
}
