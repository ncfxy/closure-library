declare namespace goog.fs {
    class FileWriter extends goog.fs.FileSaver {
        writer_: any;
        /**
         * An object for monitoring the saving of files, as well as other fine-grained
         * writing operations.
         *
         * This should not be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.FileEntry#createWriter}.
         *
         * @param {!FileWriter} writer The underlying FileWriter object.
         * @constructor
         * @extends {goog.fs.FileSaver}
         * @final
         */
        constructor(writer: any);
        /**
         * @return {number} The byte offset at which the next write will occur.
         */
        getPosition(): any;
        /**
         * @return {number} The length of the file.
         */
        getLength(): any;
        /**
         * Write data to the file.
         *
         * @param {!Blob} blob The data to write.
         */
        write(blob: any): void;
        /**
         * Set the file position at which the next write will occur.
         *
         * @param {number} offset An absolute byte offset into the file.
         */
        seek(offset: any): void;
        /**
         * Changes the length of the file to that specified.
         *
         * @param {number} size The new size of the file, in bytes.
         */
        truncate(size: any): void;
    }
}
