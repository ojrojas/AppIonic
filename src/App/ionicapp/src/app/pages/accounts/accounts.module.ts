import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountsPageRoutingModule } from './accounts-routing.module';
import { AccountsPage } from './accounts.page';
import { CreatePage } from './create/create.page';
import { DetailPage } from './detail/detail.page';
import { TakePage } from './take/take.page';
import { HowhavePage } from './howhave/howhave.page';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fromReducer from './store/accounts.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountsEffects } from './store/accounts.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AccountsPageRoutingModule,
    StoreModule.forFeature(fromReducer.accountsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([AccountsEffects])
  ],
  declarations: [
    AccountsPage,
    CreatePage,
    DetailPage,
    TakePage,
    HowhavePage
  ]
})
export class AccountsPageModule {}
