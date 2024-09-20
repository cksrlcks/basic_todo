interface Header {
  filter: "done" | "yet" | null;
  onFilter: (filter: "done" | "yet" | null) => void;
}

export default function Header({ filter, onFilter }: Header) {
  return (
    <header className="header">
      <h1 className="header__title">Todo List</h1>
      <nav className="header__nav">
        <ul>
          <li>
            <button
              className={`header__button ${
                filter === null ? "header__button--active" : ""
              }`}
              onClick={() => onFilter(null)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`header__button ${
                filter === "yet" ? "header__button--active" : ""
              }`}
              onClick={() => onFilter("yet")}
            >
              진행중
            </button>
          </li>
          <li>
            <button
              className={`header__button ${
                filter === "done" ? "header__button--active" : ""
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
