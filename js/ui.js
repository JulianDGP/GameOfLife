// Clase UI (Interfaz de Usuario) para manejar la parte visual del juego
export class UI {
    constructor(game, containerId) {
        this.game = game;
        this.container = document.getElementById(containerId); // Contenedor del tablero
        this.isPlaying = false; // Estado de la reproducción automática
        this.intervalId = null; // ID del intervalo de reproducción
        this.speed = 800; // Velocidad inicial (ms)
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

        // Evento para el botón de reproducción/pausa
        const playPauseButton = document.getElementById('playPauseButton');
        playPauseButton.addEventListener('click', () => {
            if (this.isPlaying) {
                this.pause(); // Pausar la reproducción automática
            } else {
                this.play(); // Iniciar la reproducción automática
            }
        });

        // Evento para los botones de velocidad
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (event) => {
                this.setSpeed(button.innerText);
                document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
        });

        // Mostrar los botones de velocidad al pasar el mouse sobre el botón principal
        document.querySelector('#contenedor-boton-flotante-playPause-velocidades').addEventListener('mouseover', () => {
            document.querySelectorAll('.btn').forEach(button => button.classList.add('animacionVer'));
        });

        // Ocultar los botones de velocidad cuando el mouse sale del contenedor
        document.querySelector('.contenedor-boton-flotante').addEventListener('mouseleave', () => {
            document.querySelectorAll('.btn').forEach(button => button.classList.remove('animacionVer'));
        });

        // Evento para el botón de limpiar
        const clearBoardButton = document.getElementById('clearBoardButton');
        clearBoardButton.addEventListener('click', () => {
            this.clearBoard(); // Llama a la función para limpiar el tablero
            this.updateBoard(); // Actualiza el tablero visualmente

            // Añadir animación de balanceo al ícono del cepillo
            const brushIcon = clearBoardButton.querySelector('i');
            brushIcon.style.animation = 'pendulum 1s';

            // Remover la animación después de 0.5 segundo
            setTimeout(() => {
                brushIcon.style.animation = '';
            }, 500); 
        });
    }

    // Método para limpiar el tablero
    clearBoard() {
        for (let y = 0; y < this.game.rows; y++) {
            for (let x = 0; x < this.game.cols; x++) {
                this.game.board[y][x] = false; // Pone todas las celdas como muertas
            }
        }
    }
    // Método para establecer la velocidad de reproducción
    setSpeed(speed) {
        switch (speed) {
            case 'x1':
                this.speed = 800;
                break;
            case 'x2':
                this.speed = 400;
                break;
            case 'x3':
                this.speed = 200;
                break;
            case 'x4':
                this.speed = 100;
                break;
        }

        if (this.isPlaying) {
            this.pause();
            this.play();
        }
    }

    // Método para establecer el botón de velocidad inicial
    setInitialSpeedButton() {
        document.getElementById('speed1x').classList.add('selected');
    }

    // Método para iniciar la reproducción automática
    play() {
        this.isPlaying = true;
        document.getElementById('playPauseButton').innerHTML = '<i class="fas fa-pause"></i>'; // Cambiar el icono a pausa
        this.intervalId = setInterval(() => {
            this.game.nextState();
            this.updateBoard();
        }, this.speed); // Ejecutar cada X ms 
    }

    // Método para pausar la reproducción automática
    pause() {
        this.isPlaying = false;
        document.getElementById('playPauseButton').innerHTML = '<i class="fas fa-play"></i>'; // Cambiar el icono a reproducción
        clearInterval(this.intervalId);
    }
}
