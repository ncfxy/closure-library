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
 * @fileoverview A wrapper for the HTML5 File ProgressEvent objects.
 *
 */
goog.provide('goog.fs.ProgressEvent');
goog.require('goog.events.Event');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        var ProgressEvent = /** @class */ (function (_super) {
            __extends(ProgressEvent, _super);
            /**
             * A wrapper for the progress events emitted by the File APIs.
             *
             * @param {!ProgressEvent} event The underlying event object.
             * @param {!Object} target The file access object emitting the event.
             * @extends {goog.events.Event}
             * @constructor
             * @final
             */
            function ProgressEvent(event, target) {
                var _this = _super.call(this, event.type, target) || this;
                // goog.fs.ProgressEvent.base(this, 'constructor', event.type, target);
                /**
                 * The underlying event object.
                 * @type {!ProgressEvent}
                 * @private
                 */
                _this.event_ = event;
                return _this;
            }
            /**
             * @return {boolean} Whether or not the total size of the of the file being
             *     saved is known.
             */
            ProgressEvent.prototype.isLengthComputable = function () {
                return this.event_.lengthComputable;
            };
            ;
            /**
             * @return {number} The number of bytes saved so far.
             */
            ProgressEvent.prototype.getLoaded = function () {
                return this.event_.loaded;
            };
            ;
            /**
             * @return {number} The total number of bytes in the file being saved.
             */
            ProgressEvent.prototype.getTotal = function () {
                return this.event_.total;
            };
            ;
            return ProgressEvent;
        }(goog.events.Event));
        fs.ProgressEvent = ProgressEvent;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
