// ============================================
// PROJECTS - Add, edit or remove projects here
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  favicon: string;
  previewImage: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
  category?: 'web' | 'mobile' | 'iot' | 'data' | 'embedded';
  date?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "omsai-bhojnalay",
    title: "🍽️ OmSai Bhojnalay",
    description: "A full-scale production platform for commercial mess business operations with complete User + Admin Dashboard, role-based access control, Supabase authentication with Row Level Security, PhonePe UAT payments & WhatsApp notifications integration, and multi-language support (English/Hindi/Marathi).",
    favicon: "/webp/omsai.png",
    previewImage: "/webp/omsai.png",
    liveUrl: "https://omsai.online",
    technologies: ["Next.js 15.5", "React 19", "TypeScript", "Tailwind CSS", "Supabase RLS", "PhonePe API", "WhatsApp Cloud API"],
    category: "web",
    date: "November 2025",
    features: [
      "Complete User + Admin Dashboard with role-based access control",
      "Supabase authentication with Row Level Security",
      "PhonePe UAT payments & WhatsApp notifications integration",
      "Multi-language support (English/Hindi/Marathi)",
      "Next.js App Router with Server Components"
    ]
  },
  {
    id: "pathai-platform",
    title: "🚀 PathAI – AI-Powered Learning & Career Platform",
    description: "A scalable full-stack platform that delivers personalized learning paths and career recommendations using LLM integration, user behavior analysis, and real-time job aggregation.",
    favicon: "/webp/pathai.png",
    previewImage: "/webp/pathai.png",
    githubUrl: "https://github.com/your-username/pathai",
    technologies: [
      "Python",
      "Next.js",
      "PostgreSQL",
      "REST APIs",
      "LLM Integration",
      "Web Scraping"
    ],
    category: "web",
    date: "Nov 2025",
    features: [
      "Personalized learning paths using LLMs and user behavior analysis",
      "Secure RESTful APIs with authentication and role-based access control",
      "Job aggregation system using web scraping for real-time opportunities",
      "Optimized PostgreSQL schema for managing user progress and skills",
      "Expert validation system for ratings and hiring credibility"
    ]
  },
  {
  id: "fintrack-dashboard",
  title: "💰 FinTrack — Modern Finance Dashboard",
  description: "A highly interactive and animated personal finance dashboard with advanced analytics, AI-driven insights, and a fully featured admin panel for platform-level management.",
  favicon: "/webp/fintrack.png",
  previewImage: "/webp/fintrack.jpeg",
  githubUrl: "https://github.com/your-username/fintrack",
  liveUrl: "https://f-intech-ui.vercel.app/dashboard",
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Zustand v5",
    "Framer Motion v12",
    "Recharts v3",
    "Sonner",
    "Lucide React",
    "date-fns"
  ],
  category: "web",
  date: "2025",
  features: [
    "Animated onboarding flow with persistent state using Zustand",
    "Interactive dashboard with charts, heatmaps, and smart financial insights",
    "Advanced transaction management with filters, sorting, anomaly detection, and import/export",
    "AI-style insights including spending patterns, savings rate, and recommendations",
    "Budget and financial goals tracking with animated progress visualization",
    "Dark/light theme with glassmorphism UI and smooth micro-interactions",
    "Admin panel with user analytics, transaction monitoring, and reporting tools",
    "Full state management with persistent storage and optimized performance",
    "Highly animated UI using Framer Motion with spring physics and smooth transitions"
  ]
},
  {
  id: "clinkit-system",
  title: "🏥 ClinKit — Clinical Trial Kit Optimization System",
  description: "A full-stack web application for managing specimen kit logistics across multi-site clinical trials with ML-powered demand forecasting, real-time analytics, and automated alert systems.",
  favicon: "/webp/clinkit.png",
  previewImage: "/webp/clinkit.jpeg",
  githubUrl: "https://github.com/your-username/clinkit",
  liveUrl: "https://clinical-trial-kit-optimization-sys.vercel.app/",
  technologies: [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Drizzle ORM",
    "MySQL (Aiven)",
    "Zustand",
    "Recharts",
    "React Hook Form",
    "Zod",
    "NextAuth.js",
    "TanStack Table",
    "Lucide React",
    "date-fns",
    "FastAPI (Python)",
    "scikit-learn",
    "Docker"
  ],
  category: "web",
  date: "2025",
  features: [
    "Real-time dashboard with KPIs — kits shipped, used, wasted, wastage %, active trials",
    "Clinical trial management (Phase I–IV) with status tracking and sponsor details",
    "Multi-site trial management with enrollment capacity and patient tracking",
    "Comprehensive kit inventory system with lot tracking, expiry dates, and storage requirements",
    "Smart expiry categorization — expired / expiring in 30 days / 30–60 days",
    "Full shipment lifecycle tracking — preparing → shipped → in transit → delivered",
    "Kit usage logging and auditing with wastage recording per site",
    "Advanced analytics — monthly wastage trends, site-level usage charts, efficiency metrics",
    "Intelligent alert system for low stock, expiry warnings, shipment delays, and high wastage",
    "ML-powered demand forecasting using Ridge Regression with formula fallback",
    "Type-safe database queries with Drizzle ORM and MySQL",
    "Real-time data visualization with Recharts charts and heatmaps",
    "Responsive admin dashboard with Tailwind CSS and shadcn/ui components",
    "Full state management with Zustand for persistent application state",
    "Server-side data access functions for optimized performance",
    "REST API routes for all major entities and operations",
    "Docker containerization for ML microservice deployment"
  ]
},
  {
    id: "ras-dandiya",
    title: "🎭 Ras Dandiya",
    description: "A complete ticket booking platform for Malang Raas Dandiya 2025, an 8-day cultural event. Features multi-step booking flow, Razorpay payment integration, QR-based e-tickets with scanner functionality, video hero section with immersive animations, and Google Maps integration.",
    favicon: "/webp/rasdandiya.png",
    previewImage: "/webp/rasdandiya.png",
    liveUrl: "https://malangevents.com/",
    technologies: ["React 19", "Vite 5", "React Router 7", "Tailwind CSS", "Framer Motion", "AOS", "AnimeJS", "Razorpay", "Supabase", "Netlify"],
    category: "web",
    date: "September 2025",
    features: [
      "Multi-step booking flow with real-time validation",
      "Razorpay payment integration for secure transactions",
      "QR-based e-tickets with scanner functionality",
      "Video hero section with immersive animations",
      "Multiple ticket types: Female, Male, Couple, Kids, Family",
      "6 modular React components with clean architecture"
    ]
  },
  {
    id: "mit-firstjob",
    title: "💼 MIT FirstJob",
    description: "A comprehensive full-stack AI-Powered Training & Placement Cell Management Platform connecting employers with candidates. Features AI Resume Builder with Google Gemini-powered ATS optimization, multi-role system with Spatie permissions, and payment integration with Stripe, PayPal & Razorpay.",
    favicon: "/webp/mitfirstjob.png",
    previewImage: "/webp/mitfirstjob.png",
    liveUrl: "https://mitfirstjob.free.nf",
    technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Tailwind CSS", "Google Gemini API", "Stripe", "PayPal", "Razorpay"],
    category: "web",
    date: "2025",
    features: [
      "Multi-role system (Admin, Employers, Candidates) with Spatie permissions",
      "AI Resume Builder with Google Gemini-powered ATS optimization",
      "7 AI-powered resume optimization features",
      "15+ database entities with proper relationships",
      "RESTful API architecture with 50+ endpoints",
      "Python-based ATS analyzer integration"
    ]
  },
  {
    id: "coffee-blend",
    title: "☕ Coffee Blend",
    description: "A complete e-commerce platform for coffee shop operations with shopping cart, reservations, and admin management. Features authentication with bcrypt, shop system with cart and checkout, table booking, and full admin CRUD operations.",
    favicon: "/webp/coffeeblend.png",
    previewImage: "/webp/coffeeblend.png",
    liveUrl: "https://mycafe.free.nf",
    githubUrl: "https://github.com/Mohanbirajdar/",
    technologies: ["PHP 8.x", "MySQL", "PDO", "Bootstrap 4", "jQuery", "Owl Carousel", "AOS", "bcrypt"],
    category: "web",
    date: "2025",
    features: [
      "Register/Login with bcrypt password hashing + session management",
      "Product catalog → Cart → Checkout flow",
      "Table reservations with date/time selection",
      "Admin Panel with full CRUD for products, orders, bookings",
      "7 MySQL database tables with proper relationships",
      "PDO prepared statements for SQL injection prevention"
    ]
  },
  {
  id: "micro-skill-tracker",
  title: "📚 Micro-Skill Learning Tracker",
  description: "A comprehensive skill development platform designed to help users track learning progress, manage skills across multiple categories, maintain learning streaks, and organize learning resources. Features real-time progress tracking, learning log management, reflection capabilities, and a clean dashboard with comprehensive analytics.",
  favicon: "/webp/micro-skill-tracker.png",
  previewImage: "/webp/micro-skill-tracker.png",
  liveUrl: "https://malangevents.com/micro-skill-tracker/",
  technologies: ["PHP", "MySQL", "PDO", "JavaScript", "HTML5", "CSS3", "Font Awesome", "AJAX"],
  category: "web",
  date: "January 2026",
  features: [
    "User authentication and security with session management",
    "Create and manage multiple skills with categories and learning goals",
    "Real-time learning log tracking with time spent metrics",
    "Day streak counter for motivation and consistency tracking",
    "Learning resources management and organization",
    "Reflections module for self-assessment and progress review",
    "Dashboard with statistics including total skills, logs, streaks, and time",
    "Responsive design with clean, intuitive UI",
    "Database-backed persistence with PDO prepared statements",
    "RESTful API endpoints for seamless frontend-backend communication"
  ]
},
  {
    id: "limitlock",
    title: "🚗 LimitLock",
    description: "Smart IoT Vehicle Speed Monitoring System for road safety. Features real-time speed detection using IR sensors, instant alarm trigger and mobile notifications when speed exceeds 60 km/h, digital logging of overspeeding events, and IoT-based tracking.",
    favicon: "/webp/limitlock.png",
    previewImage: "/webp/limitlock.png",
    technologies: ["Arduino Uno R3", "ESP32", "C", "IR Sensors", "Blink IoT"],
    category: "iot",
    date: "October 2024 – February 2025",
    features: [
      "Real-time speed detection using IR sensors",
      "Instant alarm trigger and mobile notifications when speed exceeds 60 km/h",
      "Digital logging of overspeeding events",
      "IoT-based tracking and analytics"
    ]
  },
  {
    id: "sentiment-analysis",
    title: "📊 Social Media Sentiment Analysis",
    description: "End-to-end sentiment classification system for social media platforms. Processed text data from Instagram, Twitter, Reddit & Facebook with tokenization, TF-IDF, and embedding-based feature extraction. Compared LSTM, SVM, and Random Forest model performance.",
    favicon: "/webp/sentimentanalysis.png",
    previewImage: "/webp/sentimentanalysis.png",
    githubUrl: "https://github.com/Mohanbirajdar/sentimentanalysys.git",
    technologies: ["NLP", "LSTM", "SVM", "Random Forest", "TF-IDF", "Python"],
    category: "data",
    date: "February 2025", 
    features: [
      "Processed text data from Instagram, Twitter, Reddit & Facebook",
      "Implemented tokenization, TF-IDF, and embedding-based feature extraction",
      "Compared LSTM, SVM, and Random Forest model performance",
      "Analytics visualizations on 747 curated records"
    ]
  },
  {
    id: "music-analytics",
    title: "🎵 Music Analytics & Streaming Insights",
    description: "Cross-platform music streaming analysis combining Spotify & YouTube datasets (19k+ rows, 30+ features). Uncovered top 10 artist patterns, engagement predictors, and demonstrated correlations like danceability → +18% higher views.",
    favicon: "/webp/musicanalytics.png",
    previewImage: "/webp/musicanalytics.png",
    githubUrl: "https://github.com/Mohanbirajdar/youtube-spotifyDA.git", 
    technologies: ["Spotify API", "YouTube Dataset", "Python", "EDA", "Pandas", "Matplotlib"],
    category: "data",
    date: "2025",
    features: [
      "Combined Spotify & YouTube datasets (19k+ rows, 30+ features)",
      "Uncovered top 10 artist patterns and engagement predictors",
      "Demonstrated correlations (danceability → +18% higher views)",
      "Applied regression and statistical testing"
    ]
  },
  {
    id: "covid-analysis",
    title: "🦠 COVID-19 Data Analysis",
    description: "Comprehensive pandemic data analysis focusing on spread patterns with region-wise comparison, trend identification, mortality rate analysis, and state-wise hotspot mapping.",
    favicon: "/webp/covid19.png",
    previewImage: "/webp/covid19.png",
    githubUrl: "https://github.com/Mohanbirajdar/covid19DA.git",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "data",
    date: "2024",
    features: [
      "Region-wise comparison and trend identification",
      "Mortality rate analysis",
      "State-wise hotspot mapping"
    ]
  },
  {
    id: "led-matrix",
    title: "💡 LED Matrix Driver",
    description: "Embedded display system using multiplexed LED matrix with custom animations using timers and interrupt routines. Low-level driver programming for AT89S8253 microcontroller.",
    favicon: "/webp/leddriver.png",
    previewImage: "/webp/leddriver.png",
    technologies: ["AT89S8253", "Keil µVision", "Assembly", "Embedded C"],
    category: "embedded",
    date: "2024",
    features: [
      "Custom animations using timers and interrupt routines",
      "Low-level driver programming",
      "Multiplexed LED matrix control"
    ]
  },
  {
    id: "aquaalert",
    title: "💧 AquaAlert",
    description: "An innovative water monitoring system that combines a mobile app with sensor technology to provide real-time data on water levels and quality. It aims to promote efficient water management and raise awareness about water conservation.",
    favicon: "/webp/water.png",
    previewImage: "/webp/Aquaalert.png",
    githubUrl: "https://github.com/Mohanbirajdar/AquaAlert",
    technologies: ["Kotlin", "Firebase", "Android", "IoT Sensors"],
    category: "mobile",
    date: "2024"
  },
  {
    id: "resume-optimizer",
    title: "📄 Resume Optimizer",
    description: "Optimize your resume with our AI-powered tool! Input your resume and job description to receive a match score and personalized suggestions for improvement.",
    favicon: "/webp/cropped-1086600-192x192.webp",
    previewImage: "/webp/Ats.png",
    githubUrl: "https://github.com/Mohanbirajdar/CareerCatalyst_Ats",
    liveUrl: "https://careercatalyst-ats.onrender.com/",
    technologies: ["Python", "Streamlit", "NLP", "AI/ML"],
    category: "web",
    date: "2024"
  },
  {
    id: "hotel-ease",
    title: "🏨 HotelEase",
    description: "A Comprehensive Hotel Management System with room booking, mess management, and admin dashboard.",
    favicon: "/webp/hotelease.png",
    previewImage: "/webp/hotelease.png",
    githubUrl: "https://hotel-ease-room-mess-booking.vercel.app/",
    liveUrl: "https://hotel-ease-room-mess-booking.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    category: "web",
    date: "2024"
  },
  {
    id: "mit-topnews",
    title: "📰 MIT TopNews",
    description: "A Comprehensive News Portal for MIT with categorized news, search functionality, and responsive design.",
    favicon: "/webp/mitnews.png",
    previewImage: "/webp/mitnews.png",
    githubUrl: "https://github.com/Mohanbirajdar/MIT_News_Portal/",
    liveUrl: "https://mohanbirajdar.github.io/MIT_News_Portal/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web",
    date: "2024"
  },
  {
    id: "woox-tours",
    title: "✈️ WoOX Tours & Travels",
    description: "A comprehensive tours and travels web application offering customizable travel packages, destination details, and customer reviews with user-friendly interfaces.",
    favicon: "/webp/wowex.png",
    previewImage: "/webp/wowex.png",
    githubUrl: "https://github.com/Mohanbirajdar/Tours_Travels",
    liveUrl: "https://mohanbirajdar.github.io/Tours_Travels/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web",
    date: "2024"
  },
];
