import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}

	render() {
		const todoItemComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)
		return(
			<div className="todo-list">
				{todoItemComponents}
			</div>
		)
	}
}

export default App

