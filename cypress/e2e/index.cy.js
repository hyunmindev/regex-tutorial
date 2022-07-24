describe('질문 리스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('질문이 0개 초과인가?', () => {
    const ZERO = 0;
    cy.get('a').its('length').should('greaterThan', ZERO);
  });
});
