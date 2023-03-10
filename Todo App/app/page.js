import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";



export default function Page() {
  return (
    <div className="justify-center">
      <div className="">
        <AddNewTodo />
        <TodoList />
        <text className="text-7xl font-bold underline">Hello world!</text>
      </div>
    </div>
  );
}
