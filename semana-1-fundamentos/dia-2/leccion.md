# Semana 1: Fundamentos de JavaScript

## Día 2: Operadores y Condicionales

---

## 🎯 Objetivos del día

* Entender **qué hace realmente cada operador**, no solo memorizarlo
* Saber **cuándo usar cada tipo de operador**
* Evitar errores comunes (especialmente con `==`, `NaN`, `undefined`, etc.)
* Dominar estructuras condicionales (`if`, `else`, `else if`)
* Empezar a pensar en **lógica de programación real**

---

## 🧠 Idea clave del día

> Programar = tomar decisiones basadas en condiciones

Todo lo que verás hoy gira alrededor de esto:

```js
if (condición) {
  // hacer algo
}
```

---

## 1. Operadores Aritméticos

Sirven para hacer cálculos matemáticos.

```js
const a = 20;
const b = 7;

console.log(a + b);   // 27
console.log(a - b);   // 13
console.log(a * b);   // 140
console.log(a / b);   // 2.857...
console.log(a % b);   // 6
console.log(a ** 2);  // 400
```

### 📌 Cuándo usar cada uno

* `+` → sumar o concatenar strings

* `-`, `*`, `/` → operaciones matemáticas estándar

* `%` → modulo o resto, **muy importante en programación**

  * Saber si un número es par:

    ```js
    if (num % 2 === 0) // es par
    ```
  * ciclos, rotaciones, índices

* `**` → potencias (menos común, pero útil)

---

### ⚠️ Edge cases importantes

#### 1. División por 0

```js
console.log(10 / 0); // Infinity
```

No da error → da `Infinity`

---

#### 2. Operar con strings

```js
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

👉 JavaScript hace **coerción,** *transformación*, **automática de tipos** (peligroso).

---

#### 3. NaN (Not a Number)

```js
console.log("hola" * 2); // NaN
```

```js
console.log(NaN === NaN); // false ❗
```

👉 Para validar:

```js
Number.isNaN(valor);
```

---

## 2. Operadores de Asignación

Sirven para **modificar variables**.

```js
let x = 10;

x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
```

---

### 📌 Cuándo usarlos

* Cuando actualizas valores repetidamente
* En loops (muy importante más adelante)

---

### ⚠️ Edge cases

#### 1. Mutabilidad

```js
let x = 10;
let y = x;

x += 5;

console.log(y); // 10 (no cambia)
```

👉 Primitivos se copian por valor.

---

## 3. Operadores de Comparación

Comparan valores y devuelven `true` o `false`.

```js
const edad = 18;

console.log(edad == 18);   // true
console.log(edad === 18);  // true
console.log(edad > 18);    // false
console.log(edad >= 18);   // true
console.log(edad != 18);   // false
```

---

### 🔥 DIFERENCIA CRÍTICA

#### `==` (débil)

Convierte tipos automáticamente

```js
"18" == 18 // true ❗
false == 0 // true ❗
```

---

#### `===` (estricto) ✅ RECOMENDADO

```js
"18" === 18 // false
```

---

### 📌 Regla de oro

> Usa siempre `===` y `!==`

---

### ⚠️ Edge cases IMPORTANTES

#### 1. null vs undefined

```js
null == undefined  // true ❗
null === undefined // false
```

---

#### 2. Comparaciones raras

```js
false == "0" // true
false === "0" // false
```

---

#### 3. NaN

```js
NaN === NaN // false ❗
```

---

## 4. Operadores Lógicos

Se usan para combinar condiciones.

```js
const esEstudiante = true;
const tieneBuenaNota = false;

console.log(esEstudiante && tieneBuenaNota); // false
console.log(esEstudiante || tieneBuenaNota); // true
console.log(!esEstudiante); // false
```

---

### 📌 Cuándo usar cada uno

#### `&&` (AND)

👉 Cuando TODO debe cumplirse

```js
if (edad >= 18 && tieneLicencia)
```

---

#### `||` (OR)

👉 Cuando AL MENOS uno se cumple

```js
if (esAdmin || esModerador)
```

---

#### `!` (NOT)

👉 Invertir condición

```js
if (!estaLogueado)
```

---

### ⚠️ Edge cases avanzados (MUY importantes)

#### 1. Short-circuit

```js
false && console.log("hola"); // no se ejecuta
true || console.log("hola");  // no se ejecuta
```

👉 JavaScript corta la evaluación.

---

#### 2. No siempre devuelven booleanos

```js
console.log("hola" && 5); // 5
console.log(null || "default"); // "default"
```

👉 Se usan mucho para valores por defecto:

```js
const nombre = input || "Invitado";
```

---

## 5. Estructuras Condicionales

---

### 🔹 `if` y `else`

```js
const edad = 17;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

---

### 📌 Cómo piensa un programador aquí

1. ¿Cuál es la condición?
2. ¿Qué pasa si es true?
3. ¿Qué pasa si es false?

---

### 🔹 `else if`

```js
const nota = 82;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 80) {
  console.log("Muy bien");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

---

### ⚠️ Orden IMPORTA

```js
if (nota >= 70) {
  // esto atraparía todo antes
}
```

👉 Siempre de mayor a menor.

---

### ⚠️ Truthy y Falsy (CLAVE)

JavaScript convierte valores a booleano:

#### Falsy:

```js
false
0
""
null
undefined
NaN
```

#### Todo lo demás → truthy

---

#### Ejemplo:

```js
if ("hola") {
  console.log("entra"); // entra
}
```

---

## 6. Ejemplo Completo del Día 2

```js
const edad = 20;
const tieneLicencia = false;
const esEstudiante = true;

if (edad >= 18) {
  console.log("Eres mayor de edad");

  if (tieneLicencia) {
    console.log("Puedes conducir");
  } else {
    console.log("No tienes licencia");
  }

} else {
  console.log("Eres menor de edad");
}

if (edad >= 18 && esEstudiante) {
  console.log("Descuento de estudiante");
}
```

---

## 🧠 Buenas prácticas desde ya

* Usa `===` siempre
* Evita depender de coerción automática
* Haz condiciones simples y claras
* No anides `if` innecesariamente (esto lo mejorarás luego)

---

## 🚨 Errores comunes del principiante

1. Usar `=` en vez de `===`

```js
if (edad = 18) // ERROR
```

---

2. No entender `==`

```js
"0" == false // true 😬
```

---

3. No validar inputs

```js
if (edad >= 18) // pero edad podría ser string
```

---

## 🧩 Mini reto mental

¿Qué imprime esto?

```js
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log(null == undefined);
console.log(null === undefined);
```

---

## ✅ Resumen del Día

* Operadores → herramientas para calcular y comparar
* Condicionales → permiten tomar decisiones
* `===` > `==`
* Cuidado con coerción y valores falsy
* El orden de condiciones importa

---

## 🚀 Siguiente paso

Completa los ejercicios del Día 2 en este [archivo](./ejercicios.md).
