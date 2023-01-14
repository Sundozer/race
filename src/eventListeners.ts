import { createCar } from './createCar';

export function eventListeners() {
  const carsBlock = document.querySelector('.cars-block');
  carsBlock!.addEventListener('click', (e) => {
    // console.log(e.target)
  });

  const createButton = document.querySelector('.create-car-button');
  const createText = document.querySelector('.create-car-text') as HTMLInputElement;
  const createColor = document.querySelector('.create-color') as HTMLInputElement;
  createButton!.addEventListener('click', () => {
    createCar(createText!.value, createColor!.value);
    createText!.value = '';
  });

  const updateText = document.querySelector('.update-car-text');
}
