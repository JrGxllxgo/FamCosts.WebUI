import { Component } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){}

  public user: UserModel = {
    username: '',
    password: ''
  }

  onSubmit() {
    console.log('Usuario:', this.user.username);
    console.log('Contraseña:', this.user.password);
  }
}