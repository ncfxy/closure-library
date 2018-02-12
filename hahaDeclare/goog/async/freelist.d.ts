declare namespace goog.async {
    class FreeList<ITEM> {
        limit_: number;
        create_: () => void;
        reset_: (arg0: ITEM) => void;
        occupants_: number;
        head_: ITEM;
        /**
         * @param {function():ITEM} create
         * @param {function(ITEM):void} reset
         * @param {number} limit
         */
        constructor(create: any, reset: any, limit: any);
        /**
         * @return {ITEM}
         */
        get(): any;
        /**
         * @param {ITEM} item An item available for possible future reuse.
         */
        put(item: any): void;
        /**
         * Visible for testing.
         * @package
         * @return {number}
         */
        occupants(): number;
    }
}
