// Copyright 2012 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Vendor prefix getters.
 */
goog.provide('goog.dom.vendor');
goog.require('goog.string');
goog.require('goog.userAgent');
var goog;
(function (goog) {
    var dom;
    (function (dom) {
        var vendor;
        (function (vendor) {
            /**
             * Returns the JS vendor prefix used in CSS properties. Different vendors
             * use different methods of changing the case of the property names.
             *
             * @return {?string} The JS vendor prefix or null if there is none.
             */
            function getVendorJsPrefix() {
                if (goog.userAgent.WEBKIT) {
                    return 'Webkit';
                }
                else if (goog.userAgent.GECKO) {
                    return 'Moz';
                }
                else if (goog.userAgent.IE) {
                    return 'ms';
                }
                else if (goog.userAgent.OPERA) {
                    return 'O';
                }
                return null;
            }
            vendor.getVendorJsPrefix = getVendorJsPrefix;
            ;
            /**
             * Returns the vendor prefix used in CSS properties.
             *
             * @return {?string} The vendor prefix or null if there is none.
             */
            function getVendorPrefix() {
                if (goog.userAgent.WEBKIT) {
                    return '-webkit';
                }
                else if (goog.userAgent.GECKO) {
                    return '-moz';
                }
                else if (goog.userAgent.IE) {
                    return '-ms';
                }
                else if (goog.userAgent.OPERA) {
                    return '-o';
                }
                return null;
            }
            vendor.getVendorPrefix = getVendorPrefix;
            ;
            /**
             * @param {string} propertyName A property name.
             * @param {!Object=} opt_object If provided, we verify if the property exists in
             *     the object.
             * @return {?string} A vendor prefixed property name, or null if it does not
             *     exist.
             */
            function getPrefixedPropertyName(propertyName, opt_object) {
                // We first check for a non-prefixed property, if available.
                if (opt_object && propertyName in opt_object) {
                    return propertyName;
                }
                var prefix = goog.dom.vendor.getVendorJsPrefix();
                if (prefix) {
                    prefix = prefix.toLowerCase();
                    var prefixedPropertyName = prefix + goog.string.toTitleCase(propertyName);
                    return (!goog.isDef(opt_object) || prefixedPropertyName in opt_object) ?
                        prefixedPropertyName :
                        null;
                }
                return null;
            }
            vendor.getPrefixedPropertyName = getPrefixedPropertyName;
            ;
            /**
             * @param {string} eventType An event type.
             * @return {string} A lower-cased vendor prefixed event type.
             */
            function getPrefixedEventType(eventType) {
                var prefix = goog.dom.vendor.getVendorJsPrefix() || '';
                return (prefix + eventType).toLowerCase();
            }
            vendor.getPrefixedEventType = getPrefixedEventType;
            ;
        })(vendor = dom.vendor || (dom.vendor = {}));
    })(dom = goog.dom || (goog.dom = {}));
})(goog || (goog = {}));
