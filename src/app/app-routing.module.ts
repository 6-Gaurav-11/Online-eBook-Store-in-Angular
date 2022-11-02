import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './admin-component/add-book/add-book.component';
import { AddContentComponent } from './admin-component/add-content/add-content.component';
import { EditBookComponent } from './admin-component/edit-book/edit-book.component';
import { EditContentComponent } from './admin-component/edit-content/edit-content.component';
import { ManageBooksComponent } from './admin-component/manage-books/manage-books.component';
import { ManageContentComponent } from './admin-component/manage-content/manage-content.component';
import { ManageOrdersComponent } from './admin-component/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './admin-component/manage-users/manage-users.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookGenreComponent } from './components/book-genre/book-genre.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LibraryContentComponent } from './components/library-content/library-content.component';
import { LibraryComponent } from './components/library/library.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BookListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'genre/:id', component: BookGenreComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'user/update', component: UserUpdateComponent},
  {path: 'admin/books', component: ManageBooksComponent},
  {path: 'admin/books/add', component: AddBookComponent},
  {path: 'admin/books/edit/:bookid', component: EditBookComponent},
  {path: 'admin/orders', component: ManageOrdersComponent},
  {path: 'admin/users', component: ManageUsersComponent},
  {path: 'admin/content', component: ManageContentComponent},
  {path: 'admin/content/add', component: AddContentComponent},
  {path: 'admin/content/edit/:bookid', component: EditContentComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'contents/:bookid', component: LibraryContentComponent},
  {path: 'payment/:bookid', component: PaymentComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
