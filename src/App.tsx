import React,  {useState} from 'react';
import image1 from './images/maps/1936.jpg';
import image2 from './images/maps/1920.jpg';
import image3 from './images/maps/1903.jpg';
import './app.css';


function App() {
  
  return (
    <div className="App">
      <div className="mapgridbackground">
      <div className="mapgrid3">
        <div className="mapgrid2">
        <div className="mapgrid">

        <img className="firstmap" src={image1} alt="loading...." />
        <div className='maptitle'> 1936</div>
        
        </div>
        <img className="middlemap" src={image2} alt="loading...." />
        <div className='maptitle'> 1920</div>
        
        </div>
        <img className="lastmap" src={image3} alt="loading...." />
        <div className='maptitle'> 1903</div>

      </div>
    </div>
  </div>
);
}

export default App;
