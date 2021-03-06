import * as React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import TopHero from '../components/top/topHero';
import TopMain from '../components/top/topMain';
import { homedir } from 'os';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Home = () => (
  <Layout>
    <TopHero />
    <TopMain />
  </Layout>
);
export default Home;

export const pageQuery = graphql`
  query IndexQuery {
        site {
        siteMetadata {
        title
      }
    }
  }
`
