class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.pending = [];
  }

}
export default Traveler;
