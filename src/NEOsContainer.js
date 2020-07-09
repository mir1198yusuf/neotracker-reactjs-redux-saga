import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./NEOsContainer.css";

import NEOCard from "./NEOCard.js";

import {connect} from "react-redux";

class NEOsContainer extends React.Component{


	render(){		
		let data = (this.props.neosDetail.near_earth_objects) ? this.props.neosDetail.near_earth_objects[this.props.selectedDate] : null;
		let neosCountText = (data) ? `${this.props.neosDetail.element_count} NEOs found` : null;
		return (
			<>
				{(data) ? (data.map(el => (<NEOCard key={el.name} neo={el} />))) : null}
				<p className="text-center text-darkgreen">
					<i>{neosCountText}</i>
				</p>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		neosDetail : state.neosDetail,
		selectedDate : state.date,
	}
}

const NEOsContainerLogic = connect(mapStateToProps, null) (NEOsContainer);

export default NEOsContainerLogic;