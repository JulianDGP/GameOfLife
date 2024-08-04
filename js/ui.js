// Clase UI (Interfaz de Usuario) para manejar la parte visual del juego
export class UI {
    constructor(game, containerId) {
        this.game = game;
        this.container = document.getElementById(containerId); // Contenedor del tablero
        this.initBoard(); // Inicializar el tablero
        this.addEventListeners();// Agregar los eventos
    }

    // Método para inicializar el tablero
    initBoard() {
        let html = "<table cellpadding=0 cellspacing=0 id='board'>";
        for (let y = 0; y < this.game.rows; y++) {
            html += "<tr>";
            for (let x = 0; x < this.game.cols; x++) {
                html += `<td id="cell-${x}-${y}"></td>`;
            }
            html += "</tr>";
        }
        html += "</table>";
        this.container.innerHTML = html; // Inserta el tablero en el contenedor
    }

    // Método para actualizar el estado visual del tablero
    updateBoard() {
        for (let y = 0; y < this.game.rows; y++) {
            for (let x = 0; x < this.game.cols; x++) {
                const cell = document.getElementById(`cell-${x}-${y}`);
                cell.style.background = this.game.board[y][x] ? 'black' : ''; // Celda viva es negra, muerta es blanca
            }
        }
    }

    // Método para agregar eventos a la interfaz
    addEventListeners() {
        this.container.addEventListener('click', (event) => {
            if (event.target.tagName === 'TD') { // Si el click es en una celda
                const [x, y] = event.target.id.split('-').slice(1).map(Number);
                this.game.toggleCell(x, y); // Cambia el estado de la celda
                this.updateBoard(); // Actualiza el tablero visual
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') { // Si la tecla presionada es la flecha derecha
                this.game.nextState(); // Calcula el siguiente estado del juego
                this.updateBoard(); // Actualiza el tablero visual
            }
        });

        // Evento para el botón flotante
        const nextGenerationButton = document.getElementById('nextGenerationButton');
        nextGenerationButton.addEventListener('click', () => {
            this.game.nextState(); // Calcula el siguiente estado del juego
            this.updateBoard(); // Actualiza el tablero visual
        });
    }
}
