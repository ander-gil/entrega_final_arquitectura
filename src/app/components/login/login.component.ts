import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private correctEmail: string = 'usuario@correo.com';
  private correctPassword: string = '123456';

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router:Router){}

  onLogin(){
    if(this.email === this.correctEmail && this.password === this.correctPassword){
      this.router.navigate(['/pruebas']);
      this.errorMessage = '';
    } else {
      this.router.navigate(['/']);
      this.errorMessage = 'Email o contraseña incorrectos';
    }
  }
}
