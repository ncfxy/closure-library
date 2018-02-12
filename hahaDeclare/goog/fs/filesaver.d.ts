declare namespace goog.fs {
    class FileSaver extends goog.events.EventTarget {
        saver_: any;
        /**
         * An object for monitoring the saving of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileSaver.EventType}.
         *
         * This should not be instantiated directly. Instead, its subclass
         * {@link goog.fs.FileWriter} should be accessed via
         * {@link goog.fs.FileEntry#createWriter}.
         *
         * @param {!FileSaver} fileSaver The underlying FileSaver object.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(fileSaver: any);
        /**
         * Abort the writing of the file.
         */
        abort(): void;
        /**
         * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
         */
        getReadyState(): any;
        /**
         * @return {goog.fs.Error} The error encountered while writing, if any.
         */
        getError(): Error;
        /**
         * Wrap a progress event emitted by the underlying file saver and re-emit it.
         *
         * @param {!ProgressEvent} event The underlying event.
         * @private
         */
        dispatchProgressEvent_(event: any): void;
        /** @override */
        protected disposeInternal(): void;
    }
}
declare namespace goog.fs.FileSaver {
    /**
     * Possible states for a FileSaver.
     *
     * @enum {number}
     */
    enum ReadyState {
        /**
         * The object has been constructed, but there is no pending write.
         */
        INIT = 0,
        /**
         * Data is being written.
         */
        WRITING = 1,
        /**
         * The data has been written to the file, the write was aborted, or an error
         * occurred.
         */
        DONE = 2,
    }
    /**
     * Events emitted by a FileSaver.
     *
     * @enum {string}
     */
    enum EventType {
        /**
         * Emitted when the writing begins. readyState will be WRITING.
         */
        WRITE_START = "writestart",
        /**
         * Emitted when progress has been made in saving the file. readyState will be
         * WRITING.
         */
        PROGRESS = "progress",
        /**
         * Emitted when the data has been successfully written. readyState will be
         * WRITING.
         */
        WRITE = "write",
        /**
         * Emitted when the writing has been aborted. readyState will be WRITING.
         */
        ABORT = "abort",
        /**
         * Emitted when an error is encountered or the writing has been aborted.
         * readyState will be WRITING.
         */
        ERROR = "error",
        /**
         * Emitted when the writing is finished, whether successfully or not.
         * readyState will be DONE.
         */
        WRITE_END = "writeend",
    }
}
