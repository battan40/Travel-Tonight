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
  }

}

export default Trip;
