import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();

    this.state = {textvalue:''}
  }
  
  
  componentDidMount(){
    $('#Display_btn').click(function(){
      var data = $('#Display_text_jq').val();
      //var data = $('#Display_text_jq').val().length();   //for getting the length of text in input filed
      $('#text_jq').text(data);
    })
  }
  

  handleInputChange = (value) =>{
    this.setState({textvalue: value})
  }
  
  display = () => {
    document.getElementById('text_js').innerHTML = this.state.textvalue;
  }
  

  render(){
    return(
      <div >
        <h2>jQuery Examples : val</h2>
        <div>
          <input id="Display_text_js" type="text" value={this.state.textvalue} onChange={(event) => this.handleInputChange(event.target.value)} />
          <input id="Display_btn_js" type="button" value="Display@javaScript" onClick={this.display}/>
          <p id="text_js"></p>
          


          <input id="Display_text_jq" type="text" />
          <input id="Display_btn" type="button" value="Display@jQuery"/>
          <p id="text_jq"></p>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
