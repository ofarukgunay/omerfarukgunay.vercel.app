import React, { useState, useEffect } from "react";
import { sendMessage } from "../hooks/useApi";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Moon,
  Sun,
  Globe,
  ExternalLink,
  Send,
} from "lucide-react";
import MediumIcon from "./ui/icons"; // Import the Medium icon component
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("about");
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const content = {
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
      },
      hero: {
        name: "Omer Faruk Gunay",
        title:
          "Computer Engineer",
        description:
          "I conduct academic projects and community studies on artificial intelligence and autonomous systems. I aim to transform my technical competencies into concrete value in R&D-focused innovative projects.",
      },
      about: {
        title: "About Me",
        skills: "Skills & Technologies",
        skillsList: [
          "C/C++",
          "Python",
          "OOP Principles",
          "Laravel",
          "Vue.js",
          "MySQL",
          "Linux (Terminal)",
          "Git/GitHub",
          "TensorFlow",
          "PyTorch",
          "OpenCV",
          "Arduino",
          "ESP32",
          "Scikit-learn",
        ],
      },
      experience: {
        title: "Experience",
        work: "Work Experience",
        other: "Other Activities",
        items: [
          {
            title: "Software Developer",
            company: "Yetgen, Remote",
            date: "Aug 2024 - Present",
            description: "I create solutions with automations in the software development team of the Yetkin Gençler platform."
          },
          {
            title: "Intern Engineer",
            company: "Kartepe Municipality, Kocaeli",
            date: "Jul 2025 - Aug 2025",
            description: "As an intern engineer in the IT department, I dealt with computer hardware, cameras, and printers, and developed a desktop application for service maintenance forms as required by IT needs."
          },
          {
            title: "IT Intern",
            company: "Mehmet Akif Ersoy University, Burdur",
            date: "Nov 2023 - Jun 2024",
            description: "I took part in technical support and hardware processes within the faculty."
          }
        ],
        others: [
          {
            title: "TUBITAK Star Scholar",
            company: "Tubitak, Burdur",
            date: "Sep 2025 - Present",
            description: "I work on the embedded system and web design of the 'Condensed Solar Power Driven Modular Thermoacoustic Cooler: Sustainable and Eco-Friendly Cooling Technology Development' project within the scope of 1001."
          },
          {
            title: "Instructor Mentor Scholar",
            company: "T3 Foundation, Burdur",
            date: "Mar 2024 - Present",
            description: "I was a 'You Are the Future' scholar last term, currently an active 'Instructor Mentor' scholar. I take active roles in Teknofest competitions and mentor students at Deneyap Workshops."
          },
          {
            title: "Community Board Member",
            company: "Teknofest Community, Burdur",
            date: "Sep 2025 - Present",
            description: "I play an active role in the community's event and project planning."
          },
          {
            title: "Volunteer Developer",
            company: "T3 Foundation, Remote",
            date: "Mar 2024 - Present",
            description: "I contribute as a software developer in the T3 AI'LE project."
          }
        ]
      },
      education: {
        title: "Education",
        items: [
          {
            school: "Mehmet Akif Ersoy University, Burdur",
            degree: "Computer Engineering (Bachelor's)",
            date: "2027",
            description: "GPA: 3.50/4.00"
          },
          {
            school: "Bialystok University of Technology, Poland",
            degree: "Computer Science",
            date: "2025",
            description: "Erasmus+ Learning Mobility"
          },
          {
            school: "Mehmet Akif Ersoy University, Burdur",
            degree: "School of Foreign Languages",
            date: "2023",
            description: "Completed B2 level language class. Success Grade: 87/100"
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        subtitle:
          "A collection of my work in AI, robotics, and software development",
        categories: [
          "AI & Machine Learning",
          "Robotics & Embedded Systems",
          "Web & Mobile Development",
          "Game Development",
          "Cybersecurity",
        ],
        items: [
          {
            title: "Digital Dental World",
            description:
              "Digital Dental World is an innovative platform established to digitize the dental ecosystem and bring all stakeholders together under one roof. By integrating clinics, laboratories, digital production, software, and supply into a single secure ecosystem, we bring speed and transparency to the sector.",
            tech: ["Laravel", "Vue.js", "MySQL"],
            category: "Web Development",
            github: "https://github.com/ofarukgunay/digital-dental-world",
          },
          {
            title: "Deep Learning Based Gastroenterology Image Analysis (TUBITAK 2209)",
            description:
              "In this project, 6 different architectures including EfficientNetV2, ResNet50, MobileNetV3 (CNN), ViT, ConvNext, and ResNeSt (Transformer) were trained on the Kvasir-v2 dataset. By comparing the inference times and achievements of the models optimized with Transfer Learning and Data Augmentation, 94% accuracy was achieved. Integration of the best model into the system continues as an R&D project.",
            tech: ["Python", "Deep Learning", "Transfer Learning", "EfficientNetV2", "ViT"],
            category: "AI & Machine Learning",
            github: "https://github.com/ofarukgunay",
          },
          {
            title: "Blue Dreams (2D Platformer Game)",
            description:
              "A 2D platformer game built with Unity, featuring engaging gameplay and stunning visuals.",
            tech: ["Unity", "C#", "Game Development"],
            category: "Game Development",
            github: "https://github.com/ofarukgunay/BlueDreams",
          },
          {
            title: "Hamsi AUV (Autonomous Underwater Vehicle)",
            description:
              "The project aims to enable an autonomous underwater vehicle, designed and built by our team, to independently perform obstacle detection and object recognition tasks underwater using sensors, artificial intelligence, and control systems.",
            tech: ["ROS 2", "Python", "Gazebo", "Robotics"],
            category: "Robotics & Embedded Systems",
            github: "https://github.com/ofarukgunay/UnderwaterSystems",
          },
          {
            title: "Beyno App (AI Assistant in Education)",
            description:
              "Interactive learning mobile app powered by large language models for personalized education.",
            tech: ["FastAPI", "API", "Python", "Swift"],
            category: "AI & Machine Learning",
            github: "https://github.com/AIJAM-GROUP42",
          },
          {
            title: "Fullstack Portfolio Website",
            description:
              "A fullstack portfolio web application showcasing personal projects, certificates, and contact information, built with modern web technologies.",
            tech: ["React", "CSS", "FastAPI", "JavaScript"],
            category: "Web Development",
            github: "https://github.com/ofarukgunay/PortfolioWebsite",
          },
        ],
      },
      certificates: {
        title: "Courses & Certificates",
        subtitle:
          "Professional development and continuous learning achievements",
        description:
          "As a graduate of the Google Games and Apps Academy and a scholar of the Artificial Intelligence and Technology Academy, I have received extensive training in the Siber Vatan program and am constantly expanding my knowledge of emerging technologies and cybersecurity practices.",
        viewCertificates: "View All Certificates",
        verificationLink:
          "https://verified.sertifier.com/tr/profile/omerfarukgunay1155750/",
        achievements: [
          "2nd Term Game and Application Academy Graduate\n4th Term AI and Technology Academy Graduate\n5th Term AI and Technology Academy Tutor",
          "Siber Vatan Program Graduate",
          "Yetkin Gençler Program Graduate and Active Software Team Member",
        ],
      },
      contact: {
        title: "Get In Touch",
        subtitle:
          "Feel free to reach out for collaboration opportunities or just to say hello!",
        email: "o.farukgny@gmail.com",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          namePlaceholder: "Your Name",
          emailPlaceholder: "your.email@example.com",
          messagePlaceholder: "Your message...",
        },
      },
    },
    tr: {
      nav: {
        about: "Hakkımda",
        experience: "Deneyim",
        education: "Eğitim",
        projects: "Projeler",
        certificates: "Sertifikalar",
        contact: "İletişim",
      },
      hero: {
        name: "Ömer Faruk Günay",
        title:
          "Bilgisayar Mühendisi",
        description:
          "Yapay zeka ve otonom sistemler üzerine akademik projeler ve topluluk çalışmaları yürütmekteyim. Teknik yetkinliklerimi, Ar-Ge odaklı yenilikçi projelerde somut bir değere dönüştürmeyi hedefliyorum.",
      },
      about: {
        title: "Hakkımda",
        skills: "Yetenekler & Teknolojiler",
        skillsList: [
          "C/C++",
          "Python",
          "OOP Prensipleri",
          "Laravel",
          "Vue.js",
          "MySQL",
          "Linux (Terminal)",
          "Git/GitHub",
          "TensorFlow",
          "PyTorch",
          "OpenCV",
          "Arduino",
          "ESP32",
          "Scikit-learn",
        ],
      },
      experience: {
        title: "Deneyim",
        work: "İş Deneyimi",
        other: "Diğer Faaliyetler",
        items: [
          {
            title: "Yazılım Geliştirici",
            company: "Yetgen, Uzaktan",
            date: "Ağu 2024 - Devam Ediyor",
            description: "Yetkin Gençler platformunun yazılım geliştirme ekibinde otomasyonlar ile çözüm üretiyorum."
          },
          {
            title: "Stajyer Mühendis",
            company: "Kartepe Belediyesi, Kocaeli",
            date: "Tem 2025 - Ağu 2025",
            description: "Bilgi işlem bölümünde stajyer mühendis olarak bilgisayar donanımları, kameralar ve yazıcı gibi araçlar ile ilgilendim ve bilgi işlem gereklilikleri dahilinde servis bakım formu masaüstü uygulaması projesini tamamladım."
          },
          {
            title: "Bilgi İşlem Stajyeri",
            company: "Mehmet Akif Ersoy Üniversitesi, Burdur",
            date: "Kas 2023 - Haz 2024",
            description: "Fakülte bünyesinde teknik destek ve donanım süreçlerinde görev aldım."
          }
        ],
        others: [
          {
            title: "Tübitak Star Bursiyeri",
            company: "Tübitak, Burdur",
            date: "Eyl 2025 - Devam Ediyor",
            description: "1001 kapsamında 'Yoğunlaştırılmış Güneş Işınımı Gücü ile Çalışan Modüler Termoakustik Soğutucu: Sürdürülebilir ve Çevre Dostu Bir Soğutma Teknolojisi Geliştirme' projesinin gömülü sistem ve web tasarımında görev alıyorum."
          },
          {
            title: "Eğitmen Mentör Bursiyeri",
            company: "T3 Vakfı, Burdur",
            date: "Mar 2024 - Devam Ediyor",
            description: "Önceki dönem 'Sen Geleceksin' şuan ise aktif 'Eğitmen Mentör' bursiyeriyim. Teknofest yarışmalarında aktif görev aldım ve Deneyap Atölyeleri'nde öğrencilere mentorluk yapıyorum."
          },
          {
            title: "Topluluk Yönetim Kurulu Üyesi",
            company: "Teknofest Topluluğu, Burdur",
            date: "Eyl 2025 - Devam Ediyor",
            description: "Topluluğun etkinlik ve proje planlamalarında aktif rol alıyorum."
          },
          {
            title: "Gönüllü Geliştirici",
            company: "T3 Vakfı, Uzaktan",
            date: "Mar 2024 - Devam Ediyor",
            description: "T3 AI'LE projesinde yazılım geliştirici olarak katkı sağlıyorum."
          }
        ]
      },
      education: {
        title: "Eğitim",
        items: [
          {
            school: "Mehmet Akif Ersoy Üniversitesi, Burdur",
            degree: "Bilgisayar Mühendisliği (Lisans)",
            date: "2027",
            description: "GANO: 3.50/ 4.00"
          },
          {
            school: "Bialystok Teknoloji Üniversitesi, Polonya",
            degree: "Bilgisayar Bilimi",
            date: "2025",
            description: "Erasmus+ Öğrenim Hareketliliği"
          },
          {
            school: "Mehmet Akif Ersoy Üniversitesi, Burdur",
            degree: "Yabancı Diller Yüksekokulu",
            date: "2023",
            description: "B2 seviye dil sınıfını tamamladım. Başarı Notu: 87/100"
          }
        ]
      },
      projects: {
        title: "Öne Çıkan Projeler",
        subtitle:
          "AI, robotik ve yazılım geliştirme alanındaki çalışmalarımdan bir koleksiyon",
        categories: [
          "AI & Makine Öğrenmesi",
          "Robotik & Gömülü Sistemler",
          "Web & Mobil Geliştirme",
          "Siber Güvenlik",
          "Oyun Geliştirme",
        ],
        items: [
          {
            title: "Digital Dental World (Dijital Diş Dünyası)",
            description:
              "Dijital Diş Dünyası, diş hekimliği ekosistemini dijitalleştirmek ve tüm paydaşları tek bir çatı altında buluşturmak amacıyla kurulmuş yenilikçi bir platformdur. Klinikleri, laboratuvarları, dijital üretimi, yazılımı ve tedariki tek bir güvenli ekosistemde birleştirerek sektöre hız ve şeffaflık katıyoruz.",
            tech: ["Laravel", "Vue.js", "MySQL"],
            category: "Web Geliştirme",
            github: "https://github.com/ofarukgunay/digital-dental-world",
          },
          {
            title: "Derin Öğrenme Tabanlı Gastroenteroloji Görüntü Analizi (TÜBİTAK 2209)",
            description:
              "Kvasir-v2 veri seti üzerinde; EfficientNetV2, ResNet50, MobileNetV3 (CNN) ve ViT, ConvNext, ResNeSt (Transformer) olmak üzere 6 farklı mimari eğitildi. Transfer Learning ve Data Augmentation ile optimize edilen modellerin Inference Time ve başarımları kıyaslanarak %94 doğruluk elde edildi. En iyi modelin sisteme entegrasyonu, Ar-Ge projesi olarak sürdürülmektedir.",
            tech: ["Python", "Derin Öğrenme", "Transfer Learning", "EfficientNetV2", "ViT"],
            category: "AI & Makine Öğrenmesi",
            github: "https://github.com/ofarukgunay",
          },
          {
            title: "Blue Dreams (2D Platformer Oyunu)",
            description:
              "Unity ile geliştirilen, etkileyici görseller ve sürükleyici oyun deneyimi sunan bir 2D platformer oyunu.",
            tech: ["Unity", "C#", "Oyun Geliştirme"],
            category: "Oyun Geliştirme",
            github: "https://github.com/ofarukgunay/BlueDreams",
          },
          {
            title: "Hamsi AUV (Otonom Sualtı Aracı)",
            description:
              "Ekibimiz tarafından tasarlanıp üretilen otonom bir su altı aracının, sensörler, yapay zeka ve kontrol sistemleri ile su altında engel algılama ve nesne tespiti görevlerini bağımsız olarak gerçekleştirmesini amaçlamaktadır.",
            tech: ["ROS 2", "Python", "Gazebo", "Robotics"],
            category: "Robotik & Gömülü Sistemler",
            github: "https://github.com/ofarukgunay/UnderwaterSystems",
          },
          {
            title: "Beyno App (Eğitimde AI Asistanı)",
            description:
              "Kişiselleştirilmiş eğitim için büyük dil modelleriyle güçlendirilmiş interaktif öğrenme mobil uygulaması.",
            tech: ["FastAPI", "LLMs", "Python", "React"],
            category: "AI & Makine Öğrenmesi",
            github: "https://github.com/AIJAM-GROUP42",
          },
          {
            title: "Fullstack Portföy Web Sitesi",
            description:
              "Kişisel projelerimi, sertifikalarımı ve iletişim bilgilerimi sergileyen modern web teknolojileriyle inşa edilmiş bir fullstack portföy web uygulaması.",
            tech: ["React", "CSS", "FastAPI", "JavaScript"],
            category: "Web Geliştirme",
            github: "https://github.com/ofarukgunay/PortfolioWebsite",
          },
        ],
      },
      certificates: {
        title: "Kurslar & Sertifikalar",
        subtitle: "Mesleki gelişim ve sürekli öğrenme başarıları",
        description:
          "Google Oyun ve Uygulama Akademisi mezunu ve Yapay Zeka ve Teknoloji Akademisi bursiyeri olarak, Siber Vatan programında kapsamlı eğitim aldım ve sürekli olarak gelişen teknolojiler ve siber güvenlik uygulamaları konusundaki bilgimi genişletiyorum.",
        viewCertificates: "Tüm Sertifikaları Görüntüle",
        verificationLink:
          "https://verified.sertifier.com/tr/profile/omerfarukgunay1155750/",
        achievements: [
          "2. Dönem Oyun ve Uygulama Akademisi Mezunu\n4. Dönem Yapay Zeka ve Teknoloji Akademisi Mezunu\n5. Dönem Yapay Zeka ve Teknoloji Akademisi Tutoru",
          "Siber Vatan Programı Mezunu",
          "Yetkin Gençler Programı Mezunu ve Aktif Yazılım Ekibi Üyesi",
        ],
      },
      contact: {
        title: "İletişime Geçin",
        subtitle:
          "İş birliği fırsatları için veya sadece merhaba demek için çekinmeden ulaşın!",
        email: "o.farukgny@gmail.com",
        form: {
          name: "Ad",
          email: "E-posta",
          message: "Mesaj",
          send: "Mesaj Gönder",
          namePlaceholder: "Adınız",
          emailPlaceholder: "ornek@email.com",
          messagePlaceholder: "Mesajınız...",
        },
      },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ofarukgunay/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/ofarukgunay",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/omerr_gny",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
    {
      name: "Medium",
      url: "https://medium.com/@omerfarukgunay",
      icon: MediumIcon,
      color: "hover:text-green-600",
    },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (data) => {
    const result = await sendMessage(data, language); // API çağrısı
    if (result) {
      reset(); // Formu temizle
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "education", "projects", "certificates", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
              ÖFG
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Object.entries(currentContent.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-cyan-400 ${activeSection === key
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {value}
                </button>
              ))}
            </nav>

            {/* Theme & Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/images/Roma.jpg"
                  alt={currentContent.hero.name}
                  className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 animate-fade-in"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-400/20"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              {currentContent.hero.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-cyan-400 mb-8 animate-fade-in-delay">
              {currentContent.hero.title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
              {currentContent.hero.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-200`}
                >
                  {social.icon === "medium" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1043.63 592.71"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M588.67 296.35c0 163.74-131.61 296.35-294.33 296.35S0 460.09 0 296.35 131.61 0 294.33 0s294.34 132.61 294.34 296.35zM711.56 296.35c0 152.74-68.28 276.35-152.51 276.35s-152.5-123.61-152.5-276.35S474.82 20 559.05 20s152.51 123.61 152.51 276.35zM1033.63 296.35c0 146.2-30.34 264.35-67.73 264.35s-67.73-118.15-67.73-264.35S928.52 32 965.9 32s67.73 118.15 67.73 264.35z" />
                    </svg>
                  ) : (
                    <social.icon className="h-6 w-6" />
                  )}
                </a>
              ))}
            </div>

            {/* Skills */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {currentContent.about.skills}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {currentContent.about.skillsList.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-cyan-900 text-blue-800 dark:text-cyan-100 hover:bg-blue-200 dark:hover:bg-cyan-800 transition-colors transform hover:scale-105 duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.experience.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="bg-blue-100 dark:bg-cyan-900 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {currentContent.experience.work}
              </h3>
              <div className="space-y-8">
                {currentContent.experience.items.map((item, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-900 border-l-4 border-l-blue-600 dark:border-l-cyan-400 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-blue-600 dark:text-cyan-400 font-medium">
                        {item.company} | {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="bg-blue-100 dark:bg-cyan-900 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                {currentContent.experience.other}
              </h3>
              <div className="space-y-8">
                {currentContent.experience.others.map((item, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-900 border-l-4 border-l-purple-600 dark:border-l-purple-400 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-purple-600 dark:text-purple-400 font-medium">
                        {item.company} | {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.education.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.education.items.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900 border-0 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.school}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400 font-medium mb-2">
                    {item.degree}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {item.date}
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.projects.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {currentContent.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.projects.items.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-0 shadow-lg h-full flex flex-col"
              >
                <CardHeader className="flex-grow">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.certificates.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {currentContent.certificates.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentContent.certificates.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.certificates.achievements.map(
              (achievement, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900 border-0 shadow-lg h-full flex flex-col"
                >
                  <CardContent className="p-6 flex-grow flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-cyan-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-600 dark:text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-medium whitespace-pre-line leading-relaxed">
                      {achievement}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className="text-center">
            <a
              href={currentContent.certificates.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {currentContent.certificates.viewCertificates}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {currentContent.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-cyan-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href={`mailto:${currentContent.contact.email}`}
                    className="text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    {currentContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-200`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  {currentContent.contact.form.send}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.name}
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder={currentContent.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.email}
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      type="email"
                      placeholder={currentContent.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Please enter a valid email
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {currentContent.contact.form.message}
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows="4"
                      placeholder={
                        currentContent.contact.form.messagePlaceholder
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {currentContent.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 {currentContent.hero.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
