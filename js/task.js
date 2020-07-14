// TASK01

const categories = document.querySelector('#categories');
console.log(`У списку ${categories.children.length} категориї.`);

categories.querySelectorAll('.item').forEach(item => {
  console.log(`Категорія: ${item.querySelector('h2').textContent}`);
  console.log(`Кількфсть елементів: ${item.querySelector('ul').children.length}`,
  );
});


// TASK02

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const allLi = ingredients.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  });
  document.querySelector('#ingredients').prepend(...allLi);


  // TASK03

  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  let mark = ``;
images.forEach(
  image => (mark += `<li><img src="${image.url}" alt="${image.alt}" /></li>`),
);
document.querySelector('#gallery').insertAdjacentHTML('beforeend', mark);

// TASK04

let counterValue = 0;

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// TASK05

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputChange(event) {
  nameInput.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = 'незнайомець');
}

nameInput.addEventListener('input', inputChange);

// TASK06

const validationInput = document.querySelector('#validation-input');

function validationInputBlur() {
  if (validationInput.value.length === 6) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

validationInput.addEventListener('blur', validationInputBlur);

// TASK07

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(fontSizeControl.value);

function fontSizeChange() {
  text.setAttribute('style', `font-size: ${fontSizeControl.value}px`);
}

fontSizeControl.addEventListener('input', fontSizeChange);