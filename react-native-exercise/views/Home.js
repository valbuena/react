import React, {Component} from 'react'
import {Menu} from '../menus/Menu'
import {connect } from 'react-redux'
import {getDecks} from '../data/actions'

class Home extends Component {

  componentDidMount() {
    this.props.loadDecks();
  }

  render() {
    return (
        <Menu/>
    )
  }
}

const mapStateToProps = state => ({ ...state });

function mapDispatchToProps (dispatch){
  return {
    loadDecks : () => dispatch(getDecks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
