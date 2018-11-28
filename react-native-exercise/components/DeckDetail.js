import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import CommonStyles from '../utils/styles'
import {saveDeck} from '../data/actions'
import { connect } from 'react-redux'
import {clearLocalNotification, setLocalNotification} from '../data/notificationDB'
import {NEW_CARD, QUIZ_DETAIL} from '../menus/Menu'

class DeckDetail extends Component {

  newCard(){
    this.props.goNewCard()
  }

  startQuiz(){
    clearLocalNotification()
      .then(setLocalNotification)
    this.props.goStartQuiz()
  }

  render(){
    const {deckId, deck} = this.props
    return (
      <View style={CommonStyles.container}>
        <View style={CommonStyles.description}>
          <Text style={CommonStyles.normalText}>{deck.title}</Text>
          <Text style={CommonStyles.normalText}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity style={CommonStyles.button} onPress={() => this.newCard()}>
          <Text style={CommonStyles.buttonText}> Add Card</Text>
        </TouchableOpacity>
        {deck.questions.length >0 && (
          <TouchableOpacity style={CommonStyles.button} onPress={() => this.startQuiz()}>
            <Text style={CommonStyles.buttonText}> Start Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

 function mapStateToProps (state, {navigation}) {
   const { deckId } = navigation.state.params
   return {
     deckId,
     deck: state.decks[deckId],
   }
 }

 function mapDispatchToProps (dispatch, {navigation}) {
    const { deckId } = navigation.state.params
    return {
      goNewCard: ()  => navigation.navigate(NEW_CARD, {deckId}),
      goStartQuiz: () => navigation.navigate(QUIZ_DETAIL, {deckId})
    }
 }

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(DeckDetail)
