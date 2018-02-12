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
