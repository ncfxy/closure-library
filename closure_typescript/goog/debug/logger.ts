/// <reference path="../array/array" />
/// <reference path="../asserts/asserts" />
/// <reference path="../debug/debug" />
/// <reference path="../debug/LogBuffer" />
/// <reference path="../debug/LogRecord" />
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
 * @fileoverview Definition of the Logger class. Please minimize dependencies
 * this file has on other closure classes as any dependency it takes won't be
 * able to use the logging infrastructure.
 *
 * @see ../demos/debug.html
 */

goog.provide('goog.debug.LogManager');
goog.provide('goog.debug.Loggable');
goog.provide('goog.debug.Logger');
goog.provide('goog.debug.Logger.Level');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.debug');
goog.require('goog.debug.LogBuffer');
goog.require('goog.debug.LogRecord');

namespace goog.debug{
  /**
   * A message value that can be handled by a Logger.
   *
   * Functions are treated like callbacks, but are only called when the event's
   * log level is enabled. This is useful for logging messages that are expensive
   * to construct.
   *
   * @typedef {string|function(): string}
   */
  export type Loggable = string| Function;
}


namespace goog.debug{
  /**
   * The Logger is an object used for logging debug messages. Loggers are
   * normally named, using a hierarchical dot-separated namespace. Logger names
   * can be arbitrary strings, but they should normally be based on the package
   * name or class name of the logged component, such as goog.net.BrowserChannel.
   *
   * The Logger object is loosely based on the java class
   * java.util.logging.Logger. It supports different levels of filtering for
   * different loggers.
   *
   * The logger object should never be instantiated by application code. It
   * should always use the goog.debug.Logger.getLogger function.
   *

   */
  export class Logger{
    name_:string;
    parent_: goog.debug.Logger;
    level_: goog.debug.Logger.Level;
    children_: Object;
    handlers_: Array<Function>;

    /**
     * 
     * @constructor
     * @param {string} name The name of the Logger.
     * @final
     */
    constructor(name){
        /**
       * Name of the Logger. Generally a dot-separated namespace
       * @private {string}
       */
      this.name_ = name;

      /**
       * Parent Logger.
       * @private {goog.debug.Logger}
       */
      this.parent_ = null;

      /**
       * Level that this logger only filters above. Null indicates it should
       * inherit from the parent.
       * @private {goog.debug.Logger.Level}
       */
      this.level_ = null;

      /**
       * Map of children loggers. The keys are the leaf names of the children and
       * the values are the child loggers.
       * @private {Object}
       */
      this.children_ = null;

      /**
       * Handlers that are listening to this logger.
       * @private {Array<Function>}
       */
      this.handlers_ = null;
    }

/**
     * Finds or creates a logger for a named subsystem. If a logger has already been
     * created with the given name it is returned. Otherwise a new logger is
     * created. If a new logger is created its log level will be configured based
     * on the LogManager configuration and it will configured to also send logging
     * output to its parent's handlers. It will be registered in the LogManager
     * global namespace.
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     * name and should normally be based on the package name or class name of the
     * subsystem, such as goog.net.BrowserChannel.
     * @return {!goog.debug.Logger} The named logger.
     * @deprecated use {@link goog.log} instead.
     */
    static getLogger (name) {
      return goog.debug.LogManager.getLogger(name);
    };


    /**
     * Logs a message to profiling tools, if available.
     * {@see https://developers.google.com/web-toolkit/speedtracer/logging-api}
     * {@see http://msdn.microsoft.com/en-us/library/dd433074(VS.85).aspx}
     * @param {string} msg The message to log.
     */
    static logToProfilers (msg) {
      // Some browsers also log timeStamp calls to the console, only log
      // if actually asked.
      if (goog.debug.Logger.ENABLE_PROFILER_LOGGING) {
        var msWriteProfilerMark = goog.global['msWriteProfilerMark'];
        if (msWriteProfilerMark) {
          // Logs a message to the Microsoft profiler
          // On IE, console['timeStamp'] may output to console
          msWriteProfilerMark(msg);
          return;
        }

        // Using goog.global, as loggers might be used in window-less contexts.
        var console = goog.global['console'];
        if (console && console['timeStamp']) {
          // Logs a message to Firebug, Web Inspector, SpeedTracer, etc.
          console['timeStamp'](msg);
        }
      }
    };


    /**
     * Gets the name of this logger.
     * @return {string} The name of this logger.
     */
    public getName() {
      return this.name_;
    };


