import Typed from './typed.js';

const type = new Typed('.text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Software Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// eslint-disable-next-line no-console
console.log(type);

// mobile menu
const menu = document.querySelector('.menu_links');
const iconHam = document.querySelector('.icon');
const hambarger = document.querySelector('.hambarger');

const toggleMenu = () => {
  menu.classList.toggle('open');
  iconHam.classList.toggle('open');
  hambarger.classList.toggle('open');
};
iconHam.addEventListener('click', toggleMenu);

document.querySelectorAll('.hambarger_link').forEach((n) => {
  n.addEventListener('click', () => {
    menu.classList.remove('open');
    iconHam.classList.remove('open');
    hambarger.classList.remove('open');
  });
});

// portfolio
const data = [
  {
    id: 'card_zero',
    image: 'images/projects/portfolio.png',
    image_title: 'portfolio',
    name: 'My profile',
    stack: ['CANOPY', 'Back End Dev', 2023],
    description: 'lorem',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_zero',
    live: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    github: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },
  {
    id: 'card_zero',
    image: 'images/projects/portfolio.png',
    image_title: 'portfolio',
    name: 'My profile',
    stack: ['CANOPY', 'Back End Dev', 2023],
    description: 'lorem',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_zero',
    live: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    github: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },

];
const portfolio = document.getElementById('portfolio');

const portFo = () => {
  data.forEach((work, index) => {
    const portfolioCont = document.createElement('div');
    portfolioCont.classList.add('portfolioCont');

    const imageCont = document.createElement('div');

    const image = document.createElement('img');
    image.classList.add('imageCont');
    image.src = work.image;
    image.alt = work.image_title;
    imageCont.appendChild(image);

    const detailsCont = document.createElement('div');
    detailsCont.classList.add('detailsCont');
    const name = document.createElement('h2');
    name.textContent = work.name;

    const description = document.createElement('div');
    description.textContent = work.description;

    const stackCont = document.createElement('ul');
    stackCont.style.listStyleType = 'none';
    stackCont.classList.add('stacklist');
    work.stack.forEach((stack) => {
      const stackItem = document.createElement('li');
      stackItem.textContent = stack;
      stackCont.appendChild(stackItem);
      stackCont.style.display = 'flex';
    });

    const tech = document.createElement('ul');
    tech.style.listStyleType = 'none';
    work.technologies.forEach((technology) => {
      const techItem = document.createElement('li');
      techItem.textContent = technology;
      tech.appendChild(techItem);
      tech.style.display = 'flex';
    });

    detailsCont.appendChild(name);
    detailsCont.appendChild(stackCont);
    detailsCont.appendChild(description);
    detailsCont.appendChild(tech);

    portfolioCont.appendChild(imageCont);
    portfolioCont.appendChild(detailsCont);

    if (index % 2 === 0) {
      portfolioCont.classList.add('left_item');
    } else {
      portfolioCont.classList.add('right_item');
    }

    const seeSource = document.createElement('button');
    seeSource.textContent = 'See source';
    seeSource.style.width = '100px';
    seeSource.addEventListener('click', () => {
      window.open(work.github);
    });

    const seeLive = document.createElement('button');
    seeLive.textContent = 'See live';
    seeLive.style.width = '100px';
    seeLive.addEventListener('click', () => {
      window.open(work.live);
    });

    const btns = document.createElement('div');
    btns.appendChild(seeSource);
    btns.appendChild(seeLive);

    detailsCont.appendChild(btns);

    portfolio.appendChild(portfolioCont);
  });
};

portFo();

// About skills display
const langDisp = document.getElementById('lang_disp');
const langItem = document.getElementById('lang_item');

langDisp.addEventListener('click', () => {
  if (langItem.style.display === 'block') {
    langItem.style.display = 'none';
  } else {
    langItem.style.display = 'block';
  }
});

const frameDisp = document.getElementById('frame_disp');
const frameContent = document.getElementById('frame_content');

frameDisp.addEventListener('click', () => {
  if (frameContent.style.display === 'block') {
    frameContent.style.display = 'none';
  } else {
    frameContent.style.display = 'block';
  }
});

const skillDisp = document.getElementById('skill_disp');
const skillContent = document.getElementById('skill_content');
skillDisp.addEventListener('click', () => {
  if (skillContent.style.display === 'block') {
    skillContent.style.display = 'none';
  } else {
    skillContent.style.display = 'block';
  }
});

// form submission
const form = document.forms[0];
const email = form.elements[1];

const submit = document.querySelector('button[type=submit]');
const msg = document.querySelector('form > span');

submit.addEventListener('click', (event) => {
  const { value } = email;
  const lowerCase = value.toLowerCase();
  if (value !== lowerCase) {
    event.preventDefault();
    msg.style.color = '#fff';
    msg.style.background = 'red';
    msg.innerHTML = 'Please write, your email in small letters';
    form.reset();
  } else {
    msg.innerHTML = 'Thank you for email, I will get back to you ASAP';
    msg.style.background = 'black';
    msg.style.color = 'white';
    form.reset();
  }
});
