require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    holesky: {
      url: `https://eth-holesky.g.alchemy.com/v2/${process.env.ALCHEMY_URL}`,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  },
};
