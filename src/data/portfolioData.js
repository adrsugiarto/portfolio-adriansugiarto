export const profileData = {
  name: "Adrian Herma Sugiarto",
  nickname: "Adrian",
  title: "Senior Full-Stack Engineer & UI/UX Specialist",
  tagline: "Merancang Aplikasi Web Modern, Responsif & Berkinerja Tinggi",
  bio: "Seorang Software Engineer yang berdedikasi dengan pengalaman lebih dari 5 tahun dalam membangun solusi web dan mobile enterprise. Berfokus pada arsitektur bersih, performa maksimal, dan pengalaman pengguna (UX) yang sangat responsif serta elegan.",
  location: "Jakarta & Bandung, Indonesia",
  email: "adrian.sugiarto@example.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  github: "https://github.com/adriansugiarto",
  linkedin: "https://linkedin.com/in/adriansugiarto",
  dribbble: "https://dribbble.com/adriansugiarto",
  resumeUrl: "#resume",
  stats: [
    { label: "Tahun Pengalaman", value: "5+", icon: "Award" },
    { label: "Proyek Selesai", value: "45+", icon: "CheckCircle2" },
    { label: "Klien Puas", value: "99%", icon: "Smile" },
    { label: "Teknologi Dikuasai", value: "15+", icon: "Code2" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js / Next.js", level: 95, desc: "SPA, SSR, Custom Hooks & Context State Management" },
      { name: "TypeScript / JavaScript ES6+", level: 92, desc: "Strict type safety, Asynchronous programming" },
      { name: "HTML5 & Modern CSS3", level: 98, desc: "Flexbox, Grid, Glassmorphism, Animations, TailwindCSS" },
      { name: "Vue.js / Nuxt", level: 85, desc: "Component architecture, Pinia state management" }
    ]
  },
  {
    category: "Backend & API Architecture",
    icon: "Server",
    skills: [
      { name: "Node.js / Express.js", level: 90, desc: "RESTful API, Microservices, Middleware" },
      { name: "Laravel / PHP", level: 88, desc: "MVC Architecture, Eloquent ORM, Blade, REST APIs" },
      { name: "Python / FastAPI", level: 82, desc: "Asynchronous API endpoints, AI Integration" },
      { name: "GraphQL & REST APIs", level: 88, desc: "Schema design, Apollo Client/Server, Caching" }
    ]
  },
  {
    category: "Database & Cloud Infrastructure",
    icon: "Database",
    skills: [
      { name: "PostgreSQL / MySQL", level: 90, desc: "Schema design, Indexing, Query Optimization" },
      { name: "MongoDB / Redis", level: 85, desc: "NoSQL document storage, Caching layer" },
      { name: "Docker & CI/CD", level: 80, desc: "Containerization, GitHub Actions deployment" },
      { name: "AWS & Vercel", level: 84, desc: "S3, EC2, Cloudfront, Serverless deployments" }
    ]
  },
  {
    category: "UI/UX & Design Systems",
    icon: "Figma",
    skills: [
      { name: "Figma & Wireframing", level: 92, desc: "High-fidelity mockups, Component Libraries, Interactive Prototypes" },
      { name: "Design System Architecture", level: 94, desc: "Tokenization, Typography scale, Color palettes" },
      { name: "User Research & Usability", level: 86, desc: "A/B Testing, User flows, Wireframing" }
    ]
  }
];

