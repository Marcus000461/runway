import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
<<<<<<< HEAD
import { AuthService } from '../../../core/services/auth';

=======
import { AuthService } from '../../../core/services/outh';
>>>>>>> 6689c8aadcc313180eee3c27985a857aa07070e3

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private authservice = inject(AuthService);
  private router = inject(Router);

  loginform = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    name: new FormControl("")
  })

  onSubmit() {
    const { email, password, name } = this.loginform.getRawValue()

    this.authservice.cadastro(name!,email!, password!).subscribe({
      next: () => alert("Cadastro realizado com sucesso!"),
      error: () => alert("Dados inválidos!")
    })
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 6689c8aadcc313180eee3c27985a857aa07070e3
