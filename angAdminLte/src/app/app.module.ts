import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { HomeComponent } from './components/views/home/home.component';
import { RightSidebarComponent } from './components/template/right-sidebar/right-sidebar.component';
import { Error404Component } from './components/template/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    RightSidebarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
