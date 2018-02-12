declare namespace goog.fs {
    class ProgressEvent extends goog.events.Event {
        private event_;
        /**
         * A wrapper for the progress events emitted by the File APIs.
         *
         * @param {!ProgressEvent} event The underlying event object.
         * @param {!Object} target The file access object emitting the event.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(event: ProgressEvent, target: object);
        /**
         * @return {boolean} Whether or not the total size of the of the file being
         *     saved is known.
         */
        isLengthComputable(): any;
        /**
         * @return {number} The number of bytes saved so far.
         */
        getLoaded(): any;
        /**
         * @return {number} The total number of bytes in the file being saved.
         */
        getTotal(): any;
    }
}
