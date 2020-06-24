/// <reference types="Cypress" />

describe('My Second Set Of Test', function() {

    it('My Next Test Case', function () {
        // test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // for check boxes and validate if is selected. And is for another should()
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

        // uncheck checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // select more than one
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // static dropdowns (select from list) select and assert
        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic dropdowns (you have to provide text value)
        cy.get('#autocomplete').type('ind')

        // iterathe through elements
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India")
            {
                $el.click();
            }
        })

        // check if value is in displayed
        cy.get('#autocomplete').should('have.value', 'India');

        // working with invisible elements
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radiobuttons
        cy.get('[value="radio2"]').check().should('be.checked');
    })
})