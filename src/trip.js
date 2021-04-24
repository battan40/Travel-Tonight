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

  }

  calculateTripCostEstimate() {
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelerCount
    const lodgeCost = this.destination.estimatedLodgingCostPerDay * this.duration
    const subTotal = flightCost + lodgeCost
    const totalEstimatedCost = subTotal + (subTotal * .10)
    this.cost = totalEstimatedCost;
      return this.cost;
  }

}

export default Trip;
