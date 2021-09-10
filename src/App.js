import React from 'react';
import logo from './logo.png';
import {Type} from './Components/Type';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

//x   : for time intervals
//err : to display logs side by side
let x, z = "";
let count = 0 ;                        //for storing count of matching character

//Main class, contains everthing
class App extends React.Component
{
  //defining required states.
  state = {
    data:'This is sample code.',    //for storing file's data
  };

	
  //Function to read File
  fileFunc = (e) =>
  {
    //getting files from the event Listener
    let file = e.target.files ;

    let read = new FileReader();
    //reading first file out of all files
    read.readAsText(file[0]);

    //after read
    read.onload = (e) =>
    {
      //inserting file data into our data
      this.setState({data:e.target.result});
      //displaying file data on screen
      document.getElementById('display').innerHTML = "<pre>" +  this.state.data +"</pre>" ;
    }
  }

  //Function to handle each input
  inputHandler = (e) =>
  {
    //storing the length of data
    var d = new Date();            //storing date
    var curr = e.target.value;     // storing current input
    var n = e.target.value.length; // finding current input's length
    var ch = this.state.data;      //storing our data
    //on first input
    //->starting timer
    if(n==1)
    {
      document.getElementById('file').style.opacity = 0 ;
      document.getElementById('test').style.opacity = 0;
      var m = 0 ; //storing minutes
      var s = 0 ; //storing seconds

      //setting interval for timer
      clearInterval(x);
      x = setInterval(function(){
         s++;
        //printing timer
        if(s==60)
        {
          s = 0;
          m++;
        }
        if((m >= 0 && m <= 9 ) && (s >= 0 && s <= 9 ))
        { 
          document.getElementById('mm').innerHTML = '0'+m ;
          document.getElementById('ss').innerHTML = '0'+s ;
        }
        else if(m >= 0 && m <= 9 )
        { 
          document.getElementById('mm').innerHTML = '0'+m ;
          document.getElementById('ss').innerHTML = s ;
        }
        else if(s >= 0 && s <= 9 )
        { 
          document.getElementById('mm').innerHTML = m ;
          document.getElementById('ss').innerHTML = '0'+s ;
        }
        else
        {
          document.getElementById('mm').innerHTML = m ;
          document.getElementById('ss').innerHTML = s ;
        }
      },1000);
    }

    //if input character is required character
    if (ch[n-1] === curr[n-1])
    {
      //storing incremented count of characters
      let y = ch.charAt(n-1)
      z += y.fontcolor('green');
      let res = z + ch.substr(n,ch.length)
      document.getElementById('display').innerHTML = "<pre>" + res+"</pre>" ;
      count++;
    }
    else
    {
    	//making of error message
      let y = ch.charAt(n-1)
      z += y.fontcolor('red');
      let res = z + ch.substr(n,ch.length)
      document.getElementById('display').innerHTML = "<pre>" + res+"</pre>" ;
    }


    var r = (count/5)/1     // formula to count WPM
    let a = (count/ch.length) * 100 ;
    document.getElementById('wpm').innerHTML = Math.floor(r) ;
    document.getElementById('ks').innerHTML  = curr.length ;
    document.getElementById('ws').innerHTML  = curr.length-count;
    document.getElementById('acc').innerHTML = a.toFixed(2) + "%";
    //when last character entered 
    if((n==ch.length))
    {
      clearInterval(x);				//clearing the event
      document.getElementById('test').disabled = true ;

      //for dialog box
      var res = '<br/><center><strong>' + parseInt(r)+' WPM (words per minute).<br/></strong>' ;
      res += 'Keystrokes : ' + curr.length + '<br/>';
      res += 'Wrong Strokes : ' + (curr.length-count) + '<br/>';
      res += 'Accuracy : ' + a.toFixed(2) + '%<br/>';

      let marks ;
      if(a >= 85)
        marks = "<font size=7 color='green'> Best !</font>";
      else if(a >= 60 && a < 85)
        marks = "<font size=7 color='orange'>Better !</font>";
      else
        marks = "<font size=7 color='red'>Good !</font>";
      document.getElementById('file').innerHTML = "check" ;

      document.getElementById('contnt').innerHTML = res ;
      document.getElementById('res').style.zIndex  = 1;

      document.getElementById('keys').style.opacity = 0 ;
      document.getElementById('wrng').style.opacity = 0 ;
      document.getElementById('wp').style.opacity   = 0 ;
      document.getElementById('ac').style.opacity   = 0 ;
    }
  }

