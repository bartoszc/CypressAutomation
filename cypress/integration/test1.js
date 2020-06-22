/// <reference types="Cypress" />

describe('My First Set Of Test', function() {

    it('My First Test Case', function () {
        // test steps
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000); //because we have no loader
        cy.get('.product:visible').should('have.length' , 4); //there are four products, we are checking if query returns correct results. We are lloking only for visible elements
        
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4);

        // Pass index to get particular item from 4 element list, search for "add to cart" and click on button
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        // each -> for iteration through product items
        cy.get('.products').find('.product').each(($el, index, $list) =>{
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click();
            }
        })

        // handle promise manually
        cy.get('brand').then(function(logoelement) {
            cy.log(logoelement.text());
        })
        //cy.log(logo.text());

    })
    it('My Second Test Case', function () {
        // test steps
                
    })
})