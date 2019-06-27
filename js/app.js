/* ======= Model ======= */
let dogs = [
    {
      name: 'Yotta',
      imgSrc : 'img/dog1.jpg',
      clickCount: 0
    },
    {
      name: 'Zda',
      imgSrc : 'img/dog2.jpg',
      clickCount: 0
    },
    {
      name : 'Rari',
      imgSrc : 'img/dog3.jpg',
      clickCount : 0
    },
    {
      name : 'Baru',
      imgSrc : 'img/dog4.jpg',
      clickCount : 0
    },
    {
      name : 'Wagen',
      imgSrc : 'img/dog5.jpg',
      clickCount : 0
    },
    {
      name : 'Porsche',
      imgSrc : 'img/dog6.jpg',
      clickCount : 0
    }
];


/* ======= View ======= */
// Create a list of several dogs
const dogList = document.querySelector('.list');

for (const dog of dogs) {
    // Use dog name as the context of the listItem
    let listItem = document.createElement('li');
    listItem.textContent = dog.name;

    // append each item to the list
    dogList.appendChild(listItem);
}

// Set the initial dog
let showingDog = dogs[0];

let name = document.querySelector('#dogName');
let image = document.querySelector('img');
let count = document.querySelector('.count');

name.textContent = showingDog.name;
image.src = showingDog.imgSrc;
count.textContent = `Count: ${showingDog.clickCount}`;

image.addEventListener('click', function() {
    showingDog.clickCount += 1;
    count.textContent = `Count: ${showingDog.clickCount}`;
});
