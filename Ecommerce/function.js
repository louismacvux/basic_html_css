
const cart = [];
const products = [
  {
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    imageDescription: "Black over-ear headphones with sleek modern design",
    image: "../Ecommerce/assets/headphones.avif",
    productDescription:
      "Experience the pinnacle of audio excellence with our state-of-the-art wireless noise-canceling headphones. Engineered for audiophiles and professionals alike, these headphones deliver an immersive sound experience that transcends traditional listening boundaries. Advanced noise-canceling technology creates a personal sanctuary of sound, blocking out ambient distractions and allowing you to focus on every nuanced detail of your music, podcasts, or calls. The ergonomically designed ear cushions provide supreme comfort for extended wear, while the premium materials ensure durability and style. Featuring Bluetooth 5.0 connectivity for seamless wireless pairing, these headphones boast an impressive 30-hour battery life, ensuring your soundtrack continues throughout your day. The intuitive touch controls allow effortless management of volume, tracks, and noise-cancellation modes, making these headphones the ultimate companion for travel, work, or relaxation.",
    review: 4.5,
  },
  {
    name: "Smart Fitness Tracker Watch",
    price: 129.99,
    imageDescription: "Slim black fitness watch with heart rate monitor",
    image: "../Ecommerce/assets/smartwatch.webp",
    productDescription:
      "Transform your fitness journey with our cutting-edge Smart Fitness Tracker Watch, a comprehensive health and wellness companion designed to elevate your personal performance. This sleek, lightweight device goes far beyond traditional fitness tracking, offering an intelligent ecosystem of health monitoring and performance insights. The advanced heart rate sensor provides real-time cardiovascular data, tracking your beats per minute during rest, exercise, and recovery with medical-grade accuracy. Built-in GPS technology enables precise tracking of your outdoor activities, mapping your routes and calculating detailed metrics like pace, distance, and elevation. The sleep analysis feature uses sophisticated algorithms to break down your nightly rest into deep, light, and REM stages, providing actionable insights to improve your overall sleep quality. With water-resistant construction, this watch accompanies you through intense workouts, swimming sessions, and everyday life. The vibrant, high-resolution touchscreen displays notifications, workout stats, and personalized health recommendations, keeping you connected and motivated.",
    review: 4.2,
  },
  {
    name: "Premium Robot Vacuum Cleaner",
    price: 299.99,
    imageDescription:
      "Sleek white robotic vacuum with advanced navigation system",
    image: "../Ecommerce/assets/robotvacum.webp",
    productDescription:
      "Revolutionize your home cleaning experience with our cutting-edge Robot Vacuum Cleaner, a marvel of modern technology designed to deliver unprecedented cleaning performance. Equipped with advanced laser navigation and intelligent mapping technology, this device creates a real-time digital blueprint of your living space, ensuring comprehensive and efficient cleaning coverage. The powerful suction system combines multiple cleaning modes, tackling everything from fine dust to larger debris across hardwood floors, carpets, and tiles. Smart sensors detect obstacles and prevent collisions, while edge-cleaning technology ensures no corner is left untouched. With Wi-Fi connectivity and a dedicated smartphone app, you can schedule cleaning sessions, set virtual boundaries, and monitor cleaning progress from anywhere in the world. The long-lasting battery provides up to 120 minutes of continuous cleaning, and the automatic self-charging feature means your vacuum returns to its dock when battery levels are low.",
    review: 4.6,
  },
  {
    name: "Professional Digital Camera",
    price: 799.99,
    imageDescription: "Full-frame mirrorless camera with interchangeable lens",
    image: "../Ecommerce/assets/camera.png",
    productDescription:
      "Unleash your photographic potential with our Professional Digital Camera, a precision-engineered imaging device that redefines creative possibilities for both professional photographers and passionate enthusiasts. Featuring a cutting-edge full-frame sensor with 45-megapixel resolution, this camera captures breathtaking images with extraordinary detail, dynamic range, and color accuracy. The advanced image stabilization system ensures razor-sharp images even in challenging lighting conditions, while the lightning-fast autofocus mechanism tracks moving subjects with incredible precision. The robust magnesium alloy body is weather-sealed, making it ideal for outdoor and studio environments alike. With 4K video recording capabilities, in-body image stabilization, and a comprehensive range of professional-grade shooting modes, this camera transforms every photographic opportunity into a potential masterpiece. The high-resolution electronic viewfinder and articulating touchscreen provide intuitive controls and real-time preview of your compositions.",
    review: 4.9,
  },
  {
    name: "Smart Indoor Herb Garden",
    price: 189.99,
    imageDescription:
      "Compact hydroponic herb growing system with LED grow lights",
    image: "../Ecommerce/assets/herb.webp",
    productDescription:
      "Transform your culinary experience and living space with our innovative Smart Indoor Herb Garden, a revolutionary system that brings farm-fresh herbs directly to your kitchen. This intelligent hydroponic growing system creates the perfect microclimate for cultivating a variety of herbs, vegetables, and small plants with zero soil and minimal maintenance. Advanced LED grow lights simulate natural sunlight, providing the optimal spectrum and intensity for robust plant growth, while automated watering and nutrient delivery systems ensure your plants receive precisely what they need. The sleek, modern design integrates seamlessly into any kitchen decor, serving as both a functional growing system and an elegant piece of home technology. With space for up to nine different plant pods and a user-friendly mobile app that provides real-time growth tracking, plant care tips, and harvest notifications, this indoor garden makes sustainable, organic food production accessible to everyone.",
    review: 4.7,
  },
  {
    name: "High-Performance Gaming Laptop",
    price: 1599.99,
    imageDescription:
      "Sleek black gaming laptop with RGB keyboard and powerful graphics",
    image: "../Ecommerce/assets/laptop.jpeg",
    productDescription:
      "Dominate the digital realm with our High-Performance Gaming Laptop, a technological powerhouse engineered to deliver unparalleled gaming and computing experiences. Powered by the latest generation processor and cutting-edge NVIDIA graphics card, this laptop renders complex game environments with extraordinary detail and lightning-fast responsiveness. The advanced cooling system maintains optimal performance during intense gaming sessions, preventing thermal throttling and ensuring consistent frame rates. The immersive 15.6-inch display features a high-refresh-rate panel with near-zero response time, bringing game worlds to life with stunning clarity and smoothness. A precision-engineered mechanical keyboard with customizable RGB lighting provides tactile feedback and personalization, while the expansive SSD storage ensures rapid game loading and system responsiveness. Beyond gaming, this laptop is a versatile workstation capable of handling professional-grade video editing, 3D rendering, and complex computational tasks.",
    review: 4.8,
  },
  {
    name: "Professional Electric Espresso Machine",
    price: 599.99,
    imageDescription:
      "Stainless steel espresso machine with multiple brewing options",
    image: "../Ecommerce/assets/espresso.webp",
    productDescription:
      "Elevate your home coffee experience with our Professional Electric Espresso Machine, a sophisticated brewing system that brings cafe-quality coffee directly to your kitchen. Engineered with precision Italian design principles, this machine combines advanced thermal engineering with intuitive digital controls to produce consistently perfect espresso shots, cappuccinos, and specialty coffee drinks. The commercial-grade steel boiler maintains precise temperature control, ensuring optimal extraction for each coffee variety. Multiple brewing modes accommodate different preferences, from traditional espresso to lungo and americano, while the integrated ceramic burr grinder freshly grinds beans moments before brewing to preserve maximum flavor and aroma. The high-pressure pump delivers 15 bars of pressure, extracting rich, crema-topped espresso shots with professional-level quality. With a sleek, compact design, programmable settings, and easy-to-clean components, this machine transforms your morning routine into a gourmet experience.",
    review: 4.5,
  },
];

