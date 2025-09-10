const hre = require("hardhat");

async function main() {
  const whitelistedCallers = [process.env.WHITELISTED_CALLER_1, process.env.WHITELISTED_CALLER_2]; // Add more as needed
  const reactorAddress = process.env.REACTOR_ADDRESS; // The address of a deployed reactor contract
  const ownerAddress = process.env.OWNER_ADDRESS;
  const universalRouterAddress = "0x3fC91A3afd70395E496Cb845d6726B7163Ac5511"; // Mainnet, Sepolia, and other testnets
  const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3"; // Mainnet, Sepolia, and other testnets

  console.log("Deploying UniversalRouterExecutor...");
  console.log("Whitelisted callers:", whitelistedCallers);
  console.log("Reactor address:", reactorAddress);
  console.log("Owner address:", ownerAddress);
  console.log("Universal Router address:", universalRouterAddress);
  console.log("Permit2 address:", permit2Address);

  const UniversalRouterExecutor = await hre.ethers.getContractFactory("UniversalRouterExecutor");
  const universalRouterExecutor = await UniversalRouterExecutor.deploy(
    whitelistedCallers,
    reactorAddress,
    ownerAddress,
    universalRouterAddress,
    permit2Address
  );

  await universalRouterExecutor.deployed();

  console.log(
    `UniversalRouterExecutor deployed to ${universalRouterExecutor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
