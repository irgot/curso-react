import { SystemComponent } from './components/views/system/system.component';
import { ScheduleComponent } from './components/views/schedule/schedule.component';
import { ReportsComponent } from './components/views/reports/reports.component';
import { RegisterComponent } from './components/views/register/register.component';
import { LogisticsManagementComponent } from './components/views/logistics-management/logistics-management.component';
import { IndicatorsComponent } from './components/views/indicators/indicators.component';
import { ExposureManagementComponent } from './components/views/exposure-management/exposure-management.component';
import { AlgorithmsComponent } from './components/views/algorithms/algorithms.component';
import { PurchasingManagementComponent } from './components/views/purchasing-management/purchasing-management.component';
import { Error404Component } from './components/template/error404/error404.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'algorithms',
        component: AlgorithmsComponent,
    },
    {
        path: 'exposure-management',
        component: ExposureManagementComponent,
    },
    {
        path: 'indicators',
        component: IndicatorsComponent,
    },
    {
        path: 'logistics-management',
        component: LogisticsManagementComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'reports',
        component: ReportsComponent,
    },
    {
        path: 'schedule',
        component: ScheduleComponent,
    },
    {
        path: 'system',
        component: SystemComponent,
    },
    {
        path: 'purchasing-management',
        component: PurchasingManagementComponent,
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
