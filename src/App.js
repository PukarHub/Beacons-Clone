import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage/Homepage';
import Blog1 from './page/blog/Blog1';
import Blog2 from './page/blog/Blog2';
import Gallery from './page/gallery/Gallery'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/blog1' component={Blog1} />
          <Route exact path='/blog2' component={Blog2} />
          <Route exact path='/gallery' component={Gallery} />
        </Switch>
      </BrowserRouter>
    </div>
  );    
}

export default App;
