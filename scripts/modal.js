const PETSARRAY = [
  {
    "name": "Sophia",
    "img": "../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Katrine",
    "img": "../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
];

const MODAL = document.querySelector('.modal');
const MODALBUTTON = document.querySelector('.modal__button');

if (document.documentElement.clientWidth > 1279) {

  function createModal (index) {
    let modal = document.createElement('div');
    modal.classList.add('modal__container');
    modal.setAttribute('data-name', `${PETSARRAY[index].name}`);
    modal.innerHTML = `<img src=${PETSARRAY[index].img} class='modal__image'>
                      <div class='modal__content'>
                        <h3 class='modal__title'>${PETSARRAY[index].name}</h3>
                        <span class='modal__subtitle'>${PETSARRAY[index].type} - ${PETSARRAY[index].breed}</span>
                        <p class='modal__description'>${PETSARRAY[index].description}</p>
                        <ul class='modal__list'>
                          <li class='modal__item'><b>Age: </b>${PETSARRAY[index].age}</li>
                          <li class='modal__item'><b>Inoculations: </b>${PETSARRAY[index].inoculations}</li>
                          <li class='modal__item'><b>Diseases: </b>${PETSARRAY[index].diseases}</li>
                          <li class='modal__item'><b>Parasites: </b>${PETSARRAY[index].parasites}</li>
                        </ul>
                      </div>`;
    document.querySelector('.modal').appendChild(modal);
  }
}

else if (document.documentElement.clientWidth < 768) {
  function createModal (index) {
    let modal = document.createElement('div');
    modal.classList.add('modal__container');

    modal.innerHTML = `<img src=${PETSARRAY[index].img} class='modal__image'>
                      <div class='modal__content'>
                        <h3 class='modal__title'>${PETSARRAY[index].name}</h3>
                        <span class='modal__subtitle'>${PETSARRAY[index].type} - ${PETSARRAY[index].breed}</span>
                        <p class='modal__description'>${PETSARRAY[index].description}</p>
                        <ul class='modal__list'>
                          <li class='modal__item'><b>Age: </b>${PETSARRAY[index].age}</li>
                          <li class='modal__item'><b>Inoculations: </b>${PETSARRAY[index].inoculations}</li>
                          <li class='modal__item'><b>Diseases: </b>${PETSARRAY[index].diseases}</li>
                          <li class='modal__item'><b>Parasites: </b>${PETSARRAY[index].parasites}</li>
                        </ul>
                      </div>`;
    document.querySelector('.modal').appendChild(modal);
  }
}

else {
    function createModal (index) {
      let modal = document.createElement('div');
      modal.classList.add('modal__container');
  
      modal.innerHTML = `<img src=${PETSARRAY[index].img} class='modal__image'>
                        <div class='modal__content'>
                          <h3 class='modal__title'>${PETSARRAY[index].name}</h3>
                          <span class='modal__subtitle'>${PETSARRAY[index].type} - ${PETSARRAY[index].breed}</span>
                          <p class='modal__description'>${PETSARRAY[index].description}</p>
                          <ul class='modal__list'>
                            <li class='modal__item'><b>Age: </b>${PETSARRAY[index].age}</li>
                            <li class='modal__item'><b>Inoculations: </b>${PETSARRAY[index].inoculations}</li>
                            <li class='modal__item'><b>Diseases: </b>${PETSARRAY[index].diseases}</li>
                            <li class='modal__item'><b>Parasites: </b>${PETSARRAY[index].parasites}</li>
                          </ul>
                        </div>`;
      document.querySelector('.modal').appendChild(modal);
    }
}

function currentModal() {
  let clickCards = document.querySelectorAll('.pets__slider_item');
  clickCards.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < 8; i++) {
        if (item.dataset.name === PETSARRAY[i].name) {
        createModal(i);;
        }
      }
      MODAL.classList.add('modal_active');
      document.body.classList.add('lock');    
      blackout.classList.add('blackout_active');
    });
  });
}

currentModal();


MODALBUTTON.addEventListener("click", () => {
  document.body.classList.remove('lock');
  MODAL.classList.remove('modal_active');
  document.querySelector('.modal__container').remove();
  blackout.classList.remove('blackout_active');
});

blackout.addEventListener("click", (event) => {
  event.stopPropagation();
  document.body.classList.remove('lock');
  MODAL.classList.remove('modal_active');
  document.querySelector('.modal__container').remove();
  blackout.classList.remove('blackout_active');
});

blackout.addEventListener("mouseover", (event) => {
  MODALBUTTON.classList.add('modal__button-hover');
});

blackout.addEventListener("mouseout", (event) => {
  MODALBUTTON.classList.remove('modal__button-hover');
});


