/// <reference path="../labs/userAgent/browser" />
/// <reference path="../labs/userAgent/engine" />
/// <reference path="../labs/userAgent/platform" />
/// <reference path="../labs/userAgent/util" />
/// <reference path="../reflect/reflect" />
/// <reference path="../string/string" />
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
 * @fileoverview Rendering engine detection.
 * @see <a href="http://www.useragentstring.com/">User agent strings</a>
 * For information on the browser brand (such as Safari versus Chrome), see
 * goog.userAgent.product.
 * @author arv@google.com (Erik Arvidsson)
 * @see ../demos/useragent.html
 */
goog.provide('goog.userAgent');
goog.require('goog.labs.userAgent.browser');
goog.require('goog.labs.userAgent.engine');
goog.require('goog.labs.userAgent.platform');
goog.require('goog.labs.userAgent.util');
goog.require('goog.reflect');
goog.require('goog.string');
/**
 * @define {boolean} Whether we know at compile-time that the browser is IE.
 */
goog.define('goog.userAgent.ASSUME_IE', false);
/**
 * @define {boolean} Whether we know at compile-time that the browser is EDGE.
 */
goog.define('goog.userAgent.ASSUME_EDGE', false);
/**
 * @define {boolean} Whether we know at compile-time that the browser is GECKO.
 */
goog.define('goog.userAgent.ASSUME_GECKO', false);
/**
 * @define {boolean} Whether we know at compile-time that the browser is WEBKIT.
 */
goog.define('goog.userAgent.ASSUME_WEBKIT', false);
/**
 * @define {boolean} Whether we know at compile-time that the browser is a
 *     mobile device running WebKit e.g. iPhone or Android.
 */
goog.define('goog.userAgent.ASSUME_MOBILE_WEBKIT', false);
/**
 * @define {boolean} Whether we know at compile-time that the browser is OPERA.
 */
goog.define('goog.userAgent.ASSUME_OPERA', false);
/**
 * @define {boolean} Whether the
 *     {@code goog.userAgent.isVersionOrHigher}
 *     function will return true for any version.
 */
