(function(System, SystemJS) {(function(require, exports, module, __filename, __dirname, global, GLOBAL) {"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var accordian_group_component_1 = require("./accordian-group.component");
var core_1 = require("@angular/core");
var AccordianComponent = (function () {
    function AccordianComponent(render) {
        this.render = render;
        this.closeOthers = false;
    }
    AccordianComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.groups.forEach(function (i, index) {
            var attr = 'acc-' + index;
            _this.render.setAttribute(i.contentArea.nativeElement, '_mk-accordian', attr);
        });
    };
    AccordianComponent.prototype.closeAll = function () {
        console.log(this.groups);
        console.log(this.groups.toArray());
        this.groups.forEach(function (i) {
            i.isOpened = false;
            i.contentArea.nativeElement.className = 'content-body';
        });
    };
    return AccordianComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordianComponent.prototype, "closeOthers", void 0);
__decorate([
    core_1.ContentChildren(core_1.forwardRef(function () { return accordian_group_component_1.AccordianGroupComponent; })),
    __metadata("design:type", core_1.QueryList)
], AccordianComponent.prototype, "groups", void 0);
AccordianComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-accordian',
        template: "\n    AccordianComponent\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [core_1.Renderer2])
], AccordianComponent);
exports.AccordianComponent = AccordianComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYWNjb3JkaWFuL2FjY29yZGlhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5RUFBc0U7QUFDdEUsc0NBQXNIO0FBUXRILElBQWEsa0JBQWtCO0lBTTNCLDRCQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBTGpDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO0lBS08sQ0FBQztJQUNsQywrQ0FBa0IsR0FBekI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFDLEtBQUs7WUFDeEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNqQixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXJCUTtJQUFSLFlBQUssRUFBRTs7dURBQTZCO0FBR2pDO0lBREgsc0JBQWUsQ0FBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxtREFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFFOzhCQUNqRCxnQkFBUztrREFBMEI7QUFKbEMsa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsUUFBUSxFQUFDLGNBQWM7UUFDdkIsUUFBUSxFQUFDLHlEQUVpQjtLQUM3QixDQUFDO3FDQU8rQixnQkFBUztHQU43QixrQkFBa0IsQ0FzQjlCO0FBdEJZLGdEQUFrQiIsImZpbGUiOiJhcHAvc2hhcmVkL2FjY29yZGlhbi9hY2NvcmRpYW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3JkaWFuR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlhbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6J25nLWFjY29yZGlhbicsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICBBY2NvcmRpYW5Db21wb25lbnRcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpYW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0e1xyXG5ASW5wdXQoKSBjbG9zZU90aGVyczpib29sZWFuID0gZmFsc2U7XHJcblxyXG5AQ29udGVudENoaWxkcmVuKCBmb3J3YXJkUmVmKCgpID0+IEFjY29yZGlhbkdyb3VwQ29tcG9uZW50KSApXHJcbiAgICBncm91cHM6IFF1ZXJ5TGlzdDxBY2NvcmRpYW5Hcm91cENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXIgOiBSZW5kZXJlcjIpe31cclxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoaSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9ICdhY2MtJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUoaS5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LCAnX21rLWFjY29yZGlhbicsIGF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBncm91cHM6QWNjb3JkaWFuR3JvdXBDb21wb25lbnQpe31cclxuICAgIHB1YmxpYyBjbG9zZUFsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMudG9BcnJheSgpKTtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICBpLmlzT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGkuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnY29udGVudC1ib2R5JztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);