import React, {Component} from 'react'
import Home from './views/Home'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './data/reducers'
import thunk from 'redux-thunk';
import {setLocalNotification} from './data/notificationDB'

const store = createStore(reducers, applyMiddleware(thunk))

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}
