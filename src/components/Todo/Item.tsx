import { TodoItem } from "../../types/todo";
import style from "./style.module.css";

interface Item {
  todo: TodoItem;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function Item({ todo, onRemove, onToggle }: Item) {
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
          defaultChecked={todo.isCompleted}
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
