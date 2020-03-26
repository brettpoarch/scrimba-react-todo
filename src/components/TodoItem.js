import React from "react"

class TodoItem extends React.Component {
	render() {
		const isCompleted = this.props.todo.completed ? "completed" : null
		return(
			<div className="todo-item"> 
				<input 
					type="checkbox" 
					checked={this.props.todo.completed}
					onChange={() => this.props.handleChange(this.props.todo.id)}
				/>
				<p className={isCompleted}>{this.props.todo.text}</p>
			</div>
			)
	}
}

export default TodoItem