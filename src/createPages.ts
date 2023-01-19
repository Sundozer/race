import { currentPage } from './eventListeners'

export function createPages() {
    const carsArr: Element[] = [];
    const cars = document.querySelectorAll('.one-of-cars');
    if (cars.length > 10) {
        const numberOfPages = Math.floor(cars.length / 10) + 1;
        const div = document.querySelector('.pages-block');
        div!.innerHTML = ''
        const garagePage = document.querySelector('.garage-page');
        garagePage?.appendChild(div!)
        for (let i = 0; i < numberOfPages; i++) {
            const button = document.createElement('button');
            button.classList.add(`pageNumber${i+1}`)
            div!.appendChild(button)
            button.innerHTML = `Page ${i + 1}`
        }
        cars.forEach((el)=>{
            carsArr.push(el)
        })
        carsArr.forEach((elem) => {
            const element = elem as HTMLElement;
            if (carsArr.indexOf(elem) > currentPage * 10 - 1 || carsArr.indexOf(elem) < currentPage * 10 - 10) {
                element.style.display = 'none'
            } else {
                element.style.display = 'flex'
            }
        })
    }
}