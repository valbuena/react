import { combineReducers } from 'redux';
import { RECEIVE_DECKS, MERGE_DECK } from './actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return action.decks
    case MERGE_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default combineReducers({
  decks,
});
