import { useParams, Link } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams();

  // placeholder for now
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <Link className="underline" to="/">
        Back
      </Link>
      <div className="mt-4">Project page: {id}</div>
    </div>
  );
}
