//The code is to get attributes of any DOM element and display the same using jQuery.

import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    var attr1 = $("#link").attr('target');
    var attr2 = $("#link").attr('href');
    $('#attr').text(attr2);
    // $('#attr').text(attr1);
  }

  render(){
    return(
      <div >
        <h2>jQuery Examples : html</h2>
        <div>
          <p>
            <a id="link" href="www.google.com" target="_blank">Google Link</a>
          </p>
          <div id="attr"></div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
