declare namespace goog.ui {
    class IdGenerator {
        /**
         * Creates a new id generator.
         * @constructor
         * @final
         */
        constructor();
        /**
         * Next unique ID to use
         * @type {number}
         * @private
         */
        private nextId_;
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}
declare namespace goog.ui.IdGenerator {
    var instance_: any;
    function getInstance(): goog.ui.IdGenerator;
}
