/// <reference path="../../base.d.ts" />
/// <reference path="../../string/string.d.ts" />
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
