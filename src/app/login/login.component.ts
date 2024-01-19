import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HvcService } from '../services/hvc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]

  })

  constructor(private fb: FormBuilder, private hs: HvcService, private rout: Router) { }

  ngOnInit(): void {

  }

  login() {
    if (this.loginForm.valid) {
      var reqBody = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.hs.loginApi().subscribe({
        next: (result: any) => {
          // localstorage
          localStorage.setItem("currentUser", result[0].email)
          // localStorage.setItem("token", result.token)
          alert(`login sucess`)
          this.rout.navigateByUrl('dashboard')
          console.log(result);
        },
        error: (err: any) => {
          alert(err.error);
        }
      })
    }
    else {
      alert("please fill all datas")
    }

  }

}
