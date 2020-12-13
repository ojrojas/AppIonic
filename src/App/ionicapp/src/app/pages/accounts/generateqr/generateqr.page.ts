import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/accounts.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { AuthService } from '../../auth/services/auth.service';
import { AccountsService } from '../services/accounts.service';
import { State } from '../store/accounts.reducer';

@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.page.html',
  styleUrls: ['./generateqr.page.scss'],
})
export class GenerateqrPage implements OnInit {
  state$:Observable<State>;
  userApp:ApplicationUser;
  balance:number;
  accountName:string;
  
  
  public qrdata: string = null;
  public elementType: "img" | "url" | "canvas" | "svg" = null;
  public level: "L" | "M" | "Q" | "H";
  public scale: number;
  public width: number;


  constructor(
    private service:AccountsService,
    private authService:AuthService
    ) { 
      this.elementType = "img";
      this.level = "M";
      this.qrdata = null;
      this.scale = 1;
      this.width = 256;
    }

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

    this.qrdata = account.id;
    this.accountName = account.description;
  }
}