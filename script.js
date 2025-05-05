
const products = [
    { name: "PS4 Ovládač", price: 30, image: "ps4.jpg" },
    { name: "Mini Projector HY300 Pro", price: 55, image: "projector.jpg" },
    { name: "AirPods 2 Pro", price: 40, image: "airpods.jpg" },
    { name: "Tablet 10.1", price: 100, image: "tablet.jpg" },
    { name: "JBL Flip 6", price: 60, image: "jbl.jpg" }
];

let cart = [];

const renderProducts = () => {
    const container = document.getElementById("products");
    products.forEach((product, index) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="\${product.image}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>\${product.price}€</p>
            <button onclick="addToCart(\${index})">Pridať do košíka</button>
        `;
        container.appendChild(div);
    });
};

const addToCart = (index) => {
    cart.push(products[index]);
    document.getElementById("cart-count").innerText = cart.length;
    updateFormProducts();
};

const updateFormProducts = () => {
    const formInput = document.getElementById("form-products");
    formInput.value = cart.map(p => p.name).join(", ");
};

renderProducts();
