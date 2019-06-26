/* ======= Model ======= */
let dog = {
    name: 'Yotta',
    imgSrc : 'img/dog1.jpg',
    clickCount: 0
}


/* ======= View ======= */
const name = document.querySelector('#dogName');
const image = document.querySelector('img');
const count = document.querySelector('.count');

name.textContent = dog.name;
image.src = dog.imgSrc;
count.textContent = `Count: ${dog.clickCount}`;

image.addEventListener('click', function() {
    dog.clickCount += 1;
    count.textContent = `Count: ${dog.clickCount}`;
});
