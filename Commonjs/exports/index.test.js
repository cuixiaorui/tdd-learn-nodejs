describe("导入", () => {
  describe("使用 exports 来导入", () => {
    test("从 obj.js 文件内导入一个对象,拥有一个字段为 name 的值", () => {
      const obj = require("./obj");
      expect(obj.name).toBe("xiaoming");
    });
    test("不可以直接导出一个 function", () => {
      const fn = require("./func");
      expect(() => {
        expect(fn()).toBe("hello,world");
      }).toThrow("fn is not a function");
      // 因为fn 是一个对象
      expect(typeof fn === "object").toBe(true);
    });

  });
});
