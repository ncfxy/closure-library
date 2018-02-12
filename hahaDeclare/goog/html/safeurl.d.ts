/// <reference path="../specialtype.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="../asserts/asserts.d.ts" />
/// <reference path="../fs/url.d.ts" />
/// <reference path="trustedresourceurl.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="../string/string.d.ts" />
/// <reference path="../string/const.d.ts" />
/// <reference path="../string/typedstring.d.ts" />
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
