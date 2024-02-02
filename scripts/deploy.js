const hre = require("hardhat");
const fs = require("fs/promises");

async function main() {
  const BankAccount = await hre.ethers.getContractFactory("BankAccount");
  const bankAccount = await BankAccount.deploy();

  await bankAccount.deployed();
  await writeDeploymentInfo(bankAccount);
}

async function writeDeploymentInfo(contract) {
  const data = {
    contract: {
      address: contract.target,  // represents the contract address reffered to as 'target' in object
      signerAddress: contract.runner.address,  // Use 'runner.address' instead of 'signer.address' 
      abi: contract.interface.format(),
    },
  };

  const content = JSON.stringify(data, null, 2);
  await fs.writeFile("deployment.json", content, { encoding: "utf-8" });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
