declare namespace goog.fs {
    /**
     * Get a wrapped FileSystem object.
     *
     * @param {goog.fs.FileSystemType_} type The type of the filesystem to get.
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     * @private
     */
    function get_(type: any, size: any): async.Deferred<{}>;
    /**
     * The two types of filesystem.
     *
     * @enum {number}
     * @private
     */
    enum FileSystemType_ {
        /**
         * A temporary filesystem may be deleted by the user agent at its discretion.
         */
        TEMPORARY = 0,
        /**
         * A persistent filesystem will never be deleted without the user's or
         * application's authorization.
         */
        PERSISTENT = 1,
    }
    /**
     * Returns a temporary FileSystem object. A temporary filesystem may be deleted
     * by the user agent at its discretion.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getTemporary(size: any): async.Deferred<{}>;
    /**
     * Returns a persistent FileSystem object. A persistent filesystem will never be
     * deleted without the user's or application's authorization.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getPersistent(size: any): async.Deferred<{}>;
    /**
     * Creates a blob URL for a blob object.
     * Throws an error if the browser does not support Object Urls.
     *
     * TODO(user): Update references to this method to use
     * goog.fs.url.createObjectUrl instead.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: any): any;
    /**
     * Revokes a URL created by {@link goog.fs.createObjectUrl}.
     * Throws an error if the browser does not support Object Urls.
     *
     * TODO(user): Update references to this method to use
     * goog.fs.url.revokeObjectUrl instead.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: any): void;
    /**
     * Checks whether this browser supports Object Urls. If not, calls to
     * createObjectUrl and revokeObjectUrl will result in an error.
     *
     * TODO(user): Update references to this method to use
     * goog.fs.url.browserSupportsObjectUrls instead.
     *
     * @return {boolean} True if this browser supports Object Urls.
     */
    function browserSupportsObjectUrls(): boolean;
    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up
     *     the resulting blob.
     * @return {!Blob} The blob.
     */
    function getBlob(var_args: any): any;
    /**
     * Creates a blob with the given properties.
     * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.
     *
     * @param {Array<string|!Blob>} parts The values that will make up the
     *     resulting blob.
     * @param {string=} opt_type The MIME type of the Blob.
     * @param {string=} opt_endings Specifies how strings containing newlines are to
     *     be written out.
     * @return {!Blob} The blob.
     */
    function getBlobWithProperties(parts: any, opt_type?: any, opt_endings?: any): any;
    /**
     * Converts a Blob or a File into a string. This should only be used when the
     * blob is known to be small.
     *
     * @param {!Blob} blob The blob to convert.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred string. If an error occurrs, the
     *     errback is called with a {@link goog.fs.Error}.
     * @deprecated Use {@link goog.fs.FileReader.readAsText} instead.
     */
    function blobToString(blob: any, opt_encoding: any): async.Deferred<{}>;
    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices can be used
     * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
     * are always clamped to blob range. If end is omitted, all the data till
     * the end of the blob is taken.
     *
     * @param {!Blob} blob The blob to be sliced.
     * @param {number} start Index of the starting byte.
     * @param {number=} opt_end Index of the ending byte.
     * @return {Blob} The blob slice or null if not supported.
     */
    function sliceBlob(blob: any, start: any, opt_end: any): any;
}
