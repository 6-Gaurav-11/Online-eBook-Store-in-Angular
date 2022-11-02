import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitter } from 'src/app/emitters/authEmitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bookstore';

  active(): boolean {
    if (localStorage.getItem('active') == "logged")
      return true;
    else
      return false;
  }

  adminLog(): boolean {
    if (localStorage.getItem('username') == "admin")
      return true;
    else
      return false;
  }
  
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    Emitter.authEmitter.subscribe((res: boolean) => {
      this.isLoggedIn = res;
    })
  }

  doSearch(value: string) {
    this.router.navigate([`/search/${value}`]);
  }

  logout() {
    if(confirm("Do you want to logout ?")){
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('active');
      Emitter.authEmitter.emit(false);
      this.router.navigate([`/books`]);
    }
    }

}
