import React from 'react';
import GoreSir from './GoreSir.jpeg';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './about.css';

class About extends React.Component
{
	render()
	{
		return(
			<div>
				<div className="prof">
					<Link className="p" to="/Portal" target="_blank">
						<img className="img" src={GoreSir}/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<center>
							Prof. M.M.Gore<br/>
							MNNIT ALLAHABAD<br/>
							<i>	gore@mnnit.ac.in</i><br/>
							+91-xxx-xxxxxxx 
						</center>
					</Link>
				</div>
				<div id="about">
					<h1>About us</h1>
					<p id="content"><br/>
						This website is created under the guidance of Prof. M.M. Gore by the student
						of MCA 5<sup>th</sup> Semester to check the typing speed of a user.<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;
						-Thank You!
					</p>
				</div>
				<br/><br/><br/><br/><br/><br/><br/>
			</div>
		);
	}
}

export default About;