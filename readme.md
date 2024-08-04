# 🌟 Conway's Game of Life 🌟

¡Bienvenido al juego de la vida de Conway! Un juego fascinante que simula la evolución de una colonia de células.

## 🚀 Descripción del Proyecto

Este proyecto implementa el juego de la vida de Conway usando **HTML**, **CSS** y **JavaScript**. Observa cómo las células viven, mueren o se reproducen según reglas simples, creando patrones complejos y hermosos.

## 🎮 Cómo Jugar

1. 🖱️ **Interfaz Interactiva**: Haz click izquierdo es las celdas para activarlas o desactivarlas.
2. ▶️ **Iniciar/Pausar**: Controla la simulación con el botón de siguiente generacion.
3. ⏭️ **Avance Paso a Paso**: Avanza la simulación paso a paso para ver la evolución lentamente.
4. 🔄 **Reiniciar**: Restablece la simulación a su estado inicial.

## 📜 Reglas del Juego de la Vida de Conway

El juego de la vida de Conway sigue cuatro reglas simples que determinan el destino de cada célula en la cuadrícula:

1. **Supervivencia**:
   - 🟢 **Célula Viva**: Una célula viva con **2 o 3** vecinos vivos continúa viva en la siguiente generación.

2. **Muerte por Soledad**:
   - 🔴 **Célula Viva**: Una célula viva con **menos de 2** vecinos vivos muere por soledad en la siguiente generación.

3. **Muerte por Superpoblación**:
   - 🔴 **Célula Viva**: Una célula viva con **más de 3** vecinos vivos muere por superpoblación en la siguiente generación.

4. **Reproducción**:
   - 🟢 **Célula Muerta**: Una célula muerta con **exactamente 3** vecinos vivos se convierte en una célula viva en la siguiente generación.

Estas reglas se aplican a todas las células simultáneamente, lo que produce patrones de crecimiento y declive fascinantes y complejos.

## 🛠️ Instalación y Ejecución Local

Para clonar y ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/conways-game-of-life.git
