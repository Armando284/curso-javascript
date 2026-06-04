# Semana 1: Fundamentos de JavaScript

## Día 3: Bucles (Loops) y Control de Flujo

---

## 🎯 Objetivos del día

* Entender qué es un **bucle** y por qué es esencial
* Aprender a usar:

  * `for`
  * `while`
* Evitar errores comunes como **loops infinitos**
* Combinar bucles con **condicionales**
* Empezar a pensar en términos de **iteración y patrones**

---

## 🧠 Idea clave del día

> Un bucle te permite repetir código sin copiarlo

En vez de esto:

```js
console.log("Hola");
console.log("Hola");
console.log("Hola");
```

Haces esto:

```js
for (let i = 0; i < 3; i++) {
  console.log("Hola");
}
```

---

## 1. Bucle `for`

Es el más usado cuando sabes **cuántas veces repetir algo**.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 🔍 Cómo funciona (muy importante)

```js
for (inicio; condición; actualización)
```

Ejemplo:

```js
for (let i = 0; i < 5; i++)
```

* `let i = 0` → empieza en 0
* `i < 5` → se ejecuta mientras sea true
* `i++` → aumenta en 1 cada vez

---

### 📌 Cuándo usar `for`

* Cuando sabes el número de iteraciones
* Cuando recorres arrays (lo verás en próximos días)
* Cuando necesitas control preciso del índice

---

### ⚠️ Edge cases importantes

#### 1. Off-by-one error (MUY común)

```js
for (let i = 0; i <= 5; i++)
```

👉 Esto imprime **6 valores (0 a 5)**

---

#### 2. Nunca entra al loop

```js
for (let i = 10; i < 5; i++) {
  console.log(i);
}
```

👉 La condición es falsa desde el inicio

---

#### 3. Loop infinito

```js
for (let i = 0; i < 5;) {
  console.log(i);
}
```

👉 Nunca incrementa → infinito

---

## 2. Bucle `while`

Se usa cuando **NO sabes cuántas veces se repetirá**

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

### 📌 Cuándo usar `while`

* Cuando dependes de una condición dinámica
* Ejemplo: esperar input válido
* Ejemplo: hasta que algo ocurra

---

### ⚠️ Edge cases

#### 1. Loop infinito (muy común)

```js
let i = 0;

while (i < 5) {
  console.log(i);
}
```

👉 Falta `i++`

---

#### 2. Condiciones que nunca cambian

```js
let activo = true;

while (activo) {
  console.log("Ejecutando...");
}
```

👉 Nunca se detiene

---

## 3. `break` y `continue`

Controlan el flujo dentro de loops.

---

### 🔹 `break` → rompe el loop

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;

  console.log(i);
}
```

👉 Se detiene en 5

---

### 🔹 `continue` → salta una iteración

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;

  console.log(i);
}
```

👉 No imprime el 2

---

### 📌 Cuándo usarlos

* `break` → cuando ya encontraste lo que buscas
* `continue` → cuando quieres ignorar casos específicos

---

## 4. Combinar loops con condicionales

Aquí es donde empieza la lógica real.

---

### Ejemplo: números pares

```js
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### Ejemplo: buscar un valor

```js
const objetivo = 7;

for (let i = 0; i < 10; i++) {
  if (i === objetivo) {
    console.log("Encontrado:", i);
    break;
  }
}
```

---

## 5. Patrones mentales importantes

---

### 🔹 Contador

```js
let contador = 0;

for (let i = 0; i < 10; i++) {
  contador++;
}
```

---

### 🔹 Acumulador

```js
let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma += i;
}

console.log(suma); // 15
```

---

### 🔹 Filtro

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue;

  console.log(i);
}
```

---

## 6. Ejemplo completo del día

```js
let suma = 0;

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;

  suma += i;
}

console.log("Resultado:", suma);
```

---

## 🧠 Buenas prácticas

* Siempre asegúrate de que el loop **termina**
* Usa nombres claros (`i` está bien en loops simples)
* Mantén la lógica simple dentro del loop
* Evita loops innecesarios (optimización mental)

---

## 🚨 Errores comunes

---

### 1. Loop infinito sin querer

```js
while (true) {
}
```

---

### 2. Condiciones mal planteadas

```js
for (let i = 0; i > 10; i++)
```

---

### 3. Olvidar actualización

```js
let i = 0;
while (i < 5) {
  console.log(i);
}
```

---

### 4. Mezclar lógica innecesaria

```js
for (let i = 0; i < 10; i++) {
  if (i < 5) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
```

👉 Se puede simplificar (lo aprenderá luego)

---

## 🧩 Mini reto mental

¿Qué imprime esto?

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

---

```js
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
```

---

## ✅ Resumen del Día

* `for` → cuando sabes cuántas veces
* `while` → cuando depende de una condición
* `break` → detiene el loop
* `continue` → salta iteración
* Cuidado con loops infinitos
* Empiezas a pensar en **patrones (contador, acumulador, filtro)**

---

## 🚀 Siguiente paso

Completa los ejercicios del Día 3 en este [archivo](./ejercicios.md).