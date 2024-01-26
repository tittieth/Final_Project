describe('start page', () => {
  it('Should load start page', () => {
    cy.visit('http://localhost:5174/');
  });

  it('Should show the application title', () => {
    cy.visit('http://localhost:5174/');
    cy.contains('Superklädhjälten');
  });

  it('Should submit if name is valid', () => {
    cy.visit('http://localhost:5174/');
    cy.get('input[name="name"]').type('John');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/weather');
  });

  it('Should show error message when name is empty', () => {
    cy.visit('http://localhost:5174/');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible').and('contain', 'Detta fält är obligatoriskt. Vänligen fyll i det');
  });
});
