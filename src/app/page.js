import { Editor } from "./components/editor";

async function getAllNotes() {
  const res = await fetch("http://localhost:3001/api/v1/notes", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getAllNotes();
  console.log(data);
  return <Editor notesData={data} />;
}
