import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-square',
  standalone: true,
  imports: [CommonModule],
  template: `<p>square works! A "Math.random()"" number: {{rando}}</p>`,
  styles: ``,
})
export class SquareComponent {

  rando : number  = 0;

  constructor() {
    setInterval(  () => this.rando = Math.random(), 500);
  } 
}