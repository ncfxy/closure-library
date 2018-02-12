declare namespace goog.fs {
    class FileReader extends goog.events.EventTarget {
        reader_: any;
        /**
         * An object for monitoring the reading of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileReader.EventType}.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor();
        /**
         * Abort the reading of the file.
         */
        abort(): void;
        /**
         * @return {goog.fs.FileReader.ReadyState} The current state of the FileReader.
         */
        getReadyState(): any;
        /**
         * @return {*} The result of the file read.
         */
        getResult(): any;
        /**
         * @return {goog.fs.Error} The error encountered while reading, if any.
         */
        getError(): goog.fs.Error;
        /**
         * Wrap a progress event emitted by the underlying file reader and re-emit it.
         *
         * @param {!ProgressEvent} event The underlying event.
         * @private
         */
        dispatchProgressEvent_(event: ProgressEvent): void;
        /** @override */
        disposeInternal(): void;
        /**
         * Starts reading a blob as a binary string.
         * @param {!Blob} blob The blob to read.
         */
        readAsBinaryString(blob: Blob): void;
        /**
         * Starts reading a blob as an array buffer.
         * @param {!Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: Blob): void;
        /**
         * Starts reading a blob as text.
         * @param {!Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: Blob, opt_encoding?: string | undefined): void;
        /**
         * Starts reading a blob as a data URL.
         * @param {!Blob} blob The blob to read.
         */
        readAsDataUrl(blob: any): void;
    }
}
declare namespace goog.fs.FileReader {
    /**
     * Possible states for a FileReader.
     *
     * @enum {number}
     */
    enum ReadyState {
        /**
         * The object has been constructed, but there is no pending read.
         */
        INIT = 0,
        /**
         * Data is being read.
         */
        LOADING = 1,
        /**
         * The data has been read from the file, the read was aborted, or an error
         * occurred.
         */
        DONE = 2,
    }
    /**
     * Events emitted by a FileReader.
     *
     * @enum {string}
     */
    enum EventType {
        /**
         * Emitted when the reading begins. readyState will be LOADING.
         */
        LOAD_START = "loadstart",
        /**
         * Emitted when progress has been made in reading the file. readyState will be
         * LOADING.
         */
        PROGRESS = "progress",
        /**
         * Emitted when the data has been successfully read. readyState will be
         * LOADING.
         */
        LOAD = "load",
        /**
         * Emitted when the reading has been aborted. readyState will be LOADING.
         */
        ABORT = "abort",
        /**
         * Emitted when an error is encountered or the reading has been aborted.
         * readyState will be LOADING.
         */
        ERROR = "error",
        /**
         * Emitted when the reading is finished, whether successfully or not.
         * readyState will be DONE.
         */
        LOAD_END = "loadend",
    }
    /**
     * Reads a blob as a binary string.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a binary string.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsBinaryString(blob: any): async.Deferred<{}>;
    /**
     * Reads a blob as an array buffer.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as an array buffer.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsArrayBuffer(blob: any): async.Deferred<{}>;
    /**
     * Reads a blob as text.
     * @param {!Blob} blob The blob to read.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred Blob contents as text.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsText(blob: any, opt_encoding: any): async.Deferred<{}>;
    /**
     * Reads a blob as a data URL.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a data URL.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsDataUrl(blob: any): async.Deferred<{}>;
    /**
     * Creates a new deferred object for the results of a read method.
     * @param {goog.fs.FileReader} reader The reader to create a deferred for.
     * @return {!goog.async.Deferred} The deferred results.
     * @private
     */
    function createDeferred_(reader: any): async.Deferred<{}>;
}
