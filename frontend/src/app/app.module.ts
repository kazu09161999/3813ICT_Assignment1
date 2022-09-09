import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './Home/Home.component';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';


// const routes:Routes=[
//   {path:'login',component:LoginComponent},
//   {path:'profile',component:ProfileComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      ProfileComponent,
      HomeComponent,
      ChatComponent,
      GroupComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})
export class AppModule { }
