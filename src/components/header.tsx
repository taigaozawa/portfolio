import * as React from 'react';
import Link from 'gatsby-link';

import '../styles/header.css';

const Header = () => (
  <div className="headerContainer" id="header">
    <div className="header">
      <div className="headerInner">
        <div className="headerLogo">
          <h1 className="headerLogo_text">
            <Link
              to="/"
            >
              <span className="headerLogo_text">
                小澤泰河
            </span>
              <span className="headerLogo_text headerLogo_text-en">
                TaigaOzawa
            </span>
            </Link>
          </h1>
        </div>
        <div>
          <ul className="menu">
            <li className="menu_item"><Link to="/profile">
              <div className="menuText">プロフィール</div>
              <div className="menuText menuText-en">Profile</div>
            </Link></li>
            <li className="menu_item"><Link to="/notes">
              <div className="menuText">ノート</div>
              <div className="menuText menuText-en">Notes</div>
            </Link></li>
            <li className="menu_item"><Link to="/portfolio">
              <div className="menuText">ポートフォリオ</div>
              <div className="menuText menuText-en">Portfolio</div>
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div >
)

export default Header;