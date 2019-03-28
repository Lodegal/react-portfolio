import React, { Component } from 'react';
import './Overlay.css'
import classNames from "classnames";

export default class Overlay extends Component {
	onClick = () => {
		this.props.handleClick();
	};

	render() {
		return (
				<div onClick={this.onClick} className={classNames('overlay', {'-active' : this.props.openMenu})}></div>
		);
	}
}