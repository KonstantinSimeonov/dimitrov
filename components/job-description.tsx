import * as React from "react";

export type Job = {
  position: string;
  time: string;
  location: string;
  description?: React.ReactNode;
  responsibilites?: readonly string[];
  techStack?: readonly string[];
};

export const JobDescription: React.FC<{ job: Job, positionEmoji?: string }> = ({ job, positionEmoji = `💼` }) => (
  <section style={{ width: `100%` }}>
    <header>
        <time data-emoji="📅">{job.time}</time>
      <div style={{ display: `flex`, justifyContent: `space-between`}}>
      <h3 data-emoji={positionEmoji} style={{ maxWidth: `36ch` }}>{job.position}</h3>
        <strong data-emoji="📍">{job.location}</strong>
      </div>
    </header>
    {job.description ? <p style={{ maxWidth: `65ch` }}>{job.description}</p> : null}
    {job.responsibilites ? (
      <ul>
        {job.responsibilites.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    ) : null}
  { job.techStack ? <p>
      Tech: <strong>{job.techStack.join(`, `)}</strong>
    </p> : null
  }
  </section>
);
