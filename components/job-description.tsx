import * as React from "react";

export type Job = {
  position: string;
  time: string;
  location: string;
  description: string;
  responsibilites?: readonly string[];
  techStack: readonly string[];
};

export const JobDescription: React.FC<{ job: Job }> = ({ job }) => (
  <section>
    <header>
      <h3 data-emoji="💼">{job.position}</h3>
      <time data-emoji="📅">{job.time}</time>
      <strong data-emoji="📍">{job.location}</strong>
    </header>
    <p>{job.description}</p>
    {job.responsibilites ? (
      <ul>
        {job.responsibilites.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    ) : null}
    <p>
      Tech Stack: <strong>{job.techStack.join(`, `)}</strong>
    </p>
  </section>
);
