 import City from "./City.js";

class Community {
	constructor() {
		this.community = [];
		this.counter = 0;
	}

	createCity() {
		//Create City from cityName, latitude, longitude, population, and cityID
        
		console.log("The Array for the city is ", myCity);
		
	}

	deleteCity() {
		//Delete the city using cityID
		
	}

	findCityIndex() {
		//Use findIndex to find a city by its cityID
	
	}
	
	getPopulation() {
		let populationTotal = this.community.reduce((accumulator, currentValue) =>
			accumulator + currentValue.population, 0);
		console.log("The total population is: ", populationTotal);
		return populationTotal;
	}

	whichSphere(cityID) {
		let x = this.findCityIndex(cityID);

		if (this.community[x].latitude > 0) {
			return "North";
		} else if (this.community[x].latitude < 0) {
			return "South";
		} else {
			return "in the middel";
		}
	}

	getMostNorthern() {
		if (this.community.length > 0) {
			const highest = this.community.reduce((city1, city2) => 
				(city1.latitude > city2.latitude) ? city1 : city2);
			return highest;
			} else {
			return "There is no highest city";
		}
	}

	getMostSouthern() {
		if (this.community.length >= 1) { 
			const lowest = this.community.reduce((city1, city2) => 
				(city1.latitude < city2.latitude) ? city1 : city2);
			return lowest;
		} else {
			return "There is no lowest city";
		}
	}
}

export default Community;