import React from 'react'
import { createStore} from 'redux';
import todoReducer from './Reducer_todo';
import { Provider } from 'react-redux';
import Add_todo from './Add_todo';
import TodoLists from './todoLists';
import Comp_todo from './Comp_todo';

export default function TodoApp() {
    const todoStore = createStore(todoReducer)

    return (
        <Provider store={todoStore}>
        <Comp_todo/>
        <Add_todo/>
        <TodoLists/>
        </Provider>
    )
}
