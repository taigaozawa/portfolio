import * as React from 'react';
import DetailBox from '../detailBox';
import TitleBox from '../titleBox';

import '../../styles/main.css';
import '../../styles/topMain.css';

const TopMain = () => {
  //const [showTextFlg, setShowTextFlg] = React.useState<number>(0);
  //useInterval(() => {
  //  setShowTextFlg(showTextFlg + 1);
  //}, 3000)
  return (
    <>
      <div className="topMain">
        <TitleBox ja="紹介" en="About me" />

        <div className="topContentContainer" id="about">
          <div className="topContentCopy">WHO AM I ?</div>
          <div className="topContent">
            <h2>
              <span className="topContent_name">小澤 泰河</span>
              <span className="topContent_name topContent_name-en">Taiga Ozawa</span>
            </h2>
            <p className="topContent_univ">筑波大学　修士1年</p>
            <p className="topContent_department">理工情報生命学術院 数理物質科学研究群 物理学学位プログラム</p>
            <p className="topContent_lab">原子核理論研究室</p>
            <p className="topContent_based">茨城県つくば市在住</p>
            <p className="topContent_univ">A graduate student at University of Tsukuba,</p>
            <p className="topContent_department">majoring in physics at Nuclear Theory Group,</p>
            <p className="topContent_based topContent_based-en">and based in Tsukuba, near Tokyo</p>
            <div className="whiteSpace"></div>
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
            <div className="whiteSpace"></div>
            <DetailBox link="/notes" titleJa="ノートを見る" titleEn="Read notes">
              <ul>
                <li>学習記録</li>
                <li>ブックリスト</li>
                <li>趣味・旅行記</li>
              </ul>
              <ul>
                <li>Study Record</li>
                <li>Book List</li>
                <li>Hobby / Travel</li>
              </ul>
            </DetailBox>
          </div>
        </div>

        <TitleBox ja="最新情報" en="News" />
        <div className="topContentContainer topContentContainer-blue">
          <div className="topContentCopy">WHAT'S NEW?</div>
          <div className="topContent topContent-blue">
            <table>
              <tr>
                <td>2020/11/08</td>
                <td><a href="/former">旧サイト</a>から新サイトに移行しました。</td>
              </tr>
              <tr>
                <td>2020/11/01</td>
                <td>新サイトを制作しました。</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="whiteSpace5"></div>


        <TitleBox ja="このサイトについて" en="About this site" />

        <div className="topParagraphContainer">
          <p className="topParagraph">この Web サイトは TypeScript、React、Gatsby で実装し、GitHub Pages でホスティングしています。</p>
          <p className="topParagraph">ソースコードは <a href="https://github.com/taigaozawa/portfolio">GitHub</a> で公開しています。</p>
        </div>
      </div>
      <div className="whiteSpace5"></div>
    </>
  );
}

export default TopMain;