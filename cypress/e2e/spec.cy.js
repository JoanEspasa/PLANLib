/*
Parses the content of the reference file to make sure that the
content is properly formatted.
 */

const fs = require("fs");
const yaml = require("js-yaml");

let data;

describe("homepage tests spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/PLANLib/");
  });

  it("tests that the initial theme is dark", () => {
    cy.get("html").should("have.attr", "data-bs-theme", "dark");
  });

  it("should switch the theme from dark to light when pressed", () => {
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "light");
  });

  it("should switch the theme from dark to light and back to dark", () => {
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "light");
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "dark");
  });

  it("the title of the main block should be the same as the index.md", () => {
    try {
      const fileText = fs.readFileSync("../../index.md", "utf-8");
      data = yaml.loadAll(fileText)[0];
      cy.get("#library-name").should("contain", data["library-name"]);
    } catch (error) {
      console.error("Error reading or parsing the YAML file:", error.message);
    }
  });
});
