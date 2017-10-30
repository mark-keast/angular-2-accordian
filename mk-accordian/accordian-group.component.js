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
        var styleItem = this.document.createElement('style');
        var itemStyle = "\n         .accordian_content-body{\n            height:0px;            \n            overflow:hidden;\n            transition:transform;\n            transition:height 0.3s ease-in;\n        }\n        .accordian_content-body.expanded-content-body-" + this.classExpand + " { \n            height:" + this.content.nativeElement.offsetHeight + "px !important; \n            transition:height 0.3s ease-in; \n        }";
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
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.Renderer,
            accordian_component_1.AccordianComponent, Object])
    ], AccordianGroupComponent);
    return AccordianGroupComponent;
}());
exports.AccordianGroupComponent = AccordianGroupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9tay1hY2NvcmRpYW4vYWNjb3JkaWFuLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUEyRDtBQUMzRCxzQ0FRc0M7QUFDdEMsOERBQXFEO0FBaUNyRDtJQVNBLGlDQUNZLFFBQWtCLEVBQ2xCLFNBQTZCLEVBQ1gsUUFBWTtRQUY5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBSTtRQUxuQyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBS1ksQ0FBQztJQUcxQywwQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUVJLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksWUFBWSxHQUFVLENBQUMsQ0FBQztRQWlCNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxTQUFTLEdBQUcsOFBBT2dDLElBQUksQ0FBQyxXQUFXLGdDQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLDZFQUVsRCxDQUFDO1FBQ0gsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDUyxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRVEsd0NBQU0sR0FBZDtRQUNLLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO1FBQ3hFLENBQUM7UUFDRCxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxJQUFHLDRCQUEwQixJQUFJLENBQUMsV0FBYSxDQUFBLENBQUM7UUFDOUYsQ0FBQztJQUVQLENBQUM7SUE1RWE7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7NERBQWdCO0lBQ1A7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWEsaUJBQVU7Z0VBQUM7SUFDdkI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWEsaUJBQVU7Z0VBQUM7SUFDM0I7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVMsaUJBQVU7NERBQUM7SUFXckM7UUFERixtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzJEQUt6QztJQW5CVyx1QkFBdUI7UUFoQ25DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFDLG9CQUFvQjtZQUM3QixRQUFRLEVBQUMsNGNBVVI7WUFDRCxNQUFNLEVBQUMsQ0FBQyxrZUFnQk4sQ0FBQztTQUNOLENBQUM7UUFhRyxXQUFBLGFBQU0sQ0FBQywyQkFBUSxDQUFDLENBQUE7eUNBRkMsZUFBUTtZQUNQLHdDQUFrQjtPQVg1Qix1QkFBdUIsQ0ErRW5DO0lBQUQsOEJBQUM7Q0EvRUQsQUErRUMsSUFBQTtBQS9FWSwwREFBdUIiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL21rLWFjY29yZGlhbi9hY2NvcmRpYW4tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVDb2xvdXJDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9jb2xvdXJzL3N0eWxlLWNvbG91ci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlTGlrZU9iamVjdCB9IGZyb20gJy4vLi4vLi4vZmlsZVVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcclxuaW1wb3J0IHsgQWNjb3JkaWFuQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG4gICAgICAgIElucHV0LFxyXG4gICAgICAgIFZpZXdDaGlsZCxcclxuICAgICAgICBFbGVtZW50UmVmLFxyXG4gICAgICAgIFJlbmRlcmVyLFxyXG4gICAgICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICAgICAgSG9zdExpc3RlbmVyLFxyXG4gICAgICAgIFJlbmRlcmVyMixcclxuICAgICAgICBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjonbmctYWNjb3JkaWFuLWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8ZGl2IChvbnJlc2l6ZSk9XCJyZVNpemUoKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpYW5faGVhZGluZ1wiICNoZWFkaW5nQXJlYSAoY2xpY2spPVwidG9nZ2xlKClcIj48aDM+e3toZWFkaW5nfX0gPHNwYW4gY2xhc3M9XCJhcnJvdy1yaWdodFwiIFtjbGFzcy5pLXJvdGF0ZV09XCJpc09wZW5lZFwiPj48L3NwYW4+PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaWFuX2NvbnRlbnQtYm9keVwiICNjb250ZW50QXJlYSBbY2xhc3MuYWNjSXNPcGVuXT1cImlzT3BlbmVkXCI+XHJcbiAgICAgICAgIDxkaXYgI2NvbnRlbnQgY2xhc3M9XCJhY2NvcmRpYW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgLmFjY29yZGlhbl9jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOjhweDtcclxuICAgIH1cclxuICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7ICAgICBcclxuICAgICAgICBmb250LXNpemU6MTEwJTsgICAgIFxyXG4gICAgfVxyXG4gICAgLmktcm90YXRle1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOyAgICAgXHJcbiAgICB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlhbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbkBJbnB1dCgnaGVhZGluZycpIGhlYWRpbmc6c3RyaW5nO1xyXG5AVmlld0NoaWxkKCdoZWFkaW5nQXJlYScpIGhlYWRpbmdBcmVhOkVsZW1lbnRSZWY7XHJcbkBWaWV3Q2hpbGQoJ2NvbnRlbnRBcmVhJykgY29udGVudEFyZWE6RWxlbWVudFJlZjtcclxuQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6RWxlbWVudFJlZjtcclxuXHJcblxyXG5wdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxucHVibGljIGNsYXNzRXhwYW5kOiBzdHJpbmc7XHJcbmNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcml2YXRlIGFjY29yZGlhbjogQWNjb3JkaWFuQ29tcG9uZW50LFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDphbnkpIHt9XHJcblxyXG4gQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICAvLyByZW1vdmUgc3R5bGUgdGFnIGFuZCB1cGRhdGUgdGhlbiBhZGQgYWdhaW4uXHJcbiAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkU3R5bGUoKTtcclxuIH1cclxuXHJcbiBwdWJsaWMgYWRkU3R5bGUoKSB7XHJcbiAgICAgLy8gd2UgbmVlZCB0byBncmFiIG1hcmdpbnMgdG8gc2V0IGNvcnJlY3QgaGVpZ2h0IGZvciB0cmFuc2l0aW9ucyBvdGhlcndpc2UgaXQgd29udCB3b3JrLlxyXG4gICAgIGxldCBjb250ZW50c0NoaWxkcmVuID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICAgbGV0IGNvdW50TWFyZ2luczpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vICBpZih0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgJyArIHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50c0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgd2luOmFueSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCBudWxsKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB0b3A6YW55ID0gcGFyc2VJbnQod2luLm1hcmdpblRvcCk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9wICcgKyB0b3ApO1xyXG4gICAgLy8gICAgICAgICAgICAgY291bnRNYXJnaW5zICs9IHRvcDtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudE1hcmdpbnMnICsgY291bnRNYXJnaW5zKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBib3R0b206YW55ID0gcGFyc2VJbnQod2luLm1hcmdpbkJvdHRvbSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnYm90dG9tICcgKyBib3R0b20pO1xyXG4gICAgLy8gICAgICAgICAgICAgY291bnRNYXJnaW5zICs9IGJvdHRvbTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudE1hcmdpbnMgYWZ0ZXIgQm90dG9tIGFkZGVkICcgKyBjb3VudE1hcmdpbnMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICB9XHJcblxyXG4gICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBsZXQgaXRlbVN0eWxlID0gYFxyXG4gICAgICAgICAuYWNjb3JkaWFuX2NvbnRlbnQtYm9keXtcclxuICAgICAgICAgICAgaGVpZ2h0OjBweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpoZWlnaHQgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWNjb3JkaWFuX2NvbnRlbnQtYm9keS5leHBhbmRlZC1jb250ZW50LWJvZHktJHt0aGlzLmNsYXNzRXhwYW5kfSB7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6JHt0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246aGVpZ2h0IDAuM3MgZWFzZS1pbjsgXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgc3R5bGVJdGVtLmlubmVySFRNTCA9IGl0ZW1TdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuIH1cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0V4cGFuZCA9IHRoaXMuY29udGVudEFyZWEubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19tay1hY2NvcmRpYW4nKTtcclxuICAgICAgICB0aGlzLmFkZFN0eWxlKCk7XHJcblxyXG4gICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XHJcbiAgICAgICAgIHRoaXMuaXNPcGVuZWQgPSAhdGhpcy5pc09wZW5lZDtcclxuICAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2FjY29yZGlhbl9jb250ZW50LWJvZHknO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnN0IHN0YXVzQmVmb3JlQ2hhbmdlID0gdGhpcy5pc09wZW5lZDtcclxuICAgICAgICAgaWYodGhpcy5hY2NvcmRpYW4uY2xvc2VPdGhlcnMpIHtcclxuICAgICAgICAgICAgIHRoaXMuYWNjb3JkaWFuLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5pc09wZW5lZCA9IHN0YXVzQmVmb3JlQ2hhbmdlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNPcGVuZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRBcmVhLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICsgYCBleHBhbmRlZC1jb250ZW50LWJvZHktJHt0aGlzLmNsYXNzRXhwYW5kfWA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);