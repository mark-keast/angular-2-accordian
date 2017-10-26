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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var accordian_component_1 = require("./accordian.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AccordianGroupComponent = (function () {
    function AccordianGroupComponent(renderer, accordian, document) {
        this.renderer = renderer;
        this.accordian = accordian;
        this.document = document;
        this.isOpened = false;
    }
    AccordianGroupComponent.prototype.onResize = function () {
        this.contentArea.nativeElement.children[1].remove();
        this.addStyle();
    };
    AccordianGroupComponent.prototype.addStyle = function () {
        var contentsChildren = this.content.nativeElement.children;
        var countMargins = 0;
        if (this.content.nativeElement.children.length > 0) {
            for (var i = 0; i < contentsChildren.length; i++) {
                var win = window.getComputedStyle(this.content.nativeElement.children[i], null);
                var top_1 = parseInt(win.marginTop);
                countMargins += top_1;
                var bottom = parseInt(win.marginBottom);
                countMargins += bottom;
            }
        }
        var styleItem = this.document.createElement('style');
        var itemStyle = "\n         .content-body{\n            height:0px;            \n            overflow:hidden;\n            transition:transform;\n            transition:height 0.3s ease-in;\n        }\n        .content-body.expanded-content-body-" + this.classExpand + " { \n            height:" + (this.content.nativeElement.offsetHeight + countMargins) + "px !important; \n            transition:height 0.3s ease-in; \n        }";
        styleItem.innerHTML = itemStyle;
        this.contentArea.nativeElement.appendChild(styleItem);
    };
    AccordianGroupComponent.prototype.ngAfterViewInit = function () {
        this.classExpand = this.contentArea.nativeElement.getAttribute('_mk-accordian');
        this.addStyle();
    };
    AccordianGroupComponent.prototype.toggle = function () {
        this.isOpened = !this.isOpened;
        if (!this.isOpened) {
            this.contentArea.nativeElement.className = 'content-body';
        }
        var stausBeforeChange = this.isOpened;
        if (this.accordian.closeOthers) {
            this.accordian.closeAll();
        }
        this.isOpened = stausBeforeChange;
        if (this.isOpened) {
            this.contentArea.nativeElement.className =
                this.contentArea.nativeElement.className + (" expanded-content-body-" + this.classExpand);
        }
    };
    return AccordianGroupComponent;
}());
__decorate([
    core_1.Input('heading'),
    __metadata("design:type", String)
], AccordianGroupComponent.prototype, "heading", void 0);
__decorate([
    core_1.ViewChild('headingArea'),
    __metadata("design:type", core_1.ElementRef)
], AccordianGroupComponent.prototype, "headingArea", void 0);
__decorate([
    core_1.ViewChild('contentArea'),
    __metadata("design:type", core_1.ElementRef)
], AccordianGroupComponent.prototype, "contentArea", void 0);
__decorate([
    core_1.ViewChild('contentOuterContainer'),
    __metadata("design:type", core_1.ElementRef)
], AccordianGroupComponent.prototype, "contentOuterContainer", void 0);
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", core_1.ElementRef)
], AccordianGroupComponent.prototype, "content", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccordianGroupComponent.prototype, "onResize", null);
AccordianGroupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-accordian-group',
        template: "\n        <div (onresize)=\"reSize()\">\n        <div tabIndex=\"0\" #headingArea (click)=\"toggle()\"><h3>{{heading}}</h3></div>\n        <div class=\"content-body\" #contentArea>\n            <!--div *ngIf=\"isOpened\"-->\n            <div #contentOuterContainer>\n                <div #content>\n                <ng-content></ng-content></div>\n            </div>\n        </div>\n        </div>\n    "
    }),
    __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [core_1.Renderer,
        accordian_component_1.AccordianComponent, Object])
], AccordianGroupComponent);
exports.AccordianGroupComponent = AccordianGroupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYWNjb3JkaWFuL2FjY29yZGlhbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBMkQ7QUFDM0Qsc0NBUXNDO0FBQ3RDLDhEQUFxRDtBQWlCckQsSUFBYSx1QkFBdUI7SUFVcEMsaUNBQ1ksUUFBa0IsRUFDbEIsU0FBNkIsRUFDWCxRQUFZO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFJO1FBTG5DLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLWSxDQUFDO0lBRzFDLDBDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQ0FBUSxHQUFmO1FBRUksSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxZQUFZLEdBQVUsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoRixJQUFJLEtBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQyxZQUFZLElBQUksS0FBRyxDQUFDO2dCQUNwQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QyxZQUFZLElBQUksTUFBTSxDQUFDO1lBQy9CLENBQUM7UUFDSixDQUFDO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxTQUFTLEdBQUcsME9BT3NCLElBQUksQ0FBQyxXQUFXLGlDQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsWUFBWSw4RUFFakUsQ0FBQztRQUNILFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ1MsaURBQWUsR0FBdEI7UUFJSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVRLHdDQUFNLEdBQWQ7UUFDSyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDOUQsQ0FBQztRQUNELElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUcsNEJBQTBCLElBQUksQ0FBQyxXQUFhLENBQUEsQ0FBQztRQUM5RixDQUFDO0lBRVAsQ0FBQztJQUVMLDhCQUFDO0FBQUQsQ0EvRUEsQUErRUMsSUFBQTtBQTlFaUI7SUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7d0RBQWdCO0FBQ1A7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWEsaUJBQVU7NERBQUM7QUFDdkI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWEsaUJBQVU7NERBQUM7QUFDYjtJQUFuQyxnQkFBUyxDQUFDLHVCQUF1QixDQUFDOzhCQUF1QixpQkFBVTtzRUFBQztBQUMvQztJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBUyxpQkFBVTt3REFBQztBQVdyQztJQURGLG1CQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7dURBS3pDO0FBcEJXLHVCQUF1QjtJQWhCbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUMsb0JBQW9CO1FBQzdCLFFBQVEsRUFBQyxzWkFXUjtLQUNKLENBQUM7SUFjRyxXQUFBLGFBQU0sQ0FBQywyQkFBUSxDQUFDLENBQUE7cUNBRkMsZUFBUTtRQUNQLHdDQUFrQjtHQVo1Qix1QkFBdUIsQ0ErRW5DO0FBL0VZLDBEQUF1QiIsImZpbGUiOiJhcHAvc2hhcmVkL2FjY29yZGlhbi9hY2NvcmRpYW4tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3JkaWFuQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG4gICAgICAgIElucHV0LFxyXG4gICAgICAgIFZpZXdDaGlsZCxcclxuICAgICAgICBFbGVtZW50UmVmLFxyXG4gICAgICAgIFJlbmRlcmVyLFxyXG4gICAgICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICAgICAgSG9zdExpc3RlbmVyLFxyXG4gICAgICAgIFJlbmRlcmVyMixcclxuICAgICAgICBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjonbmctYWNjb3JkaWFuLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IChvbnJlc2l6ZSk9XCJyZVNpemUoKVwiPlxyXG4gICAgICAgIDxkaXYgdGFiSW5kZXg9XCIwXCIgI2hlYWRpbmdBcmVhIChjbGljayk9XCJ0b2dnbGUoKVwiPjxoMz57e2hlYWRpbmd9fTwvaDM+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm9keVwiICNjb250ZW50QXJlYT5cclxuICAgICAgICAgICAgPCEtLWRpdiAqbmdJZj1cImlzT3BlbmVkXCItLT5cclxuICAgICAgICAgICAgPGRpdiAjY29udGVudE91dGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAjY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpYW5Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5ASW5wdXQoJ2hlYWRpbmcnKSBoZWFkaW5nOnN0cmluZztcclxuQFZpZXdDaGlsZCgnaGVhZGluZ0FyZWEnKSBoZWFkaW5nQXJlYTpFbGVtZW50UmVmO1xyXG5AVmlld0NoaWxkKCdjb250ZW50QXJlYScpIGNvbnRlbnRBcmVhOkVsZW1lbnRSZWY7XHJcbkBWaWV3Q2hpbGQoJ2NvbnRlbnRPdXRlckNvbnRhaW5lcicpIGNvbnRlbnRPdXRlckNvbnRhaW5lcjpFbGVtZW50UmVmO1xyXG5AVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDpFbGVtZW50UmVmO1xyXG5cclxuXHJcbnB1YmxpYyBpc09wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5wdWJsaWMgY2xhc3NFeHBhbmQ6IHN0cmluZztcclxuY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByaXZhdGUgYWNjb3JkaWFuOiBBY2NvcmRpYW5Db21wb25lbnQsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OmFueSkge31cclxuXHJcbiBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgIC8vIHJlbW92ZSBzdHlsZSB0YWcgYW5kIHVwZGF0ZSB0aGVuIGFkZCBhZ2Fpbi5cclxuICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZSgpO1xyXG4gfVxyXG5cclxuIHB1YmxpYyBhZGRTdHlsZSgpIHtcclxuICAgICAvLyB3ZSBuZWVkIHRvIGdyYWIgbWFyZ2lucyB0byBzZXQgY29ycmVjdCBoZWlnaHQgZm9yIHRyYW5zaXRpb25zIG90aGVyd2lzZSBpdCB3b250IHdvcmsuXHJcbiAgICAgbGV0IGNvbnRlbnRzQ2hpbGRyZW4gPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICBsZXQgY291bnRNYXJnaW5zOm51bWJlciA9IDA7XHJcblxyXG4gICAgIGlmKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50c0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcCA9IHBhcnNlSW50KHdpbi5tYXJnaW5Ub3ApO1xyXG4gICAgICAgICAgICAgICAgY291bnRNYXJnaW5zICs9IHRvcDtcclxuICAgICAgICAgICAgICAgIGxldCBib3R0b20gPSBwYXJzZUludCh3aW4ubWFyZ2luQm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGNvdW50TWFyZ2lucyArPSBib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIGxldCBpdGVtU3R5bGUgPSBgXHJcbiAgICAgICAgIC5jb250ZW50LWJvZHl7XHJcbiAgICAgICAgICAgIGhlaWdodDowcHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246aGVpZ2h0IDAuM3MgZWFzZS1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtYm9keS5leHBhbmRlZC1jb250ZW50LWJvZHktJHt0aGlzLmNsYXNzRXhwYW5kfSB7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6JHt0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyBjb3VudE1hcmdpbnN9cHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246aGVpZ2h0IDAuM3MgZWFzZS1pbjsgXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgc3R5bGVJdGVtLmlubmVySFRNTCA9IGl0ZW1TdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuIH1cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnRPdXRlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnX21rLWFjY29yZGlhbicpKTtcclxuICAgICAgICB0aGlzLmNsYXNzRXhwYW5kID0gdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnX21rLWFjY29yZGlhbicpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGUoKTtcclxuXHJcbiAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcclxuICAgICAgICAgdGhpcy5pc09wZW5lZCA9ICF0aGlzLmlzT3BlbmVkO1xyXG4gICAgICAgICBpZiAoIXRoaXMuaXNPcGVuZWQpIHtcclxuICAgICAgICAgICAgIHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnY29udGVudC1ib2R5JztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zdCBzdGF1c0JlZm9yZUNoYW5nZSA9IHRoaXMuaXNPcGVuZWQ7XHJcbiAgICAgICAgIGlmKHRoaXMuYWNjb3JkaWFuLmNsb3NlT3RoZXJzKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmFjY29yZGlhbi5jbG9zZUFsbCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuaXNPcGVuZWQgPSBzdGF1c0JlZm9yZUNoYW5nZTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSArIGAgZXhwYW5kZWQtY29udGVudC1ib2R5LSR7dGhpcy5jbGFzc0V4cGFuZH1gO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);