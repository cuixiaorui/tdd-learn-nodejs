describe("导入", () => {
  describe("使用 module.exports 来导入", () => {
    test("从 obj.js 文件内导入一个对象,拥有一个字段为 name 的值", () => {
      const obj = require("./obj");
      expect(obj.name).toBe("xiaoming");
    });

    test("从 func.js 文件内导入一个函数，返回值为 hello,world", () => {
      const fn = require("./func");
      expect(fn()).toBe("hello,world");
    });


    test('从 variable 导出一个变量', () => {
        const variable = require("./variable")
        expect(variable).toBe("hello,world")
    })

  });
  
});
