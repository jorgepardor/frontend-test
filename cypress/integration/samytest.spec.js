describe('Samy test', () => {
    it('frontpage can be opened', () => {
      cy.visit('http://localhost:3000')
      cy.scrollTo(0, 500) 
      cy.contains('GREY BEACH')
    })
  })