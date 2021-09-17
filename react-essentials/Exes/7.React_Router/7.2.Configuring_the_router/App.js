import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home, About, Events, Contact } from "./pages";

function App() {  
  return (
    <div>
     <Switch>
       <Route exact path="/"><Home /></Route>
       <Route path="/about"><About /></Route>
       <Route path="/events"><Events /></Route>
       <Route path="/contact"><Contact /></Route>
     </Switch>
    </div>
  );
}

export default App;
