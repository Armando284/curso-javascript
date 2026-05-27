# Semana 1: Fundamentos de JavaScript

## Día 1: Variables, Tipos de Datos y Console

### Objetivos del día
- Entender qué son las variables y cómo declararlas correctamente
- Conocer los tipos de datos básicos
- Aprender las diferencias entre `const`, `let` y `var`
- Usar `console.log()` para ver resultados

---

### 1. ¿Qué es una variable?

Una variable es un **contenedor** que nos permite guardar información (datos) para usarla más tarde en nuestro programa.

---

### 2. Formas de declarar variables en JavaScript

```JavaScript
// 1. const → Recomendado (valor constante)
const nombre = "Pedro";
const edad = 23;

// 2. let → Cuando el valor puede cambiar
let ciudad = "La Habana";
let puntaje = 85;
ciudad = "Holguín";

// 3. var → Forma antigua (NO recomendada)
var pais = "Cuba";
```

¿Por qué usar `const` siempre que sea posible?

- Hace el código más seguro y fácil de entender.
- Evita errores accidentales al cambiar valores que no deberían cambiar.

Regla de oro actual:

- Usa `const` por defecto.
- Solo usa `let` cuando sepas que el valor de la variable va a cambiar.
- Evita `var` en código moderno.

### 3. Diferencias importantes entre `var`, `let` y `const`

|Palabra|¿Se puede reasignar?|¿Scope?|Recomendado|
|-------|--------------------|-------|-----------|
|const|No|Bloque {}|Sí (usar siempre que puedas)|
|let|Sí|Bloque {}|Sí (cuando necesites cambiar valor)|
|var|Sí|Función o global|No recomendado|

### 4. ¿Por qué `var` ya no es buena idea?

El principal problema de var es el hoisting (elevación) y su scope de función, lo que puede generar comportamientos inesperados y bugs difíciles de encontrar.

Ejemplo práctico del problema con `var`:
```JavaScript
// Ejemplo con var (problema)
for (var i = 0; i < 5; i++) {
  console.log("Dentro del loop:", i);
}

console.log("Después del loop:", i); // ← Esto imprime 5 !!
// La variable i sigue existiendo fuera del bucle
```

Versión correcta con `let`:
```JavaScript
for (let i = 0; i < 5; i++) {
  console.log("Dentro del loop:", i);
}

console.log("Después del loop:", i); // ← ReferenceError: i is not defined
// Mucho más seguro
```
Otro ejemplo común de error con `var`:
```JavaScript
var mensaje = "Hola";

function saludar() {
  var mensaje = "Adiós";   // Esta variable afecta a todo el scope de la función
  console.log(mensaje);
}

saludar();
console.log(mensaje); // ← Muestra "Adiós" (¡error inesperado!)
```

Con `let` y `const` este problema se evita gracias al scope de bloque.

### 5. Tipos de Datos Principales

```JavaScript
// String
const nombre = "Ana";
const mensaje = 'Hola mundo';

// Number
const edad = 25;
const precio = 12.5;

// Boolean
const esEstudiante = true;
const estaAprobado = false;

// Undefined
let apellido;                    // No tiene valor asignado

// Null
const telefono = null;           // Valor vacío intencional
```

### 6. Console.log() - Nuestra herramienta principal

```JavaScript
console.log("Hola mundo");
console.log("Nombre:", nombre);
console.log("Edad:", edad, "- Estudiante:", esEstudiante);
```

Ejemplo completo del Día 1

```JavaScript
const nombre = "María";
const edad = 21;
const esEstudiante = true;

let ciudad = "Santiago de Cuba";

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?", esEstudiante);
console.log("Ciudad actual:", ciudad);

// Cambiando valor con let
ciudad = "La Habana";
console.log("Nueva ciudad:", ciudad);
```
¡Excelente trabajo!
Has completado la lección teórica del Día 1.

Siguiente paso: Completa los ejercicios del Día 1 en el archivo dia-1-ejercicios.md

