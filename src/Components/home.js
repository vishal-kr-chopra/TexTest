import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './home.css';

const Home = () =>
{
	return(
			<div>
				<div id="home">
					<h1>Welcome to TexTest</h1>
					<p id="content">
						This website offers you the environment to test your<br/>
						typing speed for LaTeX Code. You can choose your<br/>
						own TEX file to practice. Result will be calculated and<br/>
						displayed according to your performance, in Words<br/>
						Per Minute(WPM) along with Keystrokes and Accuracy<br/>
						percentage.
					</p>
				</div>
				<p id="login">
					<Link className='link' to='/Testing'>Get Started</Link>
				</p>
				<br/><br/><br/><br/><br/><br/><br/>
			</div>
		);
}

export default Home;