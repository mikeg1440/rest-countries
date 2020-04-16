import React from 'react';
import CountryCard from './CountryCard';

function App() {
  return (
    <div className="App">
      <header>
        <h1 align='left'>Where in the world?</h1>
        <h3 align='right'>Dark Mode</h3>
      </header>

      <div className='filter-container'>
        <input type='text' width='30%'/>

      </div>

      <div className='container'>

        <div className='country-grid'>

          {renderCards()}

        </div>

      </div>

    </div>
  );
}

const renderCards = () => {
  let cards = []

  for (let i=0; i<5; i++){
    cards.push(<CountryCard />)
  }
  return cards
}

export default App;
