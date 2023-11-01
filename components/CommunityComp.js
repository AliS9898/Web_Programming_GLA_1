import React, {Component} from 'react';
import City from "./City.js";
import Community from "./Community.js";
import ReactDOM from 'react-dom';
import trash from './trash.png';
import edit from "./edit.png";
import './City.css';


class CommunityComp extends Component {
	constructor(props) {
		 super(props); 
		 this.state = {
		 	cityController: new Community(),
		 	displayEditCity: , //displayEditCity should be set to true or false?
		 	whichCity: "",
		 }
	}

	componentDidMount() {
		//What to do to make sure that componentDidMount?
		console.log("Component did mount");
	}

	createNewCity = () => {
		//Use this to create a new city
		}

	removeCity = (cityID) => {
		//Use this to remove a city
	}

	showEditCity = (cityID) => {

		let x = this.cityController.findCityIndex(cityID);
		this.setState({cityController: this.cityController});
		this.setState({whichCity: this.state.cityController.community[x]});
		this.setState({displayEditCity: true})
	}

	getPopulationTotal = () => {
		let sum = this.cityController.getPopulation();
		console.log("The total of the population is: ", sum);
		return sum;
		console.log("The total of the whole population is: ", sum );
	}

	peopleMovedOut = (cityID) => {
		let a= this.state.whichCity.cityID;
    	let x = Number(document.getElementById("inputValue").value);
    	console.log("The number of people moved out city: ", x);
    	this.cityController.community[a].movedOut(x);
    	this.setState({cityController: this.cityController});
    }

    peopleMovedIn = (cityID) => {
    	let a= this.state.whichCity.cityID;
    	let x = Number(document.getElementById("inputValue").value);
    	console.log("The number of moved in city: ", x);
    	this.cityController.community[a].movedIn(x);
    	this.setState({cityController: this.cityController});
    }
 
	handleChange = (event) => {
		const {name , value} = event.target;
		this.setState({[name]: value});
	}

	render(){ 			 
		const list = this.state.cityController.community.map((a , b) => {
			return (
				<tr key = {b} >
				<td>{this.state.cityController.community[b].cityName}</td>
				<td>{this.state.cityController.community[b].latitude}</td>
				<td>{this.state.cityController.community[b].longitude}</td>
				<td>{this.state.cityController.community[b].population}</td>
				<td>{this.state.cityController.community[b].cityID}</td>
				<td><button>
                <img src={trash} 
                      id = 'remove' 
                      alt= "remove" 
                      className = "Open_Book" 
                      name = 'remove' 
                      onClick = {(cityID) => this.removeCity(this.state.cityController.community[b].cityID)} /> 
                </button>&nbsp;&nbsp;
                </td>
                <td><button>   
                <img src={edit} 
                      id = 'edit' 
                      alt= "edit" 
                      className = "Open_Book" 
                      name = 'edit' 
                      onClick = {(cityID) => this.showEditCity(this.state.cityController.community[b].cityID)} /> 
                </button>
            	</td>
				</tr>
				);
		})

		return (
			<div id = "background">
			
			<h1>Hello, from Community!</h1>
			<br /><br /> 
			{/* Make sure that whatever the user enters will be displayed in the line below */}
			<h2>The Population Total is:  People, 
			The Northen City is: , 
			The Southern City is: </h2>
			<table align="center">
			<tbody>
			<tr>
			<td>CityName</td>
			<td>Latitude</td>
			<td>Longitude</td>
			<td>Population</td>
			</tr>
			<td><input 
            	id = 'inputCityName'
                type = 'text' 
                placeholder = 'CityName' 
                name = 'inputCityName' 
                onChange = {}
            /></td>
            <td><input   
            	id = 'inputLatitude'
                type = 'number' 
                placeholder = 'Latitude' 
                name = 'inputLatitude' 
                onChange = {}
            /></td>
         	<td><input  
            	id = 'inputLongitude'
                type = 'number' 
                placeholder = 'Longitude' 
                name = 'inputLongitude' 
                onChange = {}
            /></td>
        	<td><input  
            	id = 'inputPopulation'
                type = 'number' 
                placeholder = 'Population' 
                name = 'inputPopulation' 
                onChange = {}
            /></td>
         	<td><button type = 'button' 
            	id = 'okAddNewCity'
            	onClick ={} > Submit 
            </button></td>
            	{list} 
            </tbody>	
			</table>
            <br /><br />
            <div>
			<br /><br />
			</div>
			</div> 
			);
	}
}

export default CommunityComp;
