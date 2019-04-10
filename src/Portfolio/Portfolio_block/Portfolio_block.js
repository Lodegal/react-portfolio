import React, { Component } from 'react';
import './Portfolio_block.css';
import '../../About/About_block/About_block.css';

export default class Portfolio_block extends Component {
	render() {
		const {content} = this.props;
		return (
				<div className='-mb-15'>
					<div className='portfolio_block'>
						<div className="block__background"></div>
						<div className="container">
							<div className="row">
								<div className="col-md-7">
									<a href={content.url} className="portfolio_block__photo">
										<span style={{backgroundImage: `url(${this.props.img})`}}></span>
									</a>
								</div>
								<div className="col-md-5">
									<div className="portfolio_block__content">
										<h3 class="h3 portfolio_block__title">{content.title}</h3>
										<p>{content.text}</p>
										<div className='link--position'>
											<a className="content--link" href={content.url}>{content.link}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
