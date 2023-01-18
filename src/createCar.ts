import {
  getServer, createServerId, updateServerId, updateServerIdParameter, deleteServerId,
} from './server-methods';
import { onload } from './onload';

export async function createCar(nam: string, col: string) {
  if (nam.length) {
    createServerId({
      name: nam,
      color: col,
    });
  }
  const carsBlock = document.querySelector('.cars-block');
  carsBlock!.textContent = '';
  onload();
}

export function updateCarServer(id: number, body: { name:string, color: string }) {
  if (body!.name && body!.color) {
    updateServerId(id!, body!);
  }
}

export function deleteCar(car: HTMLElement) {
  const idNumber = car.id.slice(6)
  const findedCar = document.querySelector(`#one-of-cars${idNumber}`);
  findedCar?.parentNode?.removeChild(findedCar);
  const numberToWrite = document.querySelectorAll('.one-of-cars');
  document.querySelector('.garage')!.innerHTML = `Garage(${numberToWrite.length})`;
  deleteServerId(Number(idNumber))
}

export function generate100(nam: string, col: string) {
  createServerId({
    name: nam,
    color: col,
  });
}