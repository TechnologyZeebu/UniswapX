const hre = require("hardhat");

async function main() {
  const whitelistedCaller = process.env.WHITELISTED_CALLER;
  const reactorAddress = process.env.REACTOR_ADDRESS; // The address of a deployed reactor contract
  const ownerAddress = process.env.OWNER_ADDRESS;
  const swapRouter02Address = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"; // Mainnet, Sepolia, and other testnets

  console.log("Deploying SwapRouter02Executor...");
  console.log("Whitelisted caller:", whitelistedCaller);
  console.log("Reactor address:", reactorAddress);
  console.log("Owner address:", ownerAddress);
  console.log("SwapRouter02 address:", swapRouter02Address);

  const SwapRouter02Executor = await hre.ethers.getContractFactory("SwapRouter02Executor");
  const swapRouter02Executor = await SwapRouter02Executor.deploy(
    whitelistedCaller,
    reactorAddress,
    ownerAddress,
    swapRouter02Address
  );

  await swapRouter02Executor.deployed();

  console.log(
    `SwapRouter02Executor deployed to ${swapRouter02Executor.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
