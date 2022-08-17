import { combineReducers } from 'redux';

import filterReducer from '../components/Filters/FiltersSlice';
import todoListReducer from '../components/TodoList/todosSlice';


const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoListReducer
})


export default rootReducer;
