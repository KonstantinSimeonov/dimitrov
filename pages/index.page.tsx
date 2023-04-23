import * as React from "react";
import Photo from "./assets/photo.png";
import "./index.css";
import { JobDescription } from "../components/job-description";
import { SkillsList } from "../components/skill-list";
import { leftBullets, jobs, bullets, certs, education } from "../data";
import { Certifications } from "../components/certifications";

const Header = () => (
  <header>
    <div>
      <img src={Photo} />
    </div>
    <div>
      <div>
        <h1>Tsvetan Dimitrov</h1>
        <p>Golang Technical Lead / Software Architect</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="htps://github.com/powerslider">github.com/powerslider</a>
          </li>
          <li>
            <a href="mailto:tsvetan.dimitrov23@gmail.com">
              tsvetan.dimitrov23@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tsvetan-dimitrov-0aa8ab98/">
              Linkedin profile
            </a>
          </li>
          <li>
            <a href="tel:+359885131618">+359 885131618</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export const Page = () => (
  <main>
    <Header />
    <article>
      <header>
        <h2>Programming Expertise</h2>
      </header>
      <section>
        <h3>Languages, databases, frameworks</h3>
        <SkillsList skills={leftBullets} />
      </section>
      <section>
        <h3>Infrastructure and cloud</h3>
        <SkillsList skills={bullets} />
      </section>
    </article>
    <article>
      <header>
        <h2>Work Experience</h2>
      </header>
      {jobs.map((j) => (
        <JobDescription key={`${j.position} ${j.location}`} job={j} />
      ))}
    </article>
    <article>
      <header><h2>Certification</h2></header>
      <Certifications certs={certs} />
    </article>
    <article>
      <header><h2>Education</h2></header>
      {education.map(e => <JobDescription key={`${e.position} ${e.time}`} job={e} />)}
    </article>
  </main>
);
