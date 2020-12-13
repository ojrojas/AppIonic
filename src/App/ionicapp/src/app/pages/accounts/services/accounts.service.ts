import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../store/accounts.reducer';
import { getCheckedNumberAccount, getStateAccounts } from '../store/accounts.selectors';
import * as fromActions from '../store/accounts.actions';
import { Account } from 'src/app/models/accounts.model';
import { MoveBalance } from 'src/app/models/movebalance.model';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private store:Store<State>,
    private toastController:ToastController
  ) { }

  getState():Observable<State> {
    return this.store.pipe(select(getStateAccounts));
  }

  create(account:Account):void {
    this.store.dispatch(fromActions.create({account}));
  }

  loadAccounts(applicationUserId):void {
    this.store.dispatch(fromActions.loadAccountss({applicationUserId}))
  }

  loadTypeAccounts():void {
    this.store.dispatch(fromActions.loadTypeAccounts());
  }

  take(takeHave: MoveBalance): void {
    this.store.dispatch(fromActions.takeHave({takeHave}));
  }

  searchNumberAccount(numberAccount): void {
    this.store.dispatch(fromActions.searchNumberAccount({numberAccount}));
  }

  checkedNumberAccount():Observable<boolean> {
    return this.store.pipe(select(getCheckedNumberAccount));
  }

  setCheckedNumberAccount(checkedAccount: boolean): void{
    this.store.dispatch(fromActions.numberAccountChecked({checkedAccount}))
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
