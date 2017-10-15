/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { fromJS } from 'immutable';

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_ANALYTICS,
  LOAD_ANALYTICS_SUCCESS,
  LOAD_ANALYTICS_ERROR, LOAD_BTC_RATES_SUCCESS, LOAD_BTC_RATES_ERROR, LOAD_TWEETS_SUCCESS,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function loadAnalytics() {
  return {
    type: LOAD_ANALYTICS,
  };
}

export function reposLoaded(...data) {
  return {
    type: LOAD_REPOS_SUCCESS,
    ...data,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} data The analytics data
 *
 * @return {object} An action object with a type of LOAD_ANALYTICS_SUCCESS passing the repos
 */
export function analyticsLoaded(data) {
  return {
    type: LOAD_ANALYTICS_SUCCESS,
    data,
  };
}

export function btcRatesLoaded(data) {
  return {
    type: LOAD_BTC_RATES_SUCCESS,
    btcRates: fromJS(data),
  };
}

export function btcTweetsLoaded(data) {
  return {
    type: LOAD_TWEETS_SUCCESS,
    tweets: fromJS(data),
  };
}

export function btcRatesLoadingError(error) {
  return {
    type: LOAD_BTC_RATES_ERROR,
    error,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function analyticsLoadingError(error) {
  return {
    type: LOAD_ANALYTICS_ERROR,
    error,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
