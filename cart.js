
const products = [
  { id: 1, name: 'PS4 Ovládač', price: 29.90, image: 'https://via.placeholder.com/300x200?text=PS4+Ovládač' },
  { id: 2, name: 'Mini projektor HY300 Pro', price: 89.00, image: 'https://via.placeholder.com/300x200?text=Projektor+HY300+Pro' },
  { id: 3, name: 'AirPods 2 Pro', price: 129.00, image: 'https://via.placeholder.com/300x200?text=AirPods+2+Pro' },
  { id: 4, name: 'Tablet 10.1"', price: 149.00, image: 'https://via.placeholder.com/300x200?text=Tablet+10.1' },
  { id: 5, name: 'JBL Flip 6', price: 99.90, image: 'https://via.placeholder.com/300x200?text=JBL+Flip+6' },
];

function addToCart(product) {
  localStorage.setItem('cart', JSON.stringify(product));
  window.location.href = 'checkout.html';
}

const productList = document.getElementById('product-list');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'bg-white p-4 rounded-lg shadow';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="mb-4 w-full rounded">
    <h2 class="text-xl font-bold">${p.name}</h2>
    <p class="text-gray-600 mb-2">${p.price.toFixed(2)} €</p>
    <button onclick='addToCart(${JSON.stringify(p)})' class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Kúpiť</button>
  `;
  productList.appendChild(card);
});
