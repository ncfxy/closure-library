// Copyright 2017 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.dom.asserts');

goog.require('goog.asserts');

namespace goog.dom.asserts{

  /**
   * @fileoverview Custom assertions to ensure that an element has the appropriate
   * type.
   *
   * Using a goog.dom.safe wrapper on an object on the incorrect type (via an
   * incorrect static type cast) can result in security bugs: For instance,
   * g.d.s.setAnchorHref ensures that the URL assigned to the .href attribute
   * satisfies the SafeUrl contract, i.e., is safe to dereference as a hyperlink.
   * However, the value assigned to a HTMLLinkElement's .href property requires
   * the stronger TrustedResourceUrl contract, since it can refer to a stylesheet.
   * Thus, using g.d.s.setAnchorHref on an (incorrectly statically typed) object
   * of type HTMLLinkElement can result in a security vulnerability.
   * Assertions of the correct run-time type help prevent such incorrect use.
   *
   * In some cases, code using the DOM API is tested using mock objects (e.g., a
   * plain object such as {'href': url} instead of an actual Location object).
   * To allow such mocking, the assertions permit objects of types that are not
   * relevant DOM API objects at all (for instance, not Element or Location).
   *
   * Note that instanceof checks don't work straightforwardly in older versions of
   * IE, or across frames (see,
   * http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object,
   * http://stackoverflow.com/questions/26248599/instanceof-htmlelement-in-iframe-is-not-element-or-object).
   *
   * Hence, these assertions may pass vacuously in such scenarios. The resulting
   * risk of security bugs is limited by the following factors:
   *  - A bug can only arise in scenarios involving incorrect static typing (the
   *    wrapper methods are statically typed to demand objects of the appropriate,
   *    precise type).
   *  - Typically, code is tested and exercised in multiple browsers.
   */

  /**
   * Asserts that a given object is a Location.
   *
   * To permit this assertion to pass in the context of tests where DOM APIs might
   * be mocked, also accepts any other type except for subtypes of {!Element}.
   * This is to ensure that, for instance, HTMLLinkElement is not being used in
   * place of a Location, since this could result in security bugs due to stronger
   * contracts required for assignments to the href property of the latter.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!Location}
   */
  export function assertIsLocation(o: object | null): Location {
    if (goog.asserts.ENABLE_ASSERTS) {
      var win = goog.dom.asserts.getWindow_(o);
      if (typeof win.Location != 'undefined' &&
        typeof win.Element != 'undefined') {
        goog.asserts.assert(o && (o instanceof win.Location || !(o instanceof win.Element)), 'Argument is not a Location (or a non-Element mock); got: %s', goog.dom.asserts.debugStringForType_(o));
      }
    }
    return /** @type {!Location} */ <Location>(o);
  };


  /**
   * Asserts that a given object is either the given subtype of Element
   * or a non-Element, non-Location Mock.
   *
   * To permit this assertion to pass in the context of tests where DOM
   * APIs might be mocked, also accepts any other type except for
   * subtypes of {!Element}.  This is to ensure that, for instance,
   * HTMLScriptElement is not being used in place of a HTMLImageElement,
   * since this could result in security bugs due to stronger contracts
   * required for assignments to the src property of the latter.
   *
   * The DOM type is looked up in the window the object belongs to.  In
   * some contexts, this might not be possible (e.g. when running tests
   * outside a browser, cross-domain lookup). In this case, the
   * assertions are skipped.
   *
   * @param {?Object} o The object whose type to assert.
   * @param {string} typename The name of the DOM type.
   * @return {!Element} The object.
   * @private
   */
  // TODO(bangert): Make an analog of goog.dom.TagName to correctly handle casts?
  export function assertIsElementType_(o: object | null, typename: string): Element {
    if (goog.asserts.ENABLE_ASSERTS) {
      var win = goog.dom.asserts.getWindow_(o);
      if (typeof win[typename] != 'undefined' &&
        typeof win.Location != 'undefined' &&
        typeof win.Element != 'undefined') {
        goog.asserts.assert(o &&
          (o instanceof win[typename] ||
            !((o instanceof win.Location) || (o instanceof win.Element))), 'Argument is not a %s (or a non-Element, non-Location mock); got: %s', typename, goog.dom.asserts.debugStringForType_(o));
      }
    }
    return /** @type {!Element} */ <Element>(o);
  };

