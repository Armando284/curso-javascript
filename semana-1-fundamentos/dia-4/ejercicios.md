# Semana 1 - Día 4: Ejercicios - Funciones

**Instrucciones:**
- Crea un archivo `dia-4-ejercicios.js`
- Resuelve todos los ejercicios
- Usa `console.log()` claro y comentarios
- Intenta usar arrow functions cuando sea natural

### Ejercicio 1: Función básica

Crea una función `saludarEstudiante` que reciba un nombre y una carrera y muestre:
```
Hola [nombre], bienvenido a la Universidad de Ciencias Informáticas.
Estás estudiando [carrera].
```

---

### Ejercicio 2: Calculadora simple

Crea funciones:
- `sumar(a, b)`
- `restar(a, b)`
- `multiplicar(a, b)`
- `dividir(a, b)` (maneja división por cero)

Prueba con varios valores.

---

### Ejercicio 3: Clasificador de notas (con función)

Crea una función `obtenerCategoriaNota(nota)` que devuelva:
- 90-100 → "Sobresaliente"
- 80-89 → "Notable"
- 70-79 → "Aprobado"
- < 70 → "Reprobado"

---

### Ejercicio 4: Calculadora de edad

Crea una función `calcularEdad(anioNacimiento)` que devuelva la edad actual (usa 2026 como año actual).

Luego crea `esAdulto(edad)` que devuelva `true/false`.

---

### Ejercicio 5: Validador de contraseña (Desafío)

Crea una función `esPasswordValida(password)` que:
- Tenga al menos 8 caracteres
- Contenga al menos un número
- Devuelva `true` o `false`

Pista: Usa `.length` y métodos de string.

---

### Ejercicio 6: Mini reto - Calculadora de propina

Crea una función `calcularTotalConPropina(monto, porcentajePropina)` que:
- Calcule la propina
- Devuelva un objeto con: `{ subtotal, propina, total }`

Ejemplo:
```js
console.log(calcularTotalConPropina(1000, 10));
```

---

**Al terminar:**
Ejecuta con `node dia-4-ejercicios.js`

Cuando hayas terminado todos, avísame para que los revise y generemos el **Día 5 (Arrays)**.

¡Estás progresando muy bien!