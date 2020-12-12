import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getAppStateLoginData } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogged = false;
    this.store.pipe(select(getAppStateLoginData)).subscribe(result => {
      isLogged = result.isLogged;
    }).unsubscribe();
    if (isLogged) { return true; }
    else {
    this.router.navigate(['/login']);
    }
  }
}
