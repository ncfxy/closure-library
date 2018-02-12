declare namespace goog.async {
    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    function throwException(exception: any): void;
    /**
     * Fires the provided callbacks as soon as possible after the current JS
     * execution context. setTimeout(…, 0) takes at least 4ms when called from
     * within another setTimeout(…, 0) for legacy reasons.
     *
     * This will not schedule the callback as a microtask (i.e. a task that can
     * preempt user input or networking callbacks). It is meant to emulate what
     * setTimeout(_, 0) would do if it were not throttled. If you desire microtask
     * behavior, use {@see goog.Promise} instead.
     *
     * @param {function(this:SCOPE)} callback Callback function to fire as soon as
     *     possible.
     * @param {SCOPE=} opt_context Object in whose scope to call the listener.
     * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that
     *     ensures correctness at the cost of speed. See comments for details.
     * @template SCOPE
     */
    function nextTick(callback: any, opt_context?: any, opt_useSetImmediate?: any): void;
}
declare namespace goog.async.nextTick {
    /**
     * Returns whether should use setImmediate implementation currently on window.
     *
     * window.setImmediate was introduced and currently only supported by IE10+,
     * but due to a bug in the implementation it is not guaranteed that
     * setImmediate is faster than setTimeout nor that setImmediate N is before
     * setImmediate N+1. That is why we do not use the native version if
     * available. We do, however, call setImmediate if it is a non-native function
     * because that indicates that it has been replaced by goog.testing.MockClock
     * which we do want to support.
     * See
     * http://connect.microsoft.com/IE/feedback/details/801823/setimmediate-and-messagechannel-are-broken-in-ie10
     *
     * @return {boolean} Whether to use the implementation of setImmediate defined
     *     on Window.
     * @private
     */
    function useSetImmediate_(): boolean;
    /**
     * Cache for the setImmediate implementation.
     * @type {function(function())}
     * @private
     */
    var setImmediate_: any;
    /**
     * Determines the best possible implementation to run a function as soon as
     * the JS event loop is idle.
     * @return {function(function())} The "setImmediate" implementation.
     * @private
     */
    function getSetImmediateEmulator_(): (cb: any) => void;
    /**
     * Helper function that is overrided to protect callbacks with entry point
     * monitor if the application monitors entry points.
     * @param {function()} callback Callback function to fire as soon as possible.
     * @return {function()} The wrapped callback.
     * @private
     */
    var wrapCallback_: any;
}
