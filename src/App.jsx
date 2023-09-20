import './App.css';
import React, { useEffect, useState } from 'react';
import img from './Assets/Images/Webdesk.jpg';
import imgmob from './Assets/Images/Webmob.jpg';

function App() {
  // Use a state variable to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screenWidth state when the window is resized
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">

      <div className='maindiv'>
        {screenWidth < 800 ?
          <img
            src={imgmob}
            alt=""
            id="image01"
          /> :
            <img src={img} class="img-fluid" alt="..." id='imagedesk'/>          
        }
      </div>
    </div>
  );
}

export default App;
