const hre = require("hardhat");

async function main() {
  const whitelistedCallers = [process.env.WHITELISTED_CALLER_1, process.env.WHITELISTED_CALLER_2]; // Add more as needed
  const reactorAddress = process.env.REACTOR_ADDRESS; // The address of a deployed reactor contract
  const ownerAddress = process.env.OWNER_ADDRESS;
  const swapRouter02Address = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"; // Mainnet, Sepolia, and other testnets

  console.log("Deploying MultiFillerSwapRouter02Executor...");
  console.log("Whitelisted callers:", whitelistedCallers);
  console.log("Reactor address:", reactorAddress);
  console.log("Owner address:", ownerAddress);
  console.log("SwapRouter02 address:", swapRouter02Address);

  const MultiFillerSwapRouter02Executor = await hre.ethers.getContractFactory("MultiFillerSwapRouter02Executor");
  const multiFillerSwapRouter02Executor = await MultiFillerSwapRouter02Executor.deploy(
    whitelistedCallers,
    reactorAddress,
    ownerAddress,
    swapRouter02Address
  );

  await multiFillerSwapRouter02Executor.deployed();

  console.log(
    `MultiFillerSwapRouter02Executor deployed to ${multiFillerSwapRouter02Executor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
