class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.present = [];
    this.upcoming = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = new Date().getTime();
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

  orderTripsByDate() {
      this.allTrips.forEach(trip => {
      trip.seekTripDuration()
      let beginDate = trip.startDate;
      let endDate = trip.endDate;
      let today = this.todaysDate;
      if(beginDate <= today  && today <= endDate && trip.status === 'approved') {
        this.present.push(trip);
      } else if (today < trip.startDate && trip.status === 'approved'){
          this.upcoming.push(trip);
      } else if (endDate < today && trip.status === 'approved') {
          this.past.push(trip);
      } else if (trip.status === 'pending') {
          this.pending.push(trip)
      }
    })
  }

  calculateTripMoneySpentInYear(yearSelected, destinationData) {
    let pastYearTrips = this.allTrips.filter(trip => {
      return trip.date.includes(yearSelected);
    })
    const byYear = pastYearTrips.reduce((moneySpent, trip) => {
      const findDestination = destinationData.find(place => place.id ===  trip.destinationID)
      const calculateFlightCost = findDestination.estimatedFlightCostPerPerson * trip.travelerCount
      const calculateTravelCost = findDestination.estimatedLodgingCostPerDay * trip.duration * trip.travelerCount
      const subTotal = (calculateFlightCost + calculateTravelCost) * .1
      moneySpent += (subTotal + calculateFlightCost + calculateTravelCost)
      return moneySpent
    }, 0)
    return byYear;
  }
}
export default Traveler;
