import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {StyleSheet,View, Text, TextInput, TouchableOpacity} from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import { green, white, red} from '../utils/colors'
import { connect } from 'react-redux'
import CommonStyles from '../utils/styles'
import {HOME} from '../menus/Menu'

function Question ({test, checkAnswer}) {
    return (
        <View style={CommonStyles.description}>
          <Text style={CommonStyles.normalText}>{test.question}</Text>
          <TouchableOpacity style={CommonStyles.button} onPress={checkAnswer}>
            <Text style={CommonStyles.buttonText}> Check Answer </Text>
          </TouchableOpacity>
        </View>
    )
}

function Answer ({test, rightAnswer, wrongAnswer}) {
    return (
      <View style={styles.container}>
        <View style={CommonStyles.description}>
          <Text style={CommonStyles.specialText}>{test.answer}</Text>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity style={CommonStyles.button} onPress={rightAnswer}>
            <MaterialIcons name='check-circle' size={30} color={white} />
            <Text style={CommonStyles.buttonText}> Right</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CommonStyles.button} onPress={wrongAnswer}>
            <MaterialIcons name='error' size={30} color={red} />
            <Text style={CommonStyles.buttonText}> Wrong </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

function Total ({score, total, home}) {
    const percentage = (score * 100)/ total
    return (
        <View style={CommonStyles.description}>
          <PercentageCircle radius={35} percent={percentage} color={green}></PercentageCircle>
          <Text style={CommonStyles.normalText}> Right answers : {score} of {total}</Text>

          <TouchableOpacity style={CommonStyles.button} onPress={home}>
            <Text style={CommonStyles.buttonText}> Start to Play </Text>
          </TouchableOpacity>
        </View>
    )
}

class QuizDetail extends Component {

  state = {
    score : 0,
    currentQuestion : 0,
    currentScreen : 'question',
  }

  goHome(){
    this.props.goHome()
  }

  checkAnswer(){
    this.setState({currentScreen : 'answer'})
  }

  nextQuestion(){
    const totalQuestions = this.props.deck.questions.length
    let nextQuestion = this.state.currentQuestion + 1
    let nextScreen = 'question'
    if (nextQuestion == totalQuestions){
      nextScreen = 'total'
      nextQuestion = this.state.currentQuestion
    }
    this.setState((state) =>
    ({
      currentQuestion : nextQuestion,
      currentScreen : nextScreen
    }))
  }

  rightAnswer(){
      this.setState((state) => ({score : state.score +1}))
      this.nextQuestion()
  }

  wrongAnswer(){
      this.nextQuestion()
  }


currentQuestion
  render(){
    const {score, currentQuestion,currentScreen} = this.state
    const {deckId, deck} = this.props
    const test = deck.questions[currentQuestion]
    const testNumber = currentQuestion + 1
    const testTotal = deck.questions.length

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={CommonStyles.normalText}>Question {testNumber} / {testTotal} </Text>
        </View>
        <View style={styles.body}>
         {currentScreen === 'question'  &&
           ( <Question test = {test} checkAnswer={() => this.checkAnswer()}/>)
         }
         {currentScreen === 'answer'  &&
          ( <Answer test = {test}
                    rightAnswer={() => this.rightAnswer()}
                    wrongAnswer={() => this.wrongAnswer()}
            />)
         }
         {currentScreen === 'total'  &&
           ( <Total score = {score} total={testTotal} home={() => this.goHome()}/>)
         }
         </View>
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
   return {
     goHome: () => navigation.navigate(HOME)
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch'

  },
  answers: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'row'
  },
})


 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(QuizDetail)
