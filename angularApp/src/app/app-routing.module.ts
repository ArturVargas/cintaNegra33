import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  { path:"new/event", component: EventsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
