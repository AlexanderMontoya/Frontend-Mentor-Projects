import { Component } from '@angular/core';

import { FirebaseApp } from '@angular/fire/app';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-product';

  constructor(public userService:UserService){}

}
