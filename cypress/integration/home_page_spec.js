/// <reference types="Cypress" />

describe("home page", function() {
    it("loads", function() {
        cy.visit("/")
        cy.get("h1").contains("Visual Studio Live Share Guestbook")
    })

    it("loads grid", function() {
        // cy.visit("/")
        // cy.get
    })

    it("opens tweet window", function() {
        cy.visit("/")
        cy.get('#twitter-widget-0').click()
    })
})