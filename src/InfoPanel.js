import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./InfoPanel.css";

import {connect} from "react-redux";

const InfoPanel = (props) => {

	let errorText = (props.errorFetchingNEOs) ? "Error fetching NEO list" : null;
	let hideDisplay = (props.errorFetchingNEOs) ? null : "display-none";

	return (
		<>
			<h6 className="bg-fbf7c5a6 p-3 font-pt9rem">
				The following are the list of Near Earth Objects (NEOs) - Asteroids which are having their closest approach to Earth on the selected date.
			</h6>
			<p className="text-6d0000 font-pt9rem">
				<i>** One LD means lunar distance, that is, distance between Earth and Moon - approx 384,400 kms or 1.3 light seconds</i> 
				<br/>
				<i>** One AU means astronomical unit, that is, distance between Earth and Sun - approx 150 million kms or 8 light minutes</i> 
			</p>
			<div className={"text-center alert alert-danger " + hideDisplay}>
				{errorText}
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return {
		errorFetchingNEOs : state.errorFetchNEOS,
	}
}

const InfoPanelLogic = connect(mapStateToProps, null) (InfoPanel);

export default InfoPanelLogic;