
import { AsyncStorage } from 'react-native'

export const DECKS_STORE = 'ReactNative:decks'

export function fetchDecksDB () {
  //clearDecks()
  return AsyncStorage.getItem(DECKS_STORE)
  .then((results) => JSON.parse(results))
}

export  function mergeDeckDB ({deckId, deck}){
  return AsyncStorage.mergeItem(DECKS_STORE, JSON.stringify({
    [deckId]: deck
  }))
}

export function clearDecks () {
  AsyncStorage.removeItem(DECKS_STORE)
}
