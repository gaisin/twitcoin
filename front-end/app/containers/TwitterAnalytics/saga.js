/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ANALYTICS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

// import request from 'utils/request';
import axios from 'axios';
import { makeSelectStartDate, makeSelectEndDate } from 'containers/TwitterAnalytics/selectors';
import moment from "moment";
import {btcRatesLoaded, btcRatesLoadingError, btcTweetsLoaded} from "../App/actions";
import {requestURL} from "./constants";

/**
 * Github repos request/response handler
 */
export function* getAnalytics() {
  // Select username from store
  const startDate = moment(yield select(makeSelectStartDate())).format('YYYY-MM-DD');
  const endDate = moment(yield select(makeSelectEndDate())).format('YYYY-MM-DD');

  try {
    const { data : data } = yield call(axios.post, requestURL, {'start_date': startDate, 'end_date': endDate});
    const { rates : btcRates, tweets } = data;
    const vals = Object.entries(btcRates).map(([k, v]) => { return {name: k, value: v}; });
    yield put(btcRatesLoaded(vals));
    yield put(btcTweetsLoaded(tweets));
  } catch (err) {
    yield put(btcRatesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* analyticsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ANALYTICS, getAnalytics);
}
