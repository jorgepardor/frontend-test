describe('Samy test', () => {
    it('frontpage can be opened', () => {
      cy.visit('http://localhost:3000')
      cy.get('.photofeed').scrollTo('bottom', { duration: 2000 })
      cy.get('li').eq(8).should('contain', 'forest')
    })
  })