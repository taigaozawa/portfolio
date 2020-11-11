import * as React from 'react';
import useInterval from 'use-interval';
import { Link } from 'react-scroll';

import '../../styles/profileHero.css';

const ProfileHero = () => {
  return (
    <div className="profileImageContainer">
      <div className="profileImageFilter">
        <img className="profileImage" src="/whistler.jpg" alt="TMU" />
        <div className="profileImageText">
          <div className="profileTitleContainer">
            <div className="profileTitle">
              プロフィール
            </div>
            <div className="profilteTitle profileTitle-en">
              Profile
            </div>
            <div className="profileTitleDescription">
              <div className="profileTitleDescription_text">
                学歴、職歴、スキル・資格
              </div>
              <div className="profileTitleDescription_text profileTitleDescription_text-en">
                Education, Career and Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProfileHero;