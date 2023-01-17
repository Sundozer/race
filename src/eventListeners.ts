import { createCar, updateCarServer } from './createCar';
import { moveOneCar, reset } from './move';
import { updateCar } from './update-car';

export function eventListeners() {
  const carsBlock = document.querySelector('.cars-block');
  carsBlock!.addEventListener('click', (e) => {
    const targ = e.target as HTMLElement;
    const carToMove = document.querySelector(`#carNum${targ.id[3]}`) as HTMLElement;
    if (targ.className === 'butA') {
      moveOneCar(carToMove);
    }
  });

  const createButton = document.querySelector('.create-car-button');
  const updateCarButton = document.querySelector('.update-car-button');
  const createText = document.querySelector('.create-car-text') as HTMLInputElement;
  const createColor = document.querySelector('.create-color') as HTMLInputElement;
  const updateColor = document.querySelector('.update-color') as HTMLInputElement;
  const updateText = document.querySelector('.update-car-text') as HTMLInputElement;
  let selected: HTMLElement | null | undefined = undefined;
  let carName: HTMLElement | null | undefined = undefined;


  createButton!.addEventListener('click', () => {
    createCar(createText!.value, createColor!.value);
    createText!.value = '';
  });

  updateCarButton!.addEventListener('click', () => {
    if (selected !== null && selected !== undefined) {
      const svgToColor = selected.firstElementChild as HTMLElement;
      svgToColor.style.fill = `${updateColor.value}`
      let textInner = carName!.innerHTML;
      if (updateText.value.length) {
        carName!.innerHTML = `${updateText.value}`
        textInner = updateText.value;
      }
      let bod = {
        name: textInner,
        color: updateColor.value
      }
      updateCarServer(Number(selected!.id[6]), bod)
    }
    
  })


  const startRace = document.querySelector('.race-cars-button');
  startRace!.addEventListener('click', () => {
    const allCars = document.querySelectorAll('.car-pic');
    allCars.forEach((el) => {
      const elem = el as HTMLElement;
      moveOneCar(elem);
    });
  });

  const resetCars = document.querySelector('.reset-cars-button');
  resetCars?.addEventListener('click', () => {
    const allCars = document.querySelectorAll('.car-pic');
    allCars.forEach((el) => {
      const elem = el as HTMLElement;
      reset(elem);
    });
  });

  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.innerHTML === 'Select') {
      target.innerHTML = 'Selected';
      setTimeout(() => {
        target.innerHTML = 'Select'
      }, 2000);
      selected = target.parentElement!.nextElementSibling!.nextElementSibling!.firstElementChild!.firstElementChild! as HTMLElement;
      carName = target.nextElementSibling?.nextElementSibling as HTMLElement;
    }
  })



}
