describe("Buffer", () => {
  describe("Buffer.from()", () => {
    test('使用 from 创建包含字符串 "buffer" 的 UTF-8 字节的新 Buffer。 ', () => {
      const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
      expect(buf.toString()).toBe("buffer");
    });

    test("给定对应的字符串，返回二进制 ", () => {
      const buf = Buffer.from("nihao");
      const newBuf = Buffer.from([0x6e, 0x69, 0x68, 0x61, 0x6f]);
      expect(buf.equals(newBuf)).toBe(true);
    });
  });
  describe("Buffer.alloc()", () => {
    test("创建一个长度为 5 默认填充值都为 0x0 的 buffer ", () => {
      const buf = Buffer.alloc(5);
      expect(buf.length).toBe(5);

      // 填充值应该都为 0
      const newBuf = Buffer.from([0x0, 0x0, 0x0, 0x0, 0x0]);
      expect(buf.equals(newBuf)).toBe(true);
    });

    test("创建默认填充值都为 ’a‘ 的 buffer ", () => {
      const buf = Buffer.alloc(5, "a");
      // a 的 二进制表示为 0x61
      const newBuf = Buffer.from([0x61, 0x61, 0x61, 0x61, 0x61]);
      expect(buf.equals(newBuf)).toBe(true);
    });
  });

  describe("Buffer.compare", () => {
    test("buffer 之间的比较  ", () => {
      const buf1 = Buffer.from("1234")
      const buf2 = Buffer.from("2345")

      const list = [buf2,buf1]
      expect([buf1,buf2]).toEqual(list.sort(Buffer.compare))
    });
  });
});
