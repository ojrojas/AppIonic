import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppState, getAppStateLoginData } from '../../app.reducer';

@Injectable({
    providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {

    constructor(
        private store: Store<AppState>
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token: string;
        this.store.pipe(select(getAppStateLoginData)).subscribe(result => {
            if (result !== undefined) {
                token = result.token;
            }
        }).unsubscribe();

        const auth = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(auth)
            .pipe(
                catchError((error) => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            window.location.href = environment.BaseUrlApp;
                        }
                    }
                    return throwError(error);
                })
            );
    }

}
