import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { State } from './store/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  state$:Observable<State>;
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
    private service:LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    this.state$ = this.service.getState();
    this.form = this.fb.group({
      userName: new FormControl({value:null, disabled:false }, Validators.required),
      password: new FormControl({value:null, disabled:false }, Validators.required)
    })
  }

  submit():void {
    this.service.login(this.form.value);
    this.form.reset();
  }

  register(): void {
    this.router.navigate(['/users-app']);
  }

  markValidityForm(): void {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].markAsTouched();
    }
  }

}
