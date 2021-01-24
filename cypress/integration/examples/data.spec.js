describe('Read / Write data to json / text file', () => {
  it('should write data into json', () => {
    cy.writeFile('log.json', { name: "Mike", age: 25 })  
  })
  it('should write data to text file', () => {
      cy.writeFile('log.txt', "Hello World")
  })

  it('should read and verify data from json file', () => {
      cy.readFile('log.json').its('age').should('eq', 25)  
  })

  it('should read and verify data from text file', () => {
      cy.readFile('log.txt').should('eq', 'Hello World')
  })

  it('should read and verify browser document content', () => {
      cy.visit('https://www.example.com')
      cy.wait(2000)
      cy.document().its('contentType').should('eq', 'text/html')

      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })
})