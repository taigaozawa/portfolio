import * as React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import ProfileMain from '../components/profile/profileMain';
import ProfileHero from '../components/profile/profileHero';
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

const ProfilePage = () => (
  <Layout>
    <ProfileHero />
    <ProfileMain />
  </Layout>
);
export default ProfilePage;
