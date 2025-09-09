"use client";

import { useState } from "react";

type TodoFormProps = {
  onSuccess?: () => void;
};

export default function TodoForm({ onSuccess }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setLoading(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, priority }),
      });

      if (!res.ok) throw new Error("Failed to create todo");

      setTitle("");
      setPriority("medium");
      onSuccess?.();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 border rounded-xl shadow-md p-6 flex flex-col gap-4 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Add New Todo
      </h2>

      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none dark:bg-gray-700 dark:text-gray-100"
        disabled={loading}
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value as "low" | "medium" | "high")
        }
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none dark:bg-gray-700 dark:text-gray-100"
        disabled={loading}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Todo"}
      </button>
    </form>
  );
}
