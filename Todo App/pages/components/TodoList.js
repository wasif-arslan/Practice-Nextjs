import Todo from "./Todo";

const getTodos = async () => {
  let todos = await fetch(`https://json-api-main-chi.vercel.app/api/todo/list`);
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
//  console.log(Todos);
  return (
    <div>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id} >
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
