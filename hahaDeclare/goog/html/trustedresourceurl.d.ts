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
