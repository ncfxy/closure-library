declare namespace goog.events {
    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    var BrowserFeature: {
        HAS_W3C_BUTTON: boolean;
        HAS_W3C_EVENT_SUPPORT: boolean;
        SET_KEY_CODE_TO_PREVENT_DEFAULT: boolean;
        HAS_NAVIGATOR_ONLINE_PROPERTY: boolean;
        HAS_HTML5_NETWORK_EVENT_SUPPORT: boolean;
        HTML5_NETWORK_EVENTS_FIRE_ON_BODY: boolean;
        TOUCH_ENABLED: boolean;
        POINTER_EVENTS: boolean;
        MSPOINTER_EVENTS: boolean;
        PASSIVE_EVENTS: any;
    };
}
/**
 * Tricks Closure Compiler into believing that a function is pure.  The compiler
 * assumes that any `valueOf` function is pure, without analyzing its contents.
 *
 * @param {function(): T} fn
 * @return {T}
 * @template T
 */
declare function purify(fn: any): any;
