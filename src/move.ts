/* eslint-disable-next-line */
import { finishList } from './eventListeners';
import { winner, winnersList } from './winner';

export async function moveOneCar(car: HTMLElement) {
  const idNumber = Number(car.id.slice(6));
  const resp = await fetch(`http://127.0.0.1:3000/engine/?id=${idNumber}&status=started`, {
    method: 'PATCH',
  });
  const ditanceVelocity = await resp.json();

  fetch(`http://127.0.0.1:3000/engine/?id=${idNumber}&status=drive`, {
    method: 'PATCH',
  }).then((response) => {
    if (!response.ok) {
      car.style.animationPlayState = 'paused';
    }
    fetch(`http://127.0.0.1:3000/engine/?id=${idNumber}&status=stopped`, {
      method: 'PATCH',
    });
  });

  function animEnd() {
    if (!finishList.length) {
      finishList.push({ id: idNumber, velocity: ditanceVelocity.velocity });
      winner(finishList[0].id, ditanceVelocity.distance / ditanceVelocity.velocity);
    }
    car.classList.remove('car-animation');
    car.style.left = '86%';
    car.removeEventListener('animationend', animEnd);
  }

  car.addEventListener('animationend', animEnd);
  car.style.animation = `${ditanceVelocity.distance / ditanceVelocity.velocity / 1000}s linear lolo`;
  car.classList.add('car-animation');
}


export function changeButtonsToB(butA: HTMLElement) {
  const buttonis = butA as HTMLButtonElement;
  buttonis.disabled = true;
  const butB = butA.parentElement?.nextElementSibling?.firstElementChild as HTMLButtonElement;
  butB.disabled = false;
}

export function changeButtonsToA(butB: HTMLElement) {
  const buttonis = butB as HTMLButtonElement;
  buttonis.disabled = true;
  const butA = butB.parentElement?.previousElementSibling?.firstElementChild as HTMLButtonElement;
  butA.disabled = false;

}

export async function reset(car: HTMLElement) {
  const idNumber = Number(car.id.slice(6));
  const butFromCar = car.parentElement?.parentElement?.previousElementSibling?.firstElementChild?.nextElementSibling?.firstElementChild as HTMLButtonElement;
  const carNames = butFromCar.parentElement?.parentElement?.previousElementSibling?.firstElementChild?.nextElementSibling?.nextElementSibling as HTMLElement;
  const save = carNames.innerHTML;
  carNames.innerHTML += ' (resetting)'
  butFromCar.style.color = 'purple';
  fetch(`http://127.0.0.1:3000/engine/?id=${idNumber}&status=stopped`, {
    method: 'PATCH',
  })
  .then((response) => {
    if (response.ok) {
      carNames.innerHTML = save;
      butFromCar.style.color = 'white';
      car.classList.remove('car-animation');
      car.style.left = '0%';
      car.style.animation = '';
      changeButtonsToA(butFromCar)
    }
  });
}