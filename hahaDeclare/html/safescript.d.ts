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
