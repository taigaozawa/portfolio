import * as React from 'react';

import '../styles/titleCopy.css';

type TitleCopyProps = {
  en: string
}

const TitleCopy: React.FC<TitleCopyProps> = ({ en }) => (
  <div className="titleCopyContainer">
    <div className="titleCopy">{en}</div>
  </div>
)

export default TitleCopy;