import './App.css';
import React from 'react';
import Home from './Component/Home';
import Start from './Component/Start';
import Game from './Component/Game';
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
          <Route path='/' exact component={Home} />
          <Route path='/start' exact component={Start }/>
          <Route path='/game' exact component={Game} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
