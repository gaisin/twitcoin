/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadAnalytics } from '../App/actions';
import { changeEndDate, changeStartDate } from './actions';
import { makeSelectEndDate, makeSelectStartDate } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectBTCRates, makeSelectTweets } from "../App/selectors";
import moment from "moment";
import AxisLabel from "../../components/AxisLabel";

export class AnalyticsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.startDate && this.props.endDate) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { error, btcRates } = this.props;

    const _timeTweetMaps = this.props.tweets.reduce((prev, curr) => {
      const timestamp = moment(curr.timestamp).format('YYYY-MM-DD');
      const text = curr.user;

      if (prev[timestamp] && prev[timestamp].size > 0) {
        prev[timestamp].add(text);
      } else {
        prev[timestamp] = new Set();
        prev[timestamp].add(text)
      }

      return prev;
    }, {});

    let timeTweetMaps = {};
    Object.entries(_timeTweetMaps).map(([k, v]) => {
      timeTweetMaps[k] = Array.from(v).map(vv => `${vv}`).join(', ');
    });

    return (
      <article>
        <Helmet>
          <title>Twitter Analysis</title>
          <meta name="diescription" content="Twitter-related BTC rate influence" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.analyticsHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.analyticsMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.tryHeader} />
            </H2>
            {error && (<p>{`${error}`}</p>)}
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="from">
                <FormattedMessage {...messages.fromMessage} />
                <Input
                  id="from"
                  type="date"
                  min="2017-03-01"
                  value={this.props.startDate}
                  onChange={this.props.onChangeStartDate}
                />
              </label>
              <label htmlFor="to">
                <FormattedMessage {...messages.toMessage} />
                <Input
                  id="to"
                  type="date"
                  max="2017-10-14"
                  value={this.props.endDate}
                  onChange={this.props.onChangeEndDate}
                />
              </label>
              <button type="submit" style={{ border: '1px solid grey', borderRadius: '5px' }}>Go!</button>
            </Form>

            <LineChart width={800} height={500} data={btcRates.map((i) => {
              return {name: i['name'], value: i['value'], text: timeTweetMaps[i['name']]};
            })} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
              <XAxis dataKey="name" />
              <YAxis dataKey="value" label={({ viewBox }) => <AxisLabel axisType="yAxis" {...viewBox}>BTC/USD</AxisLabel>} />
              <Line type="monotone" name="Talks" dataKey="text" stroke="#0f0" dot={true} />
              <Line type="monotone" name="Price ($)" dataKey="value" stroke="#000" dot={false} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
            </LineChart>

          </Section>
        </div>
      </article>
    );
  }
}

AnalyticsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  tweets: PropTypes.array,
  btcRates: PropTypes.array
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeStartDate: (evt) => dispatch(changeStartDate(evt.target.value)),
    onChangeEndDate: (evt) => dispatch(changeEndDate(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadAnalytics());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  btcRates: makeSelectBTCRates(),
  tweets: makeSelectTweets(),
  startDate: makeSelectStartDate(),
  endDate: makeSelectEndDate(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'analytics', reducer });
const withSaga = injectSaga({ key: 'analytics', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AnalyticsPage);
