# Mamyora - Boutique en ligne

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

---

## 🌟 Description
Mamyora est une **boutique en ligne moderne et professionnelle**, conçue pour présenter et vendre des produits artisanaux et tendances.  

**Fonctionnalités clés :**
- Mode clair / sombre avec mémoire.
- Affichage dynamique des produits depuis `data.json`.
- Popup produit avec image agrandie, prix, stock et lien WhatsApp.
- Responsive design pour mobiles et tablettes.
- Ajout facile de nouveaux produits via JSON.

---

## 📂 Structure des fichiers
/project-root
│
├─ index.html # Fichier HTML principal
├─ style.css # Fichier CSS pour le design
├─ script.js # JavaScript pour toggle, produits et popup
├─ data.json # JSON contenant produits et commandes
└─ README.md # Ce fichier

---
## ⚡ Installation rapide
1. Cloner le dépôt :
git clone https://github.com/MouDevKIEND226/mamyora.git
Ouvrir le dossier et lancer index.html dans votre navigateur.

Optionnel : tester les produits dynamiques avec JSON Server :

npm install -g json-server
json-server --watch data.json --port 3000
Accéder aux produits via http://localhost:3000/products.

➕ Ajouter un nouveau produit
Ouvrir data.json.

Ajouter un objet dans "products" :

json
Copier le code
{
  "id": 9,
  "name": "Nom du produit",
  "price": 12000,
  "image": "URL de l'image",
  "stock": 10
}
Enregistrer. Le produit apparaît automatiquement sur le site.

📞 Contact
Téléphone : +226 65913840

WhatsApp : Cliquez ici

© 2025 Mamyora - Boutique en ligne