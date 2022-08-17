import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritySelector = (state) => state.filter.priority;

export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority.length > 0
                    ? todo.name.includes(searchText) &&
                          priority.includes(todo.priority)
                    : todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority) : true)
            );
        });
    }
);
