import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactiveGuard{
  canDeactivate: ()=>Observable<boolean> | Promise<boolean> | boolean;
}
export const formDeactiveGuard: CanDeactivateFn<CanComponentDeactiveGuard> = (component,route, state, nextState) => {
  
  return component.canDeactivate();
};




// export const IsAuthDeactivateGuard: CanDeactivateFn<CanComponentDeactiveGuard> =
// (component: , currentRoute, currentState, nextState) =>{

//     canDeac
//     return false;
// }