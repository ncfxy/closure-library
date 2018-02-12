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


namespace goog.dom{
    export class TagName<T> {
        private tagName_: string;
        /**
         * A tag name with the type of the element stored in the generic.
         * @param {string} tagName
         * @constructor
         * @template T
         */
        constructor(tagName){
            /** @private {string} */
             this.tagName_ = tagName;
        }

        /**
         * Returns the tag name.
         * @return {string}
         * @override
         */
        public toString(){
            return this.tagName_;
        }
    }

}

namespace goog.dom.TagName{

    /** @type {!goog.dom.TagName<!HTMLAnchorElement>} */
    export var A = new goog.dom.TagName('A');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var ABBR = new goog.dom.TagName('ABBR');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var ACRONYM = new goog.dom.TagName('ACRONYM');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var ADDRESS = new goog.dom.TagName('ADDRESS');


    /** @type {!goog.dom.TagName<!HTMLAppletElement>} */
    export var APPLET = new goog.dom.TagName('APPLET');


    /** @type {!goog.dom.TagName<!HTMLAreaElement>} */
    export var AREA = new goog.dom.TagName('AREA');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var ARTICLE = new goog.dom.TagName('ARTICLE');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var ASIDE = new goog.dom.TagName('ASIDE');


    /** @type {!goog.dom.TagName<!HTMLAudioElement>} */
    export var AUDIO = new goog.dom.TagName('AUDIO');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var B = new goog.dom.TagName('B');


    /** @type {!goog.dom.TagName<!HTMLBaseElement>} */
    export var BASE = new goog.dom.TagName('BASE');


