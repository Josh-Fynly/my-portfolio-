"use client";

import React, { useState } from 'react';

interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  live?: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Code or Scam? — AI Code Detector",
    problem: "AI coding assistants produce code with hallucinated APIs, missing error handling, and unrealistic snippets that fail in production.",
    solution: "Privacy-first client-side tool detecting risky patterns, hallucinated functions, and syntax errors across 9 languages without server transmission.",
    tech: ["Vanilla JavaScript", "HTML5", "Pattern Matching", "Client-Side Logic"],
    live: "https://josh-fynly.github.io/CODE-OR-SCAM",
    github: "https://github.com/Josh-Fynly/CODE-OR-SCAM",
  },
  {
    title: "Universal Unit Convertly",
    problem: "Conversion tools mix business logic with UI, making scaling to APIs and microservices unnecessarily complex.",
    solution: "Backend-first conversion engine with clean separation of concerns. Stateless operations ready for REST API integration.",
    tech: ["Python", "Streamlit", "Modular Architecture", "Backend Logic"],
    live: "https://unit-convertly.streamlit.app",
    github: "https://github.com/Josh-Fynly/unit-converter",
  },
  {
    title: "Autonomous Lunar Construction Simulator",
    problem: "Multi-agent robotic coordination for off-world infrastructure requires physics modeling difficult to replicate in standard environments.",
    solution: "Specialized simulation platform modeling lunar gravity, terrain dynamics, and energy-constrained robotics for autonomous construction strategy testing.",
    tech: ["Physics Modeling", "Multi-Agent Systems", "Python", "Simulation Engineering"],
    github: "https://github.com/Josh-Fynly/-autonomous-lunar-construction-simulator",
  },
];

