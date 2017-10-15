/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import TwitterAnalytics from 'containers/TwitterAnalytics/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FeaturePage from "containers/FeaturesPage/Loadable";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Analysis of Twitter to BTC influence"
        defaultTitle="Unicorns"
      >
        <meta name="description" content="Analysis of public speakers influence to products demonstrated on twitter posts and BTC/USD rate" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={TwitterAnalytics} />
        <Route exact path="/analysis" component={TwitterAnalytics} />
        <Route exact path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
