import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Link from 'gatsby-link';
import Layout from '../components/layout';
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

const PortfolioPage = () => (
  <Redirect to="/work_in_progress" />
);
export default PortfolioPage;
