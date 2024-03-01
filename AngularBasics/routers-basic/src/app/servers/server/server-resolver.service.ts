import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";
import { Observable } from "rxjs";

interface Server {
    id: number;
    name: string;
    status: string;
}
//using resolveGuardFn for resolve with type Interface Server
export const resolveGuard=(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server =>{
    //inject service 
    const sererService = inject(ServersService);
    const id = +route.params['id']
    return sererService.getServer(id);
}