import * as React from "react";
import Photo from "./assets/photo.png";
import "./index.css";

const leftBullets = [
  `Expert at: Golang, Java`,
  `Strong at: Bash, Javascript, Pythom, C, C++, C#, Haskell, Erlang, Ruby`,
  `Web Frameworks: Spring Boot, Flask, Ruby on Rails`,
  `Databases: PostgreSQL, MySQL, Redis, MongoDB, GraphDB`,
  `Front-end: AngularJS, D3`,
] as const;

const bullets = [
  `Google Cloud Platform: Cloud Storage, Firebase, PubSub, Cloud Functions, GKE, Cloud Vision`,
  `Amazon Web Services: EC2, VPC, ECS, Kinesis, SQS, SNS, Elastic Beanstalk, Lambda, DynamoDB, RDS, Elasticsearch`,
  `Dev Ops: Terraform, Ansible, Bash`,
  `Build Tools: go-mod, Maven, Gradle, Bundler, Pip`,
  `Source Control Tools: Git, SVN`,
  `CI/CD Tools: Gitlab CI/CD, Jenkins, Buildkite`,
  `Operating Systems: Linux, MacOS`,
] as const;

type SkillListItem = `${string}: ${string}`;
const SkillsList: React.FC<{ skills: readonly SkillListItem[] }> = ({
  skills,
}) => (
  <ol>
    {skills.map((skill) => {
      const [def, content] = skill.split(`: `);
      return (
        <li key={skill}>
          {def}: <strong>{content}</strong>
        </li>
      );
    })}
  </ol>
);

type Job = {
  position: string;
  time: string;
  location: string;
  description: string;
  responsibilites?: readonly string[];
  techStack: readonly string[];
};

const jobs: Job[] = [
  {
    position: `Technical Lead`,
    time: `07/21 - ongoing`,
    location: `OpenTag, Sofia, Bulgaria`,
    description: `Managing a team of 9 people building a Loyalty Program for OpenTag’s betting platform in Golang. Main responsibilities:`,
    responsibilites:
      `Planning and leading technical initiatives based on product require- ments.
Designing and implementing system components for high availability and fault tolerance.
Managing and identifying technical debt.
Contributing in company wide initiatives for technical conventions and improvements.`.split(
        `\n`
      ),
    techStack: `Golang, PostgreSQL, Redis, Kafka, Kubernetes, GCP`.split(`, `),
  },
  {
    position: `Senior Software Engineer`,
    time: `03/19 - 07/21`,
    location: `Financial Times, Sofia, Bulgaria`,
    description: `Developing FT’s Universal Publishing Platform (UPP) in Golang managing published content from journalists and extracting metadata from the unstruc- tured content forming a knowledge graph. Main responsibilies:`,
    responsibilites:
      `Implementing features for publishing different types of content (articles, audio, video, etc.) on ft.com.
Building a new CI/CD pipeline for deployment of all 150 microservices on AWS EKS.
Participating in cross team initiatives - building an experimental recom- mendation engine for article content.
Developing PoCs for platform improvement (gRPC communication, API documentation generation, etc.) adhering to Golang best practices.`.split(
        `\n`
      ),
    techStack: `Golang, Java, Python, MongoDB, Kafka, Kubernetes, AWS`.split(
      `, `
    ),
  },
  {
    position: `Software Developer`,
    time: `03/18 - 02/19`,
    location: `Urban.IO, Sofia, Bulgaria`,
    description: `Developing a remote monitoring platform, including IoT sensor devices, measuring different metrics, e.g. temperature, humidity, flood detection etc. Main responsibilities as main developer included:`,
    responsibilites:
      `Designing and implementing the data exchange via UDP between the devices and the cloud platform on AWS.
Building a REST API for providing historical readings from the sensors.
Integrating and automating SIM management operations for gateway devices with mobile connectivity.
Building factory test procedures aiding the device manufacturing process.`.split(
        `\n`
      ),
    techStack:
      `Python, Ruby on Rails, Java, AWS Kinesis, AWS ECS, Ansible`.split(`, `),
  },
  {
    position: `Software Developer`,
    time: `03/17 - 03/18`,
    location: `Urbanise Ltd., Sofia, Bulgaria`,
    description: `Developing a property management platform based on a microservice
architecture`,
    techStack:
      `Java, Spring Boot, Spring Cloud, Netflix OSS, PostgreSQL, AWS`.split(
        `, `
      ),
  },
  {
    position: `Software Developer`,
    time: `03/15 - 03/17`,
    location: `Ontotext AD, Sofia, Bulgaria`,
    description: `Developing external plugins and a workbench for Ontotext’s main product GraphDBTM triplestore - a database for semantic metadata. Developed expertise with semantic technologies (RDF, SPARQL), graph databases and visualisation of RDF data`,
    techStack:
      `Java, Spring, RDF, SPARQL, AngularJS, D3`.split(
        `, `
      ),
  },
  {
    position: `Junior Software Developer`,
    time: `05/13 - 03/15`,
    location: `Ontotext AD, Sofia, Bulgaria`,
    description: `Responsible for writing / supporting scrapers (crawling agents) for websites
in the recruitment sector. Administered the MySQL database of all job
vacancies. Developed expertise in many web technologies by using different
parsers and transport protocols`,
    techStack:
      `Java, MySQL`.split(
        `, `
      ),
  },
];

const JobDescription: React.FC<{ job: Job }> = ({ job }) => (
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

function App() {
  return (
    <main>
      <header>
        <div>
          <img src={Photo} />
        </div>
        <div>
          <div>
            <h1>Tsvetan Dimitrov</h1>
            <p>Golang Technical Lead / Software Architect / Senior Developer</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="htps://github.com/powerslider">
                  github.com/powerslider
                </a>
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
      <article>
        <header>
          <h2>Programming Expertise</h2>
        </header>
        <section>
          <h2>Languages, databases, frameworks</h2>
          <SkillsList skills={leftBullets} />
        </section>
        <section>
          <h2>Infrastructure and cloud</h2>
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
    </main>
  );
}

export { App as Page };
