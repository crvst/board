import sortList from "../sort-list";

describe("sortList", () => {
  it("should replace items by given indexes", () => {
    expect(sortList([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 2, 4, 5, 3]);
  });
});
