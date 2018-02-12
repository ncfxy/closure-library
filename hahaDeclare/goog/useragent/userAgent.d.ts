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
