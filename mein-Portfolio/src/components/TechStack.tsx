import '../styles/techstack.css';

interface TechCard {
  name: string;
  image: string;
}

interface TechStackProps {
  items: TechCard[];
}

export const TechStack: React.FC<TechStackProps> = ({ items }) => {
  return (
    <div className="tech-grid">
      {items.map((item) => (
        <div key={item.name} className="tech-card">
          <img src={`/assets/${item.image}`} alt={item.name} title={item.name} />
        </div>
      ))}
    </div>
  );
};
