"use client";

import { useState } from "react";

export default function Page() {
  const [activeProject, setActiveProject] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const flagshipProjects = [
    {
      name: "Imam Khomeini International Airport",
      year: "2004",
      location: "Tehran",
      description: "Iran's largest international gateway, spanning 13,500 hectares with capacity for 30 million passengers annually.",
      category: "Infrastructure",
    },
    {
      name: "Karun-4 Dam",
      year: "2011",
      location: "Chaharmahal and Bakhtiari",
      description: "230-meter high arch dam with 1,000 MW hydroelectric capacity, one of the tallest dams in Iran.",
      category: "Dam & Hydropower",
    },
    {
      name: "Azadi Stadium Renovation",
      year: "1998-2003",
      location: "Tehran",
      description: "Complete modernization of West Asia's largest stadium, home to 100,000 capacity and FIFA-standard facilities.",
      category: "Sports Complex",
    },
    {
      name: "Naein Dam",
      year: "2007",
      location: "Isfahan Province",
      description: "Critical water resource infrastructure providing irrigation for 15,000 hectares of agricultural land.",
      category: "Dam & Hydropower",
    },
    {
      name: "Ghadir Expressway",
      year: "2015",
      location: "Tehran",
      description: "45-kilometer urban expressway connecting western Tehran with advanced interchanges and tunnels.",
      category: "Infrastructure",
    },
    {
      name: "Samen Al-Hojaj Complex",
      year: "2009",
      location: "Mashhad",
      description: "Multi-purpose complex serving millions of pilgrims with accommodation, retail, and transit facilities.",
      category: "Commercial",
    },
  ];

  const expertiseSectors = [
    {
      title: "Dam & Hydropower",
      icon: "🏔️",
      projects: "27+ Major Dams",
      description: "Specialists in large-scale water resource management and renewable energy generation across diverse terrains.",
    },
    {
      title: "Transportation Infrastructure",
      icon: "🛣️",
      projects: "1,200+ km Roads",
      description: "Highways, expressways, bridges, tunnels, and interchanges connecting cities and regions nationwide.",
    },
    {
      title: "Aviation & Airports",
      icon: "✈️",
      projects: "5 International Airports",
      description: "Complete airport design, construction, and expansion including terminals, runways, and support facilities.",
    },
    {
      title: "Sports & Recreation",
      icon: "🏟️",
      projects: "12 Major Stadiums",
      description: "FIFA and Olympic-standard sports complexes, training facilities, and multi-purpose arenas.",
    },
    {
      title: "Urban Development",
      icon: "🏙️",
      projects: "250+ Buildings",
      description: "Mixed-use complexes, residential towers, commercial centers, and institutional facilities.",
    },
    {
      title: "Industrial Plants",
      icon: "🏭",
      projects: "40+ Facilities",
      description: "Petrochemical plants, refineries, power stations, and heavy industrial infrastructure.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Hossein Moshtagh",
      title: "Chairman & Founder",
      tenure: "Since 1982",
      background: "Civil Engineering PhD, Tehran University. Pioneer in large-scale infrastructure development.",
    },
    {
      name: "Eng. Reza Sadeghian",
      title: "Chief Executive Officer",
      tenure: "Since 2008",
      background: "Led successful completion of 15+ dam projects. MSc Structural Engineering.",
    },
    {
      name: "Eng. Maryam Khalili",
      title: "Director of Operations",
      tenure: "Since 2012",
      background: "Oversees nationwide project portfolio. Expert in project delivery and quality control.",
    },
    {
      name: "Dr. Ahmad Bakhtiari",
      title: "Chief Technical Officer",
      tenure: "Since 2010",
      background: "30+ years in geotechnical engineering. Leads innovation and R&D initiatives.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-lime-400 flex items-center justify-center text-neutral-950 font-bold text-2xl">
                M
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">Moshiran</div>
                <div className="text-xs text-neutral-400">Building Iran Since 1982</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-neutral-300 hover:text-lime-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-neutral-300 hover:text-lime-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#expertise" className="text-neutral-300 hover:text-lime-400 transition-colors duration-300">
                Expertise
              </a>
              <a href="#leadership" className="text-neutral-300 hover:text-lime-400 transition-colors duration-300">
                Leadership
              </a>
              <a href="#contact" className="text-neutral-300 hover:text-lime-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-lime-400/10 border border-lime-400/30 rounded-full">
              <span className="text-lime-400 font-semibold">EST. 1982 • 42 YEARS OF EXCELLENCE</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building the Nation's
              <span className="block text-lime-400 mt-2">Most Ambitious Projects</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              From international airports to massive hydroelectric dams, Moshiran Construction has shaped Iran's infrastructure landscape for over four decades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-lime-400 mb-2">350+</div>
              <div className="text-neutral-400">Major Projects</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-lime-400 mb-2">27</div>
              <div className="text-neutral-400">Dams Built</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-lime-400 mb-2">42</div>
              <div className="text-neutral-400">Years Experience</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-lime-400 mb-2">8,500+</div>
              <div className="text-neutral-400">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Legacy Section */}
      <section id="about" className="py-20 sm:py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-sm text-lime-400 font-semibold">
                OUR LEGACY
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Four Decades of
                <span className="block text-lime-400">Engineering Excellence</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                Founded in 1982 by Dr. Hossein Moshtagh, Moshiran Construction Company has grown from a regional contractor to Iran's most trusted name in large-scale infrastructure development.
              </p>
              <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                Our portfolio spans critical national infrastructure including the Imam Khomeini International Airport, the Karun-4 Dam, major stadiums including the Azadi Stadium renovation, and hundreds of highways, bridges, and industrial facilities that connect and power the nation.
              </p>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                With over 8,500 skilled professionals, state-of-the-art equipment, and an unwavering commitment to quality, safety, and timely delivery, we continue to set the standard for construction excellence across all sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-lime-400">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-lime-400">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Grade 1 Contractor License</span>
                </div>
                <div className="flex items-center space-x-2 text-lime-400">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Environmental Compliance Leader</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-lime-400/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-lime-400 pl-6">
                    <div className="text-sm text-lime-400 font-semibold mb-1">1982</div>
                    <div className="text-lg font-semibold mb-2">Company Founded</div>
                    <div className="text-neutral-400">Dr. Hossein Moshtagh establishes Moshiran in Tehran with focus on civil engineering.</div>
                  </div>
                  <div className="border-l-4 border-lime-400 pl-6">
                    <div className="text-sm text-lime-400 font-semibold mb-1">1990s</div>
                    <div className="text-lg font-semibold mb-2">Dam Specialization</div>
                    <div className="text-neutral-400">Completed first major dam projects, establishing expertise in hydropower infrastructure.</div>
                  </div>
                  <div className="border-l-4 border-lime-400 pl-6">
                    <div className="text-sm text-lime-400 font-semibold mb-1">2004</div>
                    <div className="text-lg font-semibold mb-2">Airport Milestone</div>
                    <div className="text-neutral-400">Delivered Imam Khomeini International Airport, Iran's largest aviation project.</div>
                  </div>
                  <div className="border-l-4 border-lime-400 pl-6">
                    <div className="text-sm text-lime-400 font-semibold mb-1">2011</div>
                    <div className="text-lg font-semibold mb-2">Karun-4 Dam Completion</div>
                    <div className="text-neutral-400">Finished one of Iran's tallest dams at 230 meters with 1,000 MW capacity.</div>
                  </div>
                  <div className="border-l-4 border-lime-400 pl-6">
                    <div className="text-sm text-lime-400 font-semibold mb-1">2024</div>
                    <div className="text-lg font-semibold mb-2">Industry Leader</div>
                    <div className="text-neutral-400">350+ completed projects, recognized as Iran's premier construction company.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section id="projects" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-sm text-lime-400 font-semibold">
              FLAGSHIP PROJECTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Landmark Achievements
              <span className="block text-lime-400">Across the Nation</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              From critical infrastructure to iconic landmarks, our portfolio represents the pinnacle of engineering and construction excellence.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveProject(0)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeProject === 0
                  ? "bg-lime-400 text-neutral-950 font-semibold"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveProject(1)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeProject === 1
                  ? "bg-lime-400 text-neutral-950 font-semibold"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              Dams & Hydropower
            </button>
            <button
              onClick={() => setActiveProject(2)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeProject === 2
                  ? "bg-lime-400 text-neutral-950 font-semibold"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveProject(3)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeProject === 3
                  ? "bg-lime-400 text-neutral-950 font-semibold"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              Sports Complexes
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flagshipProjects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="h-48 bg-gradient-to-br from-lime-400/20 to-neutral-800 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category === "Dam & Hydropower" && "🏔️"}
                    {project.category === "Infrastructure" && "✈️"}
                    {project.category === "Sports Complex" && "🏟️"}
                    {project.category === "Commercial" && "🏙️"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="text-sm text-neutral-500 mb-3 flex items-center">
                    <span className="mr-2">📍</span>
                    {project.location}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block bg-lime-400 text-neutral-950 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-colors duration-300"
            >
              View Complete Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Sectors Section */}
      <section id="expertise" className="py-20 sm:py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-sm text-lime-400 font-semibold">
              EXPERTISE SECTORS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive Construction
              <span className="block text-lime-400">Capabilities</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Multi-sector expertise delivering turnkey solutions for the nation's most complex engineering challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                <div className="text-lime-400 font-semibold mb-4">{sector.projects}</div>
                <p className="text-neutral-400 leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">15,000+</div>
                <div className="text-neutral-400">Skilled Workforce</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">2,500+</div>
                <div className="text-neutral-400">Heavy Equipment Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">98.5%</div>
                <div className="text-neutral-400">On-Time Delivery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section id="leadership" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-sm text-lime-400 font-semibold">
              LEADERSHIP TEAM
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Visionary Leaders
              <span className="block text-lime-400">Driving Excellence</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Decades of combined experience guiding Iran's most ambitious construction projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-lime-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center text-3xl font-bold text-lime-400 flex-shrink-0">
                    {leader.name.split(" ")[1].charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <div className="text-lime-400 font-semibold mb-2">{leader.title}</div>
                    <div className="text-sm text-neutral-500 mb-3">{leader.tenure}</div>
                    <p className="text-neutral-400 leading-relaxed">{leader.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-lime-400/10 to-transparent border border-lime-400/30 rounded-2xl p-8 sm:p-12">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
              <p className="text-lg text-neutral-400 mb-6">
                We're always seeking exceptional engineers, project managers, and construction professionals who share our commitment to excellence and innovation.
              </p>
              <a
                href="#contact"
                className="inline-block bg-lime-400 text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-colors duration-300"
              >
                Explore Careers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 sm:py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-sm text-lime-400 font-semibold">
                GET IN TOUCH
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Let's Build
                <span className="block text-lime-400">Your Vision</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Whether you're planning a major infrastructure project, need expert construction consultation, or want to partner with Iran's leading builder, our team is ready to bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lime-400 text-xl">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Headquarters</div>
                    <div className="text-neutral-400">
                      Moshiran Tower, Vanak Square<br />
                      Tehran, Iran
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lime-400 text-xl">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-neutral-400">+98 21 8888 5000</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lime-400 text-xl">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-neutral-400">info@moshiran.ir</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center flex-shrink-0 text-lime-400 text-xl">
                    ⏰
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <div className="text-neutral-400">
                      Saturday - Wednesday: 8:00 AM - 5:00 PM<br />
                      Thursday: 8:00 AM - 1:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors duration-300"
                    placeholder="Your name"
                  />