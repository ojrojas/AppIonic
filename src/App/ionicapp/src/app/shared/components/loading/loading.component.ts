import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})

export class LoadingComponent implements OnInit, OnChanges {
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
