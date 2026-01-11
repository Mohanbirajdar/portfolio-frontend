// ============================================
// SKILLS - Organized by category
// ============================================

export interface Skill {
  name: string;
  icon?: string;
  needsInvert?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React 19", icon: "/png/reactlogo.png" },
      { name: "HTML5", icon: "/png/htmllogo.png" },
      { name: "CSS3", icon: "/png/csslogo.png" },
      { name: "JavaScript", icon: "/png/jslogo.png" },
      { name: "Tailwind CSS 4" },
      { name: "Bootstrap", icon: "/png/bootstraplogo.png" },
      { name: "Radix UI" },
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ]
  },
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C", icon: "/png/clogo.png" },
      { name: "C++", icon: "/png/cpplogo.png" },
      { name: "SQL" },
    ]
  },
  {
    category: "Data Science & ML/AI",
    icon: "🤖",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "NLP" },
      { name: "Regression" },
      { name: "Classification" },
      { name: "Time Series" },
    ]
  },
  {
    category: "Data Visualization",
    icon: "📊",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "MS Excel" },
      { name: "Google Sheets" },
      { name: "Statistical Analysis" },
    ]
  },
  {
    category: "Embedded Systems",
    icon: "🔌",
    skills: [
      { name: "Embedded C" },
      { name: "Arduino" },
      { name: "ESP32" },
      { name: "AT89S8253" },
      { name: "8051 Family" },
      { name: "Keil µVision" },
      { name: "Proteus" },
    ]
  },
  {
    category: "Hardware & Electronics",
    icon: "🔧",
    skills: [
      { name: "Sensors" },
      { name: "Actuators" },
      { name: "Relay Control" },
      { name: "Motors" },
      { name: "Digital Circuits" },
      { name: "Analog Circuits" },
    ]
  },
  {
    category: "IoT & Protocols",
    icon: "🌐",
    skills: [
      { name: "MQTT" },
      { name: "HTTP APIs" },
      { name: "Firebase" },
      { name: "WiFi Modules" },
      { name: "Bluetooth Modules" },
    ]
  },
  {
    category: "Industrial Automation",
    icon: "🏭",
    skills: [
      { name: "PLC Programming" },
      { name: "SCADA Systems" },
    ]
  },
  {
    category: "Cloud & Deployment",
    icon: "☁️",
    skills: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Vercel" },
      { name: "Streamlit" },
      { name: "Flask" },
      { name: "FastAPI" },
    ]
  },
  {
    category: "Tools & IDEs",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "/png/gitlogo.png" },
      { name: "GitHub", icon: "/png/githublogo.png", needsInvert: true },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Arduino IDE" },
    ]
  },
  {
    category: "Design",
    icon: "✨",
    skills: [
      { name: "Figma", icon: "/png/figmalogo.png" },
      { name: "Adobe Photoshop", icon: "/png/pslogo.png" },
      { name: "Adobe Illustrator", icon: "/png/ailogo.png" },
      { name: "Canva", icon: "/png/canvalogo.png" },
    ]
  },
  {
    category: "Soft Skills",
    icon: "💡",
    skills: [
      { name: "Problem-solving" },
      { name: "Communication" },
    ]
  },
];

// For backwards compatibility
export const skills = skillCategories.flatMap(cat => cat.skills);

// Section heading
export const skillsHeading = "Tech Stack";
