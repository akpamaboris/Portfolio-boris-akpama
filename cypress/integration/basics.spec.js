/// <reference types="Cypress"/>

describe("my first e2e test", () => {
  it("actually works", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(true);
  });
});

describe("mySecond test", () => {
  it("actually works", () => {
    // eslint-disable-next-line no-undef
    cy.visit("/");
    // eslint-disable-next-line no-undef
    cy.contains("React.js + TypeScript");
  });
});
