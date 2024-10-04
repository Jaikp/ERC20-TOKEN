

# Vyom Token

Vyom is an ERC20 token deployed on the Holesky testnet. This project showcases the implementation of a standard ERC20 token with basic functionalities, allowing users to transfer tokens, check balances, and approve spending allowances.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contract Functions](#contract-functions)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Standard ERC20 token implementation
- Transfer tokens between accounts
- Approve and transfer tokens on behalf of another account
- Query balances and allowances

## Installation

To get started with Vyom, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vyom-token.git
   cd vyom-token
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Ensure you have [Node.js](https://nodejs.org/) and [Hardhat](https://hardhat.org/) installed.

## Deployment

### Deploying to Holesky Testnet

1. Update your `hardhat.config.js` with the Holesky network configuration:

   ```javascript
   require('@nomiclabs/hardhat-waffle');
   require('dotenv').config();

   module.exports = {
     solidity: "0.8.0",
     networks: {
       holesky: {
         url: `https://your.holesky.rpc.url`,
         accounts: [process.env.PRIVATE_KEY],
       },
     },
   };
   ```

2. Deploy the contract:

   ```bash
   npx hardhat run scripts/deploy.js --network holesky
   ```

3. Note the deployed token address in the console output.

## Usage

Once deployed, you can interact with the Vyom token contract using your preferred Ethereum wallet or a web interface that supports ERC20 tokens. 

### Example Interactions

- **Transfer Tokens**

```javascript
const vyomToken = await ethers.getContractAt("Vyom", tokenAddress);
await vyomToken.transfer("recipient_address", amount);
```

- **Check Balance**

```javascript
const balance = await vyomToken.balanceOf("your_address");
console.log(`Your balance: ${ethers.utils.formatEther(balance)}`);
```

## Contract Functions

The Vyom token contract includes the following functions:

- `transfer(address to, uint256 amount)`: Transfers `amount` tokens to `to` address.
- `approve(address spender, uint256 amount)`: Approves `spender` to spend `amount` tokens on behalf of the caller.
- `transferFrom(address from, address to, uint256 amount)`: Transfers `amount` tokens from `from` to `to`.
- `balanceOf(address owner)`: Returns the balance of `owner`.

## Testing

To run tests for the Vyom token, use the following command:

```bash
npx hardhat test
```

Ensure that you have a local Ethereum network running (or use the Hardhat network) for testing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or suggestions.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to replace placeholders (like `yourusername`, `your.holesky.rpc.url`, and `recipient_address`) with actual values. Let me know if you’d like any modifications or additions!
