import { AccordianComponent } from './accordian.component';
import { Component,
        Input,
        ViewChild,
        ElementRef,
        Renderer,
        AfterViewInit,
        HostListener,
        Renderer2,
        Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
    moduleId:module.id,
    selector:'ng-accordian-group',
    template:`
        <div (onresize)="reSize()">
        <div class="accordian_heading" #headingArea (click)="toggle()"><h3>{{heading}} <span class="arrow-right" [class.i-rotate]="isOpened">></span></h3>
        </div>
        <div class="accordian_content-body" #contentArea [class.accIsOpen]="isOpened">
         <div #content class="accordian_content">
            <ng-content></ng-content>
         </div>
        </div>
        </div>
    `,
    styles:[`
    .accordian_content {
        padding:8px;
    }
    .arrow-right {
        display:inline-block;
        float:right;
        -webkit-transition: -webkit-transform .3s ease-in-out;
        -ms-transition: -ms-transform .3s ease-in-out;
        transition: transform .3s ease-in-out;     
        font-size:110%;     
    }
    .i-rotate{
        transform:rotate(90deg);
        -ms-transform:rotate(90deg);
        -webkit-transform:rotate(90deg);     
    }`]
})
export class AccordianGroupComponent implements AfterViewInit {
@Input('heading') heading:string;
@ViewChild('headingArea') headingArea:ElementRef;
@ViewChild('contentArea') contentArea:ElementRef;
@ViewChild('content') content:ElementRef;


public isOpened: boolean = false;
public classExpand: string;
public styleItem: HTMLStyleElement;

constructor(
    private renderer: Renderer,
    private renderer2: Renderer2,
    private accordian: AccordianComponent,
    @Inject(DOCUMENT) private document:any) {

        this.styleItem = this.document.createElement('style');
    }

 @HostListener('window:resize', ['$event'])
    onResize() {
        // remove style tag and update then add again.
        // this.contentArea.nativeElement.children[1].remove();
        this.addStyle();
 }

 public addStyle() {
     // we need to grab margins to set correct height for transitions otherwise it wont work.
     let contentsChildren = this.content.nativeElement.children;
     let countMargins:number = 0;

    //  if(this.content.nativeElement.children.length > 0) {
    //      console.log('this.content.nativeElement.offsetHeight ' + this.content.nativeElement.offsetHeight);
    //     for (let i = 0; i < contentsChildren.length; i++) {
    //             let win:any = window.getComputedStyle(this.content.nativeElement.children[i], null);
    //             let top:any = parseInt(win.marginTop);
    //             console.log('top ' + top);
    //             countMargins += top;
    //             console.log('countMargins' + countMargins);
    //             let bottom:any = parseInt(win.marginBottom);
    //             console.log('bottom ' + bottom);
    //             countMargins += bottom;
    //             console.log('countMargins after Bottom added ' + countMargins);
    //     }
    //  }

    //  const styleItem = this.document.createElement('style');
        let itemStyle = `
         .accordian_content-body{
            height:0px;            
            overflow:hidden;
            transition:transform;
            transition:height 0.3s ease-in;
        }
        .accordian_content-body.expanded-content-body-${this.classExpand} { 
            height:${this.content.nativeElement.offsetHeight}px !important; 
            transition:height 0.3s ease-in; 
        }`;
        this.styleItem.innerHTML = itemStyle;
        // this.contentArea.nativeElement.appendChild(styleItem);
 }
    public ngAfterViewInit() {
        this.contentArea.nativeElement.appendChild(this.styleItem);
        this.classExpand = this.contentArea.nativeElement.getAttribute('_mk-accordian');
        this.addStyle();

   }

    private toggle() {
         this.isOpened = !this.isOpened;
         if (!this.isOpened) {
             this.contentArea.nativeElement.className = 'accordian_content-body';
         }
         const stausBeforeChange = this.isOpened;
         if(this.accordian.closeOthers) {
             this.accordian.closeAll();
         }
         this.isOpened = stausBeforeChange;
          if (this.isOpened) {
            this.contentArea.nativeElement.className =
                this.contentArea.nativeElement.className + ` expanded-content-body-${this.classExpand}`;

                // this.renderer2.setStyle(this.contentArea.nativeElement,'border','solid 1px red');
                    // (this.contentArea.nativeElement,'border-left,'solid 1px red');
          }

    }

}
