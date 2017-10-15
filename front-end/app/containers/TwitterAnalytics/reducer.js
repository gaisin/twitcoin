/*
 * HomeReducer
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
  CHANGE_END_DATE,
  CHANGE_START_DATE,
  CHANGE_USERNAME,
} from './constants';
import moment from "moment";

// The initial state of the App
const initialState = fromJS({
  username: '',
  startDate: '2017-10-01',
  endDate: '2017-10-10',
});

function analyticsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case CHANGE_START_DATE:

      return state
        .set('startDate', action.start_date);
    case CHANGE_END_DATE:

      return state
        .set('endDate', action.end_date);
    default:
      return state;
  }
}

export default analyticsReducer;
