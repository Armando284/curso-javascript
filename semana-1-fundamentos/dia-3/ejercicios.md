# Semana 1: Fundamentos de JavaScript

## Día 3: Ejercicios — Bucles (Loops) y Control de Flujo

---

## 🧠 Reglas

* No copies soluciones
* Piensa antes de escribir código
* Si te atascas → usa `console.log` para depurar

---

## 🔹 Nivel 1: Básico (Calentamiento)

### 1. Imprimir números

Imprime los números del 1 al 10 usando un `for`.

---

### 2. Imprimir en reversa

Imprime los números del 10 al 1.

---

### 3. Números pares

Imprime todos los números pares del 0 al 20.

👉 Pista: usa `%`

---

### 4. Tabla de multiplicar

Imprime la tabla del 5:

```
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

## 🔹 Nivel 2: Condicionales dentro de loops

### 5. Suma de números

Suma todos los números del 1 al 100 y muestra el resultado final.

---

### 6. Contar pares

Cuenta cuántos números pares hay entre 1 y 50.

---

### 7. Filtro de múltiplos

Imprime todos los números entre 1 y 50 que sean múltiplos de 3.

---

### 8. Evitar un número

Imprime del 1 al 10, pero **no imprimas el número 5**.

👉 Usa `continue`

---

## 🔹 Nivel 3: Control de flujo

### 9. Detener en condición

Imprime números del 1 al 20, pero detente cuando encuentres el número 13.

👉 Usa `break`

---

### 10. Buscar un número

Dado este valor:

```js
const objetivo = 17;
```

Recorre del 1 al 30 e imprime:

```
Encontrado en: X
```

cuando lo encuentres.

---

## 🔹 Nivel 4: Patrones mentales

### 11. Acumulador con condición

Suma solo los números impares del 1 al 20.

---

### 12. Contador con condición

Cuenta cuántos números entre 1 y 100 son divisibles entre 5.

---

### 13. Máximo valor

Dado este array:

```js
const numeros = [3, 7, 2, 9, 5];
```

Encuentra el número más grande usando un loop.

👉 No uses `Math.max`

---

## 🔹 Nivel 5: Retos (pensar como programador)

### 14. FizzBuzz (CLÁSICO 🔥)

Imprime números del 1 al 30, pero:

* Si es múltiplo de 3 → `"Fizz"`
* Si es múltiplo de 5 → `"Buzz"`
* Si es múltiplo de ambos → `"FizzBuzz"`
* Si no → imprime el número

---

### 15. Suma hasta detenerse

```js
let suma = 0;
```

Suma números desde 1 hacia arriba, pero **detente cuando la suma supere 50**.

Imprime el valor final de la suma.

---

### 16. Simulación con while

Simula esto:

```js
let energia = 10;
```

Mientras `energia > 0`:

* Imprime `"Trabajando..."`
* Resta 1 a energia

Cuando termine:

```
"Sin energía"
```

---

## 🔹 Nivel 6: Bonus (difícil)

### 17. Primer número divisible

Encuentra el **primer número entre 1 y 100** que sea divisible entre 7 y 9.

👉 Usa `break`

---

### 18. Contador inverso con condición

Imprime del 20 al 1, pero solo los números que sean múltiplos de 4.

---

## 🧩 Desafío mental (sin ejecutar)

¿Qué imprime esto?

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
```

---

## ✅ Objetivo final

Si puedes hacer estos ejercicios, ya estás empezando a:

* Pensar en términos de iteración
* Controlar flujo de ejecución
* Escribir lógica real
