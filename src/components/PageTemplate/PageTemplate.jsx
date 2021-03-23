import React from 'react';
import { Navigation } from '../Navigation/Navagation.jsx';


const PageTemplate = ({children}) =>
  <div className="page">
    <Navigation/>
    {children}
  </div>;

export default PageTemplate;