var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('bundle-one/component-one',["require", "exports", "aurelia-framework", "../shared/some-service"], function (require, exports, aurelia_framework_1, some_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentOne = (function () {
        function ComponentOne(someService) {
            this.someService = someService;
            this.someService.log();
        }
        ComponentOne = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [some_service_1.SomeService])
        ], ComponentOne);
        return ComponentOne;
    }());
    exports.ComponentOne = ComponentOne;
});

define('text!bundle-one/component-one.html', ['module'], function(module) { module.exports = "<template>\r\n    Component One\r\n</template>"; });
//# sourceMappingURL=bundle-one.js.map