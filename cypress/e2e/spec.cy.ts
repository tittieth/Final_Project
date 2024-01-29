describe('start page', () => {
  it('Should load start page', () => {
    cy.visit('/');
  });

  it('Should show the application title', () => {
    cy.visit('/');
    cy.contains('Superklädhjälten');
  });

  it('Should submit if name is valid', () => {
    cy.visit('/');
    cy.get('input[name="name"]').type('John');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/weather');
  });

  it('Should show error message when name is empty', () => {
    cy.visit('/');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible').and('contain', 'Detta fält är obligatoriskt. Vänligen fyll i det');
  });
});

describe('weather page', () => {
  it('successfully loads', () => {
    cy.visit('/weather');
    cy.wait(4000);

    cy.get('h1').should('contain', 'Hej');
    cy.get('h3').should('have.text', 'Du behöver klä på dig:');

    cy.get('.clothing-cards-wrapper').children().should('have.length.greaterThan', 0);
  });
});
