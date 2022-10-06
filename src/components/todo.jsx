import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../store/actions/creators/todo";


export const Todo = ({todo}) => {
	const dispatch = useDispatch()

	const toggleTodoItem = () => {
		dispatch(toggleTodo(todo.id))
	}
	const deleteTodoItem = () => {
		dispatch(deleteTodo(todo.id))
	}

	return (
		<li className='todo-item' onClick={toggleTodoItem}>
			{todo.completed ? '👍' : '🖐'}
			<span className={todo.completed ? 'todo-item__sign_completed' : 'todo-item__sign'}>
				{todo.content}
			</span>
			<button className='delete-button' onClick={deleteTodoItem}>⮿</button>
		</li>
	)
}