displayProducts();

function addToCart(product){
  debugger
  let current_item = parseFloat(document.getElementById('cart-count').innerHTML);
  current_item++;
  document.getElementById('cart-count').textContent = current_item++;
  showCart(product);
}

function showCart(product){
  debugger
  const tbody = document.getElementById('product-tbody');
          
          // Create a new table row
          const newRow = document.createElement('tr');
          
          // Define the innerHTML of the new row
          newRow.innerHTML = `
              <td>${product.image}</td>
              <td>${product.name}</td>
              <td${product.price}</td>
          `;
          
          tbody.appendChild(newRow);
}

function displayProducts() {
  const productList = document.querySelector('.product-list');

  // Loop through each product in the array
  for (const i in products) {
    // Create a new product div
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.setAttribute('product-id', products[i].id); // Set product-id as an attribute

    const detail = document.createElement("button");
    detail.id = "btn-add";
    detail.textContent = "View";
    detail.addEventListener('click', (evt) => {
      const productId = i;
      document.location.href = `../Ecommerce/productdetail.html?productId=${productId}`;
    })

    const productImage = document.createElement('img');
    productImage.id = 'imgs';
    productImage.src = products[i].image;
    productImage.alt = products[i].name;

    const productName = document.createElement('h3');
    productName.id = 'name-item';
    productName.textContent = products[i].name;

    const productPrice = document.createElement('p');
    productPrice.id = 'price-item';
    productPrice.textContent = `Price: ${products[i].price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.id = 'btn-add';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(products[i])); 

  
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addToCartButton);
    productDiv.appendChild(detail);

    productList.appendChild(productDiv);
  }
}
  
function addToCart(product){
  debugger
  let current_item = parseFloat(document.getElementById('cart-count').innerHTML);
  current_item++;
  document.getElementById('cart-count').textContent = current_item++;
  const productInCart = cart.find(item => item.id === product.id);

}
  
function displayProductDetail(product){
  let photo = document.getElementsByClassName("product-photo")[0];
  let name = document.getElementsByClassName("product-name")[0];
  let price = document.getElementsByClassName("product-price")[0];
  let rating = document.getElementsByClassName("product-rating")[0];
  let desc = document.getElementsByClassName("product-desc")[0];

  let img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.setAttribute("alt", product.imageDescription)
  photo.appendChild(img);
  name.innerText = product.name;
  price.innerText = `$${product.price}`;
  rating.innerText = `Rating: ${product.review}`;
  desc.innerText = product.productDescription;
}
//   displayProducts();
