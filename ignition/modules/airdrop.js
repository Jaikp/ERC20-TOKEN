const addr = '0xdD1797c9F1f432Ad40aa94b9299C7dF67215B942';
const contractName = 'Vyom';

async function main() {

    const game = await hre.ethers.getContractAt(contractName, addr);

    const tx = await game.transfer('0x7F5f4F6ab637C5C41a92EC882CcE79A064B99B9c',4999999999999999995n);

    const receipt = await tx.wait();

    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });