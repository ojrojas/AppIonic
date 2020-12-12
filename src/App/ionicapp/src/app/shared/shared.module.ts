import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InjectComponentDirective } from './directives/inject-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LoadingComponent,
    InjectComponentDirective],
  imports: [
    CommonModule,
    IonicModule,
    NgxSpinnerModule,
  ],
  exports: [
    IonicModule,
    LoadingComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  
  ]
})
export class SharedModule { }
