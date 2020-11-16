import * as React from 'react';
import useInterval from 'use-interval';
import { Link } from 'react-scroll';
import TitleBox from '../titleBox';
import CareerBox from './careerBox';
import { Select, MenuItem, FormControl } from '@material-ui/core';

import '../../styles/main.css';
import '../../styles/profileMain.css';

class Education {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  nameJa: string;
  nameEn: string;
  constructor(startYear: number, startMonth: number, endYear: number, endMonth: number, nameJa: string, nameEn: string) {
    this.startYear = startYear;
    this.startMonth = startMonth;
    this.endYear = endYear;
    this.endMonth = endMonth;
    this.nameJa = nameJa;
    this.nameEn = nameEn;
  }
}

export class Career {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  companyJa: string;
  companyEn: string;
  companyUrl: string;
  programJa: string;
  programEn: string;
  descriptionJa: string;
  descriptionEn: string;
  formJa: string;
  formEn: string;
  skills: string[];
  isTech: boolean;
  constructor(
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number,
    companyJa: string,
    companyEn: string,
    companyUrl: string,
    programJa: string,
    programEn: string,
    descriptionJa: string,
    descriptionEn: string,
    formJa: string,
    formEn: string,
    skills: string[],
    isTech: boolean
  ) {
    this.startYear = startYear;
    this.startMonth = startMonth;
    this.endYear = endYear;
    this.endMonth = endMonth;
    this.companyJa = companyJa;
    this.companyEn = companyEn;
    this.companyUrl = companyUrl;
    this.programJa = programJa;
    this.programEn = programEn;
    this.descriptionJa = descriptionJa;
    this.descriptionEn = descriptionEn;
    this.formJa = formJa;
    this.formEn = formEn;
    this.skills = skills;
    this.isTech = isTech;
  }
}

