export interface Experience {
  period: string;
  company: string;
  position: string;
  responsibilities: string[];
}

const experience: Experience[] = [
  {
    period: "June 2023 - Present",
    company: "White Cloak Technologies, Inc.",
    position: "Software Engineer",
    responsibilities: [
      "Collaborate with the UI/UX team to develop visually appealing and functional designs.",
      "Participate in agile development processes, including sprint planning, daily stand-ups, and retrospectives.",
      "Build reusable code and components to streamline future development and updates.",
      "Collaborate with developers, designers, and stakeholders to enhance features and fix bugs.",
      "Integrate back-end REST APIs in collaboration with back-end developers for seamless functionality.",
      "Conduct daily regroup meetings with co-frontend developers to discuss decision records via GitLab wiki.",
      "Deploy applications using AWS Amplify and implement AWS CloudWatch RUM for real-time user monitoring on client sites.",
      "Review and approve merge requests, providing constructive feedback to maintain high coding standards.",
    ],
  },
  {
    period: "June 2022 - June 2023",
    company: "Ticketnation Philippines",
    position: "Full Stack Developer",
    responsibilities: [
      "Develop designs provided by the UI/UX team, transforming them into functional components.",
      "Build reusable code and components to facilitate future updates.",
      "Reshape API endpoints to meet evolving needs and integrate them into the front end.",
      "Develop the Admin Dashboard using React JS and the Partner Dashboard using Next JS.",
      "Participate in agile processes, including sprint planning, daily stand-ups, and retrospectives.",
      "Document code, processes, and best practices for future reference.",
    ],
  },
  {
    period: "September 2021 - June 2022",
    company: "Altev Technologies",
    position: "Mid Front End Developer",
    responsibilities: [
      "Transform UI/UX designs into functional, user-friendly interfaces.",
      "Create reusable code and components for efficiency and future updates.",
      "Engage in agile development practices, including sprint planning, daily stand-ups, and retrospectives.",
      "Develop websites for various clients, ensuring integration with PostgreSQL databases.",
      "Maintain code quality through reviews and adherence to coding standards.",
      "Collaborate with developers, designers, and stakeholders to enhance features and fix bugs.",
      "Consume back-end APIs and create CRUD endpoints.",
      "Investigate and resolve issues to maintain website functionality.",
      "Stay updated with React.js and Node.js trends, sharing insights with the team.",
    ],
  },
  {
    period: "September 2019 - September 2021",
    company: "Pahiram.ph",
    position: "Front End Developer",
    responsibilities: [
      "Created an inventory management system to track rented items and their availability.",
      "Developed user profiles to display portfolio information on the client side.",
      "Implemented listing features for clients' items.",
      "Designed and developed user-friendly, responsive web interfaces.",
      "Prioritized and managed bug fixes based on severity and project timelines.",
    ],
  },
];

export default experience;
