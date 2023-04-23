import * as React from "react";

export type SkillListItem = {
  header: string
  items: readonly string[]
}

export const SkillsList: React.FC<{ skills: readonly SkillListItem[] }> = ({
  skills,
}) => (
  <ol>
    {skills.map((skill) => {
      return (
        <li key={skill.header}>
          <h5>{skill.header}</h5>{skill.items.map(w => <code key={w}>{w}</code>)}
        </li>
      );
    })}
  </ol>
);