const ProfileMain = () => {
  const [educations, setEducations] = React.useState([
    new Education(2020, 4, 2022, 3, '筑波大学 理工情報生命学術院・数理物質科学研究群・物理学学位プログラム', "Master's Program in Physics, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology, University of Tsukuba"),
    new Education(2016, 4, 2020, 3, '首都大学東京（現・東京都立大学）理工学系・物理学コース', 'Department of Physics, Tokyo Metropolitan University'),
    new Education(2013, 4, 2016, 3, '私立淑徳高等学校', 'Shukutoku High School'),
  ]);
  const [educationsOrder, setEducationsOrder] = React.useState(0);
  const handleEducationOrderChange = (e: any) => {
    switch (e.target.value) {
      case 0:
        const educationsByNewest = educations.sort((a, b) => b.endYear - a.endYear);
        setEducations(educationsByNewest);
        setEducationsOrder(0);
        break;
      default:
        const educationsByOldest = educations.sort((a, b) => a.endYear - b.endYear);
        setEducations(educationsByOldest);
        setEducationsOrder(1);
        break;
    }
  }
  const [careers, setCareers] = React.useState([
    new Career(
      2020, 11, 2020, 11,
      'アクセンチュア株式会社', 'Accenture', 'https://accenture.com/',
      '和魂偉才塾エンジニア塾', 'Engineer juku',
      '詳細非公開', 'closed',
      'インターンシップ', 'internship',
      ['プログラミング'],
      true),
    new Career(
      2020, 10, -1, -1,
      '株式会社RIT', 'RIT Inc.', 'https://rit-inc.co.jp/',
      '長期インターンシップ（エンジニア）', 'Engineer juku',
      'Web アプリケーションのフロントエンド・バックエンド開発', 'closed',
      'インターンシップ（アルバイト）', 'internship',
      ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Ruby', 'Ruby on Rails'],
      true
    ),
    new Career(
      2020, 10, 2020, 10,
      '株式会社エヌ・ティ・ティ・データ（NTT データ）', 'NTT DATA', 'https://www.nttdata.com/',
      'プロジェクト型インターンシップ', 'Engineer juku',
      'Web アプリケーション開発', 'Web application development',
      'インターンシップ', 'internship',
      ['Java', 'Spring Framework', 'JavaScript', 'ドキュメント作成'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      'フューチャー株式会社', 'Future', 'https://www.future.co.jp/',
      'Engineer Camp', 'Engineer Camp',
      'Web アプリケーション開発', 'Web application development',
      'インターンシップ', 'internship',
      ['Java', 'Spring Frameword', 'JavaScript', 'Backbone.js', 'ドキュメント作成'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      'からくり株式会社', 'Caraquri', 'https://caraquri.com/',
      'サマーインターンシップ', 'Summer Internship',
      'iOS アプリケーション開発', 'iOS application development',
      'インターンシップ', 'internship',
      ['Swift'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      '株式会社ドワンゴ', 'Dwango', 'https://dwango.co.jp/',
      'プログラミング教材制作', 'Engineer juku',
      '教育事業（N予備校）の教材制作・授業運営補助・ツール開発等', 'closed',
      'アルバイト', 'internship',
      ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Scala', 'Python', 'Swift', 'Adobe Illustrator'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      '淑徳日本語学校', 'Shukutoku Japanese Language School', 'https://www.shukutoku-school.com/',
      '講師（化学）', 'Chemistry Lecturer',
      '詳細非公開', 'closed',
      'アルバイト', 'part-time',
      ['理科（化学）', '教育'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      '淑徳高等学校', 'Shukutoku High School', 'https://www.shukutoku.ed.jp/',
      '教育実習（高校・物理）', 'teacher training',
      '詳細非公開', 'closed',
      '教育実習', 'teacher training',
      ['理科（物理）', '教育'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      'ドミノ・ピザ（フランチャイズ加盟店）', "Domino's Pizza", 'https://www.dominos.jp/',
      '配達アルバイト', 'Delivery',
      '店内接客・配達', 'closed',
      'アルバイト', 'part-time',
      ['運転', '接客'],
      true
    ),
    new Career(
      2020, 10, -1, -1,
      '個太郎塾', 'Kotaro-juku (prep school)', 'https://www.ichishin.co.jp/kotaro',
      '講師（個別・集団）', 'Lecturer',
      '小・中・高生に対する個別・集団指導', 'closed',
      'アルバイト', 'internship',
      ['英語', '数学', '算数', '国語', '理科', '地歴・公民', '社会', '教育'],
      true
    ),
  ]);

  return (
    <>
      <div className="profileMain">
        <div className="profileMainInner">
        </div>
        <div className="profileMainInner">
          <div className="profileContentContainer">
            <div className="profileContent">
              <div className="profileContentName">
                <div className="profileContentName_text">
                  小澤泰河
                  </div>
                <div className="profileContentName_text-en">
                  Taiga Ozawa
                  </div>
              </div>
              <TitleBox ja="基本情報" en="Basic Information" />
              <div className="profileContentBasicInfo">
                <table>
                  <tr>
                    <th>誕生年</th>
                    <td>1997（平成 9 ）年</td>
                  </tr>
                  <tr>
                    <th>出身地</th>
                    <td>兵庫県伊丹市</td>
                  </tr>
                  <tr>
                    <th>居住地</th>
                    <td>茨城県つくば市</td>
                  </tr>
                  <tr>
                    <th>大　学</th>
                    <td>筑波大学 大学院</td>
                  </tr>
                  <tr>
                    <th>専　攻</th>
                    <td>理工情報生命学術院 数理物質科学研究群 物理学学位プログラム</td>
                  </tr>
                  <tr>
                    <th>研究室</th>
                    <td>原子核理論研究室（計算科学研究センター）</td>
                  </tr>
                  <tr>
                    <th>興　味</th>
                    <td>物理 / 数学 / コンピュータ・プログラミング / デザイン・フォント / 海外旅行 / 国内旅行 / スキー・スノーボード / 弓道 / ドライブ など</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Birthyear</th>
                    <td>1997</td>
                  </tr>
                  <tr>
                    <th>Birthplace</th>
                    <td>Itami City, near Osaka, Japan</td>
                  </tr>
                  <tr>
                    <th>Residence</th>
                    <td>Tsukuba City, near Tokyo, Japan</td>
                  </tr>
                  <tr>
                    <th>University</th>
                    <td>the graduate school, University of Tsukuba</td>
                  </tr>
                  <tr>
                    <th>Faculty</th>
                    <td>Master's Program in Physics, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology</td>
                  </tr>
                  <tr>
                    <th>Lab.</th>
                    <td>Nuclear Theory Group, Center for Computational Sciences</td>
                  </tr>
                  <tr>
                    <th>Interest</th>
                    <td>physics / mathematics / computer and programming / graphic design and typography / overseas trip / domestic trip / skiing and snowboarding / kyudo, Japanese style archery / driving etc.</td>
                  </tr>
                </table>
              </div>

              <TitleBox ja="学歴" en="Education" />
              <div className="profileContentEducation">
                <FormControl variant="outlined">
                  <Select className="profileContentEducation_order" labelId="educationOrder" id="educationOrder" value={educationsOrder} onChange={handleEducationOrderChange}>
                    <MenuItem value={0}>新しい順 newest to oldest</MenuItem>
                    <MenuItem value={1}>古い順　 oldest to newest</MenuItem>
                  </Select>
                </FormControl>
                <div className="profileContentEducation_table">
                  <table>
                    {educations.map(education => (
                      <tr>
                        <th>{education.startYear}/{education.startMonth} - {education.endYear}/{education.endMonth}</th>
                        <td>{education.nameJa}</td>
                      </tr>
                    ))}
                  </table>
                  <table>
                    {educations.map(education => (
                      <tr>
                        <th>{education.startYear}/{education.startMonth} - {education.endYear}/{education.endMonth}</th>
                        <td>{education.nameEn}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>

              <TitleBox ja="職歴" en="Career" />
              <div className="profileContentCareer">
                <FormControl variant="outlined">
                  <Select className="profileContentCareer_order" labelId="educationOrder" id="educationOrder" value={educationsOrder} onChange={handleEducationOrderChange}>
                    <MenuItem value={0}>新しい順 newest to oldest</MenuItem>
                    <MenuItem value={1}>古い順　 oldest to newest</MenuItem>
                  </Select>
                </FormControl>
                <div className="profileContentCareer_table">
                  <div>
                    {careers.map(career => (
                      <a className="careerBoxLink" href={career.companyUrl}>
                        <CareerBox>
                          <div className="careerBox_title">
                            <h2>{career.companyJa}</h2>
                            <div className="careerBoxForm">{career.formJa}</div>
                          </div>
                          <div className="careerBox_content">
                            <div className="careerBoxProgram">「{career.programJa}」</div>
                            <div className="careerBoxDescription">... {career.descriptionJa}</div>
                            <div className="careerBoxSkillsContainer">
                              {career.skills.map(skill => (
                                <span className="careerSkill">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </CareerBox>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProfileMain;