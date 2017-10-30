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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var accordian_component_1 = require("./accordian.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AccordianGroupComponent = (function () {
    function AccordianGroupComponent(renderer, renderer2, accordian, document) {
        this.renderer = renderer;
        this.renderer2 = renderer2;
        this.accordian = accordian;
        this.document = document;
        this.isOpened = false;
        this.styleItem = this.document.createElement('style');
    }
    AccordianGroupComponent.prototype.onResize = function () {
        this.addStyle();
    };
    AccordianGroupComponent.prototype.addStyle = function () {
        var contentsChildren = this.content.nativeElement.children;
        var countMargins = 0;
        var itemStyle = "\n         .accordian_content-body{\n            height:0px;            \n            overflow:hidden;\n            transition:transform;\n            transition:height 0.3s ease-in;\n        }\n        .accordian_content-body.expanded-content-body-" + this.classExpand + " { \n            height:" + this.content.nativeElement.offsetHeight + "px !important; \n            transition:height 0.3s ease-in; \n        }";
        this.styleItem.innerHTML = itemStyle;
    };
    AccordianGroupComponent.prototype.ngAfterViewInit = function () {
        this.contentArea.nativeElement.appendChild(this.styleItem);
        this.classExpand = this.contentArea.nativeElement.getAttribute('_mk-accordian');
        this.addStyle();
    };
    AccordianGroupComponent.prototype.toggle = function () {
        this.isOpened = !this.isOpened;
        if (!this.isOpened) {
            this.contentArea.nativeElement.className = 'accordian_content-body';
        }
        var stausBeforeChange = this.isOpened;
        if (this.accordian.closeOthers) {
            this.accordian.closeAll();
        }
        this.isOpened = stausBeforeChange;
        if (this.isOpened) {
            this.contentArea.nativeElement.className =
                this.contentArea.nativeElement.className + (" expanded-content-body-" + this.classExpand);
            this.renderer2.setStyle(this.contentArea.nativeElement, 'border', 'solid 1px red');
        }
    };
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
            template: "\n        <div (onresize)=\"reSize()\">\n        <div class=\"accordian_heading\" #headingArea (click)=\"toggle()\"><h3>{{heading}} <span class=\"arrow-right\" [class.i-rotate]=\"isOpened\">></span></h3>\n        </div>\n        <div class=\"accordian_content-body\" #contentArea [class.accIsOpen]=\"isOpened\">\n         <div #content class=\"accordian_content\">\n            <ng-content></ng-content>\n         </div>\n        </div>\n        </div>\n    ",
            styles: ["\n    .accordian_content {\n        padding:8px;\n    }\n    .arrow-right {\n        display:inline-block;\n        float:right;\n        -webkit-transition: -webkit-transform .3s ease-in-out;\n        -ms-transition: -ms-transform .3s ease-in-out;\n        transition: transform .3s ease-in-out;     \n        font-size:110%;     \n    }\n    .i-rotate{\n        transform:rotate(90deg);\n        -ms-transform:rotate(90deg);\n        -webkit-transform:rotate(90deg);     \n    }"]
        }),
        __param(3, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.Renderer,
            core_1.Renderer2,
            accordian_component_1.AccordianComponent, Object])
    ], AccordianGroupComponent);
    return AccordianGroupComponent;
}());
exports.AccordianGroupComponent = AccordianGroupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUEyRDtBQUMzRCxzQ0FRc0M7QUFDdEMsOERBQXFEO0FBaUNyRDtJQVdBLGlDQUNZLFFBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLFNBQTZCLEVBQ1gsUUFBWTtRQUg5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFJO1FBUm5DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFVekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBR0QsMENBQVEsR0FBUjtRQUdJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUVJLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksWUFBWSxHQUFVLENBQUMsQ0FBQztRQWtCekIsSUFBSSxTQUFTLEdBQUcsOFBBT2dDLElBQUksQ0FBQyxXQUFXLGdDQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLDZFQUVsRCxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTVDLENBQUM7SUFDUyxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFUSx3Q0FBTSxHQUFkO1FBQ0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFDeEUsQ0FBQztRQUNELElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUcsNEJBQTBCLElBQUksQ0FBQyxXQUFhLENBQUEsQ0FBQztZQUV4RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFFdkYsQ0FBQztJQUVQLENBQUM7SUF0RmE7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7NERBQWdCO0lBQ1A7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWEsaUJBQVU7Z0VBQUM7SUFDdkI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWEsaUJBQVU7Z0VBQUM7SUFDM0I7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVMsaUJBQVU7NERBQUM7SUFpQnJDO1FBREYsbUJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsyREFLekM7SUF6QlcsdUJBQXVCO1FBaENuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsRUFBQyxvQkFBb0I7WUFDN0IsUUFBUSxFQUFDLDRjQVVSO1lBQ0QsTUFBTSxFQUFDLENBQUMsa2VBZ0JOLENBQUM7U0FDTixDQUFDO1FBZ0JHLFdBQUEsYUFBTSxDQUFDLDJCQUFRLENBQUMsQ0FBQTt5Q0FIQyxlQUFRO1lBQ1AsZ0JBQVM7WUFDVCx3Q0FBa0I7T0FkNUIsdUJBQXVCLENBeUZuQztJQUFELDhCQUFDO0NBekZELEFBeUZDLElBQUE7QUF6RlksMERBQXVCIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlQ29sb3VyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9zdHlsZXMvY29sb3Vycy9zdHlsZS1jb2xvdXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZUxpa2VPYmplY3QgfSBmcm9tICcuLy4uLy4uL2ZpbGVVcGxvYWQvZmlsZS1saWtlLW9iamVjdC5jbGFzcyc7XHJcbmltcG9ydCB7IEFjY29yZGlhbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaWFuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCxcclxuICAgICAgICBJbnB1dCxcclxuICAgICAgICBWaWV3Q2hpbGQsXHJcbiAgICAgICAgRWxlbWVudFJlZixcclxuICAgICAgICBSZW5kZXJlcixcclxuICAgICAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgICAgIEhvc3RMaXN0ZW5lcixcclxuICAgICAgICBSZW5kZXJlcjIsXHJcbiAgICAgICAgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6J25nLWFjY29yZGlhbi1ncm91cCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiAob25yZXNpemUpPVwicmVTaXplKClcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaWFuX2hlYWRpbmdcIiAjaGVhZGluZ0FyZWEgKGNsaWNrKT1cInRvZ2dsZSgpXCI+PGgzPnt7aGVhZGluZ319IDxzcGFuIGNsYXNzPVwiYXJyb3ctcmlnaHRcIiBbY2xhc3MuaS1yb3RhdGVdPVwiaXNPcGVuZWRcIj4+PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlhbl9jb250ZW50LWJvZHlcIiAjY29udGVudEFyZWEgW2NsYXNzLmFjY0lzT3Blbl09XCJpc09wZW5lZFwiPlxyXG4gICAgICAgICA8ZGl2ICNjb250ZW50IGNsYXNzPVwiYWNjb3JkaWFuX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6W2BcclxuICAgIC5hY2NvcmRpYW5fY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzo4cHg7XHJcbiAgICB9XHJcbiAgICAuYXJyb3ctcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0OyAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOjExMCU7ICAgICBcclxuICAgIH1cclxuICAgIC5pLXJvdGF0ZXtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTsgICAgIFxyXG4gICAgfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpYW5Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5ASW5wdXQoJ2hlYWRpbmcnKSBoZWFkaW5nOnN0cmluZztcclxuQFZpZXdDaGlsZCgnaGVhZGluZ0FyZWEnKSBoZWFkaW5nQXJlYTpFbGVtZW50UmVmO1xyXG5AVmlld0NoaWxkKCdjb250ZW50QXJlYScpIGNvbnRlbnRBcmVhOkVsZW1lbnRSZWY7XHJcbkBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OkVsZW1lbnRSZWY7XHJcblxyXG5cclxucHVibGljIGlzT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XHJcbnB1YmxpYyBjbGFzc0V4cGFuZDogc3RyaW5nO1xyXG5wdWJsaWMgc3R5bGVJdGVtOiBIVE1MU3R5bGVFbGVtZW50O1xyXG5cclxuY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGFjY29yZGlhbjogQWNjb3JkaWFuQ29tcG9uZW50LFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDphbnkpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZUl0ZW0gPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICB9XHJcblxyXG4gQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICAvLyByZW1vdmUgc3R5bGUgdGFnIGFuZCB1cGRhdGUgdGhlbiBhZGQgYWdhaW4uXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGUoKTtcclxuIH1cclxuXHJcbiBwdWJsaWMgYWRkU3R5bGUoKSB7XHJcbiAgICAgLy8gd2UgbmVlZCB0byBncmFiIG1hcmdpbnMgdG8gc2V0IGNvcnJlY3QgaGVpZ2h0IGZvciB0cmFuc2l0aW9ucyBvdGhlcndpc2UgaXQgd29udCB3b3JrLlxyXG4gICAgIGxldCBjb250ZW50c0NoaWxkcmVuID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICAgbGV0IGNvdW50TWFyZ2luczpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vICBpZih0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgJyArIHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50c0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgd2luOmFueSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCBudWxsKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB0b3A6YW55ID0gcGFyc2VJbnQod2luLm1hcmdpblRvcCk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9wICcgKyB0b3ApO1xyXG4gICAgLy8gICAgICAgICAgICAgY291bnRNYXJnaW5zICs9IHRvcDtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudE1hcmdpbnMnICsgY291bnRNYXJnaW5zKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBib3R0b206YW55ID0gcGFyc2VJbnQod2luLm1hcmdpbkJvdHRvbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm90dG9tICcgKyBib3R0b20pO1xyXG4gICAgLy8gICAgICAgICAgICAgY291bnRNYXJnaW5zICs9IGJvdHRvbTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudE1hcmdpbnMgYWZ0ZXIgQm90dG9tIGFkZGVkICcgKyBjb3VudE1hcmdpbnMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICB9XHJcblxyXG4gICAgLy8gIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBsZXQgaXRlbVN0eWxlID0gYFxyXG4gICAgICAgICAuYWNjb3JkaWFuX2NvbnRlbnQtYm9keXtcclxuICAgICAgICAgICAgaGVpZ2h0OjBweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpoZWlnaHQgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWNjb3JkaWFuX2NvbnRlbnQtYm9keS5leHBhbmRlZC1jb250ZW50LWJvZHktJHt0aGlzLmNsYXNzRXhwYW5kfSB7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6JHt0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246aGVpZ2h0IDAuM3MgZWFzZS1pbjsgXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZUl0ZW0uaW5uZXJIVE1MID0gaXRlbVN0eWxlO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gfVxyXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMuY2xhc3NFeHBhbmQgPSB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfbWstYWNjb3JkaWFuJyk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZSgpO1xyXG5cclxuICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xyXG4gICAgICAgICB0aGlzLmlzT3BlbmVkID0gIXRoaXMuaXNPcGVuZWQ7XHJcbiAgICAgICAgIGlmICghdGhpcy5pc09wZW5lZCkge1xyXG4gICAgICAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdhY2NvcmRpYW5fY29udGVudC1ib2R5JztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zdCBzdGF1c0JlZm9yZUNoYW5nZSA9IHRoaXMuaXNPcGVuZWQ7XHJcbiAgICAgICAgIGlmKHRoaXMuYWNjb3JkaWFuLmNsb3NlT3RoZXJzKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmFjY29yZGlhbi5jbG9zZUFsbCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuaXNPcGVuZWQgPSBzdGF1c0JlZm9yZUNoYW5nZTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSArIGAgZXhwYW5kZWQtY29udGVudC1ib2R5LSR7dGhpcy5jbGFzc0V4cGFuZH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudCwnYm9yZGVyJywnc29saWQgMXB4IHJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICh0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQsJ2JvcmRlci1sZWZ0LCdzb2xpZCAxcHggcmVkJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);