import { Certification } from "./components/certifications";
import type { Job } from "./components/job-description";

export const leftBullets = [
  { prio: 0, header: `Languages`, items: [`Golang`, `Java`, `C#`, `JS`, `Python`, `C++`, `Haskell`, `Erlang`] },
  { header: `Frameworks`, items: [`Spring Boot`, `Flask`, `Ruby on Rails`, `AngularJS`, `D3.js`] },
  { prio: 20, header: `Databases`, items: [`Postgres`, `MySQL`, `Redis`, `MongoDB`, `GraphDB`] }
]

export const bullets = [
  { prio: 10, header: `GCP`, items: [`Cloud Storage`, `Firebase`, `PubSub`, `Cloud Functions`, `GKE`, `Cloud Vision`] },
  { prio: 10, header: `AWS`, items: [`EC2, ECS`, `VPC`, `Kinesis`, `SQS, SNS`, `Elastic Beanstalk`, `Lambda`, `RDS, DynamoDB`, `Elasticsearch`] },
  { prio: 20, header: `DevOps`, items: [`Terraform`, `Ansible`, `Bash`, `Gitlab CI/CD`, `Jenkins`, `Buildkite`] },
  { header: `Tools`, items: [`Git`, `SVN`, `go-mod`, `Maven`, `Gradle`, `Bundler`, `Pip`] },
]

export const jobs: readonly Job[] = [
  {
    position: `Technical Lead`,
    time: `07/21 - ongoing`,
    location: `OpenTag`,
    description: `Managing a team of 9 people building a Loyalty Program for OpenTag’s betting platform in Golang.`,
    responsibilites:
      `Plan and lead technical initiatives based on product requirements.
Design and implement system components for high availability and fault tolerance.
Identify and manage technical debt.
Contribute to company wide initiatives for technical conventions and improvements.`.split(
        `\n`
      ),
    techStack: `Golang, PostgreSQL, Redis, Kafka, Kubernetes, GCP`.split(`, `),
  },
  {
    position: `Senior Software Engineer`,
    time: `03/19 - 07/21`,
    location: `Financial Times`,
    description: `Developed FT’s Universal Publishing Platform in Golang managing published content from journalists and extract metadata from unstructured content forming a knowledge graph.`,
    responsibilites:
      `Extended publishing for different content types (articles, audio, video, etc.) on ft.com.
Built a new CI/CD pipeline for deployment of all 150 microservices on AWS EKS.
Participated in cross team initiatives - building a recommendation engine for article content.
Developed platform improvements (gRPC communication, API docs generation, etc.)`.split(
        `\n`
      ),
    techStack: `Golang, Java, Python, MongoDB, Kafka, Kubernetes, AWS`.split(
      `, `
    ),
  },
  {
    position: `Software Developer`,
    time: `03/18 - 02/19`,
    location: `Urban.IO`,
    description: `Main developer on a remote monitoring platform, including IoT sensor devices, measuring different metrics, e.g. temperature, humidity, flood detection etc.`,
    responsibilites:
      `Designed and implementing the data exchange via UDP between the devices and the cloud platform on AWS.
Built a REST API for providing historical readings from the sensors.
Integrated and automated SIM management operations for gateway devices with mobile connectivity.
Built factory test procedures aiding the device manufacturing process.`.split(
        `\n`
      ),
    techStack:
      `Python, Ruby on Rails, Java, AWS Kinesis, AWS ECS, Ansible`.split(`, `),
  },
  {
    position: `Software Developer`,
    time: `03/17 - 03/18`,
    location: `Urbanise Ltd`,
    description: `Developed a property management platform based on a microservice
architecture`,
    techStack:
      `Java, Spring Boot, Spring Cloud, Netflix OSS, PostgreSQL, AWS`.split(
        `, `
      ),
  },
  {
    position: `Software Developer`,
    time: `03/15 - 03/17`,
    location: `Ontotext AD`,
    description: `Worked on external plugins and a workbench for Ontotext’s main product GraphDBTM triplestore - a database for semantic metadata. Developed expertise with semantic technologies (RDF, SPARQL), graph databases and visualisation of RDF data`,
    techStack:
      `Java, Spring, RDF, SPARQL, AngularJS, D3`.split(
        `, `
      ),
  },
  {
    position: `Junior Software Developer`,
    time: `05/13 - 03/15`,
    location: `Ontotext AD`,
    description:
`Wrote/supported scrapers (crawling agents) for websites in the recruitment sector.
Administered the MySQL database of all job vacancies.
Developed expertise in many web technologies by using different parsers and transport protocols`,
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
  { date: `2012`, title: `DSD 2 (Deutsches Sprachdiplom Stufe 2)`, location: `Kulturminister Konferenz` },
]

export const education = [
  {
    position: `Master in Artificial Intelligence`,
    location: `Sofia University`,
    time: `2016 - 2018`
  },
  {
    position: `Bachelor in Computer Systems and Technologies (in German) `,
    location: `Technical University Sofia`,
    time: `2012 - 2016`,
    description: `Collaborative undergraduate program w/ Otto-von-Guericke-Universität
Magdeburg, Germany.
Thesis: ”Integration of semantic technologies in the processing of news”.`
  },
  {
    position: `Bachelor in Computer Systems and Technologies (in German) `,
    location: `OVGU Magdeburg`,
    time: `2015`,
    description: `Studied 6th semester in Magdeburg, Germany in their Informatics undergraduate program, part of my studies @ TU Sofia. Goal was to achieve a double
graduation.`
  }
]
