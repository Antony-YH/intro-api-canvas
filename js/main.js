/*****************************************************************************************
 * Nombre del programa: Dibujo de Rectángulo en Canvas (Responsive)
 * Autor: Antonio Yañez
 * Fecha: [Colocar fecha]
 * Descripción:
 * Este programa utiliza la API Canvas de HTML5 junto con JavaScript
 * para dibujar un rectángulo sólido dentro de un lienzo.
 * 
 * En esta versión, el tamaño del canvas se ajusta dinámicamente
 * al 50% del ancho y 50% del alto de la ventana del navegador.
 *
 *****************************************************************************************/


// ===============================
// 1. OBTENER EL ELEMENTO CANVAS
// ===============================

var canvas = document.getElementById("lienzo");


// ======================================
// 2. AJUSTAR EL TAMAÑO DEL CANVAS
// ======================================

// window.innerWidth  → Ancho total visible de la ventana del navegador
// window.innerHeight → Alto total visible de la ventana del navegador
//
// Multiplicamos por 0.5 para obtener el 50%.

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;


// ======================================
// 3. OBTENER EL CONTEXTO DE DIBUJO 2D
// ======================================

var ctx = canvas.getContext("2d");


// ======================================
// 4. DEFINIR EL COLOR DE RELLENO
// ======================================

ctx.fillStyle = "#7d24d0";  // Color índigo


// ======================================
// 5. DIBUJAR EL RECTÁNGULO
// ======================================

// Ahora el rectángulo ocupará todo el canvas
// usando las nuevas dimensiones dinámicas.

ctx.fillRect(0, 0, 200, 200);

