import Link from "next/link";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <div>
      <h1>Todo List (Static Props)</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos: Todo[] = await res.json();

  return {
    props: { todos },
    revalidate: 10, // optional: ISR, re-build every 10s
  };
}
