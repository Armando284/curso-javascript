# 📘 Día 1 - Ejercicios: Variables, Tipos de Datos y Console

## 🎯 Objetivo

Practicar:

* Declaración de variables (`const`, `let`)
* Tipos de datos básicos
* Uso de `console.log()`

---

## 🟢 Nivel 1: Súper Básico (Entender la mecánica)

### Ejercicio 1

Declara una variable llamada `nombre` con tu nombre.

Muestra en consola:

```
Hola, mi nombre es ___
```

---

### Ejercicio 2

Declara una variable `edad` con un número.

Muestra en consola:

```
Tengo ___ años
```

---

### Ejercicio 3

Declara una variable `esEstudiante` con valor `true`.

Imprime:

```
¿Es estudiante? true
```

---

## 🟡 Nivel 2: Tipos de Datos

### Ejercicio 4

Crea las siguientes variables:

* `nombre` → string
* `edad` → number
* `tieneTrabajo` → boolean
* `telefono` → null

Imprime todo en consola en una sola línea.

---

### Ejercicio 5

Declara una variable sin valor llamada `apellido`.

Luego imprime:

```
Apellido: undefined
```

---

## 🟠 Nivel 3: Uso de `let` (cambio de valores)

### Ejercicio 6

Declara una variable `ciudad` con valor `"La Habana"` usando `let`.

Luego:

1. Imprime el valor
2. Cámbialo a `"Santiago de Cuba"`
3. Imprime el nuevo valor

---

### Ejercicio 7

Crea una variable `puntaje` con valor `10`.

* Súmale 5
* Imprime el resultado

---

## 🔵 Nivel 4: Pensar un poco más

### Ejercicio 8

Crea variables para representar una persona:

* `nombre`
* `edad`
* `esEstudiante`
* `ciudad`

Imprime algo como:

```
Juan tiene 20 años, vive en La Habana y es estudiante: true
```

---

### Ejercicio 9

Corrige el siguiente código (tiene errores):

```javascript
const edad = 25;
edad = 30;

console.log(edad);
```

👉 Explica por qué falla y arréglalo.

---

## 🔴 Nivel 5: Mini reto

### Ejercicio 10

Simula un perfil de usuario:

Crea variables:

* `username`
* `email`
* `edad`
* `premium` (true/false)

Imprime algo como:

```
Usuario: armando_dev
Email: test@email.com
Edad: 25
¿Es premium? true
```

---

## 🧠 Bonus (si va rápido)

### Ejercicio 11

¿Qué crees que imprime esto?

```javascript
let x;
console.log(x);
```

👉 Escribe tu respuesta antes de ejecutarlo.

---

### Ejercicio 12

¿Qué tipo de dato es cada uno?

```javascript
const a = "10";
const b = 10;
const c = true;
const d = null;
```

---

## 🚀 Extra Challenge (opcional)

### Ejercicio 13

Crea un pequeño "log" tipo videojuego:

```javascript
const nombre = "Heroe";
let vida = 100;

console.log("Jugador:", nombre);
console.log("Vida inicial:", vida);

vida = 80;

console.log("Vida después del daño:", vida);
```

👉 Modifícalo para que tenga:

* Nombre personalizado
* Vida inicial diferente
* Al menos 2 cambios de vida

---

## ✅ Regla importante del día

* Usa `const` siempre que puedas
* Usa `let` solo si el valor cambia
* ❌ No uses `var`

---
