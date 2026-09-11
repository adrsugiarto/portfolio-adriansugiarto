export const profileData = {
  name: "Adrian Herma Sugiarto, S.SI., M.Kom.",
  shortName: "Adrian Herma Sugiarto",
  title: "Peneliti Sistem Informasi & Full-Stack Developer",
  avatar: "/foto_adriansugiarto.png",
  tagline: "Fokus Riset Adopsi Teknologi, Perilaku Sistem Informasi & Software Engineering",
  bio: "Seorang Akademisi / Peneliti di bidang Sistem Informasi sekaligus Full-Stack Software Developer. Berfokus pada riset adopsi teknologi digital (QRIS, E-Office), rekayasa perangkat lunak (SELC), serta pengembangan aplikasi web & mobile modern yang terstruktur.",
  location: "Salatiga & Central Java, Indonesia",
  email: "adrian.sugiarto@example.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  orcid: "https://orcid.org/0009-0002-6704-2507",
  orcidId: "0009-0002-6704-2507",
  github: "https://github.com/adriansugiarto",
  linkedin: "https://linkedin.com/in/adriansugiarto",
  googleScholar: "https://scholar.google.com",
  resumeUrl: "#cv",
  stats: [
    { label: "Publikasi Jurnal DOI", value: "2", icon: "BookOpen" },
    { label: "ORCID Verified", value: "iD", icon: "Award" },
    { label: "IPK Sarjana (S.SI)", value: "3.94", icon: "GraduationCap" },
    { label: "Pengalaman Developer", value: "4+ Thn", icon: "Code2" }
  ]
};

export const publicationsData = [
  {
    id: "pub-qris-2024",
    title: "INFORMATION SYSTEMS ADOPTION AND USE BEHAVIOR OF QRIS AS A DIGITAL PAYMENT INFRASTRUCTURE AMONG GENERATION Z",
    authors: "Adrian Herma Sugiarto, et al.",
    journal: "Jurnal Ilmiah Ilmu Terapan Universitas Jambi (JIITUJ)",
    year: "2024",
    doi: "10.22437/jiituj.v10i2.54186",
    doiUrl: "https://doi.org/10.22437/jiituj.v10i2.54186",
    category: "Perilaku Sistem Informasi & Payment Infrastructure",
    abstract: "Menganalisis faktor-faktor psikologis dan teknis yang memengaruhi adopsi serta penggunaan infrastruktur pembayaran digital QRIS oleh Generasi Z.",
    keywords: ["QRIS", "System Adoption", "UTAUT2", "Digital Payment", "Generation Z"]
  },
  {
    id: "pub-eoffice-2023",
    title: "ANALISA KEBUTUHAN SISTEM INFORMASI ELECTRONIC OFFICE PADA KANTOR GEREJA MENGGUNAKAN MODEL SYSTEM ENGINEERING LIFE CYCLE",
    authors: "Adrian Herma Sugiarto, et al.",
    journal: "Jurnal Teknologi Sistem Informasi (JTSI)",
    year: "2023",
    doi: "10.32493/jtsi.v6i3.30360",
    doiUrl: "http://doi.org/10.32493/jtsi.v6i3.30360",
    category: "Rekayasa Perangkat Lunak & E-Office",
    abstract: "Studi analisis kebutuhan sistem informasi E-Office pada tata kelola kantor gereja menggunakan pendekatan System Engineering Life Cycle (SELC).",
    keywords: ["Electronic Office", "SELC", "Requirement Analysis", "Information System"]
  }
];

export const educationData = [
  {
    period: "2023 - 2026",
    degree: "Magister Sistem Informasi (M.Kom)",
    institution: "Universitas Kristen Satya Wacana",
    logo: "https://www.uksw.edu/wp-content/uploads/2023/06/USER120200827143745-300x300.png",
    thesisTitle: "INFORMATION SYSTEMS ADOPTION AND USE BEHAVIOR OF QRIS AS A DIGITAL PAYMENT INFRASTRUCTURE AMONG GENERATION Z",
    thesisUrl: "https://doi.org/10.22437/jiituj.v10i2.54186",
    description: "Fokus riset pada Perilaku Penggunaan Sistem Informasi, Infrastruktur Pembayaran Digital (QRIS), dan Model Adopsi Teknologi pada Generasi Z."
  },
  {
    period: "2019 - 2023",
    degree: "Sarjana Sistem Informasi (S.SI)",
    institution: "Universitas Kristen Satya Wacana",
    logo: "https://www.uksw.edu/wp-content/uploads/2023/06/USER120200827143745-300x300.png",
    gpa: "IPK: 3.94 / 4.00 (Cum Laude)",
    thesisTitle: "ANALISA KEBUTUHAN SISTEM INFORMASI ELECTRONIC OFFICE PADA KANTOR GEREJA MENGGUNAKAN MODEL SYSTEM ENGINEERING LIFE CYCLE",
    thesisUrl: "http://doi.org/10.32493/jtsi.v6i3.30360",
    description: "Fokus pada Rekayasa Perangkat Lunak, Analisis & Perancangan Sistem Informasi, serta Interaksi Manusia & Komputer."
  }
];

