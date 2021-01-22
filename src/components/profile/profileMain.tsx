import * as React from 'react';
import useInterval from 'use-interval';
import { Link } from 'react-scroll';
import TitleBox from '../titleBox';
import TitleCopy from '../titleCopy';
import CareerBox from './careerBox';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { careerData } from '../../data/career';
import { educationData } from '../../data/education';
import { basicInfo } from '../../data/basicInfo';
import { skillCategories, sk } from '../../data/skill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理

import '../../styles/main.css';
import '../../styles/profileMain.css';
import { Contactless } from '@material-ui/icons';

const ProfileMain = () => {
  const [lang, setLang] = React.useState(0);
  const [educations, setEducations] = React.useState(educationData);
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
  const [careers, setCareers] = React.useState(careerData);
  const [careersOrder, setCareersOrder] = React.useState(0);
  const handleCareerOrderChange = (e: any) => {
    switch (e.target.value) {
      case 0:
        const careersByNewest = careers.sort((a, b) => b.order - a.order);
        setCareers(careersByNewest);
        setCareersOrder(0);
        break;
      default:
        const careersByOldest = careers.sort((a, b) => - (b.order - a.order));
        setCareers(careersByOldest);
        setCareersOrder(1);
        break;
    }
  }
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
              <div className="profileButtons">
                <FormControl variant="outlined">
                  <Select className="profileButton" labelId="careerOrder" id="careerOrder" value={lang} onChange={(e) => setLang(Number(e.target.value))}>
                    <MenuItem value={0}>日本語 Japanese</MenuItem>
                    <MenuItem value={1}>英語 English</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="profileContentBasicInfo">
                <table>
                  {basicInfo.map(info => (
                    <tr>
                      <th>{lang === 0 ? info.keyJa : info.keyEn}</th>
                      <td>{lang === 0 ? info.valJa : info.valEn}</td>
                    </tr>
                  ))}
                </table>
              </div>

              <TitleBox ja="学歴" en="Education" />
              <div className="profileContentEducation">
                <div className="profileButtons">
                  <FormControl variant="outlined" className="">
                    <Select className="profileButton" labelId="careerOrder" id="careerOrder" value={lang} onChange={(e) => setLang(Number(e.target.value))}>
                      <MenuItem value={0}>日本語 Japanese</MenuItem>
                      <MenuItem value={1}>英語 English</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined">
                    <Select className="profileButton" labelId="educationOrder" id="educationOrder" value={educationsOrder} onChange={handleEducationOrderChange}>
                      <MenuItem value={0}>新しい順 newest to oldest</MenuItem>
                      <MenuItem value={1}>古い順　 oldest to newest</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="whiteSpace2"></div>
                <div className="simpleTableContainer">
                  {lang === 0 ?
                    <table>
                      {educations.map(education => (
                        <tr>
                          <th>{education.startYear}/{education.startMonth} - {education.endYear}/{education.endMonth}</th>
                          <td>{education.nameJa}</td>
                        </tr>
                      ))}
                    </table>
                    :
                    <table>
                      {educations.map(education => (
                        <tr>
                          <th>{education.startYear}/{education.startMonth} - {education.endYear}/{education.endMonth}</th>
                          <td>{education.nameEn}</td>
                        </tr>
                      ))}
                    </table>
                  }
                </div>
              </div>

              <TitleBox ja="職歴" en="Career" />
              <div className="profileContentCareer">
                <div className="whiteSpace"></div>
                <div className="flexContainer">
                  インターンシップ・アルバイトを含みます。
                </div>
                <div className="flexContainer">
                  Including internship and part-time experiences.
                </div>
                <div className="profileButtons">
                  <FormControl variant="outlined">
                    <Select className="profileButton" labelId="careerOrder" id="careerOrder" value={lang} onChange={(e) => setLang(Number(e.target.value))}>
                      <MenuItem value={0}>日本語 Japanese</MenuItem>
                      <MenuItem value={1}>英語 English</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined">
                    <Select className="profileButton" labelId="careerOrder" id="careerOrder" value={careersOrder} onChange={handleCareerOrderChange}>
                      <MenuItem value={0}>新しい順 newest to oldest</MenuItem>
                      <MenuItem value={1}>古い順　 oldest to newest</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="flexContainer">
                  <div className="profileContentCareer_table">
                    <div>
                      {careers.map(career => (
                        <a className="careerBoxLink" href={career.companyUrl} target="_blank">
                          <CareerBox>
                            <div className={career.fulltime ? "careerBox_title careerBox_title-fulltime" : "careerBox_title"}>
                              <h2>{lang === 0 ? career.companyJa : career.companyEn}</h2>
                              <div className="careerBoxForm">{lang === 0 ? career.formJa : career.formEn}</div>
                              <div className="careerBoxDetails"><LaunchIcon fontSize="inherit" /></div>
                            </div>
                            <div className="careerBox_content">
                              <div className="careerBoxProgram">{lang === 0 ? '［ ' + career.programJa + ' ］' : <>&nbsp;&nbsp;{<i className="italic">{career.programEn}</i>}&nbsp;:&nbsp;</>}
                            &nbsp;{career.startYear}/{career.startMonth} - {career.endYear === -1 ? (lang === 0 ? '継続中' : 'ongoing') : career.endYear}{career.endMonth !== -1 && '/' + career.endMonth} </div>
                              <div className="careerBoxDescription">... {lang === 0 ? career.descriptionJa : career.descriptionEn}</div>
                              <div className="skillsContainer">
                                {career.skills.map(skill => (
                                  <span className="skill">{lang === 0 ? skill.ja : skill.en}</span>
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

              <TitleBox ja="スキル・資格" en="Skills & Qualification" />
              <div className="profileContentSkills">
                <div className="profileButtons">
                  <FormControl variant="outlined" className="">
                    <Select className="profileButton" labelId="careerOrder" id="careerOrder" value={lang} onChange={(e) => setLang(Number(e.target.value))}>
                      <MenuItem value={0}>日本語 Japanese</MenuItem>
                      <MenuItem value={1}>英語 English</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="whiteSpace2"></div>
                <div className="simpleTableContainer">
                  {lang === 0 ?
                    <table>
                      {skillCategories.map((category, index) => (
                        index < 3 &&
                        <tr>
                          <th className="simpleTableContainer_th-long">{category.ja}</th>
                          <td>
                            <div className="skillsContainer">
                              {Object.entries(sk).filter(e => (
                                e[1].category === index
                              )).map(e => (
                                <span className="skill skill-large">{e[1].ja}</span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </table>
                    :
                    <table>
                      {skillCategories.map((category, index) => (
                        index < 3 &&
                        <tr>
                          <th>{category.en}</th>
                          <td>
                            <div className="skillsContainer">
                              {Object.entries(sk).filter(e => (
                                e[1].category === index
                              )).map(e => (
                                <span className="skill skill-large">{e[1].en}</span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </table>
                  }
                </div>
              </div>

              <div className="whiteSpace2"></div>
              <TitleBox ja="連絡先" en="Contact" />
              <div className="contactContainer">
                <div className="contactIcons">
                  <a href="https://github.com/taigaozawa" className="contactIcons_icon contactIcons_icon-black">
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                  </a>
                  <a href="https://twitter.com/taigaozawa" className="contactIcons_icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                  </a>
                  <a href="mailto:contact.taigaozawa@gmail.com?subject=**件名を入力してください。Please enter a subject.**&amp;body=ご用件 Requirements:%0d%0aお名前 Your name:" className="contactIcons_icon contactIcons_icon-black">
                    <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" />
                  </a>
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