import { Injectable } from '@angular/core';
import { PagesListDataApp } from 'src/app/constants/page.data';
import { PageModel } from 'src/app/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  listPages(): PageModel[] {
    return PagesListDataApp;
  }
}
