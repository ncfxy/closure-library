declare namespace goog.async {
    class WorkQueue {
        workHead_: any;
        workTail_: any;
        /**
         * A low GC workqueue. The key elements of this design:
         *   - avoids the need for goog.bind or equivalent by carrying scope
         *   - avoids the need for array reallocation by using a linked list
         *   - minimizes work entry objects allocation by recycling objects
         * @constructor
         * @final
         * @struct
         */
        constructor();
        /**
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        add: (fn: any, scope: any) => void;
        /**
         * @return {goog.async.WorkItem}
         */
        remove(): any;
        /**
         * @param {goog.async.WorkItem} item
         */
        returnUnused(item: any): void;
        /**
         * @return {goog.async.WorkItem}
         * @private
         */
        getUnusedItem_(): any;
    }
}
declare namespace goog.async.WorkQueue {
    var DEFAULT_MAX_UNUSED: number;
    /** @const @private {goog.async.FreeList<goog.async.WorkItem>} */
    var freelist_: FreeList<{}>;
}
declare namespace goog.async {
    class WorkItem {
        fn: () => void;
        scope: Object | null | undefined;
        next: goog.async.WorkItem;
        /**
         * @constructor
         * @final
         * @struct
         */
        constructor();
        /**
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        set(fn: any, scope: any): void;
        /** Reset the work item so they don't prevent GC before reuse */
        reset(): void;
    }
}
