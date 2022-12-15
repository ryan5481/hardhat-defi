/**
 * AAVE protocol treats every asset as an ERC20 token for ease of operation.
 * Hence, we will convert our ETH into Wrapped ETH(WETH) which is an ERC20 token.
 * This code deposits ETH into WETH contract from our account to convert into WETH.
 *
 */
const { getNamedAccounts, network, ethers } = require("hardhat")

const AMOUNT = ethers.utils.parseEther("0.01")

async function getWeth() {
    // const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/")
    // const signer = await provider.getSigner()
    const { deployer } = await getNamedAccounts()
    // call the 'deposit()' function on the Weth contract.
    // We need abi✅ and contract address to interact with a contract. //0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    // We can use the contract to get the abi, but we can also use the interface.
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
    // .010000000000000000 WETH
}

module.exports = { getWeth, AMOUNT }
