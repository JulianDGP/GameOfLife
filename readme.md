# 🌟 Conway's Game of Life 🌟

¡Bienvenido al juego de la vida de Conway! Un juego fascinante que simula la evolución de una colonia de células autonomas que basan su comportamiento en 4 simples reglas. 

Puedes acceder al simulador usando el siguiente enlace: https://juliandgp.github.io/GameOfLife/

## 🚀 Descripción del Proyecto

Este proyecto implementa el juego de la vida de Conway en 2D usando **HTML**, **CSS** y **JavaScript**. Observa cómo las células viven, mueren o se reproducen según 4 reglas simples, creando patrones complejos y hermosos.

<img src="./assets/readme%20assets/game-of-life-loop-cropped.gif" alt="Vista previa del Juego de la Vida" width="50%">


## 📜 Reglas del Juego de la Vida de Conway

El juego de la vida de Conway sigue cuatro reglas simples que determinan el destino de cada célula en la cuadrícula:

<img src="./assets/readme%20assets/Explicacion.png" alt="Vista previa del Juego de la Vida" width="25%">

1. **Supervivencia**:
   - 🟢 **Célula Viva**: Una célula viva con **2 o 3** vecinos vivos continúa viva en la siguiente generación.

2. **Muerte por Soledad**:
   - 🔴 **Célula Viva**: Una célula viva con **menos de 2** vecinos vivos muere por soledad en la siguiente generación.

3. **Muerte por Superpoblación**:
   - 🔴 **Célula Viva**: Una célula viva con **más de 3** vecinos vivos muere por superpoblación en la siguiente generación.

4. **Reproducción**:
   - 🟢 **Célula Muerta**: Una célula muerta con **exactamente 3** vecinos vivos se convierte en una célula viva en la siguiente generación.

Estas reglas se aplican a todas las células simultáneamente, lo que produce patrones de crecimiento y declive fascinantes y complejos.

<img src="./assets/readme%20assets/Ejemplos.png" alt="Vista previa del Juego de la Vida" width="40%">

## 🎲Patrones

Aqui se muestran algunos patrones de ejemplo.

<img src="./assets/readme%20assets/patrones.gif" alt="Vista previa del Juego de la Vida" width="50%">


## 🎮 Cómo Jugar

1. 🕹️ **Ve a la pagina web**: https://juliandgp.github.io/GameOfLife/
2. 🖱️ **Interfaz Interactiva**: Haz click izquierdo es las celdas de la cuadricula para activarlas o desactivarlas.
3. ▶️ **Iniciar/Pausar**: Controla la simulación con el botón de siguiente generacion.
4. ⏭️ **Avance Paso a Paso**: Avanza la simulación paso a paso para ver la evolución lentamente.
5. 🔄 **Reiniciar**: Restablece la simulación a su estado inicial.

## 🛠️ Instalación y Ejecución Local

Para clonar y ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/JulianDGP/GameOfLife.git
