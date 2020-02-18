test("module.exports 和  exports 是相等的", () => {
  expect(module.exports === exports).toBe(true);
});
