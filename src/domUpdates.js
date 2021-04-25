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


}

export default domUpdates;
