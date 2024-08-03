import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { RatingComponent } from './rating/rating.component';
import { MemesComponent } from './memes/memes.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreatestudentcardComponent } from './createstudentcard/createstudentcard.component';

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
    {path:'student-card',component:StudentCardComponent},
    {path:'create-studentcard',component:CreatestudentcardComponent},
    {path:'edit-vehicle/:id',component:CreatevehicleComponent},
    {path:'memes-one',component:MemesComponent},
    {path:'form',canDeactivate:[NotifyGuard] ,component:FormComponent},
    {path:'create-company',canDeactivate:[NotifyGuard],component:CreateCompanyComponent},
    {path:'parent',component:ParentComponent},
    {path:'calculator1',component:Calculator1Component  },
    {path:'rating',component:RatingComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {path:'user-one'},
    // {path:'payment', import payment module}
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    },
    {path:'sibling-communication',component:SiblingCommunicationComponent}
    ]},
  {path:'google',component:GoogleComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
