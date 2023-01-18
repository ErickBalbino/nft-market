const { assert } = require("console");
const { describe, it } = require("node:test");

const nftMarket = artifact.require("NftMarket");

contract("NftMarket", (accounts) => {
  let _contract = null;

  before(async () => {
    _contract = await nftMarket.deployed();

    console.log(accounts);
  });

  describe("Mint token", () => {
    it("should resolve into true value", () => {
      assert(true, "Value is NOT true");
    });
  });
});
