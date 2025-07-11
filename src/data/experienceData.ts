export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  responsibilities: string[];
  technologies?: string[];
  link?: string;
  isLucasTVS?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Mechanical Engineer",
    company: "SRACO, Saudi Arabia",
    link: "https://sraco.com.sa/",
    location: "Dammam, Saudi Arabia",
    period: "Feb 2024 - Present",
    employmentType: "Full-time",
    responsibilities: [
      "Lead a team of 5 engineers in the design and implementation of complex mechanical systems for industrial facilities.",
      "Conduct detailed mechanical design reviews and provide technical guidance to ensure compliance with international standards.",
      "Develop comprehensive technical specifications for equipment procurement and installation.",
      "Coordinate with cross-functional teams including electrical, civil, and automation engineers to ensure integrated system designs.",
      "Perform site inspections and technical evaluations to resolve field engineering issues.",
      "Prepare and present technical reports and recommendations to management and clients.",
    ],
    technologies: [
      "AutoCAD",
      "Revit MEP",
      "Navisworks (Clash Detection)",
      "HAP (Hourly Analysis Program) – HVAC Load Calculations",
      "Duct Sizer / Pipe Sizer – Sizing tools for HVAC & plumbing",
      "Primavera P6",
      "Oracle SCM",
    ],
  },
  {
    title: "Engineer Intern",
    company: "SRACO, Saudi Arabia",
    link: "https://sraco.com.sa/",
    location: "Dammam, Saudi Arabia",
    period: "Jul 2023 - Jul 2023",
    employmentType: "Internship",
    responsibilities: [
      "Created detailed mechanical designs and technical drawings for industrial equipment and systems.",
      "Performed engineering calculations and analysis to ensure designs met performance and safety requirements.",
      "Developed 3D models and assembly drawings for manufacturing and installation teams.",
      "Collaborated with procurement to select appropriate materials and components based on engineering requirements.",
      "Conducted field visits to gather technical information and validate design implementations.",
      "Prepared technical documentation including design reports, operating manuals, and maintenance procedures.",
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
  {
    title: "Visiting Fellow",
    company: "Imam Abdulrahman Bin Faisal University, Saudi Arabia",
    link: "https://www.iau.edu.sa/en",
    location: "Dammam, Eastern, Saudi Arabia",
    period: "Jun 2023 - Jun 2023",
    employmentType: "Seasonal",
    responsibilities: [
      "HVAC Systems: I gained hands-on experience with air handling units (AHUs), air-cooled and water-cooled chillers, and steam boilers. These systems are essential for regulating temperature and air quality across large academic and medical buildings, ensuring comfort and safety for both students and patients.",
      "Fire Safety Systems: I worked with FM 200 fire suppression systems and fire pumps, learning how these systems protect high-risk areas like server rooms and medical units. The integration of backup diesel generators ensures the functionality of fire systems during power outages.",
      "Plumbing & Water Systems: I observed the operation of booster pumps, expansion tanks, and pump pits, ensuring reliable water distribution across campus. I also gained insight into water treatment processes, including filtration, that maintain high-quality water for various applications.",
      "Building Management Systems (BMS): I explored the BMS room, which controls HVAC, lighting, and security systems. The BMS helps optimize energy use, improving operational efficiency and ensuring environmental comfort.",
      "Power Distribution & Infrastructure: I studied the power distribution panels, substation switchgear, and backup generators that supply critical energy to the campus. These systems are essential for maintaining uninterrupted power across the university’s infrastructure.",
    ],
    technologies: [
      "HVAC Systems",
      "Fire Safety Systems",
      "Plumbing & Water Systems",
      "Building Management Systems (BMS)",
      "Power Distribution & Infrastructure",
    ],
  },
  {
    title: "Internship Trainee",
    isLucasTVS: true,
    company: "Lucas TVS, India",
    link: "https://www.lucas-tvs.com/",
    location: "Chennai, Tamil Nadu, India",
    period: "Jul 2022 - Jul 2022",
    employmentType: "Internship",
    responsibilities: [
      "End-to-End Production: Learned the complete production cycle for starter motors, alternators, and other components, from component fabrication to final assembly.",
      "Manufacturing Techniques: Gained exposure to CNC machining, die casting, and automated assembly processes essential for precision automotive components.",
      "Quality Control & Testing: Assisted in ISO-standard testing such as CMM, hardness testing, and reliability assessments to meet stringent performance criteria.",
      "Heat Treatment & Surface Engineering: Studied induction hardening, case hardening, and tempering to improve the durability and performance of components.",
      "Proving & Reliability Testing: Participated in vibration analysis, thermal cycling, and endurance testing to validate the performance and longevity of products.",
      "Lean Manufacturing: Applied 5S and JIT principles to optimize production processes and minimize waste while ensuring quality.",
      "Sustainability Practices: Explored eco-friendly machining techniques and Lucas TVS's commitment to sustainable manufacturing."
    ],
    technologies: [
      "Leadership",
      "Team Management",
      "Problem Solving",
      "Communication",
      "Time Management",
    ],
  },
  ];
