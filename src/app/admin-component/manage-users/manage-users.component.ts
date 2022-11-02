import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: any;
  userMessage = '';
  constructor(private srv: UsersService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.srv.getAllUsers().subscribe(
      (response: any) => {
        this.users = response;
      })
  }

  deleteUser(username: string) {
    if (confirm("This action will delete the user ! Do you want to proceed ?")) {
      this.srv.deleteUser(username).subscribe(
        () => {
          this.ngOnInit();
        })
      }
      // window.location.reload();
    }

}
