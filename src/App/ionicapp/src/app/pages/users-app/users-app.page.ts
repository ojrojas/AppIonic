import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/userapp.model';
import { UsersAppService } from './services/users-app.service';
import { State } from './store/users-app.reducer';

@Component({
  selector: 'app-users-app',
  templateUrl: './users-app.page.html',
  styleUrls: ['./users-app.page.scss'],
})
export class UsersAppPage implements OnInit {
  state$: Observable<State>;
  form: FormGroup;

  constructor(
    private service: UsersAppService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.state$ = this.service.getState();
    this.service.loadTypeIdentifications();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      userName: new FormControl({ value: null, disabled: false }, Validators.required),
      password: new FormControl({ value: null, disabled: false }, Validators.required),
      email: new FormControl({ value: null, disabled: false }, Validators.required),
      name: new FormControl({ value: null, disabled: false }, Validators.required),
      lastName: new FormControl({ value: null, disabled: false }, Validators.required),
      middleName: new FormControl({ value: null, disabled: false }),
      typeIdenticationId: new FormControl({ value: null, disabled: false }, Validators.required),
      identification: new FormControl({ value: null, disabled: false }, Validators.required),
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.service.create(this.sendCreateUser());
    } else {
      this.markValidityForm();
    }
  }

  sendCreateUser(): ApplicationUser {
    return {
      userName: this.form.value.userName,
      password: this.form.value.password,
      email: this.form.value.email,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      middleName: this.form.value.middleName,
      typeIdenticationId: this.form.value.typeIdenticationId,
      identification: this.form.value.identification,
      createdOn: new Date()
    } as ApplicationUser;
  }


  markValidityForm(): void {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].markAsTouched();
    }
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

}
