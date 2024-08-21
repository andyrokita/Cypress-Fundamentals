/// <reference types="cypress" />

describe("Submit sessions", () => {
  it("should navigate to submit sessions page", () => {
    cy.visit("/conference")
    cy.get("h1").contains("View Sessions").click()
    cy.url().should("include", "/sessions")

    cy.get("a").contains("Submit a session!").click()
    cy.url().should("include", "/sessions/new")

  })
})