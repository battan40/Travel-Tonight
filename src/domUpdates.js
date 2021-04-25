const domUpdates = {

currentTraveler: null,
today: null,
allTrips: null,
allDestinations: null,

applyGlobals(currentTraveler, date, trips, destinations) {
  this.currentTraveler = currentTraveler;
  this.today = date;
  this.allTrips = trips;
  this.allDestinations = destinations;
},

displayCurrentTraveler(currentTraveler) {
  const greetTraveler = document.querySelector('.greeting');
  const divideFullName = currentTraveler.name.split(' ');
  const name = divideFullName[0];
  greetTraveler.innerText = `Welcome, ${name}`
},

displayExpenses() {
  const yearlyTripExpenses = document.querySelector('#spending');
  yearlyTripExpenses.innerText = `Total trip expenses this year: $${this.currentTraveler.calculateTripMoneySpentInYear('2020', this.allDestinations)}`
},


}

export default domUpdates;
