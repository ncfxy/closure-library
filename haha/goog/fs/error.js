// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview A wrapper for the HTML5 FileError object.
 *
 */
goog.provide('goog.fs.DOMErrorLike');
goog.provide('goog.fs.Error');
goog.provide('goog.fs.Error.ErrorCode');
goog.require('goog.asserts');
goog.require('goog.debug.Error');
goog.require('goog.object');
goog.require('goog.string');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        /** @record */
        var DOMErrorLike = /** @class */ (function () {
            function DOMErrorLike() {
            }
            return DOMErrorLike;
        }());
        fs.DOMErrorLike = DOMErrorLike;
        var Error = /** @class */ (function (_super) {
            __extends(Error, _super);
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
            function Error(error, action) {
                var _this = _super.call(this, goog.string.subs('%s %s', '', action)) || this;
                /** @type {string} */
                _this.name;
                /**
                 * @type {goog.fs.Error.ErrorCode}
                 * @deprecated Use the 'name' or 'message' field instead.
                 */
                _this.code;
                if (goog.isDef(error.name)) {
                    _this.name = error.name;
                    // TODO(user): Remove warning suppression after JSCompiler stops
                    // firing a spurious warning here.
                    /** @suppress {deprecated} */
                    _this.code = goog.fs.Error.getCodeFromName_(error.name);
                }
                else {
                    _this.code = goog.asserts.assertNumber(error.code);
                    _this.name = goog.fs.Error.getNameFromCode_(error.code);
                }
                return _this;
                // goog.fs.Error.base(
                //     this, 'constructor', goog.string.subs('%s %s', this.name, action));
            }
            ;
            return Error;
        }(goog.debug.Error));
        fs.Error = Error;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
(function (goog) {
    var fs;
    (function (fs) {
        var Error;
        (function (Error) {
            /**
             * Names of errors that may be thrown by the File API, the File System API, or
             * the File Writer API.
             *
             * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
             * @see http://www.w3.org/TR/file-system-api/#definitions
             * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
             * @enum {string}
             */
            var ErrorName;
            (function (ErrorName) {
                ErrorName["ABORT"] = "AbortError";
                ErrorName["ENCODING"] = "EncodingError";
                ErrorName["INVALID_MODIFICATION"] = "InvalidModificationError";
                ErrorName["INVALID_STATE"] = "InvalidStateError";
                ErrorName["NOT_FOUND"] = "NotFoundError";
                ErrorName["NOT_READABLE"] = "NotReadableError";
                ErrorName["NO_MODIFICATION_ALLOWED"] = "NoModificationAllowedError";
                ErrorName["PATH_EXISTS"] = "PathExistsError";
                ErrorName["QUOTA_EXCEEDED"] = "QuotaExceededError";
                ErrorName["SECURITY"] = "SecurityError";
                ErrorName["SYNTAX"] = "SyntaxError";
                ErrorName["TYPE_MISMATCH"] = "TypeMismatchError";
            })(ErrorName = Error.ErrorName || (Error.ErrorName = {}));
            /**
             * Error codes for file errors.
             * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
             *
             * @enum {number}
             * @deprecated Use the 'name' or 'message' attribute instead.
             */
            var ErrorCode;
            (function (ErrorCode) {
                ErrorCode[ErrorCode["NOT_FOUND"] = 1] = "NOT_FOUND";
                ErrorCode[ErrorCode["SECURITY"] = 2] = "SECURITY";
                ErrorCode[ErrorCode["ABORT"] = 3] = "ABORT";
                ErrorCode[ErrorCode["NOT_READABLE"] = 4] = "NOT_READABLE";
                ErrorCode[ErrorCode["ENCODING"] = 5] = "ENCODING";
                ErrorCode[ErrorCode["NO_MODIFICATION_ALLOWED"] = 6] = "NO_MODIFICATION_ALLOWED";
                ErrorCode[ErrorCode["INVALID_STATE"] = 7] = "INVALID_STATE";
                ErrorCode[ErrorCode["SYNTAX"] = 8] = "SYNTAX";
                ErrorCode[ErrorCode["INVALID_MODIFICATION"] = 9] = "INVALID_MODIFICATION";
                ErrorCode[ErrorCode["QUOTA_EXCEEDED"] = 10] = "QUOTA_EXCEEDED";
                ErrorCode[ErrorCode["TYPE_MISMATCH"] = 11] = "TYPE_MISMATCH";
                ErrorCode[ErrorCode["PATH_EXISTS"] = 12] = "PATH_EXISTS";
            })(ErrorCode = Error.ErrorCode || (Error.ErrorCode = {}));
            ;
            /**
             * @param {goog.fs.Error.ErrorCode|undefined} code
             * @return {string} name
             * @private
             */
            function getNameFromCode_(code) {
                var name = goog.object.findKey(goog.fs.Error.NameToCodeMap_, function (c) { return code == c; });
                if (!goog.isDef(name)) {
                    throw new Error('Invalid code: ' + code);
                }
                return name;
            }
            Error.getNameFromCode_ = getNameFromCode_;
            ;
            /**
             * Returns the code that corresponds to the given name.
             * @param {string} name
             * @return {goog.fs.Error.ErrorCode} code
             * @private
             */
            function getCodeFromName_(name) {
                return goog.fs.Error.NameToCodeMap_[name];
            }
            Error.getCodeFromName_ = getCodeFromName_;
            ;
            /**
             * Mapping from error names to values from the ErrorCode enum.
             * @see http://www.w3.org/TR/file-system-api/#definitions.
             * @private {!Object<string, goog.fs.Error.ErrorCode>}
             */
            Error.NameToCodeMap_ = goog.object.create(goog.fs.Error.ErrorName.ABORT, goog.fs.Error.ErrorCode.ABORT, goog.fs.Error.ErrorName.ENCODING, goog.fs.Error.ErrorCode.ENCODING, goog.fs.Error.ErrorName.INVALID_MODIFICATION, goog.fs.Error.ErrorCode.INVALID_MODIFICATION, goog.fs.Error.ErrorName.INVALID_STATE, goog.fs.Error.ErrorCode.INVALID_STATE, goog.fs.Error.ErrorName.NOT_FOUND, goog.fs.Error.ErrorCode.NOT_FOUND, goog.fs.Error.ErrorName.NOT_READABLE, goog.fs.Error.ErrorCode.NOT_READABLE, goog.fs.Error.ErrorName.NO_MODIFICATION_ALLOWED, goog.fs.Error.ErrorCode.NO_MODIFICATION_ALLOWED, goog.fs.Error.ErrorName.PATH_EXISTS, goog.fs.Error.ErrorCode.PATH_EXISTS, goog.fs.Error.ErrorName.QUOTA_EXCEEDED, goog.fs.Error.ErrorCode.QUOTA_EXCEEDED, goog.fs.Error.ErrorName.SECURITY, goog.fs.Error.ErrorCode.SECURITY, goog.fs.Error.ErrorName.SYNTAX, goog.fs.Error.ErrorCode.SYNTAX, goog.fs.Error.ErrorName.TYPE_MISMATCH, goog.fs.Error.ErrorCode.TYPE_MISMATCH);
        })(Error = fs.Error || (fs.Error = {}));
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
