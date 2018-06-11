//Code to make an animated(show/hide) menu

import React,{Component} from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import './style.css';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.menu').find('li').first().addClass('bold').click(function(){
        $(this).nextAll().toggle()
      }).nextAll().hide();
    })
  }

  render(){
    return(
      <div >
      <form>
        <h2>jQuery Examples : next/nextall</h2>
          <ul class="menu">
            <li><a href="#">User</a></li>
            <li>Setting</li>
            <li>Log out</li>
            <li>Details</li>
          </ul>
      </form>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));



//style.css
.bold {
  font-weight: bold;
  cursor: pointer;
}

.menu{
  list-style: none;
  margin-left: 0;
}
