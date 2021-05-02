import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PangolinListComponent } from './components/pangolin-list/pangolin-list.component';
import { PangolinDetailsComponent } from './components/pangolin-details/pangolin-details.component';
import { AddPangolinComponent} from './components/add-pangolin/add-pangolin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'pangolins', component: PangolinListComponent },
  { path: 'pangolins/:id', component: PangolinDetailsComponent },
  { path: 'info', component: AddPangolinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
