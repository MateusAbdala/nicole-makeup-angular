import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    protected router: Router,
    protected toastr: ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(route, state);
    const access = this.canAccess();

    if (!access) {
      this.toastr.error('Efetue o login para acessar', 'Acesso Negado!');
      this.router.navigate(['/cadastro/login']);
    }
    return access;
  }

  private canAccess(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    }

    // TODO: switch de permissões e rotas
    return !!localStorage.getItem('token');
  }
}