    /**
     * Adds a handler to the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {Function} handler Handler function to add.
     */
    public addHandler(handler) {
      if (goog.debug.LOGGING_ENABLED) {
        if (goog.debug.Logger.ENABLE_HIERARCHY) {
          if (!this.handlers_) {
            this.handlers_ = [];
          }
          this.handlers_.push(handler);
        } else {
          goog.asserts.assert(
              !this.name_, 'Cannot call addHandler on a non-root logger when ' +
                  'goog.debug.Logger.ENABLE_HIERARCHY is false.');
          goog.debug.Logger.rootHandlers_.push(handler);
        }
      }
    };


    /**
     * Removes a handler from the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {Function} handler Handler function to remove.
     * @return {boolean} Whether the handler was removed.
     */
    public removeHandler(handler) {
      if (goog.debug.LOGGING_ENABLED) {
        var handlers = goog.debug.Logger.ENABLE_HIERARCHY ?
            this.handlers_ :
            goog.debug.Logger.rootHandlers_;
        return !!handlers && goog.array.remove(handlers, handler);
      } else {
        return false;
      }
    };


    /**
     * Returns the parent of this logger.
     * @return {goog.debug.Logger} The parent logger or null if this is the root.
     */
    public getParent() {
      return this.parent_;
    };


    /**
     * Returns the children of this logger as a map of the child name to the logger.
     * @return {!Object} The map where the keys are the child leaf names and the
     *     values are the Logger objects.
     */
    public getChildren() {
      if (!this.children_) {
        this.children_ = {};
      }
      return this.children_;
    };


    /**
     * Set the log level specifying which message levels will be logged by this
     * logger. Message levels lower than this value will be discarded.
     * The level value Level.OFF can be used to turn off logging. If the new level
     * is null, it means that this node should inherit its level from its nearest
     * ancestor with a specific (non-null) level value.
     *
     * @param {goog.debug.Logger.Level} level The new level.
     */
    public setLevel(level) {
      if (goog.debug.LOGGING_ENABLED) {
        if (goog.debug.Logger.ENABLE_HIERARCHY) {
          this.level_ = level;
        } else {
          goog.asserts.assert(
              !this.name_, 'Cannot call setLevel() on a non-root logger when ' +
                  'goog.debug.Logger.ENABLE_HIERARCHY is false.');
          goog.debug.Logger.rootLevel_ = level;
        }
      }
    };


    /**
     * Gets the log level specifying which message levels will be logged by this
     * logger. Message levels lower than this value will be discarded.
     * The level value Level.OFF can be used to turn off logging. If the level
     * is null, it means that this node should inherit its level from its nearest
     * ancestor with a specific (non-null) level value.
     *
     * @return {goog.debug.Logger.Level} The level.
     */
    public getLevel() {
      return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF;
    };


    /**
     * Returns the effective level of the logger based on its ancestors' levels.
     * @return {goog.debug.Logger.Level} The level.
     */
    public getEffectiveLevel() {
      if (!goog.debug.LOGGING_ENABLED) {
        return goog.debug.Logger.Level.OFF;
      }

      if (!goog.debug.Logger.ENABLE_HIERARCHY) {
        return goog.debug.Logger.rootLevel_;
      }
      if (this.level_) {
        return this.level_;
      }
      if (this.parent_) {
        return this.parent_.getEffectiveLevel();
      }
      goog.asserts.fail('Root logger has no level set.');
      return null;
    };


    /**
     * Checks if a message of the given level would actually be logged by this
     * logger. This check is based on the Loggers effective level, which may be
     * inherited from its parent.
     * @param {goog.debug.Logger.Level} level The level to check.
     * @return {boolean} Whether the message would be logged.
     */
    public isLoggable(level) {
      return goog.debug.LOGGING_ENABLED &&
          level.value >= this.getEffectiveLevel().value;
    };


    /**
     * Logs a message. If the logger is currently enabled for the
     * given message level then the given message is forwarded to all the
     * registered output Handler objects.
     * @param {goog.debug.Logger.Level} level One of the level identifiers.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error|Object=} opt_exception An exception associated with the
     *     message.
     */
    public log(level, msg, opt_exception) {
      // java caches the effective level, not sure it's necessary here
      if (goog.debug.LOGGING_ENABLED && this.isLoggable(level)) {
        // Message callbacks can be useful when a log message is expensive to build.
        if (goog.isFunction(msg)) {
          msg = msg();
        }

        this.doLogRecord_(this.getLogRecord(level, msg, opt_exception));
      }
    };


