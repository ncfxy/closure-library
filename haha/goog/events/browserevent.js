/// <reference path="./event.ts" />
/// <reference path="../debug/debug" />
/// <reference path="../events/BrowserFeature" />
/// <reference path="../events/Event" />
/// <reference path="../events/EventType" />
/// <reference path="../reflect/reflect" />
/// <reference path="../userAgent/useragent" />
// Copyright 2005 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview A patched, standardized event object for browser events.
 *
 * <pre>
 * The patched event object contains the following members:
 * - type           {string}    Event type, e.g. 'click'
 * - target         {Object}    The element that actually triggered the event
 * - currentTarget  {Object}    The element the listener is attached to
 * - relatedTarget  {Object}    For mouseover and mouseout, the previous object
 * - offsetX        {number}    X-coordinate relative to target
 * - offsetY        {number}    Y-coordinate relative to target
 * - clientX        {number}    X-coordinate relative to viewport
 * - clientY        {number}    Y-coordinate relative to viewport
 * - screenX        {number}    X-coordinate relative to the edge of the screen
 * - screenY        {number}    Y-coordinate relative to the edge of the screen
 * - button         {number}    Mouse button. Use isButton() to test.
 * - keyCode        {number}    Key-code
 * - ctrlKey        {boolean}   Was ctrl key depressed
 * - altKey         {boolean}   Was alt key depressed
 * - shiftKey       {boolean}   Was shift key depressed
 * - metaKey        {boolean}   Was meta key depressed
 * - pointerId      {number}    Pointer ID
 * - pointerType    {string}    Pointer type, e.g. 'mouse', 'pen', or 'touch'
 * - defaultPrevented {boolean} Whether the default action has been prevented
 * - state          {Object}    History state object
 *
 * NOTE: The keyCode member contains the raw browser keyCode. For normalized
 * key and character code use {@link goog.events.KeyHandler}.
 * </pre>
 *
 * @author arv@google.com (Erik Arvidsson)
 */
