import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'tony';
  password = '';
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username + ", " + this.password);
    if (this.username === 'tony' && this.password === 'tony') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
