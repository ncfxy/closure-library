// Copyright 2008 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview Generator for unique element IDs.
 *
 */

goog.provide('goog.ui.IdGenerator');

namespace goog.ui{
  export class IdGenerator{
    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    constructor(){

    }
    /**
     * Next unique ID to use
     * @type {number}
     * @private
     */
    private nextId_: number = 0;

    /**
     * Gets the next unique ID.
     * @return {string} The next unique identifier.
     */
    public getNextUniqueId(){
      return ':' + (this.nextId_++).toString(36);
    }

  }
}

namespace goog.ui.IdGenerator{
  export var instance_ = undefined;
  export function getInstance():goog.ui.IdGenerator{
    if(goog.ui.IdGenerator.instance_){
      return goog.ui.IdGenerator.instance_;
    }
    if(goog.DEBUG){
      // NOTE: JSCompiler can't optimize away Array#push.
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = goog.ui.IdGenerator;
    }
    return goog.ui.IdGenerator.instance_ = new goog.ui.IdGenerator();
  }
}

goog.addSingletonGetter(goog.ui.IdGenerator);