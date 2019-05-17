import React, { Component } from 'react';
import './App.css';
import QrCode from './components/QrCode'
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      
      <Router>
            <div>
              <Route exact path="/invite/:friendly_url" component={QrCode} />
            </div>
          </Router>
      
       
    
    );
  }
}

export default App;
