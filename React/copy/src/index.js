import React from 'react';
import ReactDOM from 'react-dom/client';
// import Carousell from './Projectalt4/Carousel';

import reportWebVitals from './reportWebVitals';

import ProjectDisplay from './Library/ProjectDisplay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ProjectDisplay/>
   {/* <<Carousell/>> */}
  </React.StrictMode>
);

reportWebVitals();
