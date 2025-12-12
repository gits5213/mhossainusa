export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Testing Tools",
    items: [
      "HP ALM",
      "HP Quality Center /Test Director",
      "Quick Test Professional",
      "UFT",
      "Jira",
      "Selenium webdriver",
      "Selenium IDE",
      "Watir Cucumber",
      "Ruby",
    ],
  },
  {
    category: "Bug Tracking Tools",
    items: ["Quality Center (ALM)/Test Director", "Bugzilla", "Jira"],
  },
  {
    category: "Operating Systems",
    items: [
      "UNIX/LINUX",
      "Windows NT 4.0",
      "Windows 95/98/2000/XP/2003",
    ],
  },
  {
    category: "Languages",
    items: [
      "C++",
      "C",
      "PL /SQL",
      "Visual Basic",
      "Java",
      "Java Script",
      "VB Script",
    ],
  },
  {
    category: "RDBMS",
    items: [
      "Oracle",
      "Microsoft Access",
      "SQL server",
      "DB2",
      "Sybase",
      "TOAD",
    ],
  },
  {
    category: "GUI Tools",
    items: ["Toad", "SQL Developer", "Oracle Express 10/11g"],
  },
  {
    category: "Browsers",
    items: [
      "Netscape",
      "Internet Explorer",
      "Mozilla Firefox",
    ],
  },
  {
    category: "Project Management Tools",
    items: [
      "MS Word",
      "MS Excel",
      "MS Power Point",
      "MS Image Composer",
    ],
  },
];

