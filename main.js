const pizzas = [
  { nombre: "Mozzarella", precio: 9 },
  { nombre: "Napolitana", precio: 10 },
  { nombre: "Fugazzeta", precio: 11 }
];

function buscarPizzaPorNombre(nombrePizza) {
  const pizzaEncontrada = pizzas.find(pizza => pizza.nombre === nombrePizza);
  return pizzaEncontrada;
}

function tomarPedido() {
  let total = 0;

  console.log("Bienvenido a nuestra pizzería");
  console.log("Opciones de pizza:");

  for (let i = 0; i < pizzas.length; i++) {
    console.log(`${i + 1}. ${pizzas[i].nombre} - $${pizzas[i].precio}`);
  }

  const opcion = prompt("Ingrese el número de la pizza que desea ordenar (0 para salir) o ingrese el nombre de una pizza para buscarla:");

  if (opcion === "0") {
    console.log("Gracias por visitarnos. ¡Hasta luego!");
    return;
  }

  let pizzaElegida;
  if (!isNaN(opcion)) {
    const I = parseInt(opcion) - 1;

    if (isNaN(I) || I < 0 || I >= pizzas.length) {
      console.log("Opción inválida. Por favor, elija una opción válida.");
      return;
    }

    pizzaElegida = pizzas[I];
  } else {
    pizzaElegida = buscarPizzaPorNombre(opcion);
    if (!pizzaElegida) {
      console.log("No se encontró ninguna pizza con ese nombre. Por favor, elija una opción válida.");
      return;
    }
  }

  total = pizzaElegida.precio;
  console.log(`Ha elegido una pizza de ${pizzaElegida.nombre}`);
  console.log("El precio total es: $" + total);

  tomarPedido();
}

tomarPedido();
