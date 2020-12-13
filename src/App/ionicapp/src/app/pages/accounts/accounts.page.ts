import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { AuthService } from '../auth/services/auth.service';
import { AccountsService } from './services/accounts.service';
import { State } from './store/accounts.reducer';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  state$:Observable<State>;
  userApp:ApplicationUser;
  constructor(
    private service:AccountsService,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.authService.getUserApp().subscribe(userApp => this.userApp = userApp).unsubscribe();
    this.state$ = this.service.getState();
    this.service.loadAccounts(this.userApp.id);
  }
}
