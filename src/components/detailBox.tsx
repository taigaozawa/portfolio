import * as React from 'react';
import useInterval from 'use-interval';
import Link from 'gatsby-link';

import '../styles/detailBox.css';

type DetailBoxProps = {
  link: string;
  titleJa: string;
  titleEn: string;
  theme: string
}
const DetailBox: React.FC<DetailBoxProps> = ({ children, link, titleJa, titleEn, theme }) => {
  return (
    <Link to={link} className="detailBoxContainer">
      <div className={theme === 'red' ? "detailBox" : "detailBox detailBox-blue"}>
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