# Ejercicios — El Viaje de los Datos (Edición "Todo por el Body")

## Propósito

Este proyecto organiza la práctica de Node.js correspondiente al documento fuente
`api flujo.docx`, centrada en el recorrido de los datos dentro de una API:

    Postman (Body) ➡️ Rutas ➡️ Controlador (req.body) ➡️ Servicio ➡️ Modelo

Cada ejercicio vive en su propia carpeta independiente, con su propio entorno de
Node.js, para poder resolverse y ejecutarse por separado.

- **Tema:** Node.js
- **Materia o curso:** Node.js
- **Documento fuente de consignas:** `api flujo.docx`
- **Tecnologías base:** Node.js, JavaScript (ES Modules)
- **Tecnologías complementarias:** Express, Postman
- **Numeración:** original del documento

## Ejercicios incluidos

1. **Ejercicio 1: El Calentamiento (Crear un usuario)** — `ejercicio-01/`
2. **Ejercicio 2: El Buscador (Buscar producto por SKU)** — `ejercicio-02/`
3. **Ejercicio 3: El Combo Mágico (Un servicio, dos modelos)** — `ejercicio-03/`

Cada `index.js` incluye al principio la consigna de su ejercicio como comentario.
El texto original completo también está disponible en `api flujo.docx`.

## Estructura del proyecto

    /
    ├── AGENTS.md
    ├── README.md
    ├── api flujo.docx
    ├── ejercicio-01/
    │   └── index.js
    ├── ejercicio-02/
    │   └── index.js
    └── ejercicio-03/
        └── index.js

No existe un `package.json` global en la raíz ni dentro de las carpetas: cada
ejercicio se inicializa por separado cuando se resuelve.

## Requisitos

- Node.js instalado (verificar con `node --version`).
- Una terminal (la integrada de VS Code es suficiente).
- Postman para enviar las peticiones de los ejercicios.

## Cómo trabajar cada ejercicio

1. Abrir la terminal en la raíz del proyecto.
2. Entrar a la carpeta del ejercicio que se va a resolver:

       cd ejercicio-01

3. Inicializar el entorno del ejercicio:

       npm init -y

   Si el ejercicio usa Express:

       npm install express

   Si se trabaja con ES Modules (`import` / `export`), agregar
   `"type": "module"` al `package.json` generado en esa carpeta.

4. Escribir la solución debajo del bloque de comentarios con la consigna, en el
   `index.js` de esa carpeta.
5. Ejecutar desde la terminal:

       node index.js

6. Probar las peticiones desde Postman contra `http://localhost:3000`, según la
   consigna del documento. En la pestaña **Body** hay que seleccionar **raw** y
   luego **JSON**.

## Flujo de trabajo y asistencia

- El agente permanece en modo pasivo: no resuelve, corrige ni prueba ejercicios
  de forma predeterminada.
- La asistencia se brinda únicamente bajo pedido explícito: revisión y corrección
  de código, explicaciones conceptuales sobre Node.js, Express, middleware, rutas,
  capas controlador/servicio/modelo, y guía para pruebas con Postman.
- No se instalan dependencias ni se modifican archivos existentes sin solicitud.
