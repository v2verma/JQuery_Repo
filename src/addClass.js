////The code will add a class to DOM element using jQuery.////

import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import './addclass.css';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    $('#btn').click(function(){
      $('#sometext').addClass('bold');
    })
  }

  render(){
    return(
      <div >
        <h2>jQuery Examples : addClass</h2>
        <div>
          <input id="btn" type="button" value="ADD CLASS" />
          <p id="sometext" >
            Here is some unbold text
          </p>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));



////////addclass.css//////////

.bold{
  font-weight: bold;
  font-size: 30px
}
