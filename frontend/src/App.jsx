import React, { useState } from 'react'
import { SearchBar } from "./components/SearchBar";
import './App.css'

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1>RUY</h1>
      <h4>Dicionário Jurídico</h4>
      <div className="search-container">
        <SearchBar setResults={setResults} />
        {results.length > 0 && (
          <div className="suggestion-container">
            {results.map((result, index) => (
              <div key={index} className="suggestion-item">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App
