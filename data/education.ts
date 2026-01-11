// ============================================
// EDUCATION - Add or edit education details here
// ============================================

export interface Education {
  id: string;
  institution: string;
  degree: string;
  specialization?: string;
  duration: string;
  score: string;
  scoreType: 'CGPA' | 'Marks';
}

export const education: Education[] = [
  {
    id: "mit",
    institution: "Maharashtra Institute Of Technology, Chh. Sambhajinagar",
    degree: "Bachelor of electronics and computer engineering",
    specialization: "AI & ML (Minor)",
    duration: "2022 – 2026",
    score: "9.4",
    scoreType: "CGPA",
  },
  {
    id: "hsc",
    institution: "Shree. Chatrapati Shivaji college, Balsur",
    degree: "HSC (PCMB)",
    duration: "2021-2022",
    score: "70.50",
    scoreType: "Marks",
  },
  {
    id: "ssc",
    institution: "Shaheed Bhagatsingh High School",
    degree: "SSC",
    duration: "2019 – 2020",
    score: "89.40",
    scoreType: "Marks",
  },
];

export const educationHeading = "Education";
