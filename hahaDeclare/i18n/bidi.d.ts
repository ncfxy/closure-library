declare namespace goog.i18n.bidi {
    /**
     * @define {boolean} FORCE_RTL forces the {@link goog.i18n.bidi.IS_RTL} constant
     * to say that the current locale is a RTL locale.  This should only be used
     * if you want to override the default behavior for deciding whether the
     * current locale is RTL or not.
     *
     * {@see goog.i18n.bidi.IS_RTL}
     */
    var FORCE_RTL: boolean;
    /**
     * Constant that defines whether or not the current locale is a RTL locale.
     * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
     * to check that {@link goog.LOCALE} is one of a few major RTL locales.
     *
     * <p>This is designed to be a maximally efficient compile-time constant. For
     * example, for the default goog.LOCALE, compiling
     * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
     * is this design consideration that limits the implementation to only
     * supporting a few major RTL locales, as opposed to the broader repertoire of
     * something like goog.i18n.bidi.isRtlLanguage.
     *
     * <p>Since this constant refers to the directionality of the locale, it is up
     * to the caller to determine if this constant should also be used for the
     * direction of the UI.
     *
     * {@see goog.LOCALE}
     *
     * @type {boolean}
     *
     * TODO(user): write a test that checks that this is a compile-time constant.
     */
    var IS_RTL: boolean;
    /**
     * Unicode formatting characters and directionality string constants.
     * @enum {string}
     */
    enum Format {
        /** Unicode "Left-To-Right Embedding" (LRE) character. */
        LRE = "\u202A",
        /** Unicode "Right-To-Left Embedding" (RLE) character. */
        RLE = "\u202B",
        /** Unicode "Pop Directional Formatting" (PDF) character. */
        PDF = "\u202C",
        /** Unicode "Left-To-Right Mark" (LRM) character. */
        LRM = "\u200E",
        /** Unicode "Right-To-Left Mark" (RLM) character. */
        RLM = "\u200F",
    }
    /**
     * Directionality enum.
     * @enum {number}
     */
    enum Dir {
        /**
         * Left-to-right.
         */
        LTR = 1,
        /**
         * Right-to-left.
         */
        RTL = -1,
        /**
         * Neither left-to-right nor right-to-left.
         */
        NEUTRAL = 0,
    }
    /**
     * 'right' string constant.
     * @type {string}
     */
    var RIGHT: string;
    /**
     * 'left' string constant.
     * @type {string}
     */
    var LEFT: string;
    /**
     * 'left' if locale is RTL, 'right' if not.
     * @type {string}
     */
    var I18N_RIGHT: string;
    /**
     * 'right' if locale is RTL, 'left' if not.
     * @type {string}
     */
    var I18N_LEFT: string;
    /**
     * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
     * constant. Useful for interaction with different standards of directionality
     * representation.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
     *     in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
     *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
     *     order to preserve legacy behavior.
     * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
     *     given directionality. If given null, returns null (i.e. unknown).
     */
    function toDir(givenDir: goog.i18n.bidi.Dir | number | boolean | null, opt_noNeutral?: boolean | undefined): goog.i18n.bidi.Dir | null;
    /**
     * A practical pattern to identify strong LTR characters. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified for
     * performance and small code size.
     * @type {string}
     * @private
     */
    var ltrChars_: string;
    /**
     * A practical pattern to identify strong RTL character. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified
     * for performance and small code size.
     * @type {string}
     * @private
     */
    var rtlChars_: string;
    /**
     * Simplified regular expression for an HTML tag (opening or closing) or an HTML
     * escape. We might want to skip over such expressions when estimating the text
     * directionality.
     * @type {RegExp}
     * @private
     */
    var htmlSkipReg_: RegExp;
    /**
     * Returns the input text with spaces instead of HTML tags or HTML escapes, if
     * opt_isStripNeeded is true. Else returns the input as is.
     * Useful for text directionality estimation.
     * Note: the function should not be used in other contexts; it is not 100%
     * correct, but rather a good-enough implementation for directionality
     * estimation purposes.
     * @param {string} str The given string.
     * @param {boolean=} opt_isStripNeeded Whether to perform the stripping.
     *     Default: false (to retain consistency with calling functions).
     * @return {string} The given string cleaned of HTML tags / escapes.
     * @private
     */
    function stripHtmlIfNeeded_(str: string, opt_isStripNeeded?: boolean | undefined): string;
    /**
     * Regular expression to check for RTL characters.
     * @type {RegExp}
     * @private
     */
    var rtlCharReg_: RegExp;
    /**
     * Regular expression to check for LTR characters.
     * @type {RegExp}
     * @private
     */
    var ltrCharReg_: RegExp;
    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains RTL characters.
     */
    function hasAnyRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the string contains RTL characters.
     * @deprecated Use hasAnyRtl.
     */
    var hasRtlChar: typeof hasAnyRtl;
    /**
     * Test whether the given string has any LTR characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains LTR characters.
     */
    function hasAnyLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Regular expression pattern to check if the first character in the string
     * is LTR.
     * @type {RegExp}
     * @private
     */
    var ltrRe_: RegExp;
    /**
     * Regular expression pattern to check if the first character in the string
     * is RTL.
     * @type {RegExp}
     * @private
     */
    var rtlRe_: RegExp;
    /**
     * Check if the first character in the string is RTL or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an RTL char.
     */
    function isRtlChar(str: string): boolean;
    /**
     * Check if the first character in the string is LTR or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an LTR char.
     */
    function isLtrChar(str: string): boolean;
    /**
     * Check if the first character in the string is neutral or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is a neutral char.
     */
    function isNeutralChar(str: string): boolean;
    /**
     * Regular expressions to check if a piece of text is of LTR directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    var ltrDirCheckRe_: RegExp;
    /**
     * Regular expressions to check if a piece of text is of RTL directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    var rtlDirCheckRe_: RegExp;
    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithRtl.
     */
    var isRtlText: typeof startsWithRtl;
    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithLtr.
     */
    var isLtrText: typeof startsWithLtr;
    /**
     * Regular expression to check if a string looks like something that must
     * always be LTR even in RTL text, e.g. a URL. When estimating the
     * directionality of text containing these, we treat these as weakly LTR,
     * like numbers.
     * @type {RegExp}
     * @private
     */
    var isRequiredLtrRe_: RegExp;
    /**
     * Check whether the input string either contains no strongly directional
     * characters or looks like a url.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether neutral directionality is detected.
     */
    function isNeutralText(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is LTR.
     * @type {RegExp}
     * @private
     */
    var ltrExitDirCheckRe_: RegExp;
    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is RTL.
     * @type {RegExp}
     * @private
     */
    var rtlExitDirCheckRe_: RegExp;
    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     */
    function endsWithLtr(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     * @deprecated Use endsWithLtr.
     */
    var isLtrExitText: typeof endsWithLtr;
    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     */
    function endsWithRtl(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     * @deprecated Use endsWithRtl.
     */
    var isRtlExitText: typeof endsWithRtl;
    /**
     * A regular expression for matching right-to-left language codes.
     * See {@link #isRtlLanguage} for the design.
     * @type {RegExp}
     * @private
     */
    var rtlLocalesRe_: RegExp;
    /**
     * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
     * - a language code explicitly specifying one of the right-to-left scripts,
     *   e.g. "az-Arab", or<p>
     * - a language code specifying one of the languages normally written in a
     *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
     *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
     * The list of right-to-left scripts appears in the 100-199 range in
     * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
     * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
     * Tifinagh, which also have significant modern usage. The rest (Syriac,
     * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
     * and are not recognized to save on code size.
     * The languages usually written in a right-to-left script are taken as those
     * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
     * http://www.iana.org/assignments/language-subtag-registry,
     * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
     * Other subtags of the language code, e.g. regions like EG (Egypt), are
     * ignored.
     * @param {string} lang BCP 47 (a.k.a III) language code.
     * @return {boolean} Whether the language code is an RTL language.
     */
    function isRtlLanguage(lang: string): boolean;
    /**
     * Regular expression for bracket guard replacement in text.
     * @type {RegExp}
     * @private
     */
    var bracketGuardTextRe_: RegExp;
    /**
     * Apply bracket guard using LRM and RLM. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * This function works for plain text, not for HTML. In HTML, the opening
     * bracket might be in a different context than the closing bracket (such as
     * an attribute value).
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInText(s: string, opt_isRtlContext?: boolean | undefined): string;
    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceRtlInHtml(html: string): string;
    /**
     * Enforce RTL on both end of the given text piece using unicode BiDi formatting
     * characters RLE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceRtlInText(text: string): string;
    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceLtrInHtml(html: string): string;
    /**
     * Enforce LTR on both end of the given text piece using unicode BiDi formatting
     * characters LRE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceLtrInText(text: string): string;
    /**
     * Regular expression to find dimensions such as "padding: .3 0.4ex 5px 6;"
     * @type {RegExp}
     * @private
     */
    var dimensionsRe_: RegExp;
    /**
     * Regular expression for left.
     * @type {RegExp}
     * @private
     */
    var leftRe_: RegExp;
    /**
     * Regular expression for right.
     * @type {RegExp}
     * @private
     */
    var rightRe_: RegExp;
    /**
     * Placeholder regular expression for swapping.
     * @type {RegExp}
     * @private
     */
    var tempRe_: RegExp;
    /**
     * Swap location parameters and 'left'/'right' in CSS specification. The
     * processed string will be suited for RTL layout. Though this function can
     * cover most cases, there are always exceptions. It is suggested to put
     * those exceptions in separate group of CSS string.
     * @param {string} cssStr CSS spefication string.
     * @return {string} Processed CSS specification string.
     */
    function mirrorCSS(cssStr: string): string;
    /**
     * Regular expression for hebrew double quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    var doubleQuoteSubstituteRe_: RegExp;
    /**
     * Regular expression for hebrew single quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    var singleQuoteSubstituteRe_: RegExp;
    /**
     * Replace the double and single quote directly after a Hebrew character with
     * GERESH and GERSHAYIM. In such case, most likely that's user intention.
     * @param {string} str String that need to be processed.
     * @return {string} Processed string with double/single quote replaced.
     */
    function normalizeHebrewQuote(str: string): string;
    /**
     * Regular expression to split a string into "words" for directionality
     * estimation based on relative word counts.
     * @type {RegExp}
     * @private
     */
    var wordSeparatorRe_: RegExp;
    /**
     * Regular expression to check if a string contains any numerals. Used to
     * differentiate between completely neutral strings and those containing
     * numbers, which are weakly LTR.
     *
     * Native Arabic digits (\u0660 - \u0669) are not included because although they
     * do flow left-to-right inside a number, this is the case even if the  overall
     * directionality is RTL, and a mathematical expression using these digits is
     * supposed to flow right-to-left overall, including unary plus and minus
     * appearing to the right of a number, and this does depend on the overall
     * directionality being RTL. The digits used in Farsi (\u06F0 - \u06F9), on the
     * other hand, are included, since Farsi math (including unary plus and minus)
     * does flow left-to-right.
     *
     * @type {RegExp}
     * @private
     */
    var hasNumeralsRe_: RegExp;
    /**
     * This constant controls threshold of RTL directionality.
     * @type {number}
     * @private
     */
    var rtlDetectionThreshold_: number;
    /**
     * Estimates the directionality of a string based on relative word counts.
     * If the number of RTL words is above a certain percentage of the total number
     * of strongly directional words, returns RTL.
     * Otherwise, if any words are strongly or weakly LTR, returns LTR.
     * Otherwise, returns UNKNOWN, which is used to mean "neutral".
     * Numbers are counted as weakly LTR.
     * @param {string} str The string to be checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
     */
    function estimateDirection(str: string, opt_isHtml?: boolean | undefined): goog.i18n.bidi.Dir;
    /**
     * Check the directionality of a piece of text, return true if the piece of
     * text should be laid out in RTL direction.
     * @param {string} str The piece of text that need to be detected.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether this piece of text should be laid out in RTL.
     */
    function detectRtlDirectionality(str: string, opt_isHtml?: boolean | undefined): boolean;
    /**
     * Sets text input element's directionality and text alignment based on a
     * given directionality. Does nothing if the given directionality is unknown or
     * neutral.
     * @param {Element} element Input field element to set directionality to.
     * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
     *     given in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     */
    function setElementDirAndAlign(element: Element, dir: goog.i18n.bidi.Dir | number | boolean | null): void;
    /**
     * Sets element dir based on estimated directionality of the given text.
     * @param {!Element} element
     * @param {string} text
     */
    function setElementDirByTextDirectionality(element: Element, text: string): void;
}
declare namespace goog.i18n.bidi {
    /**
     * Strings that have an (optional) known direction.
     *
     * Implementations of this interface are string-like objects that carry an
     * attached direction, if known.
     * @interface
     */
    interface DirectionalString {
        /**
         * Interface marker of the DirectionalString interface.
         *
         * This property can be used to determine at runtime whether or not an object
         * implements this interface.  All implementations of this interface set this
         * property to {@code true}.
         * @type {boolean}
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        /**
         * Retrieves this object's known direction (if any).
         * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
         */
        getDirection(): goog.i18n.bidi.Dir;
    }
}
