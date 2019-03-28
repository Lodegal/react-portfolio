import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Menu.css';
import classNames from "classnames";

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			closeMenu : true
		}
	}

	onClick = () => {
		this.props.handleClick();
	};

	render() {
		return (
				<div className={classNames('menu', {'-active' : this.props.openMenu})}>
					<ul>
						<li className='menu__item'>
							<Link className='menu__item-link' Link to='/' onClick={this.onClick}>Home</Link>
						</li>
						<li className='menu__item'>
							<Link className='menu__item-link' to='/About' onClick={this.onClick}>About</Link>
						</li>
						<li className='menu__item'>
							<Link className='menu__item-link' to='/Portfolio' onClick={this.onClick}>Portfolio</Link>
						</li>
					</ul>
				</div>
		);
	}
}