describe('Scroll on the page', () => {
    it('should scroll up and down the page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
    })
})