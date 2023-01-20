import { eventListeners } from './eventListeners';
import { onload } from './onload';
import { winnersList } from './winner';
import './scss/style.scss';

require('./flag.png');

eventListeners();
onload();
winnersList()