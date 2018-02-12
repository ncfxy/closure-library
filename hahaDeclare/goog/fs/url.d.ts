declare namespace goog.fs.url {
    /**
     * Creates a blob URL for a blob object.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: any): any;
    /**
     * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.
     * Throws an error if the browser does not support Object Urls.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: any): void;
    /**
     * Get the object that has the createObjectURL and revokeObjectURL functions for
     * this browser.
     *
     * @return {goog.fs.url.UrlObject_} The object for this browser.
     * @private
     */
    function getUrlObject_(): any;
    /**
     * Finds the object that has the createObjectURL and revokeObjectURL functions
     * for this browser.
     *
     * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the
     *     browser does not support Object Urls.
     * @private
     */
    function findUrlObject_(): any;
    /**
     * Checks whether this browser supports Object Urls. If not, calls to
     * createObjectUrl and revokeObjectUrl will result in an error.
     *
     * @return {boolean} True if this browser supports Object Urls.
     */
    function browserSupportsObjectUrls(): boolean;
}
