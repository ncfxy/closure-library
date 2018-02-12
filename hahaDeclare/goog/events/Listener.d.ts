declare namespace goog.events {
    class Listener {
        listener: any;
        proxy: Function;
        src: EventTarget | goog.events.Listenable;
        type: string;
        capture: boolean;
        handler: object | undefined;
        key: number;
        callOnce: boolean;
        removed: boolean;
        /**
         * Simple class that stores information about a listener
         * @param {function(?):?} listener Callback function.
         * @param {Function} proxy Wrapper for the listener that patches the event.
         * @param {EventTarget|goog.events.Listenable} src Source object for
         *     the event.
         * @param {string} type Event type.
         * @param {boolean} capture Whether in capture or bubble phase.
         * @param {Object=} opt_handler Object in whose context to execute the callback.
         * @implements {goog.events.ListenableKey}
         * @constructor
         */
        constructor(listener: Function, proxy: Function, src: EventTarget | goog.events.Listenable, type: string, capture: boolean, opt_handler?: object | undefined);
        /**
         * If monitoring the goog.events.Listener instances is enabled, stores the
         * creation stack trace of the Disposable instance.
         * @type {string}
         */
        creationStack: string;
        /**
         * Marks this listener as removed. This also remove references held by
         * this listener object (such as listener and event source).
         */
        markAsRemoved(): void;
    }
}
declare namespace goog.events.Listener {
    var ENABLE_MONITORING: boolean;
}
