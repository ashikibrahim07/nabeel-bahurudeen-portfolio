import { Activity, Cpu, Database, Lightbulb, Ruler, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface Tool {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  tools?: Tool[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Mechanical Design",
    skills: [
      { name: "CAD Modeling", level: 95 },
      { name: "3D Design", level: 90 },
      { name: "Technical Drawing", level: 95 },
      { name: "GD&T", level: 85 },
      { name: "Design for Manufacturing", level: 80 }
    ],
    tools: [
      { name: "AutoCAD", icon: <Ruler size={24} /> },
      { name: "SolidWorks", icon: <Cpu size={24} /> },
      { name: "Fusion 360", icon: <Activity size={24} /> },
      { name: "Inventor", icon: <Lightbulb size={24} /> }
    ]
  },
  {
    category: "Engineering Analysis",
    skills: [
      { name: "Structural Analysis", level: 85 },
      { name: "Thermal Analysis", level: 75 },
      { name: "Finite Element Analysis", level: 80 },
      { name: "Fluid Systems", level: 70 },
      { name: "Materials Selection", level: 85 }
    ],
    tools: [
      { name: "ANSYS", icon: <Activity size={24} /> },
      { name: "MATLAB", icon: <Database size={24} /> },
      { name: "Excel Advanced", icon: <Database size={24} /> }
    ]
  },
  {
    category: "Project Management",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Project Planning", level: 85 },
      { name: "Budget Management", level: 80 },
      { name: "Risk Assessment", level: 85 },
      { name: "Quality Control", level: 90 }
    ],
    tools: [
      { name: "MS Project", icon: <Users size={24} /> },
      { name: "Primavera P6", icon: <Users size={24} /> }
    ]
  },
  {
    category: "Technical Standards",
    skills: [
      { name: "ASME Standards", level: 90 },
      { name: "ISO 9001", level: 85 },
      { name: "API Standards", level: 80 },
      { name: "ASTM Standards", level: 75 },
      { name: "Saudi Building Code", level: 85 }
    ]
  },
  {
    category: "Manufacturing & Fabrication",
    skills: [
      { name: "Machining Processes", level: 80 },
      { name: "Welding & Joining", level: 75 },
      { name: "Production Planning", level: 85 },
      { name: "Tooling Design", level: 70 },
      { name: "Prototyping", level: 80 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Technical Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Cross-cultural Collaboration", level: 85 },
      { name: "Client Management", level: 80 },
      { name: "Mentoring", level: 85 }
    ]
  }
];