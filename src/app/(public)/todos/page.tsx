// import Link from "next/link";

// type Todo = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// type Props = {
//   todos: Todo[];
// };

// export default function TodoList({ todos }: Props) {
//   return (
//     <div>
//       <h1>Todo List (Static Props)</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Fetch data at build time
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/todos?_limit=10"
//   );
//   const todos: Todo[] = await res.json();

//   return {
//     props: { todos },
//     revalidate: 10, // optional: ISR, re-build every 10s
//   };
// }

"use client";

import { useEffect, useState } from "react";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
  priority: string;
  createdAt: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("/api/todos");
        console.log("res", res);
        const data = await res.json();
        console.log("data", data);
        setTodos(data.data);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) return <p className="p-4">Loading todos...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex items-center justify-between border p-3 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-medium">{todo.title}</p>
              <p className="text-sm text-gray-500">
                Priority: {todo.priority} |{" "}
                {new Date(todo.createdAt).toLocaleDateString()}
              </p>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded ${
                todo.completed
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
