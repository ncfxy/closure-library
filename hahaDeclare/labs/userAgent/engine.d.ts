declare namespace goog.labs.userAgent.engine {
    /**
     * @return {boolean} Whether the rendering engine is Presto.
     */
    function isPresto(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Trident.
     */
    function isTrident(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Edge.
     */
    function isEdge(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is WebKit.
     */
    function isWebKit(): boolean;
    /**
     * @return {boolean} Whether the rendering engine is Gecko.
     */
    function isGecko(): boolean;
    /**
     * @return {string} The rendering engine's version or empty string if version
     *     can't be determined.
     */
    function getVersion(): string;
    /**
     * @param {!Array<!Array<string>>} tuples Extracted version tuples.
     * @return {!Array<string>|undefined} The engine tuple or undefined if not
     *     found.
     * @private
     */
    function getEngineTuple_(tuples: Array<Array<string>>): Array<string> | undefined;
    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the rendering engine version is higher or the same
     *     as the given version.
     */
    function isVersionOrHigher(version: string | number): boolean;
    /**
     * @param {!Array<!Array<string>>} tuples Version tuples.
     * @param {string} key The key to look for.
     * @return {string} The version string of the given key, if present.
     *     Otherwise, the empty string.
     * @private
     */
    function getVersionForKey_(tuples: Array<Array<string>>, key: string): string;
}
