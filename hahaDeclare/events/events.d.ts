declare namespace goog.events {
    /**
     * @typedef {number|goog.events.ListenableKey}
     */
    type Key = number | goog.events.ListenableKey;
    /**
     * @typedef {EventTarget|goog.events.Listenable}
     */
    type ListenableType = EventTarget | goog.events.Listenable;
    /**
     * Property name on a native event target for the listener map
     * associated with the event target.
     * @private @const {string}
     */
    const LISTENER_MAP_PROP_: string;
    /**
     * String used to prepend to IE event types.
     * @const
     * @private
     */
    const onString_ = "on";
    /**
     * Map of computed "on<eventname>" strings for IE event types. Caching
     * this removes an extra object allocation in goog.events.listen which
     * improves IE6 performance.
     * @const
     * @dict
     * @private
     */
    const onStringMap_: {};
    /**
     * @enum {number} Different capture simulation mode for IE8-.
     */
    enum CaptureSimulationMode {
        /**
         * Does not perform capture simulation. Will asserts in IE8- when you
         * add capture listeners.
         */
        OFF_AND_FAIL = 0,
        /**
         * Does not perform capture simulation, silently ignore capture
         * listeners.
         */
        OFF_AND_SILENT = 1,
        /**
         * Performs capture simulation.
         */
        ON = 2,
    }
    var CAPTURE_SIMULATION_MODE: number;
    /**
     * Estimated count of total native listeners.
     * @private {number}
     */
    var listenerCountEstimate_: number;
    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. A listener can only be added once
     * to an object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method, or an object with a handleEvent function.
     *     WARNING: passing an Object is now softly deprecated.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listen(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Adds an event listener for a specific event on a native event
     * target. A listener can only be added once to an object and if it
     * is added again the key for the listener is returned.
     *
     * Note that a one-off listener will not change an existing listener,
     * if any. On the other hand a normal listener will change existing
     * one-off listener to become a normal listener.
     *
     * @param {EventTarget} src The node to listen to events on.
     * @param {string|?goog.events.EventId<EVENTOBJ>} type Event type.
     * @param {!Function} listener Callback function.
     * @param {boolean} callOnce Whether the listener is a one-off
     *     listener or otherwise.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} Unique key for the listener.
     * @template EVENTOBJ
     * @private
     */
    function listen_(src: any, type: any, listener: any, callOnce: any, opt_options: any, opt_handler: any): Listener;
    /**
     * Helper function for returning a proxy function.
     * @return {!Function} A new or reused function object.
     */
    function getProxy(): any;
    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. After the event has fired the event
     * listener is removed from the target.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method.
     * @param {(boolean|!AddEventListenerOptions)=} opt_options
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listenOnce(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link goog.events.Listenable}. A listener can
     * only be added once to an object.
     *
     * @param {EventTarget|goog.events.Listenable} src The target to
     *     listen to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(this:T, ?):?|{handleEvent:function(?):?}|null} listener
     *     Callback method, or an object with a handleEvent function.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @template T
     */
    function listenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_handler: any): void;
    /**
     * Removes an event listener which was added with listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types to unlisten to.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {(boolean|!EventListenerOptions)=} opt_options
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {?boolean} indicating whether the listener was there to remove.
     * @template EVENTOBJ
     */
    function unlisten(src: any, type: any, listener: any, opt_options: any, opt_handler: any): any;
    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     *
     * @param {goog.events.Key} key The key returned by listen() for this
     *     event listener.
     * @return {boolean} indicating whether the listener was there to remove.
     */
    function unlistenByKey(key: any): any;
    /**
     * Removes an event listener which was added with listenWithWrapper().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     */
    function unlistenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_handler: any): void;
    /**
     * Removes all listeners from an object. You can also optionally
     * remove listeners of a particular type.
     *
     * @param {Object|undefined} obj Object to remove listeners from. Must be an
     *     EventTarget or a goog.events.Listenable.
     * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
     *     Default is all types.
     * @return {number} Number of listeners removed.
     */
    function removeAll(obj: any, opt_type: any): any;
    /**
     * Gets the listeners for a given object, type and capture phase.
     *
     * @param {Object} obj Object to get listeners for.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Capture phase?.
     * @return {Array<!goog.events.Listener>} Array of listener objects.
     */
    function getListeners(obj: any, type: any, capture: any): any;
    /**
     * Gets the goog.events.Listener for the event or null if no such listener is
     * in use.
     *
     * @param {EventTarget|goog.events.Listenable} src The target from
     *     which to get listeners.
     * @param {?string|!goog.events.EventId<EVENTOBJ>} type The type of the event.
     * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to get.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *                            whether the listener is fired during the
     *                            capture or bubble phase of the event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} the found listener or null if not found.
     * @template EVENTOBJ
     */
    function getListener(src: any, type: any, listener: any, opt_capt: any, opt_handler: any): any;
    /**
     * Returns whether an event target has any active listeners matching the
     * specified signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     *
     * @param {EventTarget|goog.events.Listenable} obj Target to get
     *     listeners for.
     * @param {string|!goog.events.EventId=} opt_type Event type.
     * @param {boolean=} opt_capture Whether to check for capture or bubble-phase
     *     listeners.
     * @return {boolean} Whether an event target has one or more listeners matching
     *     the requested type and/or capture phase.
     */
    function hasListener(obj: any, opt_type: any, opt_capture: any): any;
    /**
     * Provides a nice string showing the normalized event objects public members
     * @param {Object} e Event Object.
     * @return {string} String of the public members of the normalized event object.
     */
    function expose(e: any): string;
    /**
     * Returns a string with on prepended to the specified type. This is used for IE
     * which expects "on" to be prepended. This function caches the string in order
     * to avoid extra allocations in steady state.
     * @param {string} type Event type.
     * @return {string} The type string with 'on' prepended.
     * @private
     */
    function getOnString_(type: any): any;
    /**
     * Fires an object's listeners of a particular type and phase
     *
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     */
    function fireListeners(obj: any, type: any, capture: any, eventObject: any): any;
    /**
     * Fires an object's listeners of a particular type and phase.
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     * @private
     */
    function fireListeners_(obj: any, type: any, capture: any, eventObject: any): boolean;
    /**
     * Fires a listener with a set of arguments
     *
     * @param {goog.events.Listener} listener The listener object to call.
     * @param {Object} eventObject The event object to pass to the listener.
     * @return {*} Result of listener.
     */
    function fireListener(listener: any, eventObject: any): any;
    /**
     * Gets the total number of listeners currently in the system.
     * @return {number} Number of listeners.
     * @deprecated This returns estimated count, now that Closure no longer
     * stores a central listener registry. We still return an estimation
     * to keep existing listener-related tests passing. In the near future,
     * this function will be removed.
     */
    function getTotalListenerCount(): number;
    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     *
     * @param {goog.events.Listenable} src The event target.
     * @param {goog.events.EventLike} e Event object.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the handlers returns false) this will also return false.
     *     If there are no handlers, or if all handlers return true, this returns
     *     true.
     */
    function dispatchEvent(src: any, e: any): any;
    /**
     * Installs exception protection for the browser event entry point using the
     * given error handler.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point.
     */
    function protectBrowserEventEntryPoint(errorHandler: any): void;
    /**
     * Handles an event and dispatches it to the correct listeners. This
     * function is a proxy for the real listener the user specified.
     *
     * @param {goog.events.Listener} listener The listener object.
     * @param {Event=} opt_evt Optional event object that gets passed in via the
     *     native event handlers.
     * @return {*} Result of the event handler.
     * @this {EventTarget} The object or Element that fired the event.
     * @private
     */
    function handleBrowserEvent_(listener: any, opt_evt: any): any;
    /**
     * This is used to mark the IE event object so we do not do the Closure pass
     * twice for a bubbling event.
     * @param {Event} e The IE browser event.
     * @private
     */
    function markIeEvent_(e: any): void;
    /**
     * This is used to check if an IE event has already been handled by the Closure
     * system so we do not do the Closure pass twice for a bubbling event.
     * @param {Event} e  The IE browser event.
     * @return {boolean} True if the event object has been marked.
     * @private
     */
    function isMarkedIeEvent_(e: any): boolean;
    /**
     * Counter to create unique event ids.
     * @private {number}
     */
    var uniqueIdCounter_: number;
    /**
     * Creates a unique event id.
     *
     * @param {string} identifier The identifier.
     * @return {string} A unique identifier.
     * @idGenerator {unique}
     */
    function getUniqueId(identifier: any): string;
    /**
     * @param {EventTarget} src The source object.
     * @return {goog.events.ListenerMap} A listener map for the given
     *     source object, or null if none exists.
     * @private
     */
    function getListenerMap_(src: any): ListenerMap;
    /**
     * Expando property for listener function wrapper for Object with
     * handleEvent.
     * @private @const {string}
     */
    const LISTENER_WRAPPER_PROP_: string;
    /**
     * @param {Object|Function} listener The listener function or an
     *     object that contains handleEvent method.
     * @return {!Function} Either the original function or a function that
     *     calls obj.handleEvent. If the same listener is passed to this
     *     function more than once, the same function is guaranteed to be
     *     returned.
     */
    function wrapListener(listener: any): any;
}
