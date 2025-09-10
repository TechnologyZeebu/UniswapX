const hre = require("hardhat");

async function main() {
  const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"; // Mainnet, Sepolia, and other testnets
  const protocolFeeOwner = process.env.PROTOCOL_FEE_OWNER || "0x0000000000000000000000000000000000000000";

  console.log("Deploying V3DutchOrderReactor...");
  console.log("Permit2 address:", permit2Address);
  console.log("Protocol fee owner:", protocolFeeOwner);

  const V3DutchOrderReactor = await hre.ethers.getContractFactory("V3DutchOrderReactor");
  const v3DutchOrderReactor = await V3DutchOrderReactor.deploy(permit2Address, protocolFeeOwner);

  await v3DutchOrderReactor.deployed();

  console.log(
    `V3DutchOrderReactor deployed to ${v3DutchOrderReactor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
