import React from "react";

import "./DateContainer.css";

import {Modal} from "react-bootstrap";

import {fetchNEOsSaga} from "./actioncreators.js";

import {connect} from "react-redux";

class DateContainer extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			showChangeDateModal : false,
			dateInput : ""
		};
	}

	toggleChangeDateModal = () => {
		this.setState({showChangeDateModal : !this.state.showChangeDateModal});
	}

	onInputChange = (ev) => {
		this.setState({[ev.target.name] : ev.target.value});
	}

	updateSelectedDate = () => {
		// do not update if date not selected
		if (this.state.dateInput){
			this.props.onDateChange(this.state.dateInput);
			this.toggleChangeDateModal();
		}
	}

	formatDate = (date,month,year) => {

		let monthString;
		switch(month){
			case "01" : monthString = "January"; break;
			case "02" : monthString = "February"; break;
			case "03" : monthString = "March"; break;
			case "04" : monthString = "April"; break;
			case "05" : monthString = "May"; break;
			case "06" : monthString = "June"; break;
			case "07" : monthString = "July"; break;
			case "08" : monthString = "August"; break;
			case "09" : monthString = "September"; break;
			case "10" : monthString = "October"; break;
			case "11" : monthString = "November"; break;
			case "12" : monthString = "December"; break;
			default : monthString = null; 

		}

		return `${monthString} ${date}, ${year}`;
	}

	render(){
		let propsDate = this.props.selectedDate;
		let selectedDate;
		if (propsDate){
			selectedDate = this.formatDate(propsDate.slice(8), propsDate.slice(5,7), propsDate.slice(0,4)	);
		}

		return (

			<>
				<h4 className="text-darkgreen inline-block" >
					<strong>{selectedDate}</strong>
				</h4>
				<button className="btn btn-sm btn-link inline-block float-right"
					onClick={this.toggleChangeDateModal}	>
					Change Date
				</button>

				{/* change date modal */}
				<Modal show={this.state.showChangeDateModal} 
					onHide={this.toggleChangeDateModal}	>
					<Modal.Header closeButton>
						<Modal.Title>Choose Date</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input type="date" 
							className="form-control"
							name="dateInput"
							value={this.state.dateInput}
							onChange={this.onInputChange}	 />
					</Modal.Body>
					<Modal.Footer>
						<button className="btn"
							onClick={this.updateSelectedDate}	>
							Update
						</button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDateChange : date => dispatch(fetchNEOsSaga(date)),
	}
}

const mapStateToProps = state => {
	return {
		selectedDate : state.date,
	}
}

const DateContainerLogic = connect(mapStateToProps, mapDispatchToProps) (DateContainer);

export default DateContainerLogic;