import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import IndicatorOfScroll from './IndicatorOfScroll/IndicatorOfScroll'

export default class Header extends Component {
	onClick = () =>{
		this.props.handleClick();
	};
	render() {
		return (
				<header className='header'>
					<div className='header__top'>
						<div className='logo'>
							<Link className='logo__link' Link to='/'>Home</Link>
						</div>
						<div onClick={this.onClick} id="menu-btn" className={this.props.openMenu ? 'open' : null}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<IndicatorOfScroll/>
				</header>
		);
	}

}
