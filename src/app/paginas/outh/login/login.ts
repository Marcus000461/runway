import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
<<<<<<< HEAD

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';
=======
import { AuthService } from '../../../core/services/outh';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 6689c8aadcc313180eee3c27985a857aa07070e3

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authservice = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit() {
    const { email, password } = this.loginForm.getRawValue()

    this.authservice.login(email!, password!).subscribe({
      next: () => alert("Login realizado com sucesso!"),
      error: () => alert("Erro ao realizar login, verifique suas credenciais!")
    })
  }
}