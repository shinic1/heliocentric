import './App.css';
import React, { useState } from 'react';

function App() {
  const [openPopup, setOpenPopup] = useState(null); // Dynamic state

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* Planets */}
      <div className="sun"></div>
      <div
        className="mercury"
        onClick={() => setOpenPopup('mercury')} // Mercury click opens its popup
      ></div>
      <div
        className="venus"
        onClick={() => setOpenPopup('venus')}
      ></div>
      <div
        className="earth"
        onClick={() => setOpenPopup('earth')}
      ></div>
      <div
        className="mars"
        //onClick={() => handleClick('Mars')}
      ></div>
      <div
        className="jupiter"
        //onClick={() => handleClick('Jupiter')}
      ></div>
      <div
        className="saturn"
        //onClick={() => handleClick('Saturn')}
      ></div>
      <div
        className="uranus"
        //onClick={() => handleClick('Uranus')}
      ></div>
      <div
        className="neptune"
        //onClick={() => handleClick('Neptune')}
      ></div>

      {/* Orbits */}
      <div className="mercury_orbit"></div>
      <div className="venus_orbit"></div>
      <div className="earth_orbit"></div>
      <div className="mars_orbit"></div>
      <div className="jupiter_orbit"></div>
      <div className="saturn_orbit"></div>
      <div className="uranus_orbit"></div>
      <div className="neptune_orbit"></div>

      {/* Popup for Mercury */}
      {openPopup === 'mercury' && ( // Conditional rendering for Mercury popup
        <div className="popup_mercury"> {/* New class for Mercury's popup */}
          <div className="flex flex-row justify-between">
            <h2>Mercury Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about Mercury here.</p>
        </div>
      )}
      {openPopup==='venus' &&(
        <div className='popup_venus'>
          <div className="flex flex-row justify-between">
            <h2>Venus Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about venus here.</p>
        </div>
      )}
            {openPopup==='earth' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Earth Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about earth here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
