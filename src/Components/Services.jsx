import React from "react";

const Services = () => {
  return (
    <section className="light" id="services">
      <h2>Services</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p>
          I design and build intelligent automation systems and AI-powered software solutions for
          modern businesses.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
            lineHeight: "2",
            fontWeight: "500",
          }}
        >
          <li>AI Voice Agents & Conversational Systems</li>
          <li>Custom ERP & Workflow Automation</li>
          <li>SaaS Product Development</li>
          <li>API Integrations & System Architecture</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
