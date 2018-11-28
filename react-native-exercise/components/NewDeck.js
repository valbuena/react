import React, { Component } from 'react'
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity} from 'react-native'
import CommonStyles from '../utils/styles'
import {saveDeck} from '../data/actions'
import { connect } from 'react-redux'
import ValidationComponent from 'react-native-form-validator';
import {HOME} from '../menus/Menu'

class NewDeck extends ValidationComponent {

  state = {
    title : '',
    error : ''
  }

  addDeck(){
    const isValid = this.validate({
      title: {required: true},
    });
    if (isValid){
      const title = this.state.title
      const deckId = title
      const deck = {title : deckId, questions : []}
      this.props.addDeck({deckId, deck})
      this.props.goHome()
    } else {
      this.setState({error :'* Title is mandatory'})
    }
  }

  render(){
    return (
      <KeyboardAvoidingView style={CommonStyles.container}>
        <Text style={CommonStyles.specialText}>{this.state.error}</Text>
        <Text style={CommonStyles.normalText}>What is the title for your next deck?</Text>
        <TextInput ref="title" style={CommonStyles.input}
          onChangeText={(title) => this.setState({title})}
          ></TextInput>
        <TouchableOpacity style={CommonStyles.button} onPress={() => this.addDeck()}>
          <Text style={CommonStyles.buttonText}> Add Deck </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch, {navigation}) {
   return {
     addDeck: ({deckId, deck}) => dispatch(saveDeck({deckId, deck})),
     goHome: () => navigation.navigate(HOME)
   }
}


 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(NewDeck)
