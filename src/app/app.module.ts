import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { NavbarModule } from './nav-bar/navbar/navbar.module';
import { HomeModule } from './modules/home/home/home.module';
import { AboutModule } from './modules/about/about/about.module';
import { SkillsModule } from './modules/skills/skills/skills.module';
import { EducationModule } from './modules/education/education/education.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavbarModule,
    EducationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
