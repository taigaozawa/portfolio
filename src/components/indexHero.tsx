import * as React from 'react';
import useInterval from 'use-interval';
import { Link } from 'react-scroll';

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
        <Link
          className="heroScroll"
          to="1"
          smooth={true}
          offset={-58}
          duration={800}
        >
          <span className='heroScroll_sign'></span><span className="heroScroll_text">Scroll</span>
        </Link>
      </div>
    </div >
  );
}

export default IndexHero;