export const researchInterestsData = [
  {
    title: "Adopsi & Perilaku Sistem Informasi",
    icon: "TrendingUp",
    desc: "Studi empiris penggunaan sistem informasi digital (UTAUT/TAM), perilaku konsumen, dan ekosistem fintech QRIS."
  },
  {
    title: "Rekayasa Perangkat Lunak (SELC)",
    icon: "Code2",
    desc: "Analisis kebutuhan sistem, pemodelan arsitektur software, dan siklus rekayasa sistem E-Office."
  },
  {
    title: "Pengembangan Web & Aplikasi",
    icon: "Layout",
    desc: "Implementasi teknologi modern React.js, Node.js, Laravel, REST APIs, dan basis data relasional."
  }
];

export const skillsData = [
  {
    category: "Keilmuan & Metode Riset",
    icon: "BookOpen",
    skills: [
      { name: "Analisis Sistem Informasi (SELC / SDLC)", level: 96, desc: "Pemodelan Kebutuhan, Flowchart, DFD, UML" },
      { name: "Model Adopsi Teknologi (UTAUT2 / TAM)", level: 94, desc: "Analisis kuantitatif perilaku pengguna" },
      { name: "Kepenulisan Ilmiah & Publikasi DOI", level: 90, desc: "Penyusunan naskah jurnal terakreditasi" }
    ]
  },
  {
    category: "Pemrograman & Web Development",
    icon: "Code2",
    skills: [
      { name: "React.js / JavaScript (ES6+)", level: 92, desc: "SPA, Modern UI, Hooks & State Management" },
      { name: "Laravel / PHP", level: 88, desc: "MVC Architecture, RESTful API, Eloquent ORM" },
      { name: "Node.js / Express API", level: 85, desc: "Backend web services & Database Integration" },
      { name: "PostgreSQL / MySQL / HTML & CSS", level: 90, desc: "Relational database design & CSS Styling" }
    ]
  }
];

export const projectsData = [
  {
    id: "eoffice-church",
    title: "Sistem Informasi Electronic Office (E-Office)",
    category: "Aplikasi Riset & Web",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "Platform E-Office untuk otomasi administrasi, persuratan, dan tata kelola kantor berbasis metode SELC.",
    longDescription: "Sistem Informasi E-Office dikembangkan berdasarkan riset kebutuhan tata kelola dokumen dan surat menyurat. Dilengkapi manajemen hak akses, penomoran otomatis, dan pengarsipan digital terenkripsi.",
    tags: ["PHP Laravel", "MySQL", "System Engineering", "Bootstrap"],
    featured: true,
    liveUrl: "http://doi.org/10.32493/jtsi.v6i3.30360",
    githubUrl: "https://github.com/adriansugiarto",
    metrics: ["Terpublikasi di Jurnal JTSI", "Implementasi SELC"]
  },
  {
    id: "qris-analytics-app",
    title: "QRIS Adoption Research Dashboard",
    category: "Aplikasi Riset & Web",
    image: "https://images.unsplash.com/photo-1556742049-0a67568d0490?auto=format&fit=crop&w=1200&q=80",
    description: "Visualisasi data empiris adopsi infrastruktur pembayaran digital QRIS pada Generasi Z.",
    longDescription: "Dashboard interaktif berbasis React yang menampilkan grafik sampel data indikator UTAUT2 (Performance Expectancy, Effort Expectancy, Personal Innovativeness) dalam adopsi QRIS.",
    tags: ["React", "TypeScript", "Chart.js", "Data Analysis"],
    featured: true,
    liveUrl: "https://doi.org/10.22437/jiituj.v10i2.54186",
    githubUrl: "https://github.com/adriansugiarto",
    metrics: ["Terpublikasi di JIITUJ", "Model UTAUT2"]
  },
  {
    id: "academic-portal",
    title: "Academic Repository & Learning System",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    description: "Portal repositori materi perkuliahan, jadwal akademik, dan manajemen tugas mahasiswa.",
    longDescription: "Platform manajemen pembelajaran ringan untuk membantu distribusi materi akademik dan submit tugas secara efisien.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    featured: false,
    liveUrl: "https://github.com/adriansugiarto",
    githubUrl: "https://github.com/adriansugiarto",
    metrics: ["Sederhana & Responsif"]
  }
];

export const experienceData = [
  {
    period: "2023 - Sekarang",
    role: "Peneliti Sistem Informasi & Asisten Riset",
    company: "Universitas Kristen Satya Wacana",
    location: "Salatiga, Indonesia",
    description: "Fokus pada riset adopsi teknologi pembayaran digital (QRIS), metodologi penelitian sistem informasi, dan penulisan naskah jurnal terakreditasi.",
    achievements: [
      "Menerbitkan publikasi jurnal ilmiah terakreditasi mengenai perilaku adopsi QRIS pada Gen Z.",
      "Melakukan analisis data kuantitatif menggunakan metode analisis multivariat & UTAUT2.",
      "Terdaftar aktif dengan ID Peneliti ORCID (0009-0002-6704-2507)."
    ]
  },
  {
    period: "2020 - 2023",
    role: "Web Software Developer",
    company: "Proyek Independen & Akademis",
    location: "Salatiga, Indonesia",
    description: "Merancang dan membangun aplikasi web berstandar rekayasa perangkat lunak (SELC/SDLC) untuk berbagai kebutuhan sistem informasi instansi dan organisasi.",
    achievements: [
      "Mengembangkan Sistem Informasi Electronic Office kantor gereja berbasis model SELC.",
      "Membangun modul frontend React dan backend Laravel dengan arsitektur bersih."
    ]
  }
];
