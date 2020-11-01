import * as React from 'react';
import { setConstantValue } from 'typescript';
import useInterval from 'use-interval';

import '../styles/indexHero.css';

const IndexHero = () => {
  const [showTextFlg, setShowTextFlg] = React.useState<number>(0);
  //useInterval(() => {
  //  setShowTextFlg(showTextFlg + 1);
  //}, 3000)
  return (
    <div className="heroImageContainer">
      <div className="heroImageFilter">
        <img className="heroImage" src="/TMU.jpg" alt="TMU" />
        <div className="heroImageTextBase"> </div>
        <span className="heroImageText heroImageText-ja">
          ようこそ
        </span>
        <span className="heroImageText heroImageText-en">
          Welcome
        </span>
      </div>
    </div >
  );
}

export default IndexHero;