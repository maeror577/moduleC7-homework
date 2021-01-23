import { reverseString } from "../utils/reverseString.js";

describe("Tests for reverseString() function", () => {
  it("'' should be ''", () => {
    expect(reverseString("")).toBe("");
  });

  it("'test' should be 'tset'", () => {
    expect(reverseString("test")).toBe("tset");
  });

  it("'neveroddoreven' should be 'neveroddoreven'", () => {
    expect(reverseString("neveroddoreven")).toBe("neveroddoreven");
  });

  it("'There will be spaces.' should be '.secaps eb lliw erehT'", () => {
    expect(reverseString("There will be spaces.")).
      toBe(".secaps eb lliw erehT");
  });

  it("'\\backslashes\\' should be '\\sehsalskcab\\'", () => {
    expect(reverseString("\\backslashes\\")).toBe("\\sehsalskcab\\");
  });

  it("'Это UTF-16 или нет?' should be '?тен или 61-FTU отЭ'", () => {
    expect(reverseString("Это UTF-16 или нет?")).toBe("?тен или 61-FTU отЭ");
  });
});
