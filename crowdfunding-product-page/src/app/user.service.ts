import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  scrollOff:boolean=false;
  rewards=[
    {
      id: 'noReward',
      title: 'Pledge with no reward',
      description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
      isReward: false,
      pledge: 1,
      isChecked: false,
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
  user={
    aporte: 0,
    reward: '',
    aporto: false,
    total:0
  }
  project={
    days_left: 56,
    backers: 5007,
    collected: 89914,
    total: 100000
  }
  enviarPledge(){
    if(this.user.total >= this.user.aporte){
      this.project.collected= this.project.collected + (this.user.total * 1);
      this.project.backers+=1;
      this.rewards.forEach(element => {
        if(element.stock){
          if(element.id==this.user.reward){
            element.stock = element.stock - 1 ;
          }  
        }
      });
      this.user.aporto=true;  
    }
  }

  gotIt(){
    this.rewards.forEach(element => {
      element.isChecked=false;
    });
    this.user.reward='';
    this.user.aporte=0;
    this.user.aporto=false;
    this.scrollOff=!this.scrollOff;
  }

  mostrar(i:number){
    this.rewards.forEach(element => {
      element.isChecked=false;
    });
    this.rewards[i].isChecked=true;
    this.user.reward = this.rewards[i].id;
    this.user.aporte=this.rewards[i].pledge;
    this.user.total=this.user.aporte;
  }
  selectReward(i:number){
    this.scrollOff=!this.scrollOff;
    this.mostrar(i);
  }
}
