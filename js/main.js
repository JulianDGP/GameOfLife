// Importa las clases necesarias para el juego y la interfaz
import { GameOfLife } from './gameOfLife.js';
import { UI } from './ui.js';

// Cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Crea una nueva instancia del juego con 100 filas y 150 columnas
    const game = new GameOfLife(100, 150);
    // Crea una nueva instancia de la interfaz de usuario
    new UI(game, 'contenedor');
});