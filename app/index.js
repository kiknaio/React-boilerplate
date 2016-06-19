import ReactDOM from 'react-dom';
import React from 'react';
// const React = require('react');
// const ReactDOM = require('react-dom');


class HelloMessage extends React.Component {
	render () {
		return (
			<div>
				<h1> Hello React </h1>
				<h3> Made by {this.props.name} </h3>
			</div>
		);
	}
}

ReactDOM.render(
	<HelloMessage name='George Kiknadze' />,
	document.getElementById('app')
);