  //Function to RESET all the fields
  reload = () =>
  {
  	{window.location.reload()}
  }

  //Function to render the data
  render() 
  {
    //returning JSX code
    return(
      <Router>
        <div className="App">
        	{/*HEADER*/}
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="header">
              <strong>MNNIT ALLAHABAD</strong><br/>
              Prayagraj,<br/>
              Uttar Pradesh-211004<br/>
              India
            </div>

            {/*Linking heading to HOME*/}
            <Link to='/'>
              <div  className="heading">
              T<span id="subHeading">ex</span>T<span id="subHeading">Est</span>
              </div>
            </Link>

            {/*Creating Links*/}
            <div id="links">
              <Link className='L' to='/'>Home</Link>
              <Link className='L' to='/Testing'>Test here!</Link>
              <Link className='L' to='/About'>About us</Link>
              <Link className='L' to='/Contact'>Contact</Link>
            </div>
          </div>

          <br/>
          <br/>

        	{/*Creating Routes or Paths*/}
          <Route path="/" exact render={() => {return (<Home/>)}}/>
          <Route path="/Testing" render={() =>
            {
              return(<div>
                      {/*for taking file as input*/}
	                    <input
	                      id="file"
	                      className="inputFile"
	                      type="file"
	                      accept=".tex"
	                      onChange={this.fileFunc.bind(this)}
	                    />
              				{/*Printing timer*/}
		                  <span className="timer"><span id='mm'>00</span>:<span id='ss'>00</span></span>
	                    {/*To reset all the fields*/}
		                  <button className="reset" onClick={this.reload.bind(this)}>RESET</button>


                      <div id = "res">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <font id="result" size="7">Result</font>
                        <span id="close" onClick={this.reload.bind(this)}>
                          <font size="7">&times;</font>
                        </span>
                        <span id="contnt"></span>                      
                      </div>

                        <div id="keys">
                          <h4>Keystrokes</h4>
                            <span id="ks">00</span>
                        </div>
                        <div id="wrng">
                          <h4>Wrong Strokes</h4>
                            <span id="ws">00</span>
                        </div>
                        <div id="ac">
                          <h4>Accuracy</h4>
                            <span id="acc">00.00%</span>
                        </div>
                        <div id="wp">
                          <h4>WPM</h4>
                            <span id="wpm">00</span>
                        </div>
                      
                      {/*Using Type component*/}
	                    <Type content={this.state.data} changed={this.inputHandler.bind(this)}/>
                    </div>
                  );
            }
          }/>
          <Route path="/About" exact render={() => {return(<About/>)}}/>
          <Route path="/Contact" exact render={() => {return(<Contact/>)}}/>
          <Route path='/Portal' component={() => { window.location = 'http://172.31.134.15/'; return null;} }/>
          <Route path='/Profile' component={() => { window.location = 'https://in.linkedin.com/in/vishal-kr-chopra'; return null;} }/>

        	{/*FOOTER*/}
        
          <div className="App-footer">
            <div className="footer">
              <strong>All rights reserved</strong><br/>
              &copy; - - - - <br/>
              MNNIT Allahabad, Prayagraj,<br/>
              Uttar Pradesh-211004<br/>
              India
            </div>
          </div>          
        </div>
      </Router>
    );
  }
}

export default App;