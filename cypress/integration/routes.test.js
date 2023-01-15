import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "../../lib/features/reservations/utils";

it("displays correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});

it("displays correct heading when navigating to bands route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /bands/i }).click();
  cy.findByRole("heading", { name: /performers/i }).should("exist");
});

it("display the correct band name for the band route that existed at build time", () => {
  cy.task("db:reset").visit("/bands/1");
  cy.findByRole("heading", { name: /shamrock pete/i }).should("exist");
});

it("displays error for unknown band id", () => {
  cy.task("db:reset").visit("/bands/1234");
  cy.findByRole("heading", { name: /error: band not found/i }).should("exist");
});

it("displays the correct band name for a band route built after runtime", () => {
  const bandId = generateRandomId();
  const newBand = generateNewBand(bandId);
  cy.task("db:reset").task("addBand", newBand).visit(`/bands/${bandId}`);
  cy.findByRole("heading", { name: /avalanche of cheese/i }).should("exist");
});
