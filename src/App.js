import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage/Homepage';
import Blog1 from './page/blog/Blog1';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/blog1' component={Blog1} />
        </Switch>
      </BrowserRouter>
    </div>
  );    
}

export default App;
