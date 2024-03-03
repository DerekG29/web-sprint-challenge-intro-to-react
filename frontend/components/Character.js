import React, { useState } from 'react';

function Character({ char, planets }) { // ❗ Add the props
  
  const [showPlanet, setShowPlanet] = useState(false);
  
  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  }

  const planet = planets.filter(planet => char.homeworld === planet.id)

  return (
    <div className='character-card' onClick={togglePlanet}>
      <h3 className='character-name'>{char.name}</h3>
      {
        showPlanet
        ? <p>Planet: <span className='character-planet'>{planet[0].name}</span></p>
        : null
      } 
    </div>
  )
}

export default Character
