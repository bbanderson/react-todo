import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat breakfast', checked: true },
    { id: 2, text: 'Eat lunch', checked: true },
    { id: 3, text: 'Eat dinner', checked: true },
  ]);
  const idRef = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: idRef.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      idRef.current++;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      const filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
