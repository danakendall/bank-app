import React, {Component} from 'react';
import logo from './communityBank.svg';
import './Login.css';

export default class Login extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="App">
        <img src={logo} alt=""/>
        <a href="http://localhost:3005/auth">
          <button>Log in</button>
        </a>
      </div>
    )
  }

}

//OR, since it's stateless:
// export default function(props) {
//   return(
//     <div className="App">
//       <img src={logo} alt=""/>
//       <a href={process.env.REACT_AUTH_URL}>
//         <button>Log in</button>
//       </a>
//     </div>
//   )
// }
