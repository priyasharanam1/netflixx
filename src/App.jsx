import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter,Switch,Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
   <Switch>
  <Route exact path="/">
  <HomeScreen/>
  </Route>
</Switch>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
