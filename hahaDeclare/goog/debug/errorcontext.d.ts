declare namespace goog.debug.errorcontext {
    /**
     * Adds key-value context to the error.
     * @param {!Error} err The error to add context to.
     * @param {string} contextKey Key for the context to be added.
     * @param {string} contextValue Value for the context to be added.
     */
    function addErrorContext(err: any, contextKey: any, contextValue: any): void;
    /**
     * @param {!Error} err The error to get context from.
     * @return {!Object<string, string>} The context of the provided error.
     */
    function getErrorContext(err: any): any;
    /** @private @const {string} */
    var CONTEXT_KEY_: string;
}
