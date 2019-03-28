import React, { Component } from 'react';
import Particles from "react-particles-js";
import About_block from './About_block/About_block';
import content from './About_block/Content';
import Skills from './About_block/Skills/Skills';
import Intro from './About_block/Intro/Intro';
import Footer from '../components/Footer/Footer.js'
import './About.css'

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
const intro = [{'title': 'intro','description': 'What I am all about.','text': <Intro />}];
const skills = [{'title': 'SKILLS','description': 'Progress bars, anyone?','text': <Skills />}];

export default class About extends Component {
	render() {
		return (
				<section className='section-about'>
					<Particles style={style} params={particlesConfig}/>
					<h2 className='h2 -mb-50 text-center'>ABOUT ME</h2>
					<About_block content={intro[0]}/>
					<About_block content={content[0]}/>
					<About_block content={skills[0]} />
					<About_block content={content[1]}/>
					<About_block content={content[2]}/>
					<About_block content={content[3]}/>
					<Footer />
				</section>
		);
	}
}
