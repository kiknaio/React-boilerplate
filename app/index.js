import ReactDOM from 'react-dom';
import React from 'react';
import CustomComponent from './components/custom-component.js';


export default class App extends React.Component {
	render () {
		return (
			<div>
				<h1>React boilerplate</h1>
				<CustomComponent />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
