import React, {Component, PropTypes} from 'react'

class TodoList extends Component{
  state = {
    title: ''
  }

  componentDidMount(){
    this.props.actions.find()
  }

  handleChange = (e) => {
    switch (e.type) {
      case 'change':
        this.setState({title: e.currentTarget.value})
        break;
      case 'keydown':
        if(e.which === 13){
          this.props.actions.create(this.state.title)
        }
      break;
    }
  }

  render(){
    const {todos} = this.props
    const {title} = this.state
    const todoItems = (todos||[]).map((todo) => {
      return (
        <li key={todo.id}>{todo.title}</li>
      )
    })

    return (
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          value={title}
          style={{display: 'block'}}
          onChange={this.handleChange}
          onKeyDown={this.handleChange}
        />
        <ul>{todoItems}</ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object.isRequired
}

export default TodoList
