import { useParams, Link } from "react-router-dom";
import { findCardById } from "../utils/findCard";

export default function PDFPage() {
  const { id } = useParams();
  const isIOS = /iP(hone|od|ad)/.test(navigator.userAgent); // iOS doesn't display the PDF all the way

  const card = id ? findCardById(id) : undefined;

  if (!card || card.type !== "pdf") {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
        <Link className="underline" to="/">
          Back
        </Link>
        <div className="mt-4">PDF not found.</div>
      </div>
    );
  }

  const src = card.pdfSrc;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <Link className="underline" to="/">
          Back
        </Link>
        <h1 className="mt-2 text-lg font-semibold">{card.title}</h1>
      </div>
      {isIOS ? (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-zinc-800 px-4 py-2"
        >
          Open PDF
        </a>
      ) : (
        <iframe title={card.title} src={src} className="w-full h-[80dvh]" />
      )}
    </div>
  );
}
