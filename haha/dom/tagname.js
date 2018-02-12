// Copyright 2007 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Defines the goog.dom.TagName class. Its constants enumerate
 * all HTML tag names specified in either the the W3C HTML 4.01 index of
 * elements or the HTML5.1 specification.
 *
 * References:
 * https://www.w3.org/TR/html401/index/elements.html
 * https://www.w3.org/TR/html51/dom.html#elements
 */
goog.provide('goog.dom.TagName');
goog.require('goog.dom.HtmlElement');
var goog;
(function (goog) {
    var dom;
    (function (dom) {
        var TagName = /** @class */ (function () {
            /**
             * A tag name with the type of the element stored in the generic.
             * @param {string} tagName
             * @constructor
             * @template T
             */
            function TagName(tagName) {
                /** @private {string} */
                this.tagName_ = tagName;
            }
            /**
             * Returns the tag name.
             * @return {string}
             * @override
             */
            TagName.prototype.toString = function () {
                return this.tagName_;
            };
            return TagName;
        }());
        dom.TagName = TagName;
    })(dom = goog.dom || (goog.dom = {}));
})(goog || (goog = {}));
(function (goog) {
    var dom;
    (function (dom) {
        var TagName;
        (function (TagName) {
            /** @type {!goog.dom.TagName<!HTMLAnchorElement>} */
            TagName.A = new goog.dom.TagName('A');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.ABBR = new goog.dom.TagName('ABBR');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.ACRONYM = new goog.dom.TagName('ACRONYM');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.ADDRESS = new goog.dom.TagName('ADDRESS');
            /** @type {!goog.dom.TagName<!HTMLAppletElement>} */
            TagName.APPLET = new goog.dom.TagName('APPLET');
            /** @type {!goog.dom.TagName<!HTMLAreaElement>} */
            TagName.AREA = new goog.dom.TagName('AREA');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.ARTICLE = new goog.dom.TagName('ARTICLE');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.ASIDE = new goog.dom.TagName('ASIDE');
            /** @type {!goog.dom.TagName<!HTMLAudioElement>} */
            TagName.AUDIO = new goog.dom.TagName('AUDIO');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.B = new goog.dom.TagName('B');
            /** @type {!goog.dom.TagName<!HTMLBaseElement>} */
            TagName.BASE = new goog.dom.TagName('BASE');
            /** @type {!goog.dom.TagName<!HTMLBaseFontElement>} */
            TagName.BASEFONT = new goog.dom.TagName('BASEFONT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.BDI = new goog.dom.TagName('BDI');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.BDO = new goog.dom.TagName('BDO');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.BIG = new goog.dom.TagName('BIG');
            /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
            TagName.BLOCKQUOTE = new goog.dom.TagName('BLOCKQUOTE');
            /** @type {!goog.dom.TagName<!HTMLBodyElement>} */
            TagName.BODY = new goog.dom.TagName('BODY');
            /** @type {!goog.dom.TagName<!HTMLBRElement>} */
            TagName.BR = new goog.dom.TagName('BR');
            /** @type {!goog.dom.TagName<!HTMLButtonElement>} */
            TagName.BUTTON = new goog.dom.TagName('BUTTON');
            /** @type {!goog.dom.TagName<!HTMLCanvasElement>} */
            TagName.CANVAS = new goog.dom.TagName('CANVAS');
            /** @type {!goog.dom.TagName<!HTMLTableCaptionElement>} */
            TagName.CAPTION = new goog.dom.TagName('CAPTION');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.CENTER = new goog.dom.TagName('CENTER');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.CITE = new goog.dom.TagName('CITE');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.CODE = new goog.dom.TagName('CODE');
            /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
            TagName.COL = new goog.dom.TagName('COL');
            /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
            TagName.COLGROUP = new goog.dom.TagName('COLGROUP');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.COMMAND = new goog.dom.TagName('COMMAND');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.DATA = new goog.dom.TagName('DATA');
            /** @type {!goog.dom.TagName<!HTMLDataListElement>} */
            TagName.DATALIST = new goog.dom.TagName('DATALIST');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.DD = new goog.dom.TagName('DD');
            /** @type {!goog.dom.TagName<!HTMLModElement>} */
            TagName.DEL = new goog.dom.TagName('DEL');
            /** @type {!goog.dom.TagName<!HTMLDetailsElement>} */
            TagName.DETAILS = new goog.dom.TagName('DETAILS');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.DFN = new goog.dom.TagName('DFN');
            /** @type {!goog.dom.TagName<!HTMLDialogElement>} */
            TagName.DIALOG = new goog.dom.TagName('DIALOG');
            /** @type {!goog.dom.TagName<!HTMLDirectoryElement>} */
            TagName.DIR = new goog.dom.TagName('DIR');
            /** @type {!goog.dom.TagName<!HTMLDivElement>} */
            TagName.DIV = new goog.dom.TagName('DIV');
            /** @type {!goog.dom.TagName<!HTMLDListElement>} */
            TagName.DL = new goog.dom.TagName('DL');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.DT = new goog.dom.TagName('DT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.EM = new goog.dom.TagName('EM');
            /** @type {!goog.dom.TagName<!HTMLEmbedElement>} */
            TagName.EMBED = new goog.dom.TagName('EMBED');
            /** @type {!goog.dom.TagName<!HTMLFieldSetElement>} */
            TagName.FIELDSET = new goog.dom.TagName('FIELDSET');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.FIGCAPTION = new goog.dom.TagName('FIGCAPTION');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.FIGURE = new goog.dom.TagName('FIGURE');
            /** @type {!goog.dom.TagName<!HTMLFontElement>} */
            TagName.FONT = new goog.dom.TagName('FONT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.FOOTER = new goog.dom.TagName('FOOTER');
            /** @type {!goog.dom.TagName<!HTMLFormElement>} */
            TagName.FORM = new goog.dom.TagName('FORM');
            /** @type {!goog.dom.TagName<!HTMLFrameElement>} */
            TagName.FRAME = new goog.dom.TagName('FRAME');
            /** @type {!goog.dom.TagName<!HTMLFrameSetElement>} */
            TagName.FRAMESET = new goog.dom.TagName('FRAMESET');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H1 = new goog.dom.TagName('H1');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H2 = new goog.dom.TagName('H2');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H3 = new goog.dom.TagName('H3');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H4 = new goog.dom.TagName('H4');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H5 = new goog.dom.TagName('H5');
            /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
            TagName.H6 = new goog.dom.TagName('H6');
            /** @type {!goog.dom.TagName<!HTMLHeadElement>} */
            TagName.HEAD = new goog.dom.TagName('HEAD');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.HEADER = new goog.dom.TagName('HEADER');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.HGROUP = new goog.dom.TagName('HGROUP');
            /** @type {!goog.dom.TagName<!HTMLHRElement>} */
            TagName.HR = new goog.dom.TagName('HR');
            /** @type {!goog.dom.TagName<!HTMLHtmlElement>} */
            TagName.HTML = new goog.dom.TagName('HTML');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.I = new goog.dom.TagName('I');
            /** @type {!goog.dom.TagName<!HTMLIFrameElement>} */
            TagName.IFRAME = new goog.dom.TagName('IFRAME');
            /** @type {!goog.dom.TagName<!HTMLImageElement>} */
            TagName.IMG = new goog.dom.TagName('IMG');
            /** @type {!goog.dom.TagName<!HTMLInputElement>} */
            TagName.INPUT = new goog.dom.TagName('INPUT');
            /** @type {!goog.dom.TagName<!HTMLModElement>} */
            TagName.INS = new goog.dom.TagName('INS');
            /** @type {!goog.dom.TagName<!HTMLIsIndexElement>} */
            TagName.ISINDEX = new goog.dom.TagName('ISINDEX');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.KBD = new goog.dom.TagName('KBD');
            // HTMLKeygenElement is deprecated.
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.KEYGEN = new goog.dom.TagName('KEYGEN');
            /** @type {!goog.dom.TagName<!HTMLLabelElement>} */
            TagName.LABEL = new goog.dom.TagName('LABEL');
            /** @type {!goog.dom.TagName<!HTMLLegendElement>} */
            TagName.LEGEND = new goog.dom.TagName('LEGEND');
            /** @type {!goog.dom.TagName<!HTMLLIElement>} */
            TagName.LI = new goog.dom.TagName('LI');
            /** @type {!goog.dom.TagName<!HTMLLinkElement>} */
            TagName.LINK = new goog.dom.TagName('LINK');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.MAIN = new goog.dom.TagName('MAIN');
            /** @type {!goog.dom.TagName<!HTMLMapElement>} */
            TagName.MAP = new goog.dom.TagName('MAP');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.MARK = new goog.dom.TagName('MARK');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.MATH = new goog.dom.TagName('MATH');
            /** @type {!goog.dom.TagName<!HTMLMenuElement>} */
            TagName.MENU = new goog.dom.TagName('MENU');
            /** @type {!goog.dom.TagName<!HTMLMenuItemElement>} */
            TagName.MENUITEM = new goog.dom.TagName('MENUITEM');
            /** @type {!goog.dom.TagName<!HTMLMetaElement>} */
            TagName.META = new goog.dom.TagName('META');
            /** @type {!goog.dom.TagName<!HTMLMeterElement>} */
            TagName.METER = new goog.dom.TagName('METER');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.NAV = new goog.dom.TagName('NAV');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.NOFRAMES = new goog.dom.TagName('NOFRAMES');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.NOSCRIPT = new goog.dom.TagName('NOSCRIPT');
            /** @type {!goog.dom.TagName<!HTMLObjectElement>} */
            TagName.OBJECT = new goog.dom.TagName('OBJECT');
            /** @type {!goog.dom.TagName<!HTMLOListElement>} */
            TagName.OL = new goog.dom.TagName('OL');
            /** @type {!goog.dom.TagName<!HTMLOptGroupElement>} */
            TagName.OPTGROUP = new goog.dom.TagName('OPTGROUP');
            /** @type {!goog.dom.TagName<!HTMLOptionElement>} */
            TagName.OPTION = new goog.dom.TagName('OPTION');
            /** @type {!goog.dom.TagName<!HTMLOutputElement>} */
            TagName.OUTPUT = new goog.dom.TagName('OUTPUT');
            /** @type {!goog.dom.TagName<!HTMLParagraphElement>} */
            TagName.P = new goog.dom.TagName('P');
            /** @type {!goog.dom.TagName<!HTMLParamElement>} */
            TagName.PARAM = new goog.dom.TagName('PARAM');
            /** @type {!goog.dom.TagName<!HTMLPictureElement>} */
            TagName.PICTURE = new goog.dom.TagName('PICTURE');
            /** @type {!goog.dom.TagName<!HTMLPreElement>} */
            TagName.PRE = new goog.dom.TagName('PRE');
            /** @type {!goog.dom.TagName<!HTMLProgressElement>} */
            TagName.PROGRESS = new goog.dom.TagName('PROGRESS');
            /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
            TagName.Q = new goog.dom.TagName('Q');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.RP = new goog.dom.TagName('RP');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.RT = new goog.dom.TagName('RT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.RTC = new goog.dom.TagName('RTC');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.RUBY = new goog.dom.TagName('RUBY');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.S = new goog.dom.TagName('S');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SAMP = new goog.dom.TagName('SAMP');
            /** @type {!goog.dom.TagName<!HTMLScriptElement>} */
            TagName.SCRIPT = new goog.dom.TagName('SCRIPT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SECTION = new goog.dom.TagName('SECTION');
            /** @type {!goog.dom.TagName<!HTMLSelectElement>} */
            TagName.SELECT = new goog.dom.TagName('SELECT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SMALL = new goog.dom.TagName('SMALL');
            /** @type {!goog.dom.TagName<!HTMLSourceElement>} */
            TagName.SOURCE = new goog.dom.TagName('SOURCE');
            /** @type {!goog.dom.TagName<!HTMLSpanElement>} */
            TagName.SPAN = new goog.dom.TagName('SPAN');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.STRIKE = new goog.dom.TagName('STRIKE');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.STRONG = new goog.dom.TagName('STRONG');
            /** @type {!goog.dom.TagName<!HTMLStyleElement>} */
            TagName.STYLE = new goog.dom.TagName('STYLE');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SUB = new goog.dom.TagName('SUB');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SUMMARY = new goog.dom.TagName('SUMMARY');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SUP = new goog.dom.TagName('SUP');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.SVG = new goog.dom.TagName('SVG');
            /** @type {!goog.dom.TagName<!HTMLTableElement>} */
            TagName.TABLE = new goog.dom.TagName('TABLE');
            /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
            TagName.TBODY = new goog.dom.TagName('TBODY');
            /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
            TagName.TD = new goog.dom.TagName('TD');
            /** @type {!goog.dom.TagName<!HTMLTemplateElement>} */
            TagName.TEMPLATE = new goog.dom.TagName('TEMPLATE');
            /** @type {!goog.dom.TagName<!HTMLTextAreaElement>} */
            TagName.TEXTAREA = new goog.dom.TagName('TEXTAREA');
            /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
            TagName.TFOOT = new goog.dom.TagName('TFOOT');
            /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
            TagName.TH = new goog.dom.TagName('TH');
            /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
            TagName.THEAD = new goog.dom.TagName('THEAD');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.TIME = new goog.dom.TagName('TIME');
            /** @type {!goog.dom.TagName<!HTMLTitleElement>} */
            TagName.TITLE = new goog.dom.TagName('TITLE');
            /** @type {!goog.dom.TagName<!HTMLTableRowElement>} */
            TagName.TR = new goog.dom.TagName('TR');
            /** @type {!goog.dom.TagName<!HTMLTrackElement>} */
            TagName.TRACK = new goog.dom.TagName('TRACK');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.TT = new goog.dom.TagName('TT');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.U = new goog.dom.TagName('U');
            /** @type {!goog.dom.TagName<!HTMLUListElement>} */
            TagName.UL = new goog.dom.TagName('UL');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.VAR = new goog.dom.TagName('VAR');
            /** @type {!goog.dom.TagName<!HTMLVideoElement>} */
            TagName.VIDEO = new goog.dom.TagName('VIDEO');
            /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
            TagName.WBR = new goog.dom.TagName('WBR');
        })(TagName = dom.TagName || (dom.TagName = {}));
    })(dom = goog.dom || (goog.dom = {}));
})(goog || (goog = {}));
// Closure Compiler unconditionally converts the following constants to their
// string value (goog.dom.TagName.A -> 'A'). These are the consequences:
// 1. Don't add any members or static members to goog.dom.TagName as they
//    couldn't be accessed after this optimization.
// 2. Keep the constant name and its string value the same:
//    goog.dom.TagName.X = new goog.dom.TagName('Y');
//    is converted to 'X', not 'Y'.
