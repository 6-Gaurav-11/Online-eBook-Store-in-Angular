import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookContentService } from './services/book-content.service';
import { LibraryService } from './services/library.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { UsersService } from './services/users.service';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookGenreComponent } from './components/book-genre/book-genre.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LibraryComponent } from './components/library/library.component';
import { UserComponent } from './components/user/user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { EditBookComponent } from './admin-component/edit-book/edit-book.component';
import { AddBookComponent } from './admin-component/add-book/add-book.component';
import { AddContentComponent } from './admin-component/add-content/add-content.component';
import { ManageUsersComponent } from './admin-component/manage-users/manage-users.component';
import { ManageContentComponent } from './admin-component/manage-content/manage-content.component';
import { ManageBooksComponent } from './admin-component/manage-books/manage-books.component';
import { EditContentComponent } from './admin-component/edit-content/edit-content.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LibraryContentComponent } from './components/library-content/library-content.component';
import { ManageOrdersComponent } from './admin-component/manage-orders/manage-orders.component';
import { OrderService } from './services/order.service';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    BookGenreComponent,
    BookDetailsComponent,
    LibraryComponent,
    UserComponent,
    UserUpdateComponent,
    EditBookComponent,
    AddBookComponent,
    AddContentComponent,
    ManageUsersComponent,
    ManageContentComponent,
    ManageBooksComponent,
    EditContentComponent,
    PaymentComponent,
    LibraryContentComponent,
    ManageOrdersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BooksService,
    RegisterService,
    LoginService,
    RegisterService,
    UsersService,
    LibraryService,
    BookContentService,
    OrderService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
