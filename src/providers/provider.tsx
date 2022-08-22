// create a todo react context

import React, { createContext, ReactNode, useContext, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number, state?: boolean) => void;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
});

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number, state?: boolean) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = state !== undefined ? state : !todo.completed;
      setTodos(newTodos);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
