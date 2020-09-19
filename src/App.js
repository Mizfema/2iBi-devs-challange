import React from 'react'; 
import Header from './components/Header/index';
import CountryList from './components/country-list';
//import ListCountry from './components/main';

 

import './global.css';
 
function App() {
  return (
    <div className="App">
      <Header/>
       <CountryList/> 
        
    </div>
  );
}

export default App;
