import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

	const todoCount = todos.length;
	const todoPendingCount = todos.filter((todo) => !todo.done).length;
	const todoDoneCount = todoCount - todoPendingCount;

	const handleNewTodo = (todo) => {
		dispatchTodo({ type: '[TODO] Add Todo', payload: todo });
	};

	const handleDeleteTodo = (todoId) => {
		dispatchTodo({ type: '[TODO] Delete Todo', payload: todoId });
	};

	const handleToggleTodo = (todoId) => {
		dispatchTodo({ type: '[TODO] Toggle Todo', payload: todoId });
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos) || []);
	}, [todos]);

	return {
		todos,
		todoCount,
		todoPendingCount,
		todoDoneCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
