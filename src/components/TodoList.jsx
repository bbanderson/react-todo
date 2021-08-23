import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { memo, useCallback } from 'react';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // 배열의 각 Item을 출력하는 역할
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          key={key}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );
  return (
    <List
      className="TodoList"
      rowRenderer={rowRenderer} // 렌더링 함수
      rowCount={todos.length} // 항목 개수
      list={todos} // 배열
      rowHeight={57}
      width={512}
      height={513}
      style={{ outline: 'none' }}
    />
  );
};

export default memo(TodoList);
