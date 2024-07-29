import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.createform.dirty){
        return confirm("Data not saved.");
      }
      else{
        return true;

      }
    
  }
  
}
