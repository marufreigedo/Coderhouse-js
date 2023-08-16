document.addEventListener("DOMContentLoaded", function() {
  const foodSelect = document.getElementById('food-seleccion');
  const orderButton = document.getElementById('order-button');
  const resultArea = document.getElementById('result-area');
  const foodList = document.getElementById('food-list');

  // Cargar datos desde JSON y almacenarlos en localStorage
  fetch('foods.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('foods', JSON.stringify(data));

      // Agregar opciones de comida al menú desplegable
      data.forEach(food => {
        const option = document.createElement('option');
        option.value = food.nombre;
        option.textContent = food.nombre;
        foodSelect.appendChild(option);
      });

      // Mostrar opciones de comida en la lista
      updateFoodList(data);
    })
    .catch(error => console.error(error));

  // Mostrar datos de localStorage al cargar la página
  const storedFoods = JSON.parse(localStorage.getItem('foods'));
  if (storedFoods) {
    updateFoodList(storedFoods);
  }

  // Función para actualizar la lista de comida
  function updateFoodList(foods) {
    foodList.innerHTML = ''; // Limpiar la lista
    foods.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = `${food.nombre} - $${food.precio}`;
      foodList.appendChild(listItem);
    });
  }

  // Asociar evento al botón de pedido
  orderButton.addEventListener('click', () => {
    const selectedFoodNombre = foodSelect.value;
    const foods = JSON.parse(localStorage.getItem('foods'));
    const selectedFood = foods.find(food => food.nombre === selectedFoodNombre);

    if (selectedFood) {
      resultArea.textContent = `Ha elegido ${selectedFood.nombre}. El precio total es: $${selectedFood.precio}`;
    }
  });
});