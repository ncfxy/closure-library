declare namespace goog.debug {
    class LogBuffer {
        /**
         * Creates the log buffer.
         * @constructor
         * @final
         */
        constructor();
        /**
         * A static method that always returns the same instance of LogBuffer.
         * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
         */
        static getInstance(): any;
        /**
         * The array to store the records.
         * @type {!Array<!goog.debug.LogRecord|undefined>}
         * @private
         */
        private buffer_;
        /**
         * The index of the most recently added record or -1 if there are no records.
         * @type {number}
         * @private
         */
        private curIndex_;
        /**
         * Whether the buffer is at capacity.
         * @type {boolean}
         * @private
         */
        private isFull_;
        /**
         * Adds a log record to the buffer, possibly overwriting the oldest record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @return {!goog.debug.LogRecord} The log record.
         */
        addRecord(level: any, msg: any, loggerName: any): any;
        /**
         * @return {boolean} Whether the log buffer is enabled.
         */
        static isBufferingEnabled(): boolean;
        /**
         * Removes all buffered log records.
         */
        clear(): void;
        /**
         * Calls the given function for each buffered log record, starting with the
         * oldest one.
         * @param {function(!goog.debug.LogRecord)} func The function to call.
         */
        forEachRecord(func: any): void;
    }
}
declare namespace goog.debug.LogBuffer {
    var CAPACITY: number;
    var instance_: any;
}
