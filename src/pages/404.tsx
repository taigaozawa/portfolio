import * as React from 'react'
import Layout from '../components/layout';

import '../styles/main.css';
import '../styles/404.css';


const NotFoundPage = () => (
  <Layout>
    <div className="notFoundMessage">
      <h1>Sorry! Page Not Found...</h1>
      <h2>Status Code: 404 Not Found</h2>
      <p>ご指定のページは見つかりませんでした。ページが存在しないか、移動した可能性があります。</p>
      <p>The requested URL was not found. The page may no longer exist or may be moved.</p>
    </div>
  </Layout>
)

export default NotFoundPage
