import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px" }}>
    <h1 style={{ color: "#333", fontSize: "24px" }}>from: {fullName}!</h1>
    <div style={{ color: "#e53e3e", fontSize: "16px", marginBottom: "16px" }}>
      {email} sent you a message
    </div>
    <blockquote
      style={{
        borderLeft: "4px solid #e2e8f0",
        paddingLeft: "16px",
        margin: "16px 0",
        color: "#4a5568",
        fontStyle: "italic",
      }}
    >
      {message}
    </blockquote>
  </div>
);
