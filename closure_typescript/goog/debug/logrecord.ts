// Copyright 2006 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Definition of the LogRecord class. Please minimize
 * dependencies this file has on other closure classes as any dependency it
 * takes won't be able to use the logging infrastructure.
 *
 */

goog.provide('goog.debug.LogRecord');

namespace goog.debug{
  export class LogRecord{
    /**
     * LogRecord objects are used to pass logging requests between
     * the logging framework and individual log Handlers.
     * @constructor
     * @param {goog.debug.Logger.Level} level One of the level identifiers.
     * @param {string} msg The string message.
     * @param {string} loggerName The name of the source logger.
     * @param {number=} opt_time Time this log record was created if other than now.
     *     If 0, we use #goog.now.
     * @param {number=} opt_sequenceNumber Sequence number of this log record. This
     *     should only be passed in when restoring a log record from persistence.
     */
    constructor(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined) {
      this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);
    }
    /**
     * Time the LogRecord was created.
     * @type {number}
     * @private
     */
    private time_: number;

    /**
     * Level of the LogRecord
     * @type {goog.debug.Logger.Level}
     * @private
     */
    private level_: goog.debug.Logger.Level;

    /**
     * Message associated with the record
     * @type {string}
     * @private
     */
    private msg_;


    /**
     * Name of the logger that created the record.
     * @type {string}
     * @private
     */
    private loggerName_;


    /**
     * Sequence number for the LogRecord. Each record has a unique sequence number
     * that is greater than all log records created before it.
     * @type {number}
     * @private
     */
    private sequenceNumber_ = 0;


    /**
     * Exception associated with the record
     * @type {Object}
     * @private
     */
    private exception_ = null;

    /**
     * A sequence counter for assigning increasing sequence numbers to LogRecord
     * objects.
     * @type {number}
     * @private
     */
    static nextSequenceNumber_ = 0;

    /**
     * Sets all fields of the log record.
     * @param {goog.debug.Logger.Level} level One of the level identifiers.
     * @param {string} msg The string message.
     * @param {string} loggerName The name of the source logger.
     * @param {number=} opt_time Time this log record was created if other than now.
     *     If 0, we use #goog.now.
     * @param {number=} opt_sequenceNumber Sequence number of this log record. This
     *     should only be passed in when restoring a log record from persistence.
     */
    public reset(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined) {
      if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {
        this.sequenceNumber_ = typeof opt_sequenceNumber == 'number' ?
          opt_sequenceNumber :
          goog.debug.LogRecord.nextSequenceNumber_++;
      }
      this.time_ = opt_time || goog.now();
      this.level_ = level;
      this.msg_ = msg;
      this.loggerName_ = loggerName;
      delete this.exception_;
    };


    /**
     * Get the source Logger's name.
     *
     * @return {string} source logger name (may be null).
     */
    public getLoggerName(): string {
      return this.loggerName_;
    };


    /**
     * Get the exception that is part of the log record.
     *
     * @return {Object} the exception.
     */
    public getException(): object {
      return this.exception_;
    };


    /**
     * Set the exception that is part of the log record.
     *
     * @param {Object} exception the exception.
     */
    public setException(exception: object) {
      this.exception_ = exception;
    };


    /**
     * Get the source Logger's name.
     *
     * @param {string} loggerName source logger name (may be null).
     */
    public setLoggerName(loggerName: string) {
      this.loggerName_ = loggerName;
    };


    /**
     * Get the logging message level, for example Level.SEVERE.
     * @return {goog.debug.Logger.Level} the logging message level.
     */
    public getLevel(): goog.debug.Logger.Level {
      return this.level_;
    };


    /**
     * Set the logging message level, for example Level.SEVERE.
     * @param {goog.debug.Logger.Level} level the logging message level.
     */
    public setLevel(level: goog.debug.Logger.Level) {
      this.level_ = level;
    };


    /**
     * Get the "raw" log message, before localization or formatting.
     *
     * @return {string} the raw message string.
     */
    public getMessage(): string {
      return this.msg_;
    };


    /**
     * Set the "raw" log message, before localization or formatting.
     *
     * @param {string} msg the raw message string.
     */
    public setMessage(msg: string) {
      this.msg_ = msg;
    };


    /**
     * Get event time in milliseconds since 1970.
     *
     * @return {number} event time in millis since 1970.
     */
    public getMillis(): number {
      return this.time_;
    };


    /**
     * Set event time in milliseconds since 1970.
     *
     * @param {number} time event time in millis since 1970.
     */
    public setMillis(time: number) {
      this.time_ = time;
    };


    /**
     * Get the sequence number.
     * <p>
     * Sequence numbers are normally assigned in the LogRecord
     * constructor, which assigns unique sequence numbers to
     * each new LogRecord in increasing order.
     * @return {number} the sequence number.
     */
    public getSequenceNumber(): number {
      return this.sequenceNumber_;
    };
  }
}


namespace goog.debug.LogRecord{
  export var ENABLE_SEQUENCE_NUMBERS = true;
}



/**
 * @define {boolean} Whether to enable log sequence numbers.
 */
goog.define('goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS', true);






