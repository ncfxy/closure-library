declare namespace goog.events {
    class EventHandler<SCOPE> extends goog.Disposable {
        handler_: any;
        keys_: Object;
        /**
         * Super class for objects that want to easily manage a number of event
         * listeners.  It allows a short cut to listen and also provides a quick way
         * to remove all events listeners belonging to this object.
         * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
         * @constructor
         * @extends {goog.Disposable}
         * @template SCOPE
         */
        constructor(opt_scope?: SCOPE);
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        listen<EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, opt_fn?: any, opt_options?: (boolean | AddEventListenerOptions) | undefined): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|!AddEventListenerOptions|undefined} options
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, EVENTOBJ, THIS
         */
        listenWithScope<T, EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, fn: any, options: boolean | AddEventListenerOptions | undefined, scope: T): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         * @private
         */
        private listen_<EVENTOBJ, THIS>(src, type, opt_fn?, opt_options?, opt_scope?);
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         * opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        listenOnce<EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, opt_fn?: any, opt_options?: (boolean | AddEventListenerOptions) | undefined): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, EVENTOBJ, THIS
         */
        listenOnceWithScope<T, EVENTOBJ, THIS>(src: goog.events.ListenableType, type: any, fn: any, capture: boolean | undefined, scope: T): THIS;
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired
         * the event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {(boolean|!AddEventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         * @private
         */
        private listenOnce_<EVENTOBJ, THIS>(src, type, opt_fn?, opt_options?, opt_scope?);
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:SCOPE, ?):?|{handleEvent:function(?):?}|null} listener
         *     Callback method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         */
        listenWithWrapper<THIS>(src: EventTarget | goog.events.EventTarget, wrapper: goog.events.EventWrapper, listener: (this: SCOPE, arg1: any) => any | {
            handleEvent: (arg0: any) => any;
        } | null, opt_capt?: boolean | undefined): THIS;
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:T, ?):?|{handleEvent:function(this:T, ?):?}|null}
         *     listener Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template T, THIS
         */
        listenWithWrapperAndScope<T, THIS>(src: EventTarget | goog.events.EventTarget, wrapper: goog.events.EventWrapper, listener: any, capture: boolean | undefined, scope: T): THIS;
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         * @private
         */
        private listenWithWrapper_<THIS>(src, wrapper, listener, opt_capt?, opt_scope?);
        /**
         * @return {number} Number of listeners registered by this handler.
         */
        getListenerCount(): number;
        /**
         * Unlistens on an event.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array<string>|
         *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
         *     type Event type or array of event types to unlisten to.
         * @param {function(this:?, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {(boolean|!EventListenerOptions)=} opt_options
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template EVENTOBJ, THIS
         */
        unlisten(src: any, type: any, opt_fn: any, opt_options: any, opt_scope: any): this;
        /**
         * Removes an event listener which was added with listenWithWrapper().
         *
         * @param {EventTarget|goog.events.EventTarget} src The target to stop
         *     listening to events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
         *     listener function to remove.
         * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase of the
         *     event.
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {THIS} This object, allowing for chaining of calls.
         * @this {THIS}
         * @template THIS
         */
        unlistenWithWrapper(src: any, wrapper: any, listener: any, opt_capt: any, opt_scope: any): this;
        /**
         * Unlistens to all events.
         */
        removeAll(): void;
        /**
         * Disposes of this EventHandler and removes all listeners that it registered.
         * @override
         * @protected
         */
        protected disposeInternal(): void;
        /**
         * Default event handler
         * @param {goog.events.Event} e Event object.
         */
        handleEvent(e: any): void;
    }
}
declare namespace goog.events.EventHandler {
    /**
     * Utility array used to unify the cases of listening for an array of types
     * and listening for a single event, without using recursion or allocating
     * an array each time.
     * @type {!Array<string>}
     * @const
     * @private
     */
    const typeArray_: any[];
}
