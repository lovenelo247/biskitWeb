


it('test reading files', function() {
    cy.fixture('example.json').then((data)=> {
    cy.log(data.name)
    cy.log(data.email)
    cy.log(data.body)


} )
})