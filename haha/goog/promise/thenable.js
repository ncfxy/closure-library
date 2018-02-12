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
goog.provide('goog.Thenable');
/** @suppress {extraRequire} */
goog.forwardDeclare('goog.Promise'); // for the type reference.
var goog;
(function (goog) {
    var Thenable;
    (function (Thenable) {
        /**
         * An expando property to indicate that an object implements
         * {@code goog.Thenable}.
         *
         * {@see addImplementation}.
         *
         * @const
         */
        Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';
        /**
         * Marks a given class (constructor) as an implementation of Thenable, so
         * that we can query that fact at runtime. The class must have already
         * implemented the interface.
         * Exports a 'then' method on the constructor prototype, so that the objects
         * also implement the extern {@see goog.Thenable} interface for interop with
         * other Promise implementations.
         * @param {function(new:goog.Thenable,...?)} ctor The class constructor. The
         *     corresponding class must have already implemented the interface.
         */
        function addImplementation(ctor) {
            // Use bracket notation instead of goog.exportSymbol() so that the compiler
            // won't create a 'var ctor;' extern when the "create externs from exports"
            // mode is enabled.
            ctor.prototype['then'] = ctor.prototype.then;
            if (COMPILED) {
                ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;
            }
            else {
                // Avoids dictionary access in uncompiled mode.
                ctor.prototype.$goog_Thenable = true;
            }
        }
        Thenable.addImplementation = addImplementation;
        ;
        /**
         * @param {?} object
         * @return {boolean} Whether a given instance implements {@code goog.Thenable}.
         *     The class/superclass of the instance must call {@code addImplementation}.
         */
        function isImplementedBy(object) {
            if (!object) {
                return false;
            }
            try {
                if (COMPILED) {
                    return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];
                }
                return !!object.$goog_Thenable;
            }
            catch (e) {
                // Property access seems to be forbidden.
                return false;
            }
        }
        Thenable.isImplementedBy = isImplementedBy;
        ;
    })(Thenable = goog.Thenable || (goog.Thenable = {}));
})(goog || (goog = {}));
