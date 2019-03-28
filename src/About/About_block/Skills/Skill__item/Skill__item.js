import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import './Skill__item.css';
import { Waypoint } from 'react-waypoint';

export default class Skill__item extends Component {
	constructor() {
		super();
		this.state = {
			percent: 0,
		};
		this.increase = this.increase.bind(this);
	}


	increase() {
		const percent = this.state.percent + 1;
		if (percent >= this.props.value) {
			clearTimeout(this.tm);
			return;
		}
		this.setState({ percent });
		this.tm = setTimeout(this.increase, 10);
	}

	render() {
		return (
				<div className='skill__item'>
					<Waypoint
							onEnter={this.increase}
					/>
					<h5 className='h5 skill__item-title'>{this.props.title}<span>{this.state.percent}%</span></h5>
					<Line
							className='skill__item-line'
							strokeWidth="2"
							trailWidth="2"
							percent={this.state.percent}
							strokeColor='#ffc107'
							trailColor='#a6a6a6'
					/>
				</div>
		);
	}
}
