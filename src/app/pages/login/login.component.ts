import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuario: string;

  constructor(private route: Router) { }

  login() {
    sessionStorage.setItem('usuario', this.usuario);

    this.route.navigate(['/home']);
  }
}
