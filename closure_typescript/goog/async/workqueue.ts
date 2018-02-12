// Copyright 2015 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.async.WorkItem');
goog.provide('goog.async.WorkQueue');

goog.require('goog.asserts');
goog.require('goog.async.FreeList');


// TODO(johnlenz): generalize the WorkQueue if this is used by more
// than goog.async.run.


namespace goog.async{
  export class WorkQueue{
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
    constructor(){
      this.workHead_ = null;
      this.workTail_ = null;
    }


    /**
     * @param {function()} fn
     * @param {Object|null|undefined} scope
     */
    public add = function(fn, scope) {
      var item = this.getUnusedItem_();
      item.set(fn, scope);

      if (this.workTail_) {
        this.workTail_.next = item;
        this.workTail_ = item;
      } else {
        goog.asserts.assert(!this.workHead_);
        this.workHead_ = item;
        this.workTail_ = item;
      }
    };


    /**
     * @return {goog.async.WorkItem}
     */
    public remove() {
      var item = null;

      if (this.workHead_) {
        item = this.workHead_;
        this.workHead_ = this.workHead_.next;
        if (!this.workHead_) {
          this.workTail_ = null;
        }
        item.next = null;
      }
      return item;
    };


    /**
     * @param {goog.async.WorkItem} item
     */
    public returnUnused(item) {
      goog.async.WorkQueue.freelist_.put(item);
    };


    /**
     * @return {goog.async.WorkItem}
     * @private
     */
    public getUnusedItem_() {
      return goog.async.WorkQueue.freelist_.get();
    };
  }

}

namespace goog.async.WorkQueue{
  export var DEFAULT_MAX_UNUSED = 100;
  /** @const @private {goog.async.FreeList<goog.async.WorkItem>} */
  export var freelist_ = new goog.async.FreeList(
    function() { return new goog.async.WorkItem(); },
    function(item) { item.reset(); }, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);
}


namespace goog.async{
  export class WorkItem{
    fn: () => void;
    scope: Object | null | undefined;
    next: goog.async.WorkItem;
    /**
     * @constructor
     * @final
     * @struct
     */
    constructor(){
      /** @type {?function()} */
      this.fn = null;
      /** @type {Object|null|undefined} */
      this.scope = null;
      /** @type {?goog.async.WorkItem} */
      this.next = null;
    }
    
    /**
     * @param {function()} fn
     * @param {Object|null|undefined} scope
     */
    public set(fn, scope) {
      this.fn = fn;
      this.scope = scope;
      this.next = null;
    };


    /** Reset the work item so they don't prevent GC before reuse */
    public reset() {
      this.fn = null;
      this.scope = null;
      this.next = null;
    };
  }
}


/** @define {number} The maximum number of entries to keep for recycling. */
goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);

