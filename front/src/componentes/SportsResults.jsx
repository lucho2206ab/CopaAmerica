import React from 'react';
import data from '../data.json'; // Importar el JSON con los datos hardcodeados

const SportsResults = () => {
  const results = data.sportsResults; // Usar datos del JSON

  return (
    <div>
      <h2>Resultados de la Copa América</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsResults;
