import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accessToken: string = "";
  loginForm!: FormGroup;
  message = '';

  constructor(private formBuilder: FormBuilder, private srv: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    const formValue = this.loginForm.value;
    this.srv.login(formValue.username, formValue.password).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('username', formValue.username);
        localStorage.setItem('active', "logged");
        this.router.navigate(['/books'])
      }, error: (err) => {
        this.message = "Invalid username or password !";
        alert("Invalid username or password !");
      }
    })
  }
}
