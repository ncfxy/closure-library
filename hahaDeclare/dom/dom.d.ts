/// <reference path="../specialtype.d.ts" />
/// <reference path="../base.d.ts" />
/// <reference path="tagname.d.ts" />
/// <reference path="../string/string.d.ts" />
/// <reference path="../asserts/asserts.d.ts" />
/// <reference path="../math/coordinate.d.ts" />
/// <reference path="../math/size.d.ts" />
/// <reference path="../useragent/useragent.d.ts" />
/// <reference path="browserfeature.d.ts" />
/// <reference path="../string/const.d.ts" />
/// <reference path="../html/safehtml.d.ts" />
/// <reference path="../html/uncheckedconversions.d.ts" />
/// <reference path="safe.d.ts" />
declare namespace goog.dom {
    var COMPAT_MODE_KNOWN_: any;
    var ASSUME_QUIRKS_MODE: any;
    var ASSUME_STANDARDS_MODE: any;
    /**
     * Cached default DOM helper.
     * @type {!goog.dom.DomHelper|undefined}
     * @private
     */
    var defaultDomHelper_: any;
    /**
     * Gets the DomHelper object for the document where the element resides.
     * @param {(Node|Window)=} opt_element If present, gets the DomHelper for this
     *     element.
     * @return {!goog.dom.DomHelper} The DomHelper.
     */
    function getDomHelper(opt_element?: Node | Window): any;
    /**
     * Gets the document object being used by the dom library.
     * @return {!Document} Document object.
     */
    function getDocument(): Document;
    /**
     * Gets an element from the current document by element id.
     *
     * If an Element is passed in, it is returned.
     *
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     */
    function getElement(element: string | Element): Element;
    /**
     * Gets an element by id from the given document (if present).
     * If an element is given, it is returned.
     * @param {!Document} doc
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The resulting element.
     * @private
     */
    function getElementHelper_(doc: Document, element: string | Element): Element;
    /**
     * Gets an element by id, asserting that the element is found.
     *
     * This is used when an element is expected to exist, and should fail with
     * an assertion error if it does not (if assertions are enabled).
     *
     * @param {string} id Element ID.
     * @return {!Element} The element with the given ID, if it exists.
     */
    function getRequiredElement(id: string): Element;
    /**
     * Helper function for getRequiredElementHelper functions, both static and
     * on DomHelper.  Asserts the element with the given id exists.
     * @param {!Document} doc
     * @param {string} id
     * @return {!Element} The element with the given ID, if it exists.
     * @private
     */
    function getRequiredElementHelper_(doc: Document, id: string): Element;
    /**
     * Alias for getElement.
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     * @deprecated Use {@link goog.dom.getElement} instead.
     */
    function $(element: string | Element): Element;
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
    function getElementsByTagName<T, R>(tagName: goog.dom.TagName<T>, opt_parent?: (Document | Element) | undefined): NodeList;
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
    function getElementsByTagNameAndClass<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R>;
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
    function getElementByTagNameAndClass<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): R | null;
    /**
     * Returns a static, array-like list of the elements with the provided
     * className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return {!IArrayLike<!Element>} The items found with the class name provided.
     */
    function getElementsByClass(className: string, opt_el: (Document | Element) | undefined): IArrayLike<Element>;
    /**
     * Returns the first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {Element|Document=} opt_el Optional element to look in.
     * @return {Element} The first item with the class name provided.
     */
    function getElementByClass(className: string, opt_el: Element | (Document | undefined)): Element;
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
    function getRequiredElementByClass(className: string, opt_root: Element | (Document | undefined)): Element;
    /**
     * Prefer the standardized (http://www.w3.org/TR/selectors-api/), native and
     * fast W3C Selectors API.
     * @param {!(Element|Document)} parent The parent document object.
     * @return {boolean} whether or not we can use parent.querySelector* APIs.
     * @private
     */
    function canUseQuerySelector_(parent: (Element | Document)): boolean;
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
    function getElementsByTagNameAndClass_<T, R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): IArrayLike<R>;
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
    function getElementByTagNameAndClass_<T, R>(doc: Document, opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: (Document | Element) | undefined): any | null;
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
    function $$<T, R>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el: Element | undefined): IArrayLike<R>;
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
    function setProperties(element: Element, properties: object): void;
    /**
     * Map of attributes that should be set using
     * element.setAttribute(key, val) instead of element[key] = val.  Used
     * by goog.dom.setProperties.
     *
     * @private {!Object<string, string>}
     * @const
     */
    var DIRECT_ATTRIBUTE_MAP_: {
        'cellpadding': string;
        'cellspacing': string;
        'colspan': string;
        'frameborder': string;
        'height': string;
        'maxlength': string;
        'nonce': string;
        'role': string;
        'rowspan': string;
        'type': string;
        'usemap': string;
        'valign': string;
        'width': string;
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
    function getViewportSize(opt_window: Window | undefined): goog.math.Size;
    /**
     * Helper for {@code getViewportSize}.
     * @param {Window} win The window to get the view port size for.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     * @private
     */
    function getViewportSize_(win: Window): goog.math.Size;
    /**
     * Calculates the height of the document.
     *
     * @return {number} The height of the current document.
     */
    function getDocumentHeight(): number;
    /**
     * Calculates the height of the document of the given window.
     *
     * @param {!Window} win The window whose document height to retrieve.
     * @return {number} The height of the document of the given window.
     */
    function getDocumentHeightForWindow(win: Window): number;
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
    function getDocumentHeight_(win: Window): number;
    /**
     * Gets the page scroll distance as a coordinate object.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @deprecated Use {@link goog.dom.getDocumentScroll} instead.
     */
    function getPageScroll(opt_window: Window | undefined): goog.math.Coordinate;
    /**
     * Gets the document scroll distance as a coordinate object.
     *
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     */
    function getDocumentScroll(): goog.math.Coordinate;
    /**
     * Helper for {@code getDocumentScroll}.
     *
     * @param {!Document} doc The document to get the scroll for.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @private
     */
    function getDocumentScroll_(doc: Document): goog.math.Coordinate;
    /**
     * Gets the document scroll element.
     * @return {!Element} Scrolling element.
     */
    function getDocumentScrollElement(): Element;
    /**
     * Helper for {@code getDocumentScrollElement}.
     * @param {!Document} doc The document to get the scroll element for.
     * @return {!Element} Scrolling element.
     * @private
     */
    function getDocumentScrollElement_(doc: Document): Element;
    /**
     * Gets the window object associated with the given document.
     *
     * @param {Document=} opt_doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     */
    function getWindow(opt_doc?: Document | undefined): Window;
    /**
     * Helper for {@code getWindow}.
     *
     * @param {!Document} doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     * @private
     */
    function getWindow_(doc: Document): Window;
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
    function createDom<T, R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): any;
    /**
     * Helper for {@code createDom}.
     * @param {!Document} doc The document to create the DOM in.
     * @param {!Arguments} args Argument object passed from the callers. See
     *     {@code goog.dom.createDom} for details.
     * @return {!Element} Reference to a DOM node.
     * @private
     */
    function createDom_(doc: Document, args: Arguments): Element;
    /**
     * Appends a node with text or other nodes.
     * @param {!Document} doc The document to create new nodes in.
     * @param {!Node} parent The node to append nodes to.
     * @param {!Arguments} args The values to add. See {@code goog.dom.append}.
     * @param {number} startIndex The index of the array to start from.
     * @private
     */
    function append_(doc: Document, parent: Node, args: Arguments, startIndex: number): void;
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
    function $dom<T, R>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: (object | string | Array<any> | NodeList)[]): R;
    /**
     * Creates a new element.
     * @param {string|!goog.dom.TagName<T>} name Tag to create.
     * @return {R} The new element. The return type is {!Element} if name is
     *     a string or a more specific type if it is a member of goog.dom.TagName
     *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
     * @template T
     * @template R := cond(isUnknown(T), 'Element', T) =:
     */
    function createElement<T, R>(name: string | goog.dom.TagName<T>): R;
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
    function createElement_<T, R>(doc: Document, name: string | goog.dom.TagName<T>): any;
    /**
     * Creates a new text node.
     * @param {number|string} content Content.
     * @return {!Text} The new text node.
     */
    function createTextNode(content: number | string): Text;
    /**
     * Create a table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
     *     {@code goog.string.Unicode.NBSP} characters.
     * @return {!Element} The created table.
     */
    function createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): Element;
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
    function createTable_(doc: Document, rows: number, columns: number, fillWithNbsp: boolean): HTMLTableElement;
    /**
     * Creates a new Node from constant strings of HTML markup.
     * @param {...!goog.string.Const} var_args The HTML strings to concatenate then
     *     convert into a node.
     * @return {!Node}
     */
    function constHtmlToNode(var_args: goog.string.Const[]): Node;
    /**
     * Converts HTML markup into a node. This is a safe version of
     * {@code goog.dom.htmlToDocumentFragment} which is now deleted.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     */
    function safeHtmlToNode(html: goog.html.SafeHtml): Node;
    /**
     * Helper for {@code safeHtmlToNode}.
     * @param {!Document} doc The document.
     * @param {!goog.html.SafeHtml} html The HTML markup to convert.
     * @return {!Node} The resulting node.
     * @private
     */
    function safeHtmlToNode_(doc: Document, html: goog.html.SafeHtml): Node;
    /**
     * Helper for {@code safeHtmlToNode_}.
     * @param {!Document} doc The document.
     * @param {!Node} tempDiv The input node.
     * @return {!Node} The resulting node.
     * @private
     */
    function childrenToNode_(doc: Document, tempDiv: Node): Node;
    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @return {boolean} True if in CSS1-compatible mode.
     */
    function isCss1CompatMode(): boolean;
    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @param {!Document} doc The document to check.
     * @return {boolean} True if in CSS1-compatible mode.
     * @private
     */
    function isCss1CompatMode_(doc: Document): boolean;
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
    function canHaveChildren(node: Node): boolean;
    /**
     * Appends a child to a node.
     * @param {Node} parent Parent.
     * @param {Node} child Child.
     */
    function appendChild(parent: Node, child: Node): void;
    /**
     * Appends a node with text or other nodes.
     * @param {!Node} parent The node to append nodes to.
     * @param {...goog.dom.Appendable} var_args The things to append to the node.
     *     If this is a Node it is appended as is.
     *     If this is a string then a text node is appended.
     *     If this is an array like object then fields 0 to length - 1 are appended.
     */
    function append(parent: Node, var_args: goog.dom.Appendable[]): void;
    /**
     * Removes all the child nodes on a DOM node.
     * @param {Node} node Node to remove children from.
     */
    function removeChildren(node: Node): void;
    /**
     * Inserts a new node before an existing reference node (i.e. as the previous
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert before.
     */
    function insertSiblingBefore(newNode: Node, refNode: Node): void;
    /**
     * Inserts a new node after an existing reference node (i.e. as the next
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert after.
     */
    function insertSiblingAfter(newNode: Node, refNode: Node): void;
    /**
     * Insert a child at a given index. If index is larger than the number of child
     * nodes that the parent currently has, the node is inserted as the last child
     * node.
     * @param {Element} parent The element into which to insert the child.
     * @param {Node} child The element to insert.
     * @param {number} index The index at which to insert the new child node. Must
     *     not be negative.
     */
    function insertChildAt(parent: Element, child: Node, index: number): void;
    /**
     * Removes a node from its parent.
     * @param {Node} node The node to remove.
     * @return {Node} The node removed if removed; else, null.
     */
    function removeNode(node: Node): Node;
    /**
     * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
     * parent.
     * @param {Node} newNode Node to insert.
     * @param {Node} oldNode Node to replace.
     */
    function replaceNode(newNode: Node, oldNode: Node): void;
    /**
     * Flattens an element. That is, removes it and replace it with its children.
     * Does nothing if the element is not in the document.
     * @param {Element} element The element to flatten.
     * @return {Element|undefined} The original element, detached from the document
     *     tree, sans children; or undefined, if the element was not in the document
     *     to begin with.
     */
    function flattenElement(element: Element): Element | undefined;
    /**
     * Returns an array containing just the element children of the given element.
     * @param {Element} element The element whose element children we want.
     * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
     *     of just the element children of the given element.
     */
    function getChildren(element: Element): (Array<Element> | NodeList);
    /**
     * Returns the first child node that is an element.
     * @param {Node} node The node to get the first child element of.
     * @return {Element} The first child node of {@code node} that is an element.
     */
    function getFirstElementChild(node: Node): Element;
    /**
     * Returns the last child node that is an element.
     * @param {Node} node The node to get the last child element of.
     * @return {Element} The last child node of {@code node} that is an element.
     */
    function getLastElementChild(node: Node): Element;
    /**
     * Returns the first next sibling that is an element.
     * @param {Node} node The node to get the next sibling element of.
     * @return {Element} The next sibling of {@code node} that is an element.
     */
    function getNextElementSibling(node: Node): Element;
    /**
     * Returns the first previous sibling that is an element.
     * @param {Node} node The node to get the previous sibling element of.
     * @return {Element} The first previous sibling of {@code node} that is
     *     an element.
     */
    function getPreviousElementSibling(node: Node): Element;
    /**
     * Returns the first node that is an element in the specified direction,
     * starting with {@code node}.
     * @param {Node} node The node to get the next element from.
     * @param {boolean} forward Whether to look forwards or backwards.
     * @return {Element} The first element.
     * @private
     */
    function getNextElementNode_(node: Node, forward: boolean): Element;
    /**
     * Returns the next node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The next node in the DOM tree, or null if this was the last
     *     node.
     */
    function getNextNode(node: Node): Node;
    /**
     * Returns the previous node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The previous node in the DOM tree, or null if this was the
     *     first node.
     */
    function getPreviousNode(node: Node): Node;
    /**
     * Whether the object looks like a DOM node.
     * @param {?} obj The object being tested for node likeness.
     * @return {boolean} Whether the object looks like a DOM node.
     */
    function isNodeLike(obj: any): boolean;
    /**
     * Whether the object looks like an Element.
     * @param {?} obj The object being tested for Element likeness.
     * @return {boolean} Whether the object looks like an Element.
     */
    function isElement(obj: any): boolean;
    /**
     * Returns true if the specified value is a Window object. This includes the
     * global window for HTML pages, and iframe windows.
     * @param {?} obj Variable to test.
     * @return {boolean} Whether the variable is a window.
     */
    function isWindow(obj: any): boolean;
    /**
     * Returns an element's parent, if it's an Element.
     * @param {Element} element The DOM element.
     * @return {Element} The parent, or null if not an Element.
     */
    function getParentElement(element: Element): Element;
    /**
     * Whether a node contains another node.
     * @param {?Node|undefined} parent The node that should contain the other node.
     * @param {?Node|undefined} descendant The node to test presence of.
     * @return {boolean} Whether the parent node contains the descendent node.
     */
    function contains(parent: (Node | undefined) | null, descendant: (Node | undefined) | null): boolean;
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
    function compareNodeOrder(node1: any, node2: any): number;
    /**
     * Utility function to compare the position of two nodes, when
     * {@code textNode}'s parent is an ancestor of {@code node}.  If this entry
     * condition is not met, this function will attempt to reference a null object.
     * @param {!Node} textNode The textNode to compare.
     * @param {Node} node The node to compare.
     * @return {number} -1 if node is before textNode, +1 otherwise.
     * @private
     */
    function compareParentsDescendantNodeIe_(textNode: Node, node: Node): number;
    /**
     * Utility function to compare the position of two nodes known to be non-equal
     * siblings.
     * @param {Node} node1 The first node to compare.
     * @param {!Node} node2 The second node to compare.
     * @return {number} -1 if node1 is before node2, +1 otherwise.
     * @private
     */
    function compareSiblingOrder_(node1: Node, node2: Node): number;
    /**
     * Find the deepest common ancestor of the given nodes.
     * @param {...Node} var_args The nodes to find a common ancestor of.
     * @return {Node} The common ancestor of the nodes, or null if there is none.
     *     null will only be returned if two or more of the nodes are from different
     *     documents.
     */
    function findCommonAncestor(var_args: Node[]): Node;
    /**
     * Returns the owner document for a node.
     * @param {Node|Window} node The node to get the document for.
     * @return {!Document} The document owning the node.
     */
    function getOwnerDocument(node: Node | Window): Document;
    /**
     * Cross-browser function for getting the document element of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {!Document} The frame content document.
     */
    function getFrameContentDocument(frame: HTMLFrameElement): Document;
    /**
     * Cross-browser function for getting the window of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {Window} The window associated with the given frame, or null if none
     *     exists.
     */
    function getFrameContentWindow(frame: HTMLFrameElement): Window;
    /**
     * Sets the text content of a node, with cross-browser support.
     * @param {Node} node The node to change the text content of.
     * @param {string|number} text The value that should replace the node's content.
     */
    function setTextContent(node: Node, text: string | number): void;
    /**
     * Gets the outerHTML of a node, which islike innerHTML, except that it
     * actually contains the HTML of the node itself.
     * @param {Element} element The element to get the HTML of.
     * @return {string} The outerHTML of the given element.
     */
    function getOuterHtml(element: Element): string;
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
    function findNode(root: any, p: any): any;
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
    function findNodes(root: any, p: any): any[];
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
    function findNodes_(root: Node, p: (arg0: Node) => boolean, rv: Array<Node>, findOne: boolean): boolean;
    /**
     * Map of tags whose content to ignore when calculating text length.
     * @private {!Object<string, number>}
     * @const
     */
    const TAGS_TO_IGNORE_: {
        'SCRIPT': number;
        'STYLE': number;
        'HEAD': number;
        'IFRAME': number;
        'OBJECT': number;
    };
    /**
     * Map of tags which have predefined values with regard to whitespace.
     * @private {!Object<string, string>}
     * @const
     */
    const PREDEFINED_TAG_VALUES_: {
        'IMG': string;
        'BR': string;
    };
    /**
     * Returns true if the element has a tab index that allows it to receive
     * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
     * natively support keyboard focus, even if they have no tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a tab index that allows keyboard
     *     focus.
     */
    function isFocusableTabIndex(element: Element): boolean;
    /**
     * Enables or disables keyboard focus support on the element via its tab index.
     * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
     * (or elements that natively support keyboard focus, like form elements) can
     * receive keyboard focus.  See http://go/tabindex for more info.
     * @param {Element} element Element whose tab index is to be changed.
     * @param {boolean} enable Whether to set or remove a tab index on the element
     *     that supports keyboard focus.
     */
    function setFocusableTabIndex(element: HTMLElement, enable: boolean): void;
    /**
     * Returns true if the element can be focused, i.e. it has a tab index that
     * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
     * that natively supports keyboard focus.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element allows keyboard focus.
     */
    function isFocusable(element: Element): boolean;
    /**
     * Returns true if the element has a specified tab index.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element has a specified tab index.
     * @private
     */
    function hasSpecifiedTabIndex_(element: Element): boolean;
    /**
     * Returns true if the element's tab index allows the element to be focused.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element's tab index allows focus.
     * @private
     */
    function isTabIndexFocusable_(element: Element): boolean;
    /**
     * Returns true if the element is focusable even when tabIndex is not set.
     * @param {!Element} element Element to check.
     * @return {boolean} Whether the element natively supports focus.
     * @private
     */
    function nativelySupportsFocus_(element: any): boolean;
    /**
     * Returns true if the element has a bounding rectangle that would be visible
     * (i.e. its width and height are greater than zero).
     * @param {!HTMLElement} element Element to check.
     * @return {boolean} Whether the element has a non-zero bounding rectangle.
     * @private
     */
    function hasNonZeroBoundingRect_(element: HTMLElement): boolean;
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
    function getTextContent(node: Node): string;
    /**
     * Returns the text content of the current node, without markup.
     *
     * Unlike {@code getTextContent} this method does not collapse whitespaces
     * or normalize lines breaks.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The raw text content.
     */
    function getRawTextContent(node: Node): string;
    /**
     * Recursive support function for text content retrieval.
     *
     * @param {Node} node The node from which we are getting content.
     * @param {Array<string>} buf string buffer.
     * @param {boolean} normalizeWhitespace Whether to normalize whitespace.
     * @private
     */
    function getTextContent_(node: Node, buf: Array<string>, normalizeWhitespace: boolean): void;
    /**
     * Returns the text length of the text contained in a node, without markup. This
     * is equivalent to the selection length if the node was selected, or the number
     * of cursor movements to traverse the node. Images & BRs take one space.  New
     * lines are ignored.
     *
     * @param {Node} node The node whose text content length is being calculated.
     * @return {number} The length of {@code node}'s text content.
     */
    function getNodeTextLength(node: Node): number;
    /**
     * Returns the text offset of a node relative to one of its ancestors. The text
     * length is the same as the length calculated by goog.dom.getNodeTextLength.
     *
     * @param {Node} node The node whose offset is being calculated.
     * @param {Node=} opt_offsetParent The node relative to which the offset will
     *     be calculated. Defaults to the node's owner document's body.
     * @return {number} The text offset.
     */
    function getNodeTextOffset(node: Node, opt_offsetParent?: Node | undefined): number;
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
    function getNodeAtOffset(parent: Node, offset: number, opt_result?: any): Node;
    /**
     * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
     * the object must have a numeric length property and an item function (which
     * has type 'string' on IE for some reason).
     * @param {Object} val Object to test.
     * @return {boolean} Whether the object is a NodeList.
     */
    function isNodeList(val: {
        length;
        item;
    }): boolean;
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
    function getAncestorByTagNameAndClass<T>(element: Node, opt_tag?: ((goog.dom.TagName<T> | string) | undefined) | null, opt_class?: (string | undefined) | null, opt_maxSearchSteps?: number | undefined): Element;
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
    function getAncestorByClass(element: Node, className: string, opt_maxSearchSteps?: number | undefined): Element;
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
    function getAncestor(element: Node, matcher: (arg0: Node) => boolean, opt_includeNode?: boolean | undefined, opt_maxSearchSteps?: number | undefined): Node;
    /**
     * Determines the active element in the given document.
     * @param {Document} doc The document to look in.
     * @return {Element} The active element.
     */
    function getActiveElement(doc: Document): Element;
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
    function getPixelRatio(): number;
    /**
     * Calculates a mediaQuery to check if the current device supports the
     * given actual to virtual pixel ratio.
     * @param {number} pixelRatio The ratio of actual pixels to virtual pixels.
     * @return {number} pixelRatio if applicable, otherwise 0.
     * @private
     */
    function matchesPixelRatio_(pixelRatio: number): number;
    /**
     * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
     * type information.
     * @param {!HTMLCanvasElement} canvas
     * @return {!CanvasRenderingContext2D}
     */
    function getCanvasContext2D(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
    /**
     * Typedef for use with goog.dom.createDom and goog.dom.append.
     * @typedef {Object|string|Array|NodeList}
     */
    type Appendable = Object | string | Array<string> | NodeList;
    class DomHelper {
        private document_;
        /**
         * Create an instance of a DOM helper with a new document object.
         * @param {Document=} opt_document Document object to associate with this
         *     DOM helper.
         * @constructor
         */
        constructor(opt_document?: Document);
        /**
         * Gets the dom helper object for the document where the element resides.
         * @param {Node=} opt_node If present, gets the DomHelper for this node.
         * @return {!goog.dom.DomHelper} The DomHelper.
         */
        getDomHelper(opt_element?: Node | Window): any;
        /**
         * Sets the document object.
         * @param {!Document} document Document object.
         */
        setDocument(document: Document): void;
        /**
         * Gets the document object being used by the dom library.
         * @return {!Document} Document object.
         */
        getDocument(): Document;
        /**
         * Alias for {@code getElementById}. If a DOM node is passed in then we just
         * return that.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         */
        getElement(element: string | Element): Element;
        /**
         * Gets an element by id, asserting that the element is found.
         *
         * This is used when an element is expected to exist, and should fail with
         * an assertion error if it does not (if assertions are enabled).
         *
         * @param {string} id Element ID.
         * @return {!Element} The element with the given ID, if it exists.
         */
        getRequiredElement(id: string): Element;
        /**
         * Alias for {@code getElement}.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         * @deprecated Use {@link goog.dom.DomHelper.prototype.getElement} instead.
         */
        $(element: string | Element): Element;
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
        getElementsByTagName(tagName: any, opt_parent?: any): any;
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
        getElementsByTagNameAndClass(opt_tag?: any, opt_class?: any, opt_el?: any): IArrayLike<{}>;
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
        getElementByTagNameAndClass(opt_tag?: any, opt_class?: any, opt_el?: any): any;
        /**
        * Returns an array of all the elements with the provided className.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {Element|Document=} opt_el Optional element to look in.
        * @return {!IArrayLike<!Element>} The items found with the class name provided.
        */
        getElementsByClass(className: any, opt_el?: any): IArrayLike<Element>;
        /**
        * Returns the first element we find matching the provided class name.
        * @see {goog.dom.query}
        * @param {string} className the name of the class to look for.
        * @param {(Element|Document)=} opt_el Optional element to look in.
        * @return {Element} The first item found with the class name provided.
        */
        getElementByClass(className: any, opt_el?: any): Element;
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
        getRequiredElementByClass(className: any, opt_root?: any): Element;
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
        $$<T>(opt_tag: (string | (goog.dom.TagName<T> | null)) | undefined, opt_class: (string | undefined) | null, opt_el?: Element | undefined): IArrayLike<Element>;
        /**
         * Sets a number of properties on a node.
         * @param {Element} element DOM node to set properties on.
         * @param {Object} properties Hash of property:value pairs.
         */
        setProperties(element: any, properties: any): void;
        /**
         * Gets the dimensions of the viewport.
         * @param {Window=} opt_window Optional window element to test. Defaults to
         *     the window of the Dom Helper.
         * @return {!goog.math.Size} Object with values 'width' and 'height'.
         */
        getViewportSize(opt_window?: Window | undefined): goog.math.Size;
        /**
         * Calculates the height of the document.
         *
         * @return {number} The height of the document.
         */
        getDocumentHeight(): number;
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
        createDom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element;
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
        $dom<T>(tagName: string | goog.dom.TagName<T>, opt_attributes?: (object | ((Array<string> | (string | undefined)) | null)) | null, ...var_args: goog.dom.Appendable[]): Element;
        /**
         * Creates a new element.
         * @param {string|!goog.dom.TagName<T>} name Tag to create.
         * @return {R} The new element. The return type is {!Element} if name is
         *     a string or a more specific type if it is a member of goog.dom.TagName
         *     (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
         * @template T
         * @template R := cond(isUnknown(T), 'Element', T) =:
         */
        createElement<T>(name: string | goog.dom.TagName<T>): Element;
        /**
         * Creates a new text node.
         * @param {number|string} content Content.
         * @return {!Text} The new text node.
         */
        createTextNode(content: number | string): Text;
        /**
         * Create a table.
         * @param {number} rows The number of rows in the table.  Must be >= 1.
         * @param {number} columns The number of columns in the table.  Must be >= 1.
         * @param {boolean=} opt_fillWithNbsp If true, fills table entries with
         *     {@code goog.string.Unicode.NBSP} characters.
         * @return {!HTMLElement} The created table.
         */
        createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean | undefined): HTMLElement;
        /**
         * Converts an HTML into a node or a document fragment. A single Node is used if
         * {@code html} only generates a single node. If {@code html} generates multiple
         * nodes then these are put inside a {@code DocumentFragment}. This is a safe
         * version of {@code goog.dom.DomHelper#htmlToDocumentFragment} which is now
         * deleted.
         * @param {!goog.html.SafeHtml} html The HTML markup to convert.
         * @return {!Node} The resulting node.
         */
        safeHtmlToNode(html: goog.html.SafeHtml): Node;
        /**
         * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
         * mode, false otherwise.
         * @return {boolean} True if in CSS1-compatible mode.
         */
        isCss1CompatMode(): boolean;
        /**
         * Gets the window object associated with the document.
         * @return {!Window} The window associated with the given document.
         */
        getWindow(): Window;
        /**
         * Gets the document scroll element.
         * @return {!Element} Scrolling element.
         */
        getDocumentScrollElement(): Element;
        /**
         * Gets the document scroll distance as a coordinate object.
         * @return {!goog.math.Coordinate} Object with properties 'x' and 'y'.
         */
        getDocumentScroll(): goog.math.Coordinate;
        /**
         * Determines the active element in the given document.
         * @param {Document=} opt_doc The document to look in.
         * @return {Element} The active element.
         */
        getActiveElement(opt_doc?: Document | undefined): Element;
        /**
         * Appends a child to a node.
         * @param {Node} parent Parent.
         * @param {Node} child Child.
         */
        appendChild(parent: Node, child: Node): void;
        /**
         * Appends a node with text or other nodes.
         * @param {!Node} parent The node to append nodes to.
         * @param {...goog.dom.Appendable} var_args The things to append to the node.
         *     If this is a Node it is appended as is.
         *     If this is a string then a text node is appended.
         *     If this is an array like object then fields 0 to length - 1 are appended.
         */
        append(parent: Node, var_args: goog.dom.Appendable[]): void;
        /**
         * Determines if the given node can contain children, intended to be used for
         * HTML generation.
         *
         * @param {Node} node The node to check.
         * @return {boolean} Whether the node can contain children.
         */
        canHaveChildren(node: Node): boolean;
        /**
         * Removes all the child nodes on a DOM node.
         * @param {Node} node Node to remove children from.
         */
        removeChildren(node: Node): void;
        /**
         * Inserts a new node before an existing reference node (i.e., as the previous
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert before.
         */
        insertSiblingBefore(newNode: Node, refNode: Node): void;
        /**
         * Inserts a new node after an existing reference node (i.e., as the next
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert after.
         */
        insertSiblingAfter(newNode: Node, refNode: Node): void;
        /**
         * Insert a child at a given index. If index is larger than the number of child
         * nodes that the parent currently has, the node is inserted as the last child
         * node.
         * @param {Element} parent The element into which to insert the child.
         * @param {Node} child The element to insert.
         * @param {number} index The index at which to insert the new child node. Must
         *     not be negative.
         */
        insertChildAt(parent: Element, child: Node, index: number): void;
        /**
         * Removes a node from its parent.
         * @param {Node} node The node to remove.
         * @return {Node} The node removed if removed; else, null.
         */
        removeNode(node: Node): Node;
        /**
         * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
         * parent.
         * @param {Node} newNode Node to insert.
         * @param {Node} oldNode Node to replace.
         */
        replaceNode(newNode: Node, oldNode: Node): void;
        /**
         * Flattens an element. That is, removes it and replace it with its children.
         * @param {Element} element The element to flatten.
         * @return {Element|undefined} The original element, detached from the document
         *     tree, sans children, or undefined if the element was already not in the
         *     document.
         */
        flattenElement(element: Element): Element | undefined;
        /**
         * Returns an array containing just the element children of the given element.
         * @param {Element} element The element whose element children we want.
         * @return {!(Array<!Element>|NodeList<!Element>)} An array or array-like list
         *     of just the element children of the given element.
         */
        getChildren(element: Element): (Array<Element> | NodeList);
        /**
         * Returns the first child node that is an element.
         * @param {Node} node The node to get the first child element of.
         * @return {Element} The first child node of {@code node} that is an element.
         */
        getFirstElementChild(node: Node): Element;
        /**
         * Returns the last child node that is an element.
         * @param {Node} node The node to get the last child element of.
         * @return {Element} The last child node of {@code node} that is an element.
         */
        getLastElementChild(node: Node): Element;
        /**
         * Returns the first next sibling that is an element.
         * @param {Node} node The node to get the next sibling element of.
         * @return {Element} The next sibling of {@code node} that is an element.
         */
        getNextElementSibling(node: Node): Element;
        /**
         * Returns the first previous sibling that is an element.
         * @param {Node} node The node to get the previous sibling element of.
         * @return {Element} The first previous sibling of {@code node} that is
         *     an element.
         */
        getPreviousElementSibling(node: any): Element;
        /**
         * Returns the next node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The next node in the DOM tree, or null if this was the last
         *     node.
         */
        getNextNode(node: Node): Node;
        /**
         * Returns the previous node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The previous node in the DOM tree, or null if this was the
         *     first node.
         */
        getPreviousNode(): typeof getPreviousNode;
        /**
         * Whether the object looks like a DOM node.
         * @param {?} obj The object being tested for node likeness.
         * @return {boolean} Whether the object looks like a DOM node.
         */
        isNodeLike(): typeof isNodeLike;
        /**
         * Whether the object looks like an Element.
         * @param {?} obj The object being tested for Element likeness.
         * @return {boolean} Whether the object looks like an Element.
         */
        isElement(): typeof isElement;
        /**
         * Returns true if the specified value is a Window object. This includes the
         * global window for HTML pages, and iframe windows.
         * @param {?} obj Variable to test.
         * @return {boolean} Whether the variable is a window.
         */
        isWindow(): typeof isWindow;
        /**
         * Returns an element's parent, if it's an Element.
         * @param {Element} element The DOM element.
         * @return {Element} The parent, or null if not an Element.
         */
        getParentElement(): typeof getParentElement;
        /**
         * Whether a node contains another node.
         * @param {Node} parent The node that should contain the other node.
         * @param {Node} descendant The node to test presence of.
         * @return {boolean} Whether the parent node contains the descendent node.
         */
        contains(): typeof contains;
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
        compareNodeOrder(): typeof compareNodeOrder;
        /**
         * Find the deepest common ancestor of the given nodes.
         * @param {...Node} var_args The nodes to find a common ancestor of.
         * @return {Node} The common ancestor of the nodes, or null if there is none.
         *     null will only be returned if two or more of the nodes are from different
         *     documents.
         */
        findCommonAncestor(): typeof findCommonAncestor;
        /**
         * Returns the owner document for a node.
         * @param {Node} node The node to get the document for.
         * @return {!Document} The document owning the node.
         */
        getOwnerDocument(): typeof getOwnerDocument;
        /**
         * Cross browser function for getting the document element of an iframe.
         * @param {Element} iframe Iframe element.
         * @return {!Document} The frame content document.
         */
        getFrameContentDocument: typeof getFrameContentDocument;
        /**
         * Cross browser function for getting the window of a frame or iframe.
         * @param {Element} frame Frame element.
         * @return {Window} The window associated with the given frame.
         */
        getFrameContentWindow: typeof getFrameContentWindow;
        /**
         * Sets the text content of a node, with cross-browser support.
         * @param {Node} node The node to change the text content of.
         * @param {string|number} text The value that should replace the node's content.
         */
        setTextContent(): typeof setTextContent;
        /**
         * Gets the outerHTML of a node, which islike innerHTML, except that it
         * actually contains the HTML of the node itself.
         * @param {Element} element The element to get the HTML of.
         * @return {string} The outerHTML of the given element.
         */
        getOuterHtml(): typeof getOuterHtml;
        /**
         * Finds the first descendant node that matches the filter function. This does
         * a depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Node|undefined} The found node or undefined if none is found.
         */
        findNode(): typeof findNode;
        /**
         * Finds all the descendant nodes that matches the filter function. This does a
         * depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Array<Node>} The found nodes or an empty array if none are found.
         */
        findNodes(): typeof findNodes;
        /**
         * Returns true if the element has a tab index that allows it to receive
         * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
         * natively support keyboard focus, even if they have no tab index.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element has a tab index that allows keyboard
         *     focus.
         */
        isFocusableTabIndex(): typeof isFocusableTabIndex;
        /**
         * Enables or disables keyboard focus support on the element via its tab index.
         * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
         * (or elements that natively support keyboard focus, like form elements) can
         * receive keyboard focus.  See http://go/tabindex for more info.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to set or remove a tab index on the element
         *     that supports keyboard focus.
         */
        setFocusableTabIndex: typeof setFocusableTabIndex;
        /**
         * Returns true if the element can be focused, i.e. it has a tab index that
         * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
         * that natively supports keyboard focus.
         * @param {!Element} element Element to check.
         * @return {boolean} Whether the element allows keyboard focus.
         */
        isFocusable(): typeof isFocusable;
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
        getTextContent(): typeof getTextContent;
        /**
         * Returns the text length of the text contained in a node, without markup. This
         * is equivalent to the selection length if the node was selected, or the number
         * of cursor movements to traverse the node. Images & BRs take one space.  New
         * lines are ignored.
         *
         * @param {Node} node The node whose text content length is being calculated.
         * @return {number} The length of {@code node}'s text content.
         */
        getNodeTextLength(): typeof getNodeTextLength;
        /**
         * Returns the text offset of a node relative to one of its ancestors. The text
         * length is the same as the length calculated by
         * {@code goog.dom.getNodeTextLength}.
         *
         * @param {Node} node The node whose offset is being calculated.
         * @param {Node=} opt_offsetParent Defaults to the node's owner document's body.
         * @return {number} The text offset.
         */
        getNodeTextOffset(): typeof getNodeTextOffset;
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
        getNodeAtOffset(): typeof getNodeAtOffset;
        /**
         * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
         * the object must have a numeric length property and an item function (which
         * has type 'string' on IE for some reason).
         * @param {Object} val Object to test.
         * @return {boolean} Whether the object is a NodeList.
         */
        isNodeList(): typeof isNodeList;
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
        getAncestorByTagNameAndClass: typeof getAncestorByTagNameAndClass;
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
        getAncestorByClass(): typeof getAncestorByClass;
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
        getAncestor(): typeof getAncestor;
        /**
         * Gets '2d' context of a canvas. Shortcut for canvas.getContext('2d') with a
         * type information.
         * @param {!HTMLCanvasElement} canvas
         * @return {!CanvasRenderingContext2D}
         */
        getCanvasContext2D(): typeof getCanvasContext2D;
    }
}
