import React from 'react';
import ReactDOM from 'react-dom/client';
import Frontend from './Frontend';
import "@picocss/pico";  
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import AddMarker from './AddMarker';

const root = ReactDOM.createRoot(
  document.getElementById('Frontend') as HTMLElement
);
root.render(
  <React.StrictMode>
        <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Marker</Link></li>
        </ul>
        <li><strong>De kaarten van rotterdam</strong></li>
      </nav>
      <Routes>
        <Route path="/" element={<Frontend/>}/>
        <Route path="/add" element={<AddMarker/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
