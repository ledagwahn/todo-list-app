import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList 
                todos={todos} 
                addTodo={addTodo} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
            />
        </div>
    );
};

export default App;