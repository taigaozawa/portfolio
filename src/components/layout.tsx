import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import Main from './main';

import '../styles/reset.css';
import '../styles/layouts.css';

const Layout: React.FC = (props) => (
  <div>
    <Helmet
      title="小澤泰河 TaigaOzawa"
      meta={[
        { name: 'description', content: '小澤泰河 Taiga Ozawa' },
        { name: 'keywords', content: '小澤泰河, Taiga Ozawa' },
      ]}
    />
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </div>
);

export default Layout
