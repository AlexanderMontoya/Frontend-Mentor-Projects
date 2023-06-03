import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  @Input() navbar?:boolean;
  @Output() navbarChange=new EventEmitter<boolean>();

  closeNavbar(){
    console.log(this.navbar);
    this.navbarChange.emit(false);
  }
}
