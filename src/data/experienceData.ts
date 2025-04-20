export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Mechanical Engineer",
    company: "Sraco Saudi Arabia",
    location: "Dammam, Saudi Arabia",
    period: "Feb 2024 - Present",
    employmentType: "Full-time",
    responsibilities: [
      "Lead a team of 5 engineers in the design and implementation of complex mechanical systems for industrial facilities",
      "Conduct detailed mechanical design reviews and provide technical guidance to ensure compliance with international standards",
      "Develop comprehensive technical specifications for equipment procurement and installation",
      "Coordinate with cross-functional teams including electrical, civil, and automation engineers to ensure integrated system designs",
      "Perform site inspections and technical evaluations to resolve field engineering issues",
      "Prepare and present technical reports and recommendations to management and clients",
    ],
    technologies: [
      "AutoCAD",
      "SolidWorks",
      "ANSYS",
      "ASME Standards",
      "ISO 9001",
      "Project Management",
    ],
  },
  {
    title: "Engineer Intern",
    company: "Sraco Saudi Arabia",
    location: "Dammam, Saudi Arabia",
    period: "Jul 2023 - Jul 2023",
    employmentType: "Full-time",
    responsibilities: [
      "Created detailed mechanical designs and technical drawings for industrial equipment and systems",
      "Performed engineering calculations and analysis to ensure designs met performance and safety requirements",
      "Developed 3D models and assembly drawings for manufacturing and installation teams",
      "Collaborated with procurement to select appropriate materials and components based on engineering requirements",
      "Conducted field visits to gather technical information and validate design implementations",
      "Prepared technical documentation including design reports, operating manuals, and maintenance procedures",
    ],
    technologies: [
      "AutoCAD",
      "SolidWorks",
      "ProE",
      "FEA",
      "GD&T",
      "Technical Documentation",
    ],
  },
  // {
  //   title: "Mechanical Engineer",
  //   company: "Al-Rashid Trading & Contracting",
  //   location: "Riyadh, Saudi Arabia",
  //   period: "Jun 2015 - Feb 2017",
  //   employmentType: "Full-time",
  //   responsibilities: [
  //     "Designed mechanical components and systems for construction and infrastructure projects",
  //     "Performed load calculations and stress analysis for structural elements",
  //     "Created technical drawings and specifications for fabrication and installation",
  //     "Collaborated with project managers to ensure timely delivery of mechanical components",
  //     "Conducted quality inspections of mechanical installations and equipment",
  //     "Provided technical support to installation teams during construction phases",
  //   ],
  //   technologies: [
  //     "AutoCAD",
  //     "HVAC Design",
  //     "Pump Systems",
  //     "Mechanical Fabrication",
  //     "Quality Control",
  //   ],
  // },
  // {
  //   title: "Junior Mechanical Engineer",
  //   company: "United Engineering Services",
  //   location: "Cairo, Egypt",
  //   period: "Aug 2013 - May 2015",
  //   employmentType: "Full-time",
  //   responsibilities: [
  //     "Assisted senior engineers in designing mechanical systems for commercial buildings",
  //     "Prepared technical drawings and specifications under supervision",
  //     "Participated in site surveys and data collection for new projects",
  //     "Conducted basic engineering calculations for equipment sizing",
  //     "Supported the preparation of technical documentation and reports",
  //     "Helped coordinate with contractors and suppliers for project implementation",
  //   ],
  //   technologies: [
  //     "AutoCAD",
  //     "Basic 3D Modeling",
  //     "Engineering Calculations",
  //     "Technical Documentation",
  //   ],
  // },
];
