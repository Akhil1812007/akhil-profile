import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about/about.module').then(m => m.AboutModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
