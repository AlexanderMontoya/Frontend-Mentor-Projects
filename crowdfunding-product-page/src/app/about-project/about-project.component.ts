import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent {
  constructor(public useService:UserService){}
  mostrar(i:number){
    this.useService.mostrar(i);
  }
  selectReward(i:number){
    this.useService.selectReward(i);
  }
}
