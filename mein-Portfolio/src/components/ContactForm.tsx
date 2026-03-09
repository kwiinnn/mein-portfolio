import { useState } from 'react';
import '../styles/contact.css';

interface ContactFormProps {
  clearLabel: string;
  sendLabel: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  clearLabel,
  sendLabel,
  nameLabel,
  emailLabel,
  messageLabel,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate email service (Formspree, EmailJS, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={nameLabel}
        aria-label={nameLabel}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={emailLabel}
        aria-label={emailLabel}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={messageLabel}
        aria-label={messageLabel}
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button className="btn btn-ghost" type="button" onClick={handleReset}>
          {clearLabel}
        </button>
        <button className="btn btn-primary" type="submit">
          {sendLabel}
        </button>
      </div>
    </form>
  );
};