goog.define('goog.userAgent.ASSUME_ANY_VERSION', false);
var goog;
(function (goog) {
    var userAgent;
    (function (userAgent_1) {
        /**
         * @define {boolean} Whether we know at compile-time that the browser is IE.
         */
        userAgent_1.ASSUME_IE = false;
        /**
         * @define {boolean} Whether we know at compile-time that the browser is EDGE.
         */
        userAgent_1.ASSUME_EDGE = false;
        /**
         * @define {boolean} Whether we know at compile-time that the browser is GECKO.
         */
        userAgent_1.ASSUME_GECKO = false;
        /**
         * @define {boolean} Whether we know at compile-time that the browser is WEBKIT.
         */
        userAgent_1.ASSUME_WEBKIT = false;
        /**
         * @define {boolean} Whether we know at compile-time that the browser is a
         *     mobile device running WebKit e.g. iPhone or Android.
         */
        userAgent_1.ASSUME_MOBILE_WEBKIT = false;
        /**
         * @define {boolean} Whether we know at compile-time that the browser is OPERA.
         */
        userAgent_1.ASSUME_OPERA = false;
        /**
         * @define {boolean} Whether the
         *     {@code goog.userAgent.isVersionOrHigher}
         *     function will return true for any version.
         */
        userAgent_1.ASSUME_ANY_VERSION = false;
        /**
         * Whether we know the browser engine at compile-time.
         * @type {boolean}
         * @private
         */
        userAgent_1.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE ||
            goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO ||
            goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT ||
            goog.userAgent.ASSUME_OPERA;
        /**
         * Returns the userAgent string for the current browser.
         *
         * @return {string} The userAgent string.
         */
        function getUserAgentString() {
            return goog.labs.userAgent.util.getUserAgent();
        }
        userAgent_1.getUserAgentString = getUserAgentString;
        ;
        /**
         * TODO(nnaze): Change type to "Navigator" and update compilation targets.
         * @return {?Object} The native navigator object.
         */
        function getNavigator() {
            // Need a local navigator reference instead of using the global one,
            // to avoid the rare case where they reference different objects.
            // (in a WorkerPool, for example).
            return goog.global['navigator'] || null;
        }
        userAgent_1.getNavigator = getNavigator;
        ;
        /**
         * Whether the user agent is Opera.
         * @type {boolean}
         */
        userAgent_1.OPERA = goog.userAgent.BROWSER_KNOWN_ ?
            goog.userAgent.ASSUME_OPERA :
            goog.labs.userAgent.browser.isOpera();
        /**
        * Whether the user agent is Internet Explorer.
        * @type {boolean}
        */
        userAgent_1.IE = goog.userAgent.BROWSER_KNOWN_ ?
            goog.userAgent.ASSUME_IE :
            goog.labs.userAgent.browser.isIE();
        /**
        * Whether the user agent is Microsoft Edge.
        * @type {boolean}
        */
        userAgent_1.EDGE = goog.userAgent.BROWSER_KNOWN_ ?
            goog.userAgent.ASSUME_EDGE :
            goog.labs.userAgent.engine.isEdge();
        /**
        * Whether the user agent is MS Internet Explorer or MS Edge.
        * @type {boolean}
        */
        userAgent_1.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
        /**
        * Whether the user agent is Gecko. Gecko is the rendering engine used by
        * Mozilla, Firefox, and others.
        * @type {boolean}
        */
        userAgent_1.GECKO = goog.userAgent.BROWSER_KNOWN_ ?
            goog.userAgent.ASSUME_GECKO :
            goog.labs.userAgent.engine.isGecko();
        /**
        * Whether the user agent is WebKit. WebKit is the rendering engine that
        * Safari, Android and others use.
        * @type {boolean}
        */
        userAgent_1.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ?
            goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT :
            goog.labs.userAgent.engine.isWebKit();
        /**
         * Whether the user agent is running on a mobile device.
         *
         * This is a separate function so that the logic can be tested.
         *
         * TODO(nnaze): Investigate swapping in goog.labs.userAgent.device.isMobile().
         *
         * @return {boolean} Whether the user agent is running on a mobile device.
         * @private
         */
        function isMobile_() {
            return goog.userAgent.WEBKIT &&
                goog.labs.userAgent.util.matchUserAgent('Mobile');
        }
        userAgent_1.isMobile_ = isMobile_;
        ;
        /**
         * Whether the user agent is running on a mobile device.
         *
         * TODO(nnaze): Consider deprecating MOBILE when labs.userAgent
         *   is promoted as the gecko/webkit logic is likely inaccurate.
         *
         * @type {boolean}
         */
        userAgent_1.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
        /**
         * Used while transitioning code to use WEBKIT instead.
         * @type {boolean}
         * @deprecated Use {@link goog.userAgent.product.SAFARI} instead.
         * TODO(nicksantos): Delete this from goog.userAgent.
         */
        userAgent_1.SAFARI = goog.userAgent.WEBKIT;
        /**
         * @return {string} the platform (operating system) the user agent is running
         *     on. Default to empty string because navigator.platform may not be defined
         *     (on Rhino, for example).
         * @private
         */
        function determinePlatform_() {
            var navigator = goog.userAgent.getNavigator();
            return navigator && navigator.platform || '';
        }
        userAgent_1.determinePlatform_ = determinePlatform_;
        ;
        /**
         * The platform (operating system) the user agent is running on. Default to
         * empty string because navigator.platform may not be defined (on Rhino, for
         * example).
         * @type {string}
         */
        userAgent_1.PLATFORM = goog.userAgent.determinePlatform_();
        /**
         * @define {boolean} Whether the user agent is running on a Macintosh operating
         *     system.
         */
        userAgent_1.ASSUME_MAC = false;
        /**
         * @define {boolean} Whether the user agent is running on a Windows operating
         *     system.
         */
        userAgent_1.ASSUME_WINDOWS = false;
        /**
         * @define {boolean} Whether the user agent is running on a Linux operating
         *     system.
         */
        userAgent_1.ASSUME_LINUX = false;
        /**
         * @define {boolean} Whether the user agent is running on a X11 windowing
         *     system.
         */
        userAgent_1.ASSUME_X11 = false;
        /**
         * @define {boolean} Whether the user agent is running on Android.
         */
        userAgent_1.ASSUME_ANDROID = false;
        /**
         * @define {boolean} Whether the user agent is running on an iPhone.
         */
        userAgent_1.ASSUME_IPHONE = false;
        /**
         * @define {boolean} Whether the user agent is running on an iPad.
         */
        userAgent_1.ASSUME_IPAD = false;
        /**
         * @define {boolean} Whether the user agent is running on an iPod.
         */
        userAgent_1.ASSUME_IPOD = false;
        /**
         * @type {boolean}
         * @private
         */
        userAgent_1.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC ||
            goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX ||
            goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID ||
            goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD ||
            goog.userAgent.ASSUME_IPOD;
        /**
        * Whether the user agent is running on a Macintosh operating system.
        * @type {boolean}
        */
        userAgent_1.MAC = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_MAC :
            goog.labs.userAgent.platform.isMacintosh();
        /**
        * Whether the user agent is running on a Windows operating system.
        * @type {boolean}
        */
        userAgent_1.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_WINDOWS :
            goog.labs.userAgent.platform.isWindows();
        /**
        * Whether the user agent is Linux per the legacy behavior of
        * goog.userAgent.LINUX, which considered ChromeOS to also be
        * Linux.
        * @return {boolean}
        * @private
        */
        function isLegacyLinux_() {
            return goog.labs.userAgent.platform.isLinux() ||
                goog.labs.userAgent.platform.isChromeOS();
        }
        userAgent_1.isLegacyLinux_ = isLegacyLinux_;
        ;
        /**
        * Whether the user agent is running on a Linux operating system.
        *
        * Note that goog.userAgent.LINUX considers ChromeOS to be Linux,
        * while goog.labs.userAgent.platform considers ChromeOS and
        * Linux to be different OSes.
        *
        * @type {boolean}
        */
        userAgent_1.LINUX = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_LINUX :
            goog.userAgent.isLegacyLinux_();
        /**
        * @return {boolean} Whether the user agent is an X11 windowing system.
        * @private
        */
        function isX11_() {
            var navigator = goog.userAgent.getNavigator();
            return !!navigator &&
                goog.string.contains(navigator['appVersion'] || '', 'X11');
        }
        userAgent_1.isX11_ = isX11_;
        ;
        /**
        * Whether the user agent is running on a X11 windowing system.
        * @type {boolean}
        */
        userAgent_1.X11 = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_X11 :
            goog.userAgent.isX11_();
        /**
        * Whether the user agent is running on Android.
        * @type {boolean}
        */
        userAgent_1.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_ANDROID :
            goog.labs.userAgent.platform.isAndroid();
        /**
        * Whether the user agent is running on an iPhone.
        * @type {boolean}
        */
        userAgent_1.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_IPHONE :
            goog.labs.userAgent.platform.isIphone();
        /**
        * Whether the user agent is running on an iPad.
        * @type {boolean}
        */
        userAgent_1.IPAD = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_IPAD :
            goog.labs.userAgent.platform.isIpad();
        /**
        * Whether the user agent is running on an iPod.
        * @type {boolean}
        */
        userAgent_1.IPOD = goog.userAgent.PLATFORM_KNOWN_ ?
            goog.userAgent.ASSUME_IPOD :
            goog.labs.userAgent.platform.isIpod();
        /**
        * Whether the user agent is running on iOS.
        * @type {boolean}
        */
        userAgent_1.IOS = goog.userAgent.PLATFORM_KNOWN_ ?
            (goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD ||
                goog.userAgent.ASSUME_IPOD) :
            goog.labs.userAgent.platform.isIos();
        /**
        * @return {string} The string that describes the version number of the user
        *     agent.
        * @private
        */
        function determineVersion_() {
            // All browsers have different ways to detect the version and they all have
            // different naming schemes.
            // version is a string rather than a number because it may contain 'b', 'a',
            // and so on.
            var version = '';
            var arr = goog.userAgent.getVersionRegexResult_();
            if (arr) {
                version = arr ? arr[1] : '';
            }
            if (goog.userAgent.IE) {
                // IE9 can be in document mode 9 but be reporting an inconsistent user agent
                // version.  If it is identifying as a version lower than 9 we take the
                // documentMode as the version instead.  IE8 has similar behavior.
                // It is recommended to set the X-UA-Compatible header to ensure that IE9
                // uses documentMode 9.
                var docMode = goog.userAgent.getDocumentMode_();
                if (docMode != null && docMode > parseFloat(version)) {
                    return String(docMode);
                }
            }
            return version;
        }
        userAgent_1.determineVersion_ = determineVersion_;
        ;
        /**
        * @return {?Array|undefined} The version regex matches from parsing the user
        *     agent string. These regex statements must be executed inline so they can
        *     be compiled out by the closure compiler with the rest of the useragent
        *     detection logic when ASSUME_* is specified.
        * @private
        */
        function getVersionRegexResult_() {
            var userAgent = goog.userAgent.getUserAgentString();
            if (goog.userAgent.GECKO) {
                return /rv\:([^\);]+)(\)|;)/.exec(userAgent);
            }
            if (goog.userAgent.EDGE) {
                return /Edge\/([\d\.]+)/.exec(userAgent);
            }
            if (goog.userAgent.IE) {
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
            }
            if (goog.userAgent.WEBKIT) {
                // WebKit/125.4
                return /WebKit\/(\S+)/.exec(userAgent);
            }
            if (goog.userAgent.OPERA) {
                // If none of the above browsers were detected but the browser is Opera, the
                // only string that is of interest is 'Version/<number>'.
                return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
            }
            return undefined;
        }
        userAgent_1.getVersionRegexResult_ = getVersionRegexResult_;
        ;
        /**
        * @return {number|undefined} Returns the document mode (for testing).
        * @private
        */
        function getDocumentMode_() {
            // NOTE(user): goog.userAgent may be used in context where there is no DOM.
            var doc = goog.global['document'];
            return doc ? doc['documentMode'] : undefined;
        }
        userAgent_1.getDocumentMode_ = getDocumentMode_;
        ;
        /**
        * The version of the user agent. This is a string because it might contain
        * 'b' (as in beta) as well as multiple dots.
        * @type {string}
        */
        userAgent_1.VERSION = goog.userAgent.determineVersion_();
        /**
        * Compares two version numbers.
        *
        * @param {string} v1 Version of first item.
        * @param {string} v2 Version of second item.
        *
        * @return {number}  1 if first argument is higher
        *                   0 if arguments are equal
        *                  -1 if second argument is higher.
        * @deprecated Use goog.string.compareVersions.
        */
        function compare(v1, v2) {
            return goog.string.compareVersions(v1, v2);
        }
        userAgent_1.compare = compare;
        ;
        /**
        * Cache for {@link goog.userAgent.isVersionOrHigher}.
        * Calls to compareVersions are surprisingly expensive and, as a browser's
        * version number is unlikely to change during a session, we cache the results.
        * @const
        * @private
        */
        userAgent_1.isVersionOrHigherCache_ = {};
        /**
        * Whether the user agent version is higher or the same as the given version.
        * NOTE: When checking the version numbers for Firefox and Safari, be sure to
        * use the engine's version, not the browser's version number.  For example,
        * Firefox 3.0 corresponds to Gecko 1.9 and Safari 3.0 to Webkit 522.11.
        * Opera and Internet Explorer versions match the product release number.<br>
        * @see <a href="http://en.wikipedia.org/wiki/Safari_version_history">
        *     Webkit</a>
        * @see <a href="http://en.wikipedia.org/wiki/Gecko_engine">Gecko</a>
        *
        * @param {string|number} version The version to check.
        * @return {boolean} Whether the user agent version is higher or the same as
        *     the given version.
        */
        function isVersionOrHigher(version) {
            return goog.userAgent.ASSUME_ANY_VERSION ||
                goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, version, function () {
                    return goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0;
                });
        }
        userAgent_1.isVersionOrHigher = isVersionOrHigher;
        ;
        /**
        * Deprecated alias to {@code goog.userAgent.isVersionOrHigher}.
        * @param {string|number} version The version to check.
        * @return {boolean} Whether the user agent version is higher or the same as
        *     the given version.
        * @deprecated Use goog.userAgent.isVersionOrHigher().
        */
        userAgent_1.isVersion = goog.userAgent.isVersionOrHigher;
        /**
        * Whether the IE effective document mode is higher or the same as the given
        * document mode version.
        * NOTE: Only for IE, return false for another browser.
        *
        * @param {number} documentMode The document mode version to check.
        * @return {boolean} Whether the IE effective document mode is higher or the
        *     same as the given version.
        */
        function isDocumentModeOrHigher(documentMode) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= documentMode;
        }
        userAgent_1.isDocumentModeOrHigher = isDocumentModeOrHigher;
        ;
        /**
        * Deprecated alias to {@code goog.userAgent.isDocumentModeOrHigher}.
        * @param {number} version The version to check.
        * @return {boolean} Whether the IE effective document mode is higher or the
        *      same as the given version.
        * @deprecated Use goog.userAgent.isDocumentModeOrHigher().
        */
        userAgent_1.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
        /**
        * For IE version < 7, documentMode is undefined, so attempt to use the
        * CSS1Compat property to see if we are in standards mode. If we are in
        * standards mode, treat the browser version as the document mode. Otherwise,
        * IE is emulating version 5.
        * @type {number|undefined}
        * @const
        */
        userAgent_1.DOCUMENT_MODE = (function () {
            var doc = goog.global['document'];
            var mode = goog.userAgent.getDocumentMode_();
            if (!doc || !goog.userAgent.IE) {
                return undefined;
            }
            return mode || (doc['compatMode'] == 'CSS1Compat' ?
                parseInt(goog.userAgent.VERSION, 10) :
                5);
        })();
    })(userAgent = goog.userAgent || (goog.userAgent = {}));
})(goog || (goog = {}));
/**
 * @define {boolean} Whether the user agent is running on a Macintosh operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_MAC', false);
/**
 * @define {boolean} Whether the user agent is running on a Windows operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_WINDOWS', false);
/**
 * @define {boolean} Whether the user agent is running on a Linux operating
 *     system.
 */
goog.define('goog.userAgent.ASSUME_LINUX', false);
/**
 * @define {boolean} Whether the user agent is running on a X11 windowing
 *     system.
 */
goog.define('goog.userAgent.ASSUME_X11', false);
/**
 * @define {boolean} Whether the user agent is running on Android.
 */
goog.define('goog.userAgent.ASSUME_ANDROID', false);
/**
 * @define {boolean} Whether the user agent is running on an iPhone.
 */
goog.define('goog.userAgent.ASSUME_IPHONE', false);
/**
 * @define {boolean} Whether the user agent is running on an iPad.
 */
goog.define('goog.userAgent.ASSUME_IPAD', false);
/**
 * @define {boolean} Whether the user agent is running on an iPod.
 */
goog.define('goog.userAgent.ASSUME_IPOD', false);
