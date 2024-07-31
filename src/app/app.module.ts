import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { VechileComponent } from './vechile/vechile.component';
import { FormComponent } from './form/form.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingComponent } from './rating/rating.component';
import { MemesComponent } from './memes/memes.component';
import { AboutUsModule } from './about-us/about-us.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    GoogleComponent,
    MyappsComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesComponent,
    EventregistrationComponent,
    CartComponent,
    FlipkartComponent,
    EmployeesdatabaseComponent,
    MyntraComponent,
    VechileComponent,
    FormComponent,
    VehicleComponent,
    VehicledetailsComponent,
    CreatevehicleComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Calculator1Component,
    OperationsComponent,
    RatingComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
