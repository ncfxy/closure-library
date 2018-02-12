declare namespace goog.math {
    /**
      * Class for representing a box. A box is specified as a top, right, bottom,
      * and left. A box is useful for representing margins and padding.
      *
      * This class assumes 'screen coordinates': larger Y coordinates are further
      * from the top of the screen.
     */
    class Box {
        top: number;
        right: number;
        bottom: number;
        left: number;
        /**
    
         *
         * @param {number} top Top.
         * @param {number} right Right.
         * @param {number} bottom Bottom.
         * @param {number} left Left.
         * @struct
         * @constructor
         */
        constructor(top: number, right: number, bottom: number, left: number);
        /**
         * @return {number} width The width of this Box.
         */
        getWidth(): number;
        /**
         * @return {number} height The height of this Box.
         */
        getHeight(): number;
        /**
         * Creates a copy of the box with the same dimensions.
         * @return {!goog.math.Box} A clone of this Box.
         */
        clone(): Box;
        /**
         * Returns a nice string representing the box.
         * @return {string} In the form (50t, 73r, 24b, 13l).
         * @override
         */
        toString(): string;
        /**
         * Returns whether the box contains a coordinate or another box.
         *
         * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
         * @return {boolean} Whether the box contains the coordinate or other box.
         */
        contains(other: any): boolean;
        /**
         * Expands box with the given margins.
         *
         * @param {number|goog.math.Box} top Top margin or box with all margins.
         * @param {number=} opt_right Right margin.
         * @param {number=} opt_bottom Bottom margin.
         * @param {number=} opt_left Left margin.
         * @return {!goog.math.Box} A reference to this Box.
         */
        expand(top: any, opt_right?: any, opt_bottom?: any, opt_left?: any): this;
        /**
         * Expand this box to include another box.
         * NOTE(user): This is used in code that needs to be very fast, please don't
         * add functionality to this function at the expense of speed (variable
         * arguments, accepting multiple argument types, etc).
         * @param {goog.math.Box} box The box to include in this one.
         */
        expandToInclude(box: any): void;
        /**
         * Expand this box to include the coordinate.
         * @param {!goog.math.Coordinate} coord The coordinate to be included
         *     inside the box.
         */
        expandToIncludeCoordinate(coord: any): void;
        /**
         * Rounds the fields to the next larger integer values.
         *
         * @return {!goog.math.Box} This box with ceil'd fields.
         */
        ceil: () => any;
        /**
         * Rounds the fields to the next smaller integer values.
         *
         * @return {!goog.math.Box} This box with floored fields.
         */
        floor(): this;
        /**
         * Rounds the fields to nearest integer values.
         *
         * @return {!goog.math.Box} This box with rounded fields.
         */
        round(): this;
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the left and right values are translated by the coordinate's
         * x value and the top and bottom values are translated by the coordinate's y
         * value.  Otherwise, {@code tx} and {@code opt_ty} are used to translate the x
         * and y dimension values.
         *
         * @param {number|goog.math.Coordinate} tx The value to translate the x
         *     dimension values by or the the coordinate to translate this box by.
         * @param {number=} opt_ty The value to translate y dimension values by.
         * @return {!goog.math.Box} This box after translating.
         */
        translate(tx: any, opt_ty?: any): this;
        /**
         * Scales this coordinate by the given scale factors. The x and y dimension
         * values are scaled by {@code sx} and {@code opt_sy} respectively.
         * If {@code opt_sy} is not given, then {@code sx} is used for both x and y.
         *
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Box} This box after scaling.
         */
        scale(sx: any, opt_sy?: any): this;
    }
}
declare namespace goog.math.Box {
    /**
     * Creates a Box by bounding a collection of goog.math.Coordinate objects
     * @param {...goog.math.Coordinate} var_args Coordinates to be included inside
     *     the box.
     * @return {!goog.math.Box} A Box containing all the specified Coordinates.
     */
    function boundingBox(var_args: any): Box;
    /**
     * Compares boxes for equality.
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A Box.
     * @return {boolean} True iff the boxes are equal, or if both are null.
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns whether a box contains a coordinate or another box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.
     * @return {boolean} Whether the box contains the coordinate or other box.
     */
    function contains(box: any, other: any): boolean;
    /**
     * Returns the relative x position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The x position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionX(box: any, coord: any): number;
    /**
     * Returns the relative y position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The y position of {@code coord} relative to the nearest
     *     side of {@code box}, or zero if {@code coord} is inside {@code box}.
     */
    function relativePositionY(box: any, coord: any): number;
    /**
     * Returns the distance between a coordinate and the nearest corner/side of a
     * box. Returns zero if the coordinate is inside the box.
     *
     * @param {goog.math.Box} box A Box.
     * @param {goog.math.Coordinate} coord A Coordinate.
     * @return {number} The distance between {@code coord} and the nearest
     *     corner/side of {@code box}, or zero if {@code coord} is inside
     *     {@code box}.
     */
    function distance(box: any, coord: any): number;
    /**
     * Returns whether two boxes intersect.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersects(a: any, b: any): boolean;
    /**
     * Returns whether two boxes would intersect with additional padding.
     *
     * @param {goog.math.Box} a A Box.
     * @param {goog.math.Box} b A second Box.
     * @param {number} padding The additional padding.
     * @return {boolean} Whether the boxes intersect.
     */
    function intersectsWithPadding(a: any, b: any, padding: any): boolean;
}
