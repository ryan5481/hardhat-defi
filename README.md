### HARDHAT DEFI / AAVE BORROW AND LEND

## Introduction

Wrapped ETH (WETH) is a way to tokanize blockchain native (Layer 1) token which in our case is ETH.
Aave protocol is a decentralized finance(defi) platform for borrowing and lending assets. It oly uses ERC20 token for convenience. Interests can be earned by lending and should be paid for borrowing assets like a bank.

This code allows interaction with the Aave lending contract to give acess to lend and borrow assets.
In order for the lending contract to interact with the user's tokens, the assets needs to be approved by the owner. Then, the assets can be deposited.
Once, deposited the DAI price can be attained in order to calculate the amount the user can borrow based on the amount of collateral the user deposited. The Chainlink oracle contract is used to get the current price of ETH in DAI (pegged to USD).
Finally, the borrowed DAI can be repaid after another approval.
Ethereum mainnet is forked as opposed to using the Mian Blockchian.

## Requirements

### [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Run `git --version` to check if you installed it right.

### [Nodejs](https://nodejs.org/en/)

Run `node --version` to check if you installed it right.

### [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) instead of `npm`

Run `yarn --version` to check if you installed it right.
You might need to install it with npm.

## Quickstart

```
git clone https://github.com/ryan5481/hardhat-defi
cd hardhat-erc20-fcc
yarn
```

## Usage

### Run:

```
yarn hardhat run scripts/aaveBorrow.js
```

### Deploy:

```
yarn hardhat deploy
```

## Running on a testnet or mainnet

### Setup environment variabltes

You'll want to set your `GOERLI_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example.`

`PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
You can learn how to export it [here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)
`GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?r=DM1MDcxOTE0MDA0N)
`Get testnet ETH`
Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

### Run

```
yarn hardhat run scripts/aaveBorrow.js --network goerli
```
