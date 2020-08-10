import React from 'react';

import Header from './Header';
import TodoListWrapper from './Todo/TodoListWrapper';

const App = ({auth, logoutHandler, db}) => {
  return (
    <div>
      <Header logoutHandler={logoutHandler} />
      <div className="todo-list">
        <TodoListWrapper db={db} auth={auth} />
      </div>
    </div>
  );
};

export default App;
