import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/accounts.model';
import { MoveBalance } from 'src/app/models/movebalance.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { AuthService } from '../../auth/services/auth.service';
import { AccountsService } from '../services/accounts.service';
import { State } from '../store/accounts.reducer';

@Component({
  selector: 'app-take',
  templateUrl: './take.page.html',
  styleUrls: ['./take.page.scss'],
})
export class TakePage implements OnInit {
  state$:Observable<State>;
  userApp:ApplicationUser;
  balance:number;
  moveBalance:MoveBalance = {} as MoveBalance;
  numberAccount:string;
  checkedNumberAccount:boolean = false;
  
  constructor(
    private service:AccountsService,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.authService.getUserApp().subscribe(userApp => this.userApp = userApp).unsubscribe();
    this.state$ = this.service.getState();
    this.service.loadAccounts(this.userApp.id);
  }

   sumBalance(accounts: Account[]): number {
    let balance = 0;
    accounts.forEach(element => {
      balance += element.balance
    });
    return balance;
  }
  
  selectAccount(event:any): void {
    let account:Account;
    this.state$.subscribe(val => {
      account = val.accounts.find(x=>x.id === event.detail.value);
    }).unsubscribe();
    this.moveBalance.entitySourceId = account.id;
  }

  searchNumberAccount():void {
    this.service.searchNumberAccount(this.numberAccount);
    this.service.checkedNumberAccount().subscribe(val => this.checkedNumberAccount = val);
  }

  getAccountDestinationId():void {
    debugger;
    let account:Account;
    this.state$.subscribe(val => {
      debugger;
      account = val.accounts.find(x=>x.numberAccount === this.numberAccount.toString());
    }).unsubscribe();
    this.moveBalance.entityDestinationId = account.id;
  }

  submit(): void{
    this.getAccountDestinationId();
    this.moveBalance.balance = this.balance;
    this.service.take(this.moveBalance);
  }
}