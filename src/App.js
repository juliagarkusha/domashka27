import React, {Fragment, useState, useEffect} from "react";
import './App.scss';

const initialTodoState = [
  {"title":"ipsam cupiditate repudiandae","status":true,"done":false,"id":"1"},
  {"title":"ratione nam alias","status":true,"done":false,"id":"2"},
  {"title":"atque non dolore","status":true,"done":true,"id":"3"},
  {"title":"in quos exercitationem","status":true,"done":false,"id":"4"},
  {"title":"quia perferendis ipsam","status":true,"done":false,"id":"5"},
  {"title":"commodi harum commodi","status":false,"done":false,"id":"6"},
  {"title":"ipsam occaecati nulla","status":false,"done":false,"id":"7"},
  {"title":"nemo soluta tempora","status":false,"done":false,"id":"8"},
];

function App() {
  const [list, setList] = useState(initialTodoState);

  const name = 'John';
  let title;

  const todoList = list.map((todo) => <li key={todo.id}>{todo.title}</li>);

  function onTitleClick(e) {
    title = e.target.value;
  }

  function onSubmit(e) {
    e.preventDefault();

    const todo = {
      title: title,
      id: Date.now(),
    };

    setList([...list, todo]);

    console.log('onSubmit', list);
  }

  useEffect(() => {
    document.title = 'Domashka27';
  }, []);

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={onTitleClick} />
      </form>
      <div className="App">Hello {name} World</div>
      <ul>
        {todoList}
      </ul>
    </Fragment>
  );
}

export default App;
