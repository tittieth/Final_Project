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

describe('good job page', () => {
  it('successfully loads', () => {
    cy.visit('/goodjob');
    cy.get('h1').should('contain', 'Bra jobbat');
    cy.get('.star-wrapper').children().should('have.length', 4);
  });
});

describe('contact form', () => {
  it('successfully loads', () => {
    cy.visit('/contact');
  });
  it('Should show title', () => {
    cy.visit('/contact');
    cy.get('h1').should('have.text', 'Kontakt');
  });
  it('Should submit if form is valid', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="email"]').type('johndoe@email.com');
    cy.get('textarea[name="message"]').type('Test message');
    cy.get('button[type="submit"]').click();
    // cy.wait(2000)
    // cy.get('.confirmation-modal').children().should('have.text', 'Tack för ditt mejl! Vi kommer att höra av oss.')
  });
});
