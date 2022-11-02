import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  adminLog(): boolean {
    if (localStorage.getItem('username') == "admin")
      return true;
    else
      return false;
  }

  constructor(private srv: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.srv.getUser(localStorage.getItem('username')!).subscribe(
      (response: any) => {
        this.users = response;
      })
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
