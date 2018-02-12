/// <reference path="../asserts/asserts" />
/// <reference path="../debug/LogRecord" />
// Copyright 2010 The Closure Library Authors. All Rights Reserved.
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
/**
 * @fileoverview A buffer for log records. The purpose of this is to improve
 * logging performance by re-using old objects when the buffer becomes full and
 * to eliminate the need for each app to implement their own log buffer. The
 * disadvantage to doing this is that log handlers cannot maintain references to
 * log records and expect that they are not overwriten at a later point.
 *
 * @author agrieve@google.com (Andrew Grieve)
 */
goog.provide('goog.debug.LogBuffer');
goog.require('goog.asserts');
goog.require('goog.debug.LogRecord');
var goog;
(function (goog) {
    var debug;
    (function (debug) {
        var LogBuffer = /** @class */ (function () {
            /**
             * Creates the log buffer.
             * @constructor
             * @final
             */
            function LogBuffer() {
                goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), 'Cannot use goog.debug.LogBuffer without defining ' +
                    'goog.debug.LogBuffer.CAPACITY.');
                this.clear();
            }
            /**
             * A static method that always returns the same instance of LogBuffer.
             * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
             */
            LogBuffer.getInstance = function () {
                if (!goog.debug.LogBuffer.instance_) {
                    // This function is written with the return statement after the assignment
                    // to avoid the jscompiler StripCode bug described in http://b/2608064.
                    // After that bug is fixed this can be refactored.
                    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer();
                }
                return goog.debug.LogBuffer.instance_;
            };
            ;
            /**
             * Adds a log record to the buffer, possibly overwriting the oldest record.
             * @param {goog.debug.Logger.Level} level One of the level identifiers.
             * @param {string} msg The string message.
             * @param {string} loggerName The name of the source logger.
             * @return {!goog.debug.LogRecord} The log record.
             */
            LogBuffer.prototype.addRecord = function (level, msg, loggerName) {
                var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
                this.curIndex_ = curIndex;
                if (this.isFull_) {
                    var ret = this.buffer_[curIndex];
                    ret.reset(level, msg, loggerName);
                    return ret;
                }
                this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;
                return this.buffer_[curIndex] =
                    new goog.debug.LogRecord(level, msg, loggerName);
            };
            ;
            /**
             * @return {boolean} Whether the log buffer is enabled.
             */
            LogBuffer.isBufferingEnabled = function () {
                return goog.debug.LogBuffer.CAPACITY > 0;
            };
            ;
            /**
             * Removes all buffered log records.
             */
            LogBuffer.prototype.clear = function () {
                this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);
                this.curIndex_ = -1;
                this.isFull_ = false;
            };
            ;
            /**
             * Calls the given function for each buffered log record, starting with the
             * oldest one.
             * @param {function(!goog.debug.LogRecord)} func The function to call.
             */
            LogBuffer.prototype.forEachRecord = function (func) {
                var buffer = this.buffer_;
                // Corner case: no records.
                if (!buffer[0]) {
                    return;
                }
                var curIndex = this.curIndex_;
                var i = this.isFull_ ? curIndex : -1;
                do {
                    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;
                    func(/** @type {!goog.debug.LogRecord} */ (buffer[i]));
                } while (i != curIndex);
            };
            ;
            return LogBuffer;
        }());
        debug.LogBuffer = LogBuffer;
    })(debug = goog.debug || (goog.debug = {}));
})(goog || (goog = {}));
(function (goog) {
    var debug;
    (function (debug) {
        var LogBuffer;
        (function (LogBuffer) {
            LogBuffer.CAPACITY = 0;
        })(LogBuffer = debug.LogBuffer || (debug.LogBuffer = {}));
    })(debug = goog.debug || (goog.debug = {}));
})(goog || (goog = {}));
/**
 * @define {number} The number of log records to buffer. 0 means disable
 * buffering.
 */
goog.define('goog.debug.LogBuffer.CAPACITY', 0);
