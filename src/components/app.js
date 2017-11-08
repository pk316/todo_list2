import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import TodoList from './todo_list';

const App = () => (
    <div className="container">
        <h1 className="center-align"> To do list 2.0</h1>
        <TodoList />
    </div>
);

export default App;
