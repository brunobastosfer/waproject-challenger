import './App.css';
import React from 'react';
import Home from './Component/Home';
import Start from './Component/Start';
import Game from './Component/Game';
import Finish from './Component/Finish'
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
          <Route path='/finish' exact component={Finish} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
