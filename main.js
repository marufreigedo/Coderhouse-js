document.addEventListener("DOMContentLoaded", function() {
  const foodSelect = document.getElementById('food-seleccion');
  const addToCartButton = document.getElementById('add-to-cart');
  const resultArea = document.getElementById('result-area');
  const foodList = document.getElementById('food-list');
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');

  // Función para cargar datos desde JSON y almacenarlos en localStorage
  function loadFoods() {
    fetch('foods.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('foods', JSON.stringify(data));
        // Mostrar opciones de comida en el menú desplegable
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
  }

  // Función para mostrar opciones de comida en la lista
  function updateFoodList(foods) {
    foodList.innerHTML = ''; // Limpiar la lista
    foods.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = `${food.nombre} - $${food.precio}`;
      foodList.appendChild(listItem);
    });
  }

  // Función para agregar un producto al carrito
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Actualizar el carrito en la interfaz
  }

  // Función para eliminar un producto del carrito
  function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Filtrar los productos que no coincidan con el nombre a eliminar
    cart = cart.filter(product => product.nombre !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Actualizar el carrito en la interfaz
  }

  // Función para cargar el carrito desde localStorage y mostrarlo
  function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.innerHTML = ''; // Limpiar el carrito
    let total = 0;
    cart.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        ${product.nombre} - $${product.precio}
        <button class="remove-button" data-product="${product.nombre}">Eliminar</button>
      `;
      cartList.appendChild(listItem);
      total += product.precio;
    });
    cartTotal.textContent = total;
  }

  // Asociar evento al botón de "Agregar al Carrito"
  addToCartButton.addEventListener('click', () => {
    const selectedFoodNombre = foodSelect.value;
    const foods = JSON.parse(localStorage.getItem('foods'));
    const selectedFood = foods.find(food => food.nombre === selectedFoodNombre);

    if (selectedFood) {
      addToCart(selectedFood);
      Swal.fire('¡Producto Agregado!', `${selectedFood.nombre} se ha agregado al carrito.`, 'success');
    }
  });

  // Asociar evento al botón de "Realizar Pedido"
  checkoutButton.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      Swal.fire('Carrito Vacío', 'Agregue productos al carrito antes de realizar el pedido.', 'warning');
    } else {
      // Realizar acciones para finalizar el pedido, como enviarlo a un servidor
      // o mostrar un mensaje de confirmación.
      Swal.fire('Pedido Realizado', 'Gracias por su pedido.', 'success');
      // Limpia el carrito después de realizar el pedido
      localStorage.removeItem('cart');
      loadCart(); // Actualiza la interfaz para reflejar el carrito vacío
    }
  });

  // Asociar evento a los botones de eliminación
  cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
      const productName = event.target.getAttribute('data-product');
      removeFromCart(productName);
    }
  });

  // Cargar el carrito cuando se inicie la página
  loadFoods();
  loadCart();
});