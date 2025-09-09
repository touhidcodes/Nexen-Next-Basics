import { Todo } from "@/types/todo";
import { TodoListView } from "@/components/shared/ToDoListView/ToDoListView";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/todos");
//   const todos: Todo[] = await res.json();

//   return {
//     props: { todos },
//     revalidate: 10, // regenerate every 10 seconds
//   };
// };

// const ISRPage = async ({ todos }: { todos: Todo[] }) =>

const ISRPage = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    next: { revalidate: 60 }, // regenerate page every 60 seconds
  });
  const todos: Todo[] = await res.json();

  return <TodoListView todos={todos} />;
};

export default ISRPage;
