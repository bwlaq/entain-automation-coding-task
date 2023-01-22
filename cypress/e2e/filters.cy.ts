describe('Category Filters', () => {
  it('race-name should change when checkbox changed', () => {
    cy.visit('index.html')
    let oldRaceName:string = cy.get('div.race-name').children('p').first()
    cy.get('input.filter-checkbox').uncheck()
    cy.get('div.race-name').children('p').first().should('not.have.value', oldRaceName)
  });
 

  it('minute should be decrease after 60 seconds', () =>{
    cy.visit('index.html')
    let time: string = cy.get('div.item').children('p')
    let minutes: string = time.substring(0, time.indexOf('m'))
    cy.clock()
    cy.tick(60000)
    cy.get('div.item').children('p').split('m')[0].should('be', minutes)
  });

  it.skip('Insert test here');
  //test
});
