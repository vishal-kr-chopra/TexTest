import React from 'react' ;
import './Person.css';

const person = (props) => {
	return (
		<div onClick={props.click} className='person'>
			<p>{props.name}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	);
};

export default person ;