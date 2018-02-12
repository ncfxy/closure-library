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

/**
 * @fileoverview A utility class for representing two-dimensional sizes.
 * @author brenneman@google.com (Shawn Brenneman)
 */


goog.provide('goog.math.Size');

namespace goog.math{
  export class Size{
    public width:number;
    public height:number;
    /**
     * Class for representing sizes consisting of a width and height. Undefined
     * width and height support is deprecated and results in compiler warning.
     * @param {number} width Width.
     * @param {number} height Height.
     * @struct
     * @constructor
     */
    constructor(width: number, height: number) {
      /**
       * Width
       * @type {number}
       */
      this.width = width;
      /**
       * Height
       * @type {number}
       */
      this.height = height;
    }

    /**
     * @return {!goog.math.Size} A new copy of the Size.
     */
    public clone(): goog.math.Size {
      return new goog.math.Size(this.width, this.height);
    };


    // if (goog.DEBUG) {
      /**
       * Returns a nice string representing size.
       * @return {string} In the form (50 x 73).
       * @override
       */
      public toString(): string {
      return '(' + this.width + ' x ' + this.height + ')';
    };
    // }


    /**
     * @return {number} The longer of the two dimensions in the size.
     */
    public getLongest(): number {
      return Math.max(this.width, this.height);
    };


    /**
     * @return {number} The shorter of the two dimensions in the size.
     */
    public getShortest(): number {
      return Math.min(this.width, this.height);
    };


    /**
     * @return {number} The area of the size (width * height).
     */
    public area(): number {
      return this.width * this.height;
    };


    /**
     * @return {number} The perimeter of the size (width + height) * 2.
     */
    public perimeter(): number {
      return (this.width + this.height) * 2;
    };


    /**
     * @return {number} The ratio of the size's width to its height.
     */
    public aspectRatio(): number {
      return this.width / this.height;
    };


    /**
     * @return {boolean} True if the size has zero area, false if both dimensions
     *     are non-zero numbers.
     */
    public isEmpty(): boolean {
      return !this.area();
    };


    /**
     * Clamps the width and height parameters upward to integer values.
     * @return {!goog.math.Size} This size with ceil'd components.
     */
    public ceil(): goog.math.Size {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };


    /**
     * @param {!goog.math.Size} target The target size.
     * @return {boolean} True if this Size is the same size or smaller than the
     *     target size in both dimensions.
     */
    public fitsInside(target: goog.math.Size): boolean {
      return this.width <= target.width && this.height <= target.height;
    };


    /**
     * Clamps the width and height parameters downward to integer values.
     * @return {!goog.math.Size} This size with floored components.
     */
    public floor(): goog.math.Size {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };


    /**
     * Rounds the width and height parameters to integer values.
     * @return {!goog.math.Size} This size with rounded components.
     */
    public round(): goog.math.Size {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };


    /**
     * Scales this size by the given scale factors. The width and height are scaled
     * by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy} is not
     * given, then {@code sx} is used for both the width and height.
     * @param {number} sx The scale factor to use for the width.
     * @param {number=} opt_sy The scale factor to use for the height.
     * @return {!goog.math.Size} This Size object after scaling.
     */
    public scale(sx: number, opt_sy?: number | undefined): goog.math.Size {
      var sy = goog.isNumber(opt_sy) ? opt_sy : sx;
      this.width *= sx;
      this.height *= sy;
      return this;
    };


    /**
     * Uniformly scales the size to perfectly cover the dimensions of a given size.
     * If the size is already larger than the target, it will be scaled down to the
     * minimum size at which it still covers the entire target. The original aspect
     * ratio will be preserved.
     *
     * This function assumes that both Sizes contain strictly positive dimensions.
     * @param {!goog.math.Size} target The target size.
     * @return {!goog.math.Size} This Size object, after optional scaling.
     */
    public scaleToCover(target: goog.math.Size): goog.math.Size {
      var s = this.aspectRatio() <= target.aspectRatio() ?
        target.width / this.width :
        target.height / this.height;
      return this.scale(s);
    };


    /**
     * Uniformly scales the size to fit inside the dimensions of a given size. The
     * original aspect ratio will be preserved.
     *
     * This function assumes that both Sizes contain strictly positive dimensions.
     * @param {!goog.math.Size} target The target size.
     * @return {!goog.math.Size} This Size object, after optional scaling.
     */
    public scaleToFit(target: goog.math.Size): goog.math.Size {
      var s = this.aspectRatio() > target.aspectRatio() ?
        target.width / this.width :
        target.height / this.height;
      return this.scale(s);
    };
  }
}

namespace goog.math.Size{
  /**
   * Compares sizes for equality.
   * @param {goog.math.Size} a A Size.
   * @param {goog.math.Size} b A Size.
   * @return {boolean} True iff the sizes have equal widths and equal
   *     heights, or if both are null.
   */
  export function equals(a: goog.math.Size, b: goog.math.Size): boolean {
    if (a == b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.width == b.width && a.height == b.height;
  }
}




