declare namespace goog.fs {
    /** @record */
    class DOMErrorLike {
        /** @type {string|undefined} */
        name: string | undefined;
        /** @type {goog.fs.Error.ErrorCode|undefined} */
        code: goog.fs.Error.ErrorCode | undefined;
    }
    class Error extends goog.debug.Error {
        code: any;
        name: any;
        /**
         * A filesystem error. Since the filesystem API is asynchronous, stack traces
         * are less useful for identifying where errors come from, so this includes a
         * large amount of metadata in the message.
         *
         * @param {!DOMError|!goog.fs.DOMErrorLike} error
         * @param {string} action The action being undertaken when the error was raised.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(error: any, action?: any);
    }
}
declare namespace goog.fs.Error {
    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     *
     * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
     * @see http://www.w3.org/TR/file-system-api/#definitions
     * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
     * @enum {string}
     */
    enum ErrorName {
        ABORT = "AbortError",
        ENCODING = "EncodingError",
        INVALID_MODIFICATION = "InvalidModificationError",
        INVALID_STATE = "InvalidStateError",
        NOT_FOUND = "NotFoundError",
        NOT_READABLE = "NotReadableError",
        NO_MODIFICATION_ALLOWED = "NoModificationAllowedError",
        PATH_EXISTS = "PathExistsError",
        QUOTA_EXCEEDED = "QuotaExceededError",
        SECURITY = "SecurityError",
        SYNTAX = "SyntaxError",
        TYPE_MISMATCH = "TypeMismatchError",
    }
    /**
     * Error codes for file errors.
     * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
     *
     * @enum {number}
     * @deprecated Use the 'name' or 'message' attribute instead.
     */
    enum ErrorCode {
        NOT_FOUND = 1,
        SECURITY = 2,
        ABORT = 3,
        NOT_READABLE = 4,
        ENCODING = 5,
        NO_MODIFICATION_ALLOWED = 6,
        INVALID_STATE = 7,
        SYNTAX = 8,
        INVALID_MODIFICATION = 9,
        QUOTA_EXCEEDED = 10,
        TYPE_MISMATCH = 11,
        PATH_EXISTS = 12,
    }
    /**
     * @param {goog.fs.Error.ErrorCode|undefined} code
     * @return {string} name
     * @private
     */
    function getNameFromCode_(code: any): string;
    /**
     * Returns the code that corresponds to the given name.
     * @param {string} name
     * @return {goog.fs.Error.ErrorCode} code
     * @private
     */
    function getCodeFromName_(name: any): any;
    /**
     * Mapping from error names to values from the ErrorCode enum.
     * @see http://www.w3.org/TR/file-system-api/#definitions.
     * @private {!Object<string, goog.fs.Error.ErrorCode>}
     */
    var NameToCodeMap_: any;
}
