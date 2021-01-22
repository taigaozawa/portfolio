import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理

import '../styles/contactBox.css';

const ContactBox: React.FC = () => (
  <div className="contactContainer">
    <div className="contactIcons">
      <a href="https://github.com/taigaozawa" className="contactIcons_icon contactIcons_icon-black" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
      </a>
      <a href="https://twitter.com/taigaozawa" className="contactIcons_icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
      </a>
      <a href="mailto:contact.taigaozawa@gmail.com?subject=**件名を入力してください。Please enter a subject.**&amp;body=ご用件 Requirements:%0d%0aお名前 Your name:" className="contactIcons_icon contactIcons_icon-black">
        <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" />
      </a>
    </div>
  </div>
)

export default ContactBox;