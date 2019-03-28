import React, { Component } from 'react';
import './Content.css'
import {Link} from "react-router-dom";

export default class Content extends Component {
	render() {
		return (
				<div className='section-home__content'>
					<h1 className='h1'>ALEXANDR <span>BUTSAIEV</span></h1>
					<h2 className='h2 -mb-50 -h2-gray'>Front-end web developer</h2>
					<Link className='section-home__content-link' to='/About'>
						<div className='section-home__content-spin'></div>
						<div className='section-home__content-linkname'>About</div>
					</Link>
				</div>
		);
	}
}