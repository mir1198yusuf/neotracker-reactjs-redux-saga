import React from "react";

import "./NEOCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Modal} from "react-bootstrap";

class NEOCard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			showNEODetailModal : false
		};
	}

	toggleNEODetailModal = () => {
		this.setState({showNEODetailModal : !this.state.showNEODetailModal});
	}

	render(){

		let neo_props = this.props.neo;
		let neo_object = {
			name : this.props.neo.name,
			id : this.props.neo.id,
			close_approach_date : neo_props.close_approach_data["0"].close_approach_date,
			close_approach_date_full : neo_props.close_approach_data["0"].close_approach_date_full,
			relative_velocity_kmph : parseFloat(neo_props.close_approach_data["0"].relative_velocity.kilometers_per_hour).toFixed(2),
			relative_velocity_kmps : parseFloat(neo_props.close_approach_data["0"].relative_velocity.kilometers_per_second).toFixed(2),
			miss_distance_kms : parseFloat(neo_props.close_approach_data["0"].miss_distance.kilometers).toFixed(2),
			miss_distance_au : parseFloat(neo_props.close_approach_data["0"].miss_distance.astronomical).toFixed(3),
			miss_distance_lunar : parseFloat(neo_props.close_approach_data["0"].miss_distance.lunar).toFixed(0),
			diameter_max_kms : parseFloat(neo_props.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2),
			diameter_min_kms : parseFloat(neo_props.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2),
			potential_hazardous : neo_props.is_potentially_hazardous_asteroid,
			first_observation_date : neo_props.orbital_data.first_observation_date,
			orbital_period : parseFloat(neo_props.orbital_data.orbital_period).toFixed(0),
			orbit_class_type : (neo_props.orbital_data.orbit_class) ? (neo_props.orbital_data.orbit_class.orbit_class_type) : null,
			orbit_class_description : (neo_props.orbital_data.orbit_class) ? (neo_props.orbital_data.orbit_class.orbit_class_description) : null,
			nasa_jpl_url : neo_props.nasa_jpl_url,
		};


		return (
			<>
				<div className="col-lg-6 inline-block">
					<div className="card mt-2 mb-2 border bg-fff0fa">
						<div className="card-body">
							<h5 className="card-title text-primary">
								Asteroid {neo_object.name}
							</h5>
							<p className="card-text">
								NEO Ref. ID : <span className="text-6d0000">{neo_object.id}</span>
							</p>
							<p className="card-text">
								Relative velocity : <span className="text-6d0000">{neo_object.relative_velocity_kmph} kmph</span>
							</p>
							<p className="card-text">
								Earth miss distance : <span className="text-6d0000">{neo_object.miss_distance_kms} kms OR {neo_object.miss_distance_lunar} LD **</span>
							</p>
							<p className="card-text">
								Estimated diameter : <span className="text-6d0000">{neo_object.diameter_min_kms} - {neo_object.diameter_max_kms} kms</span>
							</p>
							<p className="card-text">
								Is potential hazardous : <span className="text-6d0000">{(neo_object.potential_hazardous) ? "Yes" : "No"}</span> 
							</p>
							<button className="btn btn-sm btn-primary mt-2 stretched-link"
								onClick={this.toggleNEODetailModal}	>
								More info
							</button>
						</div>
					</div>
				</div>

				{/* NEO detail modal */}
				<Modal show={this.state.showNEODetailModal}
					onHide={this.toggleNEODetailModal}	>
					<Modal.Header closeButton>
						<Modal.Title className="text-primary">
							Asteroid {neo_object.name}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							NEO Reference ID : <span className="text-6d0000">{neo_object.id}</span>
						</p>
						<p>
							Relative velocity kms per hour: <span className="text-6d0000">{neo_object.relative_velocity_kmph}</span>
						</p>
						<p>
							Relative velocity kms per second: <span className="text-6d0000">{neo_object.relative_velocity_kmps}</span>
						</p>
						<p>
							Earth miss distance kms: <span className="text-6d0000">{neo_object.miss_distance_kms}</span>
						</p>
						<p>
							Earth miss distance lunar distance: <span className="text-6d0000">{neo_object.miss_distance_lunar}</span>
						</p>
						<p>
							Earth miss distance AU : <span className="text-6d0000">{neo_object.miss_distance_au} **</span>
						</p>
						<p>
							Estimated diameter : <span className="text-6d0000">{neo_object.diameter_min_kms} - {neo_object.diameter_max_kms} kms</span>
						</p>
						<p>
							Is potential hazardous : <span className="text-6d0000">{(neo_object.potential_hazardous) ? "Yes" : "No"}</span> 
						</p>
						<p>
							Earth closest approach date : <span className="text-6d0000">{neo_object.close_approach_date}</span> 
						</p>
						<p>
							Earth closest approach date full : <span className="text-6d0000">{neo_object.close_approach_date_full}</span> 
						</p>
						<p>
							First observation date : <span className="text-6d0000">{neo_object.first_observation_date}</span> 
						</p>
						<p>
							Orbital period : <span className="text-6d0000">{neo_object.orbital_period} days</span> 
						</p>
						<p>
							Orbit class type : <span className="text-6d0000">{neo_object.orbit_class_type}</span> 
						</p>
						<p>
							Orbit class description : <span className="text-6d0000">{neo_object.orbit_class_description}</span> 
						</p>
						<p>
							More info by NASA JPL : <a href={neo_object.nasa_jpl_url} >nasa_jpl</a> 
						</p>
					</Modal.Body>
					<Modal.Footer>
						Using NASA NeoWs API
						<img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" 
							width="45" height="45" alt="Nasa logo" />
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default NEOCard;