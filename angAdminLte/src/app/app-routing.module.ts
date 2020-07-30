import { Error404Component } from './components/template/error404/error404.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"home",
  component:HomeComponent
},{
    path:"**",
    component:Error404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
