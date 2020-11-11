import * as React from 'react';

import '../../styles/careerBox.css';

const CareerBox: React.FC = (props) => {
  return (
    <>
      <div className="careerBoxContainer">
        <div className="careerBox">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default CareerBox;