export interface Project {
  title: string;
  category: string;
  date: string;
  image: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  results: string;
  technologies: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    title: "Industrial HVAC System Redesign",
    category: "Mechanical Design",
    date: "2022 - 2023",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "Complete redesign of an industrial facility's HVAC system to improve energy efficiency and operational performance.",
    description: "Spearheaded the comprehensive redesign of a 50,000 square foot industrial facility's heating, ventilation, and air conditioning system. The project aimed to address inefficiencies in the existing setup, reduce energy consumption, and improve air quality and temperature regulation throughout the facility.",
    challenges: [
      "Existing system was operating at 65% efficiency with frequent breakdowns",
      "Facility needed to remain operational during the retrofit process",
      "Extreme temperature conditions in Saudi Arabia required specialized design considerations",
      "Integration with existing building management systems posed compatibility challenges"
    ],
    results: "The redesigned HVAC system achieved a 30% reduction in energy consumption while improving temperature consistency throughout the facility. Maintenance requirements were reduced by 40%, and the new system is expected to extend operational life by at least 15 years.",
    technologies: ["AutoCAD", "Revit MEP", "CFD Analysis", "Energy Modeling", "ASHRAE Standards", "BMS Integration"]
  },
  {
    title: "Oil & Gas Pipeline Support System",
    category: "Structural Design",
    date: "2021",
    image: "https://images.pexels.com/photos/17816971/pexels-photo-17816971.jpeg",
    shortDescription: "Designed and engineered specialized support systems for a 25-kilometer high-pressure pipeline installation.",
    description: "Developed custom pipeline support and anchoring systems for a critical 25-kilometer high-pressure oil transport pipeline. The project required innovative solutions to address challenging terrain, extreme temperature variations, and seismic considerations in accordance with international standards.",
    challenges: [
      "Pipeline route traversed varied terrain including desert, rocky outcrops, and road crossings",
      "Temperature range from -5°C to 55°C required accommodation for significant thermal expansion",
      "Region-specific seismic activity necessitated specialized vibration damping",
      "Support systems needed to facilitate maintenance access while ensuring pipeline stability"
    ],
    results: "The support system was successfully implemented across the entire pipeline route, passing all regulatory inspections and pressure tests. The design has demonstrated excellent resistance to environmental factors and maintained structural integrity through multiple seasonal cycles.",
    technologies: ["SolidWorks", "ANSYS", "Finite Element Analysis", "ASME B31.4", "API 5L", "Structural Steel Design"]
  },
  {
    title: "Manufacturing Facility Automation Upgrade",
    category: "Systems Integration",
    date: "2020 - 2021",
    image: "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "Led mechanical aspects of a comprehensive automation upgrade for a plastics manufacturing facility.",
    description: "Directed the mechanical engineering components of a major automation upgrade at a plastics manufacturing facility. The project involved retrofitting existing production lines with advanced robotic systems, redesigning material handling mechanisms, and implementing new quality control stations.",
    challenges: [
      "Integration of new automated systems with legacy production equipment",
      "Minimizing production downtime during implementation",
      "Designing mechanical interfaces between robotic systems and existing machinery",
      "Creating maintenance-friendly systems that local technicians could service",
      "Ensuring all upgrades complied with international safety standards"
    ],
    results: "The automation upgrade increased production throughput by 35%, reduced material waste by 18%, and improved product quality consistency. The system has been in continuous operation for over two years with minimal maintenance issues.",
    technologies: ["AutoCAD", "SolidWorks", "PLC Integration", "Robotics", "ISO/TS 15066", "Conveyor Systems"]
  },
  {
    title: "Water Treatment Plant Mechanical Systems",
    category: "Environmental Engineering",
    date: "2019 - 2020",
    image: "https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "Designed and implemented mechanical systems for a municipal water treatment facility serving 50,000 residents.",
    description: "Engineered the mechanical systems for a new municipal water treatment plant, including pumping stations, filtration systems, and distribution infrastructure. The facility was designed to process 15 million gallons per day while meeting stringent water quality standards.",
    challenges: [
      "Designing for high reliability in a critical infrastructure application",
      "Implementing energy recovery systems to reduce operational costs",
      "Creating redundant systems to ensure continuous operation",
      "Accommodating future capacity expansion within the initial design",
      "Meeting strict environmental regulations for noise and emissions"
    ],
    results: "The completed water treatment plant has operated continuously since commissioning, with mechanical systems performing at 98% uptime. Energy consumption is 22% below projections due to efficient design and recovery systems.",
    technologies: ["Pump Selection & Sizing", "3D Piping Design", "HVAC", "Filtration Systems", "SCADA Integration", "ISO 14001"]
  },
  {
    title: "Custom Material Handling Equipment",
    category: "Machine Design",
    date: "2018",
    image: "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "Designed specialized material handling equipment for a chemical processing facility with unique requirements.",
    description: "Created custom material handling solutions for a chemical processing facility that required specialized equipment to move, measure, and mix caustic materials. The project involved comprehensive design from concept through manufacturing and implementation.",
    challenges: [
      "Materials required specialized containment and precise measurement",
      "Equipment needed to operate in corrosive environments",
      "Operator safety was paramount due to hazardous materials",
      "High precision requirements for material mixing ratios",
      "Integration with existing facility infrastructure and workflows"
    ],
    results: "The custom equipment has been in operation for over four years with no safety incidents. Material handling precision exceeds requirements, resulting in improved product consistency and reduced waste.",
    technologies: ["SolidWorks", "Material Sciences", "Hydraulic Systems", "Safety Systems", "Corrosion Resistance", "Load Testing"]
  },
  {
    title: "Solar Power Plant Mechanical Components",
    category: "Renewable Energy",
    date: "2017 - 2018",
    image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shortDescription: "Engineered tracking systems and structural supports for a 50MW solar power installation.",
    description: "Designed and implemented the mechanical tracking systems and structural supports for a 50-megawatt solar photovoltaic power plant. The project required durable, precise solar tracking mechanisms capable of withstanding harsh desert conditions while maintaining optimal panel orientation.",
    challenges: [
      "Designing for extreme environmental conditions including sandstorms and temperature ranges from 0°C to 55°C",
      "Creating low-maintenance tracking systems for 150,000+ solar panels",
      "Implementing wind resistance strategies to prevent damage during high-wind events",
      "Designing modular, repairable systems to minimize downtime in remote locations",
      "Optimizing material usage to meet budget constraints while maintaining structural integrity"
    ],
    results: "The installed tracking systems have maintained 99.7% operational availability since installation. The structural supports have withstood multiple extreme weather events without failure, and power output consistently exceeds initial projections by 3-5%.",
    technologies: ["Structural Engineering", "Solar Tracking Systems", "Wind Load Analysis", "Material Selection", "Environmental Testing", "IEC 62817"]
  }
];