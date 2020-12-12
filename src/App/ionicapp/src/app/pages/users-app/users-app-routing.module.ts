import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersAppPage } from './users-app.page';

const routes: Routes = [
  {
    path: '',
    component: UsersAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersAppPageRoutingModule {}
