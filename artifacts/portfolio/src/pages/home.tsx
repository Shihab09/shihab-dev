import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Mail, Phone, MapPin, Download, ExternalLink, ChevronRight, Linkedin, Database, Smartphone, Code2 } from "lucide-react";
import { SiGithub, SiFlutter, SiKotlin, SiSwift, SiSpringboot, SiApachekafka, SiDocker, SiPostgresql, SiMysql } from "react-icons/si";
import portraitSrc from "@assets/corporate_fixlight_1777746365512.png";

// --- Data ---
const SKILLS = [
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter/Dart (Primary)", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Swift", icon: SiSwift },
      { name: "Cross-platform SDK (EKYC)" }
    ]
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Java (Spring Boot)", icon: SiSpringboot },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "Microservices Architecture" },
      { name: "REST/SOAP/RPC APIs" }
    ]
  },
  {
    category: "Event Streaming & Messaging",
    items: [
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Event-driven Architecture" }
    ]
  },
  {
    category: "DevOps & Containerization",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose" },
      { name: "CI/CD Pipelines" }
    ]
  },
  {
    category: "Security & Integration",
    items: [
      { name: "OAuth 2.0" },
      { name: "HMAC Signature" },
      { name: "NID Data Fetching" },
      { name: "Payment Gateway Integration" }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: Database },
      { name: "Android Studio", icon: Smartphone },
      { name: "Xcode", icon: Code2 }
    ]
  }
];

const EXPERIENCE = [
  {
    title: "Senior Mobile Application Developer",
    company: "DG Infotech Ltd",
    period: "Jan 2026 – Present",
    bullets: [
      "SDK Leadership: Leading the development and maintenance of a highly secure EKYC SDK compatible across Mobile (iOS/Android) and Web platforms",
      "Containerized backend services and SDK-related components using Docker",
      "Security Architecture: Directly responsible for architecting and deploying high-security, multi-platform SDKs and APIs",
      "Government Integration: Led high-stakes API integrations with the Election Commission using OAuth 2.0 protocols to securely fetch NID data",
      "Fintech Security: Designed and implemented combined APIs using HMAC signatures for secure payment gateway integration"
    ]
  },
  {
    title: "Mobile Application Developer",
    company: "DG Infotech Ltd",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "High-Performance Development: Developed and maintained mobile applications for Android, iOS, and Flutter platforms",
      "Backend Engineering: Built and integrated Java Spring Boot APIs to support scalable and secure backend systems",
      "Identity Verification: Designed and implemented eKYC solutions on Android and iOS, including integration with ePassport-based verification systems",
      "Fintech Integration: Integrated APIs for payment gateways, financial data, and identity verification services",
      "Optimization: Enhanced app performance and security while ensuring compliance with industry regulations"
    ]
  },
  {
    title: "Software Developer",
    company: "Datasoft Systems Bangladesh Ltd",
    period: "Nov 2021 – Jun 2024",
    bullets: [
      "Critical Infrastructure: Core developer for the Chattogram Port Authority Terminal Management System (CPATOS) mobile apps",
      "Hybrid/Native Mastery: Developed and maintained dual-platform apps using Flutter, native Kotlin, and native Swift",
      "System Integration: Handled complex inter-process communication using HTTP, REST, SOAP, and RPC"
    ]
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "East West University, Dhaka",
    details: "CGPA: 3.14"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Chittagong College, Chittagong",
    details: "GPA: 4.80 | Science"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Chittagong Collegiate School, Chittagong",
    details: "GPA: 5.00 | Science"
  }
];

const CERTIFICATIONS = [
  "SEIP ASP.NET MVC (BASIS-Supported Program)"
];

