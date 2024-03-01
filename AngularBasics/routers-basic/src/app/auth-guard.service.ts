import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



// export const IsAuthGuard: CanActivateFn = (
//     route : ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot
//     ):Observable<boolean> | Promise<boolean> | boolean =>{
//         //inject the Services and Router into variables
//         const authService = inject(AuthService);
//         const router = inject(Router);
        
//         //call isAuthenticated() method from AuthService
//         authService.isAuthenticated().then(
//             (authenticated: boolean) =>{
//                 authService.loggedIn=true;
//                 console.log(authenticated);
//                 if(authenticated){
//                     return true;
//                 }else{
//                     router.navigate(['/']);
//                 }
//             }
//         );
//         return false;
//     };

    export const IsAuthGuard: CanActivateFn = (
        route : ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ) =>{
            //inject the Services and Router into variables
            const authService = inject(AuthService);
            const router = inject(Router);
            //console.log(authService.loggedIn);
            if(authService.loggedIn){
                return true;
            }else{
                router.navigate(['/']);
                return false;
            }
            
    }

    export const IsAuthChildGuard: CanActivateChildFn = (
        route : ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ) =>{
            // const authService = inject(AuthService);
            // const router = inject(Router);
            // console.log(authService.loggedIn);
            // if(authService.loggedIn){
            //     return true;
            // }else{
            //     router.navigate(['/']);
            //     return false;
            // }
            return IsAuthGuard(route,state);
            
    }

    

    