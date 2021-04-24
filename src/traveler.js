class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.pending = [];
  }

  compileAllTrips(trips, destinations) {
    let tripsByFilter = trips.filter(trip => trip.userID === this.id);
    let currentDestination;
    tripsByFilter.forEach(trip => {
      destinations.forEach(place => {
        if(trip.destinationID === place.id) {
          currentDestination = place;
          this.allTrips.push(trip);
        }
      })
    })
    return this.allTrips;
  }

  sortPresentByDate() {
    this.allTrips.forEach()
  }

}
export default Traveler;
