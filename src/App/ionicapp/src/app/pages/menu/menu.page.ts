import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PageModel } from 'src/app/models/page.model';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages: PageModel[] = [];
  selectedPath = '';

  constructor(
    private router: Router,
    private menu: MenuController,
    private service: MenuService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    });
  }

  ngOnInit() {
    this.pages = this.service.listPages();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
