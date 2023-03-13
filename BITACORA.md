Instalación y ejecución del proyecto ""prueba tecnica ecomsur Sixto Tulio Mendoza Garcia""
Para instalar y ejecutar el proyecto, sigue estos pasos:

Abre una terminal y navega hasta la carpeta principal del proyecto.

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm i


Navega hasta la carpeta front con el siguiente comando:

cd front

Ejecuta el siguiente comando para instalar las dependencias del frontend:

npm i

Regresa a la carpeta principal con el siguiente comando:

cd ..

Finalmente, ejecuta el siguiente comando para ejecutar el servidor de desarrollo:

npm run dev

Con estos pasos, el proyecto debería estar instalado y ejecutándose en tu máquina local en el puerto correspondiente. Si tienes algún problema o error durante la instalación o ejecución del proyecto, asegúrate de verificar que estás siguiendo los pasos correctamente o de buscar ayuda en la documentación o la comunidad del proyecto, muchas gracias.


Documento de Prueba Técnica:

Solicitud Primera: Cada ítem del catálogo debe tener un botón de acción con el texto "Add item to cart".

Para lograr esto, se utilizó Redux con la intención de almacenar la información de los productos en un estado llamado "cart", que también sumaba la cantidad de veces que se agregaba un producto.

Solicitud Segunda: Si no hay stock, el botón de acción debe deshabilitarse.

Para lograr esto, se implementó un operador ternario que verifica la información del stock. En caso de que sea 0 o menor, el botón "Agregar al carrito" se deshabilitará. Además, se agregó lógica en el "reducer" para que, en caso de que la cantidad en el carrito sobrepase la cantidad en stock, se muestre una alerta que impida pedir más de lo que hay disponible en el stock.

Solicitud Tercera: Cada ítem en el carrito debe tener un botón de acción para eliminar el ítem del carrito.

Para lograr esto, se implementó una lógica en Redux para reducir la cantidad de productos que el cliente desea comprar. Cuando el estado llega a cero, el producto se elimina del estado y, si es necesario, se puede limpiar completamente el carrito.

Solicitud Cuarta: Los ítems en el carrito deben agruparse mostrando la cantidad de cada producto agregado.

Los productos en el carrito muestran su cantidad de compra a través del estado de Redux.

Solicitud Extra: Mostrar el rating y número de reseñas en la Página de Lista de Productos (PLP) y en la Página de Detalles del Producto (PDP).

Los componentes en la PLP y en la PDP son capaces de mostrar el rating y la cantidad de reseñas.

Solicitud Extra: Usar Redux para mantener el estado global.

Según la solicitud, se utilizó Redux en toda la aplicación para mantener y modificar el estado.

Solicitud Extra: Mantener información de ítems en el carrito al recargar la página.

El estado de "carrito" se mantiene gracias al método "localStorage", por lo que se puede cerrar la página o el navegador y el estado se mantendrá en la sesión sin ningún problema.