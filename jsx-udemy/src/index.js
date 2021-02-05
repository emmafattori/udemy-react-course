import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../src/im-poor-img.gif'

const App = function(){
	return (
		<div>
			<img src={logo} alt=""/>
			<h1>Help Me I'm Poor</h1>
			<h3>Welcome to the last budgeting app you'll ever need</h3>
		</div>
	);
};

ReactDOM.render(
//   <React.StrictMode>
    <App />, 
	document.querySelector('#root')
//   </React.StrictMode>,
  
);
