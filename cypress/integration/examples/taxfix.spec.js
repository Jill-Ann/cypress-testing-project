describe('Browser actions', () => {
	it('should load website', () => {
		cy.visit('https://taxfix.de/en/')
		cy.url().should('include', 'taxfix')
	})

	it('should click on about', () => {
		cy.get('a').contains('About Taxfix').click()
		cy.get('h1').contains('About us')
	})
})

describe('Fill in form', () => {
	it('should load app', () => {
		cy.visit('https://app.taxfix.de/')
		cy.url().should('include', 'taxfix')
		cy.clearCookies({ log: true })
	})

	it('should select year 2020', () => {
		cy.get('.Dropdown-arrow-wrapper').click()
		cy.get('div').contains('2020')
	})

	it('should click on start', () => {
		cy.get('p').contains('Start your tax return').click()
	})

	it('should click on single button', () => {
		cy.get('p').contains('Single')
	})

	it('should select no to living outside germany', () => {
		cy.get('.kUzaJ').contains('No').click()
	})
})
