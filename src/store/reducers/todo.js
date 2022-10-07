import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/types/todo";


const initialState = {
	allIds: [],
	byIds: {}
}

export default function todoReducer(state = initialState, action) {
	switch (action.type) {

		case ADD_TODO: {
			const {id, content} = action.payload

			return {
				...state,
				allIds: [...state.allIds, id],
				byIds: {
					...state.byIds,
					[id]: {
						content,
						completed: false
					}
				}
			}
		}
		case TOGGLE_TODO: {
			const {id} = action.payload
			const targetTodo = state.byIds[id]

			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...targetTodo,
						completed: !targetTodo.completed
					}
				}
			}
		}
		case DELETE_TODO: {
			const {id} = action.payload

			const allIdsWithoutTarget = state.allIds.filter((el) => el !== id)

			delete state.byIds[id]

			return {
				...state,
				allIds: allIdsWithoutTarget,
				byIds: {...state.byIds}
			}
		}
		default:
			return state
	}
}