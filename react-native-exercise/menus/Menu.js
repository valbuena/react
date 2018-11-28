import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import NewDeck from '../components/NewDeck'
import NewCard from '../components/NewCard'
import ListDecks from '../components/ListDecks'
import DeckDetail from '../components/DeckDetail'
import QuizDetail from '../components/QuizDetail'
import { green } from '../utils/colors'

export const HOME = 'Home'
export const DECK_DETAIL = 'DeckDetail'
export const NEW_CARD = 'NewCard'
export const QUIZ_DETAIL = 'QuizDetail'

export const StackMenu = createStackNavigator ({
  Home: {
    screen: ListDecks
  },
  DeckDetail :{
    screen: DeckDetail
  },
  NewCard :{
    screen: NewCard
  },
  QuizDetail :{
    screen : QuizDetail
  },
})



export const Menu = createBottomTabNavigator({
  Home: {
    screen:StackMenu,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Entypo name='archive' size={30} color={tintColor}/>
    },
  },
  NewDeck: {
    screen:NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <MaterialIcons name='note-add' size={30} color={tintColor}/>
  }
}
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: green
  }
});
