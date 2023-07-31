
const pizzas = [
  { nombre: "Mozzarella", precio: 9 },
  { nombre: "Napolitana", precio: 10 }
];

function tomarPedido() {
  let total = 0;

  console.log("Bienvenido a nuestra pizzería");
  console.log("Opciones de pizza:");

  for (let i = 0; i < pizzas.length; i++) {
    console.log(`${i + 1}. ${pizzas[i].nombre} - $${pizzas[i].precio}`);
  }

  const opcion = prompt("Ingrese el número de la pizza que desea ordenar (0 para salir):");
  const I = parseInt(opcion) - 1;

  if (isNaN(I) || I < 0 || I >= pizzas.length) {
    console.log("Opción inválida. Por favor, elija una opción válida.");
    return;
  }

  const pizzaElegida = pizzas[I];
  total = pizzaElegida.precio;
  console.log(`Ha elegido una pizza de ${pizzaElegida.nombre}`);
  console.log("El precio total es: $" + total);

  tomarPedido();
}

tomarPedido();
