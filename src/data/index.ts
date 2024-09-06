const users = [
  {
    id: 1,
    internalNumber: "12345",
    firstName: "Cy",
    lastName: "Ganderton",
    department: "Littel, Schaden and Vandervort", // Company as Department
    email: "cy.ganderton@example.com", // Example email
  },
  {
    id: 2,
    internalNumber: "23456",
    firstName: "Hart",
    lastName: "Hagerty",
    department: "Zemlak, Daniel and Leannon",
    email: "hart.hagerty@example.com",
  },
  {
    id: 3,
    internalNumber: "34567",
    firstName: "Brice",
    lastName: "Swyre",
    department: "Carroll Group",
    email: "brice.swyre@example.com",
  },
  {
    id: 4,
    internalNumber: "45678",
    firstName: "Marjy",
    lastName: "Ferencz",
    department: "Rowe-Schoen",
    email: "marjy.ferencz@example.com",
  },
  {
    id: 5,
    internalNumber: "56789",
    firstName: "Yancy",
    lastName: "Tear",
    department: "Wyman-Ledner",
    email: "yancy.tear@example.com",
  },
  {
    id: 6,
    internalNumber: "67890",
    firstName: "Irma",
    lastName: "Vasilik",
    department: "Wiza, Bins and Emard",
    email: "irma.vasilik@example.com",
  },
  {
    id: 7,
    internalNumber: "78901",
    firstName: "Meghann",
    lastName: "Durtnal",
    department: "Schuster-Schimmel",
    email: "meghann.durtnal@example.com",
  },
  {
    id: 8,
    internalNumber: "89012",
    firstName: "Sammy",
    lastName: "Seston",
    department: "O'Hara, Welch and Keebler",
    email: "sammy.seston@example.com",
  },
  {
    id: 9,
    internalNumber: "90123",
    firstName: "Lesya",
    lastName: "Tinham",
    department: "Turner-Kuhlman",
    email: "lesya.tinham@example.com",
  },
  {
    id: 10,
    internalNumber: "01234",
    firstName: "Zaneta",
    lastName: "Tewkesbury",
    department: "Sauer LLC",
    email: "zaneta.tewkesbury@example.com",
  },
  {
    id: 1,
    internalNumber: "12345",
    firstName: "Cy",
    lastName: "Ganderton",
    department: "Littel, Schaden and Vandervort", // Company as Department
    email: "cy.ganderton@example.com", // Example email
  },
  {
    id: 2,
    internalNumber: "23456",
    firstName: "Hart",
    lastName: "Hagerty",
    department: "Zemlak, Daniel and Leannon",
    email: "hart.hagerty@example.com",
  },
  {
    id: 3,
    internalNumber: "34567",
    firstName: "Brice",
    lastName: "Swyre",
    department: "Carroll Group",
    email: "brice.swyre@example.com",
  },
  {
    id: 4,
    internalNumber: "45678",
    firstName: "Marjy",
    lastName: "Ferencz",
    department: "Rowe-Schoen",
    email: "marjy.ferencz@example.com",
  },
  {
    id: 5,
    internalNumber: "56789",
    firstName: "Yancy",
    lastName: "Tear",
    department: "Wyman-Ledner",
    email: "yancy.tear@example.com",
  },
  {
    id: 6,
    internalNumber: "67890",
    firstName: "Irma",
    lastName: "Vasilik",
    department: "Wiza, Bins and Emard",
    email: "irma.vasilik@example.com",
  },
  {
    id: 7,
    internalNumber: "78901",
    firstName: "Meghann",
    lastName: "Durtnal",
    department: "Schuster-Schimmel",
    email: "meghann.durtnal@example.com",
  },
  {
    id: 8,
    internalNumber: "89012",
    firstName: "Sammy",
    lastName: "Seston",
    department: "O'Hara, Welch and Keebler",
    email: "sammy.seston@example.com",
  },
  {
    id: 9,
    internalNumber: "90123",
    firstName: "Lesya",
    lastName: "Tinham",
    department: "Turner-Kuhlman",
    email: "lesya.tinham@example.com",
  },
  {
    id: 10,
    internalNumber: "01234",
    firstName: "Zaneta",
    lastName: "Tewkesbury",
    department: "Sauer LLC",
    email: "zaneta.tewkesbury@example.com",
  },
];

