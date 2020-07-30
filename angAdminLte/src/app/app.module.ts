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
import { PurchasingManagementComponent } from './components/views/purchasing-management/purchasing-management.component';
import { LogisticsManagementComponent } from './components/views/logistics-management/logistics-management.component';
import { ExposureManagementComponent } from './components/views/exposure-management/exposure-management.component';
import { ReportsComponent } from './components/views/reports/reports.component';
import { IndicatorsComponent } from './components/views/indicators/indicators.component';
import { ScheduleComponent } from './components/views/schedule/schedule.component';
import { RegisterComponent } from './components/views/register/register.component';
import { AlgorithmsComponent } from './components/views/algorithms/algorithms.component';
import { SystemComponent } from './components/views/system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    RightSidebarComponent,
    Error404Component,
    PurchasingManagementComponent,
    LogisticsManagementComponent,
    ExposureManagementComponent,
    ReportsComponent,
    IndicatorsComponent,
    ScheduleComponent,
    RegisterComponent,
    AlgorithmsComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
