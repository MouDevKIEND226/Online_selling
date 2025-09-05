// ======================
// Toggle Dark/Light Mode
// ======================
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Vérifier le mode sauvegardé
if(localStorage.getItem('theme') === 'dark') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
});

// ======================
// Gestion des Produits
// ======================
const productList = document.getElementById('product-list');
const popup = document.getElementById('product-popup');
const popupImage = document.getElementById('popup-image');
const popupName = document.getElementById('popup-name');
const popupPrice = document.getElementById('popup-price');
const popupStock = document.getElementById('popup-stock');
const popupBuy = document.getElementById('popup-buy');
const closePopup = document.getElementById('close-popup');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Prix : ${product.price.toLocaleString()} FCFA</p>
                <a href="#" class="buy-btn">Commander</a>
            `;

            // Clique sur l'image ou bouton
            const imgOrBtn = productCard.querySelector('img');
            const buyBtn = productCard.querySelector('.buy-btn');

            [imgOrBtn, buyBtn].forEach(el => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    openPopup(product);
                });
            });

            productList.appendChild(productCard);
        });
    })
    .catch(err => console.error('Erreur chargement JSON:', err));

// ======================
// Popup Produit
// ======================
function openPopup(product) {
    popupImage.src = product.image;
    popupName.textContent = product.name;
    popupPrice.textContent = `Prix : ${product.price.toLocaleString()} FCFA`;
    popupStock.textContent = `Stock disponible : ${product.stock}`;
    popupBuy.href = `https://wa.me/22665913840?text=Bonjour,+je+souhaite+commander+${encodeURIComponent(product.name)}`;
    popup.classList.remove('popup-hidden');
}

// Fermer le popup
closePopup.addEventListener('click', () => {
    popup.classList.add('popup-hidden');
});

// Fermer si clique à l'extérieur
window.addEventListener('click', (e) => {
    if(e.target === popup) {
        popup.classList.add('popup-hidden');
    }
});
