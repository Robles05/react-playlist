import React from "react";
import ReactDOM from "react-dom";


//Create component
const Welcome = function(props) {
  return (
  	<div>
  		<h1>Hello, {props.name}</h1>
  		<p>What's going on guys?</p>
	</div>
	)
}

//put component into HTML page
ReactDOM.render(<Welcome name="George" />, document.getElementById('todo-wrapper'))
