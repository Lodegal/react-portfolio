import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Portfolio_block from './Portfolio_block/Portfolio_block';
import Footer from "../components/Footer/Footer";
import '../components/Footer/Footer.css';
import './Portfolio.css';

// Images
import content from './Portfolio_block/Content';
import barber from '../img/projects/Barber.png'
import awax from '../img/projects/Awax.png'
import tajam from '../img/projects/tajam.png'
import idea from '../img/projects/Idea.png'

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

export default class Portfolio extends Component {
	render() {
		return (
				<section className='section-portfolio'>
					<Particles style={style} params={particlesConfig}/>
					<h2 className='h2 -mb-50 text-center'>PORTFOLIO</h2>
					<Portfolio_block img={barber} content={content[0]}/>
					<Portfolio_block img={awax} content={content[1]}/>
					<Portfolio_block img={tajam} content={content[2]}/>
					<Portfolio_block img={idea} content={content[3]}/>
					<Footer />
				</section>
		);
	}
}
