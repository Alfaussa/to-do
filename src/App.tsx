import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Listscreen from './screens/ListScreen';




function App() {
  return (
   
      <BrowserRouter>
         <Listscreen />
      </BrowserRouter>

  
  );
}

export default App;
