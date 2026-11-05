// 🟡 Ejercicio 2: El Buscador (Buscar producto por SKU)
//
// Objetivo: Extraer un dato específico del body y usarlo para buscar.
//
// Petición en Postman: POST http://localhost:3000/api/products/search
//
// Body (JSON):
//
// {
//     "skuBusqueda": "A1B2"
// }
//
// Tu misión (conecta las piezas):
//
// - Ruta (product.routes.js): Crea la ruta POST /search.
// - Controlador (product.controller.js): Saca el valor del body:
//   const sku = req.body.skuBusqueda;. Pásale ese sku a tu servicio.
// - Servicio (product.service.js): Recibe el sku y llévaselo a la función
//   getProductBySkuModel(sku) del modelo.
// - Modelo (product.model.js): Devolverá el producto correspondiente.
//
// 💡 Pista para el cerebro cansado: Si la ruta dice /search, no pongas
// variables en la URL. Todo viaja oculto en la mochila del body.
