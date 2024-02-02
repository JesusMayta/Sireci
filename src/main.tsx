import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { SiriciApp } from './SiriciApp.tsx'
//import { ProfileForm } from './profile/pages/ProfileForm.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SiriciApp /> 
  </React.StrictMode>,
);
