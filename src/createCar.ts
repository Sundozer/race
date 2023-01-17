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
    updateServerId(id!, body!)
  }
}