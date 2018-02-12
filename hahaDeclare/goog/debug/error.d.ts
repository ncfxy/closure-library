declare namespace goog.debug {
    class Error implements Error {
        name: any;
        message: any;
        reportErrorToServer: any;
        stack: any;
        /**
       * Base class for custom error objects.
       * @param {*=} opt_msg The message associated with the error.
       * @constructor
       * @extends {Error}
       */
        constructor(opt_msg?: any);
    }
}
