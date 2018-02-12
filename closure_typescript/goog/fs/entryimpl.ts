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


namespace goog.fs{
  export class EntryImpl implements goog.fs.Entry{
    fs_: goog.fs.FileSystem;
    entry_: any;
    /**
     * Base class for concrete implementations of goog.fs.Entry.
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!Entry} entry The underlying Entry object.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    constructor(fs, entry){
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
    public isFile() {
      return this.entry_.isFile;
    };


    /** @override */
    public isDirectory() {
      return this.entry_.isDirectory;
    };


    /** @override */
    public getName() {
      return this.entry_.name;
    };


    /** @override */
    public getFullPath() {
      return this.entry_.fullPath;
    };


    /** @override */
    public getFileSystem() {
      return this.fs_;
    };


    /** @override */
    public getLastModified() {
      return this.getMetadata().addCallback(function(metadata) {
        return metadata.modificationTime;
      });
    };


    /** @override */
    public getMetadata() {
      var d = new goog.async.Deferred();

      this.entry_.getMetadata(function(metadata) {
        d.callback(metadata);
      }, goog.bind(function(err) {
        var msg = 'retrieving metadata for ' + this.getFullPath();
        d.errback(new goog.fs.Error(err, msg));
      }, this));
      return d;
    };


    /** @override */
    public moveTo(parent, opt_newName) {
      var d = new goog.async.Deferred();
      this.entry_.moveTo(
          /** @type {!goog.fs.DirectoryEntryImpl} */ (parent).dir_, opt_newName,
          goog.bind(function(entry) {
            d.callback(this.wrapEntry(entry));
          }, this), goog.bind(function(err) {
            var msg = 'moving ' + this.getFullPath() + ' into ' +
                parent.getFullPath() +
                (opt_newName ? ', renaming to ' + opt_newName : '');
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /** @override */
    public copyTo(parent, opt_newName) {
      var d = new goog.async.Deferred();
      this.entry_.copyTo(
          /** @type {!goog.fs.DirectoryEntryImpl} */ (parent).dir_, opt_newName,
          goog.bind(function(entry) {
            d.callback(this.wrapEntry(entry));
          }, this), goog.bind(function(err) {
            var msg = 'copying ' + this.getFullPath() + ' into ' +
                parent.getFullPath() +
                (opt_newName ? ', renaming to ' + opt_newName : '');
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /** @override */
    public wrapEntry(entry) {
      return entry.isFile ?
          new goog.fs.FileEntryImpl(this.fs_, /** @type {!FileEntry} */ (entry)) :
          new goog.fs.DirectoryEntryImpl(
              this.fs_, /** @type {!DirectoryEntry} */ (entry));
    };


    /** @override */
    public toUrl(opt_mimeType) {
      return this.entry_.toURL(opt_mimeType);
    };


    /** @override */
    public toUri = goog.fs.EntryImpl.prototype.toUrl;


    /** @override */
    public remove() {
      var d = new goog.async.Deferred();
      this.entry_.remove(
          goog.bind(d.callback, d, true /* result */), goog.bind(function(err) {
            var msg = 'removing ' + this.getFullPath();
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /** @override */
    public getParent() {
      var d = new goog.async.Deferred();
      this.entry_.getParent(goog.bind(function(parent) {
        d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, parent));
      }, this), goog.bind(function(err) {
        var msg = 'getting parent of ' + this.getFullPath();
        d.errback(new goog.fs.Error(err, msg));
      }, this));
      return d;
    };
  }
}

namespace goog.fs{
  export class DirectoryEntryImpl extends goog.fs.EntryImpl implements goog.fs.DirectoryEntry{
    dir_: any;
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
    constructor(fs, dir) {
      // goog.fs.DirectoryEntryImpl.base(this, 'constructor', fs, dir);
      super(fs, dir);

      /**
       * The underlying DirectoryEntry object.
       *
       * @type {!DirectoryEntry}
       * @private
       */
      this.dir_ = dir;
    };

    /** @override */
    public getFile(path, opt_behavior) {
      var d = new goog.async.Deferred();
      this.dir_.getFile(
          path, this.getOptions_(opt_behavior), goog.bind(function(entry) {
            d.callback(new goog.fs.FileEntryImpl(this.fs_, entry));
          }, this), goog.bind(function(err) {
            var msg = 'loading file ' + path + ' from ' + this.getFullPath();
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /** @override */
    public getDirectory(
        path, opt_behavior) {
      var d = new goog.async.Deferred();
      this.dir_.getDirectory(
          path, this.getOptions_(opt_behavior), goog.bind(function(entry) {
            d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, entry));
          }, this), goog.bind(function(err) {
            var msg = 'loading directory ' + path + ' from ' + this.getFullPath();
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /** @override */
    public createPath(path) {
      // If the path begins at the root, reinvoke createPath on the root directory.
      if (goog.string.startsWith(path, '/')) {
        var root:any = this.getFileSystem().getRoot();
        if (this.getFullPath() != root.getFullPath()) {Document
          return root.createPath(path);
        }
      }

      // Filter out any empty path components caused by '//' or a leading slash.
      var parts = goog.array.filter(path.split('/'), <any>goog.functions.identity);

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
        } else if (nextDir == '.') {
          def = goog.async.Deferred.succeed(dir);
        } else {
          def = dir.getDirectory(nextDir, goog.fs.DirectoryEntry.Behavior.CREATE);
        }
        return def.addCallback(getNextDirectory);
      }

      return getNextDirectory(this);
    };


    /** @override */
    public listDirectory() {
      var d = new goog.async.Deferred();
      var reader = this.dir_.createReader();
      var results = [];

      var errorCallback = goog.bind(function(err) {
        var msg = 'listing directory ' + this.getFullPath();
        d.errback(new goog.fs.Error(err, msg));
      }, this);

      var successCallback = goog.bind(function(entries) {
        if (entries.length) {
          for (var i = 0, entry; entry = entries[i]; i++) {
            results.push(this.wrapEntry(entry));
          }
          reader.readEntries(successCallback, errorCallback);
        } else {
          d.callback(results);
        }
      }, this);

      reader.readEntries(successCallback, errorCallback);
      return d;
    };


    /** @override */
    public removeRecursively() {
      var d = new goog.async.Deferred();
      this.dir_.removeRecursively(
          goog.bind(d.callback, d, true /* result */), goog.bind(function(err) {
            var msg = 'removing ' + this.getFullPath() + ' recursively';
            d.errback(new goog.fs.Error(err, msg));
          }, this));
      return d;
    };


    /**
     * Converts a value in the Behavior enum into an options object expected by the
     * File API.
     *
     * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
     *     existing files.
     * @return {!Object<boolean>} The options object expected by the File API.
     * @private
     */
    public getOptions_(opt_behavior) {
      if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE) {
        return {'create': true};
      } else if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE_EXCLUSIVE) {
        return {'create': true, 'exclusive': true};
      } else {
        return {};
      }
    };
  }
}



namespace goog.fs{
  export class FileEntryImpl extends goog.fs.EntryImpl implements goog.fs.FileEntry{
    file_: any;
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
    constructor(fs, file) {
      // goog.fs.FileEntryImpl.base(this, 'constructor', fs, file);
      super(fs, file);

      /**
       * The underlying FileEntry object.
       *
       * @type {!FileEntry}
       * @private
       */
      this.file_ = file;
    };
    /** @override */
    public createWriter() {
      var d = new goog.async.Deferred();
      this.file_.createWriter(function(w) {
        d.callback(new goog.fs.FileWriter(w));
      }, goog.bind(function(err) {
        var msg = 'creating writer for ' + this.getFullPath();
        d.errback(new goog.fs.Error(err, msg));
      }, this));
      return d;
    };


    /** @override */
    public file() {
      var d = new goog.async.Deferred();
      this.file_.file(function(f) { d.callback(f); }, goog.bind(function(err) {
        var msg = 'getting file for ' + this.getFullPath();
        d.errback(new goog.fs.Error(err, msg));
      }, this));
      return d;
    };
  }
}



