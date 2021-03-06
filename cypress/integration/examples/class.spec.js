class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(function() {
        Homepage.loadHomePage()
    })

    it('should scroll up and down the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it.skip('should do more stuff', () => {
        // do stuff
    })
})