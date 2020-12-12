import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoutesApis } from './api.routes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(routesApis: RoutesApis, params: any): Observable<HttpResponse<T>> {
    return this.http.get<T>(
      `${environment.BaseUrlApi}${routesApis}/${params}`, { observe: 'response' });
  }

  getAll<T>(routesApis: RoutesApis): Observable<HttpResponse<T>> {
    return this.http.get<T>(
      `${environment.BaseUrlApi}${routesApis}`, { observe: 'response' });
  }

  post<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<T>> {
    return this.http.post<T>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  patch<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<T>> {
    return this.http.patch<T>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  put<T>(entity: T, routesApis: RoutesApis): Observable<HttpResponse<T>> {
    return this.http.put<T>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }

  delete<T>(routesApis: RoutesApis, params: any): Observable<HttpResponse<T>> {
    return this.http.delete<T>(
      `${environment.BaseUrlApi}${routesApis}/${params}`, { observe: 'response' });
  }

  postLogin(entity: any, routesApis: RoutesApis): Observable<HttpResponse<string>> {
    return this.http.post<string>(
      `${environment.BaseUrlApi}${routesApis}`, entity , { observe: 'response' });
  }


}
