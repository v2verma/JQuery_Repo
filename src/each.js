//Code to input validate and combine the filled 

import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
//import './addclass.css';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    $(document).ready(function(){
      $('#combine').click(function(){

        var filled = false;
        var text_combined = '';

          $('input[type="text"]').each(function () {
            if ($(this).val() == '') {
              filled = true;
            }
            else{
              text_combined += $(this).val() + ' ';
            }
          })
          if(filled == true){
            alert("Fill all the entry!!")
          }
          else{
            $('#combined').text(text_combined);
          }
          
        })
    })
  }

  render(){
    return(
      <div >
      <form>
        <h2>jQuery Examples : each method</h2>
          <p >
            <input type="text" /> <input type="text" /> <input id="combine" type="button" value="COMBINE" />
          </p>
          <div id="combined"></div>
      </form>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
