import React, { Component } from 'react'
import {ScrollView, Text, StatusBar } from 'react-native'
import {ListItem} from "react-native-elements";
import { connect } from 'react-redux'
import { green} from '../utils/colors'
import CommonStyles from '../utils/styles'
import {DECK_DETAIL} from '../menus/Menu'

class ListDecks extends Component {

  deckDetail(deckId){
    this.props.goDeckDetail(deckId)
  }

  render(){
    const {decks} = this.props
    const keys = (decks!=null)?Object.keys(decks):[]
    return (
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
        />
        {keys.map(deck =>(
             <ListItem
               key={deck}
               title={decks[deck].title}
               titleStyle={CommonStyles.normalText}
               onPress={() => this.deckDetail(deck)}
               badge={{ value: decks[deck].questions.length, textStyle: { color: 'green'}}}
               />
           ))}
       </ScrollView>
    )
  }
}

function mapStateToProps (state){
  return {
    decks : state.decks
  }
}

function mapDispatchToProps (dispatch, {navigation}) {
   return {
     goDeckDetail: (deckId) => navigation.navigate(DECK_DETAIL, {deckId})
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDecks)
