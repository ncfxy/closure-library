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
 * @fileoverview A wrapper for the HTML5 FileWriter object.
 *
 * When adding or modifying functionality in this namespace, be sure to update
 * the mock counterparts in goog.testing.fs.
 *
 */
goog.provide('goog.fs.FileWriter');
goog.require('goog.fs.Error');
goog.require('goog.fs.FileSaver');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        var FileWriter = /** @class */ (function (_super) {
            __extends(FileWriter, _super);
            /**
             * An object for monitoring the saving of files, as well as other fine-grained
             * writing operations.
             *
             * This should not be instantiated directly. Instead, it should be accessed via
             * {@link goog.fs.FileEntry#createWriter}.
             *
             * @param {!FileWriter} writer The underlying FileWriter object.
             * @constructor
             * @extends {goog.fs.FileSaver}
             * @final
             */
            function FileWriter(writer) {
                var _this = _super.call(this, writer) || this;
                // goog.fs.FileWriter.base(this, 'constructor', writer);
                /**
                 * The underlying FileWriter object.
                 *
                 * @type {!FileWriter}
                 * @private
                 */
                _this.writer_ = writer;
                return _this;
            }
            /**
             * @return {number} The byte offset at which the next write will occur.
             */
            FileWriter.prototype.getPosition = function () {
                return this.writer_.position;
            };
            ;
            /**
             * @return {number} The length of the file.
             */
            FileWriter.prototype.getLength = function () {
                return this.writer_.length;
            };
            ;
            /**
             * Write data to the file.
             *
             * @param {!Blob} blob The data to write.
             */
            FileWriter.prototype.write = function (blob) {
                try {
                    this.writer_.write(blob);
                }
                catch (e) {
                    throw new goog.fs.Error(e, 'writing file');
                }
            };
            ;
            /**
             * Set the file position at which the next write will occur.
             *
             * @param {number} offset An absolute byte offset into the file.
             */
            FileWriter.prototype.seek = function (offset) {
                try {
                    this.writer_.seek(offset);
                }
                catch (e) {
                    throw new goog.fs.Error(e, 'seeking in file');
                }
            };
            ;
            /**
             * Changes the length of the file to that specified.
             *
             * @param {number} size The new size of the file, in bytes.
             */
            FileWriter.prototype.truncate = function (size) {
                try {
                    this.writer_.truncate(size);
                }
                catch (e) {
                    throw new goog.fs.Error(e, 'truncating file');
                }
            };
            ;
            return FileWriter;
        }(goog.fs.FileSaver));
        fs.FileWriter = FileWriter;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