const PROJECTS = [
  {
    title: "Event-Driven Cloud Microservices Platform",
    subtitle: "Docker · Kafka · Kubernetes",
    description: "A scalable, event-driven microservices system built using Spring Boot. Uses Docker for containerization, Kubernetes for orchestration, and Kafka for asynchronous communication between services. Designed to demonstrate real-world distributed system architecture and high scalability.",
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "Apache Kafka"],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Chittagong Port Authority Terminal Operating System",
    subtitle: "Flutter · Cross-Platform",
    description: "A cross-platform mobile application simulating port terminal operations such as container tracking and vessel scheduling. Focused on smooth UI/UX and efficient workflow visualization.",
    tech: ["Flutter", "Dart"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Consignment Management System",
    subtitle: "Spring Boot · Angular · Full-Stack",
    description: "A full-stack web application for managing consignments and shipment tracking. Includes REST API integration and a modular architecture for handling logistics workflows.",
    tech: ["Java", "Spring Boot", "Angular", "REST API"],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "eKYC SDK – Secure Identity Verification",
    subtitle: "Android SDK · Security",
    description: "A secure Android SDK for electronic KYC verification with token-based authentication and license validation. Ensures controlled access and prevents unauthorized usage.",
    tech: ["Java", "Android SDK", "Security", "AAR"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Terminal Operating System",
    subtitle: "Native Android · Kotlin",
    description: "A native Android application for terminal management with optimized performance and offline capabilities. Focused on handling logistics operations efficiently.",
    tech: ["Kotlin", "Android", "XML"],
    gradient: "from-orange-500 to-rose-500"
  }
];

// --- Components ---

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent tracking-tight">S.S.U.S</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-2xl py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground/90 hover:text-primary transition-colors py-2">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary origin-left z-[60]"
        style={{ scaleX }}
      />
      <NavBar />
      
      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[128px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-[128px] mix-blend-screen" />
          </div>
          
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium w-fit backdrop-blur-md">
                Senior Mobile Application Developer
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tighter">
                Syed Shihab <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Uddin Sultan</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                4.5+ Years Building Cross-Platform Mobile & Cloud Solutions. Architecting high-security SDKs and scalable microservices.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#experience" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                  View My Work
                </a>
                <a href="https://drive.google.com/file/d/1rqoEywyYgzObtbhaPTn0TgxmJHmU6MPx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2">
                  <Download size={18} /> Download CV
                </a>
              </div>
              
              <div className="flex items-center gap-6 pt-8 text-muted-foreground">
                <a href="https://linkedin.com/in/shihabrasim" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Shihab09" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <SiGithub size={24} />
                </a>
                <div className="h-4 w-px bg-border"></div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> Dhaka, Bangladesh
                </div>
              </div>

            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-center"
            >
              <div className="relative w-72 md:w-[26rem]" style={{ aspectRatio: "3/4" }}>
                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-primary via-accent to-secondary opacity-70 blur-lg" />
                {/* Gradient border frame */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-primary via-accent to-secondary p-[3px]">
                  <div className="w-full h-full rounded-[2.4rem] bg-background overflow-hidden">
                    <img
                      src={portraitSrc}
                      alt="Syed Shihab Uddin Sultan – Senior Mobile Application Developer"
                      className="w-full h-full object-cover object-top"
                      width={320}
                      height={427}
                    />
                  </div>
                </div>
                {/* Animated shimmer overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 md:px-12 bg-card/30 relative">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-foreground">Professional Summary</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "Highly motivated Senior Mobile App Developer with <span className="text-foreground font-semibold">4.5+ years of experience</span> in full-stack cross-platform and native development (Flutter, Kotlin, Swift). Proven track record in delivering high-security EKYC SDKs and Port Management Systems. Expert in Spring Boot, Apache Kafka, and Docker, with a focus on Cloud Architecture."
              </p>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Technical Expertise</h2>
              <p className="text-muted-foreground">The tools and technologies I use to build scalable solutions.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SKILLS.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-card-border p-6 rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-semibold mb-6 text-foreground">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 px-6 md:px-12 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional Experience</h2>
              <p className="text-muted-foreground">My journey in building enterprise-grade applications.</p>
            </motion.div>

            <div className="relative border-l border-border/50 ml-4 md:ml-8 space-y-12 pb-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-2 shadow-[0_0_15px_rgba(var(--primary),0.5)] border-2 border-background" />
                  
                  <div className="bg-card border border-card-border p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium mt-1">{exp.company}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground whitespace-nowrap h-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/8 via-background to-background" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Real-world systems I have architected and built.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                  data-testid={`card-project-${index}`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Subtle gradient icon area */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity mb-4`} />

                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-2">{project.subtitle}</p>
                    <h3 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{project.description}</p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-24 px-6 md:px-12 relative">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Education & Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><span className="text-primary">#</span> Education</h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-card/50 backdrop-blur-sm border border-card-border p-6 rounded-xl"
                    >
                      <h4 className="font-bold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-primary text-sm mb-2">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><span className="text-accent">#</span> Certifications</h3>
                <div className="space-y-6">
                  {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-card/50 backdrop-blur-sm border border-card-border p-6 rounded-xl flex items-center justify-between group cursor-default"
                    >
                      <span className="font-medium text-foreground">{cert}</span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <section id="contact" className="pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">Let's Build Something Great</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <a href="mailto:shihab9rasim@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:text-primary transition-all w-full md:w-auto justify-center">
                  <Mail className="w-5 h-5" /> shihab9rasim@gmail.com
                </a>
                <a href="tel:01897834521" className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:text-primary transition-all w-full md:w-auto justify-center">
                  <Phone className="w-5 h-5" /> +880 1897834521
                </a>
              </div>
              
              <div className="flex justify-center gap-6">
                <a href="https://linkedin.com/in/shihabrasim" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Shihab09" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                  <SiGithub size={24} />
                </a>
              </div>
            </motion.div>
            
            <div className="mt-16 pt-8 border-t border-border/50 text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} Syed Shihab Uddin Sultan. All rights reserved.</p>
              <p>Built with React & Tailwind CSS.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
