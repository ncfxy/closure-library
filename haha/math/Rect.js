/// <reference path="../asserts/asserts" />
/// <reference path="../math/Box" />
/// <reference path="../math/Coordinate" />
/// <reference path="../math/IRect" />
/// <reference path="../math/Size" />
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview A utility class for representing rectangles. Some of these
 * functions should be migrated over to non-nullable params.
 */
goog.provide('goog.math.Rect');
goog.require('goog.asserts');
goog.require('goog.math.Box');
goog.require('goog.math.Coordinate');
goog.require('goog.math.IRect');
goog.require('goog.math.Size');
var goog;
(function (goog) {
    var math;
    (function (math) {
        var Rect = /** @class */ (function () {
            /**
             * Class for representing rectangular regions.
             * @param {number} x Left.
             * @param {number} y Top.
             * @param {number} w Width.
             * @param {number} h Height.
             * @struct
             * @constructor
             * @implements {goog.math.IRect}
             */
            function Rect(x, y, w, h) {
                /** @type {number} */
                this.left = x;
                /** @type {number} */
                this.top = y;
                /** @type {number} */
                this.width = w;
                /** @type {number} */
                this.height = h;
            }
            /**
             * @return {!goog.math.Rect} A new copy of this Rectangle.
             */
            Rect.prototype.clone = function () {
                return new goog.math.Rect(this.left, this.top, this.width, this.height);
            };
            ;
            /**
             * Returns a new Box object with the same position and dimensions as this
             * rectangle.
             * @return {!goog.math.Box} A new Box representation of this Rectangle.
             */
            Rect.prototype.toBox = function () {
                var right = this.left + this.width;
                var bottom = this.top + this.height;
                return new goog.math.Box(this.top, right, bottom, this.left);
            };
            ;
            // if (goog.DEBUG) {
            /**
             * Returns a nice string representing size and dimensions of rectangle.
             * @return {string} In the form (50, 73 - 75w x 25h).
             * @override
             */
            Rect.prototype.toString = function () {
                return '(' + this.left + ', ' + this.top + ' - ' + this.width + 'w x ' +
                    this.height + 'h)';
            };
            ;
            // }
            /**
             * Computes the intersection of this rectangle and the rectangle parameter.  If
             * there is no intersection, returns false and leaves this rectangle as is.
             * @param {goog.math.IRect} rect A Rectangle.
             * @return {boolean} True iff this rectangle intersects with the parameter.
             */
            Rect.prototype.intersection = function (rect) {
                var x0 = Math.max(this.left, rect.left);
                var x1 = Math.min(this.left + this.width, rect.left + rect.width);
                if (x0 <= x1) {
                    var y0 = Math.max(this.top, rect.top);
                    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
                    if (y0 <= y1) {
                        this.left = x0;
                        this.top = y0;
                        this.width = x1 - x0;
                        this.height = y1 - y0;
                        return true;
                    }
                }
                return false;
            };
            ;
            /**
             * Returns whether a rectangle intersects this rectangle.
             * @param {goog.math.IRect} rect A rectangle.
             * @return {boolean} Whether rect intersects this rectangle.
             */
            Rect.prototype.intersects = function (rect) {
                return goog.math.Rect.intersects(this, rect);
            };
            ;
            /**
             * Computes the difference regions between this rectangle and {@code rect}. The
             * return value is an array of 0 to 4 rectangles defining the remaining regions
             * of this rectangle after the other has been subtracted.
             * @param {goog.math.IRect} rect A Rectangle.
             * @return {!Array<!goog.math.Rect>} An array with 0 to 4 rectangles which
             *     together define the difference area of rectangle a minus rectangle b.
             */
            Rect.prototype.difference = function (rect) {
                return goog.math.Rect.difference(this, rect);
            };
            ;
            /**
             * Expand this rectangle to also include the area of the given rectangle.
             * @param {goog.math.IRect} rect The other rectangle.
             */
            Rect.prototype.boundingRect = function (rect) {
                // We compute right and bottom before we change left and top below.
                var right = Math.max(this.left + this.width, rect.left + rect.width);
                var bottom = Math.max(this.top + this.height, rect.top + rect.height);
                this.left = Math.min(this.left, rect.left);
                this.top = Math.min(this.top, rect.top);
                this.width = right - this.left;
                this.height = bottom - this.top;
            };
            ;
            /**
             * Tests whether this rectangle entirely contains another rectangle or
             * coordinate.
             *
             * @param {goog.math.IRect|goog.math.Coordinate} another The rectangle or
             *     coordinate to test for containment.
             * @return {boolean} Whether this rectangle contains given rectangle or
             *     coordinate.
             */
            Rect.prototype.contains = function (another) {
                if (another instanceof goog.math.Coordinate) {
                    return another.x >= this.left && another.x <= this.left + this.width &&
                        another.y >= this.top && another.y <= this.top + this.height;
                }
                else {
                    return this.left <= another.left &&
                        this.left + this.width >= another.left + another.width &&
                        this.top <= another.top &&
                        this.top + this.height >= another.top + another.height;
                }
            };
            ;
            /**
             * @param {!goog.math.Coordinate} point A coordinate.
             * @return {number} The squared distance between the point and the closest
             *     point inside the rectangle. Returns 0 if the point is inside the
             *     rectangle.
             */
            Rect.prototype.squaredDistance = function (point) {
                var dx = point.x < this.left ?
                    this.left - point.x :
                    Math.max(point.x - (this.left + this.width), 0);
                var dy = point.y < this.top ? this.top - point.y :
                    Math.max(point.y - (this.top + this.height), 0);
                return dx * dx + dy * dy;
            };
            ;
            /**
             * @param {!goog.math.Coordinate} point A coordinate.
             * @return {number} The distance between the point and the closest point
             *     inside the rectangle. Returns 0 if the point is inside the rectangle.
             */
            Rect.prototype.distance = function (point) {
                return Math.sqrt(this.squaredDistance(point));
            };
            ;
            /**
             * @return {!goog.math.Size} The size of this rectangle.
             */
            Rect.prototype.getSize = function () {
                return new goog.math.Size(this.width, this.height);
            };
            ;
            /**
             * @return {!goog.math.Coordinate} A new coordinate for the top-left corner of
             *     the rectangle.
             */
            Rect.prototype.getTopLeft = function () {
                return new goog.math.Coordinate(this.left, this.top);
            };
            ;
            /**
             * @return {!goog.math.Coordinate} A new coordinate for the center of the
             *     rectangle.
             */
            Rect.prototype.getCenter = function () {
                return new goog.math.Coordinate(this.left + this.width / 2, this.top + this.height / 2);
            };
            ;
            /**
             * @return {!goog.math.Coordinate} A new coordinate for the bottom-right corner
             *     of the rectangle.
             */
            Rect.prototype.getBottomRight = function () {
                return new goog.math.Coordinate(this.left + this.width, this.top + this.height);
            };
            ;
            /**
             * Rounds the fields to the next larger integer values.
             * @return {!goog.math.Rect} This rectangle with ceil'd fields.
             */
            Rect.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            ;
            /**
             * Rounds the fields to the next smaller integer values.
             * @return {!goog.math.Rect} This rectangle with floored fields.
             */
            Rect.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            ;
            /**
             * Rounds the fields to nearest integer values.
             * @return {!goog.math.Rect} This rectangle with rounded fields.
             */
            Rect.prototype.round = function () {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            ;
            /**
             * Translates this rectangle by the given offsets. If a
             * {@code goog.math.Coordinate} is given, then the left and top values are
             * translated by the coordinate's x and y values. Otherwise, top and left are
             * translated by {@code tx} and {@code opt_ty} respectively.
             * @param {number|goog.math.Coordinate} tx The value to translate left by or the
             *     the coordinate to translate this rect by.
             * @param {number=} opt_ty The value to translate top by.
             * @return {!goog.math.Rect} This rectangle after translating.
             */
            Rect.prototype.translate = function (tx, opt_ty) {
                if (tx instanceof goog.math.Coordinate) {
                    this.left += tx.x;
                    this.top += tx.y;
                }
                else {
                    this.left += goog.asserts.assertNumber(tx);
                    if (goog.isNumber(opt_ty)) {
                        this.top += opt_ty;
                    }
                }
                return this;
            };
            ;
            /**
             * Scales this rectangle by the given scale factors. The left and width values
             * are scaled by {@code sx} and the top and height values are scaled by
             * {@code opt_sy}.  If {@code opt_sy} is not given, then all fields are scaled
             * by {@code sx}.
             * @param {number} sx The scale factor to use for the x dimension.
             * @param {number=} opt_sy The scale factor to use for the y dimension.
             * @return {!goog.math.Rect} This rectangle after scaling.
             */
            Rect.prototype.scale = function (sx, opt_sy) {
                var sy = goog.isNumber(opt_sy) ? opt_sy : sx;
                this.left *= sx;
                this.width *= sx;
                this.top *= sy;
                this.height *= sy;
                return this;
            };
            ;
            return Rect;
        }());
        math.Rect = Rect;
    })(math = goog.math || (goog.math = {}));
})(goog || (goog = {}));
(function (goog) {
    var math;
    (function (math) {
        var Rect;
        (function (Rect) {
            /**
             * Creates a new Rect object with the position and size given.
             * @param {!goog.math.Coordinate} position The top-left coordinate of the Rect
             * @param {!goog.math.Size} size The size of the Rect
             * @return {!goog.math.Rect} A new Rect initialized with the given position and
             *     size.
             */
            function createFromPositionAndSize(position, size) {
                return new goog.math.Rect(position.x, position.y, size.width, size.height);
            }
            Rect.createFromPositionAndSize = createFromPositionAndSize;
            ;
            /**
             * Creates a new Rect object with the same position and dimensions as a given
             * Box.  Note that this is only the inverse of toBox if left/top are defined.
             * @param {goog.math.Box} box A box.
             * @return {!goog.math.Rect} A new Rect initialized with the box's position
             *     and size.
             */
            function createFromBox(box) {
                return new goog.math.Rect(box.left, box.top, box.right - box.left, box.bottom - box.top);
            }
            Rect.createFromBox = createFromBox;
            ;
            /**
             * Compares rectangles for equality.
             * @param {goog.math.IRect} a A Rectangle.
             * @param {goog.math.IRect} b A Rectangle.
             * @return {boolean} True iff the rectangles have the same left, top, width,
             *     and height, or if both are null.
             */
            function equals(a, b) {
                if (a == b) {
                    return true;
                }
                if (!a || !b) {
                    return false;
                }
                return a.left == b.left && a.width == b.width && a.top == b.top &&
                    a.height == b.height;
            }
            Rect.equals = equals;
            ;
            /**
             * Returns the intersection of two rectangles. Two rectangles intersect if they
             * touch at all, for example, two zero width and height rectangles would
             * intersect if they had the same top and left.
             * @param {goog.math.IRect} a A Rectangle.
             * @param {goog.math.IRect} b A Rectangle.
             * @return {goog.math.Rect} A new intersection rect (even if width and height
             *     are 0), or null if there is no intersection.
             */
            function intersection(a, b) {
                // There is no nice way to do intersection via a clone, because any such
                // clone might be unnecessary if this function returns null.  So, we duplicate
                // code from above.
                var x0 = Math.max(a.left, b.left);
                var x1 = Math.min(a.left + a.width, b.left + b.width);
                if (x0 <= x1) {
                    var y0 = Math.max(a.top, b.top);
                    var y1 = Math.min(a.top + a.height, b.top + b.height);
                    if (y0 <= y1) {
                        return new goog.math.Rect(x0, y0, x1 - x0, y1 - y0);
                    }
                }
                return null;
            }
            Rect.intersection = intersection;
            ;
            /**
             * Returns whether two rectangles intersect. Two rectangles intersect if they
             * touch at all, for example, two zero width and height rectangles would
             * intersect if they had the same top and left.
             * @param {goog.math.IRect} a A Rectangle.
             * @param {goog.math.IRect} b A Rectangle.
             * @return {boolean} Whether a and b intersect.
             */
            function intersects(a, b) {
                return (a.left <= b.left + b.width && b.left <= a.left + a.width &&
                    a.top <= b.top + b.height && b.top <= a.top + a.height);
            }
            Rect.intersects = intersects;
            ;
            /**
             * Computes the difference regions between two rectangles. The return value is
             * an array of 0 to 4 rectangles defining the remaining regions of the first
             * rectangle after the second has been subtracted.
             * @param {goog.math.Rect} a A Rectangle.
             * @param {goog.math.IRect} b A Rectangle.
             * @return {!Array<!goog.math.Rect>} An array with 0 to 4 rectangles which
             *     together define the difference area of rectangle a minus rectangle b.
             */
            function difference(a, b) {
                var intersection = goog.math.Rect.intersection(a, b);
                if (!intersection || !intersection.height || !intersection.width) {
                    return [a.clone()];
                }
                var result = [];
                var top = a.top;
                var height = a.height;
                var ar = a.left + a.width;
                var ab = a.top + a.height;
                var br = b.left + b.width;
                var bb = b.top + b.height;
                // Subtract off any area on top where A extends past B
                if (b.top > a.top) {
                    result.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top));
                    top = b.top;
                    // If we're moving the top down, we also need to subtract the height diff.
                    height -= b.top - a.top;
                }
                // Subtract off any area on bottom where A extends past B
                if (bb < ab) {
                    result.push(new goog.math.Rect(a.left, bb, a.width, ab - bb));
                    height = bb - top;
                }
                // Subtract any area on left where A extends past B
                if (b.left > a.left) {
                    result.push(new goog.math.Rect(a.left, top, b.left - a.left, height));
                }
                // Subtract any area on right where A extends past B
                if (br < ar) {
                    result.push(new goog.math.Rect(br, top, ar - br, height));
                }
                return result;
            }
            Rect.difference = difference;
            ;
            /**
             * Returns a new rectangle which completely contains both input rectangles.
             * @param {goog.math.IRect} a A rectangle.
             * @param {goog.math.IRect} b A rectangle.
             * @return {goog.math.Rect} A new bounding rect, or null if either rect is
             *     null.
             */
            function boundingRect(a, b) {
                if (!a || !b) {
                    return null;
                }
                var newRect = new goog.math.Rect(a.left, a.top, a.width, a.height);
                newRect.boundingRect(b);
                return newRect;
            }
            Rect.boundingRect = boundingRect;
            ;
        })(Rect = math.Rect || (math.Rect = {}));
    })(math = goog.math || (goog.math = {}));
})(goog || (goog = {}));
