import { TodoItem } from "../../types/todo";
import Item from "./Item";
import style from "./style.module.css";

interface TodoProps {
  todo: TodoItem[];
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function Todo({ todo, onRemove, onToggle }: TodoProps) {
  return (
    <ul className={style["todo-list"]}>
      {todo.map((item) => (
        <Item
          key={item.id}
          todo={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
