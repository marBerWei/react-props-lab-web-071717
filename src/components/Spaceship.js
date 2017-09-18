// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component { 
	render(){
		return (
		<div className="Spaceship">
			<h2>{this.props.name}</h2>
    		<h2>{this.props.speed}</h2>
        	<h2>{this.props.title}</h2>
        	<h2>{this.props.colors}</h2>
        	<h2>{this.props.hasRockets}</h2>
      	</div>
      	)
	}
};

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: `['black', 'red']`
}



