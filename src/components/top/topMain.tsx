import * as React from 'react';
import DetailBox from '../detailBox';
import TitleBox from '../titleBox';

import '../../styles/main.css';
import '../../styles/topMain.css';

const TopMain = () => {
  return (
    <>
      <div className="topMain">
        <TitleBox ja="紹介" en="About me" />

        <div className="topContentContainer" id="about">
          <h2>
            <span className="topContent_name">小澤 泰河</span>
            <span className="topContent_name topContent_name-en">Taiga Ozawa</span>
          </h2>
          <div className="topContent">
            <p className="topContent_univ">筑波大学　修士1年</p>
            <p className="topContent_department">理工情報生命学術院 数理物質科学研究群 物理学学位プログラム</p>
            <p className="topContent_lab">原子核理論研究室</p>
            <p className="topContent_based">茨城県つくば市在住</p>
            <p className="topContent_univ">A graduate student at University of Tsukuba,</p>
            <p className="topContent_department">majoring in physics at Nuclear Theory Group,</p>
            <p className="topContent_based topContent_based-en">and based in Tsukuba, near Tokyo</p>
            <div className="whiteSpace"></div>

            <DetailBox link="/profile" titleJa="詳しいプロフィールを見る" titleEn="See detailed profile" theme="red">
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
            <DetailBox link="/notes" titleJa="ノートを見る" titleEn="Read notes" theme="blue">
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
            <div className="whiteSpace"></div>
            <DetailBox link="/portfolio" titleJa="ポートフォリオを見る" titleEn="See portfolio" theme="blue">
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
        <div className="whiteSpace2"></div>
        <div className="topContentContainer">
          <div className="topContent">
            <div className="simpleTableContainer">
              <table>
                <tr>
                  <td>2021/01/01</td>
                  <td><a href="https://taigaozawa.github.io/former_portfolio">旧サイト</a>から新サイトに移行しました。</td>
                </tr>
                <tr>
                  <td>2020/12/01</td>
                  <td>新サイトを制作しました。</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="whiteSpace5"></div>
      </div>
    </>
  );
}

export default TopMain;