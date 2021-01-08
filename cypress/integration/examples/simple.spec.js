// describe('Browser actions', () => {
// 	it('should load correct url', () => {
// 		cy.visit('http://example.com/', { timeout: 10000 })
// 	})

// 	it('should check correct url', () => {
// 		cy.url().should('include', 'example.com')
// 	})

// 	it('should wait for 3 seconds', () => {
// 		cy.wait(3000)
// 	})

// 	it('should pause the execution', () => {
// 		cy.pause()
// 	})

// 	it('should check for correct element on the page', () => {
// 		cy.get('h1').should('be.visible')
// 	})
// })

describe('Browser actions', () => {
	it('should load books website', () => {
		cy.visit('https://books.toscrape.com/', { timeout: 10000 })
		cy.url().should('include', 'books')
		cy.log('Before reload')
		cy.reload()
		cy.log('After reload')
	})

	it('should click on Travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})

	it('should click on Poetry category', () => {
		cy.get('a').contains('Poetry').click()
		cy.get('h1').contains('Poetry')
	})

	it('should click on Olio book detail', () => {
		cy.get('a').contains('Olio').click()
		cy.get('h1').contains('Olio')
	})

	it('should have correct price tag', () => {
		cy.get('.price_color').contains('£23.88')
	})
})
