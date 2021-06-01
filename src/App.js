import './App.css';
import React from 'react';
import Home from './Component/Home';
import { UserProvider } from './Provider';
import { 
  Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
