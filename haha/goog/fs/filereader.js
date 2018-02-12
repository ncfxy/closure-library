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
 * @fileoverview A wrapper for the HTML5 FileReader object.
 *
 */
goog.provide('goog.fs.FileReader');
goog.provide('goog.fs.FileReader.EventType');
goog.provide('goog.fs.FileReader.ReadyState');
goog.require('goog.async.Deferred');
goog.require('goog.events.EventTarget');
goog.require('goog.fs.Error');
goog.require('goog.fs.ProgressEvent');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        var FileReader = /** @class */ (function (_super) {
            __extends(FileReader, _super);
            /**
             * An object for monitoring the reading of files. This emits ProgressEvents of
             * the types listed in {@link goog.fs.FileReader.EventType}.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             * @final
             */
            function FileReader() {
                var _this = _super.call(this) || this;
                // goog.fs.FileReader.base(this, 'constructor');
                /**
                 * The underlying FileReader object.
                 *
                 * @type {!FileReader}
                 * @private
                 */
                _this.reader_ = new FileReader();
                _this.reader_.onloadstart = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.reader_.onprogress = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.reader_.onload = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.reader_.onabort = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.reader_.onerror = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.reader_.onloadend = goog.bind(_this.dispatchProgressEvent_, _this);
                return _this;
            }
            /**
             * Abort the reading of the file.
             */
            FileReader.prototype.abort = function () {
                try {
                    this.reader_.abort();
                }
                catch (e) {
                    throw new goog.fs.Error(e, 'aborting read');
                }
            };
            ;
            /**
             * @return {goog.fs.FileReader.ReadyState} The current state of the FileReader.
             */
            FileReader.prototype.getReadyState = function () {
                return /** @type {goog.fs.FileReader.ReadyState} */ (this.reader_.readyState);
            };
            ;
            /**
             * @return {*} The result of the file read.
             */
            FileReader.prototype.getResult = function () {
                return this.reader_.result;
            };
            ;
            /**
             * @return {goog.fs.Error} The error encountered while reading, if any.
             */
            FileReader.prototype.getError = function () {
                return this.reader_.error &&
                    new goog.fs.Error(this.reader_.error, 'reading file');
            };
            ;
            /**
             * Wrap a progress event emitted by the underlying file reader and re-emit it.
             *
             * @param {!ProgressEvent} event The underlying event.
             * @private
             */
            FileReader.prototype.dispatchProgressEvent_ = function (event) {
                this.dispatchEvent(new goog.fs.ProgressEvent(event, this));
            };
            ;
            /** @override */
            FileReader.prototype.disposeInternal = function () {
                _super.prototype.disposeInternal.call(this);
                // goog.fs.FileReader.base(this, 'disposeInternal');
                delete this.reader_;
            };
            ;
            /**
             * Starts reading a blob as a binary string.
             * @param {!Blob} blob The blob to read.
             */
            FileReader.prototype.readAsBinaryString = function (blob) {
                this.reader_.readAsBinaryString(blob);
            };
            ;
            /**
             * Starts reading a blob as an array buffer.
             * @param {!Blob} blob The blob to read.
             */
            FileReader.prototype.readAsArrayBuffer = function (blob) {
                this.reader_.readAsArrayBuffer(blob);
            };
            ;
            /**
             * Starts reading a blob as text.
             * @param {!Blob} blob The blob to read.
             * @param {string=} opt_encoding The name of the encoding to use.
             */
            FileReader.prototype.readAsText = function (blob, opt_encoding) {
                this.reader_.readAsText(blob, opt_encoding);
            };
            ;
            /**
             * Starts reading a blob as a data URL.
             * @param {!Blob} blob The blob to read.
             */
            FileReader.prototype.readAsDataUrl = function (blob) {
                this.reader_.readAsDataURL(blob);
            };
            ;
            return FileReader;
        }(goog.events.EventTarget));
        fs.FileReader = FileReader;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
