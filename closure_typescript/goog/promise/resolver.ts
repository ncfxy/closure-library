// Copyright 2013 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.promise.Resolver');


namespace goog.promise{
    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    export interface Resolver<TYPE>{

        /**
         * The promise that created this resolver.
         * @type {!goog.Promise<TYPE>}
         */
        promise: goog.Promise<TYPE, string>;


        /**
         * Resolves this resolver with the specified value.
         * @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)}
         */
        resolve: (arg0?: TYPE|goog.Promise<TYPE, string>|Thenable<TYPE>) => void;


        /**
         * Rejects this resolver with the specified reason.
         * @type {function(*=): void}
         */
        reject: () => void;
    }
}

