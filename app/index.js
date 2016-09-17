import ReactDOM from 'react-dom';
import React from 'react';
import SayName from './components/sayname.js';


export default class App extends React.Component {
	render () {
		return (
			<div>
				<h1>React boilerplate</h1>
				<SayName />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
