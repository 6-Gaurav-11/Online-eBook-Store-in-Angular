import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  message = '';
  errMessage = '';

  constructor(private formBuilder: FormBuilder, private srv: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  register() {
    const formValue = this.registerForm.value;
    this.srv.register(formValue.username, formValue.fullName, formValue.email, formValue.password).subscribe({
      next: (res: any) => {
        console.log(res);
        this.message = "User registered successfully";
      }, error: (err)=> {
        this.errMessage = "Username has already been taken";
        alert("Username has already been taken !");
      }
    })
  }

}
