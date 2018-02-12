/// <reference path="../useragent/userAgent.d.ts" />
declare namespace goog.events {
    /**
     * Key codes for common characters.
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non US keyboard layouts. See comments below.
     *
     * @enum {number}
     */
    enum KeyCodes {
        WIN_KEY_FF_LINUX = 0,
        MAC_ENTER = 3,
        BACKSPACE = 8,
        TAB = 9,
        NUM_CENTER = 12,
        ENTER = 13,
        SHIFT = 16,
        CTRL = 17,
        ALT = 18,
        PAUSE = 19,
        CAPS_LOCK = 20,
        ESC = 27,
        SPACE = 32,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        END = 35,
        HOME = 36,
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40,
        PLUS_SIGN = 43,
        PRINT_SCREEN = 44,
        INSERT = 45,
        DELETE = 46,
        ZERO = 48,
        ONE = 49,
        TWO = 50,
        THREE = 51,
        FOUR = 52,
        FIVE = 53,
        SIX = 54,
        SEVEN = 55,
        EIGHT = 56,
        NINE = 57,
        FF_SEMICOLON = 59,
        FF_EQUALS = 61,
        FF_DASH = 173,
        QUESTION_MARK = 63,
        AT_SIGN = 64,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        META = 91,
        WIN_KEY_RIGHT = 92,
        CONTEXT_MENU = 93,
        NUM_ZERO = 96,
        NUM_ONE = 97,
        NUM_TWO = 98,
        NUM_THREE = 99,
        NUM_FOUR = 100,
        NUM_FIVE = 101,
        NUM_SIX = 102,
        NUM_SEVEN = 103,
        NUM_EIGHT = 104,
        NUM_NINE = 105,
        NUM_MULTIPLY = 106,
        NUM_PLUS = 107,
        NUM_MINUS = 109,
        NUM_PERIOD = 110,
        NUM_DIVISION = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NUMLOCK = 144,
        SCROLL_LOCK = 145,
        FIRST_MEDIA_KEY = 166,
        LAST_MEDIA_KEY = 183,
        SEMICOLON = 186,
        DASH = 189,
        EQUALS = 187,
        COMMA = 188,
        PERIOD = 190,
        SLASH = 191,
        APOSTROPHE = 192,
        TILDE = 192,
        SINGLE_QUOTE = 222,
        OPEN_SQUARE_BRACKET = 219,
        BACKSLASH = 220,
        CLOSE_SQUARE_BRACKET = 221,
        WIN_KEY = 224,
        MAC_FF_META = 224,
        MAC_WK_CMD_LEFT = 91,
        MAC_WK_CMD_RIGHT = 93,
        WIN_IME = 229,
        VK_NONAME = 252,
        PHANTOM = 255,
    }
}
declare namespace goog.events.KeyCodes {
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
    function isTextModifyingKeyEvent(e: any): boolean;
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
    function firesKeyPressEvent(keyCode: any, opt_heldKeyCode: any, opt_shiftKey: any, opt_ctrlKey: any, opt_altKey: any, opt_metaKey: any): boolean;
    /**
     * Returns true if the key produces a character.
     * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
     *
     * @param {number} keyCode A key code.
     * @return {boolean} Whether it's a character key.
     */
    function isCharacterKey(keyCode: any): boolean;
    /**
     * Normalizes key codes from OS/Browser-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeKeyCode(keyCode: any): any;
    /**
     * Normalizes key codes from their Gecko-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeGeckoKeyCode(keyCode: any): any;
    /**
     * Normalizes key codes from their Mac WebKit-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeMacWebKitKeyCode(keyCode: any): any;
}
