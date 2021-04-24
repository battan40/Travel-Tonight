class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destination = destinationData;
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

  calculateTripCostEstimate() {
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelerCount
    const lodgeCost = this.destination.estimatedLodgingCostPerDay * this.duration
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