(function (goog) {
    var fs;
    (function (fs) {
        var FileReader;
        (function (FileReader) {
            /**
             * Possible states for a FileReader.
             *
             * @enum {number}
             */
            var ReadyState;
            (function (ReadyState) {
                /**
                 * The object has been constructed, but there is no pending read.
                 */
                ReadyState[ReadyState["INIT"] = 0] = "INIT";
                /**
                 * Data is being read.
                 */
                ReadyState[ReadyState["LOADING"] = 1] = "LOADING";
                /**
                 * The data has been read from the file, the read was aborted, or an error
                 * occurred.
                 */
                ReadyState[ReadyState["DONE"] = 2] = "DONE";
            })(ReadyState = FileReader.ReadyState || (FileReader.ReadyState = {}));
            ;
            /**
             * Events emitted by a FileReader.
             *
             * @enum {string}
             */
            var EventType;
            (function (EventType) {
                /**
                 * Emitted when the reading begins. readyState will be LOADING.
                 */
                EventType["LOAD_START"] = "loadstart";
                /**
                 * Emitted when progress has been made in reading the file. readyState will be
                 * LOADING.
                 */
                EventType["PROGRESS"] = "progress";
                /**
                 * Emitted when the data has been successfully read. readyState will be
                 * LOADING.
                 */
                EventType["LOAD"] = "load";
                /**
                 * Emitted when the reading has been aborted. readyState will be LOADING.
                 */
                EventType["ABORT"] = "abort";
                /**
                 * Emitted when an error is encountered or the reading has been aborted.
                 * readyState will be LOADING.
                 */
                EventType["ERROR"] = "error";
                /**
                 * Emitted when the reading is finished, whether successfully or not.
                 * readyState will be DONE.
                 */
                EventType["LOAD_END"] = "loadend";
            })(EventType = FileReader.EventType || (FileReader.EventType = {}));
            ;
            /**
             * Reads a blob as a binary string.
             * @param {!Blob} blob The blob to read.
             * @return {!goog.async.Deferred} The deferred Blob contents as a binary string.
             *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
             */
            function readAsBinaryString(blob) {
                var reader = new goog.fs.FileReader();
                var d = goog.fs.FileReader.createDeferred_(reader);
                reader.readAsBinaryString(blob);
                return d;
            }
            FileReader.readAsBinaryString = readAsBinaryString;
            ;
            /**
             * Reads a blob as an array buffer.
             * @param {!Blob} blob The blob to read.
             * @return {!goog.async.Deferred} The deferred Blob contents as an array buffer.
             *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
             */
            function readAsArrayBuffer(blob) {
                var reader = new goog.fs.FileReader();
                var d = goog.fs.FileReader.createDeferred_(reader);
                reader.readAsArrayBuffer(blob);
                return d;
            }
            FileReader.readAsArrayBuffer = readAsArrayBuffer;
            ;
            /**
             * Reads a blob as text.
             * @param {!Blob} blob The blob to read.
             * @param {string=} opt_encoding The name of the encoding to use.
             * @return {!goog.async.Deferred} The deferred Blob contents as text.
             *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
             */
            function readAsText(blob, opt_encoding) {
                var reader = new goog.fs.FileReader();
                var d = goog.fs.FileReader.createDeferred_(reader);
                reader.readAsText(blob, opt_encoding);
                return d;
            }
            FileReader.readAsText = readAsText;
            ;
            /**
             * Reads a blob as a data URL.
             * @param {!Blob} blob The blob to read.
             * @return {!goog.async.Deferred} The deferred Blob contents as a data URL.
             *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
             */
            function readAsDataUrl(blob) {
                var reader = new goog.fs.FileReader();
                var d = goog.fs.FileReader.createDeferred_(reader);
                reader.readAsDataUrl(blob);
                return d;
            }
            FileReader.readAsDataUrl = readAsDataUrl;
            ;
            /**
             * Creates a new deferred object for the results of a read method.
             * @param {goog.fs.FileReader} reader The reader to create a deferred for.
             * @return {!goog.async.Deferred} The deferred results.
             * @private
             */
            function createDeferred_(reader) {
                var deferred = new goog.async.Deferred();
                reader.listen(goog.fs.FileReader.EventType.LOAD_END, goog.partial(function (d, r, e) {
                    var result = r.getResult();
                    var error = r.getError();
                    if (result != null && !error) {
                        d.callback(result);
                    }
                    else {
                        d.errback(error);
                    }
                    r.dispose();
                }, deferred, reader));
                return deferred;
            }
            FileReader.createDeferred_ = createDeferred_;
            ;
        })(FileReader = fs.FileReader || (fs.FileReader = {}));
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
