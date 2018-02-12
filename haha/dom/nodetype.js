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
 * @fileoverview Definition of goog.dom.NodeType.
 */
goog.provide('goog.dom.NodeType');
var goog;
(function (goog) {
    var dom;
    (function (dom) {
        /**
         * Constants for the nodeType attribute in the Node interface.
         *
         * These constants match those specified in the Node interface. These are
         * usually present on the Node object in recent browsers, but not in older
         * browsers (specifically, early IEs) and thus are given here.
         *
         * In some browsers (early IEs), these are not defined on the Node object,
         * so they are provided here.
         *
         * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
         * @enum {number}
         */
        var NodeType;
        (function (NodeType) {
            NodeType[NodeType["ELEMENT"] = 1] = "ELEMENT";
            NodeType[NodeType["ATTRIBUTE"] = 2] = "ATTRIBUTE";
            NodeType[NodeType["TEXT"] = 3] = "TEXT";
            NodeType[NodeType["CDATA_SECTION"] = 4] = "CDATA_SECTION";
            NodeType[NodeType["ENTITY_REFERENCE"] = 5] = "ENTITY_REFERENCE";
            NodeType[NodeType["ENTITY"] = 6] = "ENTITY";
            NodeType[NodeType["PROCESSING_INSTRUCTION"] = 7] = "PROCESSING_INSTRUCTION";
            NodeType[NodeType["COMMENT"] = 8] = "COMMENT";
            NodeType[NodeType["DOCUMENT"] = 9] = "DOCUMENT";
            NodeType[NodeType["DOCUMENT_TYPE"] = 10] = "DOCUMENT_TYPE";
            NodeType[NodeType["DOCUMENT_FRAGMENT"] = 11] = "DOCUMENT_FRAGMENT";
            NodeType[NodeType["NOTATION"] = 12] = "NOTATION";
        })(NodeType = dom.NodeType || (dom.NodeType = {}));
    })(dom = goog.dom || (goog.dom = {}));
})(goog || (goog = {}));
