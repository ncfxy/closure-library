/// <reference path="../specialtype.ts" />
/// <reference path="../base.ts" />
/// <reference path="./tagname.ts" />
/// <reference path="../string/string.ts" />
/// <reference path="../asserts/asserts.ts" />
/// <reference path="../math/coordinate.ts" />
/// <reference path="../math/size.ts" />
/// <reference path="../useragent/useragent.ts" />
/// <reference path="../dom/browserfeature.ts" />
/// <reference path="../string/const.ts" />
/// <reference path="../html/safehtml.ts" />
/// <reference path="../html/uncheckedconversions.ts" />
/// <reference path="../dom/safe.ts" />



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
 * @fileoverview Utilities for manipulating the browser's Document Object Model
 * Inspiration taken *heavily* from mochikit (http://mochikit.com/).
 *
 * You can use {@link goog.dom.DomHelper} to create new dom helpers that refer
 * to a different document object.  This is useful if you are working with
 * frames or multiple windows.
 *
 * @author arv@google.com (Erik Arvidsson)
 */


// TODO(arv): Rename/refactor getTextContent and getRawTextContent. The problem
// is that getTextContent should mimic the DOM3 textContent. We should add a
// getInnerText (or getText) which tries to return the visible text, innerText.
goog.provide('goog.dom');
goog.provide('goog.dom.Appendable');
goog.provide('goog.dom.DomHelper');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.dom.BrowserFeature');
goog.require('goog.dom.NodeType');
goog.require('goog.dom.TagName');
goog.require('goog.dom.safe');
goog.require('goog.html.SafeHtml');
goog.require('goog.html.uncheckedconversions');
goog.require('goog.math.Coordinate');
goog.require('goog.math.Size');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.Unicode');
goog.require('goog.userAgent');

/**
 * @define {boolean} Whether we know at compile time that the browser is in
 * quirks mode.
 */
goog.define('goog.dom.ASSUME_QUIRKS_MODE', false);


/**
 * @define {boolean} Whether we know at compile time that the browser is in
 * standards compliance mode.
 */
goog.define('goog.dom.ASSUME_STANDARDS_MODE', false);

/**
 * Whether we know the compatibility mode at compile time.
 * @type {boolean}
 * @private
 */
goog.dom.COMPAT_MODE_KNOWN_ =
    goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;


namespace goog.dom{
    export var COMPAT_MODE_KNOWN_;
    export var ASSUME_QUIRKS_MODE;
    export var ASSUME_STANDARDS_MODE;

    /**
     * Cached default DOM helper.
     * @type {!goog.dom.DomHelper|undefined}
     * @private
     */
    export var defaultDomHelper_;

    /**
     * Gets the DomHelper object for the document where the element resides.
     * @param {(Node|Window)=} opt_element If present, gets the DomHelper for this
     *     element.
     * @return {!goog.dom.DomHelper} The DomHelper.
     */
    export function getDomHelper(opt_element?:Node|Window){
        return opt_element ?
      new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) :
      (goog.dom.defaultDomHelper_ ||
       (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper()));
    }


    /**
     * Gets the document object being used by the dom library.
     * @return {!Document} Document object.
     */
    export function getDocument(): Document {
        return document;
    };


    /**
     * Gets an element from the current document by element id.
     *
     * If an Element is passed in, it is returned.
     *
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     */
    export function getElement(element: string | Element): Element {
        return goog.dom.getElementHelper_(document, element);
    };


    /**
     * Gets an element by id from the given document (if present).
     * If an element is given, it is returned.
     * @param {!Document} doc
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The resulting element.
     * @private
     */
    export function getElementHelper_(doc: Document, element: string | Element): Element {
        return goog.isString(element) ? doc.getElementById(<string>element) : <Element>element;
    };


    /**
     * Gets an element by id, asserting that the element is found.
     *
     * This is used when an element is expected to exist, and should fail with
     * an assertion error if it does not (if assertions are enabled).
     *
     * @param {string} id Element ID.
     * @return {!Element} The element with the given ID, if it exists.
     */
    export function getRequiredElement(id: string): Element {
        return goog.dom.getRequiredElementHelper_(document, id);
    };


    /**
     * Helper function for getRequiredElementHelper functions, both static and
     * on DomHelper.  Asserts the element with the given id exists.
     * @param {!Document} doc
     * @param {string} id
     * @return {!Element} The element with the given ID, if it exists.
     * @private
     */
    export function getRequiredElementHelper_(doc: Document, id: string): Element {
        // To prevent users passing in Elements as is permitted in getElement().
        goog.asserts.assertString(id);
        var element = goog.dom.getElementHelper_(doc, id);
        element =
            goog.asserts.assertElement(element, 'No element found with id: ' + id);
        return element;
    };


    /**
     * Alias for getElement.
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     * @deprecated Use {@link goog.dom.getElement} instead.
     */
    export function $(element: string | Element): Element {
        return goog.dom.getElement(element);
    } 


    /**
     * Gets elements by tag name.
     * @param {!goog.dom.TagName<T>} tagName
     * @param {(!Document|!Element)=} opt_parent Parent element or document where to
     *     look for elements. Defaults to document.
     * @return {!NodeList<R>} List of elements. The members of the list are
     *     {!Element} if tagName is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function getElementsByTagName<T, R>(tagName: goog.dom.TagName<T>, opt_parent?: (Document | Element) | undefined): NodeList {
        var parent = opt_parent || document;
        return parent.getElementsByTagName(String(tagName));
    };


    /**
     * Looks up elements by both tag and class name, using browser native functions
     * ({@code querySelectorAll}, {@code getElementsByTagName} or
     * {@code getElementsByClassName}) where possible. This function
     * is a useful, if limited, way of collecting a list of DOM elements
     * with certain characteristics.  {@code goog.dom.query} offers a
     * more powerful and general solution which allows matching on CSS3
     * selector expressions, but at increased cost in code size. If all you
     * need is particular tags belonging to a single class, this function
     * is fast and sleek.
     *
     * Note that tag names are case sensitive in the SVG namespace, and this
     * function converts opt_tag to uppercase for comparisons. For queries in the
     * SVG namespace you should use querySelector or querySelectorAll instead.
     * https://bugzilla.mozilla.org/show_bug.cgi?id=963870
     * https://bugs.webkit.org/show_bug.cgi?id=83438
     *
     * @see {goog.dom.query}
     *
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function getElementsByTagNameAndClass<T,R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R> {
        return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
    };


    /**
     * Gets the first element matching the tag and the class.
     *
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {?R} Reference to a DOM node. The return type is {?Element} if
     *     tagName is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function getElementByTagNameAndClass<T,R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): R | null {
        return goog.dom.getElementByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
    };


    /**
     * Returns a static, array-like list of the elements with the provided
     * className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<!Element>} The items found with the class name provided.
     */
    export function getElementsByClass(className: string, opt_el: (Document | Element) | undefined): IArrayLike<Element> {
        var parent = opt_el || document;
        if (goog.dom.canUseQuerySelector_(parent)) {
            return parent.querySelectorAll('.' + className);
        }
        return goog.dom.getElementsByTagNameAndClass_(document, '*', className, opt_el);
    };


    /**
     * Returns the first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {Element|Document=} opt_el Optional element to look in.
     * @return {Element} The first item with the class name provided.
     */
    export function getElementByClass(className: string, opt_el: Element | (Document | undefined)): Element {
        var parent = opt_el || document;
        var retVal = null;
        if (parent.getElementsByClassName) {
            retVal = parent.getElementsByClassName(className)[0];
        }
        else {
            retVal =
                goog.dom.getElementByTagNameAndClass_(document, '*', className, opt_el);
        }
        return retVal || null;
    };


    /**
     * Ensures an element with the given className exists, and then returns the
     * first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {!Element|!Document=} opt_root Optional element or document to look
     *     in.
     * @return {!Element} The first item with the class name provided.
     * @throws {goog.asserts.AssertionError} Thrown if no element is found.
     */
    export function getRequiredElementByClass(className: string, opt_root: Element | (Document | undefined)): Element {
        var retValue = goog.dom.getElementByClass(className, opt_root);
        return goog.asserts.assert(retValue, 'No element found with className: ' + className);
    };


    /**
     * Prefer the standardized (http://www.w3.org/TR/selectors-api/), native and
     * fast W3C Selectors API.
     * @param {!(Element|Document)} parent The parent document object.
     * @return {boolean} whether or not we can use parent.querySelector* APIs.
     * @private
     */
    export function canUseQuerySelector_(parent: (Element | Document)): boolean {
        return !!(parent.querySelectorAll && parent.querySelector);
    };


    /**
     * Helper for {@code getElementsByTagNameAndClass}.
     * @param {!Document} doc The document to get the elements in.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    export function getElementsByTagNameAndClass_<T,R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R> {
        var parent = opt_el || doc;
        var tagName = (opt_tag && opt_tag != '*') ? String(opt_tag).toUpperCase() : '';
        if (goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
            var query = tagName + (opt_class ? '.' + opt_class : '');
            return parent.querySelectorAll(query);
        }
        // Use the native getElementsByClassName if available, under the assumption
        // that even when the tag name is specified, there will be fewer elements to
        // filter through when going by class than by tag name
        if (opt_class && parent.getElementsByClassName) {
            var els = parent.getElementsByClassName(opt_class);
            if (tagName) {
                var arrayLike:IArrayLike<string> = {};
                var len = 0;
                // Filter for specific tags if requested.
                for (var i = 0, el; el = els[i]; i++) {
                    if (tagName == el.nodeName) {
                        arrayLike[len++] = el;
                    }
                }
                arrayLike.length = len;
                return /** @type {!IArrayLike<!Element>} */ <IArrayLike<Element>> (arrayLike);
            }
            else {
                return els;
            }
        }
        var els = parent.getElementsByTagName(tagName || '*');
        if (opt_class) {
            var arrayLike:IArrayLike<string> = {};
            var len = 0;
            for (var i = 0, el; el = els[i]; i++) {
                var className = el.className;
                // Check if className has a split function since SVG className does not.
                if (typeof className.split == 'function' &&
                    goog.array.contains(className.split(/\s+/), opt_class)) {
                    arrayLike[len++] = el;
                }
            }
            arrayLike.length = len;
            return /** @type {!IArrayLike<!Element>} */ (arrayLike);
        }
        else {
            return els;
        }
    };


    /**
     * Helper for goog.dom.getElementByTagNameAndClass.
     *
     * @param {!Document} doc The document to get the elements in.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {?R} Reference to a DOM node. The return type is {?Element} if
     *     tagName is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    export function getElementByTagNameAndClass_<T,R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): any | null {
        var parent = opt_el || doc;
        var tag = (opt_tag && opt_tag != '*') ? String(opt_tag).toUpperCase() : '';
        if (goog.dom.canUseQuerySelector_(parent) && (tag || opt_class)) {
            return parent.querySelector(tag + (opt_class ? '.' + opt_class : ''));
        }
        var elements = goog.dom.getElementsByTagNameAndClass_(doc, opt_tag, opt_class, opt_el);
        return elements[0] || null;
    };



    /**
     * Alias for {@code getElementsByTagNameAndClass}.
     * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {Element=} opt_el Optional element to look in.
     * @return {!IArrayLike<R>} Array-like list of elements (only a length property
     *     and numerical indices are guaranteed to exist). The members of the array
     *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
     *     specific types if it is (e.g. {!HTMLAnchorElement} for
     *     goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @deprecated Use {@link goog.dom.getElementsByTagNameAndClass} instead.
     */
    export function $$<T,R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: Element | undefined): IArrayLike<R> {
        return goog.dom.getElementsByTagNameAndClass(opt_tag, opt_class, opt_el);
    }


    /**
     * Sets multiple properties, and sometimes attributes, on an element. Note that
     * properties are simply object properties on the element instance, while
     * attributes are visible in the DOM. Many properties map to attributes with the
     * same names, some with different names, and there are also unmappable cases.
     *
     * This method sets properties by default (which means that custom attributes
     * are not supported). These are the exeptions (some of which is legacy):
     * - "style": Even though this is an attribute name, it is translated to a
     *   property, "style.cssText". Note that this property sanitizes and formats
     *   its value, unlike the attribute.
     * - "class": This is an attribute name, it is translated to the "className"
     *   property.
     * - "for": This is an attribute name, it is translated to the "htmlFor"
     *   property.
     * - Entries in {@see goog.dom.DIRECT_ATTRIBUTE_MAP_} are set as attributes,
     *   this is probably due to browser quirks.
     * - "aria-*", "data-*": Always set as attributes, they have no property
     *   counterparts.
     *
     * @param {Element} element DOM node to set properties on.
     * @param {Object} properties Hash of property:value pairs.
     *     Property values can be strings or goog.string.TypedString values (such as
     *     goog.html.SafeUrl).
     */
    export function setProperties(element: Element, properties: object) {
        goog.object.forEach(properties, function (val:any, key) {
            if (val && val.implementsGoogStringTypedString) {
                val = val.getTypedStringValue();
            }
            if (key == 'style') {
                (<HTMLElement>element).style.cssText = val;
            }
            else if (key == 'class') {
                element.className = val;
            }
            else if (key == 'for') {
                (<HTMLLabelElement>element).htmlFor = val;
            }
            else if (goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(key)) {
                element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val);
            }
            else if (goog.string.startsWith(key, 'aria-') ||
                goog.string.startsWith(key, 'data-')) {
                element.setAttribute(key, val);
            }
            else {
                element[key] = val;
            }
        });
    };


    /**
     * Map of attributes that should be set using
     * element.setAttribute(key, val) instead of element[key] = val.  Used
     * by goog.dom.setProperties.
     *
     * @private {!Object<string, string>}
     * @const
     */
    export var DIRECT_ATTRIBUTE_MAP_ = {
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'colspan': 'colSpan',
    'frameborder': 'frameBorder',
    'height': 'height',
    'maxlength': 'maxLength',
    'nonce': 'nonce',
    'role': 'role',
    'rowspan': 'rowSpan',
    'type': 'type',
    'usemap': 'useMap',
    'valign': 'vAlign',
    'width': 'width'
    };


    /**
     * Gets the dimensions of the viewport.
     *
     * Gecko Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of document.
     *
     * Gecko Backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * IE6/7 Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of document element.
     *
     * IE5 + IE6/7 Backwards compatible mode:
     * docEl.clientWidth  0.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight 0.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * Opera 9 Standards and backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * WebKit:
     * Safari 2
     * docEl.clientHeight Same as scrollHeight.
     * docEl.clientWidth  Same as innerWidth.
     * win.innerWidth     Width of viewport excluding scrollbar.
     * win.innerHeight    Height of the viewport including scrollbar.
     * frame.innerHeight  Height of the viewport exluding scrollbar.
     *
     * Safari 3 (tested in 522)
     *
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * docEl.clientHeight Height of viewport excluding scrollbar in strict mode.
     * body.clientHeight  Height of viewport excluding scrollbar in quirks mode.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     */
    export function getViewportSize(opt_window: Window | undefined): goog.math.Size {
        // TODO(arv): This should not take an argument
        return goog.dom.getViewportSize_(opt_window || window);
    };


    /**
     * Helper for {@code getViewportSize}.
     * @param {Window} win The window to get the view port size for.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     * @private
     */
    export function getViewportSize_(win: Window): goog.math.Size {
        var doc = win.document;
        var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
        return new goog.math.Size(el.clientWidth, el.clientHeight);
    };


    /**
     * Calculates the height of the document.
     *
     * @return {number} The height of the current document.
     */
    export function getDocumentHeight(): number {
        return goog.dom.getDocumentHeight_(window);
    };

    /**
     * Calculates the height of the document of the given window.
     *
     * @param {!Window} win The window whose document height to retrieve.
     * @return {number} The height of the document of the given window.
     */
    export function getDocumentHeightForWindow(win: Window): number {
        return goog.dom.getDocumentHeight_(win);
    };

    /**
     * Calculates the height of the document of the given window.
     *
     * Function code copied from the opensocial gadget api:
     *   gadgets.window.adjustHeight(opt_height)
     *
     * @private
     * @param {!Window} win The window whose document height to retrieve.
     * @return {number} The height of the document of the given window.
     */
    export function getDocumentHeight_(win: Window): number {
        // NOTE(eae): This method will return the window size rather than the document
        // size in webkit quirks mode.
        var doc = win.document;
        var height = 0;
        if (doc) {
            // Calculating inner content height is hard and different between
            // browsers rendering in Strict vs. Quirks mode.  We use a combination of
            // three properties within document.body and document.documentElement:
            // - scrollHeight
            // - offsetHeight
            // - clientHeight
            // These values differ significantly between browsers and rendering modes.
            // But there are patterns.  It just takes a lot of time and persistence
            // to figure out.
            var body = doc.body;
            var docEl = (doc.documentElement);
            if (!(docEl && body)) {
                return 0;
            }
            // Get the height of the viewport
            var vh = goog.dom.getViewportSize_(win).height;
            if (goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
                // In Strict mode:
                // The inner content height is contained in either:
                //    document.documentElement.scrollHeight
                //    document.documentElement.offsetHeight
                // Based on studying the values output by different browsers,
                // use the value that's NOT equal to the viewport height found above.
                height =
                    docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
            }
            else {
                // In Quirks mode:
                // documentElement.clientHeight is equal to documentElement.offsetHeight
                // except in IE.  In most browsers, document.documentElement can be used
                // to calculate the inner content height.
                // However, in other browsers (e.g. IE), document.body must be used
                // instead.  How do we know which one to use?
                // If document.documentElement.clientHeight does NOT equal
                // document.documentElement.offsetHeight, then use document.body.
                var sh = docEl.scrollHeight;
                var oh = docEl.offsetHeight;
                if (docEl.clientHeight != oh) {
                    sh = body.scrollHeight;
                    oh = body.offsetHeight;
                }
                // Detect whether the inner content height is bigger or smaller
                // than the bounding box (viewport).  If bigger, take the larger
                // value.  If smaller, take the smaller value.
                if (sh > vh) {
                    // Content is larger
                    height = sh > oh ? sh : oh;
                }
                else {
                    // Content is smaller
                    height = sh < oh ? sh : oh;
                }
            }
        }
        return height;
    };


    /**
     * Gets the page scroll distance as a coordinate object.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @deprecated Use {@link goog.dom.getDocumentScroll} instead.
     */
    export function getPageScroll(opt_window: Window | undefined): goog.math.Coordinate {
        var win = opt_window || goog.global || window;
        return goog.dom.getDomHelper(win.document).getDocumentScroll();
    };


    /**
     * Gets the document scroll distance as a coordinate object.
     *
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     */
    export function getDocumentScroll(): goog.math.Coordinate {
        return goog.dom.getDocumentScroll_(document);
    };


    /**
     * Helper for {@code getDocumentScroll}.
     *
     * @param {!Document} doc The document to get the scroll for.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @private
     */
    export function getDocumentScroll_(doc: Document): goog.math.Coordinate {
        var el = goog.dom.getDocumentScrollElement_(doc);
        var win = goog.dom.getWindow_(doc);
        if (goog.userAgent.IE && goog.userAgent.isVersionOrHigher('10') &&
            win.pageYOffset != el.scrollTop) {
            // The keyboard on IE10 touch devices shifts the page using the pageYOffset
            // without modifying scrollTop. For this case, we want the body scroll
            // offsets.
            return new goog.math.Coordinate(el.scrollLeft, el.scrollTop);
        }
        return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop);
    };


    /**
     * Gets the document scroll element.
     * @return {!Element} Scrolling element.
     */
    export function getDocumentScrollElement(): Element {
        return goog.dom.getDocumentScrollElement_(document);
    };


    /**
     * Helper for {@code getDocumentScrollElement}.
     * @param {!Document} doc The document to get the scroll element for.
     * @return {!Element} Scrolling element.
     * @private
     */
    export function getDocumentScrollElement_(doc: Document): Element {
        // Old WebKit needs body.scrollLeft in both quirks mode and strict mode. We
        // also default to the documentElement if the document does not have a body
        // (e.g. a SVG document).
        // Uses http://dev.w3.org/csswg/cssom-view/#dom-document-scrollingelement to
        // avoid trying to guess about browser behavior from the UA string.
        if (doc.scrollingElement) {
            return doc.scrollingElement;
        }
        if (!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc)) {
            return doc.documentElement;
        }
        return doc.body || doc.documentElement;
    };


    /**
     * Gets the window object associated with the given document.
     *
     * @param {Document=} opt_doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     */
    export function getWindow(opt_doc?: Document | undefined): Window {
        // TODO(arv): This should not take an argument.
        return opt_doc ? goog.dom.getWindow_(opt_doc) : window;
    };


    /**
     * Helper for {@code getWindow}.
     *
     * @param {!Document} doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     * @private
     */
    export function getWindow_(doc: Document): Window {
        return /** @type {!Window} */ ((<any>doc).parentWindow || doc.defaultView);
    };


    /**
     * Returns a dom node with a set of attributes.  This function accepts varargs
     * for subsequent nodes to be added.  Subsequent nodes will be added to the
     * first node as childNodes.
     *
     * So:
     * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
     * createDom(goog.dom.TagName.P));</code> would return a div with two child
     * paragraphs
     *
     * For passing properties, please see {@link goog.dom.setProperties} for more
     * information.
     *
     * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
     * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
     *     of name-value pairs for attributes. If a string, then this is the
     *     className of the new element. If an array, the elements will be joined
     *     together as the className of the new element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array or NodeList,
     *     its elements will be added as childNodes instead.
     * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
     *     is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function createDom<T, R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): any {
        return goog.dom.createDom_(document, arguments);
    };


    /**
     * Helper for {@code createDom}.
     * @param {!Document} doc The document to create the DOM in.
     * @param {!Arguments} args Argument object passed from the callers. See
     *     {@code goog.dom.createDom} for details.
     * @return {!Element} Reference to a DOM node.
     * @private
     */
    export function createDom_(doc: Document, args: Arguments): Element {
        var tagName = String(args[0]);
        var attributes = args[1];
        // Internet Explorer is dumb:
        // name: https://msdn.microsoft.com/en-us/library/ms534184(v=vs.85).aspx
        // type: https://msdn.microsoft.com/en-us/library/ms534700(v=vs.85).aspx
        // Also does not allow setting of 'type' attribute on 'input' or 'button'.
        if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes &&
            (attributes.name || attributes.type)) {
            var tagNameArr = ['<', tagName];
            if (attributes.name) {
                tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"');
            }
            if (attributes.type) {
                tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
                // Clone attributes map to remove 'type' without mutating the input.
                var clone = {};
                goog.object.extend(clone, attributes);
                // JSCompiler can't see how goog.object.extend added this property,
                // because it was essentially added by reflection.
                // So it needs to be quoted.
                delete clone['type'];
                attributes = clone;
            }
            tagNameArr.push('>');
            tagName = tagNameArr.join('');
        }
        var element = doc.createElement(tagName);
        if (attributes) {
            if (goog.isString(attributes)) {
                element.className = attributes;
            }
            else if (goog.isArray(attributes)) {
                element.className = attributes.join(' ');
            }
            else {
                goog.dom.setProperties(element, attributes);
            }
        }
        if (args.length > 2) {
            goog.dom.append_(doc, element, args, 2);
        }
        return element;
    };


    /**
     * Appends a node with text or other nodes.
     * @param {!Document} doc The document to create new nodes in.
     * @param {!Node} parent The node to append nodes to.
     * @param {!Arguments} args The values to add. See {@code goog.dom.append}.
     * @param {number} startIndex The index of the array to start from.
     * @private
     */
    export function append_(doc: Document, parent: Node, args: Arguments, startIndex: number) {
        function childHandler(child) {
            // TODO(user): More coercion, ala MochiKit?
            if (child) {
                parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child);
            }
        }
        for (var i = startIndex; i < args.length; i++) {
            var arg = args[i];
            // TODO(attila): Fix isArrayLike to return false for a text node.
            if (goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
                // If the argument is a node list, not a real array, use a clone,
                // because forEach can't be used to mutate a NodeList.
                goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.toArray(arg) : arg, childHandler);
            }
            else {
                childHandler(arg);
            }
        }
    };


    /**
     * Alias for {@code createDom}.
     * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
     * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
     *     of name-value pairs for attributes. If a string, then this is the
     *     className of the new element. If an array, the elements will be joined
     *     together as the className of the new element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array, its
     *     children will be added as childNodes instead.
     * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
     *     is a string or a more specific type if it is a member of
     *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @deprecated Use {@link goog.dom.createDom} instead.
     */
    export function $dom<T,R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): R {
        return goog.dom.createDom(tagName, opt_attributes, var_args);
    }


    /**
     * Creates a new element.
     * @param {string|!goog.dom.TagName<T>} name Tag to create.
     * @return {R} The new element. The return type is {!Element} if name is
     *     a string or a more specific type if it is a member of goog.dom.TagName
     *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function createElement<T, R>(name: string | goog.dom.TagName<T>): R {
        return goog.dom.createElement_(document, name);
    };


    /**
     * Creates a new element.
     * @param {!Document} doc The document to create the element in.
     * @param {string|!goog.dom.TagName<T>} name Tag to create.
     * @return {R} The new element. The return type is {!Element} if name is
     *     a string or a more specific type if it is a member of goog.dom.TagName
     *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     * @private
     */
    export function createElement_<T, R>(doc: Document, name: string | goog.dom.TagName<T>): any {
        return doc.createElement(String(name));
    };


    /**
     * Creates a new text node.
     * @param {number|string} content Content.
     * @return {!Text} The new text node.
     */
    export function createTextNode(content: number | string): Text {
        return document.createTextNode(String(content));
    };


    /**
     * Create a table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
     *     {@code goog.string.Unicode.NBSP} characters.
     * @return {!Element} The created table.
     */
    export function createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): Element {
        // TODO(mlourenco): Return HTMLTableElement, also in prototype function.
        // Callers need to be updated to e.g. not assign numbers to table.cellSpacing.
        return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp);
    };


    /**
     * Create a table.
     * @param {!Document} doc Document object to use to create the table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean} fillWithNbsp If true, fills table entries with
     *     {@code goog.string.Unicode.NBSP} characters.
     * @return {!HTMLTableElement} The created table.
     * @private
     */
    export function createTable_(doc: Document, rows: number, columns: number, fillWithNbsp: boolean): HTMLTableElement {
        var table = goog.dom.createElement_(doc, goog.dom.TagName.TABLE);
        var tbody = table.appendChild(goog.dom.createElement_(doc, goog.dom.TagName.TBODY));
        for (var i = 0; i < rows; i++) {
            var tr = goog.dom.createElement_(doc, goog.dom.TagName.TR);
            for (var j = 0; j < columns; j++) {
                var td = goog.dom.createElement_(doc, goog.dom.TagName.TD);
                // IE <= 9 will create a text node if we set text content to the empty
                // string, so we avoid doing it unless necessary. This ensures that the
                // same DOM tree is returned on all browsers.
                if (fillWithNbsp) {
                    goog.dom.setTextContent(td, goog.string.Unicode.NBSP);
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        return table;
    };



    /**
     * Creates a new Node from constant strings of HTML markup.
     * @param {...!goog.string.Const} var_args The HTML strings to concatenate then
     *     convert into a node.
     * @return {!Node}
     */
    export function constHtmlToNode(var_args: goog.string.Const[]): Node {
        var stringArray = goog.array.map(arguments, goog.string.Const.unwrap);
        var safeHtml = goog.html.uncheckedconversions
            .safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from('Constant HTML string, that gets turned into a ' +
                'Node later, so it will be automatically balanced.'), stringArray.join(''));
        return goog.dom.safeHtmlToNode(safeHtml);
    };


    /**
     * Converts HTML markup into a node. This is a safe version of
     * {@code goog.dom.htmlToDocumentFragment} which is now deleted.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     */
    export function safeHtmlToNode(html: goog.html.SafeHtml): Node {
        return goog.dom.safeHtmlToNode_(document, html);
    };


    /**
     * Helper for {@code safeHtmlToNode}.
     * @param {!Document} doc The document.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     * @private
     */
    export function safeHtmlToNode_(doc: Document, html: goog.html.SafeHtml): Node {
        var tempDiv = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
        if (goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
            goog.dom.safe.setInnerHtml(tempDiv, goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, html));
            tempDiv.removeChild(tempDiv.firstChild);
        }
        else {
            goog.dom.safe.setInnerHtml(tempDiv, html);
        }
        return goog.dom.childrenToNode_(doc, tempDiv);
    };


    /**
     * Helper for {@code safeHtmlToNode_}.
     * @param {!Document} doc The document.
     * @param {!Node} tempDiv The input node.
     * @return {!Node} The resulting node.
     * @private
     */
    export function childrenToNode_(doc: Document, tempDiv: Node): Node {
        if (tempDiv.childNodes.length == 1) {
            return tempDiv.removeChild(tempDiv.firstChild);
        }
        else {
            var fragment = doc.createDocumentFragment();
            while (tempDiv.firstChild) {
                fragment.appendChild(tempDiv.firstChild);
            }
            return fragment;
        }
    };


    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @return {boolean} True if in CSS1-compatible mode.
     */
    export function isCss1CompatMode(): boolean {
        return goog.dom.isCss1CompatMode_(document);
    };


    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @param {!Document} doc The document to check.
     * @return {boolean} True if in CSS1-compatible mode.
     * @private
     */
    export function isCss1CompatMode_(doc: Document): boolean {
        if (goog.dom.COMPAT_MODE_KNOWN_) {
            return goog.dom.ASSUME_STANDARDS_MODE;
        }
        return doc.compatMode == 'CSS1Compat';
    };


    /**
     * Determines if the given node can contain children, intended to be used for
     * HTML generation.
     *
     * IE natively supports node.canHaveChildren but has inconsistent behavior.
     * Prior to IE8 the base tag allows children and in IE9 all nodes return true
     * for canHaveChildren.
     *
     * In practice all non-IE browsers allow you to add children to any node, but
     * the behavior is inconsistent:
     *
     * <pre>
     *   var a = goog.dom.createElement(goog.dom.TagName.BR);
     *   a.appendChild(document.createTextNode('foo'));
     *   a.appendChild(document.createTextNode('bar'));
     *   console.log(a.childNodes.length);  // 2
     *   console.log(a.innerHTML);  // Chrome: "", IE9: "foobar", FF3.5: "foobar"
     * </pre>
     *
     * For more information, see:
     * http://dev.w3.org/html5/markup/syntax.html#syntax-elements
     *
     * TODO(user): Rename shouldAllowChildren() ?
     *
     * @param {Node} node The node to check.
     * @return {boolean} Whether the node can contain children.
     */
    export function canHaveChildren(node: Node): boolean {
        if (node.nodeType != goog.dom.NodeType.ELEMENT) {
            return false;
        }
        switch ((<Element>node).tagName) {
            case String(goog.dom.TagName.APPLET):
            case String(goog.dom.TagName.AREA):
            case String(goog.dom.TagName.BASE):
            case String(goog.dom.TagName.BR):
            case String(goog.dom.TagName.COL):
            case String(goog.dom.TagName.COMMAND):
            case String(goog.dom.TagName.EMBED):
            case String(goog.dom.TagName.FRAME):
            case String(goog.dom.TagName.HR):
            case String(goog.dom.TagName.IMG):
            case String(goog.dom.TagName.INPUT):
            case String(goog.dom.TagName.IFRAME):
            case String(goog.dom.TagName.ISINDEX):
            case String(goog.dom.TagName.KEYGEN):
            case String(goog.dom.TagName.LINK):
            case String(goog.dom.TagName.NOFRAMES):
            case String(goog.dom.TagName.NOSCRIPT):
            case String(goog.dom.TagName.META):
            case String(goog.dom.TagName.OBJECT):
            case String(goog.dom.TagName.PARAM):
            case String(goog.dom.TagName.SCRIPT):
            case String(goog.dom.TagName.SOURCE):
            case String(goog.dom.TagName.STYLE):
            case String(goog.dom.TagName.TRACK):
            case String(goog.dom.TagName.WBR):
                return false;
        }
        return true;
    };


    /**
     * Appends a child to a node.
     * @param {Node} parent Parent.
     * @param {Node} child Child.
     */
    export function appendChild(parent: Node, child: Node) {
        parent.appendChild(child);
    };


    /**
     * Appends a node with text or other nodes.
     * @param {!Node} parent The node to append nodes to.
     * @param {...goog.dom.Appendable} var_args The things to append to the node.
     *     If this is a Node it is appended as is.
     *     If this is a string then a text node is appended.
     *     If this is an array like object then fields 0 to length - 1 are appended.
     */
    export function append(parent: Node, var_args: goog.dom.Appendable[]) {
        goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1);
    };


    /**
     * Removes all the child nodes on a DOM node.
     * @param {Node} node Node to remove children from.
     */
    export function removeChildren(node: Node) {
        // Note: Iterations over live collections can be slow, this is the fastest
        // we could find. The double parenthesis are used to prevent JsCompiler and
        // strict warnings.
        var child;
        while ((child = node.firstChild)) {
            node.removeChild(child);
        }
    };


    /**
     * Inserts a new node before an existing reference node (i.e. as the previous
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert before.
     */
    export function insertSiblingBefore(newNode: Node, refNode: Node) {
        if (refNode.parentNode) {
            refNode.parentNode.insertBefore(newNode, refNode);
        }
    };


    /**
     * Inserts a new node after an existing reference node (i.e. as the next
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert after.
     */
    export function insertSiblingAfter(newNode: Node, refNode: Node) {
        if (refNode.parentNode) {
            refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
        }
    };


    /**
     * Insert a child at a given index. If index is larger than the number of child
     * nodes that the parent currently has, the node is inserted as the last child
     * node.
     * @param {Element} parent The element into which to insert the child.
     * @param {Node} child The element to insert.
     * @param {number} index The index at which to insert the new child node. Must
     *     not be negative.
     */
    export function insertChildAt(parent: Element, child: Node, index: number) {
        // Note that if the second argument is null, insertBefore
        // will append the child at the end of the list of children.
        parent.insertBefore(child, parent.childNodes[index] || null);
    };


    /**
     * Removes a node from its parent.
     * @param {Node} node The node to remove.
     * @return {Node} The node removed if removed; else, null.
     */
    export function removeNode(node: Node): Node {
        return node && node.parentNode ? node.parentNode.removeChild(node) : null;
    };


    /**
     * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
     * parent.
     * @param {Node} newNode Node to insert.
     * @param {Node} oldNode Node to replace.
     */
    export function replaceNode(newNode: Node, oldNode: Node) {
        var parent = oldNode.parentNode;
        if (parent) {
            parent.replaceChild(newNode, oldNode);
        }
    };


    /**
     * Flattens an element. That is, removes it and replace it with its children.
     * Does nothing if the element is not in the document.
     * @param {Element} element The element to flatten.
     * @return {Element|undefined} The original element, detached from the document
     *     tree, sans children; or undefined, if the element was not in the document
     *     to begin with.
     */
    export function flattenElement(element: Element): Element | undefined {
        var child, parent = element.parentNode;
        if (parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
            // Use IE DOM method (supported by Opera too) if available
            if ((<any>element).removeNode) {
                return /** @type {Element} */ <Element>((<any>element).removeNode(false));
            }
            else {
                // Move all children of the original node up one level.
                while ((child = element.firstChild)) {
                    parent.insertBefore(child, element);
                }
                // Detach the original element.
                return /** @type {Element} */ <Element>(goog.dom.removeNode(element));
            }
        }
    };


    /**
     * Returns an array containing just the element children of the given element.
     * @param {Element} element The element whose element children we want.
     * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
     *     of just the element children of the given element.
     */
    export function getChildren(element: Element): (Array<Element> | NodeList) {
        // We check if the children attribute is supported for child elements
        // since IE8 misuses the attribute by also including comments.
        if (goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE &&
            element.children != undefined) {
            return element.children;
        }
        // Fall back to manually filtering the element's child nodes.
        return goog.array.filter(element.childNodes, function (node) {
            return node.nodeType == goog.dom.NodeType.ELEMENT;
        });
    };


    /**
     * Returns the first child node that is an element.
     * @param {Node} node The node to get the first child element of.
     * @return {Element} The first child node of {@code node} that is an element.
     */
    export function getFirstElementChild(node: Node): Element {
        if (goog.isDef((<Element>node).firstElementChild)) {
            return /** @type {!Element} */ (<Element>node).firstElementChild;
        }
        return goog.dom.getNextElementNode_(node.firstChild, true);
    };


    /**
     * Returns the last child node that is an element.
     * @param {Node} node The node to get the last child element of.
     * @return {Element} The last child node of {@code node} that is an element.
     */
    export function getLastElementChild(node: Node): Element {
        if (goog.isDef((<Element>node).lastElementChild)) {
            return /** @type {!Element} */ (<Element>node).lastElementChild;
        }
        return goog.dom.getNextElementNode_(node.lastChild, false);
    };


    /**
     * Returns the first next sibling that is an element.
     * @param {Node} node The node to get the next sibling element of.
     * @return {Element} The next sibling of {@code node} that is an element.
     */
    export function getNextElementSibling(node: Node): Element {
        if (goog.isDef((<Element>node).nextElementSibling)) {
            return /** @type {!Element} */ (<Element>node).nextElementSibling;
        }
        return goog.dom.getNextElementNode_(node.nextSibling, true);
    };


    /**
     * Returns the first previous sibling that is an element.
     * @param {Node} node The node to get the previous sibling element of.
     * @return {Element} The first previous sibling of {@code node} that is
     *     an element.
     */
    export function getPreviousElementSibling(node: Node): Element {
        if (goog.isDef((<Element>node).previousElementSibling)) {
            return /** @type {!Element} */ (<Element>node).previousElementSibling;
        }
        return goog.dom.getNextElementNode_(node.previousSibling, false);
    };


    /**
     * Returns the first node that is an element in the specified direction,
     * starting with {@code node}.
     * @param {Node} node The node to get the next element from.
     * @param {boolean} forward Whether to look forwards or backwards.
     * @return {Element} The first element.
     * @private
     */
    export function getNextElementNode_(node: Node, forward: boolean): Element {
        while (node && node.nodeType != goog.dom.NodeType.ELEMENT) {
            node = forward ? node.nextSibling : node.previousSibling;
        }
        return /** @type {Element} */ (<Element>node);
    };


    /**
     * Returns the next node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The next node in the DOM tree, or null if this was the last
     *     node.
     */
    export function getNextNode(node: Node): Node {
        if (!node) {
            return null;
        }
        if (node.firstChild) {
            return node.firstChild;
        }
        while (node && !node.nextSibling) {
            node = node.parentNode;
        }
        return node ? node.nextSibling : null;
    };


    /**
     * Returns the previous node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The previous node in the DOM tree, or null if this was the
     *     first node.
     */
    export function getPreviousNode(node: Node): Node {
        if (!node) {
            return null;
        }
        if (!node.previousSibling) {
            return node.parentNode;
        }
        node = node.previousSibling;
        while (node && node.lastChild) {
            node = node.lastChild;
        }
        return node;
    };


    /**
     * Whether the object looks like a DOM node.
     * @param {?} obj The object being tested for node likeness.
     * @return {boolean} Whether the object looks like a DOM node.
     */
    export function isNodeLike(obj: any): boolean {
        return goog.isObject(obj) && obj.nodeType > 0;
    };


    /**
     * Whether the object looks like an Element.
     * @param {?} obj The object being tested for Element likeness.
     * @return {boolean} Whether the object looks like an Element.
     */
    export function isElement(obj: any): boolean {
        return goog.isObject(obj) && obj.nodeType == goog.dom.NodeType.ELEMENT;
    };


    /**
     * Returns true if the specified value is a Window object. This includes the
     * global window for HTML pages, and iframe windows.
     * @param {?} obj Variable to test.
     * @return {boolean} Whether the variable is a window.
     */
    export function isWindow(obj: any): boolean {
        return goog.isObject(obj) && obj['window'] == obj;
    };


    /**
     * Returns an element's parent, if it's an Element.
     * @param {Element} element The DOM element.
     * @return {Element} The parent, or null if not an Element.
     */
    export function getParentElement(element: Element): Element {
        var parent;
        if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY) {
            var isIe9 = goog.userAgent.IE && goog.userAgent.isVersionOrHigher('9') &&
                !goog.userAgent.isVersionOrHigher('10');
            // SVG elements in IE9 can't use the parentElement property.
            // goog.global['SVGElement'] is not defined in IE9 quirks mode.
            if (!(isIe9 && goog.global['SVGElement'] &&
                element instanceof goog.global['SVGElement'])) {
                parent = element.parentElement;
                if (parent) {
                    return parent;
                }
            }
        }
        parent = element.parentNode;
        return goog.dom.isElement(parent) ? /** @type {!Element} */ (parent) : null;
    };


    /**
     * Whether a node contains another node.
     * @param {?Node|undefined} parent The node that should contain the other node.
     * @param {?Node|undefined} descendant The node to test presence of.
     * @return {boolean} Whether the parent node contains the descendent node.
     */
    export function contains(parent: (Node | undefined) | null, descendant: (Node | undefined) | null): boolean {
        if (!parent || !descendant) {
            return false;
        }
        // We use browser specific methods for this if available since it is faster
        // that way.
        // IE DOM
        if (parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
            return parent == descendant || parent.contains(descendant);
        }
        // W3C DOM Level 3
        if (typeof parent.compareDocumentPosition != 'undefined') {
            return parent == descendant ||
                Boolean(parent.compareDocumentPosition(descendant) & 16);
        }
        // W3C DOM Level 1
        while (descendant && parent != descendant) {
            descendant = descendant.parentNode;
        }
        return descendant == parent;
    };


    /**
     * Compares the document order of two nodes, returning 0 if they are the same
     * node, a negative number if node1 is before node2, and a positive number if
     * node2 is before node1.  Note that we compare the order the tags appear in the
     * document so in the tree <b><i>text</i></b> the B node is considered to be
     * before the I node.
     *
     * @param {Node} node1 The first node to compare.
     * @param {Node} node2 The second node to compare.
     * @return {number} 0 if the nodes are the same node, a negative number if node1
     *     is before node2, and a positive number if node2 is before node1.
     */
    export function compareNodeOrder(node1: any, node2: any): number {
        // Fall out quickly for equality.
        if (node1 == node2) {
            return 0;
        }
        // Use compareDocumentPosition where available
        if (node1.compareDocumentPosition) {
            // 4 is the bitmask for FOLLOWS.
            return node1.compareDocumentPosition(node2) & 2 ? 1 : -1;
        }
        // Special case for document nodes on IE 7 and 8.
        if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
            if (node1.nodeType == goog.dom.NodeType.DOCUMENT) {
                return -1;
            }
            if (node2.nodeType == goog.dom.NodeType.DOCUMENT) {
                return 1;
            }
        }
        // Process in IE using sourceIndex - we check to see if the first node has
        // a source index or if its parent has one.
        if ('sourceIndex' in node1 ||
            (node1.parentNode && 'sourceIndex' in node1.parentNode)) {
            var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
            var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
            if (isElement1 && isElement2) {
                return node1.sourceIndex - node2.sourceIndex;
            }
            else {
                var parent1 = node1.parentNode;
                var parent2 = node2.parentNode;
                if (parent1 == parent2) {
                    return goog.dom.compareSiblingOrder_(node1, node2);
                }
                if (!isElement1 && goog.dom.contains(parent1, node2)) {
                    return -1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2);
                }
                if (!isElement2 && goog.dom.contains(parent2, node1)) {
                    return goog.dom.compareParentsDescendantNodeIe_(node2, node1);
                }
                return (isElement1 ? node1.sourceIndex : parent1.sourceIndex) -
                    (isElement2 ? node2.sourceIndex : parent2.sourceIndex);
            }
        }
        // For Safari, we compare ranges.
        var doc = goog.dom.getOwnerDocument(node1);
        var range1, range2;
        range1 = doc.createRange();
        range1.selectNode(node1);
        range1.collapse(true);
        range2 = doc.createRange();
        range2.selectNode(node2);
        range2.collapse(true);
        return range1.compareBoundaryPoints(goog.global['Range'].START_TO_END, range2);
    };


    /**
     * Utility function to compare the position of two nodes, when
     * {@code textNode}'s parent is an ancestor of {@code node}.  If this entry
     * condition is not met, this function will attempt to reference a null object.
     * @param {!Node} textNode The textNode to compare.
     * @param {Node} node The node to compare.
     * @return {number} -1 if node is before textNode, +1 otherwise.
     * @private
     */
    export function compareParentsDescendantNodeIe_(textNode: Node, node: Node): number {
        var parent = textNode.parentNode;
        if (parent == node) {
            // If textNode is a child of node, then node comes first.
            return -1;
        }
        var sibling = node;
        while (sibling.parentNode != parent) {
            sibling = sibling.parentNode;
        }
        return goog.dom.compareSiblingOrder_(sibling, textNode);
    };


    /**
     * Utility function to compare the position of two nodes known to be non-equal
     * siblings.
     * @param {Node} node1 The first node to compare.
     * @param {!Node} node2 The second node to compare.
     * @return {number} -1 if node1 is before node2, +1 otherwise.
     * @private
     */
    export function compareSiblingOrder_(node1: Node, node2: Node): number {
        var s = node2;
        while ((s = s.previousSibling)) {
            if (s == node1) {
                // We just found node1 before node2.
                return -1;
            }
        }
        // Since we didn't find it, node1 must be after node2.
        return 1;
    };


    /**
     * Find the deepest common ancestor of the given nodes.
     * @param {...Node} var_args The nodes to find a common ancestor of.
     * @return {Node} The common ancestor of the nodes, or null if there is none.
     *     null will only be returned if two or more of the nodes are from different
     *     documents.
     */
    export function findCommonAncestor(var_args: Node[]): Node {
        var i, count = arguments.length;
        if (!count) {
            return null;
        }
        else if (count == 1) {
            return arguments[0];
        }
        var paths = [];
        var minLength = Infinity;
        for (i = 0; i < count; i++) {
            // Compute the list of ancestors.
            var ancestors = [];
            var node = arguments[i];
            while (node) {
                ancestors.unshift(node);
                node = node.parentNode;
            }
            // Save the list for comparison.
            paths.push(ancestors);
            minLength = Math.min(minLength, ancestors.length);
        }
        var output = null;
        for (i = 0; i < minLength; i++) {
            var first = paths[0][i];
            for (var j = 1; j < count; j++) {
                if (first != paths[j][i]) {
                    return output;
                }
            }
            output = first;
        }
        return output;
    };


    /**
     * Returns the owner document for a node.
     * @param {Node|Window} node The node to get the document for.
     * @return {!Document} The document owning the node.
     */
    export function getOwnerDocument(node: Node | Window): Document {
        // TODO(nnaze): Update param signature to be non-nullable.
        goog.asserts.assert(node, 'Node cannot be null or undefined.');
        return /** @type {!Document} */ <Document>((<Node>node).nodeType == goog.dom.NodeType.DOCUMENT ? node : (<Node>node).ownerDocument ||
            (<Window>node).document);
    };


    /**
     * Cross-browser function for getting the document element of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {!Document} The frame content document.
     */
    export function getFrameContentDocument(frame: HTMLFrameElement): Document {
        return frame.contentDocument ||
        /** @type {!HTMLFrameElement} */ (frame).contentWindow.document;
    };


    /**
     * Cross-browser function for getting the window of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {Window} The window associated with the given frame, or null if none
     *     exists.
     */
    export function getFrameContentWindow(frame: HTMLFrameElement): Window {
        try {
            return frame.contentWindow ||
                (frame.contentDocument ? goog.dom.getWindow(frame.contentDocument) :
                    null);
        }
        catch (e) {
            // NOTE(user): In IE8, checking the contentWindow or contentDocument
            // properties will throw a "Unspecified Error" exception if the iframe is
            // not inserted in the DOM. If we get this we can be sure that no window
            // exists, so return null.
        }
        return null;
    };


    /**
     * Sets the text content of a node, with cross-browser support.
     * @param {Node} node The node to change the text content of.
     * @param {string|number} text The value that should replace the node's content.
     */
    export function setTextContent(node: Node, text: string | number) {
        goog.asserts.assert(node != null, 'goog.dom.setTextContent expects a non-null value for node');
        if ('textContent' in node) {
            node.textContent = <string>text;
        }
        else if (node.nodeType == goog.dom.NodeType.TEXT) {
        /** @type {!Text} */ (<Text>node).data = String(text);
        }
        else if (node.firstChild && node.firstChild.nodeType == goog.dom.NodeType.TEXT) {
            // If the first child is a text node we just change its data and remove the
            // rest of the children.
            while (node.lastChild != node.firstChild) {
                node.removeChild(node.lastChild);
            }
        /** @type {!Text} */ (<Text>(node.firstChild)).data = String(text);
        }
        else {
            goog.dom.removeChildren(node);
            var doc = goog.dom.getOwnerDocument(node);
            node.appendChild(doc.createTextNode(String(text)));
        }
    };


    /**
     * Gets the outerHTML of a node, which islike innerHTML, except that it
     * actually contains the HTML of the node itself.
     * @param {Element} element The element to get the HTML of.
     * @return {string} The outerHTML of the given element.
     */
    export function getOuterHtml(element: Element): string {
        goog.asserts.assert(element !== null, 'goog.dom.getOuterHtml expects a non-null value for element');
        // IE, Opera and WebKit all have outerHTML.
        if ('outerHTML' in element) {
            return element.outerHTML;
        }
        else {
            var doc = goog.dom.getOwnerDocument(element);
            var div = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
            div.appendChild(element.cloneNode(true));
            return div.innerHTML;
        }
    };


    /**
     * Finds the first descendant node that matches the filter function, using
     * a depth first search. This function offers the most general purpose way
     * of finding a matching element. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.
     * @see goog.dom.query
     *
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @return {Node|undefined} The found node or undefined if none is found.
     */
    export function findNode(root, p) {
    var rv = [];
    var found = goog.dom.findNodes_(root, p, rv, true);
    return found ? rv[0] : undefined;
    };


    /**
     * Finds all the descendant nodes that match the filter function, using a
     * a depth first search. This function offers the most general-purpose way
     * of finding a set of matching elements. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.

    * @param {Node} root The root of the tree to search.
    * @param {function(Node) : boolean} p The filter function.
    * @return {!Array<!Node>} The found nodes or an empty array if none are found.
    */
    export function findNodes(root, p) {
    var rv = [];
    goog.dom.findNodes_(root, p, rv, false);
    return rv;
    };


    /**
     * Finds the first or all the descendant nodes that match the filter function,
     * using a depth first search.
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @param {!Array<!Node>} rv The found nodes are added to this array.
     * @param {boolean} findOne If true we exit after the first found node.
     * @return {boolean} Whether the search is complete or not. True in case findOne
     *     is true and the node is found. False otherwise.
     * @private
     */
    export function findNodes_(root: Node, p: (arg0: Node) => boolean, rv: Array<Node>, findOne: boolean): boolean {
        if (root != null) {
            var child = root.firstChild;
            while (child) {
                if (p(child)) {
                    rv.push(child);
                    if (findOne) {
                        return true;
                    }
                }
                if (goog.dom.findNodes_(child, p, rv, findOne)) {
                    return true;
                }
                child = child.nextSibling;
            }
        }
        return false;
    };


    /**
     * Map of tags whose content to ignore when calculating text length.
     * @private {!Object<string, number>}
     * @const
     */
    export const TAGS_TO_IGNORE_ = {
    'SCRIPT': 1,
    'STYLE': 1,
    'HEAD': 1,
    'IFRAME': 1,
    'OBJECT': 1
    };


    /**
     * Map of tags which have predefined values with regard to whitespace.
     * @private {!Object<string, string>}
     * @const
     */
    export const PREDEFINED_TAG_VALUES_ = {
    'IMG': ' ',
    'BR': '\n'
    };


    /**
     * Returns true if the element has a tab index that allows it to receive
     * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
     * natively support keyboard focus, even if they have no tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a tab index that allows keyboard
     *     focus.
     */
    export function isFocusableTabIndex(element: Element): boolean {
        return goog.dom.hasSpecifiedTabIndex_(element) &&
            goog.dom.isTabIndexFocusable_(element);
    };


    /**
     * Enables or disables keyboard focus support on the element via its tab index.
     * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
     * (or elements that natively support keyboard focus, like form elements) can
     * receive keyboard focus.  See http://go/tabindex for more info.
     * @param {Element} element Element whose tab index is to be changed.
     * @param {boolean} enable Whether to set or remove a tab index on the element
     *     that supports keyboard focus.
     */
    export function setFocusableTabIndex(element: HTMLElement, enable: boolean) {
        if (enable) {
            element.tabIndex = 0;
        }
        else {
            // Set tabIndex to -1 first, then remove it. This is a workaround for
            // Safari (confirmed in version 4 on Windows). When removing the attribute
            // without setting it to -1 first, the element remains keyboard focusable
            // despite not having a tabIndex attribute anymore.
            element.tabIndex = -1;
            element.removeAttribute('tabIndex');
        }
    };


    /**
     * Returns true if the element can be focused, i.e. it has a tab index that
     * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
     * that natively supports keyboard focus.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element allows keyboard focus.
     */
    export function isFocusable(element: Element): boolean {
        var focusable;
        // Some elements can have unspecified tab index and still receive focus.
        if (goog.dom.nativelySupportsFocus_(element)) {
            // Make sure the element is not disabled ...
            focusable = !(<any>element).disabled &&
                // ... and if a tab index is specified, it allows focus.
                (!goog.dom.hasSpecifiedTabIndex_(element) ||
                    goog.dom.isTabIndexFocusable_(element));
        }
        else {
            focusable = goog.dom.isFocusableTabIndex(element);
        }
        // IE requires elements to be visible in order to focus them.
        return focusable && goog.userAgent.IE ?
            goog.dom.hasNonZeroBoundingRect_(/** @type {!HTMLElement} */(<HTMLElement>element)) :
            focusable;
    };


    /**
     * Returns true if the element has a specified tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a specified tab index.
     * @private
     */
    export function hasSpecifiedTabIndex_(element: Element): boolean {
        // IE8 and below don't support hasAttribute(), instead check whether the
        // 'tabindex' attributeNode is specified. Otherwise check hasAttribute().
        if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9')) {
            var attrNode = element.getAttributeNode('tabindex'); // Must be lowercase!
            return goog.isDefAndNotNull(attrNode) && attrNode.specified;
        }
        else {
            return element.hasAttribute('tabindex');
        }
    };


    /**
     * Returns true if the element's tab index allows the element to be focused.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element's tab index allows focus.
     * @private
     */
    export function isTabIndexFocusable_(element: Element): boolean {
        var index = (<HTMLElement>element).tabIndex;
        // NOTE: IE9 puts tabIndex in 16-bit int, e.g. -2 is 65534.
        return goog.isNumber(index) && index >= 0 && index < 32768;
    };


    /**
     * Returns true if the element is focusable even when tabIndex is not set.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element natively supports focus.
     * @private
     */
    export function nativelySupportsFocus_(element: any): boolean {
        return element.tagName == goog.dom.TagName.A ||
            element.tagName == goog.dom.TagName.INPUT ||
            element.tagName == goog.dom.TagName.TEXTAREA ||
            element.tagName == goog.dom.TagName.SELECT ||
            element.tagName == goog.dom.TagName.BUTTON;
    };


    /**
     * Returns true if the element has a bounding rectangle that would be visible
     * (i.e. its width and height are greater than zero).
     * @param {!HTMLElement} element Element to check.
     * @return {boolean} Whether the element has a non-zero bounding rectangle.
     * @private
     */
    export function hasNonZeroBoundingRect_(element: HTMLElement): boolean {
        var rect;
        if (!goog.isFunction(element['getBoundingClientRect']) ||
            // In IE, getBoundingClientRect throws on detached nodes.
            (goog.userAgent.IE && element.parentElement == null)) {
            rect = { 'height': element.offsetHeight, 'width': element.offsetWidth };
        }
        else {
            rect = element.getBoundingClientRect();
        }
        return goog.isDefAndNotNull(rect) && rect.height > 0 && rect.width > 0;
    };


    /**
     * Returns the text content of the current node, without markup and invisible
     * symbols. New lines are stripped and whitespace is collapsed,
     * such that each character would be visible.
     *
     * In browsers that support it, innerText is used.  Other browsers attempt to
     * simulate it via node traversal.  Line breaks are canonicalized in IE.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The text content.
     */
    export function getTextContent(node: Node): string {
        var textContent;
        // Note(arv): IE9, Opera, and Safari 3 support innerText but they include
        // text nodes in script tags. So we revert to use a user agent test here.
        if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && node !== null &&
            ('innerText' in node)) {
            textContent = goog.string.canonicalizeNewlines((<HTMLElement>node).innerText);
            // Unfortunately .innerText() returns text with &shy; symbols
            // We need to filter it out and then remove duplicate whitespaces
        }
        else {
            var buf = [];
            goog.dom.getTextContent_(node, buf, true);
            textContent = buf.join('');
        }
        // Strip &shy; entities. goog.format.insertWordBreaks inserts them in Opera.
        textContent = textContent.replace(/ \xAD /g, ' ').replace(/\xAD/g, '');
        // Strip &#8203; entities. goog.format.insertWordBreaks inserts them in IE8.
        textContent = textContent.replace(/\u200B/g, '');
        // Skip this replacement on old browsers with working innerText, which
        // automatically turns &nbsp; into ' ' and / +/ into ' ' when reading
        // innerText.
        if (!goog.dom.BrowserFeature.CAN_USE_INNER_TEXT) {
            textContent = textContent.replace(/ +/g, ' ');
        }
        if (textContent != ' ') {
            textContent = textContent.replace(/^\s*/, '');
        }
        return textContent;
    };


    /**
     * Returns the text content of the current node, without markup.
     *
     * Unlike {@code getTextContent} this method does not collapse whitespaces
     * or normalize lines breaks.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The raw text content.
     */
    export function getRawTextContent(node: Node): string {
        var buf = [];
        goog.dom.getTextContent_(node, buf, false);
        return buf.join('');
    };


    /**
     * Recursive support function for text content retrieval.
     *
     * @param {Node} node The node from which we are getting content.
     * @param {Array<string>} buf string buffer.
     * @param {boolean} normalizeWhitespace Whether to normalize whitespace.
     * @private
     */
    export function getTextContent_(node: Node, buf: Array<string>, normalizeWhitespace: boolean) {
        if (node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
            // ignore certain tags
        }
        else if (node.nodeType == goog.dom.NodeType.TEXT) {
            if (normalizeWhitespace) {
                buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ''));
            }
            else {
                buf.push(node.nodeValue);
            }
        }
        else if (node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
            buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName]);
        }
        else {
            var child = node.firstChild;
            while (child) {
                goog.dom.getTextContent_(child, buf, normalizeWhitespace);
                child = child.nextSibling;
            }
        }
    };


    /**
     * Returns the text length of the text contained in a node, without markup. This
     * is equivalent to the selection length if the node was selected, or the number
     * of cursor movements to traverse the node. Images & BRs take one space.  New
     * lines are ignored.
     *
     * @param {Node} node The node whose text content length is being calculated.
     * @return {number} The length of {@code node}'s text content.
     */
    export function getNodeTextLength(node: Node): number {
        return goog.dom.getTextContent(node).length;
    };


    /**
     * Returns the text offset of a node relative to one of its ancestors. The text
     * length is the same as the length calculated by goog.dom.getNodeTextLength.
     *
     * @param {Node} node The node whose offset is being calculated.
     * @param {Node=} opt_offsetParent The node relative to which the offset will
     *     be calculated. Defaults to the node's owner document's body.
     * @return {number} The text offset.
     */
    export function getNodeTextOffset(node: Node, opt_offsetParent?: Node | undefined): number {
        var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
        var buf = [];
        while (node && node != root) {
            var cur = node;
            while ((cur = cur.previousSibling)) {
                buf.unshift(goog.dom.getTextContent(cur));
            }
            node = node.parentNode;
        }
        // Trim left to deal with FF cases when there might be line breaks and empty
        // nodes at the front of the text
        return goog.string.trimLeft(buf.join('')).replace(/ +/g, ' ').length;
    };


    /**
     * Returns the node at a given offset in a parent node.  If an object is
     * provided for the optional third parameter, the node and the remainder of the
     * offset will stored as properties of this object.
     * @param {Node} parent The parent node.
     * @param {number} offset The offset into the parent node.
     * @param {Object=} opt_result Object to be used to store the return value. The
     *     return value will be stored in the form {node: Node, remainder: number}
     *     if this object is provided.
     * @return {Node} The node at the given offset.
     */
    export function getNodeAtOffset(parent: Node, offset: number, opt_result?: any): Node {
        var stack = [parent], pos = 0, cur = null;
        while (stack.length > 0 && pos < offset) {
            cur = stack.pop();
            if (cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
                // ignore certain tags
            }
            else if (cur.nodeType == goog.dom.NodeType.TEXT) {
                var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, '').replace(/ +/g, ' ');
                pos += text.length;
            }
            else if (cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
                pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length;
            }
            else {
                for (var i = cur.childNodes.length - 1; i >= 0; i--) {
                    stack.push(cur.childNodes[i]);
                }
            }
        }
        if (goog.isObject(opt_result)) {
            opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
            opt_result.node = cur;
        }
        return cur;
    };


    /**
     * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
     * the object must have a numeric length property and an item function (which
     * has type 'string' on IE for some reason).
     * @param {Object} val Object to test.
     * @return {boolean} Whether the object is a NodeList.
     */
    export function isNodeList(val: {length, item}): boolean {
        // TODO(attila): Now the isNodeList is part of goog.dom we can use
        // goog.userAgent to make this simpler.
        // A NodeList must have a length property of type 'number' on all platforms.
        if (val && typeof val.length == 'number') {
            // A NodeList is an object everywhere except Safari, where it's a function.
            if (goog.isObject(val)) {
                // A NodeList must have an item function (on non-IE platforms) or an item
                // property of type 'string' (on IE).
                return typeof val.item == 'function' || typeof val.item == 'string';
            }
            else if (goog.isFunction(val)) {
                // On Safari, a NodeList is a function with an item property that is also
                // a function.
                return typeof val.item == 'function';
            }
        }
        // Not a NodeList.
        return false;
    };


    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * tag name and/or class name. If the passed element matches the specified
     * criteria, the element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {?(goog.dom.TagName<T>|string)=} opt_tag The tag name to match (or
     *     null/undefined to match only based on class name).
     * @param {?string=} opt_class The class name to match (or null/undefined to
     *     match only based on tag name).
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {?R} The first ancestor that matches the passed criteria, or
     *     null if no match is found. The return type is {?Element} if opt_tag is
     *     not a member of goog.dom.TagName or a more specific type if it is (e.g.
     *     {?HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    export function getAncestorByTagNameAndClass<T>(element: Node, opt_tag?: ((goog.dom.TagName<T> | string) | undefined) | null, opt_class?: (string | undefined) | null, opt_maxSearchSteps?: number | undefined): Element {
        if (!opt_tag && !opt_class) {
            return null;
        }
        var tagName = opt_tag ? String(opt_tag).toUpperCase() : null;
        return /** @type {Element} */ <Element>(goog.dom.getAncestor(element, function (node) {
            return (!tagName || node.nodeName == tagName) &&
                (!opt_class ||
                    goog.isString((<Element>node).className) &&
                    goog.array.contains((<Element>node).className.split(/\s+/), opt_class));
        }, true, opt_maxSearchSteps));
    };


    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * class name. If the passed element matches the specified criteria, the
     * element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {string} className The class name to match.
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {Element} The first ancestor that matches the passed criteria, or
     *     null if none match.
     */
    export function getAncestorByClass(element: Node, className: string, opt_maxSearchSteps?: number | undefined): Element {
        return goog.dom.getAncestorByTagNameAndClass(element, null, className, opt_maxSearchSteps);
    };


    /**
     * Walks up the DOM hierarchy returning the first ancestor that passes the
     * matcher function.
     * @param {Node} element The DOM node to start with.
     * @param {function(Node) : boolean} matcher A function that returns true if the
     *     passed node matches the desired criteria.
     * @param {boolean=} opt_includeNode If true, the node itself is included in
     *     the search (the first call to the matcher will pass startElement as
     *     the node to test).
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {Node} DOM node that matched the matcher, or null if there was
     *     no match.
     */
    export function getAncestor(element: Node, matcher: (arg0: Node) => boolean, opt_includeNode?: boolean | undefined, opt_maxSearchSteps?: number | undefined): Node {
        if (element && !opt_includeNode) {
            element = element.parentNode;
        }
        var steps = 0;
        while (element &&
            (opt_maxSearchSteps == null || steps <= opt_maxSearchSteps)) {
            goog.asserts.assert((<any>element).name != 'parentNode');
            if (matcher(element)) {
                return element;
            }
            element = element.parentNode;
            steps++;
        }
        // Reached the root of the DOM without a match
        return null;
    };


    /**
     * Determines the active element in the given document.
     * @param {Document} doc The document to look in.
     * @return {Element} The active element.
     */
    export function getActiveElement(doc: Document): Element {
        try {
            return doc && doc.activeElement;
        }
        catch (e) {
            // NOTE(nicksantos): Sometimes, evaluating document.activeElement in IE
            // throws an exception. I'm not 100% sure why, but I suspect it chokes
            // on document.activeElement if the activeElement has been recently
            // removed from the DOM by a JS operation.
            //
            // We assume that an exception here simply means
            // "there is no active element."
        }
        return null;
    };


    /**
     * Gives the current devicePixelRatio.
     *
     * By default, this is the value of window.devicePixelRatio (which should be
     * preferred if present).
     *
     * If window.devicePixelRatio is not present, the ratio is calculated with
     * window.matchMedia, if present. Otherwise, gives 1.0.
     *
     * Some browsers (including Chrome) consider the browser zoom level in the pixel
     * ratio, so the value may change across multiple calls.
     *
     * @return {number} The number of actual pixels per virtual pixel.
     */
    export function getPixelRatio(): number {
        var win = goog.dom.getWindow();
        if (goog.isDef(win.devicePixelRatio)) {
            return win.devicePixelRatio;
        }
        else if (win.matchMedia) {
            // Should be for IE10 and FF6-17 (this basically clamps to lower)
            // Note that the order of these statements is important
            return goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) ||
                goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) ||
                .75;
        }
        return 1;
    };


    /**
     * Calculates a mediaQuery to check if the current device supports the
     * given actual to virtual pixel ratio.
     * @param {number} pixelRatio The ratio of actual pixels to virtual pixels.
     * @return {number} pixelRatio if applicable, otherwise 0.
     * @private
     */
    export function matchesPixelRatio_(pixelRatio: number): number {
        var win = goog.dom.getWindow();
        /**
         * Due to the 1:96 fixed ratio of CSS in to CSS px, 1dppx is equivalent to
         * 96dpi.
         * @const {number}
         */
        var dpiPerDppx = 96;
        var query =
            // FF16-17
            '(min-resolution: ' + pixelRatio + 'dppx),' +
            // FF6-15
            '(min--moz-device-pixel-ratio: ' + pixelRatio + '),' +
            // IE10 (this works for the two browsers above too but I don't want to
            // trust the 1:96 fixed ratio magic)
            '(min-resolution: ' + (pixelRatio * dpiPerDppx) + 'dpi)';
        return win.matchMedia(query).matches ? pixelRatio : 0;
    };


    /**
     * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
     * type information.
     * @param {!HTMLCanvasElement} canvas
     * @return {!CanvasRenderingContext2D}
     */
    export function getCanvasContext2D(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
        return /** @type {!CanvasRenderingContext2D} */ (canvas.getContext('2d'));
    };









































    /**
     * Typedef for use with goog.dom.createDom and goog.dom.append.
     * @typedef {Object|string|Array|NodeList}
     */
    export type Appendable = Object|string|Array<string>|NodeList;
    export class DomHelper {
        private document_: Document;
        /**
         * Create an instance of a DOM helper with a new document object.
         * @param {Document=} opt_document Document object to associate with this
         *     DOM helper.
         * @constructor
         */
        constructor(opt_document?: Document){
            /**
             * Reference to the document object to use
             * @type {!Document}
             * @private
             */
            this.document_ = opt_document || goog.global.document || document;
        }

        /**
         * Gets the dom helper object for the document where the element resides.
         * @param {Node=} opt_node If present, gets the DomHelper for this node.
         * @return {!goog.dom.DomHelper} The DomHelper.
         */
        public getDomHelper(opt_element?:Node|Window){
            return goog.dom.getDomHelper(opt_element);
        }

        /**
         * Sets the document object.
         * @param {!Document} document Document object.
         */
        public setDocument(document: Document) {
            this.document_ = document;
        };
        
        
        /**
         * Gets the document object being used by the dom library.
         * @return {!Document} Document object.
         */
        public getDocument(): Document {
            return this.document_;
        };
        
        
        /**
         * Alias for {@code getElementById}. If a DOM node is passed in then we just
         * return that.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         */
        public getElement(element: string | Element): Element {
            return goog.dom.getElementHelper_(this.document_, element);
        };
        
        
        /**
         * Gets an element by id, asserting that the element is found.
         *
         * This is used when an element is expected to exist, and should fail with
         * an assertion error if it does not (if assertions are enabled).
         *
         * @param {string} id Element ID.
         * @return {!Element} The element with the given ID, if it exists.
         */
        public getRequiredElement(id: string): Element {
            return goog.dom.getRequiredElementHelper_(this.document_, id);
        };

        /**
         * Alias for {@code getElement}.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         * @deprecated Use {@link goog.dom.DomHelper.prototype.getElement} instead.
         */
        public $(element: string | Element): Element {
            return this.getElement(element);
        }

        /**
         * Gets elements by tag name.
         * @param {!goog.dom.TagName<T>} tagName
         * @param {(!Document|!Element)=} opt_parent Parent element or document where to
         *     look for elements. Defaults to document of this DomHelper.
         * @return {!NodeList<R>} List of elements. The members of the list are
         *     {!Element} if tagName is not a member of goog.dom.TagName or more
         *     specific types if it is (e.g. {!HTMLAnchorElement} for
         *     goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        public getElementsByTagName (tagName, opt_parent?) {
        var parent = opt_parent || this.document_;
        return parent.getElementsByTagName(String(tagName));
        };


        /**
        * Looks up elements by both tag and class name, using browser native functions
        * ({@code querySelectorAll}, {@code getElementsByTagName} or
        * {@code getElementsByClassName}) where possible. The returned array is a live
        * NodeList or a static list depending on the code path taken.
        *
        * @see goog.dom.query
        *
        * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name or * for all
        *     tags.
        * @param {?string=} opt_class Optional class name.
        * @param {(Document|Element)=} opt_el Optional element to look in.
        * @return {!IArrayLike<R>} Array-like list of elements (only a length property
        *     and numerical indices are guaranteed to exist). The members of the array
        *     are {!Element} if opt_tag is not a member of goog.dom.TagName or more
        *     specific types if it is (e.g. {!HTMLAnchorElement} for
        *     goog.dom.TagName.A).
        * @template T
        * @template R := cond(isUnknown(T), 'Element', T) =:
        */
        public getElementsByTagNameAndClass(
        opt_tag?, opt_class?, opt_el?) {
        return goog.dom.getElementsByTagNameAndClass_(
        this.document_, opt_tag, opt_class, opt_el);
        };


        /**
        * Gets the first element matching the tag and the class.
        *
        * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
        * @param {?string=} opt_class Optional class name.
        * @param {(Document|Element)=} opt_el Optional element to look in.
        * @return {?R} Reference to a DOM node. The return type is {?Element} if
        *     tagName is a string or a more specific type if it is a member of
        *     goog.dom.TagName (e.g. {?HTMLAnchorElement} for goog.dom.TagName.A).
        * @template T
        * @template R := cond(isUnknown(T), 'Element', T) =:
        */
        public getElementByTagNameAndClass(
        opt_tag?, opt_class?, opt_el?) {
        return goog.dom.getElementByTagNameAndClass_(
        this.document_, opt_tag, opt_class, opt_el);
        };


        /**
        * Returns an array of all the elements with the provided className.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {Element|Document=} opt_el Optional element to look in.
        * @return {!IArrayLike<!Element>} The items found with the class name provided.
        */
        public getElementsByClass(className, opt_el?) {
        var doc = opt_el || this.document_;
        return goog.dom.getElementsByClass(className, doc);
        };


        /**
        * Returns the first element we find matching the provided class name.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {(Element|Document)=} opt_el Optional element to look in.
        * @return {Element} The first item found with the class name provided.
        */
        public getElementByClass(className, opt_el?) {
        var doc = opt_el || this.document_;
        return goog.dom.getElementByClass(className, doc);
        };


        /**
        * Ensures an element with the given className exists, and then returns the
        * first element with the provided className.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {(!Element|!Document)=} opt_root Optional element or document to look
        *     in.
        * @return {!Element} The first item found with the class name provided.
        * @throws {goog.asserts.AssertionError} Thrown if no element is found.
        */
        public getRequiredElementByClass(
        className, opt_root?) {
        var root = opt_root || this.document_;
        return goog.dom.getRequiredElementByClass(className, root);
        };

        /**
         * Alias for {@code getElementsByTagNameAndClass}.
         * @deprecated Use DomHelper getElementsByTagNameAndClass.
         * @see goog.dom.query
         *
         * @param {(string|?goog.dom.TagName<T>)=} opt_tag Element tag name.
         * @param {?string=} opt_class Optional class name.
         * @param {Element=} opt_el Optional element to look in.
         * @return {!IArrayLike<R>} Array-like list of elements (only a length property
         *     and numerical indices are guaranteed to exist). The members of the array
         *     are {!Element} if opt_tag is a string or more specific types if it is
         *     a member of goog.dom.TagName (e.g. {!HTMLAnchorElement} for
         *     goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        public $$<T>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el?: Element | undefined): IArrayLike<Element> {
            return this.getElementByTagNameAndClass(opt_tag, opt_class, opt_el);
        }

        /**
         * Sets a number of properties on a node.
         * @param {Element} element DOM node to set properties on.
         * @param {Object} properties Hash of property:value pairs.
         */
        public setProperties(element, properties){
            return goog.dom.setProperties(element, properties);
        }

        /**
         * Gets the dimensions of the viewport.
         * @param {Window=} opt_window Optional window element to test. Defaults to
         *     the window of the Dom Helper.
         * @return {!goog.math.Size} Object with values 'width' and 'height'.
         */
        public getViewportSize(opt_window?: Window | undefined): goog.math.Size {
            // TODO(arv): This should not take an argument. That breaks the rule of a
            // a DomHelper representing a single frame/window/document.
            return goog.dom.getViewportSize(opt_window || this.getWindow());
        };
        
        
        /**
         * Calculates the height of the document.
         *
         * @return {number} The height of the document.
         */
        public getDocumentHeight(): number {
            return goog.dom.getDocumentHeight_(this.getWindow());
        };


        /**
         * Returns a dom node with a set of attributes.  This function accepts varargs
         * for subsequent nodes to be added.  Subsequent nodes will be added to the
         * first node as childNodes.
         *
         * So:
         * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
         * createDom(goog.dom.TagName.P));</code> would return a div with two child
         * paragraphs
         *
         * An easy way to move all child nodes of an existing element to a new parent
         * element is:
         * <code>createDom(goog.dom.TagName.DIV, null, oldElement.childNodes);</code>
         * which will remove all child nodes from the old element and add them as
         * child nodes of the new DIV.
         *
         * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
         * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
         *     of name-value pairs for attributes. If a string, then this is the
         *     className of the new element. If an array, the elements will be joined
         *     together as the className of the new element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or
         *     strings for text nodes. If one of the var_args is an array or
         *     NodeList, its elements will be added as childNodes instead.
         * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
         *     is a string or a more specific type if it is a member of
         *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        public createDom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element {
            return goog.dom.createDom_(this.document_, arguments);
        };


        /**
         * Alias for {@code createDom}.
         * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
         * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
         *     of name-value pairs for attributes. If a string, then this is the
         *     className of the new element. If an array, the elements will be joined
         *     together as the className of the new element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or strings for
         *     text nodes.  If one of the var_args is an array, its children will be
         *     added as childNodes instead.
         * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
         *     is a string or a more specific type if it is a member of
         *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         * @deprecated Use {@link goog.dom.DomHelper.prototype.createDom} instead.
         */
        public $dom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element {
            return this.createDom<T>(tagName, opt_attributes, var_args);
        };


        /**
         * Creates a new element.
         * @param {string|!goog.dom.TagName<T>} name Tag to create.
         * @return {R} The new element. The return type is {!Element} if name is
         *     a string or a more specific type if it is a member of goog.dom.TagName
         *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        public createElement<T>(name: string | goog.dom.TagName<T>): Element {
            return goog.dom.createElement_(this.document_, name);
        };


        /**
         * Creates a new text node.
         * @param {number|string} content Content.
         * @return {!Text} The new text node.
         */
        public createTextNode(content: number | string): Text {
            return this.document_.createTextNode(String(content));
        };


        /**
         * Create a table.
         * @param {number} rows The number of rows in the table.  Must be >= 1.
         * @param {number} columns The number of columns in the table.  Must be >= 1.
         * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
         *     {@code goog.string.Unicode.NBSP} characters.
         * @return {!HTMLElement} The created table.
         */
        public createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): HTMLElement {
            return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp);
        };


        /**
         * Converts an HTML into a node or a document fragment. A single Node is used if
         * {@code html} only generates a single node. If {@code html} generates multiple
         * nodes then these are put inside a {@code DocumentFragment}. This is a safe
         * version of {@code goog.dom.DomHelper#htmlToDocumentFragment} which is now
         * deleted.
         * @param {!goog.html.SafeHtml} html The HTML markup to convert.
         * @return {!Node} The resulting node.
         */
        public safeHtmlToNode(html: goog.html.SafeHtml): Node {
            return goog.dom.safeHtmlToNode_(this.document_, html);
        };


        /**
         * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
         * mode, false otherwise.
         * @return {boolean} True if in CSS1-compatible mode.
         */
        public isCss1CompatMode(): boolean {
            return goog.dom.isCss1CompatMode_(this.document_);
        };


        /**
         * Gets the window object associated with the document.
         * @return {!Window} The window associated with the given document.
         */
        public getWindow(): Window {
            return goog.dom.getWindow_(this.document_);
        };


        /**
         * Gets the document scroll element.
         * @return {!Element} Scrolling element.
         */
        public getDocumentScrollElement(): Element {
            return goog.dom.getDocumentScrollElement_(this.document_);
        };


        /**
         * Gets the document scroll distance as a coordinate object.
         * @return {!goog.math.Coordinate} Object with properties 'x' and 'y'.
         */
        public getDocumentScroll(): goog.math.Coordinate {
            return goog.dom.getDocumentScroll_(this.document_);
        };


        /**
         * Determines the active element in the given document.
         * @param {Document=} opt_doc The document to look in.
         * @return {Element} The active element.
         */
        public getActiveElement(opt_doc?: Document | undefined): Element {
            return goog.dom.getActiveElement(opt_doc || this.document_);
        };


        /**
         * Appends a child to a node.
         * @param {Node} parent Parent.
         * @param {Node} child Child.
         */
        public appendChild(parent: Node, child: Node) {
            return goog.dom.appendChild(parent, child);
        };


        /**
         * Appends a node with text or other nodes.
         * @param {!Node} parent The node to append nodes to.
         * @param {...goog.dom.Appendable} var_args The things to append to the node.
         *     If this is a Node it is appended as is.
         *     If this is a string then a text node is appended.
         *     If this is an array like object then fields 0 to length - 1 are appended.
         */
        public append(parent: Node, var_args: goog.dom.Appendable[]) {
            goog.dom.append(parent,var_args);
        }


        /**
         * Determines if the given node can contain children, intended to be used for
         * HTML generation.
         *
         * @param {Node} node The node to check.
         * @return {boolean} Whether the node can contain children.
         */
        public canHaveChildren(node: Node): boolean {
            return goog.dom.canHaveChildren(node);
        };


        /**
         * Removes all the child nodes on a DOM node.
         * @param {Node} node Node to remove children from.
         */
        public removeChildren(node: Node) {
            return goog.dom.removeChildren(node);
        };


        /**
         * Inserts a new node before an existing reference node (i.e., as the previous
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert before.
         */
        public insertSiblingBefore(newNode: Node, refNode: Node) {
            return goog.dom.insertSiblingBefore(newNode, refNode);
        }


        /**
         * Inserts a new node after an existing reference node (i.e., as the next
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert after.
         */
        public insertSiblingAfter(newNode: Node, refNode: Node) {
            return goog.dom.insertSiblingAfter(newNode, refNode);
        }


        /**
         * Insert a child at a given index. If index is larger than the number of child
         * nodes that the parent currently has, the node is inserted as the last child
         * node.
         * @param {Element} parent The element into which to insert the child.
         * @param {Node} child The element to insert.
         * @param {number} index The index at which to insert the new child node. Must
         *     not be negative.
         */
        public insertChildAt(parent: Element, child: Node, index: number) {
            return goog.dom.insertChildAt(parent, child, index);
        }


        /**
         * Removes a node from its parent.
         * @param {Node} node The node to remove.
         * @return {Node} The node removed if removed; else, null.
         */
        public removeNode(node: Node): Node {
            return goog.dom.removeNode(node);
        }


        /**
         * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
         * parent.
         * @param {Node} newNode Node to insert.
         * @param {Node} oldNode Node to replace.
         */
        public replaceNode(newNode: Node, oldNode: Node) {
            return goog.dom.replaceNode(newNode, oldNode);
        }


        /**
         * Flattens an element. That is, removes it and replace it with its children.
         * @param {Element} element The element to flatten.
         * @return {Element|undefined} The original element, detached from the document
         *     tree, sans children, or undefined if the element was already not in the
         *     document.
         */
        public flattenElement(element: Element): Element | undefined {
            return goog.dom.flattenElement(element);
        }


        /**
         * Returns an array containing just the element children of the given element.
         * @param {Element} element The element whose element children we want.
         * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
         *     of just the element children of the given element.
         */
        public getChildren(element: Element): (Array<Element> | NodeList) {
            return goog.dom.getChildren(element);
        }


        /**
         * Returns the first child node that is an element.
         * @param {Node} node The node to get the first child element of.
         * @return {Element} The first child node of {@code node} that is an element.
         */
        public getFirstElementChild(node: Node): Element {
            return goog.dom.getFirstElementChild(node);
        }


        /**
         * Returns the last child node that is an element.
         * @param {Node} node The node to get the last child element of.
         * @return {Element} The last child node of {@code node} that is an element.
         */
        public getLastElementChild(node: Node): Element {
            return goog.dom.getLastElementChild(node);
        }


        /**
         * Returns the first next sibling that is an element.
         * @param {Node} node The node to get the next sibling element of.
         * @return {Element} The next sibling of {@code node} that is an element.
         */
        public getNextElementSibling(node: Node): Element {
            return goog.dom.getNextElementSibling(node);
        }


        /**
         * Returns the first previous sibling that is an element.
         * @param {Node} node The node to get the previous sibling element of.
         * @return {Element} The first previous sibling of {@code node} that is
         *     an element.
         */
        public getPreviousElementSibling(node){
            return goog.dom.getPreviousElementSibling(node);
        }


        /**
         * Returns the next node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The next node in the DOM tree, or null if this was the last
         *     node.
         */
        public getNextNode(node: Node): Node {
            return goog.dom.getNextNode(node);
        }


        /**
         * Returns the previous node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The previous node in the DOM tree, or null if this was the
         *     first node.
         */
        public getPreviousNode() {

        return goog.dom.getPreviousNode;}


        /**
         * Whether the object looks like a DOM node.
         * @param {?} obj The object being tested for node likeness.
         * @return {boolean} Whether the object looks like a DOM node.
         */
        public isNodeLike() {

        return goog.dom.isNodeLike;}


        /**
         * Whether the object looks like an Element.
         * @param {?} obj The object being tested for Element likeness.
         * @return {boolean} Whether the object looks like an Element.
         */
        public isElement() {

        return goog.dom.isElement;}


        /**
         * Returns true if the specified value is a Window object. This includes the
         * global window for HTML pages, and iframe windows.
         * @param {?} obj Variable to test.
         * @return {boolean} Whether the variable is a window.
         */
        public isWindow() {

        return goog.dom.isWindow;
        }

        /**
         * Returns an element's parent, if it's an Element.
         * @param {Element} element The DOM element.
         * @return {Element} The parent, or null if not an Element.
         */
        public getParentElement() {

        return goog.dom.getParentElement;}


        /**
         * Whether a node contains another node.
         * @param {Node} parent The node that should contain the other node.
         * @param {Node} descendant The node to test presence of.
         * @return {boolean} Whether the parent node contains the descendent node.
         */
        public contains() {

        return goog.dom.contains;}


        /**
         * Compares the document order of two nodes, returning 0 if they are the same
         * node, a negative number if node1 is before node2, and a positive number if
         * node2 is before node1.  Note that we compare the order the tags appear in the
         * document so in the tree <b><i>text</i></b> the B node is considered to be
         * before the I node.
         *
         * @param {Node} node1 The first node to compare.
         * @param {Node} node2 The second node to compare.
         * @return {number} 0 if the nodes are the same node, a negative number if node1
         *     is before node2, and a positive number if node2 is before node1.
         */
        public compareNodeOrder() {

        return goog.dom.compareNodeOrder;}


        /**
         * Find the deepest common ancestor of the given nodes.
         * @param {...Node} var_args The nodes to find a common ancestor of.
         * @return {Node} The common ancestor of the nodes, or null if there is none.
         *     null will only be returned if two or more of the nodes are from different
         *     documents.
         */
        public findCommonAncestor() {

        return goog.dom.findCommonAncestor;}


        /**
         * Returns the owner document for a node.
         * @param {Node} node The node to get the document for.
         * @return {!Document} The document owning the node.
         */
        public getOwnerDocument() {

        return goog.dom.getOwnerDocument;}


        /**
         * Cross browser function for getting the document element of an iframe.
         * @param {Element} iframe Iframe element.
         * @return {!Document} The frame content document.
         */
        public getFrameContentDocument =
            goog.dom.getFrameContentDocument;


        /**
         * Cross browser function for getting the window of a frame or iframe.
         * @param {Element} frame Frame element.
         * @return {Window} The window associated with the given frame.
         */
        public getFrameContentWindow =
            goog.dom.getFrameContentWindow;


        /**
         * Sets the text content of a node, with cross-browser support.
         * @param {Node} node The node to change the text content of.
         * @param {string|number} text The value that should replace the node's content.
         */
        public setTextContent() {

        return goog.dom.setTextContent;}


        /**
         * Gets the outerHTML of a node, which islike innerHTML, except that it
         * actually contains the HTML of the node itself.
         * @param {Element} element The element to get the HTML of.
         * @return {string} The outerHTML of the given element.
         */
        public getOuterHtml() {

        return goog.dom.getOuterHtml;}


        /**
         * Finds the first descendant node that matches the filter function. This does
         * a depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Node|undefined} The found node or undefined if none is found.
         */
        public findNode() {

        return goog.dom.findNode;}


        /**
         * Finds all the descendant nodes that matches the filter function. This does a
         * depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Array<Node>} The found nodes or an empty array if none are found.
         */
        public findNodes() {

        return goog.dom.findNodes;}


        /**
         * Returns true if the element has a tab index that allows it to receive
         * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
         * natively support keyboard focus, even if they have no tab index.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element has a tab index that allows keyboard
         *     focus.
         */
        public isFocusableTabIndex() {

        return goog.dom.isFocusableTabIndex;}


        /**
         * Enables or disables keyboard focus support on the element via its tab index.
         * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
         * (or elements that natively support keyboard focus, like form elements) can
         * receive keyboard focus.  See http://go/tabindex for more info.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to set or remove a tab index on the element
         *     that supports keyboard focus.
         */
        public setFocusableTabIndex =
            goog.dom.setFocusableTabIndex;


        /**
         * Returns true if the element can be focused, i.e. it has a tab index that
         * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
         * that natively supports keyboard focus.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element allows keyboard focus.
         */
        public isFocusable() {

        return goog.dom.isFocusable;}


        /**
         * Returns the text contents of the current node, without markup. New lines are
         * stripped and whitespace is collapsed, such that each character would be
         * visible.
         *
         * In browsers that support it, innerText is used.  Other browsers attempt to
         * simulate it via node traversal.  Line breaks are canonicalized in IE.
         *
         * @param {Node} node The node from which we are getting content.
         * @return {string} The text content.
         */
        public getTextContent() {

        return goog.dom.getTextContent;}


        /**
         * Returns the text length of the text contained in a node, without markup. This
         * is equivalent to the selection length if the node was selected, or the number
         * of cursor movements to traverse the node. Images & BRs take one space.  New
         * lines are ignored.
         *
         * @param {Node} node The node whose text content length is being calculated.
         * @return {number} The length of {@code node}'s text content.
         */
        public getNodeTextLength() {

        return goog.dom.getNodeTextLength;}


        /**
         * Returns the text offset of a node relative to one of its ancestors. The text
         * length is the same as the length calculated by
         * {@code goog.dom.getNodeTextLength}.
         *
         * @param {Node} node The node whose offset is being calculated.
         * @param {Node=} opt_offsetParent Defaults to the node's owner document's body.
         * @return {number} The text offset.
         */
        public getNodeTextOffset() {

        return goog.dom.getNodeTextOffset;}


        /**
         * Returns the node at a given offset in a parent node.  If an object is
         * provided for the optional third parameter, the node and the remainder of the
         * offset will stored as properties of this object.
         * @param {Node} parent The parent node.
         * @param {number} offset The offset into the parent node.
         * @param {Object=} opt_result Object to be used to store the return value. The
         *     return value will be stored in the form {node: Node, remainder: number}
         *     if this object is provided.
         * @return {Node} The node at the given offset.
         */
        public getNodeAtOffset() {

        return goog.dom.getNodeAtOffset;}


        /**
         * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
         * the object must have a numeric length property and an item function (which
         * has type 'string' on IE for some reason).
         * @param {Object} val Object to test.
         * @return {boolean} Whether the object is a NodeList.
         */
        public isNodeList() {

        return goog.dom.isNodeList;}


        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * tag name and/or class name. If the passed element matches the specified
         * criteria, the element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {?(goog.dom.TagName<T>|string)=} opt_tag The tag name to match (or
         *     null/undefined to match only based on class name).
         * @param {?string=} opt_class The class name to match (or null/undefined to
         *     match only based on tag name).
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {?R} The first ancestor that matches the passed criteria, or
         *     null if no match is found. The return type is {?Element} if opt_tag is
         *     not a member of goog.dom.TagName or a more specific type if it is (e.g.
         *     {?HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        public getAncestorByTagNameAndClass =
            goog.dom.getAncestorByTagNameAndClass;


        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * class name. If the passed element matches the specified criteria, the
         * element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {string} class The class name to match.
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {Element} The first ancestor that matches the passed criteria, or
         *     null if none match.
         */
        public getAncestorByClass() {

        return goog.dom.getAncestorByClass;}


        /**
         * Walks up the DOM hierarchy returning the first ancestor that passes the
         * matcher function.
         * @param {Node} element The DOM node to start with.
         * @param {function(Node) : boolean} matcher A function that returns true if the
         *     passed node matches the desired criteria.
         * @param {boolean=} opt_includeNode If true, the node itself is included in
         *     the search (the first call to the matcher will pass startElement as
         *     the node to test).
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {Node} DOM node that matched the matcher, or null if there was
         *     no match.
         */
        public getAncestor() {

        return goog.dom.getAncestor;}


        /**
         * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
         * type information.
         * @param {!HTMLCanvasElement} canvas
         * @return {!CanvasRenderingContext2D}
         */
        public getCanvasContext2D() {

        return goog.dom.getCanvasContext2D;}


    }
}