/// <reference types="cypress" />

describe("Submit sessions", () => {
  // Run before each test in this describe block
  beforeEach(() => {
    cy.visit("conference")
    cy.get("h1").contains("View Sessions").click()
    cy.url().should("include", "/sessions")
    cy.get("a").contains("Submit a Session!").click()
  })

  it("should navigate to submit sessions page", () => {
    cy.url().should("include", "/sessions/new")
  })

  it("should submit a session successfully", () => {
    //Filling the from with session info
    cy.contains('Title').type('New session title')
    cy.contains('Description').type('New session description')
    cy.contains('Day').type('Friday')
    cy.contains('Level').type('Introductory and overview')

    //Submit the form
    cy.get('form').submit()

    //Validate form was submitted successfully
    cy.contains('Session Submitted Successfully!')

  })
})