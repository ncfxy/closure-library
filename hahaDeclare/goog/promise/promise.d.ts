/// <reference path="../async/freelist.d.ts" />
declare namespace goog {
    /**
     * NOTE: This class was created in anticipation of the built-in Promise type
     * being standardized and implemented across browsers. Now that Promise is
     * available in modern browsers, and is automatically polyfilled by the Closure
     * Compiler, by default, most new code should use native {@code Promise}
     * instead of {@code goog.Promise}. However, {@code goog.Promise} has the
     * concept of cancellation which native Promises do not yet have. So code
     * needing cancellation may still want to use {@code goog.Promise}.
     *
     * Promises provide a result that may be resolved asynchronously. A Promise may
     * be resolved by being fulfilled with a fulfillment value, rejected with a
     * rejection reason, or blocked by another Promise. A Promise is said to be
     * settled if it is either fulfilled or rejected. Once settled, the Promise
     * result is immutable.
     *
     * Promises may represent results of any type, including undefined. Rejection
     * reasons are typically Errors, but may also be of any type. Closure Promises
     * allow for optional type annotations that enforce that fulfillment values are
     * of the appropriate types at compile time.
     *
     * The result of a Promise is accessible by calling {@code then} and registering
     * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
     * is settled, the relevant callbacks are invoked with the fulfillment value or
     * rejection reason as argument. Callbacks are always invoked in the order they
     * were registered, even when additional {@code then} calls are made from inside
     * another callback. A callback is always run asynchronously sometime after the
     * scope containing the registering {@code then} invocation has returned.
     *
     * If a Promise is resolved with another Promise, the first Promise will block
     * until the second is settled, and then assumes the same result as the second
     * Promise. This allows Promises to depend on the results of other Promises,
     * linking together multiple asynchronous operations.
     *
     * This implementation is compatible with the Promises/A+ specification and
     * passes that specification's conformance test suite. A Closure Promise may be
     * resolved with a Promise instance (or sufficiently compatible Promise-like
     * object) created by other Promise implementations. From the specification,
     * Promise-like objects are known as "Thenables".
     *
     * @see http://promisesaplus.com/
     *
  
     * @implements {goog.Thenable<TYPE>}
     * @template TYPE,RESOLVER_CONTEXT
     */
    class Promise<TYPE, RESOLVER_CONTEXT> implements goog.Thenable<TYPE> {
        state_: goog.Promise.State_;
        result_: any;
        parent_: any;
        callbackEntries_: goog.Promise.CallbackEntry_;
        callbackEntriesTail_: goog.Promise.CallbackEntry_;
        executing_: boolean;
        unhandledRejectionId_: number;
        hadUnhandledRejection_: boolean;
        stack_: Array<string>;
        currentStep_: number;
        child: any;
        onFulfilled: any;
        onRejected: any;
        context: any;
        always: boolean;
        /**
         * @param {function(
         *             this:RESOLVER_CONTEXT,
         *             function((TYPE|IThenable<TYPE>|Thenable)=),
         *             function(*=)): void} resolver
         *     Initialization function that is invoked immediately with {@code resolve}
         *     and {@code reject} functions as arguments. The Promise is resolved or
         *     rejected with the first argument passed to either function.
         * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
         *     resolver function. If unspecified, the resolver function will be executed
         *     in the default scope.
         * @constructor
         * @struct
         * @final
         */
        constructor(resolver: any, opt_context?: RESOLVER_CONTEXT | undefined);
        /** clear the object prior to reuse */
        reset(): void;
        /**
         * Adds callbacks that will operate on the result of the Promise, returning a
         * new child Promise.
         *
         * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
         * with the fulfillment value as argument, and the child Promise will be
         * fulfilled with the return value of the callback. If the callback throws an
         * exception, the child Promise will be rejected with the thrown value instead.
         *
         * If the Promise is rejected, the {@code onRejected} callback will be invoked
         * with the rejection reason as argument, and the child Promise will be resolved
         * with the return value or rejected with the thrown value of the callback.
         *
         * @override
         */
        then(opt_onFulfilled: any, opt_onRejected: any, opt_context: any): any;
        /**
         * Adds callbacks that will operate on the result of the Promise without
         * returning a child Promise (unlike "then").
         *
         * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
         * with the fulfillment value as argument.
         *
         * If the Promise is rejected, the {@code onRejected} callback will be invoked
         * with the rejection reason as argument.
         *
         * @param {?(function(this:THIS, TYPE):?)=} opt_onFulfilled A
         *     function that will be invoked with the fulfillment value if the Promise
         *     is fulfilled.
         * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
         *     be invoked with the rejection reason if the Promise is rejected.
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     with the default this.
         * @package
         * @template THIS
         */
        thenVoid(opt_onFulfilled: any, opt_onRejected: any, opt_context: any): void;
        /**
         * Adds a callback that will be invoked when the Promise is settled (fulfilled
         * or rejected). The callback receives no argument, and no new child Promise is
         * created. This is useful for ensuring that cleanup takes place after certain
         * asynchronous operations. Callbacks added with {@code thenAlways} will be
         * executed in the same order with other calls to {@code then},
         * {@code thenAlways}, or {@code thenCatch}.
         *
         * Since it does not produce a new child Promise, cancellation propagation is
         * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
         * a cleanup handler added with {@code thenAlways} will be canceled if all of
         * its children created by {@code then} (or {@code thenCatch}) are canceled.
         * Additionally, since any rejections are not passed to the callback, it does
         * not stop the unhandled rejection handler from running.
         *
         * @param {function(this:THIS): void} onSettled A function that will be invoked
         *     when the Promise is settled (fulfilled or rejected).
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     in the global scope.
         * @return {!goog.Promise<TYPE>} This Promise, for chaining additional calls.
         * @template THIS
         */
        thenAlways(onSettled: any, opt_context: any): this;
        /**
         * Adds a callback that will be invoked only if the Promise is rejected. This
         * is equivalent to {@code then(null, onRejected)}.
         *
         * @param {function(this:THIS, *): *} onRejected A function that will be
         *     invoked with the rejection reason if the Promise is rejected.
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     in the global scope.
         * @return {!goog.Promise} A new Promise that will receive the result of the
         *     callback.
         * @template THIS
         */
        thenCatch(onRejected: any, opt_context: any): any;
        /**
         * Cancels the Promise if it is still pending by rejecting it with a cancel
         * Error. No action is performed if the Promise is already resolved.
         *
         * All child Promises of the canceled Promise will be rejected with the same
         * cancel error, as with normal Promise rejection. If the Promise to be canceled
         * is the only child of a pending Promise, the parent Promise will also be
         * canceled. Cancellation may propagate upward through multiple generations.
         *
         * @param {string=} opt_message An optional debugging message for describing the
         *     cancellation reason.
         */
        cancel(opt_message?: any): void;
        /**
         * Cancels this Promise with the given error.
         *
         * @param {!Error} err The cancellation error.
         * @private
         */
        cancelInternal_(err: any): void;
        /**
         * Cancels a child Promise from the list of callback entries. If the Promise has
         * not already been resolved, reject it with a cancel error. If there are no
         * other children in the list of callback entries, propagate the cancellation
         * by canceling this Promise as well.
         *
         * @param {!goog.Promise} childPromise The Promise to cancel.
         * @param {!Error} err The cancel error to use for rejecting the Promise.
         * @private
         */
        cancelChild_(childPromise: any, err: any): void;
        /**
         * Adds a callback entry to the current Promise, and schedules callback
         * execution if the Promise has already been settled.
         *
         * @param {goog.Promise.CallbackEntry_} callbackEntry Record containing
         *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
         *     the Promise is settled.
         * @private
         */
        addCallbackEntry_(callbackEntry: any): void;
        /**
         * Creates a child Promise and adds it to the callback entry list. The result of
         * the child Promise is determined by the state of the parent Promise and the
         * result of the {@code onFulfilled} or {@code onRejected} callbacks as
         * specified in the Promise resolution procedure.
         *
         * @see http://promisesaplus.com/#the__method
         *
         * @param {?function(this:THIS, TYPE):
         *          (RESULT|goog.Promise<RESULT>|Thenable)} onFulfilled A callback that
         *     will be invoked if the Promise is fulfilled, or null.
         * @param {?function(this:THIS, *): *} onRejected A callback that will be
         *     invoked if the Promise is rejected, or null.
         * @param {THIS=} opt_context An optional execution context for the callbacks.
         *     in the default calling context.
         * @return {!goog.Promise} The child Promise.
         * @template RESULT,THIS
         * @private
         */
        addChildPromise_(onFulfilled: any, onRejected: any, opt_context: any): any;
        /**
         * Unblocks the Promise and fulfills it with the given value.
         *
         * @param {TYPE} value
         * @private
         */
        unblockAndFulfill_(value: any): void;
        /**
         * Unblocks the Promise and rejects it with the given rejection reason.
         *
         * @param {*} reason
         * @private
         */
        unblockAndReject_(reason: any): void;
        /**
         * Attempts to resolve a Promise with a given resolution state and value. This
         * is a no-op if the given Promise has already been resolved.
         *
         * If the given result is a Thenable (such as another Promise), the Promise will
         * be settled with the same state and result as the Thenable once it is itself
         * settled.
         *
         * If the given result is not a Thenable, the Promise will be settled (fulfilled
         * or rejected) with that result based on the given state.
         *
         * @see http://promisesaplus.com/#the_promise_resolution_procedure
         *
         * @param {goog.Promise.State_} state
         * @param {*} x The result to apply to the Promise.
         * @private
         */
        resolve_(state: any, x: any): void;
        /**
         * Executes the pending callbacks of a settled Promise after a timeout.
         *
         * Section 2.2.4 of the Promises/A+ specification requires that Promise
         * callbacks must only be invoked from a call stack that only contains Promise
         * implementation code, which we accomplish by invoking callback execution after
         * a timeout. If {@code startExecution_} is called multiple times for the same
         * Promise, the callback chain will be evaluated only once. Additional callbacks
         * may be added during the evaluation phase, and will be executed in the same
         * event loop.
         *
         * All Promises added to the waiting list during the same browser event loop
         * will be executed in one batch to avoid using a separate timeout per Promise.
         *
         * @private
         */
        scheduleCallbacks_(): void;
        /**
         * @return {boolean} Whether there are any pending callbacks queued.
         * @private
         */
        hasEntry_(): boolean;
        /**
         * @param {goog.Promise.CallbackEntry_} entry
         * @private
         */
        queueEntry_(entry: any): void;
        /**
         * @return {goog.Promise.CallbackEntry_} entry
         * @private
         */
        popEntry_(): any;
        /**
         * @param {goog.Promise.CallbackEntry_} previous
         * @private
         */
        removeEntryAfter_(previous: any): void;
        /**
         * Executes all pending callbacks for this Promise.
         *
         * @private
         */
        executeCallbacks_(): void;
        /**
         * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
         * or {@code onRejected} callback based on the settled state of the Promise.
         *
         * @param {!goog.Promise.CallbackEntry_} callbackEntry An entry containing the
         *     onFulfilled and/or onRejected callbacks for this step.
         * @param {goog.Promise.State_} state The resolution status of the Promise,
         *     either FULFILLED or REJECTED.
         * @param {*} result The settled result of the Promise.
         * @private
         */
        executeCallback_(callbackEntry: any, state: any, result: any): void;
        /**
         * Records a stack trace entry for functions that call {@code then} or the
         * Promise constructor. May be disabled by unsetting {@code LONG_STACK_TRACES}.
         *
         * @param {!Error} err An Error object created by the calling function for
         *     providing a stack trace.
         * @private
         */
        addStackTrace_(err: any): void;
        /**
         * Adds extra stack trace information to an exception for the list of
         * asynchronous {@code then} calls that have been run for this Promise. Stack
         * trace information is recorded in {@see #addStackTrace_}, and appended to
         * rethrown errors when {@code LONG_STACK_TRACES} is enabled.
         *
         * @param {*} err An unhandled exception captured during callback execution.
         * @private
         */
        appendLongStack_(err: any): void;
        /**
         * Marks this rejected Promise as having being handled. Also marks any parent
         * Promises in the rejected state as handled. The rejection handler will no
         * longer be invoked for this Promise (if it has not been called already).
         *
         * @private
         */
        removeUnhandledRejection_(): void;
    }
}
declare namespace goog.Promise {
    var LONG_STACK_TRACES: boolean;
    var UNHANDLED_REJECTION_DELAY: number;
    /**
     * The possible internal states for a Promise. These states are not directly
     * observable to external callers.
     * @enum {number}
     * @private
     */
    enum State_ {
        /** The Promise is waiting for resolution. */
        PENDING = 0,
        /** The Promise is blocked waiting for the result of another Thenable. */
        BLOCKED = 1,
        /** The Promise has been resolved with a fulfillment value. */
        FULFILLED = 2,
        /** The Promise has been resolved with a rejection reason. */
        REJECTED = 3,
    }
    class CallbackEntry_ {
        child: any;
        onFulfilled: Function;
        onRejected: Function;
        context: any;
        next: goog.Promise.CallbackEntry_;
        always: boolean;
        /**
       * Entries in the callback chain. Each call to {@code then},
       * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
       * functions that may be invoked once the Promise is settled.
       *
       * @private @final @struct @constructor
       */
        constructor();
    }
    var DEFAULT_MAX_UNUSED: number;
    /** @const @private {goog.async.FreeList<!goog.Promise.CallbackEntry_>} */
    var freelist_: async.FreeList<{}>;
    /**
     * @param {Function} onFulfilled
     * @param {Function} onRejected
     * @param {?} context
     * @return {!goog.Promise.CallbackEntry_}
     * @private
     */
    function getCallbackEntry_(onFulfilled: any, onRejected: any, context: any): any;
    /**
     * @param {!goog.Promise.CallbackEntry_} entry
     * @private
     */
    function returnEntry_(entry: any): void;
    /**
     * @param {VALUE=} opt_value
     * @return {RESULT} A new Promise that is immediately resolved
     *     with the given value. If the input value is already a goog.Promise, it
     *     will be returned immediately without creating a new instance.
     * @template VALUE
     * @template RESULT := type('goog.Promise',
     *     cond(isUnknown(VALUE), unknown(),
     *       mapunion(VALUE, (V) =>
     *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
     *           templateTypeOf(V, 0),
     *           cond(sub(V, 'Thenable'),
     *              unknown(),
     *              V)))))
     * =:
     */
    function resolve(opt_value: any): Promise<{}, {}>;
    /**
     * @param {*=} opt_reason
     * @return {!goog.Promise} A new Promise that is immediately rejected with the
     *     given reason.
     */
    function reject(opt_reason: any): Promise<{}, {}>;
    /**
     * This is identical to
     * {@code goog.Promise.resolve(value).then(onFulfilled, onRejected)}, but it
     * avoids creating an unnecessary wrapper Promise when {@code value} is already
     * thenable.
     *
     * @param {?(goog.Thenable<TYPE>|Thenable|TYPE)} value
     * @param {function(TYPE): ?} onFulfilled
     * @param {function(*): *} onRejected
     * @template TYPE
     * @private
     */
    function resolveThen_<TYPE>(value: (goog.Thenable<TYPE> | Thenable<TYPE> | TYPE) | null, onFulfilled: (arg0: TYPE) => any, onRejected: (arg0: any) => any): void;
    /**
     * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
     *     promises
     * @return {!goog.Promise<TYPE>} A Promise that receives the result of the
     *     first Promise (or Promise-like) input to settle immediately after it
     *     settles.
     * @template TYPE
     */
    function race(promises: any): Promise<{}, {}>;
    /**
     * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
     *     promises
     * @return {!goog.Promise<!Array<TYPE>>} A Promise that receives a list of
     *     every fulfilled value once every input Promise (or Promise-like) is
     *     successfully fulfilled, or is rejected with the first rejection reason
     *     immediately after it is rejected.
     * @template TYPE
     */
    function all(promises: any): Promise<{}, {}>;
    /**
     * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
     *     promises
     * @return {!goog.Promise<!Array<{
     *     fulfilled: boolean,
     *     value: (TYPE|undefined),
     *     reason: (*|undefined)}>>} A Promise that resolves with a list of
     *         result objects once all input Promises (or Promise-like) have
     *         settled. Each result object contains a 'fulfilled' boolean indicating
     *         whether an input Promise was fulfilled or rejected. For fulfilled
     *         Promises, the resulting value is stored in the 'value' field. For
     *         rejected Promises, the rejection reason is stored in the 'reason'
     *         field.
     * @template TYPE
     */
    function allSettled(promises: any): Promise<{}, {}>;
    /**
     * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
     *     promises
     * @return {!goog.Promise<TYPE>} A Promise that receives the value of the first
     *     input to be fulfilled, or is rejected with a list of every rejection
     *     reason if all inputs are rejected.
     * @template TYPE
     */
    function firstFulfilled(promises: any): Promise<{}, {}>;
    /**
     * @return {!goog.promise.Resolver<TYPE>} Resolver wrapping the promise and its
     *     resolve / reject functions. Resolving or rejecting the resolver
     *     resolves or rejects the promise.
     * @template TYPE
     */
    function withResolver(): Resolver_<{}>;
    /**
     * Invokes the "then" method of an input value if that value is a Thenable. This
     * is a no-op if the value is not thenable.
     *
     * @param {?} value A potentially thenable value.
     * @param {!Function} onFulfilled
     * @param {!Function} onRejected
     * @param {?} context
     * @return {boolean} Whether the input value was thenable.
     * @private
     */
    function maybeThen_(value: any, onFulfilled: any, onRejected: any, context: any): boolean;
    /**
     * Attempts to call the {@code then} method on an object in the hopes that it is
     * a Promise-compatible instance. This allows interoperation between different
     * Promise implementations, however a non-compliant object may cause a Promise
     * to hang indefinitely. If the {@code then} method throws an exception, the
     * dependent Promise will be rejected with the thrown value.
     *
     * @see http://promisesaplus.com/#point-70
     *
     * @param {Thenable} thenable An object with a {@code then} method that may be
     *     compatible with the Promise/A+ specification.
     * @param {!Function} then The {@code then} method of the Thenable object.
     * @param {!Function} onFulfilled
     * @param {!Function} onRejected
     * @param {*} context
     * @private
     */
    function tryThen_(thenable: any, then: any, onFulfilled: any, onRejected: any, context: any): void;
    /**
     * Executes the onFulfilled or onRejected callback for a callbackEntry.
     *
     * @param {!goog.Promise.CallbackEntry_} callbackEntry
     * @param {goog.Promise.State_} state
     * @param {*} result
     * @private
     */
    function invokeCallback_(callbackEntry: any, state: any, result: any): void;
    /**
     * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
     * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
     * expires, the reason will be passed to the unhandled rejection handler. The
     * handler typically rethrows the rejection reason so that it becomes visible in
     * the developer console.
     *
     * @param {!goog.Promise} promise The rejected Promise.
     * @param {*} reason The Promise rejection reason.
     * @private
     */
    function addUnhandledRejection_(promise: any, reason: any): void;
    /**
     * A method that is invoked with the rejection reasons for Promises that are
     * rejected but have no {@code onRejected} callbacks registered yet.
     * @type {function(*)}
     * @private
     */
    var handleRejection_: typeof async.throwException;
    /**
     * Sets a handler that will be called with reasons from unhandled rejected
     * Promises. If the rejected Promise (or one of its descendants) has an
     * {@code onRejected} callback registered, the rejection will be considered
     * handled, and the rejection handler will not be called.
     *
     * By default, unhandled rejections are rethrown so that the error may be
     * captured by the developer console or a {@code window.onerror} handler.
     *
     * @param {function(*)} handler A function that will be called with reasons from
     *     rejected Promises. Defaults to {@code goog.async.throwException}.
     */
    function setUnhandledRejectionHandler(handler: any): void;
}
declare namespace goog.Promise {
    class CancellationError extends goog.debug.Error {
        /**
         * Error used as a rejection reason for canceled Promises.
         *
         * @param {string=} opt_message
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(opt_message: any);
        name: string;
    }
    class Resolver_<TYPE> {
        promise: any;
        resolve: any;
        reject: any;
        /**
         * Internal implementation of the resolver interface.
         *
         * @param {!goog.Promise<TYPE>} promise
         * @param {function((TYPE|goog.Promise<TYPE>|Thenable)=)} resolve
         * @param {function(*=): void} reject
         * @implements {goog.promise.Resolver<TYPE>}
         * @final @struct
         * @constructor
         * @private
         * @template TYPE
         */
        constructor(promise: any, resolve: any, reject: () => void);
    }
}
