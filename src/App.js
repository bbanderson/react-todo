import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return arr;
}

function App() {
  // 함수를 호출하지 않고 이름만 전달해야 리렌더링마다 호출되지 않는다.
  const [todos, setTodos] = useState(createBulkTodos);
  const idRef = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: idRef.current,
      text,
      checked: false,
    };
    setTodos((todos) => [...todos, todo]);
    idRef.current++;
  }, []);
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
