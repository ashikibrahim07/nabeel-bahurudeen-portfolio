interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  skills?: string[];
}

interface Course {
  name: string;
  provider: string;
  year: string;
}

interface EducationData {
  education: Education[];
  certifications: Certification[];
  continuedEducation: Course[];
}

export const educationData: EducationData = {
  education: [
    {
      degree: "Master of Business Administration (MBA) - Business Analytics",
      institution: "SRMIST, Tamil Nadu, India",
      period: "Jan 2024 - Present",
      description:
        "Specialized in Advanced Mechanical Design with a focus on structural analysis and thermal systems engineering.",
    },
    {
      degree: "Bachelor of Engineering (BE) - Mechanical Engineering",
      institution:
        "Alagappa Chettiar College of Engineering & Technology (ACCET), Tamil Nadu, India",
      period: "Aug 2019 - May 2023",
      description:
        "Graduated with honors (GPA: 3.8/4.0). Senior project focused on energy recovery systems in industrial HVAC applications.",
    },
    {
      degree: "HSC - Mathemetics, Physics, Chemistry, Biology",
      institution:
        "St.Joseph's Matriculation Higher Secondary School, Tamil Nadu, India",
      period: "May 2018 - Mar 2019",
      description:
        "Graduated with honors (GPA: 3.8/4.0). Senior project focused on energy recovery systems in industrial HVAC applications.",
    },
  ],

  certifications: [
    {
      name: "Machine Learning",
      issuer: "Naan Mudhalvan",
      year: "Nov - 2022",
      skills: [
        "Machine Learning",
        "Professional Practice",
        "Engineering Ethics",
      ],
    },
    {
      name: "Master Diploma in Design - Engineering Design",
      issuer: "MEE CADD",
      year: "Mar 2022 -  Dec 2022",
      skills: ["CADD", "Assembly Design", "Drawing Creation"],
    },
  ],

  continuedEducation: [
    {
      name: "Advanced Finite Element Analysis",
      provider: "ANSYS Learning Hub",
      year: "2022",
    },
    {
      name: "Sustainable Engineering Practices",
      provider: "Technical University of Munich (Online Program)",
      year: "2021",
    },
    {
      name: "Advanced HVAC Design for Industrial Facilities",
      provider: "ASHRAE Learning Institute",
      year: "2020",
    },
    {
      name: "Leadership in Engineering Teams",
      provider: "Harvard Business School Online",
      year: "2019",
    },
    {
      name: "Materials Selection for Mechanical Design",
      provider: "MIT Professional Education",
      year: "2018",
    },
  ],
};
