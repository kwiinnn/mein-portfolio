import '../styles/skills.css';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsProps {
  items: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ items }) => {
  return (
    <div className="skills">
      {items.map((skill) => (
        <div key={skill.name} className="skill">
          <div className="label">
            <span>{skill.name}</span>
            <span className="muted">{skill.percentage}%</span>
          </div>
          <div className="bar">
            <span className="skill-bar-fill" style={{ width: `${skill.percentage}%` }}></span>
          </div>
        </div>
      ))}
    </div>
  );
};
