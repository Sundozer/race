export async function moveOneCar(car: HTMLElement) {
    const innerWidth = window.innerWidth;
    const resp = await fetch(`http://127.0.0.1:3000/engine/?id=${car.id[6]}&status=started`, {
        method: 'PATCH'
    });
    const ditanceVelocity = await resp.json()


    fetch(`http://127.0.0.1:3000/engine/?id=${car.id[6]}&status=drive`, {
        method: 'PATCH'
    }).then((response) => {
        if (!response.ok) {
            // car.classList.remove('car-animation')
            car.style.animationPlayState = 'paused'
            console.log(car)
        }
        fetch(`http://127.0.0.1:3000/engine/?id=${car.id[6]}&status=stopped`, {
            method: 'PATCH'
        });
    });
    
    function animEnd() {
        car.classList.remove('car-animation')
        car.style.left = '86%'
        car.removeEventListener('animationend', animEnd)
    }

    car.addEventListener('animationend', animEnd)
    car.style.animation = `${ditanceVelocity.distance / ditanceVelocity.velocity / 1000}s linear lolo`
    car.classList.add('car-animation');
}


export function reset(car: HTMLElement) {
    car.classList.remove('car-animation')
    car.style.left = '0%'
    car.style.animation = ''

}