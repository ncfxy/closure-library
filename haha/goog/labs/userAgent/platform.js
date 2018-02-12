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
 * @fileoverview Closure user agent platform detection.
 * @see <a href="http://www.useragentstring.com/">User agent strings</a>
 * For more information on browser brand, rendering engine, or device see the
 * other sub-namespaces in goog.labs.userAgent (browser, engine, and device
 * respectively).
 *
 */
goog.provide('goog.labs.userAgent.platform');
goog.require('goog.labs.userAgent.util');
goog.require('goog.string');
var goog;
(function (goog) {
    var labs;
    (function (labs) {
        var userAgent;
        (function (userAgent) {
            var platform;
            (function (platform) {
                /**
                 * @return {boolean} Whether the platform is Android.
                 */
                function isAndroid() {
                    return goog.labs.userAgent.util.matchUserAgent('Android');
                }
                platform.isAndroid = isAndroid;
                ;
                /**
                 * @return {boolean} Whether the platform is iPod.
                 */
                function isIpod() {
                    return goog.labs.userAgent.util.matchUserAgent('iPod');
                }
                platform.isIpod = isIpod;
                ;
                /**
                 * @return {boolean} Whether the platform is iPhone.
                 */
                function isIphone() {
                    return goog.labs.userAgent.util.matchUserAgent('iPhone') &&
                        !goog.labs.userAgent.util.matchUserAgent('iPod') &&
                        !goog.labs.userAgent.util.matchUserAgent('iPad');
                }
                platform.isIphone = isIphone;
                ;
                /**
                 * @return {boolean} Whether the platform is iPad.
                 */
                function isIpad() {
                    return goog.labs.userAgent.util.matchUserAgent('iPad');
                }
                platform.isIpad = isIpad;
                ;
                /**
                 * @return {boolean} Whether the platform is iOS.
                 */
                function isIos() {
                    return goog.labs.userAgent.platform.isIphone() ||
                        goog.labs.userAgent.platform.isIpad() ||
                        goog.labs.userAgent.platform.isIpod();
                }
                platform.isIos = isIos;
                ;
                /**
                 * @return {boolean} Whether the platform is Mac.
                 */
                function isMacintosh() {
                    return goog.labs.userAgent.util.matchUserAgent('Macintosh');
                }
                platform.isMacintosh = isMacintosh;
                ;
                /**
                 * Note: ChromeOS is not considered to be Linux as it does not report itself
                 * as Linux in the user agent string.
                 * @return {boolean} Whether the platform is Linux.
                 */
                function isLinux() {
                    return goog.labs.userAgent.util.matchUserAgent('Linux');
                }
                platform.isLinux = isLinux;
                ;
                /**
                 * @return {boolean} Whether the platform is Windows.
                 */
                function isWindows() {
                    return goog.labs.userAgent.util.matchUserAgent('Windows');
                }
                platform.isWindows = isWindows;
                ;
                /**
                 * @return {boolean} Whether the platform is ChromeOS.
                 */
                function isChromeOS() {
                    return goog.labs.userAgent.util.matchUserAgent('CrOS');
                }
                platform.isChromeOS = isChromeOS;
                ;
                /**
                 * @return {boolean} Whether the platform is Chromecast.
                 */
                function isChromecast() {
                    return goog.labs.userAgent.util.matchUserAgent('CrKey');
                }
                platform.isChromecast = isChromecast;
                ;
                /**
                 * The version of the platform. We only determine the version for Windows,
                 * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
                 * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
                 * version 0.0.
                 *
                 * @return {string} The platform version or empty string if version cannot be
                 *     determined.
                 */
                function getVersion() {
                    var userAgentString = goog.labs.userAgent.util.getUserAgent();
                    var version = '', re;
                    if (goog.labs.userAgent.platform.isWindows()) {
                        re = /Windows (?:NT|Phone) ([0-9.]+)/;
                        var match = re.exec(userAgentString);
                        if (match) {
                            version = match[1];
                        }
                        else {
                            version = '0.0';
                        }
                    }
                    else if (goog.labs.userAgent.platform.isIos()) {
                        re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
                        var match = re.exec(userAgentString);
                        // Report the version as x.y.z and not x_y_z
                        version = match && match[1].replace(/_/g, '.');
                    }
                    else if (goog.labs.userAgent.platform.isMacintosh()) {
                        re = /Mac OS X ([0-9_.]+)/;
                        var match = re.exec(userAgentString);
                        // Note: some old versions of Camino do not report an OSX version.
                        // Default to 10.
                        version = match ? match[1].replace(/_/g, '.') : '10';
                    }
                    else if (goog.labs.userAgent.platform.isAndroid()) {
                        re = /Android\s+([^\);]+)(\)|;)/;
                        var match = re.exec(userAgentString);
                        version = match && match[1];
                    }
                    else if (goog.labs.userAgent.platform.isChromeOS()) {
                        re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
                        var match = re.exec(userAgentString);
                        version = match && match[1];
                    }
                    return version || '';
                }
                platform.getVersion = getVersion;
                ;
                /**
                 * @param {string|number} version The version to check.
                 * @return {boolean} Whether the browser version is higher or the same as the
                 *     given version.
                 */
                function isVersionOrHigher(version) {
                    return goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), version) >= 0;
                }
                platform.isVersionOrHigher = isVersionOrHigher;
                ;
            })(platform = userAgent.platform || (userAgent.platform = {}));
        })(userAgent = labs.userAgent || (labs.userAgent = {}));
    })(labs = goog.labs || (goog.labs = {}));
})(goog || (goog = {}));
