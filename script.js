// Given array and object
// Cypress test code
describe("Testing Array and Object", () => {
  beforeEach(() => {
    cy.visit("your-app-url");
  });

  it("should compare players and team arrays", () => {
    cy.window().then((window) => {
      // Given array and object
      let players = window.players;
      let team = window.team;

      // Comparing players and team
      expect(players).to.deep.equal(team);
    });
  });

  it("should modify players and test changes in team", () => {
    cy.window().then((window) => {
      // Given array and object
      let players = window.players;
      let team = window.team;

      // Modifying players and testing the changes in team
      players[3] = "Dhoni";
      expect(players).to.deep.equal(team);
    });
  });

  it("should modify team and test changes in players", () => {
    cy.window().then((window) => {
      // Given array and object
      let players = window.players;
      let team = window.team;

      // Modifying team and testing the changes in players
      team[3] = "Poppy";
      expect(team).to.deep.equal(players);
    });
  });
});