    /**
     * Creates a new log record and adds the exception (if present) to it.
     * @param {goog.debug.Logger.Level} level One of the level identifiers.
     * @param {string} msg The string message.
     * @param {Error|Object=} opt_exception An exception associated with the
     *     message.
     * @return {!goog.debug.LogRecord} A log record.
     * @suppress {es5Strict}
     */
    public getLogRecord(level, msg, opt_exception) {
      if (goog.debug.LogBuffer.isBufferingEnabled()) {
        var logRecord =
            goog.debug.LogBuffer.getInstance().addRecord(level, msg, this.name_);
      } else {
        logRecord = new goog.debug.LogRecord(level, String(msg), this.name_);
      }
      if (opt_exception) {
        logRecord.setException(opt_exception);
      }
      return logRecord;
    };


    /**
     * Logs a message at the Logger.Level.SHOUT level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public shout(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.SHOUT, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.SEVERE level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public severe(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.SEVERE, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.WARNING level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public warning(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.WARNING, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.INFO level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public info(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.INFO, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.CONFIG level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public config(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.CONFIG, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.FINE level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public fine(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.FINE, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.FINER level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public finer(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.FINER, msg, opt_exception);
      }
    };


    /**
     * Logs a message at the Logger.Level.FINEST level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    public finest(msg, opt_exception) {
      if (goog.debug.LOGGING_ENABLED) {
        this.log(goog.debug.Logger.Level.FINEST, msg, opt_exception);
      }
    };


    /**
     * Logs a LogRecord. If the logger is currently enabled for the
     * given message level then the given message is forwarded to all the
     * registered output Handler objects.
     * @param {goog.debug.LogRecord} logRecord A log record to log.
     */
    public logRecord(logRecord) {
      if (goog.debug.LOGGING_ENABLED && this.isLoggable(logRecord.getLevel())) {
        this.doLogRecord_(logRecord);
      }
    };


    /**
     * Logs a LogRecord.
     * @param {goog.debug.LogRecord} logRecord A log record to log.
     * @private
     */
    public doLogRecord_(logRecord) {
      if (goog.debug.Logger.ENABLE_PROFILER_LOGGING) {
        goog.debug.Logger.logToProfilers('log:' + logRecord.getMessage());
      }
      if (goog.debug.Logger.ENABLE_HIERARCHY) {
        var target:any = this;
        while (target) {
          target.callPublish_(logRecord);
          target = target.getParent();
        }
      } else {
        for (var i = 0, handler; handler = goog.debug.Logger.rootHandlers_[i++];) {
          handler(logRecord);
        }
      }
    };


    /**
     * Calls the handlers for publish.
     * @param {goog.debug.LogRecord} logRecord The log record to publish.
     * @private
     */
    public callPublish_(logRecord) {
      if (this.handlers_) {
        for (var i = 0, handler; handler = this.handlers_[i]; i++) {
          handler(logRecord);
        }
      }
    };


    /**
     * Sets the parent of this logger. This is used for setting up the logger tree.
     * @param {goog.debug.Logger} parent The parent logger.
     * @private
     */
    public setParent_(parent) {
      this.parent_ = parent;
    };


    /**
     * Adds a child to this logger. This is used for setting up the logger tree.
     * @param {string} name The leaf name of the child.
     * @param {goog.debug.Logger} logger The child logger.
     * @private
     */
    public addChild_(name, logger) {
      this.getChildren()[name] = logger;
    };

  }
}

namespace goog.debug.Logger{
    /** @const */
  export const ROOT_LOGGER_NAME = '';
  export var ENABLE_HIERARCHY = true;
  export var ENABLE_PROFILER_LOGGING = false;
  // if (!goog.debug.Logger.ENABLE_HIERARCHY) {
    /**
     * @type {!Array<Function>}
     * @private
     */
    export var rootHandlers_ = [];
  
  
    /**
     * @type {goog.debug.Logger.Level}
     * @private
     */
    export var rootLevel_;
  // }
}

/**
 * @define {boolean} Toggles whether loggers other than the root logger can have
 *     log handlers attached to them and whether they can have their log level
 *     set. Logging is a bit faster when this is set to false.
 */
goog.define('goog.debug.Logger.ENABLE_HIERARCHY', true);


