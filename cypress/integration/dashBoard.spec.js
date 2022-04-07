/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe("Menu Dashboard", function () {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
    cy.wait(5000);
    cy.get(".nav-center").find("li").contains("products").click();
  })
  it("Search product by text input, company, category", function () {
    cy.log("Search product by text input");
    cy.get('[data-cy="search"]').clear().type("5623287333");
    cy.get(".body-page").should('contain','Sorry, no products matched your search.');
    cy.wait(1000);
    cy.get('[data-cy="search"]').clear().type("#$&$#$@&%^");
    cy.get(".body-page").should('contain','Sorry, no products matched your search.');
    cy.wait(1000);
    cy.get('[data-cy="search"]').clear().type("    ");
    cy.get(".body-page").should('contain','Sorry, no products matched your search.');
    cy.wait(1000);
    cy.get('[data-cy="search"]').clear().type("modern poster");
    cy.wait(1000);
    cy.get(".body-page").should('not.contain','Sorry, no products matched your search.')
    cy.get(".body-page").find('.products-container').children().then((row) => {
      if (row.length === 1) {
        cy.expect(true).to.be.true;
      } else {
        cy.expect(true).to.be.false;
      }
    });
    //
    cy.log("Search product by company");
    cy.get('[data-cy="search"]').clear();
    cy.get('[data-cy="searh-by-category"]').contains('office').click();
    cy.get(".body-page").find('.products-container').children().then((row) => {
      if (row.length ) cy.expect(true).to.be.true;
    });
    cy.get('[data-cy="searh-by-category"]').contains('kitchen').click();
    cy.get(".body-page").find('.products-container').children().then((row) => {
      if (row.length ) cy.expect(true).to.be.true;
    });
    cy.get('[data-cy="searh-by-category"]').contains('bedroom').click();
    cy.get(".body-page").find('.products-container').children().then((row) => {
      if (row.length ) cy.expect(true).to.be.true;
    });
    cy.get('[data-cy="btn-clear"]').should('exist').click();
  });
  it("View Details product", function() {
    cy.get('[data-cy="searh-by-category"]').contains('office').click();
    cy.get(".body-page").find('.products-container').children().first().as('firstProduct');
    cy.get("@firstProduct").find("a").click();
    cy.wait(2000);
    cy.get('.page').should('contain','back to products');
  });
  it("Add product to cart", function() {
    cy.get('[data-cy="searh-by-category"]').contains('office').click();
    cy.get(".body-page").find('.products-container').children().first().as('firstProduct');
    cy.get("@firstProduct").find("a").click();
    cy.wait(2000);
    cy.get(".btn-add-to-cart").click();
    cy.wait(1000);
    cy.url().should('eq', 'http://localhost:3000/cart');
    cy.get(".amount-btn").eq(0).as('btn-minus');
    cy.get(".amount-btn").eq(1).as('btn-plus');
    cy.get('@btn-plus').click();
    cy.get('.amount').should('contain','2');
    cy.get('.btn-coutinue-shopping').click();
    cy.url().should('eq', 'http://localhost:3000/products');
    cy.get('[data-cy="btn-clear"]').click();
    cy.get(".body-page").find('.products-container').children().first().find("a").click();
    cy.get(".btn-add-to-cart").click();
    cy.url().should('eq', 'http://localhost:3000/cart');
  })
});
