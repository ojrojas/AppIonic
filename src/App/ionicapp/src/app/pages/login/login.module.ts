import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';
import * as fromReducer from './store/login.reducer';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LoginPageRoutingModule,
    StoreModule.forFeature(fromReducer.loginFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