export const projectsData = [
  {
    id: "nexus-analytics",
    title: "Nexus SaaS Analytics Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Platform analitik bisnis waktu-nyata dengan grafik interaktif, laporan otomatis, dan integrasi multi-channel data pipeline.",
    longDescription: "Nexus SaaS Analytics Dashboard dirancang untuk membantu pemangku kepentingan mengawasi metrik utama bisnis seperti MRR, churn rate, dan conversion funnel secara real-time. Dibangun menggunakan React, Recharts, dan Node.js microservices.",
    tags: ["React", "TypeScript", "Node.js", "Chart.js", "PostgreSQL"],
    featured: true,
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/adriansugiarto/nexus-analytics",
    metrics: ["+45% Efisiensi Pelaporan", "10k+ Pengguna Aktif"]
  },
  {
    id: "aura-ecommerce",
    title: "Aura Luxury E-Commerce Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "Toko online eksklusif dengan pengalaman belanja tanpa hambatan, pembayaran instan Midtrans, dan pembaruan inventaris real-time.",
    longDescription: "Aura E-Commerce mengedepankan estetika mewah dengan transisi halaman yang halus, penyaringan produk instan, integrasi payment gateway Midtrans & Stripe, serta panel manajemen stok untuk admin.",
    tags: ["React", "Next.js", "Laravel API", "TailwindCSS", "Midtrans"],
    featured: true,
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/adriansugiarto/aura-ecommerce",
    metrics: ["99.9% Uptime", "2.5x Conversion Boost"]
  },
  {
    id: "zenith-banking",
    title: "Zenith Mobile Banking Interface",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description: "Desain antarmuka aplikasi perbankan digital generasi baru yang mengutamakan keamanan biometrik dan kemudahan aksesibilitas.",
    longDescription: "Merancang ulang pengalaman pengguna perbankan digital dengan fokus pada kemudahan transfer dana, analisis pengeluaran berbasis AI, serta sistem autentikasi aman 2FA & Biometric.",
    tags: ["React Native", "Figma UI/UX", "Redux Toolkit", "Security API"],
    featured: true,
    liveUrl: "https://example.com/zenith",
    githubUrl: "https://github.com/adriansugiarto/zenith-mobile",
    metrics: ["4.8★ App Store", "100k+ Downloads"]
  },
  {
    id: "synapse-ai",
    title: "Synapse AI Writing Workspace",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "Workspace pembuatan konten berbasis AI dengan editor rich-text, saran gaya bahasa instan, dan kolaborasi tim.",
    longDescription: "Synapse memanfaatkan kekuatan LLM API untuk menghasilkan draf artikel, copywriting iklan, dan email secara instan dengan manajemen workspace terintegrasi.",
    tags: ["React", "OpenAI API", "Node.js", "WebSockets", "CSS Modules"],
    featured: false,
    liveUrl: "https://example.com/synapse",
    githubUrl: "https://github.com/adriansugiarto/synapse-ai",
    metrics: ["5x Fast Drafting", "AI Powered"]
  },
  {
    id: "pulse-health",
    title: "Pulse Telemedicine & Patient Portal",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Portal konsultasi dokter online dan rekam medis digital terenkripsi untuk kenyamanan pasien dan penyedia layanan kesehatan.",
    longDescription: "Studi kasus UX komprehensif untuk telemedicine dari riset pengguna, wireframing, prototype interaktif di Figma, hingga implementasi frontend komponen.",
    tags: ["UI/UX Design", "Figma", "Design System", "React Component Library"],
    featured: false,
    liveUrl: "https://example.com/pulse",
    githubUrl: "https://github.com/adriansugiarto/pulse-health",
    metrics: ["Usability score 94/100"]
  },
  {
    id: "voyage-travel",
    title: "Voyage Smart Booking App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    description: "Aplikasi pemesanan tiket penerbangan dan penginapan dengan rekomendasi rute terpopuler dan penawaran terpersonalisasi.",
    longDescription: "Voyage menyederhanakan proses perencanaan perjalanan liburan dengan fitur itinerary builder otomatis, peta interaktif, dan notifikasi jadwal penerbangan.",
    tags: ["React Native", "Expo", "Google Maps API", "GraphQL"],
    featured: false,
    liveUrl: "https://example.com/voyage",
    githubUrl: "https://github.com/adriansugiarto/voyage-app",
    metrics: ["50k+ Active Itineraries"]
  }
];

export const experienceData = [
  {
    period: "2023 - Sekarang",
    role: "Senior Lead Full-Stack Engineer",
    company: "TechNova Solutions Ltd.",
    location: "Jakarta, Indonesia",
    description: "Memimpin tim 8 engineer dalam mengembangkan arsitektur platform SaaS berbasis cloud. Meningkatkan kinerja load time aplikasi hingga 40% dan mengimplementasikan CI/CD terotomatisasi.",
    achievements: [
      "Merancang ulang infrastruktur frontend dari monolith ke micro-frontend berbasis React.",
      "Mengurangi biaya operasional server sebesar 25% melalui optimasi query dan caching Redis.",
      "Mentoring junior developer dan menerapkan kriteria sertifikasi code review yang ketat."
    ]
  },
  {
    period: "2021 - 2023",
    role: "Full-Stack Web Developer",
    company: "Inovasi Digital Nusantara",
    location: "Bandung, Indonesia",
    description: "Mengembangkan berbagai aplikasi web berskala enterprise untuk klien sektor finansial, e-commerce, dan logistik menggunakan React, Node.js, dan Laravel.",
    achievements: [
      "Mengembangkan payment gateway integration yang memproses lebih dari 50.000 transaksi harian.",
      "Membangun reusable UI component library yang mempercepat siklus dev hingga 30%."
    ]
  },
  {
    period: "2019 - 2021",
    role: "Frontend Developer & UI Specialist",
    company: "Creative Byte Studio",
    location: "Bandung, Indonesia",
    description: "Fokus pada pembuatan antarmuka web interaktif, animasi CSS, dan responsive design untuk startup dan agen digital ternama.",
    achievements: [
      "Menyelesaikan lebih dari 20 proyek web klien dengan tingkat kepuasan 100%.",
      "Memenangkan penghargaan internal 'Best UX Implementation' tahun 2020."
    ]
  }
];

export const educationData = [
  {
    period: "2015 - 2019",
    degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
    institution: "Universitas Padjadjaran",
    gpa: "IPK: 3.84 / 4.00 (Cum Laude)",
    description: "Fokus pada Rekayasa Perangkat Lunak, Sistem Terdistribusi, dan Interaksi Manusia & Komputer (HCI)."
  }
];

export const testimonialsData = [
  {
    quote: "Adrian adalah engineer luar biasa yang tidak hanya jago coding, tetapi juga mengerti nilai estetika dan UX produk. Hasil kerjanya pada Nexus Analytics sangat memukau klien kami!",
    author: "Budi Santoso",
    title: "VP of Product, TechNova",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Komitmen Adrian terhadap kualitas kode dan ketepatan waktu adalah salah satu yang terbaik yang pernah saya temui. Kombinasi biru & putih di portofolio ini mencerminkan karakter kerjanya yang bersih dan profesional.",
    author: "Siti Rahmawati",
    title: "CEO, Inovasi Digital Nusantara",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Sangat responsif dan memiliki pemahaman mendalam tentang arsitektur React & UI Design System. Sangat meyakinkan untuk bekerja sama dengan Adrian!",
    author: "Reza Pratama",
    title: "Lead UI/UX Designer, Creative Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];
