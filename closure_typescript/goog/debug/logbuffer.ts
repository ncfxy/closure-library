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


namespace goog.debug{
  export class LogBuffer{
    /**
     * Creates the log buffer.
     * @constructor
     * @final
     */
    constructor(){
      goog.asserts.assert(
        goog.debug.LogBuffer.isBufferingEnabled(),
        'Cannot use goog.debug.LogBuffer without defining ' +
            'goog.debug.LogBuffer.CAPACITY.');
      this.clear();
    }
    /**
     * A static method that always returns the same instance of LogBuffer.
     * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
     */
    static getInstance () {
      if (!goog.debug.LogBuffer.instance_) {
        // This function is written with the return statement after the assignment
        // to avoid the jscompiler StripCode bug described in http://b/2608064.
        // After that bug is fixed this can be refactored.
        goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer();
      }
      return goog.debug.LogBuffer.instance_;
    };

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
    public addRecord(level, msg, loggerName) {
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


    /**
     * @return {boolean} Whether the log buffer is enabled.
     */
    static isBufferingEnabled() {
      return goog.debug.LogBuffer.CAPACITY > 0;
    };


    /**
     * Removes all buffered log records.
     */
    public clear() {
      this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);
      this.curIndex_ = -1;
      this.isFull_ = false;
    };


    /**
     * Calls the given function for each buffered log record, starting with the
     * oldest one.
     * @param {function(!goog.debug.LogRecord)} func The function to call.
     */
    public forEachRecord(func) {
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

  }
}


namespace goog.debug.LogBuffer{
  export var CAPACITY = 0;
  export var instance_;
}


/**
 * @define {number} The number of log records to buffer. 0 means disable
 * buffering.
 */
goog.define('goog.debug.LogBuffer.CAPACITY', 0);





