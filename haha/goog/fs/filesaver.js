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
 * @fileoverview A wrapper for the HTML5 FileSaver object.
 *
 */
goog.provide('goog.fs.FileSaver');
goog.provide('goog.fs.FileSaver.EventType');
goog.provide('goog.fs.FileSaver.ReadyState');
goog.require('goog.events.EventTarget');
goog.require('goog.fs.Error');
goog.require('goog.fs.ProgressEvent');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        var FileSaver = /** @class */ (function (_super) {
            __extends(FileSaver, _super);
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
            function FileSaver(fileSaver) {
                var _this = 
                // goog.fs.FileSaver.base(this, 'constructor');
                _super.call(this) || this;
                /**
                 * The underlying FileSaver object.
                 *
                 * @type {!FileSaver}
                 * @private
                 */
                _this.saver_ = fileSaver;
                _this.saver_.onwritestart = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.saver_.onprogress = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.saver_.onwrite = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.saver_.onabort = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.saver_.onerror = goog.bind(_this.dispatchProgressEvent_, _this);
                _this.saver_.onwriteend = goog.bind(_this.dispatchProgressEvent_, _this);
                return _this;
            }
            /**
             * Abort the writing of the file.
             */
            FileSaver.prototype.abort = function () {
                try {
                    this.saver_.abort();
                }
                catch (e) {
                    throw new goog.fs.Error(e, 'aborting save');
                }
            };
            ;
            /**
             * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
             */
            FileSaver.prototype.getReadyState = function () {
                return /** @type {goog.fs.FileSaver.ReadyState} */ (this.saver_.readyState);
            };
            ;
            /**
             * @return {goog.fs.Error} The error encountered while writing, if any.
             */
            FileSaver.prototype.getError = function () {
                return this.saver_.error &&
                    new goog.fs.Error(this.saver_.error, 'saving file');
            };
            ;
            /**
             * Wrap a progress event emitted by the underlying file saver and re-emit it.
             *
             * @param {!ProgressEvent} event The underlying event.
             * @private
             */
            FileSaver.prototype.dispatchProgressEvent_ = function (event) {
                this.dispatchEvent(new goog.fs.ProgressEvent(event, this));
            };
            ;
            /** @override */
            FileSaver.prototype.disposeInternal = function () {
                delete this.saver_;
                // goog.fs.FileSaver.base(this, 'disposeInternal');
                _super.prototype.disposeInternal.call(this);
            };
            ;
            return FileSaver;
        }(goog.events.EventTarget));
        fs.FileSaver = FileSaver;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
(function (goog) {
    var fs;
    (function (fs) {
        var FileSaver;
        (function (FileSaver) {
            /**
             * Possible states for a FileSaver.
             *
             * @enum {number}
             */
            var ReadyState;
            (function (ReadyState) {
                /**
                 * The object has been constructed, but there is no pending write.
                 */
                ReadyState[ReadyState["INIT"] = 0] = "INIT";
                /**
                 * Data is being written.
                 */
                ReadyState[ReadyState["WRITING"] = 1] = "WRITING";
                /**
                 * The data has been written to the file, the write was aborted, or an error
                 * occurred.
                 */
                ReadyState[ReadyState["DONE"] = 2] = "DONE";
            })(ReadyState = FileSaver.ReadyState || (FileSaver.ReadyState = {}));
            ;
            /**
             * Events emitted by a FileSaver.
             *
             * @enum {string}
             */
            var EventType;
            (function (EventType) {
                /**
                 * Emitted when the writing begins. readyState will be WRITING.
                 */
                EventType["WRITE_START"] = "writestart";
                /**
                 * Emitted when progress has been made in saving the file. readyState will be
                 * WRITING.
                 */
                EventType["PROGRESS"] = "progress";
                /**
                 * Emitted when the data has been successfully written. readyState will be
                 * WRITING.
                 */
                EventType["WRITE"] = "write";
                /**
                 * Emitted when the writing has been aborted. readyState will be WRITING.
                 */
                EventType["ABORT"] = "abort";
                /**
                 * Emitted when an error is encountered or the writing has been aborted.
                 * readyState will be WRITING.
                 */
                EventType["ERROR"] = "error";
                /**
                 * Emitted when the writing is finished, whether successfully or not.
                 * readyState will be DONE.
                 */
                EventType["WRITE_END"] = "writeend";
            })(EventType = FileSaver.EventType || (FileSaver.EventType = {}));
            ;
        })(FileSaver = fs.FileSaver || (fs.FileSaver = {}));
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
