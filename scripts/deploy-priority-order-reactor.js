const hre = require("hardhat");

async function main() {
  const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"; // Mainnet, Sepolia, and other testnets
  const protocolFeeOwner = process.env.PROTOCOL_FEE_OWNER || "0x0000000000000000000000000000000000000000";

  console.log("Deploying PriorityOrderReactor...");
  console.log("Permit2 address:", permit2Address);
  console.log("Protocol fee owner:", protocolFeeOwner);

  const PriorityOrderReactor = await hre.ethers.getContractFactory("PriorityOrderReactor");
  const priorityOrderReactor = await PriorityOrderReactor.deploy(permit2Address, protocolFeeOwner);

  await priorityOrderReactor.deployed();

  console.log(
    `PriorityOrderReactor deployed to ${priorityOrderReactor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
