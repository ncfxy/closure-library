// Copyright 2008 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Generator for unique element IDs.
 *
 */
goog.provide('goog.ui.IdGenerator');
var goog;
(function (goog) {
    var ui;
    (function (ui) {
        var IdGenerator = /** @class */ (function () {
            /**
             * Creates a new id generator.
             * @constructor
             * @final
             */
            function IdGenerator() {
                /**
                 * Next unique ID to use
                 * @type {number}
                 * @private
                 */
                this.nextId_ = 0;
            }
            /**
             * Gets the next unique ID.
             * @return {string} The next unique identifier.
             */
            IdGenerator.prototype.getNextUniqueId = function () {
                return ':' + (this.nextId_++).toString(36);
            };
            return IdGenerator;
        }());
        ui.IdGenerator = IdGenerator;
    })(ui = goog.ui || (goog.ui = {}));
})(goog || (goog = {}));
(function (goog) {
    var ui;
    (function (ui) {
        var IdGenerator;
        (function (IdGenerator) {
            IdGenerator.instance_ = undefined;
            function getInstance() {
                if (goog.ui.IdGenerator.instance_) {
                    return goog.ui.IdGenerator.instance_;
                }
                if (goog.DEBUG) {
                    // NOTE: JSCompiler can't optimize away Array#push.
                    goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = goog.ui.IdGenerator;
                }
                return goog.ui.IdGenerator.instance_ = new goog.ui.IdGenerator();
            }
            IdGenerator.getInstance = getInstance;
        })(IdGenerator = ui.IdGenerator || (ui.IdGenerator = {}));
    })(ui = goog.ui || (goog.ui = {}));
})(goog || (goog = {}));
goog.addSingletonGetter(goog.ui.IdGenerator);
