
// Definimos el precio de las pizzas
const precioMozzarella = 9;
const precioNapolitana = 10;

// Función para tomar el pedido y calcular el precio total
function tomarPedido() {
  let total = 0;

  // Mostramos las opciones de pizza
  console.log("Bienvenido a nuestra pizzería");
  console.log("Opciones de pizza:");
  
  // Mostramos los productos disponibles con su precio
  for (let i = 1; i <= 2; i++) {
    let nombre = "";
    let precio = 0;

    if (i === 1) {
      nombre = "Mozzarella";
      precio = precioMozzarella;
    } else if (i === 2) {
      nombre = "Napolitana";
      precio = precioNapolitana;
    }

    console.log(`${i}. ${nombre} - $${precio}`);
  }

  // Solicitamos al usuario que ingrese su elección
  const opcion = prompt("Ingrese el número de la pizza que desea ordenar (0 para salir):");

  // Verificamos la elección del usuario y calculamos el precio total
  if (opcion === "0") {
    console.log("Gracias por visitarnos. ¡Hasta luego!");
    return; // Salimos de la función si el usuario elige salir
  } else if (opcion === "1") {
    total = precioMozzarella;
    console.log("Ha elegido una pizza de Mozzarella");
  } else if (opcion === "2") {
    total = precioNapolitana;
    console.log("Ha elegido una pizza Napolitana");
  } else {
    console.log("Opción inválida. Por favor, elija una opción válida.");
    return; // Salimos de la función si la opción es inválida
  }

  console.log("El precio total es: $" + total);

  // Llamamos a la función nuevamente para tomar otro pedido
  tomarPedido();
}

// Llamamos a la función para tomar el primer pedido
tomarPedido();