const CONTACT_EMAIL = "joshfynly@gmail.com";

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use FormSubmit.co to send email
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);
      formBody.append('_subject', `Portfolio Inquiry from ${formData.name}`);
      formBody.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/' + CONTACT_EMAIL, {
        method: 'POST',
        body: formBody,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.name}>Josh Fynly</h1>
        <p style={styles.tagline}>Backend Engineer | AI & Simulation Developer</p>
        <p style={styles.subTagline}>Building intelligent systems that scale beyond today.</p>

        <div style={styles.buttons}>
          <button 
            style={styles.primaryBtn} 
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
          <button 
            style={styles.secondaryBtn} 
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>About</h2>
        <p style={styles.text}>
          I build backend systems, AI tools, and engineering simulators. Specializing in privacy-first architecture, 
          robust APIs, and complex problem-solving. Available for full-time roles, contract work, and technical consultation.
        </p>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <p style={{...styles.text, marginBottom: '30px'}}>
          Each project represents a real engineering problem and a production-ready solution.
        </p>
        <div style={styles.grid}>
          {projects.map((proj, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{proj.title}</h3>
              
              <div style={styles.metaGroup}>
                <span style={styles.label}>The Problem</span>
                <p style={styles.textSmall}>{proj.problem}</p>
              </div>
              
              <div style={styles.metaGroup}>
                <span style={styles.label}>The Solution</span>
                <p style={styles.textSmall}>{proj.solution}</p>
              </div>

              <div style={styles.techStack}>
                <span style={styles.label}>Tech</span>
                <div style={styles.tags}>
                  {proj.tech.map((t, i) => (
                    <span key={i} style={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={styles.linkRow}>
                {proj.live && (
                  <a 
                    href={proj.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.linkBtn}
                  >
                    Live Demo
                  </a>
                )}
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.linkBtnOutline}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Technical Expertise</h2>
        <div style={styles.skillGrid}>
          <div style={styles.skillCard}>
            <h4 style={styles.skillTitle}>Backend & Systems</h4>
            <p style={styles.textSmall}>Python, Node.js, API Design, Microservices, Database Architecture</p>
          </div>
          <div style={styles.skillCard}>
            <h4 style={styles.skillTitle}>AI & Detection</h4>
            <p style={styles.textSmall}>Pattern Recognition, LLM Integration, Code Analysis, Security Auditing</p>
          </div>
          <div style={styles.skillCard}>
            <h4 style={styles.skillTitle}>Simulation & Modeling</h4>
            <p style={styles.textSmall}>Physics Engines, Multi-Agent Systems, Robotics, Complex Systems</p>
          </div>
          <div style={styles.skillCard}>
            <h4 style={styles.skillTitle}>Tools & Practices</h4>
            <p style={styles.textSmall}>Git, Docker, CI/CD, Testing, Performance Optimization, Mobile Dev</p>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Get In Touch</h2>
        <p style={styles.text}>
          Let's discuss your project, collaboration, or opportunity.
        </p>

        {submitted && (
          <div style={styles.successMessage}>
            ✓ Message received! I'll respond within 24 hours.
          </div>
        )}

        {error && (
          <div style={styles.errorMessage}>
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              style={{...styles.formInput, fontFamily: 'inherit'}}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{...styles.primaryBtn, opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer'}}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p style={{...styles.textSmall, marginTop: '30px', textAlign: 'center', color: '#666'}}>
          Or email directly: <a href={`mailto:${CONTACT_EMAIL}`} style={{color: '#3b82f6', textDecoration: 'none'}}>{CONTACT_EMAIL}</a>
        </p>
      </section>
      
      <footer style={styles.footer}>
        <p style={styles.textSmall}>© 2026 Josh Fynly. All rights reserved.</p>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    backgroundColor: "#050505",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(16px, 5vw, 32px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    lineHeight: "1.6",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  hero: {
    minHeight: "clamp(60vh, 80vh, 90vh)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "clamp(20px, 5vw, 60px)",
  },
  name: {
    fontSize: "clamp(28px, 8vw, 56px)",
    fontWeight: "800",
    background: "linear-gradient(90deg, #3b82f6, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 clamp(8px, 2vw, 16px) 0",
    letterSpacing: "-1px",
  },
  tagline: {
    fontSize: "clamp(16px, 4vw, 24px)",
    color: "#fff",
    margin: "0 0 clamp(4px, 1vw, 8px) 0",
    fontWeight: "600",
  },
  subTagline: {
    color: "#999",
    margin: 0,
    fontSize: "clamp(13px, 3vw, 18px)",
    fontWeight: "400",
  },
  buttons: {
    marginTop: "clamp(30px, 6vw, 50px)",
    display: "flex",
    gap: "clamp(12px, 3vw, 16px)",
    flexWrap: "wrap",
    alignItems: "center",
  },
  primaryBtn: {
    padding: "clamp(11px 20px, 2.5vw 5vw, 14px 32px)",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #3b82f6, #a855f7)",
    border: "none",
    color: "white",
    fontWeight: "600",
    fontSize: "clamp(14px, 3.5vw, 18px)",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    padding: "clamp(11px 20px, 2.5vw 5vw, 14px 32px)",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "transparent",
    color: "white",
    fontWeight: "600",
    fontSize: "clamp(14px, 3.5vw, 18px)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  section: {
    marginTop: "clamp(50px, 10vw, 100px)",
    marginBottom: "clamp(40px, 8vw, 80px)",
  },
  heading: {
    fontSize: "clamp(24px, 6vw, 40px)",
    marginBottom: "clamp(16px, 3vw, 28px)",
    borderBottom: "1px solid #222",
    paddingBottom: "clamp(12px, 2vw, 20px)",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: "-0.5px",
  },
  text: {
    color: "#bbb",
    fontSize: "clamp(14px, 3vw, 18px)",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
    gap: "clamp(16px, 3vw, 24px)",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "clamp(12px, 2vw, 20px)",
  },
  card: {
    padding: "clamp(20px, 4vw, 28px)",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  cardTitle: {
    fontSize: "clamp(18px, 4vw, 24px)",
    marginBottom: "clamp(16px, 3vw, 24px)",
    color: "#fff",
    marginTop: 0,
    fontWeight: "700",
    lineHeight: "1.4",
  },
  metaGroup: {
    marginBottom: "clamp(14px, 2vw, 20px)",
  },
  label: {
    display: "block",
    fontSize: "clamp(11px, 2vw, 13px)",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    color: "#60a5fa",
    marginBottom: "clamp(6px, 1vw, 8px)",
    fontWeight: "700",
  },
  textSmall: {
    color: "#999",
    fontSize: "clamp(13px, 3vw, 16px)",
    margin: 0,
    lineHeight: "1.7",
  },
  techStack: {
    marginTop: "clamp(16px, 3vw, 24px)",
    marginBottom: "clamp(20px, 3vw, 28px)",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "clamp(8px, 1.5vw, 12px)",
    marginTop: "clamp(6px, 1vw, 10px)",
  },
  tag: {
    background: "rgba(59, 130, 246, 0.08)",
    color: "#60a5fa",
    padding: "clamp(5px 10px, 1vw 2vw, 7px 14px)",
    borderRadius: "6px",
    fontSize: "clamp(12px, 2.5vw, 14px)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    whiteSpace: "nowrap",
  },
  linkRow: {
    display: "flex",
    gap: "clamp(8px, 2vw, 12px)",
    marginTop: "clamp(16px, 3vw, 24px)",
    flexWrap: "wrap",
  },
  linkBtn: {
    flex: "1 1 auto",
    minWidth: "110px",
    padding: "clamp(9px, 2vw, 12px)",
    borderRadius: "6px",
    background: "#fff",
    color: "#000",
    textDecoration: "none",
    fontSize: "clamp(13px, 2.5vw, 16px)",
    fontWeight: "600",
    textAlign: "center",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  linkBtnOutline: {
    flex: "1 1 auto",
    minWidth: "110px",
    padding: "clamp(9px, 2vw, 12px)",
    borderRadius: "6px",
    border: "1px solid #444",
    color: "#fff",
    textDecoration: "none",
    fontSize: "clamp(13px, 2.5vw, 16px)",
    fontWeight: "600",
    textAlign: "center",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  skillCard: {
    padding: "clamp(16px, 3vw, 24px)",
    background: "rgba(255,255,255,0.01)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
  },
  skillTitle: {
    fontSize: "clamp(15px, 3vw, 18px)",
    margin: "0 0 clamp(8px, 1.5vw, 12px) 0",
    fontWeight: "600",
    color: "#fff",
  },
  form: {
    maxWidth: "600px",
    marginTop: "clamp(30px, 5vw, 50px)",
    marginBottom: "clamp(30px, 5vw, 50px)",
  },
  formGroup: {
    marginBottom: "clamp(20px, 4vw, 28px)",
    display: "flex",
    flexDirection: "column",
  },
  formLabel: {
    fontSize: "clamp(13px, 3vw, 15px)",
    fontWeight: "600",
    marginBottom: "clamp(8px, 1.5vw, 12px)",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  formInput: {
    padding: "clamp(10px, 2vw, 14px)",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: "clamp(14px, 3vw, 16px)",
    transition: "all 0.3s ease",
  } as React.CSSProperties,
  successMessage: {
    padding: "clamp(12px, 2vw, 16px)",
    borderRadius: "8px",
    background: "rgba(34, 197, 94, 0.1)",
    border: "1px solid rgba(34, 197, 94, 0.3)",
    color: "#86efac",
    fontSize: "clamp(13px, 3vw, 16px)",
    marginBottom: "clamp(20px, 3vw, 30px)",
    textAlign: "center",
    fontWeight: "500",
  },
  errorMessage: {
    padding: "clamp(12px, 2vw, 16px)",
    borderRadius: "8px",
    background: "rgba(239, 68, 68, 0.1)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    color: "#fca5a5",
    fontSize: "clamp(13px, 3vw, 16px)",
    marginBottom: "clamp(20px, 3vw, 30px)",
    textAlign: "center",
    fontWeight: "500",
  },
  footer: {
    marginTop: "clamp(80px, 10vw, 140px)",
    paddingTop: "clamp(20px, 3vw, 30px)",
    borderTop: "1px solid #111",
    textAlign: "center",
    color: "#444",
    fontSize: "clamp(11px, 2vw, 13px)",
  },
};
