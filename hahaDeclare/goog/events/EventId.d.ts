declare namespace goog.events {
    class EventId {
        id: any;
        /**
         * A templated class that is used when registering for events. Typical usage:
         *
         *    /** @type {goog.events.EventId<MyEventObj>} *\
         *    var myEventId = new goog.events.EventId(
         *        goog.events.getUniqueId(('someEvent'));
         *
         *    // No need to cast or declare here since the compiler knows the
         *    // correct type of 'evt' (MyEventObj).
         *    something.listen(myEventId, function(evt) {});
         *
         * @param {string} eventId
         * @template T
         * @constructor
         * @struct
         * @final
         */
        constructor(eventId: string);
        /**
         * @override
         */
        toString(): any;
    }
}
