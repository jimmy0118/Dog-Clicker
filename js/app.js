/* ======= Model ======= */
let model = {
    showingDog: null,
    dogs: [
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
    ]
};


/* ======= Octopus ======= */
let octopus = {
    init() {
        model.showingDog = model.dogs[0];
        display.init();
        list.init();
    },

    getDog() {
        return model.showingDog;
    },

    switchDog(dog) {
        model.showingDog = dog;
    },

    getList() {
        return model.dogs;
    },

    // increments the counter for the currently-selected cat
    incrementCounter() {
        model.showingDog.clickCount++;
        display.render();
    }
};


/* ======= View ======= */
let display = {
    init() {
      // store pointers to our DOM elements
      this.name = document.querySelector('#dogName');
      this.count = document.querySelector('.count');
      this.image = document.querySelector('img');

      // on click, increment the current dog's counter
      this.image.addEventListener('click', function() {
          octopus.incrementCounter();
      });
      // render this view (update the DOM elements with the right values)
      this.render();
    },

    render() {
      // update the DOM elements with values from the display dog
      let displayDog = octopus.getDog();
      this.name.textContent = displayDog.name;
      this.image.src = displayDog.imgSrc;
      this.count.textContent = `Count: ${displayDog.clickCount}`;
    }
};

let list = {
    // store the DOM element
    init() {
        this.dogList = document.querySelector('.list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render() {
        // get the dogs from the octopus
        let dogs = octopus.getList();
        // loop over the dogs
        for (const dog of dogs) {
            // Use dog name as the context of the listItem
            let listItem = document.createElement('li');
            listItem.textContent = dog.name;

            // When listItem got clicked, switch the showing dog
            listItem.addEventListener('click', function() {
                octopus.switchDog(dog);
                display.render();
            });

            // append each item to the list
            this.dogList.appendChild(listItem);
        }
    }
};

// run the app
octopus.init();
