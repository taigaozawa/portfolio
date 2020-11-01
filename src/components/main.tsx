import * as React from 'react';

import '../styles/main.css';

const Main: React.FC = ({ children }) => (
  <div className="mainContainer">
    <div className="main">
      <div className="mainInner">
        {children}
      </div>
    </div>
  </div>
)

export default Main;