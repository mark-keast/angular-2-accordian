var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./accordian-group.component", "./accordian.component"], function (require, exports, core_1, common_1, accordian_group_component_1, accordian_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccordianModule = /** @class */ (function () {
        function AccordianModule() {
        }
        AccordianModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    accordian_component_1.AccordianComponent,
                    accordian_group_component_1.AccordianGroupComponent
                ],
                exports: [
                    accordian_component_1.AccordianComponent,
                    accordian_group_component_1.AccordianGroupComponent
                ]
            })
        ], AccordianModule);
        return AccordianModule;
    }());
    exports.AccordianModule = AccordianModule;
});
