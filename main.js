//import Typed from './typed.js';

const type = new Typed('.text', {
  strings: ['Frontend Develope', 'Backend Developer', 'Full Stack Developer', 'Software Developer'],
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
    image: 'images/projects/codingminds.png',
    image_title: 'coding_minds',
    name: 'Coding Minds',
    stack: ['Stack', 'FrontEnd Dev', 2023],
    description: 'Coding_Minds Capstone is a website about an annual software summit in which different industry experts address key current coding and software issues.',
    technologies: [
      'HTML',
      'CSS',
    ],
    live: 'https://frankmugagga.github.io/codingminds_capstone/',
    github: 'https://github.com/FrankMugagga/codingminds_capstone',
  },
  {
    image: 'images/projects/todolist.png',
    image_title: 'todolist',
    name: 'To-do List',
    stack: ['Stack', 'FronEnd Dev', 2023],
    description: 'To-do List is an app that enables a user to add, edit, cross-out a completed task, remove selected or all tasks and display a list of tasks to accomplish',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    live: 'https://frankmugagga.github.io/todo_list/dist/',
    github: 'https://github.com/FrankMugagga/todo_list',
  },
  {
    image: 'images/projects/awesomebooks.png',
    image_title: 'awesomebooks',
    name: 'Awesome Books',
    stack: ['Stack', 'FrontEnd Dev', 2023],
    description: 'Awesome books is an app to add, remove and display book titles and corresponding authors.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    live: 'https://frankmugagga.github.io/todo_list/dist/',
    github: 'https://github.com/FrankMugagga/todo_list',
  },
  {
    image: 'images/projects/mathMagicianCalc.png',
    image_title: 'mathmagicians',
    name: 'Math Magicians',
    stack: ['Stack', 'Back End Dev', 2023],
    description: 'is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    technologies: [
      'React',
      'HTML',
      'CSS',
    ],
    live: 'https://frankmugagga-math-magician1.onrender.com/',
    github: 'https://github.com/FrankMugagga/math-magician',
  },
  {
    image: 'images/projects/worldPopulation.png',
    image_title: 'World population',
    name: 'World Population',
    stack: ['Stack', 'Front/Back End Dev', 2023],
    description: 'It is a web application that shows population metrics of countries of the world fetched from the API: https://restcountries.com',
    technologies: [
      'HTML',
      'React/Redux',
      'CSS',
      'API'
    ],
    live: 'https://world-population-git-population-frankmugagga.vercel.app/',
    github: 'https://github.com/FrankMugagga/World-Population',
  },

  {
    image: 'images/projects/spacetravellers.png',
    image_title: 'spacetravellers',
    name: 'Space Travellers',
    stack: ['Stack', 'Front/BackEnd Dev', 2023],
    description: 'It is an application that enables space explorers to book or cancel reservations a ship(s), dragon(s) and mission(s)',
    technologies: [
      'React',
      'Redux',
      'CSS',
      'API'
    ],
    live: 'https://space-travelers-hub-five.vercel.app/',
    github: 'https://github.com/FrankMugagga/Space-Travelers-Hub',

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

    const description = document.createElement('p');
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
      techItem.classList.add('tech');
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
  }
  else if(email.value === "" || form.elements[0].value === "" || form.elements[2].value === "") {
    msg.style.color = '#fff';
    msg.style.background = 'red';
    msg.innerHTML = 'Please complete filling the form before submission';
    form.reset();
    
  } else {
    msg.innerHTML = 'Thank you for email, I will get back to you ASAP';
    msg.style.background = 'black';
    msg.style.color = 'white';
    form.reset();
  }
});
