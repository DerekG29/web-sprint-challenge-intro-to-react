import React, { useState } from 'react'

function Character() { // ❗ Add the props
  
  const [showPlanet, setShowPlanet] = useState(false);
  
  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  }

  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
