import { createCar } from './createCar';
import { moveOneCar, reset } from './move';

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
  const createText = document.querySelector('.create-car-text') as HTMLInputElement;
  const createColor = document.querySelector('.create-color') as HTMLInputElement;
  createButton!.addEventListener('click', () => {
    createCar(createText!.value, createColor!.value);
    createText!.value = '';
  });

  const updateText = document.querySelector('.update-car-text');

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
}
