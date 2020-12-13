import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/accounts.model';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { AuthService } from '../../auth/services/auth.service';
import { AccountsService } from '../services/accounts.service';
import { State } from '../store/accounts.reducer';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  state$: Observable<State>;
  userApp: ApplicationUser;
  form: FormGroup;

  constructor(
    private service: AccountsService,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUserApp().subscribe(userApp => this.userApp = userApp).unsubscribe();
    this.state$ = this.service.getState();
    this.service.loadTypeAccounts();
    this.form = this.fb.group({
      description: new FormControl({ value: null, disabled: false }, Validators.required),
      typeAccountId: new FormControl({ value: null, disabled: false }, Validators.required),
    });
  }

  submit(): void {
    if(this.form.value){
      this.service.create(this.sendCreateAccount());
    }
    else{
      this.markValidityForm();
    }
  }

  sendCreateAccount():Account {
    debugger;
    return {
      applicationUserId: this.userApp.id,
      description:this.form.value.description,
      typeAccountId: this.form.value.typeAccountId,
      createdOn: new Date(),
      createdBy: this.userApp.id,
      state: true
    }as Account;
  }

  markValidityForm(): void {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].markAsTouched();
    }
  }

}
