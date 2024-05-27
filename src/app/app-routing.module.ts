import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about/about.module').then(m => m.AboutModule) },
  { path: 'skills', loadChildren: () => import('./modules/skills/skills/skills.module').then(m => m.SkillsModule) },
  { path: 'education', loadChildren: () => import('./modules/education/education/education.module').then(m => m.EducationModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact/contact.module').then(m => m.ContactModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
