import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './Home/Home.component';
import { ChatComponent } from './chat/chat.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'user', component: UserComponent },
  { path: 'group', component: GroupComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
