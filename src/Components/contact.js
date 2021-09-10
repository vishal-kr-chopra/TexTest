import React from 'react';
import GoreSir from './vishal.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './about.css';
import './contact.css'

class About extends React.Component
{
	render()
	{
		return(
			<div>
				<div className="prof">
					<Link className="p" to="/Profile" target="_blank">
						<img className="img" src={GoreSir}/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<center>
							Vishal Kumar Chopra<br/>
						</center>
					</Link>
				</div>
				<div id="about">
					<h1>About author</h1>
					<br/>
						I am a student of MNNIT Allahabad, MCA, 5<sup>th</sup> semester. I am an enthusiastic computer science student keen to learn more things. This project is done by me. My sole motive behind this project is to target the students of MNNIT to keep track of typing speeed and to practice on the platform and increase the typing speed.<br/><br/>
						Feel free to give any suggestions or feedback.<br/>
						<i>vishal.mca.mnnit@gmail.com</i><br/>
						+91-9984739757 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;
						-Thank You!
				</div>
				<br/><br/><br/><br/><br/><br/><br/>
			</div>
		);
	}
}

export default About;