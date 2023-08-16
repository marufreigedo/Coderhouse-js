document.addEventListener("DOMContentLoaded", function() {
  const pizzaSelect = document.getElementById('pizza-seleccion');
  const orderButton = document.getElementById('order-button');
  const resultArea = document.getElementById('result-area');
  const pizzaList = document.getElementById('pizza-list'); 

  // Cargar datos desde JSON y almacenarlos en localStorage
  fetch('pizzas.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('pizzas', JSON.stringify(data));

      data.forEach(pizza => {
        const option = document.createElement('option');
        option.value = pizza.nombre;
        option.textContent = pizza.nombre;
        pizzaSelect.appendChild(option);

        const listItem = document.createElement('li'); // Agregado
        listItem.textContent = `${pizza.nombre} - $${pizza.precio}`;
        pizzaList.appendChild(listItem); // Agregado
      });
    })
    .catch(error => console.error(error));

  // Mostrar datos de localStorage al cargar la página
  const storedPizzas = JSON.parse(localStorage.getItem('pizzas'));
  if (storedPizzas) {
    storedPizzas.forEach(pizza => {
      const listItem = document.createElement('li'); // Agregado
      listItem.textContent = `${pizza.nombre} - $${pizza.precio}`;
      pizzaList.appendChild(listItem); // Agregado
    });
  }

  // Asociar evento al botón de pedido
  orderButton.addEventListener('click', () => {
    const selectedPizzaNombre = pizzaSelect.value;
    const pizzas = JSON.parse(localStorage.getItem('pizzas'));
    const selectedPizza = pizzas.find(pizza => pizza.nombre === selectedPizzaNombre);

    if (selectedPizza) {
      resultArea.textContent = `Ha elegido una pizza de ${selectedPizza.nombre}. El precio total es: $${selectedPizza.precio}`;
    }
  });
});