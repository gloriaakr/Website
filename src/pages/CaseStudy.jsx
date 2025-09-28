// src/pages/CaseStudy.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projectsData";

export default function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="mx-auto max-w-screen-md px-6 py-28">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/#projects" className="mt-4 inline-block text-pink-400 hover:underline">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const { title, description, image, heroVideo, heroGif, stack = [], problem, approach, results, metrics = [], gallery = [], links = {} } = p;

  return (
    <article className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-screen-md">
        {/* Back + Title */}
        <Link to="/#projects" className="text-pink-400 hover:underline">← Back</Link>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-zinc-300">{description}</p>

        {/* Stack */}
        {!!stack.length && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li key={t} className="text-[11px] text-zinc-300/80 border border-white/10 rounded px-2 py-0.5">
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* Hero media */}
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {heroVideo ? (
            <video src={heroVideo} controls playsInline className="w-full h-auto" />
          ) : heroGif ? (
            <img src={heroGif} alt={`${title} demo`} className="w-full h-auto" loading="lazy" />
          ) : (
            <img src={image} alt={title} className="w-full h-auto object-cover" loading="lazy" />
          )}
        </div>

        {/* Narrative sections */}
        <section className="mt-10 grid gap-8">
          {problem && (
            <div>
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="mt-2 text-zinc-300 leading-relaxed">{problem}</p>
            </div>
          )}
          {approach && (
            <div>
              <h2 className="text-2xl font-semibold">Approach</h2>
              <p className="mt-2 text-zinc-300 leading-relaxed">{approach}</p>
            </div>
          )}
          {results && (
            <div>
              <h2 className="text-2xl font-semibold">Results & Learnings</h2>
              <p className="mt-2 text-zinc-300 leading-relaxed">{results}</p>
            </div>
          )}
          {!!metrics.length && (
            <div>
              <h3 className="text-xl font-semibold">Highlights</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {metrics.map((m) => (
                  <li key={m} className="text-zinc-300/90 border border-white/10 rounded px-3 py-2 text-sm">{m}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Gallery */}
        {!!gallery.length && (
          <section className="mt-10">
            <h3 className="text-xl font-semibold">Gallery</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(links.repo || links.demo || links.live) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {links.live && <a className="text-pink-400 hover:underline" href={links.live} target="_blank" rel="noreferrer">Live →</a>}
            {links.repo && <a className="text-pink-400 hover:underline" href={links.repo} target="_blank" rel="noreferrer">GitHub →</a>}
            {links.demo && <a className="text-pink-400 hover:underline" href={links.demo} target="_blank" rel="noreferrer">Demo →</a>}
          </div>
        )}
      </div>
    </article>
  );
}
