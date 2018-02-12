// Copyright 2011 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Wrappers for HTML5 Entry objects. These are all in the same
 * file to avoid circular dependency issues.
 *
 * When adding or modifying functionality in this namespace, be sure to update
 * the mock counterparts in goog.testing.fs.
 *
 */
goog.provide('goog.fs.DirectoryEntry');
goog.provide('goog.fs.DirectoryEntry.Behavior');
goog.provide('goog.fs.Entry');
goog.provide('goog.fs.FileEntry');
var goog;
(function (goog) {
    var fs;
    (function (fs) {
        var DirectoryEntry;
        (function (DirectoryEntry) {
            /**
             * Behaviors for getting files and directories.
             * @enum {number}
             */
            var Behavior;
            (function (Behavior) {
                /**
                 * Get the file if it exists, error out if it doesn't.
                 */
                Behavior[Behavior["DEFAULT"] = 1] = "DEFAULT";
                /**
                 * Get the file if it exists, create it if it doesn't.
                 */
                Behavior[Behavior["CREATE"] = 2] = "CREATE";
                /**
                 * Error out if the file exists, create it if it doesn't.
                 */
                Behavior[Behavior["CREATE_EXCLUSIVE"] = 3] = "CREATE_EXCLUSIVE";
            })(Behavior = DirectoryEntry.Behavior || (DirectoryEntry.Behavior = {}));
            ;
        })(DirectoryEntry = fs.DirectoryEntry || (fs.DirectoryEntry = {}));
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
