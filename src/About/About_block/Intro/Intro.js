import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Intro extends Component {
	render() {
		return (
				<div className='intro-content'>
					<p>Hello everyone who came to my site. My name is Alexandr Butsaiev. I am 26 years old. I live in Kharkov, Ukraine. At a certain point in my life, I was interested IT technologies. I chose the specialty of a Frontend developer, as it requires some creative abilities and deep practical training in web programming. On this page will be information about my skills. If you want to see examples of my work, go to the <Link className="content--link" to='/Portfolio'>Projects</Link>.</p>
					<p>You can also download my <Link className="content--link" to='#'>resume</Link>.</p>
				</div>
		);
	}
}
