"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#f3f4f6",
        borderBottom: "1px solid #ddd",
        textAlign: "right",
      }}
    >
      <span style={{ marginRight: "20px" }}>Home</span>
      <span style={{ marginRight: "20px" }}>Project</span>
      <span style={{ marginRight: "20px" }}>About</span>
      <span>Contact</span>
    </nav>
  );
}
