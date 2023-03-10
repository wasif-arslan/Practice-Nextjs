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
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
