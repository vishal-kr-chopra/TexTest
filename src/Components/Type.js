import React from 'react';
import './Type.css';

//Function to define Component Type
const type = (props) =>
{
	return (
		<div className="frame">
			<div className="type">
	            {/*TextArea to print data*/}
				<div id="display" disabled><pre>{props.content}</pre></div>
			</div>
			<div className="type">
	            {/*TextArea to type data*/}
				<textarea id="test" onChange={props.changed} cols="40" rows="5"></textarea>
			</div>
			<br/><br/><br/><br/><br/><br/><br/>
		</div>
	);
}

export{
	type as Type
}