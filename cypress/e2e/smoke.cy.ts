describe('smoke', () => {
  it('should handle normal app flow', () => {
    cy.visit('http://localhost:3000');
    
    cy.findByRole('heading', {
      name: 'Welcome to this Awesome React App',
    }).should('exist');
  });
});
