document.addEventListener("DOMContentLoaded", function() {
  // Cargar datos desde JSON y almacenarlos en localStorage
  fetch('pizzas.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('pizzas', JSON.stringify(data));
      const pizzaSelect = document.getElementById('pizza-seleccion');
      data.forEach(pizza => {
        const option = document.createElement('option');
        option.value = pizza.nombre;
        option.textContent = pizza.nombre;
        pizzaSelect.appendChild(option);
      });
    })
    .catch(error => console.error(error));

  // Asociar evento al botón de pedido
  const orderButton = document.getElementById('order-button');
  orderButton.addEventListener('click', () => {
    const selectedPizzaNombre = document.getElementById('pizza-seleccion').value;
    const pizzas = JSON.parse(localStorage.getItem('pizzas'));
    const selectedPizza = pizzas.find(pizza => pizza.nombre === selectedPizzaNombre);

    if (selectedPizza) {
      const resultArea = document.getElementById('result-area');
      resultArea.textContent = `Ha elegido una pizza de ${selectedPizza.nombre}. El precio total es: $${selectedPizza.precio}`;
    }
  });
  
});



