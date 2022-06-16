import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  entrar(){
    const usuario = this.form.value.usuario;
    const senha = this.form.value.senha;

    if(usuario == "lutiell" && senha == "123"){
      //Redirecionamos para a dashboard
      this.fakeLoading();
    }
    else{
      //Mostramos a mensagem de erro
      this.erro();
    }
  }

  erro(){
    this._snackBar.open('Usuário e Senha Inseridos Inválidos!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redirecionamos para a dashboard
      this.loading = false;
    }, 1500);
  }


}
