/// <reference path="../../array/array.d.ts" />
/// <reference path="util.d.ts" />
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
