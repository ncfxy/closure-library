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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview Concrete implementations of the
 *     goog.fs.DirectoryEntry, and goog.fs.FileEntry interfaces.
 */
goog.provide('goog.fs.DirectoryEntryImpl');
goog.provide('goog.fs.EntryImpl');
goog.provide('goog.fs.FileEntryImpl');
goog.require('goog.array');
goog.require('goog.async.Deferred');
goog.require('goog.fs.DirectoryEntry');
goog.require('goog.fs.Entry');
goog.require('goog.fs.Error');
goog.require('goog.fs.FileEntry');
goog.require('goog.fs.FileWriter');
goog.require('goog.functions');
goog.require('goog.string');
var goog;
(function (goog) {
    var fs;
    (function (fs_1) {
        var EntryImpl = /** @class */ (function () {
            /**
             * Base class for concrete implementations of goog.fs.Entry.
             * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
             * @param {!Entry} entry The underlying Entry object.
             * @constructor
             * @implements {goog.fs.Entry}
             */
            function EntryImpl(fs, entry) {
                /** @override */
                this.toUri = goog.fs.EntryImpl.prototype.toUrl;
                /**
                 * The wrapped filesystem.
                 *
                 * @type {!goog.fs.FileSystem}
                 * @private
                 */
                this.fs_ = fs;
                /**
                 * The underlying Entry object.
                 *
                 * @type {!Entry}
                 * @private
                 */
                this.entry_ = entry;
            }
            /** @override */
            EntryImpl.prototype.isFile = function () {
                return this.entry_.isFile;
            };
            ;
            /** @override */
            EntryImpl.prototype.isDirectory = function () {
                return this.entry_.isDirectory;
            };
            ;
            /** @override */
            EntryImpl.prototype.getName = function () {
                return this.entry_.name;
            };
            ;
            /** @override */
            EntryImpl.prototype.getFullPath = function () {
                return this.entry_.fullPath;
            };
            ;
            /** @override */
            EntryImpl.prototype.getFileSystem = function () {
                return this.fs_;
            };
            ;
            /** @override */
            EntryImpl.prototype.getLastModified = function () {
                return this.getMetadata().addCallback(function (metadata) {
                    return metadata.modificationTime;
                });
            };
            ;
            /** @override */
            EntryImpl.prototype.getMetadata = function () {
                var d = new goog.async.Deferred();
                this.entry_.getMetadata(function (metadata) {
                    d.callback(metadata);
                }, goog.bind(function (err) {
                    var msg = 'retrieving metadata for ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            EntryImpl.prototype.moveTo = function (parent, opt_newName) {
                var d = new goog.async.Deferred();
                this.entry_.moveTo(
                /** @type {!goog.fs.DirectoryEntryImpl} */ (parent).dir_, opt_newName, goog.bind(function (entry) {
                    d.callback(this.wrapEntry(entry));
                }, this), goog.bind(function (err) {
                    var msg = 'moving ' + this.getFullPath() + ' into ' +
                        parent.getFullPath() +
                        (opt_newName ? ', renaming to ' + opt_newName : '');
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            EntryImpl.prototype.copyTo = function (parent, opt_newName) {
                var d = new goog.async.Deferred();
                this.entry_.copyTo(
                /** @type {!goog.fs.DirectoryEntryImpl} */ (parent).dir_, opt_newName, goog.bind(function (entry) {
                    d.callback(this.wrapEntry(entry));
                }, this), goog.bind(function (err) {
                    var msg = 'copying ' + this.getFullPath() + ' into ' +
                        parent.getFullPath() +
                        (opt_newName ? ', renaming to ' + opt_newName : '');
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            EntryImpl.prototype.wrapEntry = function (entry) {
                return entry.isFile ?
                    new goog.fs.FileEntryImpl(this.fs_, /** @type {!FileEntry} */ (entry)) :
                    new goog.fs.DirectoryEntryImpl(this.fs_, /** @type {!DirectoryEntry} */ (entry));
            };
            ;
            /** @override */
            EntryImpl.prototype.toUrl = function (opt_mimeType) {
                return this.entry_.toURL(opt_mimeType);
            };
            ;
            /** @override */
            EntryImpl.prototype.remove = function () {
                var d = new goog.async.Deferred();
                this.entry_.remove(goog.bind(d.callback, d, true /* result */), goog.bind(function (err) {
                    var msg = 'removing ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            EntryImpl.prototype.getParent = function () {
                var d = new goog.async.Deferred();
                this.entry_.getParent(goog.bind(function (parent) {
                    d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, parent));
                }, this), goog.bind(function (err) {
                    var msg = 'getting parent of ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            return EntryImpl;
        }());
        fs_1.EntryImpl = EntryImpl;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
(function (goog) {
    var fs;
    (function (fs_2) {
        var DirectoryEntryImpl = /** @class */ (function (_super) {
            __extends(DirectoryEntryImpl, _super);
            /**
             * A directory in a local FileSystem.
             *
             * This should not be instantiated directly. Instead, it should be accessed via
             * {@link goog.fs.FileSystem#getRoot} or
             * {@link goog.fs.DirectoryEntry#getDirectoryEntry}.
             *
             * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
             * @param {!DirectoryEntry} dir The underlying DirectoryEntry object.
             * @constructor
             * @extends {goog.fs.EntryImpl}
             * @implements {goog.fs.DirectoryEntry}
             * @final
             */
            function DirectoryEntryImpl(fs, dir) {
                var _this = 
                // goog.fs.DirectoryEntryImpl.base(this, 'constructor', fs, dir);
                _super.call(this, fs, dir) || this;
                /**
                 * The underlying DirectoryEntry object.
                 *
                 * @type {!DirectoryEntry}
                 * @private
                 */
                _this.dir_ = dir;
                return _this;
            }
            ;
            /** @override */
            DirectoryEntryImpl.prototype.getFile = function (path, opt_behavior) {
                var d = new goog.async.Deferred();
                this.dir_.getFile(path, this.getOptions_(opt_behavior), goog.bind(function (entry) {
                    d.callback(new goog.fs.FileEntryImpl(this.fs_, entry));
                }, this), goog.bind(function (err) {
                    var msg = 'loading file ' + path + ' from ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            DirectoryEntryImpl.prototype.getDirectory = function (path, opt_behavior) {
                var d = new goog.async.Deferred();
                this.dir_.getDirectory(path, this.getOptions_(opt_behavior), goog.bind(function (entry) {
                    d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, entry));
                }, this), goog.bind(function (err) {
                    var msg = 'loading directory ' + path + ' from ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            DirectoryEntryImpl.prototype.createPath = function (path) {
                // If the path begins at the root, reinvoke createPath on the root directory.
                if (goog.string.startsWith(path, '/')) {
                    var root = this.getFileSystem().getRoot();
                    if (this.getFullPath() != root.getFullPath()) {
                        Document;
                        return root.createPath(path);
                    }
                }
                // Filter out any empty path components caused by '//' or a leading slash.
                var parts = goog.array.filter(path.split('/'), goog.functions.identity);
                /**
                 * @param {goog.fs.DirectoryEntryImpl} dir
                 * @return {!goog.async.Deferred}
                 */
                function getNextDirectory(dir) {
                    if (!parts.length) {
                        return goog.async.Deferred.succeed(dir);
                    }
                    var def;
                    var nextDir = parts.shift();
                    if (nextDir == '..') {
                        def = dir.getParent();
                    }
                    else if (nextDir == '.') {
                        def = goog.async.Deferred.succeed(dir);
                    }
                    else {
                        def = dir.getDirectory(nextDir, goog.fs.DirectoryEntry.Behavior.CREATE);
                    }
                    return def.addCallback(getNextDirectory);
                }
                return getNextDirectory(this);
            };
            ;
            /** @override */
            DirectoryEntryImpl.prototype.listDirectory = function () {
                var d = new goog.async.Deferred();
                var reader = this.dir_.createReader();
                var results = [];
                var errorCallback = goog.bind(function (err) {
                    var msg = 'listing directory ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this);
                var successCallback = goog.bind(function (entries) {
                    if (entries.length) {
                        for (var i = 0, entry; entry = entries[i]; i++) {
                            results.push(this.wrapEntry(entry));
                        }
                        reader.readEntries(successCallback, errorCallback);
                    }
                    else {
                        d.callback(results);
                    }
                }, this);
                reader.readEntries(successCallback, errorCallback);
                return d;
            };
            ;
            /** @override */
            DirectoryEntryImpl.prototype.removeRecursively = function () {
                var d = new goog.async.Deferred();
                this.dir_.removeRecursively(goog.bind(d.callback, d, true /* result */), goog.bind(function (err) {
                    var msg = 'removing ' + this.getFullPath() + ' recursively';
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /**
             * Converts a value in the Behavior enum into an options object expected by the
             * File API.
             *
             * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
             *     existing files.
             * @return {!Object<boolean>} The options object expected by the File API.
             * @private
             */
            DirectoryEntryImpl.prototype.getOptions_ = function (opt_behavior) {
                if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE) {
                    return { 'create': true };
                }
                else if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE_EXCLUSIVE) {
                    return { 'create': true, 'exclusive': true };
                }
                else {
                    return {};
                }
            };
            ;
            return DirectoryEntryImpl;
        }(goog.fs.EntryImpl));
        fs_2.DirectoryEntryImpl = DirectoryEntryImpl;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
(function (goog) {
    var fs;
    (function (fs_3) {
        var FileEntryImpl = /** @class */ (function (_super) {
            __extends(FileEntryImpl, _super);
            /**
             * A file in a local filesystem.
             *
             * This should not be instantiated directly. Instead, it should be accessed via
             * {@link goog.fs.DirectoryEntry#getFile}.
             *
             * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
             * @param {!FileEntry} file The underlying FileEntry object.
             * @constructor
             * @extends {goog.fs.EntryImpl}
             * @implements {goog.fs.FileEntry}
             * @final
             */
            function FileEntryImpl(fs, file) {
                var _this = 
                // goog.fs.FileEntryImpl.base(this, 'constructor', fs, file);
                _super.call(this, fs, file) || this;
                /**
                 * The underlying FileEntry object.
                 *
                 * @type {!FileEntry}
                 * @private
                 */
                _this.file_ = file;
                return _this;
            }
            ;
            /** @override */
            FileEntryImpl.prototype.createWriter = function () {
                var d = new goog.async.Deferred();
                this.file_.createWriter(function (w) {
                    d.callback(new goog.fs.FileWriter(w));
                }, goog.bind(function (err) {
                    var msg = 'creating writer for ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            /** @override */
            FileEntryImpl.prototype.file = function () {
                var d = new goog.async.Deferred();
                this.file_.file(function (f) { d.callback(f); }, goog.bind(function (err) {
                    var msg = 'getting file for ' + this.getFullPath();
                    d.errback(new goog.fs.Error(err, msg));
                }, this));
                return d;
            };
            ;
            return FileEntryImpl;
        }(goog.fs.EntryImpl));
        fs_3.FileEntryImpl = FileEntryImpl;
    })(fs = goog.fs || (goog.fs = {}));
})(goog || (goog = {}));
