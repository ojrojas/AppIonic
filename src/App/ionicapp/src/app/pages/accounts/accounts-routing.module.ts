import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsPage } from './accounts.page';
import { CreatePage } from './create/create.page';
import { DetailPage } from './detail/detail.page';
import { GenerateqrPage } from './generateqr/generateqr.page';
import { HowhavePage } from './howhave/howhave.page';
import { TakePage } from './take/take.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsPage
  },
  {
    path: 'create',
    component: CreatePage
  },
  {
    path: 'take',
    component: TakePage
  },
  {
    path: 'detail:/id',
    component: DetailPage
  },
  {
    path: 'howhave',
    component:HowhavePage
  },
  {
    path: 'generateqr',
    component: GenerateqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsPageRoutingModule { }
