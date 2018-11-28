import React, { Component } from 'react'
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity} from 'react-native'
import CommonStyles from '../utils/styles'
import {saveDeck} from '../data/actions'
import { connect } from 'react-redux'
import ValidationComponent from 'react-native-form-validator';
import {DECK_DETAIL} from '../menus/Menu'

class NewCard extends ValidationComponent {

  state = {
    question : '',
    answer : '',
    error : '',
  }

  addCard(){
    const isValid = this.validate({
      question: {required: true},
      answer: {required: true},
    });
    if (isValid){
      const {question, answer} = this.state
      const {deck} = this.props
      const newQuestion = {question, answer}
      deck.questions.push(newQuestion)
      this.props.updateDeck({deck})
      this.props.goDeckDetail()
    } else {
      this.setState({error :'* All fields are mandatory'})
    }
  }

  render(){
    return (
      <KeyboardAvoidingView style={CommonStyles.container}>
        <Text style={CommonStyles.specialText}>{this.state.error}</Text>
        <Text style={CommonStyles.normalText}>What is the new question and its answer?</Text>
        <TextInput
          ref="question"
          style={CommonStyles.input}
          onChangeText={(question) => this.setState({question})}
          placeholder="Question"
          ></TextInput>
        <TextInput
          ref="answer"
          style={CommonStyles.input}
          onChangeText={(answer) => this.setState({answer})}
          placeholder="Answer"
          ></TextInput>
        <TouchableOpacity style={CommonStyles.button} onPress={() => this.addCard()}>
          <Text style={CommonStyles.buttonText}> Create Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
     updateDeck: ({deck}) => dispatch(saveDeck({deckId, deck})),
     goDeckDetail: () => navigation.navigate(DECK_DETAIL, {deckId})
   }
}

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(NewCard)
