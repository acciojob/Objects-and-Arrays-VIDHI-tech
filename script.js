const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team = players;
let team1 = [...players]; // Using the spread operator to create a copy of players array
let cap1 = { ...person }; // Using the spread operator to create a copy of person object

// Assigning variables to the window object
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

// Cypress test code
describe("Testing Array and Object", () => {
  beforeEach(() => {
    cy.visit("your-app-url");
  });

  it("should compare players and team arrays", () => {
    cy.window().then((window) => {
      // Comparing players and team
      cy.wrap(window.players).should("deep.equal", window.team);
    });
  });

  it("should modify players and test changes in team", () => {
    cy.window().then((window) => {
      // Modifying players and testing the changes in team
      window.players[3] = "Dhoni";
      cy.wrap(window.players).should("deep.equal", window.team);
    });
  });

  it("should modify team and test changes in players", () => {
    cy.window().then((window) => {
      // Modifying team and testing the changes in players
      window.team[3] = "Poppy";
      cy.wrap(window.team).should("deep.equal", window.players);
    });
  });
});