/**
 * @define {boolean} Toggles whether active log statements are also recorded
 *     to the profiler.
 */
goog.define('goog.debug.Logger.ENABLE_PROFILER_LOGGING', false);




namespace goog.debug.Logger{
  /**
   * The Level class defines a set of standard logging levels that
   * can be used to control logging output.  The logging Level objects
   * are ordered and are specified by ordered integers.  Enabling logging
   * at a given level also enables logging at all higher levels.
   * <p>
   * Clients should normally use the predefined Level constants such
   * as Level.SEVERE.
   * <p>
   * The levels in descending order are:
   * <ul>
   * <li>SEVERE (highest value)
   * <li>WARNING
   * <li>INFO
   * <li>CONFIG
   * <li>FINE
   * <li>FINER
   * <li>FINEST  (lowest value)
   * </ul>
   * In addition there is a level OFF that can be used to turn
   * off logging, and a level ALL that can be used to enable
   * logging of all messages.
   *

   */
  export class Level{
    name: string;
    value: number;
    /**
     * 
     * @param {string} name The name of the level.
     * @param {number} value The numeric value of the level.
     * @constructor
     * @final
     */
    constructor(name, value){
    /**
     * The name of the level
     * @type {string}
     */
    this.name = name;

    /**
     * The numeric value of the level
     * @type {number}
     */
    this.value = value;
    }
    
    /**
     * @return {string} String representation of the logger level.
     * @override
     */
    public toString = function() {
      return this.name;
    };

    /**
     * Creates the predefined levels cache and populates it.
     * @private
     */
    static createPredefinedLevelsCache_() {
      goog.debug.Logger.Level.predefinedLevelsCache_ = {};
      for (var i = 0, level; level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];
          i++) {
        goog.debug.Logger.Level.predefinedLevelsCache_[level.value] = level;
        goog.debug.Logger.Level.predefinedLevelsCache_[level.name] = level;
      }
    };


    /**
     * Gets the predefined level with the given name.
     * @param {string} name The name of the level.
     * @return {goog.debug.Logger.Level} The level, or null if none found.
     */
    static getPredefinedLevel(name) {
      if (!goog.debug.Logger.Level.predefinedLevelsCache_) {
        goog.debug.Logger.Level.createPredefinedLevelsCache_();
      }

      return goog.debug.Logger.Level.predefinedLevelsCache_[name] || null;
    };


    /**
     * Gets the highest predefined level <= #value.
     * @param {number} value Level value.
     * @return {goog.debug.Logger.Level} The level, or null if none found.
     */
    static getPredefinedLevelByValue(value) {
      if (!goog.debug.Logger.Level.predefinedLevelsCache_) {
        goog.debug.Logger.Level.createPredefinedLevelsCache_();
      }

      if (value in /** @type {!Object} */ (
              goog.debug.Logger.Level.predefinedLevelsCache_)) {
        return goog.debug.Logger.Level.predefinedLevelsCache_[value];
      }

      for (var i = 0; i < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++i) {
        var level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];
        if (level.value <= value) {
          return level;
        }
      }
      return null;
    };

    

  }
}


namespace goog.debug.Logger.Level{

  /**
   * OFF is a special level that can be used to turn off logging.
   * This level is initialized to <CODE>Infinity</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var OFF = new goog.debug.Logger.Level('OFF', Infinity);


  /**
   * SHOUT is a message level for extra debugging loudness.
   * This level is initialized to <CODE>1200</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var SHOUT = new goog.debug.Logger.Level('SHOUT', 1200);


  /**
   * SEVERE is a message level indicating a serious failure.
   * This level is initialized to <CODE>1000</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var SEVERE = new goog.debug.Logger.Level('SEVERE', 1000);


  /**
   * WARNING is a message level indicating a potential problem.
   * This level is initialized to <CODE>900</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var WARNING = new goog.debug.Logger.Level('WARNING', 900);


  /**
   * INFO is a message level for informational messages.
   * This level is initialized to <CODE>800</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var INFO = new goog.debug.Logger.Level('INFO', 800);


  /**
   * CONFIG is a message level for static configuration messages.
   * This level is initialized to <CODE>700</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var CONFIG = new goog.debug.Logger.Level('CONFIG', 700);


  /**
   * FINE is a message level providing tracing information.
   * This level is initialized to <CODE>500</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var FINE = new goog.debug.Logger.Level('FINE', 500);


  /**
   * FINER indicates a fairly detailed tracing message.
   * This level is initialized to <CODE>400</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var FINER = new goog.debug.Logger.Level('FINER', 400);

  /**
   * FINEST indicates a highly detailed tracing message.
   * This level is initialized to <CODE>300</CODE>.
   * @type {!goog.debug.Logger.Level}
   */

