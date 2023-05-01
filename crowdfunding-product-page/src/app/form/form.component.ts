import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(public useService:UserService){}
  enviarPledge(){
    this.useService.enviarPledge();
  }

  gotIt(){
    this.useService.gotIt();
  }

  cerrar(event:  Event){
    event.preventDefault();
    this.useService.scrollOff=!this.useService.scrollOff;
  }
  //
  mostrar(i:number){
    this.useService.mostrar(i);
  }
  selectReward(i:number){
    this.useService.selectReward(i);
  }
  //
  validateFormat(event:any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
     if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
     }
  }
}
