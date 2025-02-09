/// <reference types="Cypress" />

// Test basic InfoMapper menu navigation.
describe('Test InfoMapper Nav Bar', () => {
  var port = '4200';
  
  it('InfoMapper Home', () => {
    cy.visit('http://localhost:' + port)
    cy.url().should('match', /\/#\/content-page\/home/)
  })

  it('InfoMapper MainMenu MapLink and return to home', () => {
    cy.contains('MapLink').click()
    cy.url().should('match', /\/#\/map\/*/)
    // Wait until the map and layers are loaded.
    cy.wait(2000)
    cy.get('.home-button').click()
    cy.url().should('match', /\/#\/content-page\/home/)
  })

  it('InfoMapper MainMenu Content Page', () => {
    cy.get('.nav-link').contains('About the Project').click()
    cy.url().should('match', /\/#\/content-page\/about-the-project/)
  })

  it('InfoMapper SubMenu Line Map', () => {
    cy.get('.dropdown-menu').should('be.hidden')
    cy.get('.dropdown-menu').invoke('show').contains('Line Map').click()
    cy.get('.dropdown-menu').should('be.visible')
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Polygon Map', () => {
    cy.get('.dropdown-menu').contains('Polygon Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Point Map', () => {
    cy.get('.dropdown-menu').contains('Point Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Point Shape & Line Map', () => {
    cy.get('.dropdown-menu').contains('Point Shape & Line Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Counties Map', () => {
    cy.get('.dropdown-menu').contains('Counties Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Image Map', () => {
    cy.get('.dropdown-menu').contains('Image Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Test Map', () => {
    cy.get('.dropdown-menu').contains('Test Map').click()
    cy.url().should('match', /\/#\/map\/*/)
    cy.wait(2000)
  })

  it('InfoMapper SubMenu Content Page', () => {
    cy.get('.dropdown-menu').contains('About the Project').click()
    cy.url().should('match', /\/#\/content-page\/about-the-project/)
    cy.wait(2000)
  })

  it('InfoMapper Home', () => {
    // TODO: This might hide the dropdown menu forever.
    cy.get('.dropdown-menu').invoke('hide')
    cy.get('.dropdown-menu').should('be.hidden')
    cy.get('.home-button').click()
    cy.url().should('match', /\/#\/content-page\/home/)
  })
})
