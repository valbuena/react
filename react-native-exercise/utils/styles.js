import {StyleSheet} from 'react-native'
import { green, red, white } from './colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'

  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  normalText : {
    color: green,
    fontSize: 22,
    padding:20
  },
  specialText : {
    color: red,
    fontSize: 22,
    padding:20
  },
  input : {
    borderColor: green,
    borderWidth: 1,
    borderRadius: 10,
    padding : 20,
    margin: 10,
  },
  button : {
    backgroundColor : green,
    alignItems: 'center',
    borderRadius: 10,
    padding : 20,
    margin: 10,
  },
  buttonText : {
    color: white,
    fontSize: 22
  },
})
