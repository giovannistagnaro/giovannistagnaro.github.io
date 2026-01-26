// pages/ProjectPage.tsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  console.log("project page");

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
        <Link className="underline" to="/">
          Back
        </Link>
        <div className="mt-4">Upload in progress.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <Link
          className="text-sm text-zinc-300 hover:text-zinc-100 underline"
          to="/"
        >
          ← Back
        </Link>

        <h1 className="my-4 text-7xl font-italiana font-semibold text-zinc-100">
          {project.title}
        </h1>

        {project.tech?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-4 text-zinc-300 leading-relaxed">
          <b>tl;dr</b> {project.tldr}
        </p>
        <p className="mt-4 text-zinc-300 leading-relaxed">
          {project.description.split("\n").map((paragraph) => (
            <div className="py-4">{paragraph}</div>
          ))}
        </p>

        {project.highlights?.length ? (
          <ul className="mt-4 list-disc pl-5 text-zinc-300 space-y-2">
            {project.highlights.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button"
              >
                <span className="inline-flex items-center gap-2">
                  {link.label}
                  <ExternalLink size={16} />
                </span>{" "}
              </a>
            ))}
          </div>
        ) : null}

        {project.images?.length ? (
          <div className="mt-8 grid gap-2">
            {project.images.map((img) => (
              <div className="mb-4">
                <div className="py-2">{img.description}</div>
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-xl border border-zinc-800"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
