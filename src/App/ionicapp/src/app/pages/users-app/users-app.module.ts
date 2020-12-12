import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersAppPageRoutingModule } from './users-app-routing.module';
import { UsersAppPage } from './users-app.page';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fromReducer from './store/users-app.reducer';
import { UsersAppEffects } from './store/users-app.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UsersAppPageRoutingModule,
    StoreModule.forFeature(fromReducer.usersAppFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([UsersAppEffects])
  ],
  declarations: [UsersAppPage]
})
export class UsersAppPageModule {}
