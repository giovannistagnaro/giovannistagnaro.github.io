import { useParams } from "react-router-dom";
import { projects } from "../data/projects/projects";
import { ExternalLink } from "lucide-react";
import SiteBackButton from "../components/SiteBackButton";

export default function ProjectPage() {
  const { id } = useParams();
  console.log("project page");

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
        <SiteBackButton />
        <div className="mt-4">Upload in progress.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <SiteBackButton />

        <h1 className="my-4 text-7xl font-italiana font-semibold text-zinc-100">
          {project.title}
        </h1>

        {project.tech?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="text-zinc-300 ">
          <p className="mt-4 font-semibold underline">tl;dr</p>
          <p className="mt-1 leading-relaxed">{project.tldr}</p>
        </div>

        <div className="mt-4 text-zinc-300 leading-relaxed">
          <p className="font-semibold underline">Description</p>
          <div className="mt-1">
            {project.description.split("\n").map((paragraph, idx) => (
              <div className="pb-8" key={`paragraph-${idx}`}>
                {paragraph}
              </div>
            ))}
          </div>
        </div>

        {project.highlights?.length ? (
          <>
            <div className="font-semibold underline">Highlights</div>
            <ul className="list-disc pl-5 text-zinc-300 space-y-2 mt-1">
              {project.highlights.map((b, idx) => (
                <li key={`highlight-${idx}`}>{b}</li>
              ))}
            </ul>
          </>
        ) : null}

        {project.links?.length ? (
          <>
            <div className="font-semibold underline mt-4">Links</div>
            <div className="mt-2 flex flex-wrap gap-3">
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
                  </span>
                </a>
              ))}
            </div>
          </>
        ) : null}

        {project.images?.length ? (
          <>
            <div className="font-semibold underline mt-4">Images</div>
            <div className="grid gap-2">
              {project.images.map((img) => (
                <div className="mb-4" key={img.src}>
                  <div className="py-2">{img.description}</div>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-xl border border-zinc-800"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
