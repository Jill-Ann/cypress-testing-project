describe('Browser actions', () => {
	it('should load webpage', () => {
		cy.visit('https://frontend-5i4olyndpa-ew.a.run.app/')
		cy.url().should('include', 'frontend')
	})

	it('should click on About page', () => {
		cy.get('a').contains('About').click()
		cy.get('h1').contains('Coming soon')
	})
})
