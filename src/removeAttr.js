//This code is to make a button enable and disable based upon checkbox event(agreement example)

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
      $('#agree').change(function () {
        var state = $(this).val();
        // alert(state)
        if(state == 'on'){
          $('#continue').removeAttr('disabled');
          $(this).val('');
        }
        else{
          $('#continue').attr('disabled', 'disabled');
          $(this).val('on');
        }
      })
    })
  }

  render(){
    return(
      <div >
      <form>
        <h2>jQuery Examples : removeAttr</h2>
        Some agreement here
          <p >
            <input id="agree" type="checkbox" />I agree
          </p>
          <input id="continue" type="submit" value='CONTINUE' disabled='disabled' />
      </form>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
