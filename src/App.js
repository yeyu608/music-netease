import React from 'react';
import './App.css';
import routes from './router/index'
import {useRoutes} from 'react-router-dom'
function App() {
  let Element = useRoutes(routes)
  return (
    <div className="App">
      {Element}
    </div>
  );
}

export default App;
