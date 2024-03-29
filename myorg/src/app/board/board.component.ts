import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

import { NebularModule } from '../nebular/nebular.module';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';


@Component({
  selector: 'myorg-board',
  standalone: true,
  imports: [NebularModule, NbThemeModule, NbLayoutModule, NbButtonModule , SquareComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit 
{
  squares!: any[]; // "squares: any[]" gaves me error so I had to add "!". The definite assignment assertion operator (!) tells TypeScript that the variable will be assigned for sure, and it's a way to bypass the strict initialization checks. 
  xIsNext!: boolean;
  winner!: string | null; // X or O

  constructor() {}

  ngOnInit() 
  { // ng life cycle hook
    this.newGame(); // setup the initial values when starting a brand new game
  }

  newGame() 
  {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player()
  {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number)
  {
    if (!this.squares[idx]) 
    {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner()
  {
    const lines = // 8 possible situations to win
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0 ; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      )
      {
        return this.squares[a];
      }
    }
    return null;
  }

}
