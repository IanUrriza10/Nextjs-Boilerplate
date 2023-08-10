describe("Open Main Page", () => {
  it("Check Main Page", () => {
    cy.request("/").then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
});
