declare namespace goog.labs.useragent.verifier {
    /** @const */
    const NOT_IE = 0;
    /**
     * Detect the the current IE version using runtime behavior, returns 0
     * if a version of IE is not detected.
     * @return {number}
     */
    function detectIeVersionByBehavior(): 0 | 7 | 10 | 5 | 9 | 6 | 8 | 11;
    /**
     * Detect the the current IE version using MSIE version presented in the
     * user agent string (This will not detected IE 11 which does not present a
     * MSIE version), or zero if IE is not detected.
     * @return {number}
     */
    function detectIeVersionByNavigator(): number;
    /**
     * Correct the actual IE version based on the Trident version in the user agent
     * string.  This adjusts for IE's "compatiblity modes".
     * @return {number}
     */
    function getCorrectedIEVersionByNavigator(): number;
    /**
     * Get corrected IE version, see goog.labs.userAgent.browser.getIEVersion_
     *
     * @param {string} userAgent the User-Agent.
     * @return {number}
     * @private
     */
    function getIEVersion_(userAgent: any): number;
}
