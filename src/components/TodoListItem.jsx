import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import { useCallback } from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { checked, text, id } = todo;
  const onClickRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);
  const onClickToggle = useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={onClickToggle}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClickRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;