"use client";

import { useRouter } from "next/navigation";

async function Update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function DeleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: `DELETE`,
  });

  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => Update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button onClick={() => DeleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
