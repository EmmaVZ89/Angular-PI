import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css'],
})
export class MiJuegoComponent implements OnInit {
  numCols: number;
  numRows: number;
  generation: number;
  gameStatus: number; // -1 no empieza | 0 Activo | 1 Pausado

  board: Board;

  constructor() {
    this.numCols = 30;
    this.numRows = 30;
    this.generation = 0;
    this.gameStatus = 0;

    this.board = new Board(this.numCols, this.numRows);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.gameStatus === 0) {
        this.board.checkBoard();
        this.generation++;
      }
    }, 150);
  }

  onClick(pRow: number, pCol: number) {
    this.board.changeStatus(pRow, pCol);
  }

  onClickPausar() {
    this.gameStatus = this.gameStatus === 0 ? 1 : 0;
  }
}
