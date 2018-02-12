/// <reference path="../base.d.ts" />
/// <reference path="../debug/error.d.ts" />
/// <reference path="../dom/nodetype.d.ts" />
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
