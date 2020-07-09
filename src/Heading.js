import React from "react";

import "./Heading.css";

const Heading = () => {

	return (
		<>
			<h2 className="bg-0a3a6b text-white p-1 text-center" >
				Near Earth Objects Tracker
			</h2>
			<small className="float-right" >
				Using NASA NeoWs API
				<img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" 
					width="40" height="40" alt="Nasa logo" />
			</small>
		</>
	);
}

export default Heading;