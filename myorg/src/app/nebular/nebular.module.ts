import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    // NbEvaIconsModule,
    NbButtonModule,
  ],

})
export class NebularModule { }