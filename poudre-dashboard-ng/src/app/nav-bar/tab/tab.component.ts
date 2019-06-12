import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ElementRef }  from '@angular/core';
import { DropdownOptionComponent } from '../../nav-bar/nav-dropdown/nav-dropdown-option/nav-dropdown-option.component';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'tab',
  styleUrls: ['./tab.component.css'],
  templateUrl:'./tab.component.html'
})
export class TabComponent implements OnInit{
  @Input() data: any;
  @ViewChild(TabDirective) tabHost: TabDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(){
    console.log(this.data)
  }
}
