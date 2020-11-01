import * as React from 'react';
import useInterval from 'use-interval';
import { Link } from 'react-scroll';
import DetailBox from '../components/detailBox';

import '../styles/indexAbout.css';
import '../styles/index.css';

const IndexAbout = () => {
  //const [showTextFlg, setShowTextFlg] = React.useState<number>(0);
  //useInterval(() => {
  //  setShowTextFlg(showTextFlg + 1);
  //}, 3000)
  return (
    <>
      <div className="indexTitleContainer" id="about">
        <h1 className="indexTitle">紹介 About</h1>
      </div>

      <div className="aboutContainer">
        <div className="aboutCopy">WHO AM I ?</div>
        <div className="about">
          <h2>
            <span className="about_name">小澤 泰河</span>
            <span className="about_name about_name-en">Taiga Ozawa</span>
          </h2>
          <p className="about_univ">筑波大学　修士1年</p>
          <p className="about_department">理工情報生命学術院 数理物質科学研究群 物理学学位プログラム</p>
          <p className="about_lab">原子核理論研究室</p>
          <p className="about_based">茨城県つくば市在住</p>
          <p className="about_univ">A graduate student at University of Tsukuba,</p>
          <p className="about_department">majoring in physics at Nuclear Theory Group,</p>
          <p className="about_based about_based-en">and based in Tsukuba, near Tokyo</p>
          <DetailBox link="/profile" titleJa="詳しいプロフィールを見る" titleEn="See detailed profile">
            <ul>
              <li>学歴</li>
              <li>職歴（アルバイト・インターン）</li>
              <li>スキル・資格</li>
            </ul>
            <ul>
              <li>Education</li>
              <li>Career</li>
              <li>Skills</li>
            </ul>
          </DetailBox>
        </div>


      </div>
    </>
  );
}

export default IndexAbout;