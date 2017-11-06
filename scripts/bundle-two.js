define('bundle-two/component-two',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentTwo = (function () {
        function ComponentTwo() {
        }
        return ComponentTwo;
    }());
    exports.ComponentTwo = ComponentTwo;
});

define('text!bundle-two/component-two.html', ['module'], function(module) { module.exports = "<template>\r\n    Component Two\r\n</template>"; });
//# sourceMappingURL=bundle-two.js.map