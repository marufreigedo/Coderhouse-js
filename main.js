

// Definimos el precio de las pizzas
const precioMozzarella = 8.99;
const precioNapolitana = 10.99;

// Función para tomar el pedido y calcular el precio total
function tomarPedido() {
  let total = 0;

  // Mostramos las opciones de pizza y solicitamos al usuario que elija
  console.log("Bienvenido a nuestra pizzería");
  console.log("Opciones de pizza:");
  console.log("1. Mozzarella - $" + precioMozzarella);
  console.log("2. Napolitana - $" + precioNapolitana);

  // Solicitamos al usuario que ingrese su elección
  const opcion = prompt("Ingrese el número de la pizza que desea ordenar (0 para salir):");

  // Verificamos la elección del usuario y calculamos el precio total
  if (opcion === "1") {
    total = precioMozzarella;
    console.log("Ha elegido una pizza de Mozzarella");
  } else if (opcion === "2") {
    total = precioNapolitana;
    console.log("Ha elegido una pizza Napolitana");
  } else if (opcion === "0") {
    console.log("Gracias por visitarnos. ¡Hasta luego!");
    return; // Salimos de la función si el usuario elige salir
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