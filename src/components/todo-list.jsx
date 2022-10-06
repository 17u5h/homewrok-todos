import {useSelector} from "react-redux";
import {todosSelector} from "../store/selectors/todo";
import {Todo} from "./todo";


export const TodoList = () => {
	const todos = useSelector(todosSelector)

	const completedTodos = todos.filter((todo) => todo.completed)
	const uncompletedTodos = todos.filter((todo) => !todo.completed)

	return (
		<ul className='todo-list'>
			{uncompletedTodos.map((todo) => (
				<Todo key={todo.id} todo={todo}/>
			))}
			{completedTodos.map((todo) => (
				<Todo key={todo.id} todo={todo}/>
			))}
		</ul>
	)
}