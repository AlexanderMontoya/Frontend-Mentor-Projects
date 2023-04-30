import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crowdfunding-product-page';
  nav_responsive:boolean=false;
  scrollOff:boolean=true;
  backers:number=5007;
  reunido:number=89914;
  total:number=100000;
  persona={
    aporte: 0,
    reward: '',
  }
  rewards=[
    {
      id: 'noReward',
      title: 'Pledge with no reward',
      description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
      isReward: false,
      stock: 0,
      pledge: 0
    },
    {
      id: 'bambooReward',
      title: 'Bamboo Stand',
      description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
      isReward: true,
      stock: 101,
      pledge: 25,
      isChecked: false,
    },
    {
      id: 'blackReward',
      title: 'Black Edition Stand',
      description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
      isReward: true,
      stock: 64,
      pledge: 75,
      isChecked: false,
    },
    {
      id: 'mahoganyReward',
      title: 'Mahogany Special Edition',
      description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
      isReward: true,
      stock: 0,
      pledge: 200,
      isChecked: false,
    }
  ]
  cerrar(event:  Event){
    event.preventDefault();
    this.scrollOff=!this.scrollOff;
  }
  mostrar(i:number){
    this.rewards.forEach(element => {
      element.isChecked=false;
    });
    this.rewards[i].isChecked=true;
    this.persona.reward = this.rewards[i].id;
    this.persona.aporte=this.rewards[i].pledge;
  }
  selectReward(i:number){
    this.scrollOff=!this.scrollOff;
    this.mostrar(i);
  }

  enviarPledge(){
    this.reunido= this.reunido + (this.persona.aporte * 1);
    this.rewards.forEach(element => {
      element.isChecked=false;
    });
    console.log(this.persona.reward)
    this.persona.aporte=0;
    this.backers+=1;
    this.scrollOff=!this.scrollOff;
  }
}
