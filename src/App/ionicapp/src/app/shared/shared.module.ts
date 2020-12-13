import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InjectComponentDirective } from './directives/inject-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingtwoComponent } from './components/loadingtwo/loadingtwo.component';


@NgModule({
  declarations: [
    LoadingComponent,
    LoadingtwoComponent,
    InjectComponentDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxSpinnerModule,
  ],
  exports: [
    IonicModule,
    LoadingComponent,
    LoadingtwoComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class SharedModule { }
