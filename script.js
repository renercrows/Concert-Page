const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
  navLogo.classList.toggle('active');
}));

const artistsInfo = [
  {
    img: 'images/singuer1.png',
    name: 'David Guetta',
    title: 'Techno Artist',
    info: 'One of the top techno DJ',
  },

  {
    img: 'images/singuer2.png',
    name: 'Sia',
    title: 'Pop Artist',
    info: 'One of the top pop singuers',
  },

  {
    img: 'images/singuer3.png',
    name: 'Avenged Sevenfold',
    title: 'Rock Artist',
    info: 'One of the top rock bands',
  },

  {
    img: 'images/singuer4.png',
    name: 'Bruno Mars',
    title: 'Pop Artist',
    info: 'One of the top pop singuers',
  },

  {
    img: 'images/singuer5.png',
    name: 'Selen Gomez',
    title: 'Pop Artist',
    info: 'One of the top pop singuers',
  },

  {
    img: 'images/singuer6.png',
    name: 'Maroon 5',
    title: 'Pop Artist',
    info: 'One of the top pop bands',
  },
];

// This part will create the variables for cards
const mainCard = document.querySelector('.card');
const createCards = (num) => {
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  mainCard.appendChild(cardsContainer);
  const cards1 = document.createElement('img');
  cards1.setAttribute('src', num.img);
  cards1.classList.add('cards1');
  cardsContainer.appendChild(cards1);
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardscontainer');
  cardsContainer.appendChild(cardContainer);
  const title2 = document.createElement('h3');
  title2.classList.add('cardtitle');
  title2.textContent = `${num.name}`;
  cardContainer.appendChild(title2);
  const info = document.createElement('h4');
  info.classList.add('cardinfo');
  info.textContent = `${num.title}`;
  cardContainer.appendChild(info);
  const text = document.createElement('p');
  text.classList.add('cardtext');
  text.textContent = `${num.info}`;
  cardContainer.appendChild(text);
};

// creating of cards dinamically
for (let i = 0; i < artistsInfo.length; i += 1) {
  createCards(artistsInfo[i]);
}
