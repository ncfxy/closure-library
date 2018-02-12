declare namespace goog.fs {
    class EntryImpl implements goog.fs.Entry {
        fs_: goog.fs.FileSystem;
        entry_: any;
        /**
         * Base class for concrete implementations of goog.fs.Entry.
         * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
         * @param {!Entry} entry The underlying Entry object.
         * @constructor
         * @implements {goog.fs.Entry}
         */
        constructor(fs: any, entry: any);
        /** @override */
        isFile(): any;
        /** @override */
        isDirectory(): any;
        /** @override */
        getName(): any;
        /** @override */
        getFullPath(): any;
        /** @override */
        getFileSystem(): FileSystem;
        /** @override */
        getLastModified(): async.Deferred<{}>;
        /** @override */
        getMetadata(): async.Deferred<{}>;
        /** @override */
        moveTo(parent: any, opt_newName: any): async.Deferred<{}>;
        /** @override */
        copyTo(parent: any, opt_newName: any): async.Deferred<{}>;
        /** @override */
        wrapEntry(entry: any): FileEntryImpl | DirectoryEntryImpl;
        /** @override */
        toUrl(opt_mimeType: any): any;
        /** @override */
        toUri: (opt_mimeType: any) => any;
        /** @override */
        remove(): async.Deferred<{}>;
        /** @override */
        getParent(): async.Deferred<{}>;
    }
}
declare namespace goog.fs {
    class DirectoryEntryImpl extends goog.fs.EntryImpl implements goog.fs.DirectoryEntry {
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
        constructor(fs: any, dir: any);
        /** @override */
        getFile(path: any, opt_behavior: any): async.Deferred<{}>;
        /** @override */
        getDirectory(path: any, opt_behavior: any): async.Deferred<{}>;
        /** @override */
        createPath(path: any): any;
        /** @override */
        listDirectory(): async.Deferred<{}>;
        /** @override */
        removeRecursively(): async.Deferred<{}>;
        /**
         * Converts a value in the Behavior enum into an options object expected by the
         * File API.
         *
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     existing files.
         * @return {!Object<boolean>} The options object expected by the File API.
         * @private
         */
        getOptions_(opt_behavior: any): {
            'create': boolean;
            exclusive?: undefined;
        } | {
            'create': boolean;
            'exclusive': boolean;
        } | {
            create?: undefined;
            exclusive?: undefined;
        };
    }
}
declare namespace goog.fs {
    class FileEntryImpl extends goog.fs.EntryImpl implements goog.fs.FileEntry {
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
        constructor(fs: any, file: any);
        /** @override */
        createWriter(): async.Deferred<{}>;
        /** @override */
        file(): async.Deferred<{}>;
    }
}
