// 🟠 Ejercicio 3: El Combo Mágico (Un servicio, dos modelos)
//
// Objetivo: Entender para qué sirve la capa de Servicios. Vamos a enviar dos
// datos en el body, y el servicio se encargará de pedirle información a dos
// modelos diferentes para armar una respuesta completa.
//
// Petición en Postman: POST http://localhost:3000/api/dashboard/verify
//
// Body (JSON):
//
// {
//     "idUsuario": 1,
//     "skuProducto": "Z9Y8"
// }
//
// Tu misión (conecta las piezas):
//
// - Ruta (dashboard.routes.js): Crea la ruta POST /verify.
// - Controlador (dashboard.controller.js): Extrae ambos datos del req.body y
//   pásaselos al servicio (puedes pasarlos como un solo objeto o como dos
//   parámetros).
// - Servicio (dashboard.service.js): ¡Aquí está la magia! En este archivo vas a
//   importar funciones de ambos modelos.
//   - Llama a findUserByIdModel(id) usando el ID que llegó. Guárdalo en una
//     variable.
//   - Llama a getProductBySkuModel(sku) usando el SKU que llegó. Guárdalo en
//     otra.
//   - Retorna al controlador un objeto que junte ambos resultados:
//     { cliente: datosUsuario, productoDeseado: datosProducto }.
//
// 💡 Pista para el cerebro cansado: El controlador es el camarero que toma la
// nota (req.body). El servicio es el cocinero: va a la nevera de usuarios a
// buscar el cliente, luego a la nevera de productos a buscar el ítem, lo junta
// todo en un plato, y se lo da al camarero para que lo entregue (Postman).
