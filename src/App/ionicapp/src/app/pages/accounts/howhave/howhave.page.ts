import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from 'src/app/models/accounts.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { AuthService } from '../../auth/services/auth.service';
import { AccountsService } from '../services/accounts.service';
import { State } from '../store/accounts.reducer';

@Component({
  selector: 'app-howhave',
  templateUrl: './howhave.page.html',
  styleUrls: ['./howhave.page.scss'],
})
export class HowhavePage implements OnInit {
  state$:Observable<State>;
  userApp:ApplicationUser;
  balance:number;
  
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
}