import './css/base.scss';
import './images/turing-logo.png'
import Traveler from '.traveler.js'
import getAllTravelers from './apiCalls.js'

let currentTraveler, allTravelers;

window.addEventListener('load', fetchCalls);

function fetchCalls() {
  apiCalls.getAllTravelers();
}
