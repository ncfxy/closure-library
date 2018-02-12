declare namespace goog.dom.asserts {
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
    function assertIsLocation(o: object | null): Location;
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
    function assertIsElementType_(o: object | null, typename: string): Element;
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
    function assertIsHTMLAnchorElement(o: object | null): HTMLAnchorElement;
    /**
     * Asserts that a given object is a HTMLButtonElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLButtonElement}
     */
    function assertIsHTMLButtonElement(o: object | null): HTMLButtonElement;
    /**
     * Asserts that a given object is a HTMLLinkElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLLinkElement}
     */
    function assertIsHTMLLinkElement(o: object | null): HTMLLinkElement;
    /**
     * Asserts that a given object is a HTMLImageElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLImageElement}
     */
    function assertIsHTMLImageElement(o: object | null): HTMLImageElement;
    /**
     * Asserts that a given object is a HTMLVideoElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLVideoElement}
     */
    function assertIsHTMLVideoElement(o: object | null): HTMLVideoElement;
    /**
     * Asserts that a given object is a HTMLInputElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLInputElement}
     */
    function assertIsHTMLInputElement(o: object | null): HTMLInputElement;
    /**
     * Asserts that a given object is a HTMLEmbedElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLEmbedElement}
     */
    function assertIsHTMLEmbedElement(o: object | null): HTMLEmbedElement;
    /**
     * Asserts that a given object is a HTMLFormElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLFormElement}
     */
    function assertIsHTMLFormElement(o: object | null): HTMLFormElement;
    /**
     * Asserts that a given object is a HTMLFrameElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLFrameElement}
     */
    function assertIsHTMLFrameElement(o: object | null): HTMLFrameElement;
    /**
     * Asserts that a given object is a HTMLIFrameElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLIFrameElement}
     */
    function assertIsHTMLIFrameElement(o: object | null): HTMLIFrameElement;
    /**
     * Asserts that a given object is a HTMLObjectElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLObjectElement}
     */
    function assertIsHTMLObjectElement(o: object | null): HTMLObjectElement;
    /**
     * Asserts that a given object is a HTMLScriptElement.
     *
     * To permit this assertion to pass in the context of tests where elements might
     * be mocked, also accepts objects that are not a subtype of Element.
     *
     * @param {?Object} o The object whose type to assert.
     * @return {!HTMLScriptElement}
     */
    function assertIsHTMLScriptElement(o: object | null): HTMLScriptElement;
    /**
     * Returns a string representation of a value's type.
     *
     * @param {*} value An object, or primitive.
     * @return {string} The best display name for the value.
     * @private
     */
    function debugStringForType_(value: any): string;
    /**
     * Gets window of element.
     * @param {?Object} o
     * @return {!Window}
     * @private
     */
    function getWindow_(o: any): any;
}
