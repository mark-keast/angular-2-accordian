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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUEyRDtBQUMzRCxzQ0FRc0M7QUFDdEMsOERBQXFEO0FBaUNyRDtJQVdBLGlDQUNZLFFBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLFNBQTZCLEVBQ1gsUUFBWTtRQUg5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFJO1FBUm5DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFVekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBR0QsMENBQVEsR0FBUjtRQUdJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUVJLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksWUFBWSxHQUFVLENBQUMsQ0FBQztRQWtCekIsSUFBSSxTQUFTLEdBQUcsOFBBT2dDLElBQUksQ0FBQyxXQUFXLGdDQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLDZFQUVsRCxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTVDLENBQUM7SUFDUyxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFUSx3Q0FBTSxHQUFkO1FBQ0ssSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFDeEUsQ0FBQztRQUNELElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUcsNEJBQTBCLElBQUksQ0FBQyxXQUFhLENBQUEsQ0FBQztRQUk5RixDQUFDO0lBRVAsQ0FBQztJQXRGYTtRQUFqQixZQUFLLENBQUMsU0FBUyxDQUFDOzs0REFBZ0I7SUFDUDtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYSxpQkFBVTtnRUFBQztJQUN2QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYSxpQkFBVTtnRUFBQztJQUMzQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBUyxpQkFBVTs0REFBQztJQWlCckM7UUFERixtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzJEQUt6QztJQXpCVyx1QkFBdUI7UUFoQ25DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFDLG9CQUFvQjtZQUM3QixRQUFRLEVBQUMsNGNBVVI7WUFDRCxNQUFNLEVBQUMsQ0FBQyxrZUFnQk4sQ0FBQztTQUNOLENBQUM7UUFnQkcsV0FBQSxhQUFNLENBQUMsMkJBQVEsQ0FBQyxDQUFBO3lDQUhDLGVBQVE7WUFDUCxnQkFBUztZQUNULHdDQUFrQjtPQWQ1Qix1QkFBdUIsQ0F5Rm5DO0lBQUQsOEJBQUM7Q0F6RkQsQUF5RkMsSUFBQTtBQXpGWSwwREFBdUIiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL21rLWFjY29yZGlhbi9hY2NvcmRpYW4tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVDb2xvdXJDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9jb2xvdXJzL3N0eWxlLWNvbG91ci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlTGlrZU9iamVjdCB9IGZyb20gJy4vLi4vLi4vZmlsZVVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcclxuaW1wb3J0IHsgQWNjb3JkaWFuQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG4gICAgICAgIElucHV0LFxyXG4gICAgICAgIFZpZXdDaGlsZCxcclxuICAgICAgICBFbGVtZW50UmVmLFxyXG4gICAgICAgIFJlbmRlcmVyLFxyXG4gICAgICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICAgICAgSG9zdExpc3RlbmVyLFxyXG4gICAgICAgIFJlbmRlcmVyMixcclxuICAgICAgICBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjonbmctYWNjb3JkaWFuLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IChvbnJlc2l6ZSk9XCJyZVNpemUoKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpYW5faGVhZGluZ1wiICNoZWFkaW5nQXJlYSAoY2xpY2spPVwidG9nZ2xlKClcIj48aDM+e3toZWFkaW5nfX0gPHNwYW4gY2xhc3M9XCJhcnJvdy1yaWdodFwiIFtjbGFzcy5pLXJvdGF0ZV09XCJpc09wZW5lZFwiPj48L3NwYW4+PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaWFuX2NvbnRlbnQtYm9keVwiICNjb250ZW50QXJlYSBbY2xhc3MuYWNjSXNPcGVuXT1cImlzT3BlbmVkXCI+XHJcbiAgICAgICAgIDxkaXYgI2NvbnRlbnQgY2xhc3M9XCJhY2NvcmRpYW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgLmFjY29yZGlhbl9jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOjhweDtcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7ICAgICBcclxuICAgICAgICBmb250LXNpemU6MTEwJTsgICAgIFxyXG4gICAgfVxyXG4gICAgLmktcm90YXRle1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOyAgICAgXHJcbiAgICB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlhbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbkBJbnB1dCgnaGVhZGluZycpIGhlYWRpbmc6c3RyaW5nO1xyXG5AVmlld0NoaWxkKCdoZWFkaW5nQXJlYScpIGhlYWRpbmdBcmVhOkVsZW1lbnRSZWY7XHJcbkBWaWV3Q2hpbGQoJ2NvbnRlbnRBcmVhJykgY29udGVudEFyZWE6RWxlbWVudFJlZjtcclxuQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6RWxlbWVudFJlZjtcclxuXHJcblxyXG5wdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxucHVibGljIGNsYXNzRXhwYW5kOiBzdHJpbmc7XHJcbnB1YmxpYyBzdHlsZUl0ZW06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5jb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgYWNjb3JkaWFuOiBBY2NvcmRpYW5Db21wb25lbnQsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OmFueSkge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlSXRlbSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIH1cclxuXHJcbiBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgIC8vIHJlbW92ZSBzdHlsZSB0YWcgYW5kIHVwZGF0ZSB0aGVuIGFkZCBhZ2Fpbi5cclxuICAgICAgICAvLyB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZSgpO1xyXG4gfVxyXG5cclxuIHB1YmxpYyBhZGRTdHlsZSgpIHtcclxuICAgICAvLyB3ZSBuZWVkIHRvIGdyYWIgbWFyZ2lucyB0byBzZXQgY29ycmVjdCBoZWlnaHQgZm9yIHRyYW5zaXRpb25zIG90aGVyd2lzZSBpdCB3b250IHdvcmsuXHJcbiAgICAgbGV0IGNvbnRlbnRzQ2hpbGRyZW4gPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICBsZXQgY291bnRNYXJnaW5zOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gIGlmKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgY29uc29sZS5sb2coJ3RoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAnICsgdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRzQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB3aW46YW55ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sIG51bGwpO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHRvcDphbnkgPSBwYXJzZUludCh3aW4ubWFyZ2luVG9wKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3AgJyArIHRvcCk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb3VudE1hcmdpbnMgKz0gdG9wO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvdW50TWFyZ2lucycgKyBjb3VudE1hcmdpbnMpO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGJvdHRvbTphbnkgPSBwYXJzZUludCh3aW4ubWFyZ2luQm90dG9tKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3R0b20gJyArIGJvdHRvbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb3VudE1hcmdpbnMgKz0gYm90dG9tO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvdW50TWFyZ2lucyBhZnRlciBCb3R0b20gYWRkZWQgJyArIGNvdW50TWFyZ2lucyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gIH1cclxuXHJcbiAgICAvLyAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIGxldCBpdGVtU3R5bGUgPSBgXHJcbiAgICAgICAgIC5hY2NvcmRpYW5fY29udGVudC1ib2R5e1xyXG4gICAgICAgICAgICBoZWlnaHQ6MHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246dHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOmhlaWdodCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY2NvcmRpYW5fY29udGVudC1ib2R5LmV4cGFuZGVkLWNvbnRlbnQtYm9keS0ke3RoaXMuY2xhc3NFeHBhbmR9IHsgXHJcbiAgICAgICAgICAgIGhlaWdodDoke3RoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodH1weCAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpoZWlnaHQgMC4zcyBlYXNlLWluOyBcclxuICAgICAgICB9YDtcclxuICAgICAgICB0aGlzLnN0eWxlSXRlbS5pbm5lckhUTUwgPSBpdGVtU3R5bGU7XHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlSXRlbSk7XHJcbiB9XHJcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0V4cGFuZCA9IHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19tay1hY2NvcmRpYW4nKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlKCk7XHJcblxyXG4gICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XHJcbiAgICAgICAgIHRoaXMuaXNPcGVuZWQgPSAhdGhpcy5pc09wZW5lZDtcclxuICAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2FjY29yZGlhbl9jb250ZW50LWJvZHknO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnN0IHN0YXVzQmVmb3JlQ2hhbmdlID0gdGhpcy5pc09wZW5lZDtcclxuICAgICAgICAgaWYodGhpcy5hY2NvcmRpYW4uY2xvc2VPdGhlcnMpIHtcclxuICAgICAgICAgICAgIHRoaXMuYWNjb3JkaWFuLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5pc09wZW5lZCA9IHN0YXVzQmVmb3JlQ2hhbmdlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNPcGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICsgYCBleHBhbmRlZC1jb250ZW50LWJvZHktJHt0aGlzLmNsYXNzRXhwYW5kfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LCdib3JkZXInLCdzb2xpZCAxcHggcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudCwnYm9yZGVyLWxlZnQsJ3NvbGlkIDFweCByZWQnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);