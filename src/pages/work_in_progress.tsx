import * as React from 'react'
import Layout from '../components/layout';

import '../styles/main.css';
import '../styles/404.css';


const WorkInProgressPage = () => (
  <Layout>
    <div className="notFoundMessage">
      <h1>Sorry! Work in Progress...</h1>
      <p>このページは準備中です。公開までしばらくお待ちください。</p>
      <p>This page is under construction. Sorry for the inconvenience.</p>
    </div>
  </Layout>
)

export default WorkInProgressPage;
