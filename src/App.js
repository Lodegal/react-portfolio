import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './Home/Home';
import About from './About/About';
import Overlay from './components/Overlay/Overlay';
import Portfolio from './Portfolio/Portfolio';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false
		}
	}
	handleClick = () => {
		this.setState({openMenu : !this.state.openMenu})
	};
	render() {
    return (
       <Router>
					 <ScrollLock isActive={this.state.openMenu} />
           <Header handleClick={this.handleClick} openMenu={this.state.openMenu}/>
           <Menu  handleClick={this.handleClick} openMenu={this.state.openMenu}/>
           <Overlay handleClick={this.handleClick} openMenu={this.state.openMenu} />
           <Route exact path="/" component={Home} />
           <Route path="/About" component={About} />
           <Route path="/Portfolio" component={Portfolio} />
       </Router>
    );
  }
}
