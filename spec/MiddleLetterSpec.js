describe("getMiddle", function() {

  it("returns 'A' when given 'A'", function() {
    expect(getMiddle("A")).toEqual("A")
  })

  it("returns 'Of' when given 'Of'", function() {
    expect(getMiddle("Of")).toEqual("Of")
  })
})