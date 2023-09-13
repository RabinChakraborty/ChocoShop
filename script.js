const chocolates = [
  { name: 'Chocolate A', price: 2 },
  { name: 'Chocolate B', price: 2 },
  { name: 'Chocolate C', price: 3 },
  { name: 'Chocolate d', price: 2 },
  { name: 'Chocolate e', price: 2 },
  { name: 'Chocolate f', price: 3 },
  { name: 'Chocolate g', price: 2 },
  { name: 'Chocolate h', price: 2 },
  { name: 'Chocolate i', price: 3 },
  { name: 'Chocolate j', price: 2 },
  { name: 'Chocolate k', price: 2 },
  { name: 'Chocolate l', price: 3 },
  { name: 'Chocolate m', price: 3 },
];

const selectedItems = [];
const maxItems = 8;

const chocolatesContainer = document.querySelector('.chocolates');
const selectedItemsList = document.getElementById('selected-items');
const totalPriceDisplay = document.getElementById('total-price');

function toggleSelection(chocolate) {
  const index = selectedItems.findIndex((item) => item.name === chocolate.name);

  if (index !== -1) {
    selectedItems.splice(index, 1);
  } else {
    if (selectedItems.length < maxItems) {
      selectedItems.push(chocolate);
    } else {
      alert('You can select up to 8 chocolates.');
    }
  }

  renderSelectedItems();
}

function renderSelectedItems() {
  selectedItemsList.innerHTML = '';
  let totalPrice = 0;

  selectedItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    selectedItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

chocolates.forEach((chocolate) => {
  const button = document.createElement('button');
  button.textContent = `${chocolate.name} ($${chocolate.price.toFixed(2)})`;
  button.classList.add('chocolate-button');

  button.addEventListener('click', () => {
    if (
      selectedItems.length < maxItems ||
      button.classList.contains('selected')
    ) {
      toggleSelection(chocolate);
      button.classList.toggle('selected');
    } else {
      alert('You have reached the maximum limit of selected chocolates.');
    }
  });

  chocolatesContainer.appendChild(button);
});

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 2000);

renderSelectedItems();
