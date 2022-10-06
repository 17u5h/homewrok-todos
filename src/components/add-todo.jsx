import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../store/actions/creators/todo";


export const AddTodo = () => {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	const onInputChange = (event) => {
		setValue(event.target.value)
	}

	const handleAddTodo = () => {
		dispatch(addTodo(value))
		setValue('')
	}

	const handleAddTodoByEnter = (event) => {
		if (event.key === 'Enter') handleAddTodo()
	}

	return (
		<div className='add-todo'>
			<input onKeyDown={handleAddTodoByEnter}
						 className='add-todo__input'
						 type='text'
						 value={value}
						 onChange={onInputChange}/>
			<button className='input-button' onClick={handleAddTodo}>Add todo</button>
		</div>
	)
}