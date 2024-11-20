import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [openPopup, setOpenPopup] = useState(null); // Dynamic state
  useEffect(() => {
    const images = [
      "Nico_final.jpg",
      "linkedin.png",
      "github.png",
      "mail.png",
      "react.png",
      "html.png",
      "css.png",
      "java.png",
      "python.png",
      "rstudio.png",
      "git.png",
      "android_studio.png"
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* Planets */}
      <div className="sun" onClick={() => setOpenPopup('sun')}></div>
      <div className="mercury" onClick={() => setOpenPopup('mercury')}></div>
      <div className="venus" onClick={() => setOpenPopup('venus')}></div>
      <div className="earth" onClick={() => setOpenPopup('earth')}></div>
      <div className="mars" onClick={() => setOpenPopup('mars')}></div>
      <div className="jupiter" onClick={() => setOpenPopup('jupiter')}></div>
      <div className="saturn" onClick={() => setOpenPopup('saturn')}></div>
      <div className="uranus" onClick={() => setOpenPopup('uranus')}></div>
      <div className="neptune" onClick={() => setOpenPopup('neptune')}></div>

      {/* Orbits */}
      <div className="mercury_orbit"></div>
      <div className="venus_orbit"></div>
      <div className="earth_orbit"></div>
      <div className="mars_orbit"></div>
      <div className="jupiter_orbit"></div>
      <div className="saturn_orbit"></div>
      <div className="uranus_orbit"></div>
      <div className="neptune_orbit"></div>

      {/* Popup for Each Planet */}
      {openPopup === 'sun' && (
        <div className="popup_sun">
          <div className="flex flex-row justify-between">
            <h2>Nico Bourel</h2>
            <button className='close_sun' onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="swe">Aspiring software engineer</p>
          <img className='nico' src="Nico_final.jpg" alt="nico" height={200} width={200}/>
          <p className="intro">Hey, I'm Nico. <br />
          I'm a computer science student <br />
          with a passion for creating <br />efficient and modern solutions. <br />
          I specialize in creating <br />dynamic applications, <br />
          optimizing user interfaces<br />and solving complex technical challenges <br />
          </p>
          <button 
            className="linkedin" 
            onClick={() => window.open("https://www.linkedin.com/in/nico-bourel-09237a216/", "_blank")}>
            <div className='linkedin-content'>
            <img className='linkedin-icon' src="linkedin.png" alt="linkedin" height={40} width={40} style={{ display: 'block', margin: '0 auto' }} />
            <span>LinkedIn</span>
            </div>
          </button>
          <button 
            className="github" 
            onClick={() => window.open("https://github.com/shinic1", "_blank")}>
            <img className='github-icon' src="github.png" alt="github" height={40} width={40} style={{ display: 'block', margin: '0 auto' }} />
          </button>
          <button 
            className="contact" 
            onClick={() => window.location = 'mailto:nico.bourel@swedev.online'}>
            <img className='contact-icon' src="mail.png" alt="contact" height={40} width={40} style={{ display: 'block', margin: '0 auto' }} />
          </button>
          <div className="stack"> 
            <figure className='react'>
              <img className='reactfig' src="react.png" alt="react" width={55} />
              <figcaption>React</figcaption>
            </figure>
            <figure className='html'>
              <img className='htmlfig' src="html.png" alt="css" width={60} />
              <figcaption>HTML</figcaption>
            </figure>
            <figure className='css'>
              <img className='cssfig' src="css.png" alt="css" width={60} />
              <figcaption>CSS</figcaption> 
            </figure>
            <figure className='java'>
              <img className='javafig' src="java.png" alt="java" width={60} />
              <figcaption>Java</figcaption> 
            </figure>
            <figure className='python'>
              <img className='pythonfig' src="python.png" alt="python" width={60} />
              <figcaption>Python</figcaption> 
            </figure>    
            <figure className='rstudio'>
              <img className='rstudiofig' src="rstudio.png" alt="rstudio" width={60} />
              <figcaption>R-studio</figcaption> 
            </figure>
            <figure className='git'>
              <img className='gitfig' src="git.png" alt="git" width={60} />
              <figcaption>Git</figcaption> 
            </figure>
            <figure className='android_studio'>
              <img className='android_studiofig' src="android_studio.png" alt="android_studio" width={60} />
              <figcaption>Android Studio</figcaption> 
            </figure>
          </div>
        </div>
      )}
      {openPopup === 'mercury' && (
        <div className="popup_mercury">
          <div className="flex flex-row justify-between">
            <h2>Mercury Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Mercury here.</p>
        </div>
      )}
      {openPopup === 'venus' && (
        <div className="popup_venus">
          <div className="flex flex-row justify-between">
            <h2>Venus Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Venus here.</p>
        </div>
      )}
      {openPopup === 'earth' && (
        <div className="popup_earth">
          <div className="flex flex-row justify-between">
            <h2>Earth Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Earth here.</p>
        </div>
      )}
      {openPopup === 'mars' && (
        <div className="popup_mars p-4 rounded bg-white shadow-lg">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2>Mars</h2>
            <button className="close_btn text-red-500" onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Mars is an Open-Source YouTube and Tiktok downloader with basic functionalities.</p>
          <button 
            className="test_btn text-red-500" 
            onClick={() => window.open("https://github.com/shinic1/Mars", "_blank", "noopener,noreferrer")}>
            <img src="github.png" alt="github" height={45} width={45} style={{ display: 'block', margin: '0 auto' }} />
          </button>
        </div>
      )}
      {openPopup === 'jupiter' && (
        <div className="popup_jupiter">
          <div className="flex flex-row justify-between">
            <h2>Jupiter Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Jupiter here.</p>
        </div>
      )}
      {openPopup === 'saturn' && (
        <div className="popup_saturn">
          <div className="flex flex-row justify-between">
            <h2>Saturn Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Saturn here.</p>
        </div>
      )}
      {openPopup === 'uranus' && (
        <div className="popup_uranus">
          <div className="flex flex-row justify-between">
            <h2>Uranus Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Uranus here.</p>
        </div>
      )}
      {openPopup === 'neptune' && (
        <div className="popup_neptune">
          <div className="flex flex-row justify-between">
            <h2>Neptune Information</h2>
            <button onClick={() => setOpenPopup(null)}>X</button>
          </div>
          <p className="text-sm">Details about Neptune here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
 