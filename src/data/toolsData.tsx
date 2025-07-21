// import { Database } from 'lucide-react';
import navisWorksIcon from "../assets/icons8-navisworks.png";
import primaveraP6Icon from "../assets/primavera-p6.png";
import aconexIcon from "../assets/aconex.png";
import revitIcon from "../assets/revit-3d-architecture-software.png";
import autocadLogo from "../assets/autocad-seeklogo.png";
import excelLogo from "../assets/icons8-excel-48.png";
import bluebeamLogo from "../assets/bluebeam.svg";
import procoreLogo from "../assets/procore.jpeg";
import carrierHapIcon from "../assets/carrier-hap.jpeg";
import scadaIcon from "../assets/scada.png";

const autodeskIcon = "https://img.logo.dev/autodesk.com?token=pk_Bnagerc8QVSo3sHc2DJICg&size=131&retina=true";
const oracleIcon = "https://img.logo.dev/oracle.com?token=pk_Bnagerc8QVSo3sHc2DJICg&size=131&retina=true";

export const toolsGroups = [
  {
    group: "MEP Design & BIM Tools",
    tools: [
      {
        name: "AutoCAD MEP",
        icon: <img src={autocadLogo} alt="AutoCAD" style={{ width: 32, height: 32 }} />,
        description: "Drafting HVAC/plumbing/fire drawings"
      },
      {
        name: "Revit MEP",
        icon: <img src={revitIcon} alt="Revit" style={{ width: 38, height: 42 }} />,
        description: "BIM modeling and family creation"
      },
      {
        name: "Navisworks Manage",
        icon: <img src={navisWorksIcon} alt="Navisworks" style={{ width: 32, height: 32 }} />,
        description: "Clash detection and model coordination"
      },
      {
        name: "Bluebeam Revu",
        icon: <img src={bluebeamLogo} alt="Bluebeam" style={{ width: 32, height: 32 }} />,
        description: "Markup, revision tracking, and as-built documentation"
      },
      {
        name: "Autodesk Plant 3D",
        icon: <img src={autodeskIcon} alt="Autodesk Plant 3D" style={{ width: 42, height: 42 }} />,
        description: "Piping layout for industrial/O&G systems"
      }
    ]
  },
  {
    group: "Construction & Project Management",
    tools: [
      {
        name: "Primavera P6",
        icon: <img src={primaveraP6Icon} alt="Primavera P6" style={{ width: 32, height: 32 }} />,
        description: "Planning, sequencing, and activity tracking"
      },
      {
        name: "Oracle SCM",
        icon: <img src={oracleIcon} alt="Oracle SCM" style={{ width: 32, height: 32 }} />,
        description: "Procurement and supply chain integration"
      },
      {
        name: "Procore",
        icon: <img src={procoreLogo} alt="Procore" style={{ width: 32, height: 32 }} />,
        description: "Construction documentation and site tracking"
      },
      {
        name: "Aconex",
        icon: <img src={aconexIcon} alt="Aconex" style={{ width: 52, height: 42 }} />,
        description: "Digital workflow and RFI/submittal management"
      }
    ]
  },
  {
    group: "Engineering & Analysis Tools",
    tools: [
      {
        name: "Carrier HAP",
        icon: <img src={carrierHapIcon} alt="Carrier HAP" style={{ width: 32, height: 32 }} />,
        description: "Cooling load and energy modeling"
      },
      {
        name: "SCADA Systems",
        icon: <img src={scadaIcon} alt="SCADA Systems" style={{ width: 62, height: 42 }} />,
        description: "Monitoring HVAC and process controls"
      },
      {
        name: "Microsoft Excel (Advanced + VBA)",
        icon: <img src={excelLogo} alt="Microsoft Excel" style={{ width: 42, height: 42 }} />,
        description: "Costing, BOQ tracking, and QA documentation"
      }
    ]
  }
]; 