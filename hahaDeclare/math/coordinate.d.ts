/// <reference path="math.d.ts" />
declare namespace goog.math {
    class Coordinate {
        x: number;
        y: number;
        /**
         * Class for representing coordinates and positions.
         * @param {number=} opt_x Left, defaults to 0.
         * @param {number=} opt_y Top, defaults to 0.
         * @struct
         * @constructor
         */
        constructor(opt_x: number | undefined, opt_y: number | undefined);
        /**
         * Returns a new copy of the coordinate.
         * @return {!goog.math.Coordinate} A clone of this coordinate.
         */
        clone(): Coordinate;
        /**
         * Returns a nice string representing the coordinate.
         * @return {string} In the form (50, 73).
         * @override
         */
        toString(): string;
        /**
         * Returns whether the specified value is equal to this coordinate.
         * @param {*} other Some other value.
         * @return {boolean} Whether the specified value is equal to this coordinate.
         */
        equals(other: any): boolean;
        /**
         * Rounds the x and y fields to the next larger integer values.
         * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.
         */
        ceil(): this;
        /**
         * Rounds the x and y fields to the next smaller integer values.
         * @return {!goog.math.Coordinate} This coordinate with floored fields.
         */
        floor(): this;
        /**
         * Rounds the x and y fields to the nearest integer values.
         * @return {!goog.math.Coordinate} This coordinate with rounded fields.
         */
        round(): this;
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the x and y values are translated by the coordinate's x and y.
         * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
         * respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate x by or the
         *     the coordinate to translate this coordinate by.
         * @param {number=} opt_ty The value to translate y by.
         * @return {!goog.math.Coordinate} This coordinate after translating.
         */
        translate(tx: any, opt_ty: any): this;
        /**
         * Scales this coordinate by the given scale factors. The x and y values are
         * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
         * is not given, then {@code sx} is used for both x and y.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Coordinate} This coordinate after scaling.
         */
        scale(sx: any, opt_sy: any): this;
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in radians.
         * @param {number} radians The angle by which to rotate this coordinate
         *     clockwise about the given center, in radians.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateRadians(radians: any, opt_center: any): void;
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in degrees.
         * @param {number} degrees The angle by which to rotate this coordinate
         *     clockwise about the given center, in degrees.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateDegrees(degrees: any, opt_center: any): void;
    }
}
declare namespace goog.math.Coordinate {
    /**
     * Compares coordinates for equality.
     * @param {goog.math.Coordinate} a A Coordinate.
     * @param {goog.math.Coordinate} b A Coordinate.
     * @return {boolean} True iff the coordinates are equal, or if both are null.
     */
    function equals(a: any, b: any): boolean;
    /**
     * Returns the distance between two coordinates.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The distance between {@code a} and {@code b}.
     */
    function distance(a: any, b: any): number;
    /**
     * Returns the magnitude of a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The distance between the origin and {@code a}.
     */
    function magnitude(a: any): number;
    /**
     * Returns the angle from the origin to a coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @return {number} The angle, in degrees, clockwise from the positive X
     *     axis to {@code a}.
     */
    function azimuth(a: any): number;
    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     *
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {number} The squared distance between {@code a} and {@code b}.
     */
    function squaredDistance(a: any, b: any): number;
    /**
     * Returns the difference between two coordinates as a new
     * goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the difference
     *     between {@code a} and {@code b}.
     */
    function difference(a: any, b: any): Coordinate;
    /**
     * Returns the sum of two coordinates as a new goog.math.Coordinate.
     * @param {!goog.math.Coordinate} a A Coordinate.
     * @param {!goog.math.Coordinate} b A Coordinate.
     * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    function sum(a: any, b: any): Coordinate;
}
