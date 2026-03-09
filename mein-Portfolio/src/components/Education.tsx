import '../styles/sections.css';

interface EducationItem {
  school: string;
  degree: string;
  years: string;
  image: string;
  honors?: string;
}

interface EducationProps {
  items: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {items.map((edu) => (
        <div key={edu.school} className="education-item">
          <div className="univlogo">
            <img src={`/assets/${edu.image}`} alt={edu.school} />
          </div>
          <p className="muted" style={{ marginTop: '6px' }}>
            <strong>{edu.school}</strong>
            <br />
            <strong>{edu.degree}</strong>
            {edu.honors && (
              <>
                <br />
                <span id="with-highest" style={{ color: 'var(--accent-2)' }}>
                  {edu.honors}
                </span>
              </>
            )}
            <br />
            {edu.years}
          </p>
        </div>
      ))}
    </div>
  );
};
