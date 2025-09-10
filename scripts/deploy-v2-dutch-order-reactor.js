const hre = require("hardhat");

async function main() {
  const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"; // Mainnet, Sepolia, and other testnets
  const protocolFeeOwner = process.env.PROTOCOL_FEE_OWNER || "0x0000000000000000000000000000000000000000";

  console.log("Deploying V2DutchOrderReactor...");
  console.log("Permit2 address:", permit2Address);
  console.log("Protocol fee owner:", protocolFeeOwner);

  const V2DutchOrderReactor = await hre.ethers.getContractFactory("V2DutchOrderReactor");
  const v2DutchOrderReactor = await V2DutchOrderReactor.deploy(permit2Address, protocolFeeOwner);

  await v2DutchOrderReactor.deployed();

  console.log(
    `V2DutchOrderReactor deployed to ${v2DutchOrderReactor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
