describe('Rancher UI Automation', () => {
  beforeEach(() => {
      // Visit the Rancher login page
      cy.visit('https://localhost/dashboard/auth/login', {
          failOnStatusCode: false
      });
  });

  it('Logs into the Rancher web page', () => {
      // Enter login credentials (update with valid credentials)
      cy.get('input[data-testid="local-login-username"]').type('admin');
      cy.get('input[type="password"]').type('QG9cb9mNRS8H9WpS');
      
      // Click the login button
      cy.get('button[type="submit"]').click();

      // Verify successful login by checking if the dashboard is loaded
      cy.url().should('include', '/dashboard');
  });

  it('Checks if the main web page opens up', () => {
      // Ensure the login page is accessible
      cy.get('h1').should('contain', 'Welcome to Rancher');
  });

  it('Checks if the main web page title is correct', () => {
      // Verify the page title
      cy.title().should('eq', 'Rancher');
  });
});
