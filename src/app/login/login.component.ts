import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  singForm: FormGroup
  confirm: FormGroup

  status = false
  confirmCode = false


  constructor(
    private LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })

    this.singForm = this.formBuilder.group({
      name  : [''], 
      password: [''],
      email: [''],
    })

    this.confirm = this.formBuilder.group({
      userName: [''],
      confirmationCode: [''], 
    }) 

  }


  onSubmit() {
    this.LoginService.gerarAcesso(this.loginForm.value)
    .subscribe((data: any) => {
      sessionStorage.setItem('acesso', data.AccessToken)
      this.router.navigate(['/'])
    }
      )
  }

  onCrieate() {
    this.LoginService.gerarcadastro(this.singForm.value)
    .subscribe((data: any) => {
      sessionStorage.setItem('acesso', data.AccessToken)
      this.confirmCode = true
      }
      )
  }

  onConfirm() {
    this.LoginService.confirm(this.confirm.value)
    .subscribe((data: any) => {
      sessionStorage.setItem('acesso', data.AccessToken)
      this.status = false
      this.confirmCode = false
    }
      )
  }

  show(){
    this.status = true
  }

  noShow(){
    this.status = false
  }
}