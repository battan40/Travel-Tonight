class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelerCount = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.cost = 0
    this.startDate;
    this.endDate;
  }

  confirmTrip() {
  return (!this.status === 'approved' || !this.status === 'pending' ? false : true)
}

  calculateTripCostEstimate(destinationData) {
    const findTrip = destinationData.find(location => this.destinationID === location.id)
    const flightCost = findTrip.estimatedFlightCostPerPerson * this.travelerCount
    const lodgeCost = findTrip.estimatedLodgingCostPerDay * this.duration
    const subTotal = flightCost + lodgeCost
    const totalEstimatedCost = subTotal + (subTotal * .10)
    this.cost = totalEstimatedCost;
      return this.cost;
  }

  seekTripDuration() {
    let beginTrip = new Date(this.date)
    let endTrip = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration)
    this.startDate = beginTrip.getTime();
    this.EndDate = endTrip;
  }

}

export default Trip;
