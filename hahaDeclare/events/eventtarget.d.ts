declare namespace goog.events {
    class EventTarget extends goog.Disposable implements goog.events.Listenable {
        eventTargetListeners_: goog.events.ListenerMap;
        actualEventTarget_: Object;
        parentEventTarget_: goog.events.EventTarget;
        /**
         * An implementation of {@code goog.events.Listenable} with full W3C
         * EventTarget-like support (capture/bubble mechanism, stopping event
         * propagation, preventing default actions).
         *
         * You may subclass this class to turn your class into a Listenable.
         *
         * Unless propagation is stopped, an event dispatched by an
         * EventTarget will bubble to the parent returned by
         * {@code getParentEventTarget}. To set the parent, call
         * {@code setParentEventTarget}. Subclasses that don't support
         * changing the parent can override the setter to throw an error.
         *
         * Example usage:
         * <pre>
         *   var source = new goog.events.EventTarget();
         *   function handleEvent(e) {
         *     alert('Type: ' + e.type + '; Target: ' + e.target);
         *   }
         *   source.listen('foo', handleEvent);
         *   // Or: goog.events.listen(source, 'foo', handleEvent);
         *   ...
         *   source.dispatchEvent('foo');  // will call handleEvent
         *   ...
         *   source.unlisten('foo', handleEvent);
         *   // Or: goog.events.unlisten(source, 'foo', handleEvent);
         * </pre>
         *
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.events.Listenable}
         */
        constructor();
        /**
         * Returns the parent of this event target to use for bubbling.
         *
         * @return {goog.events.EventTarget} The parent EventTarget or null if
         *     there is no parent.
         * @override
         */
        getParentEventTarget(): EventTarget;
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.EventTarget} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: any): void;
        /**
         * Adds an event listener to the event target. The same handler can only be
         * added once per the type. Even if you add the same handler multiple times
         * using the same type then it will only be called once when the event is
         * dispatched.
         *
         * @param {string|!goog.events.EventId} type The type of the event to listen for
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #listen} instead, when possible. Otherwise, use
         *     {@code goog.events.listen} if you are passing Object
         *     (instead of Function) as handler.
         */
        addEventListener(type: string | goog.events.EventId, handler: (arg0: any) => any | {
            handleEvent: (any) => any;
        } | null, opt_capture?: boolean | undefined, opt_handlerScope?: object | undefined): void;
        /**
         * Removes an event listener from the event target. The handler must be the
         * same object as the one added. If the handler has not been added then
         * nothing is done.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #unlisten} instead, when possible. Otherwise, use
         *     {@code goog.events.unlisten} if you are passing Object
         *     (instead of Function) as handler.
         */
        removeEventListener(type: any, handler: any, opt_capture?: any, opt_handlerScope?: any): void;
        /** @override */
        dispatchEvent(e: any): boolean;
        /**
         * Removes listeners from this object.  Classes that extend EventTarget may
         * need to override this method in order to remove references to DOM Elements
         * and additional listeners.
         * @override
         */
        protected disposeInternal(): void;
        /** @override */
        listen(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        listenOnce(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        unlisten(type: any, listener: any, opt_useCapture?: any, opt_listenerScope?: any): boolean;
        /** @override */
        unlistenByKey(key: any): boolean;
        /** @override */
        removeAllListeners(opt_type?: any): number;
        /** @override */
        fireListeners(type: any, capture: any, eventObject: any): boolean;
        /** @override */
        getListeners(type: any, capture: any): ListenableKey[];
        /** @override */
        getListener(type: any, listener: any, capture: any, opt_listenerScope?: any): ListenableKey;
        /** @override */
        hasListener(opt_type?: any, opt_capture?: any): boolean;
        /**
         * Sets the target to be used for {@code event.target} when firing
         * event. Mainly used for testing. For example, see
         * {@code goog.testing.events.mixinListenable}.
         * @param {!Object} target The target.
         */
        setTargetForTesting(target: object): void;
        /**
         * Asserts that the event target instance is initialized properly.
         * @private
         */
        assertInitialized_(): void;
    }
}
declare namespace goog.events.EventTarget {
    /**
     * An artificial cap on the number of ancestors you can have. This is mainly
     * for loop detection.
     * @const {number}
     * @private
     */
    var MAX_ANCESTORS_: number;
    /**
     * Dispatches the given event on the ancestorsTree.
     *
     * @param {!Object} target The target to dispatch on.
     * @param {goog.events.Event|Object|string} e The event object.
     * @param {Array<goog.events.Listenable>=} opt_ancestorsTree The ancestors
     *     tree of the target, in reverse order from the closest ancestor
     *     to the root event target. May be null if the target has no ancestor.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the listeners returns false) this will also return false.
     * @private
     */
    function dispatchEventInternal_(target: object, e: goog.events.Event | object | string, opt_ancestorsTree?: Array<goog.events.Listenable> | undefined): boolean;
}
