import React, { useRef, useEffect, useState } from 'react';
import './FeatureIcons.css';

const features = [
  {
    icon: '⚡',
    title: 'Instant Answers',
    desc: 'Crack interviews and exams with smart, fast responses.',
  },
  {
    icon: '🔒',
    title: 'Private & Secure',
    desc: 'Your data stays confidential — always encrypted, never shared.',
  },
  {
    icon: '💸',
    title: 'Zero Commitments',
    desc: 'No credit card required. Use it on your terms.',
  },
];

const FeatureIcons = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`features-section${visible ? ' features-visible' : ''}`}
      ref={ref}
    >
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-title">{f.title}</div>
          <div className="feature-desc">{f.desc}</div>
        </div>
      ))}
    </section>
  );
};

export default FeatureIcons; 