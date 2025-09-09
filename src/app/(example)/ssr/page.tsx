import { Todo } from "@/types/todo";
import { TodoListView } from "@/components/shared/ToDoListView/ToDoListView";
// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/todos");
//   const todos: Todo[] = await res.json();

//   return { props: { todos } };
// };

// const SSRPage = ({ todos }: { todos: Todo[] }) =>

const SSRPage = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store", // forces SSR, no caching
  });
  const todos: Todo[] = await res.json();
  return <TodoListView todos={todos} />;
};

export default SSRPage;
