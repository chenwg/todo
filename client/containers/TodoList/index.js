import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoAction from 'actions/todo'

import TodoList from './TodoList'

function mapStateToProps(state, ownProps){
  const {todos} = state
  return {todos}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(todoAction, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoList)
