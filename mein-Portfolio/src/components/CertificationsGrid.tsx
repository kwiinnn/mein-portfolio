import '../styles/certifications.css';

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
  image?: string;
}

interface CertificationsGridProps {
  items: CertificationItem[];
}

export const CertificationsGrid: React.FC<CertificationsGridProps> = ({ items }) => {
  return (
    <ul className="cert-grid">
      {items.map((cert) => (
        <li key={cert.id}>
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card cert-card"
            style={cert.image ? { '--cert-bg-image': `url(/assets/${cert.image})` } as React.CSSProperties : undefined}
          >
            <div className="title">{cert.title}</div>
            <div className="issuer">{cert.issuer}</div>
            <div className="date">{cert.year}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};