const articles = [
  {
    id: 1,
    title:
      "Maximizing Efficiency: How to Improve Workflow and Boost Productivity Rapidly",
    tags: ["productivity", "workflow", "optimization"],
    createdAt: "2023-08-31T10:15:30Z",
    isVerified: true,
  },
  {
    id: 2,
    title:
      "Understanding Client Needs: Strategies to Improve Communication and Satisfaction",
    tags: ["client", "communication", "strategy"],
    createdAt: "2023-08-30T14:22:45Z",
    isVerified: false,
  },
  {
    id: 3,
    title:
      "The Importance of Team Communication in Achieving Collaboration and Success",
    tags: [
      "teamwork",
      "communication",
      "collaboration",
      "client",
      "strategy",
      "productivity",
    ],
    createdAt: "2023-08-29T08:45:00Z",
    isVerified: true,
  },
  {
    id: 4,
    title:
      "Implementing New Software: Ensuring Successful Adoption and Integration Today",
    tags: ["software", "technology", "implementation"],
    createdAt: "2023-08-28T16:10:15Z",
    isVerified: false,
  },
  {
    id: 5,
    title:
      "Balancing Work and Life: Remote Work Strategies for a Healthy Productive Routine",
    tags: ["remote work", "work-life balance", "productivity"],
    createdAt: "2023-08-27T09:00:00Z",
    isVerified: true,
  },
  {
    id: 6,
    title: "Innovations in Project Management: Tools and Techniques for 2023",
    tags: ["project management", "innovation", "tools"],
    createdAt: "2023-08-26T11:00:00Z",
    isVerified: true,
  },
  {
    id: 7,
    title: "The Future of Remote Work: Trends and Predictions",
    tags: ["remote work", "trends", "future"],
    createdAt: "2023-08-25T13:15:30Z",
    isVerified: false,
  },
  {
    id: 8,
    title: "Effective Strategies for Enhancing Team Collaboration",
    tags: ["teamwork", "collaboration", "strategies"],
    createdAt: "2023-08-24T15:45:00Z",
    isVerified: true,
  },
  {
    id: 9,
    title: "How to Use Data Analytics to Drive Business Growth",
    tags: ["data analytics", "business growth", "strategy"],
    createdAt: "2023-08-23T12:30:00Z",
    isVerified: true,
  },
  {
    id: 10,
    title: "Adopting Agile Methodologies in Your Organization",
    tags: ["agile", "methodologies", "organization"],
    createdAt: "2023-08-22T08:00:00Z",
    isVerified: false,
  },
  {
    id: 11,
    title: "Enhancing User Experience with Modern Design Principles",
    tags: ["user experience", "design", "principles"],
    createdAt: "2023-08-21T09:00:00Z",
    isVerified: true,
  },
  {
    id: 12,
    title: "Best Practices for Remote Team Management",
    tags: ["remote work", "team management", "best practices"],
    createdAt: "2023-08-20T16:20:00Z",
    isVerified: true,
  },
  {
    id: 13,
    title: "How to Successfully Implement New Technologies in the Workplace",
    tags: ["technology", "implementation", "workplace"],
    createdAt: "2023-08-19T14:45:00Z",
    isVerified: false,
  },
  {
    id: 14,
    title: "The Impact of Artificial Intelligence on Modern Business Practices",
    tags: ["AI", "business", "modern practices"],
    createdAt: "2023-08-18T11:10:00Z",
    isVerified: true,
  },
  {
    id: 15,
    title: "Creating a Productive Work Environment: Tips and Strategies",
    tags: ["work environment", "productivity", "tips"],
    createdAt: "2023-08-17T09:30:00Z",
    isVerified: true,
  },
  {
    id: 16,
    title: "The Role of Leadership in Fostering Innovation",
    tags: ["leadership", "innovation", "role"],
    createdAt: "2023-08-16T10:45:00Z",
    isVerified: false,
  },
  {
    id: 17,
    title: "Managing Change in a Digital Transformation Era",
    tags: ["change management", "digital transformation", "strategy"],
    createdAt: "2023-08-15T12:00:00Z",
    isVerified: true,
  },
  {
    id: 18,
    title: "Leveraging Social Media for Business Growth",
    tags: ["social media", "business growth", "strategy"],
    createdAt: "2023-08-14T13:15:00Z",
    isVerified: true,
  },
  {
    id: 19,
    title: "Trends in Digital Marketing for 2023",
    tags: ["digital marketing", "trends", "2023"],
    createdAt: "2023-08-13T14:30:00Z",
    isVerified: false,
  },
  {
    id: 20,
    title: "How to Build a Strong Online Presence for Your Brand",
    tags: ["online presence", "branding", "strategy"],
    createdAt: "2023-08-12T15:00:00Z",
    isVerified: true,
  },
];

const headers = ["Id", "First Name", "Last Name", "Internal Number", "Email"];
const articleHeaders = ["Tytuł", "Tagi", "Zweryfikowany", "Data dodania"];



const selectUsersList = [
  { label: "John Doe", value: "john_doe" },
  { label: "Jane Smith", value: "jane_smith" },
  { label: "Alice Johnson", value: "alice_johnson" },
  { label: "Bob Brown", value: "bob_brown" },
  { label: "Charlie White", value: "charlie_white" }
];

const data = { users, headers, articles, articleHeaders,selectUsersList };

export default data;
