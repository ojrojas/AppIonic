import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from '../auth/store/auth.reducer';
import { AuthEffects } from '../auth/store/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    StoreModule.forFeature(fromReducer.authFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
