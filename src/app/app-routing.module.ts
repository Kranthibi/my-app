import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { GoogleComponent } from './google/google.component';
import { MyappsComponent } from './myapps/myapps.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { CartComponent } from './cart/cart.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmployeesdatabaseComponent } from './employeesdatabase/employeesdatabase.component';
import { MyntraComponent } from './myntra/myntra.component';
import { AuthenticationGuard } from './authentication.guard';
import { FormComponent } from './form/form.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent ,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
    {path:'myapps',component:MyappsComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'emp',component:EmployeesComponent},
    {path:'event',component:EventregistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'database',component:EmployeesdatabaseComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'vehicledetails/:id',component:VehicledetailsComponent},
    {path:'createvehicle',component:CreatevehicleComponent},
    {path:'form',canDeactivate:[NotifyGuard] ,component:FormComponent}
    ]},
  {path:'google',component:GoogleComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
