import sortMultiple from "../sort-multiple";

/* tslint:disable */
const __STORE_INIT__ = {
  E7Xheom7UecMQ_QCIAZpk: {
    name: "Катеринославська губернія (1802—1925)",
    cards: [{
      id: "S3iAtspvLIOjobSAFQJ7J",
      value: "Катеринославський повіт",
    }, {
      id: "R3iAtspvLIOjobSAFQJ7J",
      value: "Олександрівський повіт",
    }],
  },
  DfvcGctjJ0EbjIkrgD110: {
    name: "List of islands of Greece",
    cards: [{
      id: "ofyQO6kctVja7AOc7tXU5",
      value: "Crete",
    }],
  },
  ebbDxmhIvHCx9p5x8QVx3: { name: "Nihil", cards: [] },
};
const __STORE_EXPECTED__ = {
  DfvcGctjJ0EbjIkrgD110: {
    cards: [{
      id: "ofyQO6kctVja7AOc7tXU5",
      value: "Crete",
    }],
    name: "List of islands of Greece",
  },
  E7Xheom7UecMQ_QCIAZpk: {
    cards: [{
      id: "S3iAtspvLIOjobSAFQJ7J",
      value: "Катеринославський повіт",
    }, {
      id: "R3iAtspvLIOjobSAFQJ7J",
      value: "Олександрівський повіт",
    }],
    name: "Катеринославська губернія (1802—1925)",
  },
  ebbDxmhIvHCx9p5x8QVx3: { cards: [undefined], name: "Nihil" },
};
const __DEST__ = {
  droppableId: "ebbDxmhIvHCx9p5x8QVx3",
  index: 0,
};
const __SOURCE__ = {
  droppableId: "ebbDxmhIvHCx9p5x8QVx3",
  index: 0,
};
/* tslint:enable */

describe("sortMultiple", () => {
  it("should replace items by given indexes & IDs", () => {
    expect(sortMultiple(__STORE_INIT__, __DEST__, __SOURCE__)).toEqual(__STORE_EXPECTED__);
  });
});
