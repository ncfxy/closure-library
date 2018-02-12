declare namespace goog.debug {
    class Trace_ {
        events_: Array<goog.debug.Trace_.Event_>;
        outstandingEvents_: goog.structs.Map<number, goog.debug.Trace_.Event_>;
        startTime_: number;
        tracerOverheadStart_: number;
        tracerOverheadEnd_: number;
        tracerOverheadComment_: number;
        stats_: goog.structs.Map<string, string>;
        tracerCount_: number;
        commentCount_: number;
        nextId_: number;
        eventPool_: goog.structs.SimplePool<string>;
        statPool_: goog.structs.SimplePool<string>;
        idPool_: goog.structs.SimplePool<string>;
        defaultThreshold_: number;
        traceCallbacks_: goog.debug.Trace_.TracerCallbacks;
        gcTracer_: Object;
        /**
         * Class used for singleton goog.debug.Trace.  Used for timing slow points in
         * the code. Based on the java Tracer class but optimized for javascript.
         * See com.google.common.tracing.Tracer.
         * It is also possible to bridge from this class to other tracer classes via
         * adding listeners.
         * @constructor
         * @private
         */
        constructor();
        /**
         * Logger for the tracer
         * @private @const {?goog.log.Logger}
         */
        logger_: any;
        /**
         * Maximum size of the trace before we discard events
         * @type {number}
         */
        MAX_TRACE_SIZE: number;
        /**
         * Removes all registered callback functions. Mainly used for testing.
         */
        removeAllListeners(): void;
        /**
         * Adds up to three callback functions which are called on {@code startTracer},
         * {@code stopTracer} and {@code addComment} in order to bridge from the Closure
         * tracer singleton object to any tracer class.
         * @param {!goog.debug.Trace_.TracerCallbacks} callbacks An object literal
         *   containing the callback functions.
         */
        addTraceCallbacks(callbacks: any): void;
        /**
         * Add the ability to explicitly set the start time. This is useful for example
         * for measuring initial load time where you can set a variable as soon as the
         * main page of the app is loaded and then later call this function when the
         * Tracer code has been loaded.
         * @param {number} startTime The start time to set.
         */
        setStartTime(startTime: any): void;
        /**
         * Initializes and resets the current trace
         * @param {number} defaultThreshold The default threshold below which the
         * tracer output will be suppressed. Can be overridden on a per-Tracer basis.
         */
        initCurrentTrace(defaultThreshold: any): void;
        /**
         * Clears the current trace
         */
        clearCurrentTrace(): void;
        /**
         * Resets the trace.
         * @param {number} defaultThreshold The default threshold below which the
         * tracer output will be suppressed. Can be overridden on a per-Tracer basis.
         */
        reset(defaultThreshold: any): void;
        /**
         * @private
         */
        releaseEvents_(): void;
        /**
         * Starts a tracer
         * @param {string} comment A comment used to identify the tracer. Does not
         *     need to be unique.
         * @param {string=} opt_type Type used to identify the tracer. If a Trace is
         *     given a type (the first argument to the constructor) and multiple Traces
         *     are done on that type then a "TOTAL line will be produced showing the
         *     total number of traces and the sum of the time
         *     ("TOTAL Database 2 (37 ms)" in our example). These traces should be
         *     mutually exclusive or else the sum won't make sense (the time will
         *     be double counted if the second starts before the first ends).
         * @return {number} The identifier for the tracer that should be passed to the
         *     the stopTracer method.
         */
        startTracer(comment: any, opt_type?: any): any;
        /**
         * Stops a tracer
         * @param {number|undefined|null} id The id of the tracer that is ending.
         * @param {number=} opt_silenceThreshold Threshold below which the tracer is
         *    silenced.
         * @return {?number} The elapsed time for the tracer or null if the tracer
         *    identitifer was not recognized.
         */
        stopTracer(id: any, opt_silenceThreshold?: any): number;
        /**
         * Sets the ActiveX object that can be used to get GC tracing in IE6.
         * @param {Object} gcTracer GCTracer ActiveX object.
         */
        setGcTracer(gcTracer: any): void;
        /**
         * Returns the total number of allocations since the GC stats were reset. Only
         * works in IE.
         * @return {number} The number of allocaitons or -1 if not supported.
         */
        getTotalVarAlloc(): any;
        /**
         * Adds a comment to the trace. Makes it possible to see when a specific event
         * happened in relation to the traces.
         * @param {string} comment A comment that is inserted into the trace.
         * @param {?string=} opt_type Type used to identify the tracer. If a comment is
         *     given a type and multiple comments are done on that type then a "TOTAL
         *     line will be produced showing the total number of comments of that type.
         * @param {?number=} opt_timeStamp The timestamp to insert the comment. If not
         *    specified, the current time wil be used.
         */
        addComment(comment: any, opt_type?: any, opt_timeStamp?: any): void;
        /**
         * Gets a stat object for a particular type. The stat object is created if it
         * hasn't yet been.
         * @param {string} type The type of stat.
         * @return {goog.debug.Trace_.Stat_} The stat object.
         * @private
         */
        getStat_(type: any): any;
        /**
         * Returns a formatted string for the current trace
         * @return {string} A formatted string that shows the timings of the current
         *     trace.
         */
        getFormattedTrace(): string;
        /**
         * Returns a formatted string that describes the thread trace.
         * @return {string} A formatted string.
         * @override
         */
        toString(): string;
        /**
         * Converts 'v' to a string and pads it with up to 3 spaces for
         * improved alignment. TODO there must be a better way
         * @param {number} v A number.
         * @return {string} A padded string.
         * @private
         */
        static longToPaddedString_(v: any): string;
        /**
         * Return the sec.ms part of time (if time = "20:06:11.566",  "11.566
         * @param {number} time The time in MS.
         * @return {string} A formatted string as sec.ms'.
         * @private
         */
        static formatTime_(time: any): string;
        /**
         * Returns the current time. Done through a wrapper function so it can be
         * overridden by application code. Gmail has an ActiveX extension that provides
         * higher precision timing info.
         * @return {number} The current time in milliseconds.
         */
        static now(): number;
    }
}
declare namespace goog.debug.Trace_ {
    /**
     * Event type supported by tracer
     * @enum {number}
     */
    enum EventType {
        /**
         * Start event type
         */
        START = 0,
        /**
         * Stop event type
         */
        STOP = 1,
        /**
         * Comment event type
         */
        COMMENT = 2,
    }
}
declare namespace goog.debug.Trace_ {
    class Stat_ {
        count: number;
        time: number;
        varAlloc: number;
        /**
         * Class to keep track of a stat of a single tracer type. Stores the count
         * and cumulative time.
         * @constructor
         * @private
         */
        constructor();
        /**
         * @type {string|null|undefined}
         */
        type: string | null | undefined;
        /**
         * @return {string} A string describing the tracer stat.
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.debug.Trace_ {
    class Event_ {
        eventTime: any;
        eventType: any;
        startTime: any;
        stopTime: any;
        totalVarAlloc: any;
        comment: any;
        /**
         * Private class used to encapsulate a single event, either the start or stop
         * of a tracer.
         * @constructor
         * @private
         */
        constructor();
        /**
         * @type {string|null|undefined}
         */
        type: string | null | undefined;
        /**
         * Returns a formatted string for the event.
         * @param {number} startTime The start time of the trace to generate relative
         * times.
         * @param {number} prevTime The completion time of the previous event or -1.
         * @param {string} indent Extra indent for the message
         *     if there was no previous event.
         * @return {string} The formatted tracer string.
         */
        toTraceString(startTime: any, prevTime: any, indent: any): string;
        /**
         * @return {string} A string describing the tracer event.
         * @override
         */
        toString(): any;
    }
}
declare namespace goog.debug.Trace_ {
    /**
     * A class to specify the types of the callback functions used by
     * {@code addTraceCallbacks}.
     * @record
     */
    class TracerCallbacks {
        start: Function | undefined;
        stop: Function | undefined;
        comment: Function | undefined;
        constructor();
        /**
         * A function that combines two function with the same parameters in a sequence.
         * @param {!Function|undefined} fn1 The first function to be combined.
         * @param {!Function|undefined} fn2 The second function to be combined.
         * @return {!Function|undefined} A function that calls the inputs in sequence.
         * @private
         */
        static sequence_(fn1: any, fn2: any): any;
    }
}
declare namespace goog.debug {
    /**
     * Singleton trace object
     * @type {goog.debug.Trace_}
     */
    var Trace: goog.debug.Trace_;
}
