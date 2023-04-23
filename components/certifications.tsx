import * as React from "react"

export type Certification = {
  date: string
  title: string
  description?: string
  imgUrl?: string
  href?: string
  location: string
}

export const Certifications: React.FC<{
  certs: readonly Certification[]
}> = ({ certs }) => (
    <ol className="certifications">
      {certs.map(c => <li key={`${c.title} ${c.date}`}>
            <time data-emoji="📅">{c.date}</time>
            <h3>{c.href ? <a href={c.href}>{c.title}</a> : c.title}</h3>
            <strong data-emoji="📍">{c.location}</strong>
            {c.imgUrl ? <img src={c.imgUrl} /> : null}
        </li>)}
    </ol>
)
