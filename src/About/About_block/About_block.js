import React, { Component } from 'react';
import './About_block.css'

export default class About_block extends Component {
	render() {
	const {content} = this.props;
		return (
			<div className='-mb-15'>
				<div className='about_block'>
					<div className="block__background"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h5 className='h5 about_block__title'>{content.title}</h5>
								<span className='about_block__description'>{content.description}</span>
							</div>
							<div className="col-md-6">
								<div className='about_block__text'>{content.text}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