goog.provide('goog.events.BrowserEvent');
goog.provide('goog.events.BrowserEvent.MouseButton');
goog.provide('goog.events.BrowserEvent.PointerType');
goog.require('goog.debug');
goog.require('goog.events.BrowserFeature');
goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('goog.reflect');
goog.require('goog.userAgent');
var goog;
(function (goog) {
    var events;
    (function (events) {
        var BrowserEvent = /** @class */ (function (_super) {
            __extends(BrowserEvent, _super);
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
            function BrowserEvent(opt_e, opt_currentTarget) {
                var _this = _super.call(this, opt_e ? opt_e.type : '') || this;
                // goog.events.BrowserEvent.base(this, 'constructor', opt_e ? opt_e.type : '');
                /**
                 * Target that fired the event.
                 * @override
                 * @type {Node}
                 */
                _this.target = null;
                /**
                 * Node that had the listener attached.
                 * @override
                 * @type {Node|undefined}
                 */
                _this.currentTarget = null;
                /**
                 * For mouseover and mouseout events, the related object for the event.
                 * @type {Node}
                 */
                _this.relatedTarget = null;
                /**
                 * X-coordinate relative to target.
                 * @type {number}
                 */
                _this.offsetX = 0;
                /**
                 * Y-coordinate relative to target.
                 * @type {number}
                 */
                _this.offsetY = 0;
                /**
                 * X-coordinate relative to the window.
                 * @type {number}
                 */
                _this.clientX = 0;
                /**
                 * Y-coordinate relative to the window.
                 * @type {number}
                 */
                _this.clientY = 0;
                /**
                 * X-coordinate relative to the monitor.
                 * @type {number}
                 */
                _this.screenX = 0;
                /**
                 * Y-coordinate relative to the monitor.
                 * @type {number}
                 */
                _this.screenY = 0;
                /**
                 * Which mouse button was pressed.
                 * @type {number}
                 */
                _this.button = 0;
                /**
                 * Key of key press.
                 * @type {string}
                 */
                _this.key = '';
                /**
                 * Keycode of key press.
                 * @type {number}
                 */
                _this.keyCode = 0;
                /**
                 * Keycode of key press.
                 * @type {number}
                 */
                _this.charCode = 0;
                /**
                 * Whether control was pressed at time of event.
                 * @type {boolean}
                 */
                _this.ctrlKey = false;
                /**
                 * Whether alt was pressed at time of event.
                 * @type {boolean}
                 */
                _this.altKey = false;
                /**
                 * Whether shift was pressed at time of event.
                 * @type {boolean}
                 */
                _this.shiftKey = false;
                /**
                 * Whether the meta key was pressed at time of event.
                 * @type {boolean}
                 */
                _this.metaKey = false;
                /**
                 * History state object, only set for PopState events where it's a copy of the
                 * state object provided to pushState or replaceState.
                 * @type {Object}
                 */
                _this.state = null;
                /**
                 * Whether the default platform modifier key was pressed at time of event.
                 * (This is control for all platforms except Mac, where it's Meta.)
                 * @type {boolean}
                 */
                _this.platformModifierKey = false;
                /**
                 * @type {number}
                 */
                _this.pointerId = 0;
                /**
                 * @type {string}
                 */
                _this.pointerType = '';
                /**
                 * The browser event object.
                 * @private {Event}
                 */
                _this.event_ = null;
                if (opt_e) {
                    _this.init(opt_e, opt_currentTarget);
                }
                return _this;
            }
            /**
             * Accepts a browser event object and creates a patched, cross browser event
             * object.
             * @param {Event} e Browser event object.
             * @param {EventTarget=} opt_currentTarget Current target for event.
             */
            BrowserEvent.prototype.init = function (e, opt_currentTarget) {
                var type = this.type = e.type;
                /**
                 * On touch devices use the first "changed touch" as the relevant touch.
                 * @type {Touch}
                 */
                var relevantTouch = e.changedTouches ? e.changedTouches[0] : null;
                // TODO(nicksantos): Change this.target to type EventTarget.
                this.target = /** @type {Node} */ (e.target) || e.srcElement;
                // TODO(nicksantos): Change this.currentTarget to type EventTarget.
                this.currentTarget = /** @type {Node} */ (opt_currentTarget);
                var relatedTarget = (e.relatedTarget);
                if (relatedTarget) {
                    // There's a bug in FireFox where sometimes, relatedTarget will be a
                    // chrome element, and accessing any property of it will get a permission
                    // denied exception. See:
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=497780
                    if (goog.userAgent.GECKO) {
                        if (!goog.reflect.canAccessProperty(relatedTarget, 'nodeName')) {
                            relatedTarget = null;
                        }
                    }
                }
                else if (type == goog.events.EventType.MOUSEOVER) {
                    relatedTarget = e.fromElement;
                }
                else if (type == goog.events.EventType.MOUSEOUT) {
                    relatedTarget = e.toElement;
                }
                this.relatedTarget = relatedTarget;
                if (!goog.isNull(relevantTouch)) {
                    this.clientX = relevantTouch.clientX !== undefined ? relevantTouch.clientX :
                        relevantTouch.pageX;
                    this.clientY = relevantTouch.clientY !== undefined ? relevantTouch.clientY :
                        relevantTouch.pageY;
                    this.screenX = relevantTouch.screenX || 0;
                    this.screenY = relevantTouch.screenY || 0;
                }
                else {
                    // Webkit emits a lame warning whenever layerX/layerY is accessed.
                    // http://code.google.com/p/chromium/issues/detail?id=101733
                    this.offsetX = (goog.userAgent.WEBKIT || e.offsetX !== undefined) ?
                        e.offsetX :
                        e.layerX;
                    this.offsetY = (goog.userAgent.WEBKIT || e.offsetY !== undefined) ?
                        e.offsetY :
                        e.layerY;
                    this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
                    this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
                    this.screenX = e.screenX || 0;
                    this.screenY = e.screenY || 0;
                }
                this.button = e.button;
                this.keyCode = e.keyCode || 0;
                this.key = e.key || '';
                this.charCode = e.charCode || (type == 'keypress' ? e.keyCode : 0);
                this.ctrlKey = e.ctrlKey;
                this.altKey = e.altKey;
                this.shiftKey = e.shiftKey;
                this.metaKey = e.metaKey;
                this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
                this.pointerId = e.pointerId || 0;
                this.pointerType = goog.events.BrowserEvent.getPointerType_(e);
                this.state = e.state;
                this.event_ = e;
                if (e.defaultPrevented) {
                    this.preventDefault();
                }
            };
            ;
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
            BrowserEvent.prototype.isButton = function (button) {
                if (!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
                    if (this.type == 'click') {
                        return button == goog.events.BrowserEvent.MouseButton.LEFT;
                    }
                    else {
                        return !!(this.event_.button & goog.events.BrowserEvent.IE_BUTTON_MAP[button]);
                    }
                }
                else {
                    return this.event_.button == button;
                }
            };
            ;
            /**
             * Whether this has an "action"-producing mouse button.
             *
             * By definition, this includes left-click on windows/linux, and left-click
             * without the ctrl key on Macs.
             *
             * @return {boolean} The result.
             */
            BrowserEvent.prototype.isMouseActionButton = function () {
                // Webkit does not ctrl+click to be a right-click, so we
                // normalize it to behave like Gecko and Opera.
                return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) &&
                    !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey);
            };
            ;
            /**
             * @override
             */
            BrowserEvent.prototype.stopPropagation = function () {
                _super.prototype.stopPropagation.call(this);
                // goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
                if (this.event_.stopPropagation) {
                    this.event_.stopPropagation();
                }
                else {
                    this.event_.cancelBubble = true;
                }
            };
            ;
            /**
             * @override
             */
            BrowserEvent.prototype.preventDefault = function () {
                _super.prototype.preventDefault.call(this);
                // goog.events.BrowserEvent.superClass_.preventDefault.call(this);
                var be = this.event_;
                if (!be.preventDefault) {
                    be.returnValue = false;
                    if (goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
                        try {
                            // Most keys can be prevented using returnValue. Some special keys
                            // require setting the keyCode to -1 as well:
                            //
                            // In IE7:
                            // F3, F5, F10, F11, Ctrl+P, Crtl+O, Ctrl+F (these are taken from IE6)
                            //
                            // In IE8:
                            // Ctrl+P, Crtl+O, Ctrl+F (F1-F12 cannot be stopped through the event)
                            //
                            // We therefore do this for all function keys as well as when Ctrl key
                            // is pressed.
                            var VK_F1 = 112;
                            var VK_F12 = 123;
                            if (be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
                                be.keyCode = -1;
                            }
                        }
                        catch (ex) {
                            // IE throws an 'access denied' exception when trying to change
                            // keyCode in some situations (e.g. srcElement is input[type=file],
                            // or srcElement is an anchor tag rewritten by parent's innerHTML).
                            // Do nothing in this case.
                        }
                    }
                }
                else {
                    be.preventDefault();
                }
            };
            ;
            /**
             * @return {Event} The underlying browser event object.
             */
            BrowserEvent.prototype.getBrowserEvent = function () {
                return this.event_;
            };
            ;
            return BrowserEvent;
        }(goog.events.Event));
        events.BrowserEvent = BrowserEvent;
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
(function (goog) {
    var events;
    (function (events) {
        var BrowserEvent;
        (function (BrowserEvent) {
            /**
             * Normalized button constants for the mouse.
             * @enum {number}
             */
            var MouseButton;
            (function (MouseButton) {
                MouseButton[MouseButton["LEFT"] = 0] = "LEFT";
                MouseButton[MouseButton["MIDDLE"] = 1] = "MIDDLE";
                MouseButton[MouseButton["RIGHT"] = 2] = "RIGHT";
            })(MouseButton = BrowserEvent.MouseButton || (BrowserEvent.MouseButton = {}));
            ;
            /**
             * Normalized pointer type constants for pointer events.
             * @enum {string}
             */
            var PointerType;
            (function (PointerType) {
                PointerType["MOUSE"] = "mouse";
                PointerType["PEN"] = "pen";
                PointerType["TOUCH"] = "touch";
            })(PointerType = BrowserEvent.PointerType || (BrowserEvent.PointerType = {}));
            ;
            /**
             * Static data for mapping mouse buttons.
             * @type {!Array<number>}
             * @deprecated Use {@code goog.events.BrowserEvent.IE_BUTTON_MAP} instead.
             */
            BrowserEvent.IEButtonMap = goog.debug.freeze([
                1,
                4,
                2 // RIGHT
            ]);
            /**
             * Static data for mapping mouse buttons.
             * @const {!Array<number>}
             */
            BrowserEvent.IE_BUTTON_MAP = goog.events.BrowserEvent.IEButtonMap;
            /**
             * Static data for mapping MSPointerEvent types to PointerEvent types.
             * @const {!Object<number, goog.events.BrowserEvent.PointerType>}
             */
            BrowserEvent.IE_POINTER_TYPE_MAP = goog.debug.freeze({
                2: goog.events.BrowserEvent.PointerType.TOUCH,
                3: goog.events.BrowserEvent.PointerType.PEN,
                4: goog.events.BrowserEvent.PointerType.MOUSE
            });
            /**
             * Extracts the pointer type from the given event.
             * @param {!Event} e
             * @return {string} The pointer type, e.g. 'mouse', 'pen', or 'touch'.
             * @private
             */
            function getPointerType_(e) {
                if (goog.isString(e.pointerType)) {
                    return e.pointerType;
                }
                // IE10 uses integer codes for pointer type.
                // https://msdn.microsoft.com/en-us/library/hh772359(v=vs.85).aspx
                return goog.events.BrowserEvent.IE_POINTER_TYPE_MAP[e.pointerType] || '';
            }
            BrowserEvent.getPointerType_ = getPointerType_;
            ;
        })(BrowserEvent = events.BrowserEvent || (events.BrowserEvent = {}));
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
