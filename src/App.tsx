import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { TodoItem } from "./types/todo";

const filterTodo = ({
  todo,
  filter,
}: {
  todo: TodoItem[];
  filter: "done" | "yet" | null;
}) => {
  let filteredTodo;
  if (filter === "done") {
    filteredTodo = todo.filter((item) => item.isCompleted === true);
  } else if (filter === "yet") {
    filteredTodo = todo.filter((item) => item.isCompleted === false);
  } else {
    filteredTodo = todo;
  }

  return filteredTodo;
};

export default function App() {
  const [todo, setTodo] = useState<TodoItem[]>(() => {
    const savedData = localStorage.getItem("todo");
    let initialData = [];
    try {
      initialData = savedData ? JSON.parse(savedData) : [];
    } catch (e) {
      console.error("Failed to parse todo data", e);
      initialData = [];
    }
    return initialData;
  });
  const [filter, setFilter] = useState<"done" | "yet" | null>(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (title: string) => {
    setTodo((prev) => [
      ...prev,
      { id: new Date().getTime().toString(), title, isCompleted: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  };

  const handleFilter = (filter: "done" | "yet" | null) => {
    setFilter(filter);
  };

  return (
    <div className="app">
      <Header filter={filter} onFilter={handleFilter} />
      <Form onAdd={addTodo} />
      <Todo
        todo={filterTodo({ todo, filter })}
        onRemove={removeTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}
