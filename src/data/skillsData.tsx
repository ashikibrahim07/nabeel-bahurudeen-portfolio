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
    category: "MEP & Mechanical Systems Execution",
    skills: [
      { name: "HVAC System Design & Energy Optimization", level: 90 },
      { name: "Plumbing Systems Execution & Layout", level: 85 },
      { name: "Firefighting Systems Installation & Testing", level: 85 },
      { name: "Testing, Balancing & Commissioning (T&C)", level: 90 },
      { name: "QA/QC Process Implementation (WIR, MIR, ITPs)", level: 90 },
      { name: "Utility Coordination (Drainage, Water, Gas)", level: 85 }
    ],
    tools: [
      { name: "Revit MEP", icon: <Cpu size={24} /> },
      { name: "Carrier HAP", icon: <Lightbulb size={24} /> },
      { name: "Autodesk Plant 3D", icon: <Activity size={24} /> }
    ]
  },
  {
    category: "Project & Construction Management",
    skills: [
      { name: "Site Coordination & Trade Management", level: 90 },
      { name: "Project Planning (Primavera, Gantt)", level: 85 },
      { name: "Quality Control & Work Inspections", level: 90 },
      { name: "Team Leadership & Decision-Making", level: 90 },
      { name: "Budget & Material Resource Management", level: 85 },
      { name: "Risk Assessment & Mitigation", level: 90 },
      { name: "HSE & Risk Management (OSHA / NEBOSH-aligned)", level: 95 }
    ],
    tools: [
      { name: "Primavera P6", icon: <Users size={24} /> },
      { name: "Oracle SCM", icon: <Database size={24} /> },
      { name: "Procore", icon: <Activity size={24} /> },
      { name: "Aconex", icon: <Activity size={24} /> }
    ]
  },
  {
    category: "Mechanical Design & Drafting",
    skills: [
      { name: "AutoCAD 2D/3D", level: 95 },
      { name: "Revit MEP (BIM Modeling)", level: 85 },
      { name: "Carrier HAP Load Calculations", level: 85 },
      { name: "Technical Drawing Interpretation", level: 95 },
      { name: "Navisworks (Clash Detection & Coordination)", level: 75 },
      { name: "Shop Drawing Generation & Approval", level: 100 },
      { name: "Model-Based Quantity Takeoff (QTO)", level: 95 }
    ],
    tools: [
      { name: "AutoCAD MEP", icon: <Ruler size={24} /> },
      { name: "Navisworks Manage", icon: <Activity size={24} /> },
      { name: "Bluebeam Revu", icon: <Lightbulb size={24} /> }
    ]
  },
  {
    category: "Codes, Standards & Compliance",
    skills: [
      { name: "ASME (B31.3, B31.1)", level: 90 },
      { name: "NFPA (Fire Safety Codes)", level: 85 },
      { name: "IPC / IMC / ASHRAE Guidelines", level: 85 },
      { name: "ISO 9001:2015 Quality Systems", level: 85 },
      { name: "Saudi Building Code (SBC)", level: 85 },
      { name: "API Standards (Piping & Mechanical)", level: 80 },
      { name: "ASTM Material Standards", level: 75 }
    ]
  },
  {
    category: "Technical Calculation & Documentation Tools",
    skills: [
      { name: "Pipe & Duct Sizing", level: 90 },
      { name: "Heat Load & Ventilation Calculation", level: 100 },
      { name: "Pump Head & Static Pressure Calculations", level: 95 },
      { name: "Solar Water Heating System Design and Collector Sizing", level: 95 },
      { name: "Design Compliance Reports", level: 95 },
      { name: "MEP Calculation Sheets", level: 95 },
      { name: "Technical Submittals & Data Sheets", level: 85 }
    ],
  },
  {
    category: "Soft Skills & Stakeholder Management",
    skills: [
      { name: "Technical Communication & Documentation", level: 90 },
      { name: "Problem Solving & Troubleshooting", level: 95 },
      { name: "Client & Consultant Management", level: 85 },
      { name: "Cross-cultural Team Collaboration", level: 85 },
      { name: "Mentoring & Peer Training", level: 85 },
      { name: "Decision-Making Under Pressure", level: 95 }
    ],
    tools: [
      { name: "Microsoft Excel (Advanced + VBA)", icon: <Database size={24} /> }
    ]
  },
];
