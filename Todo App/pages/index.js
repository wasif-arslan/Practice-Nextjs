
import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList";

export default function Page() {
  return (
    <div >
      <div className="">
        <AddNewTodo />
        <TodoList />
        <text >Hello world!</text>
      </div>
    </div>
  );
}