  export var FINEST = new goog.debug.Logger.Level('FINEST', 300);


  /**
   * ALL indicates that all messages should be logged.
   * This level is initialized to <CODE>0</CODE>.
   * @type {!goog.debug.Logger.Level}
   */
  export var ALL = new goog.debug.Logger.Level('ALL', 0);


  /**
   * The predefined levels.
   * @type {!Array<!goog.debug.Logger.Level>}
   * @final
   */
  export var PREDEFINED_LEVELS = [
    goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT,
    goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING,
    goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG,
    goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER,
    goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL
  ];

  /**
   * A lookup map used to find the level object based on the name or value of
   * the level object.
   * @type {Object}
   * @private
   */
  export var predefinedLevelsCache_ = null;

}

namespace goog.debug{
  /**
   * There is a single global LogManager object that is used to maintain a set of
   * shared state about Loggers and log services. This is loosely based on the
   * java class java.util.logging.LogManager.
   * @const
   */
  // export var LogManager = {};
}

namespace goog.debug.LogManager{

  /**
   * Map of logger names to logger objects.
   *
   * @type {!Object<string, !goog.debug.Logger>}
   * @private
   */
  export var loggers_ = {};


  /**
   * The root logger which is the root of the logger tree.
   * @type {goog.debug.Logger}
   * @private
   */
  export var rootLogger_ = null;


  /**
   * Initializes the LogManager if not already initialized.
   */
  export function initialize() {
    if (!goog.debug.LogManager.rootLogger_) {
      goog.debug.LogManager.rootLogger_ =
          new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME);
      goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] =
          goog.debug.LogManager.rootLogger_;
      goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG);
    }
  };


  /**
   * Returns all the loggers.
   * @return {!Object<string, !goog.debug.Logger>} Map of logger names to logger
   *     objects.
   */
  export function getLoggers() {
    return goog.debug.LogManager.loggers_;
  };


  /**
   * Returns the root of the logger tree namespace, the logger with the empty
   * string as its name.
   *
   * @return {!goog.debug.Logger} The root logger.
   */
  export function getRoot () {
    goog.debug.LogManager.initialize();
    return /** @type {!goog.debug.Logger} */ (goog.debug.LogManager.rootLogger_);
  };


  /**
   * Finds a named logger.
   *
   * @param {string} name A name for the logger. This should be a dot-separated
   * name and should normally be based on the package name or class name of the
   * subsystem, such as goog.net.BrowserChannel.
   * @return {!goog.debug.Logger} The named logger.
   */
  export function getLogger (name) {
    goog.debug.LogManager.initialize();
    var ret = goog.debug.LogManager.loggers_[name];
    return ret || goog.debug.LogManager.createLogger_(name);
  };


  /**
   * Creates a function that can be passed to goog.debug.catchErrors. The function
   * will log all reported errors using the given logger.
   * @param {goog.debug.Logger=} opt_logger The logger to log the errors to.
   *     Defaults to the root logger.
   * @return {function(Object)} The created function.
   */
  export function createFunctionForCatchErrors (opt_logger) {
    return function(info) {
      var logger = opt_logger || goog.debug.LogManager.getRoot();
      logger.severe(
          'Error: ' + info.message + ' (' + info.fileName + ' @ Line: ' +
          info.line + ')');
    };
  };


  /**
   * Creates the named logger. Will also create the parents of the named logger
   * if they don't yet exist.
   * @param {string} name The name of the logger.
   * @return {!goog.debug.Logger} The named logger.
   * @private
   */
  export function createLogger_ (name) {
    // find parent logger
    var logger = new goog.debug.Logger(name);
    if (goog.debug.Logger.ENABLE_HIERARCHY) {
      var lastDotIndex = name.lastIndexOf('.');
      var parentName = name.substr(0, lastDotIndex);
      var leafName = name.substr(lastDotIndex + 1);
      var parentLogger = goog.debug.LogManager.getLogger(parentName);

      // tell the parent about the child and the child about the parent
      parentLogger.addChild_(leafName, logger);
      logger.setParent_(parentLogger);
    }

    goog.debug.LogManager.loggers_[name] = logger;
    return logger;
  };


}