// Copyright 2010 The Closure Library Authors. All Rights Reserved.
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
 * @fileoverview A global registry for entry points into a program,
 * so that they can be instrumented. Each module should register their
 * entry points with this registry. Designed to be compiled out
 * if no instrumentation is requested.
 *
 * Entry points may be registered before or after a call to
 * goog.debug.entryPointRegistry.monitorAll. If an entry point is registered
 * later, the existing monitor will instrument the new entry point.
 *
 * @author nicksantos@google.com (Nick Santos)
 */
goog.provide('goog.debug.EntryPointMonitor');
goog.provide('goog.debug.entryPointRegistry');
goog.require('goog.asserts');
var goog;
(function (goog) {
    var debug;
    (function (debug) {
        var entryPointRegistry;
        (function (entryPointRegistry) {
            /**
             * An array of entry point callbacks.
             * @type {!Array<function(!Function)>}
             * @private
             */
            entryPointRegistry.refList_ = [];
            /**
             * Monitors that should wrap all the entry points.
             * @type {!Array<!goog.debug.EntryPointMonitor>}
             * @private
             */
            entryPointRegistry.monitors_ = [];
            /**
             * Whether goog.debug.entryPointRegistry.monitorAll has ever been called.
             * Checking this allows the compiler to optimize out the registrations.
             * @type {boolean}
             * @private
             */
            entryPointRegistry.monitorsMayExist_ = false;
            /**
             * Register an entry point with this module.
             *
             * The entry point will be instrumented when a monitor is passed to
             * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
             * entry point is instrumented immediately.
             *
             * @param {function(!Function)} callback A callback function which is called
             *     with a transforming function to instrument the entry point. The callback
             *     is responsible for wrapping the relevant entry point with the
             *     transforming function.
             */
            function register(callback) {
                // Don't use push(), so that this can be compiled out.
                goog.debug.entryPointRegistry
                    .refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
                // If no one calls monitorAll, this can be compiled out.
                if (goog.debug.entryPointRegistry.monitorsMayExist_) {
                    var monitors = goog.debug.entryPointRegistry.monitors_;
                    for (var i = 0; i < monitors.length; i++) {
                        callback(goog.bind(monitors[i].wrap, monitors[i]));
                    }
                }
            }
            entryPointRegistry.register = register;
            ;
            /**
             * Configures a monitor to wrap all entry points.
             *
             * Entry points that have already been registered are immediately wrapped by
             * the monitor. When an entry point is registered in the future, it will also
             * be wrapped by the monitor when it is registered.
             *
             * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
             */
            function monitorAll(monitor) {
                goog.debug.entryPointRegistry.monitorsMayExist_ = true;
                var transformer = goog.bind(monitor.wrap, monitor);
                for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
                    goog.debug.entryPointRegistry.refList_[i](transformer);
                }
                goog.debug.entryPointRegistry.monitors_.push(monitor);
            }
            entryPointRegistry.monitorAll = monitorAll;
            ;
            /**
             * Try to unmonitor all the entry points that have already been registered. If
             * an entry point is registered in the future, it will not be wrapped by the
             * monitor when it is registered. Note that this may fail if the entry points
             * have additional wrapping.
             *
             * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
             *     the entry points.
             * @throws {Error} If the monitor is not the most recently configured monitor.
             */
            function unmonitorAllIfPossible(monitor) {
                var monitors = goog.debug.entryPointRegistry.monitors_;
                goog.asserts.assert(monitor == monitors[monitors.length - 1], 'Only the most recent monitor can be unwrapped.');
                var transformer = goog.bind(monitor.unwrap, monitor);
                for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
                    goog.debug.entryPointRegistry.refList_[i](transformer);
                }
                monitors.length--;
            }
            entryPointRegistry.unmonitorAllIfPossible = unmonitorAllIfPossible;
            ;
        })(entryPointRegistry = debug.entryPointRegistry || (debug.entryPointRegistry = {}));
    })(debug = goog.debug || (goog.debug = {}));
})(goog || (goog = {}));
