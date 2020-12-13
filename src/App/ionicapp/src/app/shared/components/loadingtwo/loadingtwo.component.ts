import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loadingtwo',
  templateUrl: './loadingtwo.component.html',
  styleUrls: ['./loadingtwo.component.scss'],
})
export class LoadingtwoComponent implements OnInit {
  @Input() isLoading: boolean;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading.currentValue === true) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  ngOnInit(): void {

  }

}