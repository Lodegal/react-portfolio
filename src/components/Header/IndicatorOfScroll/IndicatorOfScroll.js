import React, { Component } from 'react';

export default class IndicatorOfScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolled: 0
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollProgress);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollProgress);
	}

	scrollProgress = () => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
		const scrolled = `${scrollPx / winHeightPx * 100}%`;

		console.log(scrolled);

		this.setState({
			scrolled: scrolled
		});
	};

	render() {
		const progressContainerStyle = {
			background: "transparent",
			boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
			height: "5px",
			width: "100vw",
			position: 'absolute',
			bottom: '-5px',
			left: '0'
		};

		const progressBarStyle = {
			height: "5px",
			background: "#ffc107",
			opacity: '0.7',
			width: this.state.scrolled
		};

		return (
				<div className="progress-container" style={progressContainerStyle}>
					<div className="progress-bar" style={progressBarStyle} />
				</div>
		);
	}
}

