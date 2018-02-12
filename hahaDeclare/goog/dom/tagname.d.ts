declare namespace goog.dom {
    class TagName<T> {
        private tagName_;
        /**
         * A tag name with the type of the element stored in the generic.
         * @param {string} tagName
         * @constructor
         * @template T
         */
        constructor(tagName: any);
        /**
         * Returns the tag name.
         * @return {string}
         * @override
         */
        toString(): string;
    }
}
declare namespace goog.dom.TagName {
    /** @type {!goog.dom.TagName<!HTMLAnchorElement>} */
    var A: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ABBR: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ACRONYM: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ADDRESS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAppletElement>} */
    var APPLET: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAreaElement>} */
    var AREA: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ARTICLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var ASIDE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLAudioElement>} */
    var AUDIO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var B: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBaseElement>} */
    var BASE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBaseFontElement>} */
    var BASEFONT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BDI: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BDO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var BIG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    var BLOCKQUOTE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBodyElement>} */
    var BODY: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLBRElement>} */
    var BR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLButtonElement>} */
    var BUTTON: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLCanvasElement>} */
    var CANVAS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCaptionElement>} */
    var CAPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CENTER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CITE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var CODE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    var COL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    var COLGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var COMMAND: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DATA: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDataListElement>} */
    var DATALIST: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DD: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    var DEL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDetailsElement>} */
    var DETAILS: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DFN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDialogElement>} */
    var DIALOG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDirectoryElement>} */
    var DIR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDivElement>} */
    var DIV: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLDListElement>} */
    var DL: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var DT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var EM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLEmbedElement>} */
    var EMBED: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFieldSetElement>} */
    var FIELDSET: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FIGCAPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FIGURE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFontElement>} */
    var FONT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var FOOTER: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFormElement>} */
    var FORM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFrameElement>} */
    var FRAME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLFrameSetElement>} */
    var FRAMESET: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H1: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H2: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H3: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H4: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H5: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    var H6: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHeadElement>} */
    var HEAD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var HEADER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var HGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHRElement>} */
    var HR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLHtmlElement>} */
    var HTML: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var I: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLIFrameElement>} */
    var IFRAME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLImageElement>} */
    var IMG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLInputElement>} */
    var INPUT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    var INS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLIsIndexElement>} */
    var ISINDEX: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var KBD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var KEYGEN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLabelElement>} */
    var LABEL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLegendElement>} */
    var LEGEND: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLIElement>} */
    var LI: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLLinkElement>} */
    var LINK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MAIN: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMapElement>} */
    var MAP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MARK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var MATH: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMenuElement>} */
    var MENU: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMenuItemElement>} */
    var MENUITEM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMetaElement>} */
    var META: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLMeterElement>} */
    var METER: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NAV: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NOFRAMES: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var NOSCRIPT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLObjectElement>} */
    var OBJECT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOListElement>} */
    var OL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOptGroupElement>} */
    var OPTGROUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOptionElement>} */
    var OPTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLOutputElement>} */
    var OUTPUT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLParagraphElement>} */
    var P: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLParamElement>} */
    var PARAM: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLPictureElement>} */
    var PICTURE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLPreElement>} */
    var PRE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLProgressElement>} */
    var PROGRESS: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    var Q: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RTC: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var RUBY: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var S: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SAMP: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLScriptElement>} */
    var SCRIPT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SECTION: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSelectElement>} */
    var SELECT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SMALL: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSourceElement>} */
    var SOURCE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLSpanElement>} */
    var SPAN: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var STRIKE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var STRONG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLStyleElement>} */
    var STYLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUB: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUMMARY: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SUP: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var SVG: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableElement>} */
    var TABLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var TBODY: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    var TD: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTemplateElement>} */
    var TEMPLATE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTextAreaElement>} */
    var TEXTAREA: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var TFOOT: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    var TH: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    var THEAD: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var TIME: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTitleElement>} */
    var TITLE: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTableRowElement>} */
    var TR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLTrackElement>} */
    var TRACK: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var TT: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var U: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLUListElement>} */
    var UL: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var VAR: TagName<{}>;
    /** @type {!goog.dom.TagName<!HTMLVideoElement>} */
    var VIDEO: TagName<{}>;
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    var WBR: TagName<{}>;
}
