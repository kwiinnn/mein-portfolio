interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  role: string;
  description: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
      {items.map((item) => (
        <div key={item.title} className="timeline-item">
          <div style={{ fontWeight: 700 }}>{item.title}</div>
          <div className="muted" style={{ fontSize: '13px' }}>
            {item.role}
          </div>
          <p className="muted" style={{ marginTop: '6px' }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
