import logo from './logo.svg';
import './App.css';
import Add from './components/comp_users/Add'
import View from './components/comp_users/View';
import Edit from './components/comp_users/Edit';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './components/otherComponents/Navbar';

import TodoApp from './components/redux-crud/todoApp';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <BrowserRouter>
        <Route path="/addUser" component={Add} exact></Route>
        <Route path="/editUser/:id" component={Edit} exact></Route>
        <Route path="/users" component={View} exact></Route>
        <Route path="/toDo" component={TodoApp} exact></Route>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
