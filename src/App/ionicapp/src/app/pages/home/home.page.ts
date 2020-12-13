import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.router.navigate(['/menu/accounts/create']);
  }

  take(): void {
    this.router.navigate(['/menu/accounts/take']);
  }

  howHave(): void {
    this.router.navigate(['/menu/accounts/howhave']);
  }

  generateQr(): void {
    this.router.navigate(['/menu/accounts/generateqr']);
  }
}
