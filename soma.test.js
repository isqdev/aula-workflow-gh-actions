function sum(a, b) {
    return a + b
}

test("Should some two numbers", () => {
    expect(sum(1,2)).toBe(15)
})