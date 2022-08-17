const initValue = [{ id: 1, name: 'js', completed: true, priority: 'Medium' }];

const todoListReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

export default todoListReducer;
