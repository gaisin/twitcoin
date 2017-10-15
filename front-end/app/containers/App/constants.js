/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';

export const LOAD_ANALYTICS = 'boilerplate/App/LOAD_ANALYTICS';
export const LOAD_ANALYTICS_SUCCESS = 'boilerplate/App/LOAD_ANALYTICS_SUCCESS';
export const LOAD_ANALYTICS_ERROR = 'boilerplate/App/LOAD_ANALYTICS_ERROR';

export const LOAD_BTC_RATES_SUCCESS = 'boilerplate/App/LOAD_BTC_RATES_SUCCESS';
export const LOAD_BTC_RATES_ERROR = 'boilerplate/App/LOAD_BTC_RATES_ERROR';

export const LOAD_TWEETS_SUCCESS = 'boilerplate/App/LOAD_TWEETS_SUCCESS';
