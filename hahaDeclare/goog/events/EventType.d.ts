declare namespace goog.events {
    /**
     * Returns a prefixed event name for the current browser.
     * @param {string} eventName The name of the event.
     * @return {string} The prefixed event name.
     * @suppress {missingRequire|missingProvide}
     * @private
     */
    function getVendorPrefixedName_(eventName: any): any;
    /**
     * Constants for event names.
     * @enum {string}
     */
    const EventType: {
        CLICK: string;
        RIGHTCLICK: string;
        DBLCLICK: string;
        MOUSEDOWN: string;
        MOUSEUP: string;
        MOUSEOVER: string;
        MOUSEOUT: string;
        MOUSEMOVE: string;
        MOUSEENTER: string;
        MOUSELEAVE: string;
        SELECTIONCHANGE: string;
        SELECTSTART: string;
        WHEEL: string;
        KEYPRESS: string;
        KEYDOWN: string;
        KEYUP: string;
        BLUR: string;
        FOCUS: string;
        DEACTIVATE: string;
        FOCUSIN: string;
        FOCUSOUT: string;
        CHANGE: string;
        RESET: string;
        SELECT: string;
        SUBMIT: string;
        INPUT: string;
        PROPERTYCHANGE: string;
        DRAGSTART: string;
        DRAG: string;
        DRAGENTER: string;
        DRAGOVER: string;
        DRAGLEAVE: string;
        DROP: string;
        DRAGEND: string;
        TOUCHSTART: string;
        TOUCHMOVE: string;
        TOUCHEND: string;
        TOUCHCANCEL: string;
        BEFOREUNLOAD: string;
        CONSOLEMESSAGE: string;
        CONTEXTMENU: string;
        DEVICEMOTION: string;
        DEVICEORIENTATION: string;
        DOMCONTENTLOADED: string;
        ERROR: string;
        HELP: string;
        LOAD: string;
        LOSECAPTURE: string;
        ORIENTATIONCHANGE: string;
        READYSTATECHANGE: string;
        RESIZE: string;
        SCROLL: string;
        UNLOAD: string;
        CANPLAY: string;
        CANPLAYTHROUGH: string;
        DURATIONCHANGE: string;
        EMPTIED: string;
        ENDED: string;
        LOADEDDATA: string;
        LOADEDMETADATA: string;
        PAUSE: string;
        PLAY: string;
        PLAYING: string;
        RATECHANGE: string;
        SEEKED: string;
        SEEKING: string;
        STALLED: string;
        SUSPEND: string;
        TIMEUPDATE: string;
        VOLUMECHANGE: string;
        WAITING: string;
        SOURCEOPEN: string;
        SOURCEENDED: string;
        SOURCECLOSED: string;
        ABORT: string;
        UPDATE: string;
        UPDATESTART: string;
        UPDATEEND: string;
        HASHCHANGE: string;
        PAGEHIDE: string;
        PAGESHOW: string;
        POPSTATE: string;
        COPY: string;
        PASTE: string;
        CUT: string;
        BEFORECOPY: string;
        BEFORECUT: string;
        BEFOREPASTE: string;
        ONLINE: string;
        OFFLINE: string;
        MESSAGE: string;
        CONNECT: string;
        INSTALL: string;
        ACTIVATE: string;
        FETCH: string;
        FOREIGNFETCH: string;
        MESSAGEERROR: string;
        STATECHANGE: string;
        UPDATEFOUND: string;
        CONTROLLERCHANGE: string;
        ANIMATIONSTART: any;
        ANIMATIONEND: any;
        ANIMATIONITERATION: any;
        TRANSITIONEND: any;
        POINTERDOWN: string;
        POINTERUP: string;
        POINTERCANCEL: string;
        POINTERMOVE: string;
        POINTEROVER: string;
        POINTEROUT: string;
        POINTERENTER: string;
        POINTERLEAVE: string;
        GOTPOINTERCAPTURE: string;
        LOSTPOINTERCAPTURE: string;
        MSGESTURECHANGE: string;
        MSGESTUREEND: string;
        MSGESTUREHOLD: string;
        MSGESTURESTART: string;
        MSGESTURETAP: string;
        MSGOTPOINTERCAPTURE: string;
        MSINERTIASTART: string;
        MSLOSTPOINTERCAPTURE: string;
        MSPOINTERCANCEL: string;
        MSPOINTERDOWN: string;
        MSPOINTERENTER: string;
        MSPOINTERHOVER: string;
        MSPOINTERLEAVE: string;
        MSPOINTERMOVE: string;
        MSPOINTEROUT: string;
        MSPOINTEROVER: string;
        MSPOINTERUP: string;
        TEXT: string;
        TEXTINPUT: string;
        COMPOSITIONSTART: string;
        COMPOSITIONUPDATE: string;
        COMPOSITIONEND: string;
        BEFOREINPUT: string;
        EXIT: string;
        LOADABORT: string;
        LOADCOMMIT: string;
        LOADREDIRECT: string;
        LOADSTART: string;
        LOADSTOP: string;
        RESPONSIVE: string;
        SIZECHANGED: string;
        UNRESPONSIVE: string;
        VISIBILITYCHANGE: string;
        STORAGE: string;
        DOMSUBTREEMODIFIED: string;
        DOMNODEINSERTED: string;
        DOMNODEREMOVED: string;
        DOMNODEREMOVEDFROMDOCUMENT: string;
        DOMNODEINSERTEDINTODOCUMENT: string;
        DOMATTRMODIFIED: string;
        DOMCHARACTERDATAMODIFIED: string;
        BEFOREPRINT: string;
        AFTERPRINT: string;
        BEFOREINSTALLPROMPT: string;
        APPINSTALLED: string;
    };
    /**
     * Returns one of the given pointer fallback event names in order of preference:
     *   1. pointerEventName
     *   2. msPointerEventName
     *   3. mouseEventName
     * @param {string} pointerEventName
     * @param {string} msPointerEventName
     * @param {string} mouseEventName
     * @return {string} The supported pointer or mouse event name.
     * @private
     */
    function getPointerFallbackEventName_(pointerEventName: any, msPointerEventName: any, mouseEventName: any): any;
    /**
     * Constants for pointer event names that fall back to corresponding mouse event
     * names on unsupported platforms. These are intended to be drop-in replacements
     * for corresponding values in {@code goog.events.EventType}.
     * @enum {string}
     */
    const PointerFallbackEventType: {
        POINTERDOWN: any;
        POINTERUP: any;
        POINTERCANCEL: any;
        POINTERMOVE: any;
        POINTEROVER: any;
        POINTEROUT: any;
        POINTERENTER: any;
        POINTERLEAVE: any;
    };
}
