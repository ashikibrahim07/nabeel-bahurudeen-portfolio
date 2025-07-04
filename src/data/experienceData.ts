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
  ];
