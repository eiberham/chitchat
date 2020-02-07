describe('Login', function() {
    it('Successfully loads', function() {
      cy.visit('/')
    });

    it('Redirects to sign up page wonderfully', function(){
      cy.get('.sign-up__link > a').click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/signup')
      })
    })

    it('Logs in like a champ', function() {
      cy.visit('/')
      cy.get('#email').type('cedenoabraham@gmail.com')
      cy.get('#password').type('acedeno')
      cy.get('button').click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/chat')
      })
    });

    it('Ok this one is useless', function() {
      expect(true).to.equal(true)
    })
})