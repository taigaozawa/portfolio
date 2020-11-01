import * as React from 'react';
import useInterval from 'use-interval';
import Link from 'gatsby-link';

import '../styles/detailBox.css';

type DetailBoxProps = {
  link: string;
  titleJa: string;
  titleEn: string;
}
const DetailBox: React.FC<DetailBoxProps> = ({ children, link, titleJa, titleEn }) => {
  //const [showTextFlg, setShowTextFlg] = React.useState<number>(0);
  //useInterval(() => {
  //  setShowTextFlg(showTextFlg + 1);
  //}, 3000)
  return (
    <Link to={link} className="detailBoxContainer">
      <div className="detailBox">
        <div className="detailBox_title">
          {titleJa}
        </div>
        <div className="detailBox_title detailBox_title-en">
          {titleEn}
        </div>
        <div className="detailBox_description">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default DetailBox;