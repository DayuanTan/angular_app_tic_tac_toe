import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NebularModule } from '../nebular/nebular.module';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';


@Component({
  selector: 'myorg-square',
  standalone: true,
  imports: [NebularModule, NbThemeModule, NbLayoutModule, NbButtonModule, CommonModule],
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
 
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']

})
export class SquareComponent {

  @Input() value!: 'X' | 'O';
}
