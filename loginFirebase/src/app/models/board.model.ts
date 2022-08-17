export class Board {
  board: number[][];

  constructor(pWidth: number, pHeight: number) {
    this.board = [];
    for (let i = 0; i < pWidth; i++) {
      this.board[i] = [];
      for (let j = 0; j < pHeight; j++) {
        // this.board[i][j] = 0;
        this.board[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }

  getStatus(coordX: number, coordY: number): number {
    return this.board[coordX][coordY];
  }

  changeStatus(coordX: number, coordY: number) {
    if (this.board[coordX][coordY] === 0) {
      this.board[coordX][coordY] = 1;
    } else {
      this.board[coordX][coordY] = 0;
    }
  }

  checkBoard() {
    const tmpBoard: any[] = [];
    for (let i = 0; i < this.board.length; i++) {
      tmpBoard[i] = [];
      for (let j = 0; j < this.board[i].length; j++) {
        tmpBoard[i].push(this.checkRules(i, j));
      }
    }
    this.board = [...tmpBoard];
  }

  countActives(): number {
    let actives: number = 0;
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 1) {
          actives++;
        }
      }
    }
    return actives;
  }

  checkRules(coordX: number, coordY: number): number {
    const width = this.board.length;
    const height = this.board[0].length;

    // reglas para no salirse del tablero
    const xMenos = coordX - 1 < 0 ? width - 1 : coordX - 1;
    const xMas = coordX + 1 >= width ? 0 : coordX + 1;
    const yMenos = coordY - 1 < 0 ? height - 1 : coordY - 1;
    const yMas = coordY + 1 >= height ? 0 : coordY + 1;

    // Ubicacion actual
    const currentStatus = this.board[coordX][coordY];

    // Suma de vecinos
    const vecinos =
      this.board[xMenos][yMenos] +
      this.board[xMenos][coordY] +
      this.board[xMenos][yMas] +
      this.board[coordX][yMenos] +
      this.board[coordX][yMas] +
      this.board[xMas][yMenos] +
      this.board[xMas][coordY] +
      this.board[xMas][yMas];

    if (currentStatus === 1 && (vecinos === 2 || vecinos === 3)) {
      return 1;
    }

    if (currentStatus === 0 && vecinos === 3) {
      return 1;
    }

    return 0;
  }
}
