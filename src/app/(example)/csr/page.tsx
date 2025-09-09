"use client";
import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import { TodoListView } from "@/components/shared/ToDoListView/ToDoListView";

const CSRPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggleComplete = async (id: string, completed: boolean) => {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    fetchTodos();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  return (
    <TodoListView
      todos={todos}
      onToggleComplete={handleToggleComplete}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};

export default CSRPage;
