/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR, LOAD_ANALYTICS, LOAD_ANALYTICS_SUCCESS, LOAD_ANALYTICS_ERROR, LOAD_BTC_RATES_SUCCESS,
  LOAD_BTC_RATES_ERROR, LOAD_TWEETS_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  data: null,
  btcRates: [],
  tweets: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_ANALYTICS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_ANALYTICS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.data)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_ANALYTICS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_BTC_RATES_SUCCESS:
      return state
        .set('btcRates', action.btcRates)
        .set('loading', false);
    case LOAD_BTC_RATES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_TWEETS_SUCCESS:
      return state
        .set('tweets', action.tweets)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
