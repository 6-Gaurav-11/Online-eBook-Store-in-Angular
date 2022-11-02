import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  users: any;
  userMessage = '';
  userForm!: FormGroup;
  message = '';
  errMessafe = '';

  constructor(private formBuilder: FormBuilder, private srv: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.srv.getUser(localStorage.getItem('username')!).subscribe(
      (response: any) => {
        this.users = response;
      })

    this.userForm = this.formBuilder.group({
      username: [null, Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  updateUserDetails() {
    const formValue = this.userForm.value;
    this.srv.updateUser(localStorage.getItem('username')!, formValue.fullName, formValue.email, formValue.password).subscribe(
      (response: any) => {
        this.message = "User updated successfully";
      })
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('active');
    alert("User updated successfully !");
    this.router.navigate([`/books`]);
  }

  loadUserData() {
    this.userForm.patchValue({    //values to few form controls
      username: this.users.username,
      fullName: this.users.fullName,
      email: this.users.email,
    });
  }

  deleteUserInfo() {
    if (confirm("This action will delete your account ! Do you want to proceed ?")) {
      this.srv.deleteUser(localStorage.getItem('username')!).subscribe(
        (response) => {

        }
      )
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('active');
      this.router.navigate([`/books`]);
    }
  }

}
