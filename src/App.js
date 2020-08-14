import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 
import './styles/App.css';

import Homepage from './components/Homepage';
import Navigation from './components/navigation/Navigation';
import Organizations from './components/organizations/Organizations';

function App() {
  return (
    <Router>
      <Navigation />

      <div className="Main-container">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/organizations" component={Organizations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;