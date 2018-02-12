// Copyright 2013 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Closure user agent detection.
 * @see http://en.wikipedia.org/wiki/User_agent
 * For more information on browser brand, platform, or device see the other
 * sub-namespaces in goog.labs.userAgent (browser, platform, and device).
 *
 */
goog.provide('goog.labs.userAgent.engine');
goog.require('goog.array');
goog.require('goog.labs.userAgent.util');
goog.require('goog.string');
var goog;
(function (goog) {
    var labs;
    (function (labs) {
        var userAgent;
        (function (userAgent) {
            var engine;
            (function (engine) {
                /**
                 * @return {boolean} Whether the rendering engine is Presto.
                 */
                function isPresto() {
                    return goog.labs.userAgent.util.matchUserAgent('Presto');
                }
                engine.isPresto = isPresto;
                ;
                /**
                 * @return {boolean} Whether the rendering engine is Trident.
                 */
                function isTrident() {
                    // IE only started including the Trident token in IE8.
                    return goog.labs.userAgent.util.matchUserAgent('Trident') ||
                        goog.labs.userAgent.util.matchUserAgent('MSIE');
                }
                engine.isTrident = isTrident;
                ;
                /**
                 * @return {boolean} Whether the rendering engine is Edge.
                 */
                function isEdge() {
                    return goog.labs.userAgent.util.matchUserAgent('Edge');
                }
                engine.isEdge = isEdge;
                ;
                /**
                 * @return {boolean} Whether the rendering engine is WebKit.
                 */
                function isWebKit() {
                    return goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&
                        !goog.labs.userAgent.engine.isEdge();
                }
                engine.isWebKit = isWebKit;
                ;
                /**
                 * @return {boolean} Whether the rendering engine is Gecko.
                 */
                function isGecko() {
                    return goog.labs.userAgent.util.matchUserAgent('Gecko') &&
                        !goog.labs.userAgent.engine.isWebKit() &&
                        !goog.labs.userAgent.engine.isTrident() &&
                        !goog.labs.userAgent.engine.isEdge();
                }
                engine.isGecko = isGecko;
                ;
                /**
                 * @return {string} The rendering engine's version or empty string if version
                 *     can't be determined.
                 */
                function getVersion() {
                    var userAgentString = goog.labs.userAgent.util.getUserAgent();
                    if (userAgentString) {
                        var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);
                        var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);
                        if (engineTuple) {
                            // In Gecko, the version string is either in the browser info or the
                            // Firefox version.  See Gecko user agent string reference:
                            // http://goo.gl/mULqa
                            if (engineTuple[0] == 'Gecko') {
                                return goog.labs.userAgent.engine.getVersionForKey_(tuples, 'Firefox');
                            }
                            return engineTuple[1];
                        }
                        // MSIE has only one version identifier, and the Trident version is
                        // specified in the parenthetical. IE Edge is covered in the engine tuple
                        // detection.
                        var browserTuple = tuples[0];
                        var info;
                        if (browserTuple && (info = browserTuple[2])) {
                            var match = /Trident\/([^\s;]+)/.exec(info);
                            if (match) {
                                return match[1];
                            }
                        }
                    }
                    return '';
                }
                engine.getVersion = getVersion;
                ;
                /**
                 * @param {!Array<!Array<string>>} tuples Extracted version tuples.
                 * @return {!Array<string>|undefined} The engine tuple or undefined if not
                 *     found.
                 * @private
                 */
                function getEngineTuple_(tuples) {
                    if (!goog.labs.userAgent.engine.isEdge()) {
                        return tuples[1];
                    }
                    for (var i = 0; i < tuples.length; i++) {
                        var tuple = tuples[i];
                        if (tuple[0] == 'Edge') {
                            return tuple;
                        }
                    }
                }
                engine.getEngineTuple_ = getEngineTuple_;
                ;
                /**
                 * @param {string|number} version The version to check.
                 * @return {boolean} Whether the rendering engine version is higher or the same
                 *     as the given version.
                 */
                function isVersionOrHigher(version) {
                    return goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), version) >= 0;
                }
                engine.isVersionOrHigher = isVersionOrHigher;
                ;
                /**
                 * @param {!Array<!Array<string>>} tuples Version tuples.
                 * @param {string} key The key to look for.
                 * @return {string} The version string of the given key, if present.
                 *     Otherwise, the empty string.
                 * @private
                 */
                function getVersionForKey_(tuples, key) {
                    // TODO(nnaze): Move to util if useful elsewhere.
                    var pair = goog.array.find(tuples, function (pair) { return key == pair[0]; });
                    return pair && pair[1] || '';
                }
                engine.getVersionForKey_ = getVersionForKey_;
                ;
            })(engine = userAgent.engine || (userAgent.engine = {}));
        })(userAgent = labs.userAgent || (labs.userAgent = {}));
    })(labs = goog.labs || (goog.labs = {}));
})(goog || (goog = {}));
