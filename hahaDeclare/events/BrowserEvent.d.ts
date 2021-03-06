/// <reference path="event.d.ts" />
declare namespace goog.events {
    class BrowserEvent extends goog.events.Event {
        target: Node;
        currentTarget: Node | undefined;
        relatedTarget: Node;
        offsetX: number;
        offsetY: number;
        clientX: number;
        clientY: number;
        screenX: number;
        screenY: number;
        button: number;
        key: string;
        keyCode: number;
        charCode: number;
        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
        metaKey: boolean;
        state: Object;
        platformModifierKey: boolean;
        pointerId: number;
        pointerType: string;
        event_: any;
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * The content of this object will not be initialized if no event object is
         * provided. If this is the case, init() needs to be invoked separately.
         * @param {Event=} opt_e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(opt_e: Event | undefined, opt_currentTarget: EventTarget | undefined);
        /**
         * Accepts a browser event object and creates a patched, cross browser event
         * object.
         * @param {Event} e Browser event object.
         * @param {EventTarget=} opt_currentTarget Current target for event.
         */
        init(e: any, opt_currentTarget: any): void;
        /**
         * Tests to see which button was pressed during the event. This is really only
         * useful in IE and Gecko browsers. And in IE, it's only useful for
         * mousedown/mouseup events, because click only fires for the left mouse button.
         *
         * Safari 2 only reports the left button being clicked, and uses the value '1'
         * instead of 0. Opera only reports a mousedown event for the middle button, and
         * no mouse events for the right button. Opera has default behavior for left and
         * middle click that can only be overridden via a configuration setting.
         *
         * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
         *
         * @param {goog.events.BrowserEvent.MouseButton} button The button
         *     to test for.
         * @return {boolean} True if button was pressed.
         */
        isButton(button: any): boolean;
        /**
         * Whether this has an "action"-producing mouse button.
         *
         * By definition, this includes left-click on windows/linux, and left-click
         * without the ctrl key on Macs.
         *
         * @return {boolean} The result.
         */
        isMouseActionButton(): boolean;
        /**
         * @override
         */
        stopPropagation(): void;
        /**
         * @override
         */
        preventDefault(): void;
        /**
         * @return {Event} The underlying browser event object.
         */
        getBrowserEvent(): any;
    }
}
declare namespace goog.events.BrowserEvent {
    /**
     * Normalized button constants for the mouse.
     * @enum {number}
     */
    enum MouseButton {
        LEFT = 0,
        MIDDLE = 1,
        RIGHT = 2,
    }
    /**
     * Normalized pointer type constants for pointer events.
     * @enum {string}
     */
    enum PointerType {
        MOUSE = "mouse",
        PEN = "pen",
        TOUCH = "touch",
    }
    /**
     * Static data for mapping mouse buttons.
     * @type {!Array<number>}
     * @deprecated Use {@code goog.events.BrowserEvent.IE_BUTTON_MAP} instead.
     */
    var IEButtonMap: number[];
    /**
     * Static data for mapping mouse buttons.
     * @const {!Array<number>}
     */
    var IE_BUTTON_MAP: number[];
    /**
     * Static data for mapping MSPointerEvent types to PointerEvent types.
     * @const {!Object<number, goog.events.BrowserEvent.PointerType>}
     */
    const IE_POINTER_TYPE_MAP: {
        2: PointerType;
        3: PointerType;
        4: PointerType;
    };
    /**
     * Extracts the pointer type from the given event.
     * @param {!Event} e
     * @return {string} The pointer type, e.g. 'mouse', 'pen', or 'touch'.
     * @private
     */
    function getPointerType_(e: any): any;
}
