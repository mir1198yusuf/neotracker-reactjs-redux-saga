import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from "./Heading.js";
import DateContainer from "./DateContainer.js";
import InfoPanel from "./InfoPanel.js";
import NEOsContainer from "./NEOsContainer.js";

import Loader from "react-loader-advanced";

import {connect} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {fetchNEOsSaga} from "./actioncreators.js";

class App extends React.Component {

    componentDidMount(){
        this.props.initForToday();
    }

    render(){

        const loadingSpinner = (
            <span>
                <span className="font-weight-bolder text-0a3a6b">FETCHING NEOs LIST FROM NASA API </span>
                <span className="spinner-grow spinner-grow-sm text-0a3a6b"></span>
            </span>

            );

        return (

            <div className="container">
                <div className="row" >
                    <div className="col" >
                        <Heading />
                    </div>
                </div>
                <div className="row" >
                    <div className="col">
                        <DateContainer />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InfoPanel />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Loader show={this.props.isFetching} 
                            message={loadingSpinner}
                            backgroundStyle={{backgroundColor : "#f5f5f580"}}
                            foregroundStyle={{color : "black"}}
                            messageStyle={{verticalAlign : "top"}}    >
                            <NEOsContainer />
                        </Loader>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching : state.isFetchingNEOs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initForToday : () => dispatch(fetchNEOsSaga(todayDate())),
    }
}

const todayDate = () => {
    // get today date - YYYY MM DD
    let dateObj = new Date();
    let year, month, date;
    year = dateObj.getFullYear().toString();
    month = (dateObj.getMonth() + 1).toString();
    date = dateObj.getDate().toString();

    //prepend 0 to month,date if length is 1
    month = (month.length===1) ? (0+month) : month;
    date = (date.length===1) ? (0+date) : date;

    //format : YYYY-MM-DD
    return `${year}-${month}-${date}`;

}

const AppLogic = connect(mapStateToProps, mapDispatchToProps) (App);

export default AppLogic;