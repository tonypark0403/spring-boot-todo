import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  //Router for redirect
  //Angular.giveMeRouter

  //Dependency Injection - router inject
  constructor(
    private router: Router,
    private hardcodedAuthenticationSerivce: HardcodedAuthenticationService
  ) { } // automatically private router; ... this.router = router;

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username + ", " + this.password);
    // if (this.username === 'tony' && this.password === 'tony') {
    if (this.hardcodedAuthenticationSerivce.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
