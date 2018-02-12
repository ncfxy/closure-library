/// <reference path="../disposable/Disposable" />
// Copyright 2007 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Datastructure: Pool.
 *
 *
 * A generic class for handling pools of objects that is more efficient than
 * goog.structs.Pool because it doesn't maintain a list of objects that are in
 * use. See constructor comment.
 */
goog.provide('goog.structs.SimplePool');
goog.require('goog.Disposable');
var goog;
(function (goog) {
    var structs;
    (function (structs) {
        var SimplePool = /** @class */ (function (_super) {
            __extends(SimplePool, _super);
            /**
             * A generic pool class. Simpler and more efficient than goog.structs.Pool
             * because it doesn't maintain a list of objects that are in use. This class
             * has constant overhead and doesn't create any additional objects as part of
             * the pool management after construction time.
             *
             * IMPORTANT: If the objects being pooled are arrays or maps that can have
             * unlimited number of properties, they need to be cleaned before being
             * returned to the pool.
             *
             * Also note that {@see goog.object.clean} actually allocates an array to clean
             * the object passed to it, so simply using this function would defy the
             * purpose of using the pool.
             *
             * @param {number} initialCount Initial number of objects to populate the free
             *     pool at construction time.
             * @param {number} maxCount Maximum number of objects to keep in the free pool.
             * @constructor
             * @extends {goog.Disposable}
             * @template T
             */
            function SimplePool(initialCount, maxCount) {
                var _this = _super.call(this) || this;
                goog.Disposable.call(_this);
                /**
                 * Function for overriding createObject. The avoids a common case requiring
                 * subclassing this class.
                 * @private {Function}
                 */
                _this.createObjectFn_ = null;
                /**
                 * Function for overriding disposeObject. The avoids a common case requiring
                 * subclassing this class.
                 * @private {Function}
                 */
                _this.disposeObjectFn_ = null;
                /**
                 * Maximum number of objects allowed
                 * @private {number}
                 */
                _this.maxCount_ = maxCount;
                /**
                 * Queue used to store objects that are currently in the pool and available
                 * to be used.
                 * @private {Array<T>}
                 */
                _this.freeQueue_ = [];
                _this.createInitial_(initialCount);
                return _this;
            }
            /**
             * Sets the {@code createObject} function which is used for creating a new
             * object in the pool.
             * @param {Function} createObjectFn Create object function which returns the
             *     newly created object.
             */
            SimplePool.prototype.setCreateObjectFn = function (createObjectFn) {
                this.createObjectFn_ = createObjectFn;
            };
            ;
            /**
             * Sets the {@code disposeObject} function which is used for disposing of an
             * object in the pool.
             * @param {Function} disposeObjectFn Dispose object function which takes the
             *     object to dispose as a parameter.
             */
            SimplePool.prototype.setDisposeObjectFn = function (disposeObjectFn) {
                this.disposeObjectFn_ = disposeObjectFn;
            };
            ;
            /**
             * Gets an unused object from the the pool, if there is one available,
             * otherwise creates a new one.
             * @return {T} An object from the pool or a new one if necessary.
             */
            SimplePool.prototype.getObject = function () {
                if (this.freeQueue_.length) {
                    return this.freeQueue_.pop();
                }
                return this.createObject();
            };
            ;
            /**
             * Returns an object to the pool so that it can be reused. If the pool is
             * already full, the object is disposed instead.
             * @param {T} obj The object to release.
             */
            SimplePool.prototype.releaseObject = function (obj) {
                if (this.freeQueue_.length < this.maxCount_) {
                    this.freeQueue_.push(obj);
                }
                else {
                    this.disposeObject(obj);
                }
            };
            ;
            /**
             * Populates the pool with initialCount objects.
             * @param {number} initialCount The number of objects to add to the pool.
             * @private
             */
            SimplePool.prototype.createInitial_ = function (initialCount) {
                if (initialCount > this.maxCount_) {
                    throw new Error('[goog.structs.SimplePool] Initial cannot be greater than max');
                }
                for (var i = 0; i < initialCount; i++) {
                    this.freeQueue_.push(this.createObject());
                }
            };
            ;
            /**
             * Should be overridden by sub-classes to return an instance of the object type
             * that is expected in the pool.
             * @return {T} The created object.
             */
            SimplePool.prototype.createObject = function () {
                if (this.createObjectFn_) {
                    return this.createObjectFn_();
                }
                else {
                    return {};
                }
            };
            ;
            /**
             * Should be overrideen to dispose of an object. Default implementation is to
             * remove all of the object's members, which should render it useless. Calls the
             *  object's dispose method, if available.
             * @param {T} obj The object to dispose.
             */
            SimplePool.prototype.disposeObject = function (obj) {
                if (this.disposeObjectFn_) {
                    this.disposeObjectFn_(obj);
                }
                else if (goog.isObject(obj)) {
                    if (goog.isFunction(obj.dispose)) {
                        obj.dispose();
                    }
                    else {
                        for (var i in obj) {
                            delete obj[i];
                        }
                    }
                }
            };
            ;
            /**
             * Disposes of the pool and all objects currently held in the pool.
             * @override
             * @protected
             */
            SimplePool.prototype.disposeInternal = function () {
                // goog.structs.SimplePool.superClass_.disposeInternal.call(this);
                _super.prototype.disposeInternal.call(this);
                // Call disposeObject on each object held by the pool.
                var freeQueue = this.freeQueue_;
                while (freeQueue.length) {
                    this.disposeObject(freeQueue.pop());
                }
                delete this.freeQueue_;
            };
            ;
            return SimplePool;
        }(goog.Disposable));
        structs.SimplePool = SimplePool;
    })(structs = goog.structs || (goog.structs = {}));
})(goog || (goog = {}));
