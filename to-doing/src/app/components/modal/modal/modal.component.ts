import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ITask } from 'src/utils/task.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() data!: ITask[];
  accItem: any;
  // accHD = document.getElementsByClassName('accordionItemHeading');
  @ViewChild('el') dom:ElementRef<HTMLElement> | undefined;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.accItem = this.dom?.nativeElement.querySelectorAll("accordionItem")
    console.log(this.accItem);



    for (let i = 0; i < this.accItem.length; i++) {
      const element = this.accItem[i];
      console.log(element);
    }
  }
  ngOnInit(): void {}

  toggleItem() {
    // var itemClass = <HTMLElement>parentNode.className;
    // for (i = 0; i < accItem.length; i++) {
    //     accItem[i].className = 'accordionItem close';
    // }
    // if (itemClass == 'accordionItem close') {
    //     this.parentNode.className = 'accordionItem open';
    // }
  }
}
