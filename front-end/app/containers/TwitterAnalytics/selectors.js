/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectAnalytics = (state) => state.get('analytics');

const makeSelectUsername = () => createSelector(
  selectAnalytics,
  (analyticsState) => analyticsState.get('username')
);

const makeSelectStartDate = () => createSelector(
  selectAnalytics,
  (analyticsState) => analyticsState.get('startDate')
);

const makeSelectEndDate = () => createSelector(
  selectAnalytics,
  (analyticsState) => analyticsState.get('endDate')
);
export {
  selectAnalytics,
  makeSelectUsername,
  makeSelectStartDate,
  makeSelectEndDate
};
