import { CertificationsGrid } from '../components/CertificationsGrid';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { certifications } from '../data/portfolio';
import '../styles/certs-page.css';

export const CertificationsPage: React.FC = () => {
  const { lang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const t = translations[lang];

  return (
    <div>
      <div className="certs-header">
        <div>
          <h1>{t.sections.certifications}</h1>
          <p className="muted">A full list of certifications, achievements, and completed courses.</p>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          style={{
            background: 'transparent',
            border: '1px solid rgba(17, 24, 39, 0.1)',
            borderRadius: '12px',
            width: '42px',
            height: '42px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'all 0.3s ease',
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container certs-container">
        <CertificationsGrid items={certifications} />
        <a href="/" className="back">
          {t.buttons.backToPortfolio}
        </a>
      </div>
    </div>
  );
};
