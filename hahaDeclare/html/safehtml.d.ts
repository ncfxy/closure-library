/// <reference path="../specialtype.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../array/array.d.ts" />
/// <reference path="../asserts/asserts.d.ts" />
/// <reference path="../dom/tagname.d.ts" />
/// <reference path="../dom/tags.d.ts" />
/// <reference path="safescript.d.ts" />
/// <reference path="safestyle.d.ts" />
/// <reference path="safestylesheet.d.ts" />
/// <reference path="safeurl.d.ts" />
/// <reference path="trustedresourceurl.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="../labs/userAgent/browser.d.ts" />
/// <reference path="../object/object.d.ts" />
/// <reference path="../string/string.d.ts" />
/// <reference path="../string/const.d.ts" />
/// <reference path="../string/typedstring.d.ts" />
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
