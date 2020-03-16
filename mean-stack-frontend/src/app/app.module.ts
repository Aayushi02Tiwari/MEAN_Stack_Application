import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddUserComponent]
})
export class AppModule { }
