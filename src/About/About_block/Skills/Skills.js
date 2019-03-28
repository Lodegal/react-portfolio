import React, { Component } from 'react';
import Skill__item from './Skill__item/Skill__item'
import './Skills.css'

export default class Skills extends Component {
	render() {
		return (
				<div className='skills'>
					<Skill__item value='87' title='HTML'/>
					<Skill__item value='85' title='CSS'/>
					<Skill__item value='65' title='JavaScript'/>
					<Skill__item value='75' title='Jquery'/>
				</div>
		);
	}
}
