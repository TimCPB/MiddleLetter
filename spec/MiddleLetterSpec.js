describe("getMiddle", function() {

  it("returns 'A' when given 'A'", function() {
    expect(getMiddle("A")).toEqual("A")
  })

  it("returns 'Of' when given 'Of'", function() {
    expect(getMiddle("Of")).toEqual("Of")
  })

  it("returns 'a' when given 'cat'", function() {
    expect(getMiddle("cat")).toEqual("a")
  })

  it("returns 'es' when given 'test'", function() {
    expect(getMiddle("test")).toEqual("es")
  })
});