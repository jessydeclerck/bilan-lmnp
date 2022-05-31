describe("renders the homepage", () => {
    beforeEach(() => cy.visit("/"));
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("#root").should("exist");
    });

    it("Les mensualités sont calculées correctement", () => {
        cy.get('#taux-emprunt-input').type("{selectall}").type('1.88');
        cy.get('#montant-emprunt-input').type("{selectall}").type('100000');
        cy.get('#duree-emprunt-input > .css-yafthl-MuiSlider-markLabel').click();
        cy.get('#mensualites').should('have.value', '418.04');
        cy.get('#duree-emprunt-input > [aria-hidden="true"][data-index="0"]').click();
        cy.get('#mensualites').should('have.value', '638.00');
    })
})