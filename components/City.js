
class City {
	constructor(cityName, latitude, longitude, population, cityID) {
		this.cityName = cityName;
		this.latitude = latitude;
		this.longitude = longitude;
		this.population = population;
		this.cityID = cityID;
		// console.log("The city name: ", cityName, "latitude: ", latitude, "longitude: ", longitude, "population: ", population, "city ID: ", cityID);
	}

	show() {
		return `cityName: ${this.cityName} latitude: ${this.latitude} longitude: ${this.longitude} population: ${this.population}`;
	}

	movedIn(people) {
		this.population += people;
	}

	movedOut(people) {
		this.population -= people;
	}

	populationReturn() {
		return this.population;
	}

	howBig() {
		let x= this.population;

		if (x > 100000){
			return "city";
		} else if (x > 20000 && x < 100000) {
			return "large Town";
		} else if (x > 1000 && x < 20000) {
			return "town";
		} else if (x > 100 && x < 1000) {
			return "village";
		} else if (x > 1 && x < 100) {
			return "hamlet";
		} else {
			return null;
		}
	}
}

export default City;
