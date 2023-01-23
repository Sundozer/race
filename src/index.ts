import { eventListeners } from './eventListeners';
import { onload } from './onload';
import { winnersList } from './winner';
import './scss/style.scss';

require('./flag.png');

const innerBodyContent = `<div class="main-navigation">
<button class="to-garage navigation_button">To garage</button>
<button class="to-winners navigation_button">To winners</button>
</div>
<div class="garage-page">

<div class="create-car">
    <input type="text" class="create-car-text" placeholder="Create">
    <input type="color" class="create-color" value="#e66465">
    <button class="create-car-button navigation_button">Create</button>
</div>
<div class="update-car">
    <input type="text" class="update-car-text" placeholder="Update">
    <input type="color" class="update-color" value="#e16425">
    <button class="update-car-button navigation_button">Update</button>
</div>

<div class="race-reset">
    <button class="race-cars-button navigation_button">Race</button>
    <button class="reset-cars-button navigation_button">Reset</button>
    <button class="generate-cars-button navigation_button">Generate cars</button>
</div>





<p class="garage">Garage(0)</p>
<p class="page">Page 1</p>
<div class="cars-block"></div>
<div class="pages-block"></div>
</div>

<div class="winners-page">
<div class="winners-count" style="margin-top: 40px; font-size: 30px;">Winners (1)</div>
<div class="winners-pages" style="margin-top: 40px; font-size: 30px;">Page №1</div>
<div class="graph-line">
    <div class="car-number graph-point">Number</div>
    <div class="car-color graph-point">Car</div>
    <div class="car-name graph-point">Name</div>
    <div class="car-wins graph-point">Wins</div>
    <div class="car-best-time graph-point">Best time (seconds)</div>
</div>
<div class="winner-line">
    
</div>
<div class="winner-pages-block"></div>
</div>`;
document.querySelector('.body')!.innerHTML = innerBodyContent;

eventListeners();
onload();
winnersList();
