// Clase que representa el juego de la vida
export class GameOfLife {
    constructor(rows, cols) {
        this.rows = rows;  // Número de filas del tablero
        this.cols = cols; // Número de columnas del tablero
        this.board = this.createBoard(); // Crea el tablero inicial
    }

    // Método para crear un tablero vacío
    createBoard() {
        const board = [];
        for (let y = 0; y < this.rows; y++) {
            const row = [];
            for (let x = 0; x < this.cols; x++) {
                row.push(false); // Todas las celdas empiezan muertas (false)
            }
            board.push(row);
        }
        return board;
    }
    // Método para cambiar el estado de una celda
    toggleCell(x, y) {
        this.board[y][x] = !this.board[y][x]; // Cambia el estado de la celda (viva/muerta)
    }
    // Método para copiar el estado actual del tablero
    copyBoard() {
        return this.board.map(row => [...row]); // Crea una copia del tablero
    }

    // Método para contar las celdas vecinas vivas
    countLiveNeighbors(x, y) {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],         [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
        let liveNeighbors = 0;
        directions.forEach(([dx, dy]) => {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < this.cols && ny < this.rows) {
                if (this.board[ny][nx]) {
                    liveNeighbors++;
                }
            }
        });
        return liveNeighbors;
    }

    // Método para calcular el siguiente estado del juego
    nextState() {
        const newBoard = this.copyBoard(); // Copia el tablero actual
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const liveNeighbors = this.countLiveNeighbors(x, y); // Cuenta las vecinas vivas
                if (this.board[y][x]) {
                    newBoard[y][x] = liveNeighbors === 2 || liveNeighbors === 3; // Regla para celdas vivas
                } else {
                    newBoard[y][x] = liveNeighbors === 3; // Regla para celdas muertas
                }
            }
        }
        this.board = newBoard; // Actualiza el tablero con el nuevo estado
    }
}
