import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [people, setPeople] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    function fetchData() {
      axios.get(urlPeople)
        .then(res => {
          setPeople(res.data);
        }).catch(err => console.error(err));
      axios.get(urlPlanets)
        .then(res => {
          setPlanets(res.data);
        }).catch(err => console.error(err));
    }
    fetchData();
  }, []);

  if (!people || !planets) return <h2>Fetching data...</h2>;

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {
        people.map((char, idx) => {
          return <Character key={idx} char={char} planets={planets}/>
        })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
