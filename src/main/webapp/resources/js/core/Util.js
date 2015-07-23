TotuRex.core.Util = {
    define: (function () {

        function _overrideMethod(method, parentMethod) {
            return function () {
                var backup = this.inherited;
                this.inherited = function (args) {
                    return parentMethod.apply(this, args);
                };

                try {
                    return method.apply(this, arguments);
                } finally {
                    this.inherited = backup;
                }
            }
        };

        function _copyProperties(props, targetPropsObj, parentPropsObj) {
            if (!props) return;

            if (typeof props === 'function') {
                props = props.prototype;
            }

            for (var name in props) {
                if (name === 'constructor') {
                    //skip copying of constructors
                    continue;
                }
                if (typeof props[name] === 'function'
                    && typeof parentPropsObj[name] === 'function'
                    && !props[name].isClass
                    && /inherited\b/.test(props[name])) {
                    targetPropsObj[name] = _overrideMethod(props[name], parentPropsObj[name]);
                } else {
                    targetPropsObj[name] = props[name];
                }
            }
        };

        return function (superClass, classBody) {

            if (typeof superClass !== 'function') {
                superClass = Object;
            }

            if (typeof classBody !== 'object') {
                throw new Error('Class body must be specified.');
            }

            var Constructor = null;
            if (classBody.hasOwnProperty('constructor') && (typeof classBody.constructor === 'function')) {
                if (superClass !== Object && (typeof superClass.constructor === 'function')) {
                    Constructor = _overrideMethod(classBody.constructor, superClass.constructor);
                } else {
                    Constructor = classBody.constructor;
                }

            } else if (superClass !== Object && (typeof superClass.constructor === 'function')) {
                Constructor = _overrideMethod(function () {
                    this.inherited(arguments);
                }, superClass.constructor);

            } else {
                Constructor = function () {
                    //do nothing
                };
            }

            Constructor.prototype = Object.create(superClass.prototype);
            Constructor.constructor = Constructor;

            Constructor.isClass = true;
            Constructor._superClass = superClass;

            _copyProperties(classBody, Constructor.prototype, superClass.prototype);

            return Constructor;
        };
    })()
};


TotuRex.define = TotuRex.core.Util.define;