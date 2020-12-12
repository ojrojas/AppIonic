import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'weather',
        loadChildren: () => import('../weather/weather.module').then(w => w.WeatherPageModule)
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts/accounts.module').then(a => a.AccountsPageModule)
      },
      {
        path:'home',
        loadChildren:() => import('../home/home.module').then(h=>h.HomePageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
