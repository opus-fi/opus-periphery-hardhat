import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';

dotenv.config();

async function main() {
  const UniswapV2Router02 = await ethers.getContractFactory(
    'UniswapV2Router02',
  );
  const uniswapV2Router02 = await UniswapV2Router02.deploy(
    process.env.FACTORY || '',
    process.env.WETH || '',
  );

  await uniswapV2Router02.deployed();

  console.log('UniswapV2Router02 deployed to: %s', uniswapV2Router02.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