  /**
   * Asserts that a given object is a HTMLAnchorElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not of type Location nor a subtype
   * of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLAnchorElement}
   */
  export function assertIsHTMLAnchorElement(o: object | null): HTMLAnchorElement {
    return /** @type {!HTMLAnchorElement} */ <HTMLAnchorElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLAnchorElement'));
  };

  /**
   * Asserts that a given object is a HTMLButtonElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLButtonElement}
   */
  export function assertIsHTMLButtonElement(o: object | null): HTMLButtonElement {
    return /** @type {!HTMLButtonElement} */ <HTMLButtonElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLButtonElement'));
  };

  /**
   * Asserts that a given object is a HTMLLinkElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLLinkElement}
   */
  export function assertIsHTMLLinkElement(o: object | null): HTMLLinkElement {
    return /** @type {!HTMLLinkElement} */ <HTMLLinkElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLLinkElement'));
  };

  /**
   * Asserts that a given object is a HTMLImageElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLImageElement}
   */
  export function assertIsHTMLImageElement(o: object | null): HTMLImageElement {
    return /** @type {!HTMLImageElement} */ <HTMLImageElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLImageElement'));
  };

  /**
   * Asserts that a given object is a HTMLVideoElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLVideoElement}
   */
  export function assertIsHTMLVideoElement(o: object | null): HTMLVideoElement {
    return /** @type {!HTMLVideoElement} */ <HTMLVideoElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLVideoElement'));
  };

  /**
   * Asserts that a given object is a HTMLInputElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLInputElement}
   */
  export function assertIsHTMLInputElement(o: object | null): HTMLInputElement {
    return /** @type {!HTMLInputElement} */ <HTMLInputElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLInputElement'));
  };

  /**
   * Asserts that a given object is a HTMLEmbedElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLEmbedElement}
   */
  export function assertIsHTMLEmbedElement(o: object | null): HTMLEmbedElement {
    return /** @type {!HTMLEmbedElement} */ <HTMLEmbedElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLEmbedElement'));
  };

  /**
   * Asserts that a given object is a HTMLFormElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLFormElement}
   */
  export function assertIsHTMLFormElement(o: object | null): HTMLFormElement {
    return /** @type {!HTMLFormElement} */ <HTMLFormElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLFormElement'));
  };

  /**
   * Asserts that a given object is a HTMLFrameElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLFrameElement}
   */
  export function assertIsHTMLFrameElement(o: object | null): HTMLFrameElement {
    return /** @type {!HTMLFrameElement} */ <HTMLFrameElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLFrameElement'));
  };

  /**
   * Asserts that a given object is a HTMLIFrameElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLIFrameElement}
   */
  export function assertIsHTMLIFrameElement(o: object | null): HTMLIFrameElement {
    return /** @type {!HTMLIFrameElement} */ <HTMLIFrameElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLIFrameElement'));
  };

  /**
   * Asserts that a given object is a HTMLObjectElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLObjectElement}
   */
  export function assertIsHTMLObjectElement(o: object | null): HTMLObjectElement {
    return /** @type {!HTMLObjectElement} */ <HTMLObjectElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLObjectElement'));
  };

  /**
   * Asserts that a given object is a HTMLScriptElement.
   *
   * To permit this assertion to pass in the context of tests where elements might
   * be mocked, also accepts objects that are not a subtype of Element.
   *
   * @param {?Object} o The object whose type to assert.
   * @return {!HTMLScriptElement}
   */
  export function assertIsHTMLScriptElement(o: object | null): HTMLScriptElement {
    return /** @type {!HTMLScriptElement} */ <HTMLScriptElement>(goog.dom.asserts.assertIsElementType_(o, 'HTMLScriptElement'));
  };

  /**
   * Returns a string representation of a value's type.
   *
   * @param {*} value An object, or primitive.
   * @return {string} The best display name for the value.
   * @private
   */
  export function debugStringForType_(value: any): string {
    if (goog.isObject(value)) {
      return value.constructor.displayName || value.constructor.name ||
        Object.prototype.toString.call(value);
    }
    else {
      return value === undefined ? 'undefined' :
        value === null ? 'null' : typeof value;
    }
  };

  /**
   * Gets window of element.
   * @param {?Object} o
   * @return {!Window}
   * @private
   */
  export function getWindow_(o: any) {
    var doc = o && o.ownerDocument;
    var win = doc && /** @type {?Window} */ (doc.defaultView || doc.parentWindow);
    return win || /** @type {!Window} */ (goog.global);
  };

}
