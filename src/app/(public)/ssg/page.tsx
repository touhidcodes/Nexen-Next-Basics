import { GetStaticProps } from "next";
import { Todo } from "@/types/todo";
import { TodoListView } from "@/components/shared/ToDoListView/ToDoListView";

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/todos");
//   const todos: Todo[] = await res.json();

//   return { props: { todos } };
// };

// const SSGPage = ({ todos }: { todos: Todo[] }) =>

const SSGPage = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "force-cache", // caches data at build time
  });
  const todos: Todo[] = await res.json();
  return <TodoListView todos={todos} />;
};

export default SSGPage;
