import * as React from 'react';

import '../styles/titleBox.css';

type TitleBoxProps = {
  ja: string,
  en: string,
}

const TitleBox: React.FC<TitleBoxProps> = ({ ja, en }) => (
  <div className="titleBoxContainer" id="about">
    <h1 className="titleBox">{ja} {en}</h1>
  </div>
)

export default TitleBox;