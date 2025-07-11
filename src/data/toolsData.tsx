import { Activity, Cpu, Database, Lightbulb, Ruler, Users } from 'lucide-react';

export const toolsGroups = [
  {
    group: "MEP Design & BIM Tools",
    tools: [
      {
        name: "AutoCAD MEP",
        icon: <Ruler size={32} />,
        description: "Drafting HVAC/plumbing/fire drawings"
      },
      {
        name: "Revit MEP",
        icon: <Cpu size={32} />,
        description: "BIM modeling and family creation"
      },
      {
        name: "Navisworks Manage",
        icon: <Activity size={32} />,
        description: "Clash detection and model coordination"
      },
      {
        name: "Bluebeam Revu",
        icon: <Lightbulb size={32} />,
        description: "Markup, revision tracking, and as-built documentation"
      },
      {
        name: "Autodesk Plant 3D",
        icon: <Activity size={32} />,
        description: "Piping layout for industrial/O&G systems"
      }
    ]
  },
  {
    group: "Construction & Project Management",
    tools: [
      {
        name: "Primavera P6",
        icon: <Users size={32} />,
        description: "Planning, sequencing, and activity tracking"
      },
      {
        name: "Oracle SCM",
        icon: <Database size={32} />,
        description: "Procurement and supply chain integration"
      },
      {
        name: "Procore",
        icon: <Activity size={32} />,
        description: "Construction documentation and site tracking"
      },
      {
        name: "Aconex",
        icon: <Activity size={32} />,
        description: "Digital workflow and RFI/submittal management"
      }
    ]
  },
  {
    group: "Engineering Tools & Analysis",
    tools: [
      {
        name: "Carrier HAP",
        icon: <Lightbulb size={32} />,
        description: "Cooling load and energy modeling"
      },
      {
        name: "SCADA Systems",
        icon: <Database size={32} />,
        description: "Monitoring HVAC and process controls"
      },
      {
        name: "Microsoft Excel (Advanced + VBA)",
        icon: <Database size={32} />,
        description: "Costing, BOQ tracking, and QA documentation"
      }
    ]
  }
]; 