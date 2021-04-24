class Traveler {
  constructor(travelerData, today) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.present = [];
    this.upcoming = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = today.getTime();
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

  orderByDate() {
      this.allTrips.forEach(trip => {
        console.log(trip)
      let beginDate = trip.startDate;
      let endDate = trip.endDate;
      let today = this.todaysDate
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

  calculateTripMoneySpentInYear() {
    let pastYearTrips = this.allTrips.filter(trip => {
      trip.seekTripDuration();
      let begOfYear = new Date(this.todaysDate).setDate(new Date(this.todaysDate).getDate() - 365);
      if(trip.StartDate > begOfYear) {
        return trip;
        }
    const byYear = pastYearTrips.reduce((moneySpent, trip) => {
      trip.calculateTripCostEstimate();
      moneySpent += trip.cost;
    }, 0)
    return moneySpent;
    })
  }
}
export default Traveler;
