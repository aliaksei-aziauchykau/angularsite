import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../model/role';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  busy: Subscription;
  email: string;
  password: string;
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  forgot: boolean = false;
  resetPassw: boolean = false;
  checkPass: string;
  forgotEmail: string;
  resetPass: string;
  canReset: boolean = false; // this needs to be fixed

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.userService.identity) {
        this.loggedIn = true;
        this.loggedOut = false;
        this.forgot = false;
        this.resetPassw = false;
      }
    }, 100);
    if (this.route.snapshot.paramMap.get('id') && this.route.snapshot.paramMap.get('token')) {
      setTimeout(() => {
        this.changeToReset();
      }, 300);
      alertify.success('Ustaw nowe hasło!');
    }
  }

  login() {
    this.busy = this.userService.login(this.email, this.password).subscribe(result => {
      alertify.success('Zalogowany!');
      this.loggedIn = true;
      if (result.user.roles.indexOf(Role.ADMIN) == 0) {
        return this.router.navigate(['/admin']);
      }
      if (result.user.roles.indexOf(Role.EXPERT) == 0) {
        return this.router.navigate(['/expert']);
      }
      else  {
        return this.router.navigate(['/home']);
      }
    },
    error => {
      alertify.error('Błąd, proszę spróbować ponownie!').setHeader('<em> Błąd </em> ');
    });
  }

  logout() {
    this.userService.logout();
    this.loggedIn = false;
    alertify.success('Wylogowany pomyślnie!');
  }

  changeToForgot() {
    this.loggedIn = false;
    this.loggedOut = false;
    this.resetPassw = false;
    this.forgot = true;
  }

  changeToLogin() {
    this.loggedIn = false;
    this.forgot = false;
    this.resetPassw = false;
    this.loggedOut = true;
  }

  changeToReset() {
    this.loggedIn = false;
    this.loggedOut = false;
    this.forgot = false;
    this.resetPassw = true;
  }

  forgotUser() {
    this.userService.forgot(this.forgotEmail).subscribe(result => {
      alertify.confirm('Email ze zmianią hasła wysłany pomyślnie na podany adres').setHeader('<em> Wysłano </em> ');
      this.router.navigate(['/']);
    },
    error => {
      console.log(error);
      alertify.alert('Błąd! Proszę spróbować ponownie!').setHeader('<em> Błąd </em> ');
    });
  }

  resetPassword() {
    this.userService.reset(this.route.snapshot.paramMap.get('id'), this.resetPass, this.route.snapshot.paramMap.get('token'))
      .subscribe(result => {
        alertify.confirm('Hasło zmienione pomyślnie!');
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        alertify.alert('Błąd! Nie można zmienić hasła.');
      });
  }

  validateButton() {
    this.canReset = this.resetPass !== this.checkPass;
  }

}
