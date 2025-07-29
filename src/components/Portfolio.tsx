import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Mail, Phone, ExternalLink, Calendar, MapPin, Award, Code, Briefcase, GraduationCap, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/ContactForm';
import portfolioImg from '@/assets/portfolio-img.jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: ExternalLink },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const skills = {
    'Languages': ['Python', 'Java', 'HTML', 'CSS', 'SQL'],
    'Frameworks': ['Flask', 'FastAPI', 'Django', 'Bootstrap', 'Jinja2', 'SQLAlchemy'],
    'Libraries': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'TextBlob', 'NLTK', 'BeautifulSoup', 'Scrapy', 'Selenium', 'OpenCV'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'PyCharm'],
    'Platforms': ['Linux', 'Windows'],
    'Concepts': ['Object-Oriented Programming (OOP)'],
    'Interests': ['Web Development', 'Data Analysis', 'NLP & LLMs', 'Automation', 'DSA']
  };

  const projects = [
    {
      title: 'Reddit Analyzer',
      period: 'Mar 2025 – May 2025',
      description: 'A Flask-based Reddit web app for subreddit sentiment, post-thread analysis, and meme browsing.',
      tech: ['Flask', 'PRAW', 'TextBlob', 'Chart.js', 'Bootstrap'],
      features: [
        'Subreddit analytics dashboard',
        'Sentiment analysis of posts/comments',
        'Thread visualizer with collapsible UI',
        'Meme fetcher with dynamic updates'
      ],
      color: 'bg-red-500'
    },
    {
      title: 'LinkedIn Network Analysis',
      period: 'Feb 2025 – Mar 2025',
      description: 'Graph theory–based analysis of university student LinkedIn connections.',
      tech: ['Python', 'NetworkX', 'Matplotlib', 'Pandas'],
      features: [
        'Graph visualization of student network',
        'Random walks, clustering stats, degrees',
        'Cleaned and parsed LinkedIn JSON data'
      ],
      color: 'bg-green-500',
      link: 'PDF Report Link'
    },
    {
      title: 'StackOverflow Tag Analyzer',
      period: 'Jan 2025',
      description: 'A Flask REST API that serves top 10 Stack Overflow tags by year.',
      tech: ['Flask', 'Pandas', 'BeautifulSoup', 'Stack Overflow API'],
      features: [
        'Tag trend analysis from 2023–2025',
        'JSON REST endpoint',
        'CSV + API scraping and enrichment'
      ],
      color: 'bg-blue-500',
      liveDemo: 'stackoverflow-tags.netlify.app'
    },
    {
      title: 'Portfolio Project',
      period: 'Current',
      description: 'Professional portfolio website with contact form integration using EmailJS.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
      features: [
        'Responsive design with dark/light mode',
        'Smooth scrolling navigation',
        'Contact form with email integration',
        'Modern animations and effects'
      ],
      color: 'bg-purple-500'
    }
  ];

  const certifications = [
    {
      title: '100 Days of Code: Python Pro Bootcamp',
      issuer: 'Angela Yu (Udemy)',
      description: 'Web scraping, APIs, Flask apps, GUI, OOP, automation',
      verified: true
    },
    {
      title: 'Data Analytics Virtual Internship',
      issuer: 'Deloitte Australia',
      verified: true
    },
    {
      title: 'TATA Data Analytics Certification',
      issuer: 'TATA',
      verified: true
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hidden Links for SEO/Indexing */}
      <div style={{ display: 'none' }}>
        <a href="https://www.linkedin.com/in/ujjval-baijal/">Hidden LinkedIn</a>
        <a href="https://github.com/Ujjval-1">Hidden GitHub</a>
        <a href="https://drive.google.com/file/d/1Pn6NtpMXIADtOgj3NbM4i30wHDBXbKza/view">Hidden Report</a>
        <a href="https://stackoverflow-tagstrends-ujjvalbaijal.netlify.app/">Hidden Live Project</a>
        <a href="https://www.udemy.com/course/100-days-of-code/">Python Bootcamp</a>
        <a href="https://www.cloudskillsboost.google/paths/118">Google AI Course</a>
        <a href="https://drive.google.com/file/d/1v_8lvRhIo-xkCsDdh7oTOoVdR267giZf/view?usp=sharing">Deloitte Data Analytics Certificate</a>
        <a href="https://drive.google.com/file/d/1VxfgyA2G-0QyzqOK5jtAVZOmIhO1T6It/view?usp=sharing">TATA Analytics</a>
        <a href="https://drive.google.com/file/d/1BETqMxP4SM_Orn-475kMDcQk55vPKzjq/view?usp=drive_link?usp=sharing">Introduction to Gen AI by Google Cloud</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl gradient-text">Ujjval Baijal</div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50 ${
                    activeSection === id ? 'text-primary bg-accent/30' : 'text-muted-foreground'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              
              <Button variant="default" className="hidden sm:flex items-center space-x-2">
                <Download size={16} />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="section-padding pt-32 bg-gradient-hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Ujjval Baijal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Computer Science Student passionate about Web Development, Data Analysis, and AI
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="default" size="lg" className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/Ujjvalbaijal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ujjvalbaijal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone size={20} />
                  <span>+91-8267810857</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-strong hover-lift">
                  <img
                    src={portfolioImg}
                    alt="Ujjval Baijal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                  <Code size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">My academic journey</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                degree: 'B.Tech in Computer Science',
                institution: 'Sitare University, Indore',
                period: 'Aug 2024 – Present',
                grade: 'CGPA: 7.63',
                icon: GraduationCap
              },
              {
                degree: 'Senior Secondary (Class XII)',
                institution: 'Baba International School, Ghiror',
                period: 'March 2024',
                grade: 'Percentage: 91.4%',
                icon: GraduationCap
              },
              {
                degree: 'Secondary School (Class X)',
                institution: 'Baba International School, Ghiror',
                period: 'March 2022',
                grade: 'Percentage: 94%',
                icon: GraduationCap
              }
            ].map((edu, index) => (
              <Card key={index} className="fade-in hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <edu.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <Badge variant="secondary">{edu.grade}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground text-lg">Professional journey and internships</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'Summer AI Intern',
                company: 'Mirai School of Technology',
                period: 'June 2025 – August 2025',
                type: 'Internship'
              },
              {
                title: 'Virtual AI & Cloud Intern',
                company: 'IBM SkillsBuild',
                period: 'July 2025 – August 2025',
                type: 'Virtual Internship'
              }
            ].map((exp, index) => (
              <Card key={index} className="fade-in hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="fade-in hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="fade-in hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-3 h-3 rounded-full ${project.color} mt-2`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {(project.link || project.liveDemo) && (
                      <div className="flex space-x-4">
                        {project.link && (
                          <Button variant="outline" size="sm" className="flex items-center space-x-2">
                            <ExternalLink size={16} />
                            <span>View Report</span>
                          </Button>
                        )}
                        {project.liveDemo && (
                          <Button variant="default" size="sm" className="flex items-center space-x-2">
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground text-lg">Professional certifications and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="fade-in hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      )}
                      <div className="flex items-center space-x-2">
                        <Badge variant="default" className="text-xs">
                          ✅ Verified Certificate
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement */}
          <div className="mt-12 fade-in">
            <Card className="bg-gradient-primary text-white hover-lift">
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-xl mb-2">Scholarship Achievement</h3>
                <p className="text-white/90">
                  Received 100% Scholarship for B.Tech in Computer Science at Sitare University
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Let's connect and work together</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6">Let's discuss your project</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ujjwalbaijal912@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91-8267810857</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Indore, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Github size={20} />
                  <span>GitHub</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>

            <div className="fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="section-container">
          <div className="text-center">
            <h3 className="font-bold text-xl gradient-text mb-4">Ujjval Baijal</h3>
            <p className="text-muted-foreground mb-6">
              Computer Science Student • Web Developer • Data Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Ujjvalbaijal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ujjvalbaijal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ujjwalbaijal912@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                © 2025 Ujjval Baijal. Built with React & TypeScript.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;