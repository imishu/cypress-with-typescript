/// <reference types = 'cypress' />

export class CypressHelper{
    navigate(url: string){
        cy.visit(url)
    }

    typeInTextBox(element_selector: string, text: string){
        cy.get(element_selector).clear().type(text)
    }

    clickOnElement(element_selector: string){
        cy.get(element_selector).click()
        cy.wait(3000) // TODO: bad practice, this needs to improve
    }

    validateUrlIsEqual(expectedUrl: string){
        cy.url().should('eq', expectedUrl)
    }

    validateElementContainsString(element_selector: string, partialString: string){
        cy.get(element_selector).should('contain', partialString)
    }

    validateElementValue(element_selector: string, expectedValue: string){
        cy.get(element_selector).should('have.value', expectedValue)
    }

    validateElementDoesNotHaveValue(element_selector: string){
        cy.get(element_selector).should('not.have.value')
    }
}
