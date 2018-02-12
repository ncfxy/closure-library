/// <reference path="../base.ts" />
/// <reference path="../debug/debug" />
/// <reference path="../debug/LogRecord" />
/// <reference path="../debug/Logger" />
// Copyright 2013 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Basic strippable logging definitions.
 * @see http://go/closurelogging
 *
 * @author johnlenz@google.com (John Lenz)
 */

goog.provide('goog.log');
goog.provide('goog.log.Level');
goog.provide('goog.log.LogRecord');
goog.provide('goog.log.Logger');

goog.require('goog.debug');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.LogRecord');
goog.require('goog.debug.Logger');

namespace goog.log{
  export var ENABLED = goog.debug.LOGGING_ENABLED;
  /** @const {string} */
  export const ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;
}


/** @define {boolean} Whether logging is enabled. */
goog.define('goog.log.ENABLED', goog.debug.LOGGING_ENABLED);


namespace goog.log{
  export class Logger{
    /**
     * @constructor
     * @final
     */
    constructor(name){
      new goog.debug.Logger(name);
    }
  }

  export class Level{
    /**
     * @constructor
     * @final
     */
    constructor(name, value){
      new goog.debug.Logger.Level(name, value);
    }
  }

  export class LogRecord {
    /**
     * @constructor
     * @final
     */
    constructor(level: goog.debug.Logger.Level, msg: string, loggerName: string, opt_time?: number | undefined, opt_sequenceNumber?: number | undefined){
      new goog.debug.LogRecord(level, msg, loggerName, opt_time, opt_sequenceNumber);
    }
  }

}

namespace goog.log{
  /**
   * Finds or creates a logger for a named subsystem. If a logger has already been
   * created with the given name it is returned. Otherwise a new logger is
   * created. If a new logger is created its log level will be configured based
   * on the goog.debug.LogManager configuration and it will configured to also
   * send logging output to its parent's handlers.
   * @see goog.debug.LogManager
   *
   * @param {string} name A name for the logger. This should be a dot-separated
   *     name and should normally be based on the package name or class name of
   *     the subsystem, such as goog.net.BrowserChannel.
   * @param {goog.log.Level=} opt_level If provided, override the
   *     default logging level with the provided level.
   * @return {goog.log.Logger} The named logger or null if logging is disabled.
   */
  export function getLogger(name, opt_level?) {
      if (goog.log.ENABLED) {
        var logger = goog.debug.LogManager.getLogger(name);
        if (opt_level && logger) {
          logger.setLevel(opt_level);
        }
        return logger;
      } else {
        return null;
      }
    };


  // TODO(johnlenz): try to tighten the types to these functions.
  /**
   * Adds a handler to the logger. This doesn't use the event system because
   * we want to be able to add logging to the event system.
   * @param {goog.log.Logger} logger
   * @param {Function} handler Handler function to add.
   */
  export function addHandler(logger, handler) {
    if (goog.log.ENABLED && logger) {
      logger.addHandler(handler);
    }
  };


  /**
   * Removes a handler from the logger. This doesn't use the event system because
   * we want to be able to add logging to the event system.
   * @param {goog.log.Logger} logger
   * @param {Function} handler Handler function to remove.
   * @return {boolean} Whether the handler was removed.
   */
  export function removeHandler(logger, handler) {
    if (goog.log.ENABLED && logger) {
      return logger.removeHandler(handler);
    } else {
      return false;
    }
  };


  /**
   * Logs a message. If the logger is currently enabled for the
   * given message level then the given message is forwarded to all the
   * registered output Handler objects.
   * @param {goog.log.Logger} logger
   * @param {goog.log.Level} level One of the level identifiers.
   * @param {goog.debug.Loggable} msg The message to log.
   * @param {Error|Object=} opt_exception An exception associated with the
   *     message.
   */
  export function log(logger, level, msg, opt_exception?) {
    if (goog.log.ENABLED && logger) {
      logger.log(level, msg, opt_exception);
    }
  };


  /**
   * Logs a message at the Level.SEVERE level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param {goog.log.Logger} logger
   * @param {goog.debug.Loggable} msg The message to log.
   * @param {Error=} opt_exception An exception associated with the message.
   */
  export function error(logger, msg, opt_exception?) {
    if (goog.log.ENABLED && logger) {
      logger.severe(msg, opt_exception);
    }
  };


  /**
   * Logs a message at the Level.WARNING level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param {goog.log.Logger} logger
   * @param {goog.debug.Loggable} msg The message to log.
   * @param {Error=} opt_exception An exception associated with the message.
   */
  export function warning(logger, msg, opt_exception?) {
    if (goog.log.ENABLED && logger) {
      logger.warning(msg, opt_exception);
    }
  };


  /**
   * Logs a message at the Level.INFO level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param {goog.log.Logger} logger
   * @param {goog.debug.Loggable} msg The message to log.
   * @param {Error=} opt_exception An exception associated with the message.
   */
  export function info(logger, msg, opt_exception?) {
    if (goog.log.ENABLED && logger) {
      logger.info(msg, opt_exception);
    }
  };


  /**
   * Logs a message at the Level.Fine level.
   * If the logger is currently enabled for the given message level then the
   * given message is forwarded to all the registered output Handler objects.
   * @param {goog.log.Logger} logger
   * @param {goog.debug.Loggable} msg The message to log.
   * @param {Error=} opt_exception An exception associated with the message.
   */
  export function fine(logger, msg, opt_exception?) {
    if (goog.log.ENABLED && logger) {
      logger.fine(msg, opt_exception);
    }
  };

}