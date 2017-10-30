(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL) {"use strict";
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
            i.contentArea.nativeElement.className = 'accordian_content-body';
        });
    };
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
            template: "\n    <div class=\"accordian\">\n        <ng-content></ng-content>\n    </div>",
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], AccordianComponent);
    return AccordianComponent;
}());
exports.AccordianComponent = AccordianComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSxzQ0FBeUk7QUFXekk7SUFNSSw0QkFBb0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUxqQyxnQkFBVyxHQUFXLEtBQUssQ0FBQztJQUtPLENBQUM7SUFDbEMsK0NBQWtCLEdBQXpCO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxLQUFLO1lBQ3hCLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDakIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBCSTtRQUFSLFlBQUssRUFBRTs7MkRBQTZCO0lBR2pDO1FBREgsc0JBQWUsQ0FBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxtREFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFFO2tDQUNqRCxnQkFBUztzREFBMEI7SUFKbEMsa0JBQWtCO1FBVjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFDLGNBQWM7WUFDdkIsUUFBUSxFQUFDLGdGQUdGO1NBR1YsQ0FBQzt5Q0FPK0IsZ0JBQVM7T0FON0Isa0JBQWtCLENBc0I5QjtJQUFELHlCQUFDO0NBdEJELEFBc0JDLElBQUE7QUF0QlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlhbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpYW4tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkcmVuLCBWaWV3RW5jYXBzdWxhdGlvbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjonbmctYWNjb3JkaWFuJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpYW5cIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgLy8gc3R5bGVVcmxzOlsnX2FjY29yZGlhbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpYW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0e1xyXG5ASW5wdXQoKSBjbG9zZU90aGVyczpib29sZWFuID0gZmFsc2U7XHJcblxyXG5AQ29udGVudENoaWxkcmVuKCBmb3J3YXJkUmVmKCgpID0+IEFjY29yZGlhbkdyb3VwQ29tcG9uZW50KSApXHJcbiAgICBncm91cHM6IFF1ZXJ5TGlzdDxBY2NvcmRpYW5Hcm91cENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXIgOiBSZW5kZXJlcjIpe31cclxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoaSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXR0ciA9ICdhY2MtJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUoaS5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LCAnX21rLWFjY29yZGlhbicsIGF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBncm91cHM6QWNjb3JkaWFuR3JvdXBDb21wb25lbnQpe31cclxuICAgIHB1YmxpYyBjbG9zZUFsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMudG9BcnJheSgpKTtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICBpLmlzT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGkuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnYWNjb3JkaWFuX2NvbnRlbnQtYm9keSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);