declare namespace goog.events {
    /**
     * A typedef for event like objects that are dispatchable via the
     * goog.events.dispatchEvent function. strings are treated as the type for a
     * goog.events.Event. Objects are treated as an extension of a new
     * goog.events.Event with the type property of the object being used as the type
     * of the Event.
     * @typedef {string|Object|goog.events.Event|goog.events.EventId}
     */
    type EventLike = string | Object | goog.events.Event | goog.events.EventId;
    class Event {
        type: string;
        target: Object | undefined;
        currentTarget: Object | undefined;
        propagationStopped_: boolean;
        defaultPrevented: boolean;
        returnValue_: boolean;
        /**
         * A base class for event objects, so that they can support preventDefault and
         * stopPropagation.
         *
         * @suppress {underscore} Several properties on this class are technically
         *     public, but referencing these properties outside this package is strongly
         *     discouraged.
         *
         * @param {string|!goog.events.EventId} type Event Type.
         * @param {Object=} opt_target Reference to the object that is the target of
         *     this event. It has to implement the {@code EventTarget} interface
         *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.
         * @constructor
         */
        constructor(type: any, opt_target?: any);
        /**
         * Stops event propagation.
         */
        stopPropagation(): void;
        /**
         * Prevents the default action, for example a link redirecting to a url.
         */
        preventDefault(): void;
    }
}
declare namespace goog.events {
    /**
     * Stops the propagation of the event. It is equivalent to
     * {@code e.stopPropagation()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function stopPropagation(e: any): void;
    /**
     * Prevents the default action. It is equivalent to
     * {@code e.preventDefault()}, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param {!goog.events.Event} e An event.
     */
    function preventDefault(e: any): void;
}
