import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/Fonts.css';
import './assets/styles/Global.css';
import './index.css';
import Rotes from './router';


import { createRoot } from 'react-dom/client';


const Root= () => {
  return (
    <>
      <Rotes />
      
    </>
  );
};

//New Updates to Client Rendering APIs
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
