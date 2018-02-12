declare namespace goog.fs {
    class FileSystemImpl {
        fs_: any;
        /**
         * A local filesystem.
         *
         * This shouldn't be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
         *
         * @param {!FileSystem} fs The underlying FileSystem object.
         * @constructor
         * @implements {goog.fs.FileSystem}
         * @final
         */
        constructor(fs: any);
        /** @override */
        getName(): any;
        /** @override */
        getRoot(): DirectoryEntryImpl;
        /**
         * @return {!FileSystem} The underlying FileSystem object.
         */
        getBrowserFileSystem(): any;
    }
}
