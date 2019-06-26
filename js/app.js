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
];


/* ======= View ======= */
const main = document.querySelector('.main');
main.innerHTML = "";


// Loop over the dogs
for (const dog of dogs) {
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let count = document.createElement('div');

    name.textContent = dog.name;
    image.src = dog.imgSrc;
    count.textContent = `Count: ${dog.clickCount}`;

    main.appendChild(name);
    main.appendChild(image);
    main.appendChild(count);

    // Click Event
    image.addEventListener('click', function() {
        dog.clickCount += 1;
        count.textContent = `Count: ${dog.clickCount}`;
    });
}
