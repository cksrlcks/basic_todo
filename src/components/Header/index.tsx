import style from "./style.module.css";

interface HeaderProps {
  filter: "done" | "yet" | null;
  onFilter: (filter: "done" | "yet" | null) => void;
}

export default function Header({ filter, onFilter }: HeaderProps) {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Todo List</h1>
      <nav className={style.header__nav}>
        <ul>
          <li>
            <button
              className={`${style.header__button} ${
                filter === null ? style["header__button--active"] : ""
              }`}
              onClick={() => onFilter(null)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`${style.header__button} ${
                filter === "yet" ? style["header__button--active"] : ""
              }`}
              onClick={() => onFilter("yet")}
            >
              진행중
            </button>
          </li>
          <li>
            <button
              className={`${style.header__button} ${
                filter === "done" ? style["header__button--active"] : ""
              }`}
              onClick={() => onFilter("done")}
            >
              완료
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
