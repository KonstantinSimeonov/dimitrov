import * as React from "react";

export type SkillListItem = `${string}: ${string}`;

export const SkillsList: React.FC<{ skills: readonly SkillListItem[] }> = ({
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
