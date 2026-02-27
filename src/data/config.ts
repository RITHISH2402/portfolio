const config = {
  title: "Rithish S | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Rithish S, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Rithish S, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Rithish S",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "cybersecurity",
  ],
  author: "Rithish S",
  email: "srithishsenthilkumar2402@gmail.com",
  site: "https://rithishs.site",

  // for github stars button
  githubUsername: "rithish-s",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    threads: "https://www.threads.com/@_.rithizzx._",
    linkedin: "https://www.linkedin.com/in/rithish-s-67a0a9315/",
    instagram: "https://www.instagram.com/_.rithizzx._?igsh=MTMxdDNibHNoZXVhbQ==",
    github: "https://github.com/RITHISH2402/RITHISH2402",
  },
};
export { config };
