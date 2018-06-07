import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

class App extends Component {
  componentDidMount(){
    $('#copy_btn').click(function(){
      var text = $('#text').html();
      $('#text_copied').html(text);
    })
  }

  copy(){
    document.getElementById('text_copied_js').innerHTML = document.getElementById('text_js').innerHTML;
  }

  render(){
    return(
      <div >
        <h2>jQuery Examples : html</h2>
        <div>
          <input id="copy_btn_js" type="button" value="COPY@javaScript" onClick={this.copy} />
          <p id="text_js">This is a paragraph for js</p>
          <p id="text_copied_js"></p>
          
          <input id="copy_btn" type="button" value="COPY@jQuery"/>
          <p id="text">This is a paragraph for jQuery</p>
          <p id="text_copied"></p>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
