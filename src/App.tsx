import "./styles/temp.css";
export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Todo List</h1>
        <nav className="header__nav">
          <ul>
            <li>
              <button className="header__button header__button--active">
                All
              </button>
            </li>
            <li>
              <button className="header__button">진행중</button>
            </li>
            <li>
              <button className="header__button">완료</button>
            </li>
          </ul>
        </nav>
      </header>
      <form className="form">
        <div className="input-field">
          <input
            type="text"
            className="input-field__input"
            placeholder="할일을 적어주세요"
          />
          <button type="submit" className="input-field__button" disabled>
            작성
          </button>
        </div>
        <div className="form__msg">적어도 2자이상은 적어주세요</div>
      </form>
      <ul className="todo-list">
        <li>
          <div className="todo-item">
            <input type="checkbox" className="todo-item__checkbox" />
            <div className="todo-item__label">html, css 만들기</div>
            <button type="button" className="todo-item__button">
              <img src="/icon/delete.svg" alt="삭제" />
            </button>
          </div>
        </li>
        <li>
          <div className="todo-item">
            <input type="checkbox" className="todo-item__checkbox" />
            <div className="todo-item__label">뼈대 만들기</div>
            <button type="button" className="todo-item__button">
              <img src="/icon/delete.svg" alt="삭제" />
            </button>
          </div>
        </li>
        <li>
          <div className="todo-item">
            <input type="checkbox" className="todo-item__checkbox" />
            <div className="todo-item__label">
              긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글
            </div>
            <button type="button" className="todo-item__button">
              <img src="/icon/delete.svg" alt="삭제" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
