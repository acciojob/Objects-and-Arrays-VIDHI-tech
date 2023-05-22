// Test Case 1
body: "() => {
  cy.window().then(window => {
    cy.wrap(window.players).as('originalPlayers');
    cy.wrap(window.team).should('deep.equal', window.players);

    cy.get('@originalPlayers').then(originalPlayers => {
      const updatedPlayers = [...originalPlayers, 'Dhoni'];
      cy.wrap(window.players).should('deep.equal', updatedPlayers);

      window.team.push('Poppy');
      cy.wrap(window.team).should('deep.equal', window.players);
    });
  });
}"

// Test Case 2
body: "() => {
  cy.window().then(window => {
    cy.wrap(window.players).then(players => {
      cy.wrap(players).should('deep.equal', window.team1);

      const poppedPlayer = window.players.pop();
      cy.wrap(window.players).should('not.deep.equal', window.team1);
      window.players.push('Poppy');
      cy.wrap(window.players).should('not.deep.equal', window.team1);
    });
  });
}"

// Test Case 3
body: "() => {
  cy.window().then(window => {
    cy.wrap(window.person.name).should('eq', window.cap1.name);
    window.person.name = 'Accio Job';
    cy.wrap(window.person.name).should('not.eq', window.cap1.name);
    window.cap1.age = 25;
    cy.wrap(window.cap1.age).should('not.eq', window.person.age);
  });
}"
