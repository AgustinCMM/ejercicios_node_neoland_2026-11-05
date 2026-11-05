// 🟢 Ejercicio 1: El Calentamiento (Crear un usuario)
//
// Objetivo: Enviar un JSON desde Postman, atraparlo en el controlador y pasarlo
// por todas las capas hasta el modelo.
//
// Petición en Postman: POST http://localhost:3000/api/users
//
// Body (JSON):
//
// {
//     "nombre": "Marta",
//     "correo": "marta@test.com"
// }
//
// Tu misión (conecta las piezas):
//
// - Ruta (user.routes.js): Crea la ruta POST / que apunte al controlador.
// - Controlador (user.controller.js): Atrapa los datos usando
//   const datosUsuario = req.body;. Pásale esa variable a la función de tu
//   servicio.
// - Servicio (user.service.js): Recibe el dato y entrégaselo a la función
//   createNewUserModel(datos) del archivo de modelos.
// - Modelo (user.model.js): Esta función agarrará esos datos y te devolverá un
//   objeto simulando que se guardó en la base de datos. ¡Mándalo de vuelta al
//   cliente!
//
// 💡 Pista para el cerebro cansado: El controlador es el único que sabe qué es
// req.body. A partir del servicio, ya son solo parámetros normales de
// JavaScript.
