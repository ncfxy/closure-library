declare namespace goog.async {
    /**
     * A Deferred represents the result of an asynchronous operation. A Deferred
     * instance has no result when it is created, and is "fired" (given an initial
     * result) by calling {@code callback} or {@code errback}.
     *
     * Once fired, the result is passed through a sequence of callback functions
     * registered with {@code addCallback} or {@code addErrback}. The functions may
     * mutate the result before it is passed to the next function in the sequence.
     *
     * Callbacks and errbacks may be added at any time, including after the Deferred
     * has been "fired". If there are no pending actions in the execution sequence
     * of a fired Deferred, any new callback functions will be called with the last
     * computed result. Adding a callback function is the only way to access the
     * result of the Deferred.
     *
     * If a Deferred operation is canceled, an optional user-provided cancellation
     * function is invoked which may perform any special cleanup, followed by firing
     * the Deferred's errback sequence with a {@code CanceledError}. If the
     * Deferred has already fired, cancellation is ignored.
     *
     * Deferreds may be templated to a specific type they produce using generics
     * with syntax such as:
     *
     *    /** @type {goog.async.Deferred<string>} *\
     *    var d = new goog.async.Deferred();
     *    // Compiler can infer that foo is a string.
     *    d.addCallback(function(foo) {...});
     *    d.callback('string');  // Checked to be passed a string
     *
     * Since deferreds are often used to produce different values across a chain,
     * the type information is not propagated across chains, but rather only
     * associated with specifically cast objects.
     *
  
     * @implements {goog.Thenable<VALUE>}
     * @template VALUE
     */
    class Deferred<VALUE> implements goog.Thenable<VALUE> {
        sequence_: Array<Array<any>>;
        onCancelFunction_: Function;
        defaultScope_: Object;
        fired_: boolean;
        hadError_: boolean;
        result_: any;
        blocked_: boolean;
        blocking_: boolean;
        silentlyCanceled_: boolean;
        unhandledErrorId_: number;
        parent_: any;
        branches_: number;
        constructorStack_: string;
        /**
          *
          * @param {Function=} opt_onCancelFunction A function that will be called if the
          *     Deferred is canceled. If provided, this function runs before the
          *     Deferred is fired with a {@code CanceledError}.
          * @param {Object=} opt_defaultScope The default object context to call
          *     callbacks and errbacks in.
          * @constructor
          */
        constructor(opt_onCancelFunction?: Function, opt_defaultScope?: object);
        /**
         * Cancels a Deferred that has not yet been fired, or is blocked on another
         * deferred operation. If this Deferred is waiting for a blocking Deferred to
         * fire, the blocking Deferred will also be canceled.
         *
         * If this Deferred was created by calling branch() on a parent Deferred with
         * opt_propagateCancel set to true, the parent may also be canceled. If
         * opt_deepCancel is set, cancel() will be called on the parent (as well as any
         * other ancestors if the parent is also a branch). If one or more branches were
         * created with opt_propagateCancel set to true, the parent will be canceled if
         * cancel() is called on all of those branches.
         *
         * @param {boolean=} opt_deepCancel If true, cancels this Deferred's parent even
         *     if cancel() hasn't been called on some of the parent's branches. Has no
         *     effect on a branch without opt_propagateCancel set to true.
         */
        cancel(opt_deepCancel?: any): void;
        /**
         * Handle a single branch being canceled. Once all branches are canceled, this
         * Deferred will be canceled as well.
         *
         * @private
         */
        branchCancel_(): void;
        /**
         * Called after a blocking Deferred fires. Unblocks this Deferred and resumes
         * its execution sequence.
         *
         * @param {boolean} isSuccess Whether the result is a success or an error.
         * @param {*} res The result of the blocking Deferred.
         * @private
         */
        continue_(isSuccess: any, res: any): void;
        /**
         * Updates the current result based on the success or failure of the last action
         * in the execution sequence.
         *
         * @param {boolean} isSuccess Whether the new result is a success or an error.
         * @param {*} res The result.
         * @private
         */
        updateResult_(isSuccess: any, res: any): void;
        /**
         * Verifies that the Deferred has not yet been fired.
         *
         * @private
         * @throws {Error} If this has already been fired.
         */
        check_(): void;
        /**
         * Fire the execution sequence for this Deferred by passing the starting result
         * to the first registered callback.
         * @param {VALUE=} opt_result The starting result.
         */
        callback(opt_result?: any): void;
        /**
         * Fire the execution sequence for this Deferred by passing the starting error
         * result to the first registered errback.
         * @param {*=} opt_result The starting error.
         */
        errback(opt_result: any): void;
        /**
         * Attempt to make the error's stack trace be long in that it contains the
         * stack trace from the point where the deferred was created on top of the
         * current stack trace to give additional context.
         * @param {*} error
         * @private
         */
        makeStackTraceLong_(error: any): void;
        /**
         * Asserts that an object is not a Deferred.
         * @param {*} obj The object to test.
         * @throws {Error} Throws an exception if the object is a Deferred.
         * @private
         */
        assertNotDeferred_(obj: any): void;
        /**
         * Register a callback function to be called with a successful result. If no
         * value is returned by the callback function, the result value is unchanged. If
         * a new value is returned, it becomes the Deferred result and will be passed to
         * the next callback in the execution sequence.
         *
         * If the function throws an error, the error becomes the new result and will be
         * passed to the next errback in the execution chain.
         *
         * If the function returns a Deferred, the execution sequence will be blocked
         * until that Deferred fires. Its result will be passed to the next callback (or
         * errback if it is an error result) in this Deferred's execution sequence.
         *
         * @param {function(this:T,VALUE):?} cb The function to be called with a
         *     successful result.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addCallback(cb: any, opt_scope?: any): this;
        /**
         * Register a callback function to be called with an error result. If no value
         * is returned by the function, the error result is unchanged. If a new error
         * value is returned or thrown, that error becomes the Deferred result and will
         * be passed to the next errback in the execution sequence.
         *
         * If the errback function handles the error by returning a non-error value,
         * that result will be passed to the next normal callback in the sequence.
         *
         * If the function returns a Deferred, the execution sequence will be blocked
         * until that Deferred fires. Its result will be passed to the next callback (or
         * errback if it is an error result) in this Deferred's execution sequence.
         *
         * @param {function(this:T,?):?} eb The function to be called on an
         *     unsuccessful result.
         * @param {T=} opt_scope An optional scope to call the errback in.
         * @return {!goog.async.Deferred<VALUE>} This Deferred.
         * @template T
         */
        addErrback(eb: any, opt_scope: any): this;
        /**
         * Registers one function as both a callback and errback.
         *
         * @param {function(this:T,?):?} f The function to be called on any result.
         * @param {T=} opt_scope An optional scope to call the function in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addBoth(f: any, opt_scope: any): this;
        /**
         * Like addBoth, but propagates uncaught exceptions in the errback.
         *
         * @param {function(this:T,?):?} f The function to be called on any result.
         * @param {T=} opt_scope An optional scope to call the function in.
         * @return {!goog.async.Deferred<VALUE>} This Deferred.
         * @template T
         */
        addFinally(f: any, opt_scope: any): this;
        /**
         * Registers a callback function and an errback function at the same position
         * in the execution sequence. Only one of these functions will execute,
         * depending on the error state during the execution sequence.
         *
         * NOTE: This is not equivalent to {@code def.addCallback().addErrback()}! If
         * the callback is invoked, the errback will be skipped, and vice versa.
         *
         * @param {?(function(this:T,VALUE):?)} cb The function to be called on a
         *     successful result.
         * @param {?(function(this:T,?):?)} eb The function to be called on an
         *     unsuccessful result.
         * @param {T=} opt_scope An optional scope to call the functions in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addCallbacks(cb: any, eb: any, opt_scope?: any): this;
        /**
         * Implements {@see goog.Thenable} for seamless integration with
         * {@see goog.Promise}.
         * Deferred results are mutable and may represent multiple values over
         * their lifetime. Calling {@code then} on a Deferred returns a Promise
         * with the result of the Deferred at that point in its callback chain.
         * Note that if the Deferred result is never mutated, and only
         * {@code then} calls are made, the Deferred will behave like a Promise.
         *
         * @override
         */
        then(opt_onFulfilled: any, opt_onRejected: any, opt_context: any): any;
        /**
         * Links another Deferred to the end of this Deferred's execution sequence. The
         * result of this execution sequence will be passed as the starting result for
         * the chained Deferred, invoking either its first callback or errback.
         *
         * @param {!goog.async.Deferred} otherDeferred The Deferred to chain.
         * @return {!goog.async.Deferred} This Deferred.
         */
        chainDeferred(otherDeferred: any): this;
        /**
         * Makes this Deferred wait for another Deferred's execution sequence to
         * complete before continuing.
         *
         * This is equivalent to adding a callback that returns {@code otherDeferred},
         * but doesn't prevent additional callbacks from being added to
         * {@code otherDeferred}.
         *
         * @param {!goog.async.Deferred|!goog.Thenable} otherDeferred The Deferred
         *     to wait for.
         * @return {!goog.async.Deferred} This Deferred.
         */
        awaitDeferred(otherDeferred: any): this;
        /**
         * Creates a branch off this Deferred's execution sequence, and returns it as a
         * new Deferred. The branched Deferred's starting result will be shared with the
         * parent at the point of the branch, even if further callbacks are added to the
         * parent.
         *
         * All branches at the same stage in the execution sequence will receive the
         * same starting value.
         *
         * @param {boolean=} opt_propagateCancel If cancel() is called on every child
         *     branch created with opt_propagateCancel, the parent will be canceled as
         *     well.
         * @return {!goog.async.Deferred<VALUE>} A Deferred that will be started with
         *     the computed result from this stage in the execution sequence.
         */
        branch(opt_propagateCancel: any): Deferred<{}>;
        /**
         * @return {boolean} Whether the execution sequence has been started on this
         *     Deferred by invoking {@code callback} or {@code errback}.
         */
        hasFired(): boolean;
        /**
         * @param {*} res The latest result in the execution sequence.
         * @return {boolean} Whether the current result is an error that should cause
         *     the next errback to fire. May be overridden by subclasses to handle
         *     special error types.
         * @protected
         */
        isError(res: any): boolean;
        /**
         * @return {boolean} Whether an errback exists in the remaining sequence.
         * @private
         */
        hasErrback_(): boolean;
        /**
         * Exhausts the execution sequence while a result is available. The result may
         * be modified by callbacks or errbacks, and execution will block if the
         * returned result is an incomplete Deferred.
         *
         * @private
         */
        fire_(): void;
    }
}
declare namespace goog.async.Deferred {
    var STRICT_ERRORS: boolean;
    var LONG_STACK_TRACES: boolean;
}
declare namespace goog.async.Deferred {
    /**
     * Creates a Deferred that has an initial result.
     *
     * @param {*=} opt_result The result.
     * @return {!goog.async.Deferred} The new Deferred.
     */
    function succeed(opt_result: any): Deferred<{}>;
    /**
     * Creates a Deferred that fires when the given promise resolves.
     * Use only during migration to Promises.
     *
     * @param {!goog.Promise<T>} promise
     * @return {!goog.async.Deferred<T>} The new Deferred.
     * @template T
     */
    function fromPromise(promise: any): Deferred<{}>;
    /**
     * Creates a Deferred that has an initial error result.
     *
     * @param {*} res The error result.
     * @return {!goog.async.Deferred} The new Deferred.
     */
    function fail(res: any): Deferred<{}>;
    /**
     * Creates a Deferred that has already been canceled.
     *
     * @return {!goog.async.Deferred} The new Deferred.
     */
    function canceled(): Deferred<{}>;
    /**
     * Normalizes values that may or may not be Deferreds.
     *
     * If the input value is a Deferred, the Deferred is branched (so the original
     * execution sequence is not modified) and the input callback added to the new
     * branch. The branch is returned to the caller.
     *
     * If the input value is not a Deferred, the callback will be executed
     * immediately and an already firing Deferred will be returned to the caller.
     *
     * In the following (contrived) example, if <code>isImmediate</code> is true
     * then 3 is alerted immediately, otherwise 6 is alerted after a 2-second delay.
     *
     * <pre>
     * var value;
     * if (isImmediate) {
     *   value = 3;
     * } else {
     *   value = new goog.async.Deferred();
     *   setTimeout(function() { value.callback(6); }, 2000);
     * }
     *
     * var d = goog.async.Deferred.when(value, alert);
     * </pre>
     *
     * @param {*} value Deferred or normal value to pass to the callback.
     * @param {function(this:T, ?):?} callback The callback to execute.
     * @param {T=} opt_scope An optional scope to call the callback in.
     * @return {!goog.async.Deferred} A new Deferred that will call the input
     *     callback with the input value.
     * @template T
     */
    function when(value: any, callback: any, opt_scope: any): Deferred<{}>;
}
declare namespace goog.async.Deferred {
    class AlreadyCalledError extends goog.debug.Error {
        deferred: goog.async.Deferred<string>;
        /**
         * An error sub class that is used when a Deferred has already been called.
         * @param {!goog.async.Deferred} deferred The Deferred.
         *
         * @constructor
         * @extends {goog.debug.Error}
         */
        constructor(deferred: any);
        /** @override */
        message: string;
        /** @override */
        name: string;
    }
}
declare namespace goog.async.Deferred {
    class CanceledError extends goog.debug.Error {
        deferred: goog.async.Deferred<string>;
        /**
         * An error sub class that is used when a Deferred is canceled.
         *
         * @param {!goog.async.Deferred} deferred The Deferred object.
         * @constructor
         * @extends {goog.debug.Error}
         */
        constructor(deferred: any);
        /** @override */
        message: string;
        /** @override */
        name: string;
    }
}
declare namespace goog.async.Deferred {
    class Error_ {
        id_: any;
        error_: any;
        /**
         * Wrapper around errors that are scheduled to be thrown by failing deferreds
         * after a timeout.
         *
         * @param {*} error Error from a failing deferred.
         * @constructor
         * @final
         * @private
         * @struct
         */
        constructor(error: any);
        /**
         * Actually throws the error and removes it from the list of pending
         * deferred errors.
         */
        throwError(): void;
        /**
         * Resets the error throw timer.
         */
        resetTimer(): void;
    }
}
declare namespace goog.async.Deferred {
    /**
     * Map of unhandled errors scheduled to be rethrown in a future timestep.
     * @private {!Object<(number|string), goog.async.Deferred.Error_>}
     */
    var errorMap_: {};
    /**
     * Schedules an error to be thrown after a delay.
     * @param {*} error Error from a failing deferred.
     * @return {number} Id of the error.
     * @private
     */
    function scheduleError_(error: any): any;
    /**
     * Unschedules an error from being thrown.
     * @param {number} id Id of the deferred error to unschedule.
     * @private
     */
    function unscheduleError_(id: any): void;
    /**
     * Asserts that there are no pending deferred errors. If there are any
     * scheduled errors, one will be thrown immediately to make this function fail.
     */
    function assertNoErrors(): void;
}
