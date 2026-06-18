# Semana 1: Fundamentos de JavaScript

## Día 4: Funciones - La base de la reutilización de código

---

## 🎯 Objetivos del día

- Entender qué es una función y por qué son fundamentales
- Dominar la sintaxis de funciones (declaración, expresión, arrow)
- Aprender parámetros, argumentos y valor de retorno
- Entender el scope (alcance) de variables
- Empezar a escribir código modular y reutilizable

---

## 🧠 Idea clave del día

> Una función es como una máquina: le das ciertos ingredientes (parámetros), hace algo y devuelve un resultado.

En vez de repetir código, lo encapsulas en una función.

---

## 1. Declaración de funciones

```javascript
// Forma tradicional (function declaration)
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

// Llamada a la función
saludar("Armando"); // Hola, Armando!
```

---

### 2. Parámetros y argumentos

```javascript
function sumar(a, b) {
  return a + b;  // return devuelve un valor
}

console.log(sumar(5, 3)); // 8
```

**Reglas importantes:**
- Los parámetros son variables locales dentro de la función.
- Puedes tener 0, 1 o muchos parámetros.
- Si no pasas un parámetro, vale `undefined`.

---

### 3. Expresiones de función y Arrow Functions (Moderno)

```javascript
// Function expression
const multiplicar = function(a, b) {
  return a * b;
};

// Arrow function (la más usada hoy)
const restar = (a, b) => a - b;

// Con más de una línea
const calcularEdad = (anioNacimiento) => {
  const edad = 2026 - anioNacimiento;
  return edad;
};
```

**Cuándo usar cada una:**
- `function` tradicional → cuando necesitas `this` o hoisting
- Arrow `=>` → la más limpia y recomendada en código moderno

---

### 4. Scope (Alcance) de variables - Muy importante

```javascript
const global = "Soy global";

function ejemplo() {
  const local = "Soy local";   // Solo existe dentro de la función
  console.log(global);         // ✅ Accesible
  // console.log(local);       // solo aquí
}

ejemplo();
// console.log(local); // ReferenceError
```

**Regla de oro:**
- `const` y `let` tienen **scope de bloque** `{}` y de función.
- Evita contaminar el scope global.

---

### 5. Ejemplo completo del Día 4

```javascript
// Función para calcular nota final
function calcularNotaFinal(nota1, nota2, nota3) {
  const promedio = (nota1 + nota2 + nota3) / 3;
  
  if (promedio >= 90) return "Excelente";
  if (promedio >= 80) return "Muy bueno";
  if (promedio >= 70) return "Aprobado";
  return "Reprobado";
}

console.log("Nota final:", calcularNotaFinal(85, 92, 78));

// Función reutilizable
function esMayorDeEdad(edad) {
  return edad >= 18;
}

console.log(esMayorDeEdad(17)); // false
console.log(esMayorDeEdad(20)); // true
```

---

## 🧠 Buenas prácticas

- Nombra funciones con verbos (`calcular`, `obtener`, `validar`, `mostrar`)
- Una función debe hacer **una sola cosa** (principio de responsabilidad única)
- Mantén las funciones cortas (idealmente < 20-30 líneas)
- Usa arrow functions por defecto en código moderno
- Documenta con comentarios qué recibe y qué devuelve

---

## 🚨 Errores comunes del principiante

1. Olvidar el `return` → la función devuelve `undefined`
2. Usar variables globales innecesariamente
3. No entender que los parámetros son copias (primitivos)
4. Hacer funciones demasiado grandes

---

## ✅ Resumen del Día

- Las funciones son el corazón de la programación estructurada
- Permiten reutilizar código y organizar lógica
- Dominar funciones = gran salto en tu capacidad como programador
- Scope es clave para evitar bugs

---

## 🚀 Siguiente paso

Completa los ejercicios del Día 4 en el archivo `ejercicios.md`.
