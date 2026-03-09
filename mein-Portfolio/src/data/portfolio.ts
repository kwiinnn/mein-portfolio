export interface Skill {
  name: string;
  percentage: number;
}

export interface TechStack {
  name: string;
  image: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  role: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
  image?: string;
}

export interface Education {
  school: string;
  degree: string;
  years: string;
  image: string;
  honors?: string;
}

export interface Hobby {
  name: string;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  { name: 'HTML & CSS', percentage: 90 },
  { name: 'Python', percentage: 95 },
  { name: 'C', percentage: 85 },
  { name: 'MediaPipe / Computer Vision', percentage: 80 },
  { name: 'Arduino / Robotics', percentage: 90 },
];

export const techStack: TechStack[] = [
  { name: 'HTML', image: 'html.png' },
  { name: 'CSS', image: 'css.png' },
  { name: 'JavaScript', image: 'js.png' },
  { name: 'Python', image: 'python.png' },
  { name: 'React', image: 'react.png' },
  { name: 'Arduino', image: 'arduino.png' },
  { name: 'Git', image: 'git.png' },
  { name: 'Node.js', image: 'nodejs.png' },
];

export const experience: ExperienceItem[] = [
  {
    title: 'AI Frontiers / AI MSME Hackathon',
    company: 'ICT Davao Inc.',
    year: '2025',
    role: 'Frontend Developer',
    description: 'Built the frontend UI for our hackathon project, creating responsive layouts and real-time interactions. Contributed to our Top 5 finish as the youngest team and the only group of first-year students.',
  },
  {
    title: 'SHS National Research Summit',
    company: 'National Research Summit',
    year: '2025',
    role: 'Co-Lead Developer',
    description: 'Title: Exploring the Utilization of a Mediapipe-based Hand-tracking System on Digital Simulations for Robotic Surgical Applications',
  },
  {
    title: 'LDCU Robotics Exhibit',
    company: 'Liceo de Cagayan University',
    year: '2025',
    role: 'Co-Lead Developer',
    description: 'Built a hand‑tracking system using MediaPipe to control a robotic arm. Integrated Python, ESP32, and servo systems for real‑time operation.',
  },
  {
    title: 'Tech Innovation Exhibit',
    company: 'Tech Innovation',
    year: '2024',
    role: 'Project Leader',
    description: 'Developed an Arduino based vacuum race car that can be driven via Bluetooth or operate automatically using an ultrasonic sensor. Designed control logic, sensor behavior, and dual mode navigation.',
  },
  {
    title: 'print("Hello World")',
    company: 'My first program',
    year: '2021',
    role: 'My first program',
    description: 'Wrote my first line of code (Python).',
  },
];

export const certifications: Certification[] = [
  {
    id: 'hackathon',
    title: 'AI Frontiers / AI MSME Hackathon 2025 (Top 5)',
    issuer: 'ICT Davao Inc.',
    year: '2025',
    link: 'https://www.credly.com/badges/07da5a35-c5e1-4559-bae1-7eff639faf29',
    image: 'aifrontiers.png',
  },
  {
    id: 'pycon',
    title: 'PyCon Davao 2025',
    issuer: 'DurianPy (Davao Python User Group)',
    year: '2025',
    link: 'https://drive.google.com/file/d/1MfdeR7oYWrpYJGnIRbuDmMEPODvEsgc7/view',
    image: 'pycon.png',
  },
  {
    id: 'arcx',
    title: 'Foundation Level Threat intelligence Analyst',
    issuer: 'arcX',
    year: '2025',
    link: 'https://arcx.io/verify-certificate?id=acaa94c6be21e53f087478925968fe28a17e8159&k=40635ae471ec48c2be62c11ec6621ceb',
    image: 'arcx.png',
  },
  {
    id: 'git',
    title: 'Master the Basics: Git Essentials Workshop',
    issuer: 'SPARCS',
    year: '2025',
    link: 'https://drive.google.com/file/d/1yJNorp05kQDuLXnMW3PVN9fj75O3ZVzf/view',
    image: 'sparcs.png',
  },
  {
    id: 'io',
    title: 'Google I/O Extended CDO 2025',
    issuer: 'Google Developers Group CDO',
    year: '2025',
    link: 'https://credsverse.com/credentials/291e733d-f116-4bb9-a753-d86988805ebf',
    image: 'ioextended.png',
  },
  {
    id: 'buildai',
    title: 'Build with AI 2025',
    issuer: 'Google Developers Group CDO',
    year: '2025',
    link: 'https://credsverse.com/credentials/3fa58c45-ef29-4b76-a6d8-a1922ed4f945',
    image: 'buildwithai.png',
  },
  {
    id: 'sikaptala',
    title: 'SikapTALA 2025: CS & IT Skills Competition',
    issuer: 'DLSU-D',
    year: '2025',
    link: 'https://credsverse.com/credentials/e17caecc-c641-4541-ae93-96f94eb7f90d',
    image: 'sikaptala.png',
  },
  {
    id: 'bio',
    title: 'Philippine Biology Olympiad - Participant',
    issuer: 'Ateneo Biological Organization - BOx',
    year: '2025',
    link: '#',
    image: 'pbo.png',
  },
  {
    id: 'phys',
    title: 'Philippine Physics Olympiad - Participant',
    issuer: 'Samahang Pisika ng Pilipinas',
    year: '2025',
    link: 'https://drive.google.com/file/d/12ub6ZuflHDQUwTDxJxKe2V_CWFHErhNW/view',
    image: 'ppo.png',
  },
  {
    id: 'devfest',
    title: 'Google DevFest 2024',
    issuer: 'Google Developers Group CDO',
    year: '2024',
    link: 'https://credsverse.com/credentials/d0201274-94f5-4587-874a-8bc11922ba7c',
    image: 'devfest24.png',
  },
  {
    id: 'german',
    title: 'Goethe-Zertifikat A1: Fit in Deutsch 1',
    issuer: 'Goethe Institut',
    year: '2023',
    link: '#',
    image: 'deutsch.png',
  },
];

export const education: Education[] = [
  {
    school: 'University of the Philippines - Mindanao',
    degree: 'BS Computer Science',
    years: '2025 - 2029',
    image: 'upmin.png',
  },
  {
    school: 'Liceo de Cagayan University',
    degree: 'Secondary Education',
    years: '2019 - 2025',
    image: 'ldcu.png',
    honors: 'With Highest Honors',
  },
];

export const hobbies: Hobby[] = [
  { name: 'Guitar', icon: '🎸', description: 'Playing and learning chords' },
  { name: 'Puzzles', icon: '🧩', description: "Rubik's cube & logic puzzles" },
  { name: 'Robotics', icon: '🛠️', description: 'Small electronics and prototypes' },
  { name: 'Learning', icon: '📚', description: 'Exploring physics, biology, and CS topics' },
  { name: 'Games', icon: '🎮', description: 'Online strategy games' },
  { name: 'Sports', icon: '⛹️', description: 'Basketball, chess, and badminton' },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/charles-solomon-34aa1b2a1/',
  github: 'https://github.com/kwiinnn',
  facebook: 'https://www.facebook.com/Charles.10solomon/',
  email: 'mailto:solomon23charles@gmail.com',
};
