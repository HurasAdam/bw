const users = [
  {
    id: 1,
    internalNumber: "12345",
    firstName: "Cy",
    lastName: "Ganderton",
    department: "Littel, Schaden and Vandervort", // Company as Department
    email: "cy.ganderton@example.com" // Example email
  },
  {
    id: 2,
    internalNumber: "23456",
    firstName: "Hart",
    lastName: "Hagerty",
    department: "Zemlak, Daniel and Leannon",
    email: "hart.hagerty@example.com"
  },
  {
    id: 3,
    internalNumber: "34567",
    firstName: "Brice",
    lastName: "Swyre",
    department: "Carroll Group",
    email: "brice.swyre@example.com"
  },
  {
    id: 4,
    internalNumber: "45678",
    firstName: "Marjy",
    lastName: "Ferencz",
    department: "Rowe-Schoen",
    email: "marjy.ferencz@example.com"
  },
  {
    id: 5,
    internalNumber: "56789",
    firstName: "Yancy",
    lastName: "Tear",
    department: "Wyman-Ledner",
    email: "yancy.tear@example.com"
  },
  {
    id: 6,
    internalNumber: "67890",
    firstName: "Irma",
    lastName: "Vasilik",
    department: "Wiza, Bins and Emard",
    email: "irma.vasilik@example.com"
  },
  {
    id: 7,
    internalNumber: "78901",
    firstName: "Meghann",
    lastName: "Durtnal",
    department: "Schuster-Schimmel",
    email: "meghann.durtnal@example.com"
  },
  {
    id: 8,
    internalNumber: "89012",
    firstName: "Sammy",
    lastName: "Seston",
    department: "O'Hara, Welch and Keebler",
    email: "sammy.seston@example.com"
  },
  {
    id: 9,
    internalNumber: "90123",
    firstName: "Lesya",
    lastName: "Tinham",
    department: "Turner-Kuhlman",
    email: "lesya.tinham@example.com"
  },
  {
    id: 10,
    internalNumber: "01234",
    firstName: "Zaneta",
    lastName: "Tewkesbury",
    department: "Sauer LLC",
    email: "zaneta.tewkesbury@example.com"
  },
  // Additional users...
];


  const headers = ['First Name', 'Last Name', 'Internal Number', 'Email'];


  const data={users,headers}

  export default data;