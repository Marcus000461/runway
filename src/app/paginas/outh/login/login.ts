import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';


@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authservice = inject(AuthService);
  private router = inject(Router);

  estaCarregando = signal(false);

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit() {
    this.estaCarregando.set(true);
    const { email, password } = this.loginForm.getRawValue()

    this.authservice.login(email!, password!).subscribe({
      next: () => alert("Login realizado com sucesso!"),
      error: () =>{
        this.estaCarregando.set(false);
        alert("Usuario ou senha inválidos!")
      }
    })
  }
}