import {Certification} from "./components/certifications";
import type { Job } from "./components/job-description";

export const leftBullets = [
  `Expert at: Golang, Java`,
  `Strong at: Bash, Javascript, Python, C, C++, C#, Haskell, Erlang, Ruby`,
  `Web Frameworks: Spring Boot, Flask, Ruby on Rails`,
  `Databases: PostgreSQL, MySQL, Redis, MongoDB, GraphDB`,
  `Front-end: AngularJS, D3`,
] as const;

export const bullets = [
  `Google Cloud Platform: Cloud Storage, Firebase, PubSub, Cloud Functions, GKE, Cloud Vision`,
  `Amazon Web Services: EC2, VPC, ECS, Kinesis, SQS, SNS, Elastic Beanstalk, Lambda, DynamoDB, RDS, Elasticsearch`,
  `Dev Ops: Terraform, Ansible, Bash`,
  `Build Tools: go-mod, Maven, Gradle, Bundler, Pip`,
  `Source Control Tools: Git, SVN`,
  `CI/CD Tools: Gitlab CI/CD, Jenkins, Buildkite`,
  `Operating Systems: Linux, MacOS`,
] as const;

export const jobs: readonly Job[] = [
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

export const certs: Certification[] = [
  { date: `09/2018`, title: `Machine Learning`, href: `https://softuni.bg/trainings/1920/machine-learning-august-2018`, location: `SoftUni Bulgaria` },
  { date: `07/2018`, title: `Date Science`, href: `https://softuni.bg/trainings/1919/data-science-june-2018`, location: `SoftUni Bulgaria` },
  { date: `05/2018`, title: `Math Concepts for Developers`, href: `https://softuni.bg/trainings/1918/math-concepts-for-developers-april-2018`, location: `SoftUni Bulgaria` },
  { date: `2014`, title: `Web Application Architectures`, location: `Coursera` },
  { date: `2013`, title: `Machine Learning`, location: `Coursera` },
  { date: `2012`, title: `DSD 2 (Deutsches Sprachdiplom Stufe 2)`, location: `Kulturminister Konferenz` },
]

export const education = [
  {
    position: `Master of Artificial Intelligence`,
    location: `Sofia University`,
    time: `2016 - 2018`
  },
  {
    position: `Bachelor Degree in Computer Systems and Technologies (in German) `,
    location: `Technical University Sofia`,
    time: `2012 - 2016`,
    description: `Collaborative undergraduate program w/ Otto-von-Guericke-Universität
Magdeburg, Germany.
Thesis: ”Integration of semantic technologies in the processing of news”.`
  },
  {
    position: `Bachelor Degree in Computer Systems and Technologies (in German) `,
    location: `Otto-von-Guericke-Universität Magdeburg`,
    time: `2015`,
    description: `Studied 6th semester in Magdeburg, Germany in their Informatics undergrad-
uate program, part of my studies @ TU Sofia. Goal was to achieve a double
graduation.`
  }
]
