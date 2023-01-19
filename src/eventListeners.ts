import { createCar, updateCarServer, deleteCar, generate100 } from './createCar';
import { moveOneCar, reset, changeButtonsToB, changeButtonsToA } from './move';
import { updateCar } from './update-car';
import { onload } from './onload';
import { createPages } from './createPages';
export let currentPage = 1;
export let finishList: {id: number, velocity: number}[] = []

export function eventListeners() {
  const carsBlock = document.querySelector('.cars-block');
  const createButton = document.querySelector('.create-car-button');
  const updateCarButton = document.querySelector('.update-car-button');
  const createText = document.querySelector('.create-car-text') as HTMLInputElement;
  const createColor = document.querySelector('.create-color') as HTMLInputElement;
  const updateColor = document.querySelector('.update-color') as HTMLInputElement;
  const updateText = document.querySelector('.update-car-text') as HTMLInputElement;
  const generateCarsButton = document.querySelector('.generate-cars-button') as HTMLInputElement;
  const pagesBlock = document.querySelector('.pages-block') as HTMLElement;
  const toGarage = document.querySelector('.to-garage') as HTMLButtonElement;
  const garagePage = document.querySelector('.garage-page') as HTMLButtonElement;
  const toWinners = document.querySelector('.to-winners') as HTMLButtonElement;
  const winnersPage = document.querySelector('.winners-page') as HTMLButtonElement;
  let selected: HTMLElement | null | undefined;
  let carName: HTMLElement | null | undefined;

  carsBlock!.addEventListener('click', (e) => {
    const targ = e.target as HTMLElement;
    const idNumber = Number(targ.id.slice(3));
    const carToMove = document.querySelector(`#carNum${idNumber}`) as HTMLElement;

    if (targ.className === 'butA') {
      const butA = document.querySelector('.butA') as HTMLElement;
      moveOneCar(carToMove);
      changeButtonsToB(butA)
    }
    if (targ.className === 'butA butB') {
      changeButtonsToA(targ)
      reset(carToMove);
    }
    if (targ.innerHTML === 'Select') {
      targ.innerHTML = 'Selected';
      setTimeout(() => {
        targ.innerHTML = 'Select';
      }, 2000);
      selected = targ.parentElement!.nextElementSibling!.nextElementSibling!.firstElementChild!.firstElementChild! as HTMLElement;
      carName = targ.nextElementSibling?.nextElementSibling as HTMLElement;
    }
    if (targ.innerHTML === 'Remove') {
      deleteCar(targ);
    }
  });

  createButton!.addEventListener('click', () => {
    if (createText!.value) {
      createCar(createText!.value, createColor!.value);
      createText!.value = '';
    }
  });

  updateCarButton!.addEventListener('click', () => {
    if (selected !== null && selected !== undefined) {
      const svgToColor = selected.firstElementChild as HTMLElement;
      svgToColor.style.fill = `${updateColor.value}`;
      let textInner = carName!.innerHTML;
      if (updateText.value.length) {
        carName!.innerHTML = `${updateText.value}`;
        textInner = updateText.value;
      }
      const bod = {
        name: textInner,
        color: updateColor.value,
      };
      const carToUpdate = Number(selected.id.slice(6));
      console.log(carToUpdate)
      updateCarServer(carToUpdate, bod);
    }
  });

  const startRace = document.querySelector('.race-cars-button');
  startRace!.addEventListener('click', () => {
    finishList = [];
    const allCars = document.querySelectorAll('.car-pic');
    allCars.forEach((el) => {
      const elem = el as HTMLElement;
      const buttonA = el.parentElement?.parentElement?.previousElementSibling?.firstElementChild?.firstElementChild as HTMLElement;
      moveOneCar(elem);
      changeButtonsToB(buttonA)
    });
  });

  const resetCars = document.querySelector('.reset-cars-button');
  resetCars?.addEventListener('click', () => {
    const allCars = document.querySelectorAll('.car-pic');
    allCars.forEach((el) => {
      const elem = el as HTMLElement;
      const buttonB = el.parentElement?.parentElement?.previousElementSibling?.firstElementChild?.nextElementSibling?.firstElementChild as HTMLElement;
      reset(elem);
      changeButtonsToA(buttonB)
    });
  });

  generateCarsButton.addEventListener('click', () => {
    const carsList = [
      "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
    ]
    for (let i = 0; i < 10; i++) {
      let randomColor = '#' + `${Math.floor(Math.random()*16777215).toString(16)}`
      generate100(carsList[Math.ceil(Math.random() * carsList.length)], randomColor)
    }
    carsBlock!.innerHTML = '';
    pagesBlock.innerHTML = '';
    onload();
  })

  pagesBlock.addEventListener('click', (e) => {
    const targ = e.target as HTMLElement;
    currentPage = Number(targ.innerHTML.slice(4))
    createPages()
  })

  toGarage.addEventListener('click', () => {
    garagePage.style.opacity = '1';
    garagePage.style.zIndex = '5'
    winnersPage.style.opacity = '0';
    winnersPage.style.zIndex = '-5'
  })

  toWinners.addEventListener('click', () => {
    winnersPage.style.opacity = '1';
    winnersPage.style.zIndex = '5'
    garagePage.style.opacity = '0';
    garagePage.style.zIndex = '-5'
  })
}
