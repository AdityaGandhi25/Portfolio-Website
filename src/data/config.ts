const config = {
  title: "Aditya Gandhi | Data Analyst",
  description: {
    long: "Explore the portfolio of Aditya Gandhi, a 2nd year Computer Science student aiming to become a Data Analyst. Passionate about uncovering insights from data, building analytical models, and solving real-world problems with data-driven approaches.",
    short:
      "Discover the portfolio of Aditya Gandhi, a 2nd-year CSE student and aspiring Data Analyst.",
  },
  author: "Aditya Gandhi",
  email: "adityagandhingp@gmail.com",
  site: "https://adityagandhi.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  keywords: [
    "Aditya Gandhi",
    "Data Analyst",
    "portfolio",
    "developer",
    "python",
    "react",
    "sql",
    "data science"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/adityagandhi25042006/",
    instagram: "https://www.instagram.com/adityagandhi.25/",
    github: "https://github.com/AdityaGandhi25",
  },
};
export { config };
