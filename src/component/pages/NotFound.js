import React from 'react';
import {NavLink} from 'react-router-dom';


const NotFound = () => (
	<div className="notFound text-center">
		<h3>No Page Found !!</h3>
		<NavLink to="/" className="boxed-btn">Back to Home</NavLink>
	</div>
);

export default NotFound;