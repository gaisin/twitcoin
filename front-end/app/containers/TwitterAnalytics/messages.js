/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  analyticsHeader: {
    id: 'boilerplate.containers.TwitterAnalytics.analytics.header',
    defaultMessage: 'Analyse tweets for period and their influence on BTC/USD rate',
  },
  analyticsMessage: {
    id: 'boilerplate.containers.TwitterAnalytics.analytics.message',
    defaultMessage: 'Check and analyse influence of public speakers to BTC/USD rate',
  },
  tryHeader: {
    id: 'boilerplate.containers.TwitterAnalytics.try.header',
    defaultMessage: 'Analyse',
  },
  fromMessage: {
    id: 'boilerplate.containers.TwitterAnalytics.from.message',
    defaultMessage: 'From',
  },
  toMessage: {
    id: 'boilerplate.containers.TwitterAnalytics.to.message',
    defaultMessage: 'To',
  },
});
