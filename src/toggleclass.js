////The code is for adding and removing the class from DOM element using jQuery////


import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import './addclass.css';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    $('#sometext').click(function(){
      $('#sometext').toggleClass('highlight bold');
    });
    $('#input').focus(function(){
      $('#input').addClass('highlight bold');
    })
    $('#input').blur(function () {
      $('#input').removeClass('highlight bold');
    })
  }

  render(){
    return(
      <div >
        <h2>jQuery Examples : toggleClass</h2>
        <div id="text" style={{cursor: 'pointer'}}>
          <input id="input" type="text" />
          <p id="sometext">
            Here is some text
          </p>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
