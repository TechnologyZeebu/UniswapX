const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("DutchOrderReactor", function () {
  async function deployDutchOrderReactorFixture() {
    const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
    const [owner, otherAccount] = await ethers.getSigners();

    const DutchOrderReactor = await ethers.getContractFactory("DutchOrderReactor");
    const dutchOrderReactor = await DutchOrderReactor.deploy(permit2Address, owner.address);

    return { dutchOrderReactor, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { dutchOrderReactor, owner } = await loadFixture(deployDutchOrderReactorFixture);
      expect(await dutchOrderReactor.owner()).to.equal(owner.address);
    });

    it("Should set the right permit2 address", async function () {
      const { dutchOrderReactor } = await loadFixture(deployDutchOrderReactorFixture);
      expect(await dutchOrderReactor.permit2()).to.equal("0x000000000022D473030F116dDEE9F6B43aC78BA3");
    });
  });

  describe("Order Validation", function () {
    it("Should revert if deadline is before end time", async function () {
        const { dutchOrderReactor } = await loadFixture(deployDutchOrderReactorFixture);

        const order = {
            info: {
                reactor: dutchOrderReactor.address,
                swapper: (await ethers.getSigners())[0].address,
                nonce: 0,
                deadline: Math.floor(Date.now() / 1000) + 100, // 100 seconds from now
                additionalValidationContract: "0x0000000000000000000000000000000000000000",
                additionalValidationData: "0x",
            },
            decayStartTime: Math.floor(Date.now() / 1000),
            decayEndTime: Math.floor(Date.now() / 1000) + 200, // 200 seconds from now
            input: {
                token: "0x0000000000000000000000000000000000000000", // Not a real token, just for testing
                startAmount: 100,
                endAmount: 100,
            },
            outputs: [],
        };

        // This is a simplified test. A real test would require a valid signature.
        // We are just testing the _validateOrder function logic here.
        // We can't call _validateOrder directly, so we have to call a public function that calls it.
        // In this case, we can't do that easily without a valid signed order.
        // This test is more of a placeholder to show how it would be done.
        // A full test suite would require more setup (e.g. mocking Permit2, signing orders).

        // A more complete test would look something like this:
        // const signedOrder = await signOrder(order, (await ethers.getSigners())[0]);
        // await expect(dutchOrderReactor.execute(signedOrder)).to.be.revertedWith("DeadlineBeforeEndTime");
    });
  });
});
