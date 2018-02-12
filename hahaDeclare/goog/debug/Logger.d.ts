declare namespace goog.debug {
    /**
     * A message value that can be handled by a Logger.
     *
     * Functions are treated like callbacks, but are only called when the event's
     * log level is enabled. This is useful for logging messages that are expensive
     * to construct.
     *
     * @typedef {string|function(): string}
     */
    type Loggable = string | Function;
}
declare namespace goog.debug {
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
    class Logger {
        name_: string;
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
        constructor(name: any);
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
        static getLogger(name: any): any;
        /**
         * Logs a message to profiling tools, if available.
         * {@see https://developers.google.com/web-toolkit/speedtracer/logging-api}
         * {@see http://msdn.microsoft.com/en-us/library/dd433074(VS.85).aspx}
         * @param {string} msg The message to log.
         */
        static logToProfilers(msg: any): void;
        /**
         * Gets the name of this logger.
         * @return {string} The name of this logger.
         */
        getName(): string;
        /**
         * Adds a handler to the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to add.
         */
        addHandler(handler: any): void;
        /**
         * Removes a handler from the logger. This doesn't use the event system because
         * we want to be able to add logging to the event system.
         * @param {Function} handler Handler function to remove.
         * @return {boolean} Whether the handler was removed.
         */
        removeHandler(handler: any): boolean;
        /**
         * Returns the parent of this logger.
         * @return {goog.debug.Logger} The parent logger or null if this is the root.
         */
        getParent(): Logger;
        /**
         * Returns the children of this logger as a map of the child name to the logger.
         * @return {!Object} The map where the keys are the child leaf names and the
         *     values are the Logger objects.
         */
        getChildren(): Object;
        /**
         * Set the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the new level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @param {goog.debug.Logger.Level} level The new level.
         */
        setLevel(level: any): void;
        /**
         * Gets the log level specifying which message levels will be logged by this
         * logger. Message levels lower than this value will be discarded.
         * The level value Level.OFF can be used to turn off logging. If the level
         * is null, it means that this node should inherit its level from its nearest
         * ancestor with a specific (non-null) level value.
         *
         * @return {goog.debug.Logger.Level} The level.
         */
        getLevel(): Logger.Level;
        /**
         * Returns the effective level of the logger based on its ancestors' levels.
         * @return {goog.debug.Logger.Level} The level.
         */
        getEffectiveLevel(): any;
        /**
         * Checks if a message of the given level would actually be logged by this
         * logger. This check is based on the Loggers effective level, which may be
         * inherited from its parent.
         * @param {goog.debug.Logger.Level} level The level to check.
         * @return {boolean} Whether the message would be logged.
         */
        isLoggable(level: any): boolean;
        /**
         * Logs a message. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         */
        log(level: any, msg: any, opt_exception: any): void;
        /**
         * Creates a new log record and adds the exception (if present) to it.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {Error|Object=} opt_exception An exception associated with the
         *     message.
         * @return {!goog.debug.LogRecord} A log record.
         * @suppress {es5Strict}
         */
        getLogRecord(level: any, msg: any, opt_exception: any): any;
        /**
         * Logs a message at the Logger.Level.SHOUT level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        shout(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.SEVERE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        severe(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.WARNING level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        warning(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.INFO level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        info(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.CONFIG level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        config(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINE level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        fine(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINER level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finer(msg: any, opt_exception: any): void;
        /**
         * Logs a message at the Logger.Level.FINEST level.
         * If the logger is currently enabled for the given message level then the
         * given message is forwarded to all the registered output Handler objects.
         * @param {goog.debug.Loggable} msg The message to log.
         * @param {Error=} opt_exception An exception associated with the message.
         */
        finest(msg: any, opt_exception: any): void;
        /**
         * Logs a LogRecord. If the logger is currently enabled for the
         * given message level then the given message is forwarded to all the
         * registered output Handler objects.
         * @param {goog.debug.LogRecord} logRecord A log record to log.
         */
        logRecord(logRecord: any): void;
        /**
         * Logs a LogRecord.
         * @param {goog.debug.LogRecord} logRecord A log record to log.
         * @private
         */
        doLogRecord_(logRecord: any): void;
        /**
         * Calls the handlers for publish.
         * @param {goog.debug.LogRecord} logRecord The log record to publish.
         * @private
         */
        callPublish_(logRecord: any): void;
        /**
         * Sets the parent of this logger. This is used for setting up the logger tree.
         * @param {goog.debug.Logger} parent The parent logger.
         * @private
         */
        setParent_(parent: any): void;
        /**
         * Adds a child to this logger. This is used for setting up the logger tree.
         * @param {string} name The leaf name of the child.
         * @param {goog.debug.Logger} logger The child logger.
         * @private
         */
        addChild_(name: any, logger: any): void;
    }
}
declare namespace goog.debug.Logger {
    /** @const */
    const ROOT_LOGGER_NAME = "";
    var ENABLE_HIERARCHY: boolean;
    var ENABLE_PROFILER_LOGGING: boolean;
    /**
     * @type {!Array<Function>}
     * @private
     */
    var rootHandlers_: any[];
    /**
     * @type {goog.debug.Logger.Level}
     * @private
     */
    var rootLevel_: any;
}
declare namespace goog.debug.Logger {
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
    class Level {
        name: string;
        value: number;
        /**
         *
         * @param {string} name The name of the level.
         * @param {number} value The numeric value of the level.
         * @constructor
         * @final
         */
        constructor(name: any, value: any);
        /**
         * @return {string} String representation of the logger level.
         * @override
         */
        toString: () => any;
        /**
         * Creates the predefined levels cache and populates it.
         * @private
         */
        static createPredefinedLevelsCache_(): void;
        /**
         * Gets the predefined level with the given name.
         * @param {string} name The name of the level.
         * @return {goog.debug.Logger.Level} The level, or null if none found.
         */
        static getPredefinedLevel(name: any): any;
        /**
         * Gets the highest predefined level <= #value.
         * @param {number} value Level value.
         * @return {goog.debug.Logger.Level} The level, or null if none found.
         */
        static getPredefinedLevelByValue(value: any): any;
    }
}
declare namespace goog.debug.Logger.Level {
    /**
     * OFF is a special level that can be used to turn off logging.
     * This level is initialized to <CODE>Infinity</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var OFF: Level;
    /**
     * SHOUT is a message level for extra debugging loudness.
     * This level is initialized to <CODE>1200</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SHOUT: Level;
    /**
     * SEVERE is a message level indicating a serious failure.
     * This level is initialized to <CODE>1000</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var SEVERE: Level;
    /**
     * WARNING is a message level indicating a potential problem.
     * This level is initialized to <CODE>900</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var WARNING: Level;
    /**
     * INFO is a message level for informational messages.
     * This level is initialized to <CODE>800</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var INFO: Level;
    /**
     * CONFIG is a message level for static configuration messages.
     * This level is initialized to <CODE>700</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var CONFIG: Level;
    /**
     * FINE is a message level providing tracing information.
     * This level is initialized to <CODE>500</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINE: Level;
    /**
     * FINER indicates a fairly detailed tracing message.
     * This level is initialized to <CODE>400</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINER: Level;
    /**
     * FINEST indicates a highly detailed tracing message.
     * This level is initialized to <CODE>300</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var FINEST: Level;
    /**
     * ALL indicates that all messages should be logged.
     * This level is initialized to <CODE>0</CODE>.
     * @type {!goog.debug.Logger.Level}
     */
    var ALL: Level;
    /**
     * The predefined levels.
     * @type {!Array<!goog.debug.Logger.Level>}
     * @final
     */
    var PREDEFINED_LEVELS: Level[];
    /**
     * A lookup map used to find the level object based on the name or value of
     * the level object.
     * @type {Object}
     * @private
     */
    var predefinedLevelsCache_: any;
}
declare namespace goog.debug {
}
declare namespace goog.debug.LogManager {
    /**
     * Map of logger names to logger objects.
     *
     * @type {!Object<string, !goog.debug.Logger>}
     * @private
     */
    var loggers_: {};
    /**
     * The root logger which is the root of the logger tree.
     * @type {goog.debug.Logger}
     * @private
     */
    var rootLogger_: any;
    /**
     * Initializes the LogManager if not already initialized.
     */
    function initialize(): void;
    /**
     * Returns all the loggers.
     * @return {!Object<string, !goog.debug.Logger>} Map of logger names to logger
     *     objects.
     */
    function getLoggers(): {};
    /**
     * Returns the root of the logger tree namespace, the logger with the empty
     * string as its name.
     *
     * @return {!goog.debug.Logger} The root logger.
     */
    function getRoot(): any;
    /**
     * Finds a named logger.
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     * name and should normally be based on the package name or class name of the
     * subsystem, such as goog.net.BrowserChannel.
     * @return {!goog.debug.Logger} The named logger.
     */
    function getLogger(name: any): any;
    /**
     * Creates a function that can be passed to goog.debug.catchErrors. The function
     * will log all reported errors using the given logger.
     * @param {goog.debug.Logger=} opt_logger The logger to log the errors to.
     *     Defaults to the root logger.
     * @return {function(Object)} The created function.
     */
    function createFunctionForCatchErrors(opt_logger: any): (info: any) => void;
    /**
     * Creates the named logger. Will also create the parents of the named logger
     * if they don't yet exist.
     * @param {string} name The name of the logger.
     * @return {!goog.debug.Logger} The named logger.
     * @private
     */
    function createLogger_(name: any): Logger;
}
