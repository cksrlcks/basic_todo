import { memo } from "react";
import { TodoItem } from "../../types/todo";
import style from "./style.module.css";

interface ItemProps {
  todo: TodoItem;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

function Item({ todo, onRemove, onToggle }: ItemProps) {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleChange = () => {
    onToggle(todo.id);
  };

  return (
    <li>
      <div className={style["todo-item"]}>
        <input
          type="checkbox"
          className={style["todo-item__checkbox"]}
          checked={todo.isCompleted}
          onChange={handleChange}
        />
        <div className={style["todo-item__label"]}>{todo.title}</div>
        <button
          type="button"
          className={style["todo-item__button"]}
          onClick={handleRemove}
        >
          <img src="/icon/delete.svg" alt="삭제" />
        </button>
      </div>
    </li>
  );
}

export default memo(Item);
