/// <reference path="../useragent/useragent.ts" />
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
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
/**
 * @fileoverview Constant declarations for common key codes.
 *
 * @author eae@google.com (Emil A Eklund)
 * @see ../demos/keyhandler.html
 */
goog.provide('goog.events.KeyCodes');
goog.require('goog.userAgent');
goog.forwardDeclare('goog.events.BrowserEvent');
var goog;
(function (goog) {
    var events;
    (function (events) {
        /**
         * Key codes for common characters.
         *
         * This list is not localized and therefore some of the key codes are not
         * correct for non US keyboard layouts. See comments below.
         *
         * @enum {number}
         */
        var KeyCodes;
        (function (KeyCodes) {
            KeyCodes[KeyCodes["WIN_KEY_FF_LINUX"] = 0] = "WIN_KEY_FF_LINUX";
            KeyCodes[KeyCodes["MAC_ENTER"] = 3] = "MAC_ENTER";
            KeyCodes[KeyCodes["BACKSPACE"] = 8] = "BACKSPACE";
            KeyCodes[KeyCodes["TAB"] = 9] = "TAB";
            KeyCodes[KeyCodes["NUM_CENTER"] = 12] = "NUM_CENTER";
            KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
            KeyCodes[KeyCodes["SHIFT"] = 16] = "SHIFT";
            KeyCodes[KeyCodes["CTRL"] = 17] = "CTRL";
            KeyCodes[KeyCodes["ALT"] = 18] = "ALT";
            KeyCodes[KeyCodes["PAUSE"] = 19] = "PAUSE";
            KeyCodes[KeyCodes["CAPS_LOCK"] = 20] = "CAPS_LOCK";
            KeyCodes[KeyCodes["ESC"] = 27] = "ESC";
            KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
            KeyCodes[KeyCodes["PAGE_UP"] = 33] = "PAGE_UP";
            KeyCodes[KeyCodes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            KeyCodes[KeyCodes["END"] = 35] = "END";
            KeyCodes[KeyCodes["HOME"] = 36] = "HOME";
            KeyCodes[KeyCodes["LEFT"] = 37] = "LEFT";
            KeyCodes[KeyCodes["UP"] = 38] = "UP";
            KeyCodes[KeyCodes["RIGHT"] = 39] = "RIGHT";
            KeyCodes[KeyCodes["DOWN"] = 40] = "DOWN";
            KeyCodes[KeyCodes["PLUS_SIGN"] = 43] = "PLUS_SIGN";
            KeyCodes[KeyCodes["PRINT_SCREEN"] = 44] = "PRINT_SCREEN";
            KeyCodes[KeyCodes["INSERT"] = 45] = "INSERT";
            KeyCodes[KeyCodes["DELETE"] = 46] = "DELETE";
            KeyCodes[KeyCodes["ZERO"] = 48] = "ZERO";
            KeyCodes[KeyCodes["ONE"] = 49] = "ONE";
            KeyCodes[KeyCodes["TWO"] = 50] = "TWO";
            KeyCodes[KeyCodes["THREE"] = 51] = "THREE";
            KeyCodes[KeyCodes["FOUR"] = 52] = "FOUR";
            KeyCodes[KeyCodes["FIVE"] = 53] = "FIVE";
            KeyCodes[KeyCodes["SIX"] = 54] = "SIX";
            KeyCodes[KeyCodes["SEVEN"] = 55] = "SEVEN";
            KeyCodes[KeyCodes["EIGHT"] = 56] = "EIGHT";
            KeyCodes[KeyCodes["NINE"] = 57] = "NINE";
            KeyCodes[KeyCodes["FF_SEMICOLON"] = 59] = "FF_SEMICOLON";
            KeyCodes[KeyCodes["FF_EQUALS"] = 61] = "FF_EQUALS";
            KeyCodes[KeyCodes["FF_DASH"] = 173] = "FF_DASH";
            KeyCodes[KeyCodes["QUESTION_MARK"] = 63] = "QUESTION_MARK";
            KeyCodes[KeyCodes["AT_SIGN"] = 64] = "AT_SIGN";
            KeyCodes[KeyCodes["A"] = 65] = "A";
            KeyCodes[KeyCodes["B"] = 66] = "B";
            KeyCodes[KeyCodes["C"] = 67] = "C";
            KeyCodes[KeyCodes["D"] = 68] = "D";
            KeyCodes[KeyCodes["E"] = 69] = "E";
            KeyCodes[KeyCodes["F"] = 70] = "F";
            KeyCodes[KeyCodes["G"] = 71] = "G";
            KeyCodes[KeyCodes["H"] = 72] = "H";
            KeyCodes[KeyCodes["I"] = 73] = "I";
            KeyCodes[KeyCodes["J"] = 74] = "J";
            KeyCodes[KeyCodes["K"] = 75] = "K";
            KeyCodes[KeyCodes["L"] = 76] = "L";
            KeyCodes[KeyCodes["M"] = 77] = "M";
            KeyCodes[KeyCodes["N"] = 78] = "N";
            KeyCodes[KeyCodes["O"] = 79] = "O";
            KeyCodes[KeyCodes["P"] = 80] = "P";
            KeyCodes[KeyCodes["Q"] = 81] = "Q";
            KeyCodes[KeyCodes["R"] = 82] = "R";
            KeyCodes[KeyCodes["S"] = 83] = "S";
            KeyCodes[KeyCodes["T"] = 84] = "T";
            KeyCodes[KeyCodes["U"] = 85] = "U";
            KeyCodes[KeyCodes["V"] = 86] = "V";
            KeyCodes[KeyCodes["W"] = 87] = "W";
            KeyCodes[KeyCodes["X"] = 88] = "X";
            KeyCodes[KeyCodes["Y"] = 89] = "Y";
            KeyCodes[KeyCodes["Z"] = 90] = "Z";
            KeyCodes[KeyCodes["META"] = 91] = "META";
            KeyCodes[KeyCodes["WIN_KEY_RIGHT"] = 92] = "WIN_KEY_RIGHT";
            KeyCodes[KeyCodes["CONTEXT_MENU"] = 93] = "CONTEXT_MENU";
            KeyCodes[KeyCodes["NUM_ZERO"] = 96] = "NUM_ZERO";
            KeyCodes[KeyCodes["NUM_ONE"] = 97] = "NUM_ONE";
            KeyCodes[KeyCodes["NUM_TWO"] = 98] = "NUM_TWO";
            KeyCodes[KeyCodes["NUM_THREE"] = 99] = "NUM_THREE";
            KeyCodes[KeyCodes["NUM_FOUR"] = 100] = "NUM_FOUR";
            KeyCodes[KeyCodes["NUM_FIVE"] = 101] = "NUM_FIVE";
            KeyCodes[KeyCodes["NUM_SIX"] = 102] = "NUM_SIX";
            KeyCodes[KeyCodes["NUM_SEVEN"] = 103] = "NUM_SEVEN";
            KeyCodes[KeyCodes["NUM_EIGHT"] = 104] = "NUM_EIGHT";
            KeyCodes[KeyCodes["NUM_NINE"] = 105] = "NUM_NINE";
            KeyCodes[KeyCodes["NUM_MULTIPLY"] = 106] = "NUM_MULTIPLY";
            KeyCodes[KeyCodes["NUM_PLUS"] = 107] = "NUM_PLUS";
            KeyCodes[KeyCodes["NUM_MINUS"] = 109] = "NUM_MINUS";
            KeyCodes[KeyCodes["NUM_PERIOD"] = 110] = "NUM_PERIOD";
            KeyCodes[KeyCodes["NUM_DIVISION"] = 111] = "NUM_DIVISION";
            KeyCodes[KeyCodes["F1"] = 112] = "F1";
            KeyCodes[KeyCodes["F2"] = 113] = "F2";
            KeyCodes[KeyCodes["F3"] = 114] = "F3";
            KeyCodes[KeyCodes["F4"] = 115] = "F4";
            KeyCodes[KeyCodes["F5"] = 116] = "F5";
            KeyCodes[KeyCodes["F6"] = 117] = "F6";
            KeyCodes[KeyCodes["F7"] = 118] = "F7";
            KeyCodes[KeyCodes["F8"] = 119] = "F8";
            KeyCodes[KeyCodes["F9"] = 120] = "F9";
            KeyCodes[KeyCodes["F10"] = 121] = "F10";
            KeyCodes[KeyCodes["F11"] = 122] = "F11";
            KeyCodes[KeyCodes["F12"] = 123] = "F12";
            KeyCodes[KeyCodes["NUMLOCK"] = 144] = "NUMLOCK";
            KeyCodes[KeyCodes["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
            // OS-specific media keys like volume controls and browser controls.
            KeyCodes[KeyCodes["FIRST_MEDIA_KEY"] = 166] = "FIRST_MEDIA_KEY";
            KeyCodes[KeyCodes["LAST_MEDIA_KEY"] = 183] = "LAST_MEDIA_KEY";
            KeyCodes[KeyCodes["SEMICOLON"] = 186] = "SEMICOLON";
            KeyCodes[KeyCodes["DASH"] = 189] = "DASH";
            KeyCodes[KeyCodes["EQUALS"] = 187] = "EQUALS";
            KeyCodes[KeyCodes["COMMA"] = 188] = "COMMA";
            KeyCodes[KeyCodes["PERIOD"] = 190] = "PERIOD";
            KeyCodes[KeyCodes["SLASH"] = 191] = "SLASH";
            KeyCodes[KeyCodes["APOSTROPHE"] = 192] = "APOSTROPHE";
            KeyCodes[KeyCodes["TILDE"] = 192] = "TILDE";
            KeyCodes[KeyCodes["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
            KeyCodes[KeyCodes["OPEN_SQUARE_BRACKET"] = 219] = "OPEN_SQUARE_BRACKET";
            KeyCodes[KeyCodes["BACKSLASH"] = 220] = "BACKSLASH";
            KeyCodes[KeyCodes["CLOSE_SQUARE_BRACKET"] = 221] = "CLOSE_SQUARE_BRACKET";
            KeyCodes[KeyCodes["WIN_KEY"] = 224] = "WIN_KEY";
            KeyCodes[KeyCodes["MAC_FF_META"] = 224] = "MAC_FF_META";
            KeyCodes[KeyCodes["MAC_WK_CMD_LEFT"] = 91] = "MAC_WK_CMD_LEFT";
            KeyCodes[KeyCodes["MAC_WK_CMD_RIGHT"] = 93] = "MAC_WK_CMD_RIGHT";
            KeyCodes[KeyCodes["WIN_IME"] = 229] = "WIN_IME";
            // "Reserved for future use". Some programs (e.g. the SlingPlayer 2.4 ActiveX
            // control) fire this as a hacky way to disable screensavers.
            KeyCodes[KeyCodes["VK_NONAME"] = 252] = "VK_NONAME";
            // We've seen users whose machines fire this keycode at regular one
            // second intervals. The common thread among these users is that
            // they're all using Dell Inspiron laptops, so we suspect that this
            // indicates a hardware/bios problem.
            // http://en.community.dell.com/support-forums/laptop/f/3518/p/19285957/19523128.aspx
            KeyCodes[KeyCodes["PHANTOM"] = 255] = "PHANTOM";
        })(KeyCodes = events.KeyCodes || (events.KeyCodes = {}));
        ;
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
(function (goog) {
    var events;
    (function (events) {
        var KeyCodes;
        (function (KeyCodes) {
            /**
             * Returns false if the event does not contain a text modifying key.
             *
             * When it returns true, the event might be text modifying. It is infeasible to
             * say for sure because of the many different keyboard layouts, so this method
             * errs on the side of assuming a key event is text-modifiable if we cannot be
             * certain it is not. As an example, it will return true for ctrl+a, though in
             * many standard keyboard layouts that key combination would mean "select all",
             * and not actually modify the text.
             *
             * @param {goog.events.BrowserEvent} e A key event.
             * @return {boolean} Whether it's a text modifying key.
             */
            function isTextModifyingKeyEvent(e) {
                if (e.altKey && !e.ctrlKey || e.metaKey ||
                    // Function keys don't generate text
                    e.keyCode >= goog.events.KeyCodes.F1 &&
                        e.keyCode <= goog.events.KeyCodes.F12) {
                    return false;
                }
                // The following keys are quite harmless, even in combination with
                // CTRL, ALT or SHIFT.
                switch (e.keyCode) {
                    case goog.events.KeyCodes.ALT:
                    case goog.events.KeyCodes.CAPS_LOCK:
                    case goog.events.KeyCodes.CONTEXT_MENU:
                    case goog.events.KeyCodes.CTRL:
                    case goog.events.KeyCodes.DOWN:
                    case goog.events.KeyCodes.END:
                    case goog.events.KeyCodes.ESC:
                    case goog.events.KeyCodes.HOME:
                    case goog.events.KeyCodes.INSERT:
                    case goog.events.KeyCodes.LEFT:
                    case goog.events.KeyCodes.MAC_FF_META:
                    case goog.events.KeyCodes.META:
                    case goog.events.KeyCodes.NUMLOCK:
                    case goog.events.KeyCodes.NUM_CENTER:
                    case goog.events.KeyCodes.PAGE_DOWN:
                    case goog.events.KeyCodes.PAGE_UP:
                    case goog.events.KeyCodes.PAUSE:
                    case goog.events.KeyCodes.PHANTOM:
                    case goog.events.KeyCodes.PRINT_SCREEN:
                    case goog.events.KeyCodes.RIGHT:
                    case goog.events.KeyCodes.SCROLL_LOCK:
                    case goog.events.KeyCodes.SHIFT:
                    case goog.events.KeyCodes.UP:
                    case goog.events.KeyCodes.VK_NONAME:
                    case goog.events.KeyCodes.WIN_KEY:
                    case goog.events.KeyCodes.WIN_KEY_RIGHT:
                        return false;
                    case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
                        return !goog.userAgent.GECKO;
                    default:
                        return e.keyCode < goog.events.KeyCodes.FIRST_MEDIA_KEY ||
                            e.keyCode > goog.events.KeyCodes.LAST_MEDIA_KEY;
                }
            }
            KeyCodes.isTextModifyingKeyEvent = isTextModifyingKeyEvent;
            ;
            /**
             * Returns true if the key fires a keypress event in the current browser.
             *
             * Accoridng to MSDN [1] IE only fires keypress events for the following keys:
             * - Letters: A - Z (uppercase and lowercase)
             * - Numerals: 0 - 9
             * - Symbols: ! @ # $ % ^ & * ( ) _ - + = < [ ] { } , . / ? \ | ' ` " ~
             * - System: ESC, SPACEBAR, ENTER
             *
             * That's not entirely correct though, for instance there's no distinction
             * between upper and lower case letters.
             *
             * [1] http://msdn2.microsoft.com/en-us/library/ms536939(VS.85).aspx)
             *
             * Safari is similar to IE, but does not fire keypress for ESC.
             *
             * Additionally, IE6 does not fire keydown or keypress events for letters when
             * the control or alt keys are held down and the shift key is not. IE7 does
             * fire keydown in these cases, though, but not keypress.
             *
             * @param {number} keyCode A key code.
             * @param {number=} opt_heldKeyCode Key code of a currently-held key.
             * @param {boolean=} opt_shiftKey Whether the shift key is held down.
             * @param {boolean=} opt_ctrlKey Whether the control key is held down.
             * @param {boolean=} opt_altKey Whether the alt key is held down.
             * @param {boolean=} opt_metaKey Whether the meta key is held down.
             * @return {boolean} Whether it's a key that fires a keypress event.
             */
            function firesKeyPressEvent(keyCode, opt_heldKeyCode, opt_shiftKey, opt_ctrlKey, opt_altKey, opt_metaKey) {
                if (!goog.userAgent.IE && !goog.userAgent.EDGE &&
                    !(goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher('525'))) {
                    return true;
                }
                if (goog.userAgent.MAC && opt_altKey) {
                    return goog.events.KeyCodes.isCharacterKey(keyCode);
                }
                // Alt but not AltGr which is represented as Alt+Ctrl.
                if (opt_altKey && !opt_ctrlKey) {
                    return false;
                }
                // Saves Ctrl or Alt + key for IE and WebKit 525+, which won't fire keypress.
                // Non-IE browsers and WebKit prior to 525 won't get this far so no need to
                // check the user agent.
                if (goog.isNumber(opt_heldKeyCode)) {
                    opt_heldKeyCode = goog.events.KeyCodes.normalizeKeyCode(opt_heldKeyCode);
                }
                var heldKeyIsModifier = opt_heldKeyCode == goog.events.KeyCodes.CTRL ||
                    opt_heldKeyCode == goog.events.KeyCodes.ALT ||
                    goog.userAgent.MAC && opt_heldKeyCode == goog.events.KeyCodes.META;
                // The Shift key blocks keypresses on Mac iff accompanied by another modifier.
                var modifiedShiftKey = opt_heldKeyCode == goog.events.KeyCodes.SHIFT &&
                    (opt_ctrlKey || opt_metaKey);
                if ((!opt_shiftKey || goog.userAgent.MAC) && heldKeyIsModifier ||
                    goog.userAgent.MAC && modifiedShiftKey) {
                    return false;
                }
                // Some keys with Ctrl/Shift do not issue keypress in WEBKIT.
                if ((goog.userAgent.WEBKIT || goog.userAgent.EDGE) && opt_ctrlKey &&
                    opt_shiftKey) {
                    switch (keyCode) {
                        case goog.events.KeyCodes.BACKSLASH:
                        case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
                        case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
                        case goog.events.KeyCodes.TILDE:
                        case goog.events.KeyCodes.SEMICOLON:
                        case goog.events.KeyCodes.DASH:
                        case goog.events.KeyCodes.EQUALS:
                        case goog.events.KeyCodes.COMMA:
                        case goog.events.KeyCodes.PERIOD:
                        case goog.events.KeyCodes.SLASH:
                        case goog.events.KeyCodes.APOSTROPHE:
                        case goog.events.KeyCodes.SINGLE_QUOTE:
                            return false;
                    }
                }
                // When Ctrl+<somekey> is held in IE, it only fires a keypress once, but it
                // continues to fire keydown events as the event repeats.
                if (goog.userAgent.IE && opt_ctrlKey && opt_heldKeyCode == keyCode) {
                    return false;
                }
                switch (keyCode) {
                    case goog.events.KeyCodes.ENTER:
                        return true;
                    case goog.events.KeyCodes.ESC:
                        return !(goog.userAgent.WEBKIT || goog.userAgent.EDGE);
                }
                return goog.events.KeyCodes.isCharacterKey(keyCode);
            }
            KeyCodes.firesKeyPressEvent = firesKeyPressEvent;
            ;
            /**
             * Returns true if the key produces a character.
             * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
             *
             * @param {number} keyCode A key code.
             * @return {boolean} Whether it's a character key.
             */
            function isCharacterKey(keyCode) {
                if (keyCode >= goog.events.KeyCodes.ZERO &&
                    keyCode <= goog.events.KeyCodes.NINE) {
                    return true;
                }
                if (keyCode >= goog.events.KeyCodes.NUM_ZERO &&
                    keyCode <= goog.events.KeyCodes.NUM_MULTIPLY) {
                    return true;
                }
                if (keyCode >= goog.events.KeyCodes.A && keyCode <= goog.events.KeyCodes.Z) {
                    return true;
                }
                // Safari sends zero key code for non-latin characters.
                if ((goog.userAgent.WEBKIT || goog.userAgent.EDGE) && keyCode == 0) {
                    return true;
                }
                switch (keyCode) {
                    case goog.events.KeyCodes.SPACE:
                    case goog.events.KeyCodes.PLUS_SIGN:
                    case goog.events.KeyCodes.QUESTION_MARK:
                    case goog.events.KeyCodes.AT_SIGN:
                    case goog.events.KeyCodes.NUM_PLUS:
                    case goog.events.KeyCodes.NUM_MINUS:
                    case goog.events.KeyCodes.NUM_PERIOD:
                    case goog.events.KeyCodes.NUM_DIVISION:
                    case goog.events.KeyCodes.SEMICOLON:
                    case goog.events.KeyCodes.FF_SEMICOLON:
                    case goog.events.KeyCodes.DASH:
                    case goog.events.KeyCodes.EQUALS:
                    case goog.events.KeyCodes.FF_EQUALS:
                    case goog.events.KeyCodes.COMMA:
                    case goog.events.KeyCodes.PERIOD:
                    case goog.events.KeyCodes.SLASH:
                    case goog.events.KeyCodes.APOSTROPHE:
                    case goog.events.KeyCodes.SINGLE_QUOTE:
                    case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
                    case goog.events.KeyCodes.BACKSLASH:
                    case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
                        return true;
                    default:
                        return false;
                }
            }
            KeyCodes.isCharacterKey = isCharacterKey;
            ;
            /**
             * Normalizes key codes from OS/Browser-specific value to the general one.
             * @param {number} keyCode The native key code.
             * @return {number} The normalized key code.
             */
            function normalizeKeyCode(keyCode) {
                if (goog.userAgent.GECKO) {
                    return goog.events.KeyCodes.normalizeGeckoKeyCode(keyCode);
                }
                else if (goog.userAgent.MAC && goog.userAgent.WEBKIT) {
                    return goog.events.KeyCodes.normalizeMacWebKitKeyCode(keyCode);
                }
                else {
                    return keyCode;
                }
            }
            KeyCodes.normalizeKeyCode = normalizeKeyCode;
            ;
            /**
             * Normalizes key codes from their Gecko-specific value to the general one.
             * @param {number} keyCode The native key code.
             * @return {number} The normalized key code.
             */
            function normalizeGeckoKeyCode(keyCode) {
                switch (keyCode) {
                    case goog.events.KeyCodes.FF_EQUALS:
                        return goog.events.KeyCodes.EQUALS;
                    case goog.events.KeyCodes.FF_SEMICOLON:
                        return goog.events.KeyCodes.SEMICOLON;
                    case goog.events.KeyCodes.FF_DASH:
                        return goog.events.KeyCodes.DASH;
                    case goog.events.KeyCodes.MAC_FF_META:
                        return goog.events.KeyCodes.META;
                    case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
                        return goog.events.KeyCodes.WIN_KEY;
                    default:
                        return keyCode;
                }
            }
            KeyCodes.normalizeGeckoKeyCode = normalizeGeckoKeyCode;
            ;
            /**
             * Normalizes key codes from their Mac WebKit-specific value to the general one.
             * @param {number} keyCode The native key code.
             * @return {number} The normalized key code.
             */
            function normalizeMacWebKitKeyCode(keyCode) {
                switch (keyCode) {
                    case goog.events.KeyCodes.MAC_WK_CMD_RIGHT:// 93
                        return goog.events.KeyCodes.META; // 91
                    default:
                        return keyCode;
                }
            }
            KeyCodes.normalizeMacWebKitKeyCode = normalizeMacWebKitKeyCode;
            ;
        })(KeyCodes = events.KeyCodes || (events.KeyCodes = {}));
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
