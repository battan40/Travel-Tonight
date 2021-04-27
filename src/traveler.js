class Traveler {
  constructor(travelerData, date) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.present = [];
    this.upcoming = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = date;
  }

  compileAllTrips(trips, destinations) {
    let tripsByFilter = trips.filter(trip => trip.userID === this.id);
    tripsByFilter.forEach(trip => {
      destinations.forEach(place => {
        if (trip.destinationID === place.id) {
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
      if (beginDate <= today  && today <= endDate && trip.status === 'approved') {
        this.present.push(trip);
      } else if (today < trip.startDate && trip.status === 'approved') {
        this.upcoming.push(trip);
      } else if (endDate < today && trip.status === 'approved') {
        this.past.push(trip);
      } else if (trip.status === 'pending') {
        this.pending.push(trip)
      }
    })
  }

  evaluateDateEntry(date) {

    return (!this.todaysDate === date ? false : true)
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
    return byYear.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

}
export default Traveler;