    /** @type {!goog.dom.TagName<!HTMLBaseFontElement>} */
    export var BASEFONT = new goog.dom.TagName('BASEFONT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var BDI = new goog.dom.TagName('BDI');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var BDO = new goog.dom.TagName('BDO');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var BIG = new goog.dom.TagName('BIG');


    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    export var BLOCKQUOTE = new goog.dom.TagName('BLOCKQUOTE');


    /** @type {!goog.dom.TagName<!HTMLBodyElement>} */
    export var BODY = new goog.dom.TagName('BODY');


    /** @type {!goog.dom.TagName<!HTMLBRElement>} */
    export var BR = new goog.dom.TagName('BR');


    /** @type {!goog.dom.TagName<!HTMLButtonElement>} */
    export var BUTTON = new goog.dom.TagName('BUTTON');


    /** @type {!goog.dom.TagName<!HTMLCanvasElement>} */
    export var CANVAS = new goog.dom.TagName('CANVAS');


    /** @type {!goog.dom.TagName<!HTMLTableCaptionElement>} */
    export var CAPTION = new goog.dom.TagName('CAPTION');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var CENTER = new goog.dom.TagName('CENTER');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var CITE = new goog.dom.TagName('CITE');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var CODE = new goog.dom.TagName('CODE');


    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    export var COL = new goog.dom.TagName('COL');


    /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
    export var COLGROUP = new goog.dom.TagName('COLGROUP');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var COMMAND = new goog.dom.TagName('COMMAND');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var DATA = new goog.dom.TagName('DATA');


    /** @type {!goog.dom.TagName<!HTMLDataListElement>} */
    export var DATALIST = new goog.dom.TagName('DATALIST');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var DD = new goog.dom.TagName('DD');


    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    export var DEL = new goog.dom.TagName('DEL');


    /** @type {!goog.dom.TagName<!HTMLDetailsElement>} */
    export var DETAILS = new goog.dom.TagName('DETAILS');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var DFN = new goog.dom.TagName('DFN');


    /** @type {!goog.dom.TagName<!HTMLDialogElement>} */
    export var DIALOG = new goog.dom.TagName('DIALOG');


    /** @type {!goog.dom.TagName<!HTMLDirectoryElement>} */
    export var DIR = new goog.dom.TagName('DIR');


    /** @type {!goog.dom.TagName<!HTMLDivElement>} */
    export var DIV = new goog.dom.TagName('DIV');


    /** @type {!goog.dom.TagName<!HTMLDListElement>} */
    export var DL = new goog.dom.TagName('DL');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var DT = new goog.dom.TagName('DT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var EM = new goog.dom.TagName('EM');


    /** @type {!goog.dom.TagName<!HTMLEmbedElement>} */
    export var EMBED = new goog.dom.TagName('EMBED');


    /** @type {!goog.dom.TagName<!HTMLFieldSetElement>} */
    export var FIELDSET = new goog.dom.TagName('FIELDSET');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var FIGCAPTION = new goog.dom.TagName('FIGCAPTION');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var FIGURE = new goog.dom.TagName('FIGURE');


    /** @type {!goog.dom.TagName<!HTMLFontElement>} */
    export var FONT = new goog.dom.TagName('FONT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var FOOTER = new goog.dom.TagName('FOOTER');


    /** @type {!goog.dom.TagName<!HTMLFormElement>} */
    export var FORM = new goog.dom.TagName('FORM');


    /** @type {!goog.dom.TagName<!HTMLFrameElement>} */
    export var FRAME = new goog.dom.TagName('FRAME');


    /** @type {!goog.dom.TagName<!HTMLFrameSetElement>} */
    export var FRAMESET = new goog.dom.TagName('FRAMESET');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H1 = new goog.dom.TagName('H1');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H2 = new goog.dom.TagName('H2');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H3 = new goog.dom.TagName('H3');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H4 = new goog.dom.TagName('H4');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H5 = new goog.dom.TagName('H5');


    /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
    export var H6 = new goog.dom.TagName('H6');


    /** @type {!goog.dom.TagName<!HTMLHeadElement>} */
    export var HEAD = new goog.dom.TagName('HEAD');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var HEADER = new goog.dom.TagName('HEADER');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var HGROUP = new goog.dom.TagName('HGROUP');


    /** @type {!goog.dom.TagName<!HTMLHRElement>} */
    export var HR = new goog.dom.TagName('HR');


    /** @type {!goog.dom.TagName<!HTMLHtmlElement>} */
    export var HTML = new goog.dom.TagName('HTML');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var I = new goog.dom.TagName('I');


    /** @type {!goog.dom.TagName<!HTMLIFrameElement>} */
    export var IFRAME = new goog.dom.TagName('IFRAME');


    /** @type {!goog.dom.TagName<!HTMLImageElement>} */
    export var IMG = new goog.dom.TagName('IMG');


    /** @type {!goog.dom.TagName<!HTMLInputElement>} */
    export var INPUT = new goog.dom.TagName('INPUT');


    /** @type {!goog.dom.TagName<!HTMLModElement>} */
    export var INS = new goog.dom.TagName('INS');


    /** @type {!goog.dom.TagName<!HTMLIsIndexElement>} */
    export var ISINDEX = new goog.dom.TagName('ISINDEX');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var KBD = new goog.dom.TagName('KBD');


    // HTMLKeygenElement is deprecated.
    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var KEYGEN = new goog.dom.TagName('KEYGEN');


    /** @type {!goog.dom.TagName<!HTMLLabelElement>} */
    export var LABEL = new goog.dom.TagName('LABEL');


    /** @type {!goog.dom.TagName<!HTMLLegendElement>} */
    export var LEGEND = new goog.dom.TagName('LEGEND');


    /** @type {!goog.dom.TagName<!HTMLLIElement>} */
    export var LI = new goog.dom.TagName('LI');


    /** @type {!goog.dom.TagName<!HTMLLinkElement>} */
    export var LINK = new goog.dom.TagName('LINK');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var MAIN = new goog.dom.TagName('MAIN');


    /** @type {!goog.dom.TagName<!HTMLMapElement>} */
    export var MAP = new goog.dom.TagName('MAP');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var MARK = new goog.dom.TagName('MARK');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var MATH = new goog.dom.TagName('MATH');


    /** @type {!goog.dom.TagName<!HTMLMenuElement>} */
    export var MENU = new goog.dom.TagName('MENU');


    /** @type {!goog.dom.TagName<!HTMLMenuItemElement>} */
    export var MENUITEM = new goog.dom.TagName('MENUITEM');


    /** @type {!goog.dom.TagName<!HTMLMetaElement>} */
    export var META = new goog.dom.TagName('META');


    /** @type {!goog.dom.TagName<!HTMLMeterElement>} */
    export var METER = new goog.dom.TagName('METER');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var NAV = new goog.dom.TagName('NAV');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var NOFRAMES = new goog.dom.TagName('NOFRAMES');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var NOSCRIPT = new goog.dom.TagName('NOSCRIPT');


    /** @type {!goog.dom.TagName<!HTMLObjectElement>} */
    export var OBJECT = new goog.dom.TagName('OBJECT');


    /** @type {!goog.dom.TagName<!HTMLOListElement>} */
    export var OL = new goog.dom.TagName('OL');


    /** @type {!goog.dom.TagName<!HTMLOptGroupElement>} */
    export var OPTGROUP = new goog.dom.TagName('OPTGROUP');


    /** @type {!goog.dom.TagName<!HTMLOptionElement>} */
    export var OPTION = new goog.dom.TagName('OPTION');


    /** @type {!goog.dom.TagName<!HTMLOutputElement>} */
    export var OUTPUT = new goog.dom.TagName('OUTPUT');


    /** @type {!goog.dom.TagName<!HTMLParagraphElement>} */
    export var P = new goog.dom.TagName('P');


    /** @type {!goog.dom.TagName<!HTMLParamElement>} */
    export var PARAM = new goog.dom.TagName('PARAM');


    /** @type {!goog.dom.TagName<!HTMLPictureElement>} */
    export var PICTURE = new goog.dom.TagName('PICTURE');


    /** @type {!goog.dom.TagName<!HTMLPreElement>} */
    export var PRE = new goog.dom.TagName('PRE');


    /** @type {!goog.dom.TagName<!HTMLProgressElement>} */
    export var PROGRESS = new goog.dom.TagName('PROGRESS');


    /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
    export var Q = new goog.dom.TagName('Q');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var RP = new goog.dom.TagName('RP');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var RT = new goog.dom.TagName('RT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var RTC = new goog.dom.TagName('RTC');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var RUBY = new goog.dom.TagName('RUBY');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var S = new goog.dom.TagName('S');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SAMP = new goog.dom.TagName('SAMP');


    /** @type {!goog.dom.TagName<!HTMLScriptElement>} */
    export var SCRIPT = new goog.dom.TagName('SCRIPT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SECTION = new goog.dom.TagName('SECTION');


    /** @type {!goog.dom.TagName<!HTMLSelectElement>} */
    export var SELECT = new goog.dom.TagName('SELECT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SMALL = new goog.dom.TagName('SMALL');


    /** @type {!goog.dom.TagName<!HTMLSourceElement>} */
    export var SOURCE = new goog.dom.TagName('SOURCE');


    /** @type {!goog.dom.TagName<!HTMLSpanElement>} */
    export var SPAN = new goog.dom.TagName('SPAN');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var STRIKE = new goog.dom.TagName('STRIKE');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var STRONG = new goog.dom.TagName('STRONG');


    /** @type {!goog.dom.TagName<!HTMLStyleElement>} */
    export var STYLE = new goog.dom.TagName('STYLE');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SUB = new goog.dom.TagName('SUB');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SUMMARY = new goog.dom.TagName('SUMMARY');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SUP = new goog.dom.TagName('SUP');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var SVG = new goog.dom.TagName('SVG');


    /** @type {!goog.dom.TagName<!HTMLTableElement>} */
    export var TABLE = new goog.dom.TagName('TABLE');


    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    export var TBODY = new goog.dom.TagName('TBODY');


    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    export var TD = new goog.dom.TagName('TD');


    /** @type {!goog.dom.TagName<!HTMLTemplateElement>} */
    export var TEMPLATE = new goog.dom.TagName('TEMPLATE');


    /** @type {!goog.dom.TagName<!HTMLTextAreaElement>} */
    export var TEXTAREA = new goog.dom.TagName('TEXTAREA');


    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    export var TFOOT = new goog.dom.TagName('TFOOT');


    /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
    export var TH = new goog.dom.TagName('TH');


    /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
    export var THEAD = new goog.dom.TagName('THEAD');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var TIME = new goog.dom.TagName('TIME');


    /** @type {!goog.dom.TagName<!HTMLTitleElement>} */
    export var TITLE = new goog.dom.TagName('TITLE');


    /** @type {!goog.dom.TagName<!HTMLTableRowElement>} */
    export var TR = new goog.dom.TagName('TR');


    /** @type {!goog.dom.TagName<!HTMLTrackElement>} */
    export var TRACK = new goog.dom.TagName('TRACK');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var TT = new goog.dom.TagName('TT');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var U = new goog.dom.TagName('U');


    /** @type {!goog.dom.TagName<!HTMLUListElement>} */
    export var UL = new goog.dom.TagName('UL');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var VAR = new goog.dom.TagName('VAR');


    /** @type {!goog.dom.TagName<!HTMLVideoElement>} */
    export var VIDEO = new goog.dom.TagName('VIDEO');


    /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
    export var WBR = new goog.dom.TagName('WBR');
}



// Closure Compiler unconditionally converts the following constants to their
// string value (goog.dom.TagName.A -> 'A'). These are the consequences:
// 1. Don't add any members or static members to goog.dom.TagName as they
//    couldn't be accessed after this optimization.
// 2. Keep the constant name and its string value the same:
//    goog.dom.TagName.X = new goog.dom.TagName('Y');
//    is converted to 'X', not 'Y'.

