import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { State } from '../store/users-app.reducer';
import { getApplicationUsers, getStateUserApps } from '../store/users-app.selectors';
import * as fromActions from '../store/users-app.actions';
import { EnumsModeForms } from 'src/app/models/enums.model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsersAppService {

  constructor(
    private store: Store<State>,
    private toastController:ToastController
  ) { }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateUserApps));
  }

  loadApplicationUsers(): void {
    this.store.dispatch(fromActions.loadUsersApps());
  }

  loadTypeIdentifications(): void {
    this.store.dispatch(fromActions.loadTypeIdentification());
  }

  getLoadApplicationUsers(): Observable<ApplicationUser[]> {
    return this.store.pipe(select(getApplicationUsers));
  }

  create(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.create({ applicationUser }));
  }

  edit(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.edit({ applicationUser }));
  }

  delete(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.deleteUser({ applicationUser }));
  }
 
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
