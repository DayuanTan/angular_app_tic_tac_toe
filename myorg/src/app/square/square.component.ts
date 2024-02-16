import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-square',
  standalone: true,
  imports: [CommonModule],
  template: `<p>square works!</p>`,
  styles: ``,
})
export class SquareComponent {}
