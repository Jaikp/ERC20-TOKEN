const { ethers } = require("hardhat");
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const balance = (await ethers.provider.getBalance(deployer.address)).toString();
    
    console.log("Account balance:", (await ethers.formatEther(balance)));
  
    
    const Token = await ethers.getContractFactory("Vyom");
    const token = await Token.deploy();
    console.log(token);
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });