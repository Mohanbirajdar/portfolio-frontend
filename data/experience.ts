// ============================================
// EXPERIENCE - Add or edit your work experience here
// ============================================

export interface Project {
  name: string;
  url?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type?: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";
  description: string[];
  technologies?: string[];
  projects?: Project[];
}

export const experiences: Experience[] = [
  {
    id: "symetrique",
    title: "Data Analyst & Full Stack Developer",
    company: "Symetrique",
    location: "United States, Remote",
    period: "February 2025 – Aug 2025",
    type: "Full-time",
    description: [
      "Built two major production platforms using Laravel, MySQL, PayPal API, and RBAC auth",
      "thesymetrique.com – Corporate portfolio website with dynamic content management, SEO optimization, and responsive UI",
      "physiciandata.thesymetrique.com – A subscription-based data selling platform with:",
      "Secure authentication (Admin/User)",
      "Role-based dashboards",
      "PayPal payment gateway for subscriptions",
      "Automated data access after payment confirmation",
      "Multiple subscription models and data usage logs",
      "Built interactive dashboards and comparative visualizations used by cross-functional teams, reducing analysis time by 25%"
    ],
    technologies: ["Laravel", "MySQL", "PayPal API", "RBAC", "SEO"],
    projects: [
      { name: "thesymetrique.com", url: "https://thesymetrique.com" },
      { name: "physiciandata.thesymetrique.com", url: "https://physiciandata.thesymetrique.com" }
    ]
  },
  {
    id: "codesoft",
    title: "Web Developer",
    company: "Codesoft",
    location: "India, Remote",
    period: "October 2023 – November 2023",
    type: "Internship",
    description: [
      "Built large-scale projects to gain hands-on experience in full-stack web development",
      "Gained strong understanding of development methodologies and best practices",
      "Learned deployment processes and project lifecycle management",
      "Developed diverse projects including portfolio websites and job boards",
      "Created HotelEase platform for accommodation booking",
      "Built MIT News platform for college news and announcements"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Full Stack", "Deployment"],
    projects: [
      { name: "Portfolio Websites", url: "#" },
      { name: "Job Board Platform", url: "#" },
      { name: "HotelEase Platform", url: "https://hotel-ease-room-mess-booking.vercel.app/" },
      { name: "MIT News Platform", url: "https://mohanbirajdar.github.io/MIT_News_Portal/" }
    ]
  }
];
