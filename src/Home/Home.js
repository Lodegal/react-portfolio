import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Photo from './Photo/Photo';
import Content from './Content/Content';
import './Home.css';

const particlesConfig = {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800
			}
		},
		"color": {
			"value": "#404040"
		},
		"line_linked": {
			"color": "#404040",
		}
	}
};
const style = {'position' : 'fixed', 'z-index' : '-1','top' : '0', 'left' : '0'};

export default class Home extends Component {
	render() {
		return (
				<div>
					<Particles style={style} params={particlesConfig}/>
					<section className='section-home'>
						<div className="container">
							<div className="row">
								<div className="col-12 col-sm-4 col-lg-3">
									<Photo />
								</div>
								<div className="col-12 col-sm-8 col-lg-9">
									<Content />
								</div>
							</div>
						</div>
					</section>
				</div>
		);
	}
}
