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
 * @fileoverview An interface for a listenable JavaScript object.
 * @author chrishenry@google.com (Chris Henry)
 */
goog.provide('goog.events.Listenable');
goog.provide('goog.events.ListenableKey');
/** @suppress {extraRequire} */
goog.require('goog.events.EventId');
goog.forwardDeclare('goog.events.EventLike');
goog.forwardDeclare('goog.events.EventTarget');
var goog;
(function (goog) {
    var events;
    (function (events) {
        var Listenable;
        (function (Listenable) {
            /**
             * An expando property to indicate that an object implements
             * goog.events.Listenable.
             *
             * See addImplementation/isImplementedBy.
             *
             * @type {string}
             * @const
             */
            Listenable.IMPLEMENTED_BY_PROP = 'closure_listenable_' + ((Math.random() * 1e6) | 0);
            /**
             * Marks a given class (constructor) as an implementation of
             * Listenable, do that we can query that fact at runtime. The class
             * must have already implemented the interface.
             * @param {!function(new:goog.events.Listenable,...)} cls The class constructor.
             *     The corresponding class must have already implemented the interface.
             */
            function addImplementation(cls) {
                cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;
            }
            Listenable.addImplementation = addImplementation;
            ;
            /**
             * @param {Object} obj The object to check.
             * @return {boolean} Whether a given instance implements Listenable. The
             *     class/superclass of the instance must call addImplementation.
             */
            function isImplementedBy(obj) {
                return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);
            }
            Listenable.isImplementedBy = isImplementedBy;
            ;
        })(Listenable = events.Listenable || (events.Listenable = {}));
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
(function (goog) {
    var events;
    (function (events) {
        var ListenableKey;
        (function (ListenableKey) {
            /**
             * Counter used to create a unique key
             * @type {number}
             * @private
             */
            ListenableKey.counter_ = 0;
            /**
             * Reserves a key to be used for ListenableKey#key field.
             * @return {number} A number to be used to fill ListenableKey#key
             *     field.
             */
            function reserveKey() {
                return ++goog.events.ListenableKey.counter_;
            }
            ListenableKey.reserveKey = reserveKey;
            ;
        })(ListenableKey = events.ListenableKey || (events.ListenableKey = {}));
    })(events = goog.events || (goog.events = {}));
})(goog || (goog = {}));
