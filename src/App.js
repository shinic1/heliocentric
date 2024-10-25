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
        onClick={() => setOpenPopup('mars')}
      ></div>
      <div
        className="jupiter"
        onClick={() => setOpenPopup('jupiter')}
      ></div>
      <div
        className="saturn"
        onClick={() => setOpenPopup('saturn')}
      ></div>
      <div
        className="uranus"
        onClick={() => setOpenPopup('uranus')}
      ></div>
      <div
        className="neptune"
        onClick={() => setOpenPopup('neptune')}
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
      {openPopup==='mars' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Mars Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about mars here.</p>
        </div>
      )}
      {openPopup==='jupiter' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Jupiter</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about jupiter here.</p>
        </div>
      )}
      {openPopup==='saturn' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Saturn</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about saturn here.</p>
        </div>
      )}
      {openPopup==='uranus' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Uranus</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about uranus here.</p>
        </div>
      )}
      {openPopup==='neptune' &&(
        <div className='popup_earth'>
          <div className="flex flex-row justify-between">
            <h2>Neptune</h2>
            <button onClick={() => setOpenPopup(null)}>X</button> {/* Close button */}
          </div>
          <p className="text-sm">Details about neptune here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
