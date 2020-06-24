/// <reference types="Cypress" />

describe('My Second Set Of Test', function() {

    it('My Next Test Case', function () {
        // test steps
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000); //because we have no loader
        
        //aliases (variables)
        cy.get('.products').as('productLocator');

        // each -> for iteration through product items
        cy.get('@productLocator').find('.product').each(($el, index, $list) =>{
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click();
            }
        })
        
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})