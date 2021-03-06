namespace goog{
    export interface IObject<KEY1, VALUE1>{

    }
    
    export interface IArrayLike<VALUE2> extends IObject<number, VALUE2>{
        length?: number;
    }
    
    export interface IThenable<T>{
        then(opt_onFullfilled, opt_onRejected):any;
    }
    
    export class Arguments implements IArrayLike<string>{
        /**
         * @type {Function}
         * @see http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/callee
         */
        callee:Function;
    
        /**
         * Use the non-standard {@see Function.prototype.caller} property of a function
         * object instead.
         * @type {Function}
         * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/caller
         * @deprecated
         */
        caller?:Function;
    
        /**
         * @type {number}
         * @see http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments/length
         */
        length:number;
    }

}